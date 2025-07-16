import "@/libs/theme/globals.css";
import { ThemeProvider } from '@mui/material';
import muiTheme from '../src/libs/theme/custom-theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ReactQueryProvider } from "@/libs/providers/ReactQueryProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider theme={muiTheme}>
      <CssBaseline />
       <ReactQueryProvider>
        {children}
        </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
