import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Route } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Notification from "../components/layout/Notification";
import Community from "../containers/Community";
import MedicalCenters from "../containers/MedicalCenters";
import { Box, Container, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import PortOfEntry from "../containers/PortOfEntry";
import SideBarCard from "../components/layout/SideBar";

// import Api from '../api';

class App extends Component {
  render() {
    const { languageStore, notificationStore } = this.props;
    const { lang, langCode } = languageStore;

    const onLanguageSelect = (code) => {
      languageStore.setLanguage(code);
    };

    const renderNotificationContainer = () => {
      const { open, message, onClose, durationMs } = notificationStore;

      if (!open) {
        return null;
      }

      return (
        <Notification
          open={open}
          message={message}
          onClose={onClose}
          durationMs={durationMs}
        />
      );
    }

    return (
      <Box>
        {renderNotificationContainer()}
        <Header
          lang={lang}
          langCode={langCode}
          onLanguageSelect={onLanguageSelect}
        />
        <Box mx="auto" pb={5}>
          <Container>
            <Box my={3}>
            <Typography style={{display: 'inline'}} variant="body2">{lang.t('form.label')}:</Typography>&nbsp;&nbsp;
            <Link to={"/community-form"}>
              <Typography variant="body2" style={{display: 'inline'}} >
                {lang.t("form.community")}
              </Typography>
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to={"/medical-form"}>
              <Typography variant="body2" style={{display: 'inline'}} >
                {lang.t("form.medicalCenters")}
              </Typography>
            </Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to={"/port-of-entry-form"}>
              <Typography variant="body2" style={{display: 'inline'}} >
                {lang.t("form.portOfEntry")}
              </Typography>
            </Link>
            </Box>
          </Container>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} md={9}>
                <Route
                  exact
                  path="/"
                  component={observer((props) => (
                    <Community {...props} />
                  ))}
                />
                <Route
                  exact
                  path="/community-form"
                  component={observer((props) => (
                    <Community {...props} />
                  ))}
                />
                <Route
                  exact
                  path="/medical-form"
                  component={observer((props) => (
                    <MedicalCenters {...props} />
                  ))}
                />
                <Route
                  exact
                  path="/port-of-entry-form"
                  component={observer((props) => (
                    <PortOfEntry {...props} />
                  ))}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <SideBarCard
                  lang={lang}
                  langCode={langCode}
                  onLanguageSelect={onLanguageSelect}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Footer lang={lang} />
      </Box>
    );
  }
}

export default inject("languageStore", "notificationStore")(observer(App));
