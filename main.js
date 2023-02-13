var i = 0;
var images = [];
var time = 3000;

images[0] = 'img/background1.jpg';
images [1] =  'img/background2.jpg';
images [2] =  'img/background3.jpg';
images [3] =  'img/background4.jpg';
images [4] =   'img/background5.jpg';

function changeImg(){
	document.slide.src = images[i];

	if(i < images.length - 1){
     i++;
	} else {
		i =0
	}
	setTimeout("changeImg()", time);
}

window.onload = changeImg