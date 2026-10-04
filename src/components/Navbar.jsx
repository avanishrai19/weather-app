import { Box, Button, Container } from "@mui/material";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";

function Navbar({ unit, onUnitChange }) {
  return (
    <Box component="header" className="topbar">
      <Container maxWidth="lg" className="nav-inner">
        <a className="brand" href="#top" aria-label="Skycast home">
          <span className="brand-mark">
            <WbSunnyRoundedIcon />
          </span>
          <span>
            skycast<span className="brand-dot">.</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#today">Today</a>
          <a href="#details">Details</a>
          <a href="#forecast">5-day forecast</a>
        </nav>

        <div className="unit-toggle" aria-label="Temperature unit">
          <Button aria-pressed={unit === "C"} onClick={() => onUnitChange("C")}>
            °C
          </Button>
          <Button aria-pressed={unit === "F"} onClick={() => onUnitChange("F")}>
            °F
          </Button>
        </div>
      </Container>
    </Box>
  );
}

export default Navbar;

