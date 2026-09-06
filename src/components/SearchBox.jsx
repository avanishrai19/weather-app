import { Box, TextField, Button, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox({ city, setCity, onSearch }) {
    return (
        <Box
            sx={{
                display: "flex",
                gap: 2,
                width: "100%",
                maxWidth: 650,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 5,
                p: 1.2,
                backdropFilter: "blur(10px)",
                boxShadow: "0 18px 40px rgba(11, 16, 32, 0.35)",
            }}
        >
            <TextField
                fullWidth
                variant="outlined"
                label="Enter city"
                placeholder="e.g. Dehradun"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") onSearch();
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: 3,
                        color: "#fff",
                        "& fieldset": {
                            borderColor: "rgba(255,255,255,0.15)",
                        },
                        "&:hover fieldset": {
                            borderColor: "rgba(142, 197, 255, 0.8)",
                        },
                        "&.Mui-focused fieldset": {
                            borderColor: "#8ec5ff",
                        },
                    },
                    "& .MuiInputLabel-root": {
                        color: "rgba(255,255,255,0.9)",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                        color: "#dbeafe",
                    },
                    "& .MuiInputBase-input": {
                        color: "#f8fbff",
                        WebkitTextFillColor: "#f8fbff",
                        backgroundColor: "transparent !important",
                    },
                    "& .MuiInputBase-input:-webkit-autofill": {
                        WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.72) inset !important",
                        WebkitTextFillColor: "#f8fbff !important",
                        caretColor: "#ffffff",
                        borderRadius: "inherit",
                        backgroundColor: "rgba(15, 23, 42, 0.72) !important",
                    },
                    "& .MuiInputBase-input:-webkit-autofill:hover": {
                        WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.72) inset !important",
                        WebkitTextFillColor: "#f8fbff !important",
                        backgroundColor: "rgba(15, 23, 42, 0.72) !important",
                    },
                    "& .MuiInputBase-input:-webkit-autofill:focus": {
                        WebkitBoxShadow: "0 0 0 100px rgba(15, 23, 42, 0.72) inset !important",
                        WebkitTextFillColor: "#f8fbff !important",
                        backgroundColor: "rgba(15, 23, 42, 0.72) !important",
                    },
                    "& .MuiInputBase-input:-internal-autofill-selected": {
                        backgroundColor: "rgba(15, 23, 42, 0.72) !important",
                        color: "#f8fbff !important",
                    },
                    "& .MuiInputBase-input::placeholder": {
                        color: "rgba(255,255,255,0.6)",
                        opacity: 1,
                    },
                }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: "#8ec5ff" }} />
                        </InputAdornment>
                    ),
                }}
            />

            <Button
                type="button"
                variant="contained"
                onMouseDown={(e) => e.preventDefault()}
                onClick={onSearch}
                sx={{
                    borderRadius: 3,
                    px: 3,
                    fontWeight: 700,
                    background: "linear-gradient(135deg, #60a5fa, #7c3aed)",
                    boxShadow: "0 12px 24px rgba(96, 165, 250, 0.35)",
                    transition: "all 0.2s ease-in-out",
                    transform: "translateY(0)",
                    "&:hover": {
                        background: "linear-gradient(135deg, #3b82f6, #6d28d9)",
                        boxShadow: "0 16px 28px rgba(124, 58, 237, 0.45)",
                        transform: "translateY(-1px)",
                    },
                    "&:active": {
                        transform: "translateY(0)",
                        boxShadow: "0 8px 18px rgba(96, 165, 250, 0.24)",
                    },
                }}
            >
                Search
            </Button>
        </Box>
    );
}

export default SearchBox;