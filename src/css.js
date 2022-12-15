let string = `.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before, .skin *::after{box-sizing: border-box;}
.bingDwenDwenContainer {
    position: relative;
    z-index: 2;
    width: 400px;
    height: 456px;
    left: 150px;
    top: 10px;
    border: 10px solid black;
    background: white;
    border-radius: 360px 360px 240px 240px;

}

.ear {
    width: 71px;
    height: 99px;
    background-color: black;
    border-radius: 40px 49px 0 89px;
    transform: rotate(49deg);   
    top: 0px;
    position: absolute;
}
.ears {
    width: 71px;
    height: 103px;
    background-color: black;
    left: 316px;
    border-radius: 49px 40px 89px 0px;
    transform: rotate(309deg);
    top: 0px;
    position: absolute;
    
}

.leftHand {
    top: 250px;
    left: -75px;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-color: black;
    position: absolute;
}

.leftHand::before {
  content: '';
  left: 5px;
  top: -53px;
  width: 0;
  height: 0;
  border: 35px solid;
  border-color: transparent black black transparent;
  position: absolute;
}

.rightHand {
    top: 120px;
    left: 323px;
    width: 64px;
    height: 126px;
    transform: rotate(43deg);
    transform-origin: bottom right;
    position: absolute;
    background-color: black;
    border-radius: 40px 49px 10px 89px;
}

.rightHand::before {
  content: '';
  left: 30px;
  top: 30px;
  width: 14px;
  height: 25px;
  border-radius: 8px 8px 0 16px;
  transform: rotate(19deg);
  background-color: red;
  position: absolute;
}

.rightHand::after {
  content: '';
  left: 23px;
  top: 34px;
  width: 14px;
  height: 25px;
  border-radius: 8px 8px 16px 0;
  transform: rotate(-71deg);
  background-color: red;
  position: absolute;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(8deg);
    }
    66%{
        transform: rotate(-8deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.rightHand:hover{
    /* transform-origin: bottom 10%; */
    animation: wave 300ms infinite linear;
}

.feet {
  width: 82px;
  height: 75px;
  background-color: black;
  top: 435px;
  left: 95px;
  border-bottom: 25px solid black;
  border-radius: 20px 50% 10px 30px;
  position: absolute;
}

.feet::before {
    content: '';
    width: 82px;
    height: 75px;
    background-color:black;
    left: 130px;
    border-bottom: 25px solid black;
    border-radius: 50% 20px 30px 10px;
    position: absolute;
  }


.face {
  width: 287px;
  height: 230px;
  border-top-left-radius: 50% 60%;
  border-top-right-radius: 50% 60%;
  border-bottom-left-radius: 41% 42%;
  border-bottom-right-radius: 41% 42%;
  border: 5px solid #006BB0;
  box-shadow: 
    0 0 0 5px yellow,
    0 0 0 10px black,
    0 0 0 15px green,
    0 0 0 20px red;
  left: 52px;
  top: 60px;
  position: absolute;
}


.eyes {
  width: 70px;
  height: 100px;
  background-color: black;
  left: 100px;
  top: 100px;
  border-radius: 50%;
  transform: rotate(35deg);
  position: absolute;
}

.eyes::before {
  content: '';
  width: 70px;
  height: 100px;
  background-color: black;
  left: 110px;
  top: -75px;
  border-radius: 50%;
  transform: rotate(-70deg);
  position: absolute;
}

.nose {
  width: 25px;
  height: 17px;
  background-color: black;
  position: absolute;
  top: 160px;
  left: 189px;
  border-radius: 5px 5px 50% 50%;
}
.nose:hover{
    transform-origin: 50% 5%;
    animation: wave 300ms infinite linear;
}

.mouth {
  width: 50px;
  height: 8px;
  border: 3px solid black;
  background-color: red;
  position: absolute;
  top: 190px;
  left: 173px;
  border-radius: 300px/75px;
}


.iris {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  border: 5px solid white;
  position: absolute;
  left: 131px;
  top: 131px;
  box-shadow: 0 0 0 0 gray;
}

.iris::before {
  content: '';
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  border: 5px solid white;
  position: absolute;
  left: 110px;
  top: -5px;
  box-shadow: 0 0 0 -5px cyan;
}

.highlight {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  left: 138px;
  top: 139px;
  position: absolute;
  box-shadow: 120px 0 0 0 white;
}
`;
export default string;
