import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import { useSelector } from "react-redux";


export default function Search() {

  const [searchText, setSearchText] = useState("");
  const { newsList } = useSelector((state) => state.news);

  console.log(searchText);
  return (
    <Stack spacing={3} sx={{ width: 300, backgroundColor:'orange', borderRadius: 5 }}>  
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={newsList.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Title"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            value={searchText}
            onChange={(e) =>setSearchText(e.target.value)}
          />
        )}
      />
    </Stack>
  );
}

