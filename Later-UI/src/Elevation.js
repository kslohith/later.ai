import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 100,
  lineHeight: '60px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Elevation() {
  return (
    <Grid container>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={12} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                borderRadius: 15,
                bgcolor: 'background.default',
                display: 'flex-width',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 20,
              }}
            >
              {[0, 1, 2, 3, 4].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {`elevation=${elevation}`}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
      <Divider orientation="vertical" />
    </Grid>
  );
}