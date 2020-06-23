const background= document.querySelector('.background');
const headline= document.querySelector('.headline');
const logo= document.querySelector('#logo');
const MySite= document.querySelector('.MySite');
const slider= document.querySelector('.slider');

const t1= new TimelineMax();
t1.fromTo(background,1,{height:'0%'},{ height:'90%',ease : Power2.easeInOut})
.fromTo(background, 1.2 ,{width: '100%'},{width : '80%' , ease : Power2.easeInOut})
.fromTo(slider, 1.2 , {x : "-100%"} , {x : '0%' , ease : Power2.easeInOut});
