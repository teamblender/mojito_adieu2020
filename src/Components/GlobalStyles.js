import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import GmarketSansBold from "../Fonts/GmarketSansBold.ttf";
import GmarketSansMedium from "../Fonts/GmarketSansMedium.ttf";
import GmarketSansLight from "../Fonts/GmarketSansMedium.ttf";

const globalStyles = createGlobalStyle`
${reset};

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px #000 inset;
}

@font-face {
  font-family: "GmarketSans";
  font-weight: 500;
  src: url(${GmarketSansBold}) format('truetype')
}

@font-face {
  font-family: "GmarketSans";
  font-weight: 300;
  src: url(${GmarketSansMedium}) format('truetype')
}

img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}

::selection {
   background: rgba(255, 255, 255, 1);
}


a{
    text-decoration:none;
    color:inherit
}

*{
    box-sizing:border-box;
}


button { 
    outline: none;
    border: none;
}

input {
    border: none;
    outline: none;
}

textarea {
    border:none;
    outline:none;
    resize: none;
    &:focus {
        border:none;
        outline:none;
    }
}


body{
    font-size: 14px;
    overflow-x: hidden;
    color: rgba(255,255,255,1);
    background-color: rgba(18,18,18,1.0);
}

.dD{
    -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

/* width */
::-webkit-scrollbar {
  -webkit-appearance: none;
    width: 0;
    height: 0;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: rgba(255,255,255,0);
}

@keyframes wiggle {
    0% { transform: rotate(0deg); }
   80% { transform: rotate(0deg); }
   85% { transform: rotate(5deg); }
   95% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}
@keyframes colorchange {
  0% {
    background-color: #EB4C36;
  }
  10% {
    background-color: #FF7684;
  }
  20% {
    background-color: #FF7E00;
  }
  30% {
    background-color: #FFB902;
  }
  40% {
    background-color: #EDD360;
  }
  50% {
    background-color: #3D69F7;
  }
  60% {
    background-color: #34A7C2;
  }
  70% {
    background-color: #AD51A1;
  }
  80% {
    background-color: #3FCC83;
  }
  90% {
    background-color: #57B077;
  }
  100% {
    background-color: #928882;
  }
}

@keyframes falling {
    from {
        transform: translateY(-240px);
}
    to {
        transform : translateY(0);
    }
}

@keyframes fill1 {
    from {
        height: 0%
}
    to {
        height: 85%
    }
}



`;

export default globalStyles;
