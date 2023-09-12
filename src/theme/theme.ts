import { createTheme } from '@mui/material';

const theme = {
  primary: {
    main: '#428aea',
  },
  secondary: {
    main: '#fed14f',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
};

export const muiTheme = createTheme({
  palette: theme,
  components: {
    MuiModal: {
      defaultProps: {
        container: document.getElementById('root'),
      },
    },
    MuiDialog: {
      defaultProps: {
        container: document.getElementById('root'),
      },
    },
  },
});
