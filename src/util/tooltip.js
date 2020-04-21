import React from "react";
import { Tooltip, Box } from "@material-ui/core";

const tooltip = (title, component) => {
  return (
    <Box display="inline-block" style={{ cursor: "pointer" }}>
      <Tooltip title={title} placement="bottom" enterDelay={300}>
        {component}
      </Tooltip>
    </Box>
  );
};

export default tooltip;
