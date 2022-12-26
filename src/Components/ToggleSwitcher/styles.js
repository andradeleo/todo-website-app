import styled from "styled-components";


export const Wrapper = styled.div`
  /* The switch - the box around the slider */
.switch {
 font-size: 17px;
 position: relative;
 display: inline-block;
 width: 3.2em;
 height: 1.7em;
}

/* Hide default HTML checkbox */
.switch input {
 opacity: 0;
 width: 0;
 height: 0;
}

/* The slider */
.slider {
 position: absolute;
 cursor: pointer;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 background-color: rgba(154, 82, 255, 0.3);;
 transition: .4s;
 border-radius: 30px;
}

.slider:before {
 position: absolute;
 content: "";
 height: 1.2em;
 width: 1.2em;
 border-radius: 20px;
 left: 0.3em;
 bottom: 0.3em;
 background-color: white;
 transition: .4s;
}

input:checked + .slider {
 background-color: ${({theme }) => theme.primaryColor};
}

input:focus + .slider {
 box-shadow: 0 0 1px ${({theme }) => theme.primaryColor};
}

input:checked + .slider:before {
 transform: translateX(1.2em);
}
`;