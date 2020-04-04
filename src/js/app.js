import $ from 'jquery'

import Modal from './moduls/Modal'
import MobileMenu from './moduls/MobileMenu'
import StickyHeader from './moduls/StickyHeader'
// import Header from './moduls/Header'


const modal = new Modal();
const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();
// const header = new Header();


$(document).ready(
  $(".menu__item").click('.menu__link', function (e) {
    $(".menu__item").removeClass("menu__item--current");
    $(this).addClass("menu__item--current");
  })
);