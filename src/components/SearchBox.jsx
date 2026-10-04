import { Box, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox({ city, setCity, onSearch, loading }) {
  return (
    <Box className="search-box">
      <TextField
        fullWidth
        label="Search a city"
        placeholder="Try 'Dehradun' or 'Paris'"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") onSearch();
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        inputProps={{ "aria-label": "City name" }}
      />
      <Button
        variant="contained"
        onClick={onSearch}
        disabled={loading}
        startIcon={<SearchIcon />}
      >
        {loading ? "Loading" : "Search"}
      </Button>
    </Box>
  );
}

export default SearchBox;
