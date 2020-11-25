var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 5000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}

function changeInfo(number){
	
	if(number==1){
		document.getElementById("info").innerHTML = "<h2>Umang Collection</h2>Umang Collection is basically a crowd funding arranged by NSS, BITS Pilani to sponsor the education of poor and meritorious students in Pilani. The main aim of this entire collection is <b>EDUCATION FOR ALL</b>";
		return;
	}
	if(number==2){
		document.getElementById("info").innerHTML = "<h2>Junoon' 20</h2>Junoon is a two day sport extravaganza held annually for the specially abled by NSS BITS Pilani. It witnesses a participation of over 200 students from various NGOs spread across the country.";
		return;
	}
	if(number==3){
		document.getElementById("info").innerHTML = "<h2>Blood Donation Camp</h2>Blood donation camp was organised in collaboration with the Indian Red Cross Society, a total of 808 units of blood were collected.";
		return;
	}
	if(number==4){
		document.getElementById("info").innerHTML = "<h2>Shop for a Smile</h2>Each year a Stall is set up during BITS Pilani’s cultural festival, Oasis. The stall aims to promote various NGOs that work tirelessly for social welfare. At our stall, a variety of products made by rural women and the specially abled, procured by the NGOs are kept on sale.";
		return;
	}

}