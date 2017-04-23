import TweenMax from 'gsap';
import moment from 'moment';
import template from './test.pug';
import css from './style.css';
import sass from './test.sass';
TweenMax.to('h1',2,{x:'100'});
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
//console.log(date);
