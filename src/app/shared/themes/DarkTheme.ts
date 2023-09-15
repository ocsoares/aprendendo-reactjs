import { createTheme } from "@mui/material";
import { purple, teal, deepPurple, red } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    // Cores PRIMÁRIAS são as Cores PRINCIPAIS da Aplicação, como Botões !!
    primary: {
      main: purple["900"],
      dark: purple["800"],
      light: purple["500"],
      // Para fazer CONTRASTE do TEXTO com a cor PRIMÁRIA !!!
      contrastText: deepPurple["200"],
    },
    // Cores SECUNDÁRIAS são usadas em, por exemplo, Auto-Complete !!
    secondary: {
      main: teal["900"],
      dark: teal["800"],
      light: teal["500"],
      contrastText: deepPurple["200"],
    },
    background: {
      default: red["600"],
      paper: "#FFFFFF", // Usado como Cores para CONTEÚDOS, como Cartões e Painéis !!
    },
  },
});