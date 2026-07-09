import { createTheme } from '@mui/material/styles';
import { customTheme } from './customTheme';
// 可选
import { themeOverrides } from './themeOverrides';

// 合并配置（如果使用单独的overrides文件）
const mergedTheme = createTheme(customTheme, themeOverrides);

export default mergedTheme;
