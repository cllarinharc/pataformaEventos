import * as React from "react";

import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";

import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

export default function Events() {
  return (
    <>
        <Typography level="h2" component="h1">
            Eventos
        </Typography>
        <Button
            color="primary"
            startDecorator={<AddCircleOutlineRoundedIcon />}
            size="sm"
        >
            Incluir novo evento
        </Button>
    </>
  );
}
