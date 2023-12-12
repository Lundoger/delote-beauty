// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

let hamburgerHeader = document.querySelector('.header__icon');
let hamburgerMenu = document.querySelector('.burger__icon');
let menu = document.querySelector('.burger');

const toggleMenu = () => {
	document.documentElement.classList.toggle('menu-open');
	document.documentElement.classList.toggle('lock');
}

hamburgerHeader.addEventListener('click', e => {
	e.preventDefault();

	toggleMenu();
});
hamburgerMenu.addEventListener('click', e => {
	e.preventDefault();

	toggleMenu();
});

document.addEventListener('click', e => {
	const withinMenu = e.composedPath().includes(menu);
	const withinBtnHeader = e.composedPath().includes(hamburgerHeader);
	const withinBtnMenu = e.composedPath().includes(hamburgerMenu);
	if ( ! withinMenu && !withinBtnHeader && !withinBtnMenu ) {
		document.documentElement.classList.remove('menu-open');
		document.documentElement.classList.remove('lock');
	};
});


const mainBtnScroll = document.querySelector('.main-screen__button');

if (mainBtnScroll) {
	const sectionHeight = document.querySelector('.main-screen').clientHeight;
	mainBtnScroll.addEventListener("click", bottomScroll);
	function bottomScroll () {
		window.scrollTo({
			top: sectionHeight,
			left: 0,
			behavior: "smooth",
		})
	}
}

function initMap() {
	const pos = { lat: 49.992941895797244, lng: 36.23119081484707 };
	const map = new google.maps.Map(
	  document.getElementById("map"),
	  {
		zoom: 12,
		center: pos,
		styles: [
			{ elementType: "geometry", stylers: [{ color: "#242f3e" }] },
			{ elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
			{ elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
			{
			  featureType: "administrative.locality",
			  elementType: "labels.text.fill",
			  stylers: [{ color: "#d59563" }],
			},
			{
			  featureType: "poi",
			  elementType: "labels.text.fill",
			  stylers: [{ color: "#d59563" }],
			},
			{
			  featureType: "poi.park",
			  elementType: "geometry",
			  stylers: [{ color: "#263c3f" }],
			},
			{
			  featureType: "poi.park",
			  elementType: "labels.text.fill",
			  stylers: [{ color: "#6b9a76" }],
			},
			{
			  featureType: "road",
			  elementType: "geometry",
			  stylers: [{ color: "#38414e" }],
			},
			{
			  featureType: "road",
			  elementType: "geometry.stroke",
			  stylers: [{ color: "#212a37" }],
			},
			{
			  featureType: "road",
			  elementType: "labels.text.fill",
			  stylers: [{ color: "#9ca5b3" }],
			},
			{
			  featureType: "road.highway",
			  elementType: "geometry",
			  stylers: [{ color: "#746855" }],
			},
			{
			  featureType: "road.highway",
			  elementType: "geometry.stroke",
			  stylers: [{ color: "#1f2835" }],
			},
			{
			  featureType: "road.highway",
			  elementType: "labels.text.fill",
			  stylers: [{ color: "#f3d19c" }],
			},
			{
			  featureType: "transit",
			  elementType: "geometry",
			  stylers: [{ color: "#2f3948" }],
			},
			{
			  featureType: "transit.station",
			  elementType: "labels.text.fill",
			  stylers: [{ color: "#d59563" }],
			},
			{
			  featureType: "water",
			  elementType: "geometry",
			  stylers: [{ color: "#17263c" }],
			},
			{
			  featureType: "water",
			  elementType: "labels.text.fill",
			  stylers: [{ color: "#515c6d" }],
			},
			{
			  featureType: "water",
			  elementType: "labels.text.stroke",
			  stylers: [{ color: "#17263c" }],
			},
		  ],
	  }
	);
  
	const marker = new google.maps.Marker({
	  position: pos,
	  map: map,
	});
}
window.initMap = initMap;