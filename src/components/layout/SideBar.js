import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    boxShadow: 'none',
    border: '1px solid #ccc',
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    verticalAlign: "top",
    fontSize: "10px"
  },
}));
const SideBarCard = ({ user, onLanguageSelect, lang, langCode }) => {
  const classes = useStyles();
  //TODO: this could be done better
  const fields = {
    label: lang.t("note.lable"),
    notes: [
      lang.t("note.note1"),
      lang.t("note.note2"),
      lang.t("note.note3"),
      lang.t("note.note4"),
    ],
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {fields.label}
        </Typography>
        <List>
          {fields.notes.map((el, index) => {
            return (
              <ListItem key={index} disableGutters>
                <ListItemAvatar style={{ flexShrink: 1 }}>
                  <Avatar style={{ background: '#fff', margin: 0 }}>
                    <CheckIcon style={{ fill: 'green', width: 20 }}/>
                  </Avatar>
                </ListItemAvatar>
                <ListItemText className="sidebarText">{el}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </CardContent>
    </Card>
  );
};
export default SideBarCard;
