import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

export default function Search({ searchText, onChange, handleSearch }) {
  
  return (
    <Stack spacing={3} sx={{display: 'flex', width: 500, backgroundColor: "lightgrey" }}>
      <TextField value={searchText} onChange={() =>onChange(searchText)} />
      <Button onClick={handleSearch}>SEARCH</Button>
    </Stack>
  );
}
