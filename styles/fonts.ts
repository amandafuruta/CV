import { createGlobalStyle } from 'styled-components'

export const FontStyle = createGlobalStyle` 

@font-face {
    font-family: 'PlayfairDisplay';
    src: url('/fonts/PlayfairDisplay-Regular.ttf') format('truetype');
    font-weight: 400;
}

@font-face {
    font-family: 'PlayfairDisplay';
    src: url('/fonts/PlayfairDisplay-Medium.ttf') format('truetype');
    font-weight: 500;
}

@font-face {
    font-family: 'PlayfairDisplay';
    src: url('/fonts/PlayfairDisplay-Bold.ttf') format('truetype');
    font-weight: 700;
}

@font-face {
    font-family: 'SourceSansPro';
    src: url('/fonts/SourceSansPro-Light.ttf') format('truetype');
    font-weight: 300;
}

@font-face {
    font-family: 'SourceSansPro';
    src: url('/fonts/SourceSansPro-Regular.ttf') format('truetype');
    font-weight: 400;
}

@font-face {
    font-family: 'SourceSansPro';
    src: url('/fonts/SourceSansPro-SemiBold.ttf') format('truetype');
    font-weight: 600;
}

body {
    font-family: 'PlayfairDisplay' ;
    overflow-x: hidden !important;
}

p, li{
    font-family: 'SourceSansPro';
}

h1,
h2,
h3,
h4,
h5,
p,
span,
strong,
time,
address,
i,
a,
b,
label,
li,
td {
    text-rendering: optimizeLegibility !important;
}


[class*="PlayfairDisplay"] {
    font-family: PlayfairDisplay;
}

[class*= "title"]{
    font-size: 50px;
}

[class*= "title2"]{
    font-size: 43px;
}

[class*= "title3"]{
    font-size: 40px;
}

[class*= "p"]{
    font-size: 16px;
}

[class*="-bold"] {
    font-weight: 700;
}

[class*="-semibold"] {
    font-weight: 600;
}

[class*="-medium"] {
    font-weight: 500;
}

[class*="-regular"] {
    font-weight: 400;
}

[class*="-light"] {
    font-weight: 300;
}








` 