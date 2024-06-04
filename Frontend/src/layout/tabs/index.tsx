import { Link, useLocation } from "react-router-dom";
import { Button, Stack } from "@mui/material";

export default function MenuButtons() {
  const { pathname } = useLocation();

  return (
    <Stack spacing={2} direction="row">
      <Button to="/" component={Link} variant={`${pathname === "/" ? "contained" : "outlined"}`}>
        Page 1
      </Button>

      <Button
        to="/page-two"
        component={Link}
        variant={`${pathname === "/page-two" ? "contained" : "outlined"}`}
      >
        Page 2
      </Button>
    </Stack>
  );
}
