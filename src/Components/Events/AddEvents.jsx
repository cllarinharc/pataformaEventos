import * as React from "react";

import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet'; 
import Box from '@mui/joy/Box';

function createData(nome, data, local, programacao, maisInformacoes) {
  return { nome, data, local, programacao, maisInformacoes };
}

const rows = [];

export default function AddEvents() {
  return (
    <>
        <Typography level="h2" component="h1">
            Novo Evento 
        </Typography>

        <Sheet variant="soft" sx={{ pt: 1, borderRadius: 'sm' }}>
     
        </Sheet>
    </>
  );
}
