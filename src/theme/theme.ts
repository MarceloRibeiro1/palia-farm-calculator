import { createTheme } from '@mui/material';

const theme = {
  primary: {
    main: '#428aea',
    light: '#8cb8f2',
    dark: '#155ebf',
  },
  secondary: {
    main: '#fed14f',
    light: '#fede80',
    dark: '#d39d01',
  },
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
