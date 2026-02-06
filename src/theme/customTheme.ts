import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    primary: {
      // 主色
      main: '#fff',
      contrastText: '#fff',
      // dark: 这将从 palette.primary.main 中进行计算，
      // dark: '#bebebe',
    },
    secondary: {
      // 次色
      main: '#f7f7f7',
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          // 修改聚焦状态下的边框颜色
          '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            // 聚焦框颜色
            borderColor: '#fff',
            borderWidth: '2px',
          },
          // 可选：修改下拉箭头的颜色
          '& .MuiSvgIcon-root': {
            color: '#666666',
          },
        },
      },
    },
    // 其他组件覆盖（如Button、Input等）
    MuiButton: {
      styleOverrides: {
        root: {
          // 统一按钮圆角
          borderRadius: '4px',
        },
      },
    },
  },
  // 全局样式覆盖（如字体、间距等）
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});
