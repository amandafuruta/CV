import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

html {
  scroll-behavior: smooth;
}


:root {
   --primary-color: #fdf1ec;
    --secondary-color: #92555a;
    --error: #A91919;
}

*:focus {
    outline-color: var(--primary-color) !important;
}


a,
button {
    cursor: pointer;
    text-decoration: none !important;
    transition: 0.25s;

    svg,
    img {
        transition: 0.25s;
    }
}

a:hover,
button:hover {
    transition: 0.25s;

    svg,
    img {
        transition: 0.25s;
    }
}
.react-select__single-value {
    transform: translateY(-25%) !important;
}
a::after,
a::before {
    transition: 0.3s;
}

a:hover::after,
a:hover::before {
    transition: 0.3s;
}

ol,
ul {
    list-style: none !important;
    padding-left: 0 !important;
    margin-bottom: 0 !important;
}



`