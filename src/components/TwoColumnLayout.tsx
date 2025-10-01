import { Grid, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));

export default function TwoColumnLayout() {
  return (
    <Grid container spacing={0.1}>
      <Grid size={{ xs: 6, md: 3 }}>
        <Item>xs=6 md=8</Item>
      </Grid>
      <Grid size={{ xs: 6, md: 9 }}>
        <Item>xs=6 md=4</Item>
      </Grid>
    </Grid>
  );
}
