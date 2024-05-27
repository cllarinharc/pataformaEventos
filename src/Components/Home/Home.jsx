import { useState } from "react";

import Typography from "@mui/joy/Typography";

const Home = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados de Home:", { username, password });
  };

  return (
    <>
        <Typography level="h2" component="h1">
            Home
        </Typography>
    </>
  );
};

export default Home;