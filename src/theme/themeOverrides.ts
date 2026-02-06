import type { ThemeOptions } from '@mui/material/styles';

export const themeOverrides: ThemeOptions = {
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            // 输入框背景色
            backgroundColor: '#e5e5e5',
          },
        },
      },
    },
  },
};
