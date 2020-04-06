import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import { Box, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { green, red, grey, teal, amber } from "@material-ui/core/colors";

const useStyles = makeStyles({
  card: {
    minWidth: 300,
    backgroundColor: green[700],
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
});
const SideBarCard = ({ user, onLanguageSelect, lang, langCode }) => {
  console.log(lang);
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
  console.log(fields);

  return (
    <Box p={3} m={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {fields.label}
          </Typography>
          {fields.notes.map((el, index) => {
            console.log(el);
            return (
              <ListItem key={index}>
                <CheckIcon />
                <ListItemText>{el}</ListItemText>
              </ListItem>
            );
          })}
        </CardContent>
      </Card>
    </Box>
  );
};
export default SideBarCard;
