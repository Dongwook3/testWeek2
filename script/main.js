(function() {
	// the images (all of them), the heading, the subheading, the season text, appliedClass
	//var theImages = document.querySelectorAll('.image-holder'),
	//	theHeading = document.querySelector('.heading'),
	//	theSubhead = document.querySelector('.main-copy h2'),
	//	theSeasonText = document.querySelector('.main-copy p'),
	//	appliedClass;

	var $theImages = $('.image-holder'),
		$theHeading = $('.heading'),
		$theSubhead = $('.main-copy h2'),
		$theSeasonText = $('.main-copy p'),
		appliedClass;

	function changeElements() {
		//debugger;
		//theHeading.classList.remove(appliedClass);
		//theSubhead.classList.remove(appliedClass);
		$theHeading.removeClass(appliedClass);
		$theSubhead.removeClass(appliedClass);

		appliedClass = this.id;

		//theHeading.classList.add(this.id);
		//theSubhead.classList.add(this.id);
		$theHeading.addClass(this.id);
		$theSubhead.addClass(this.id);
		
		//theSubhead.firstChild.nodeValue = dynamicContent[this.id].headline;
		//theSeasonText.firstChild.nodeValue = dynamicContent[this.id].text;
		$theSubhead.text(dynamicContent[event.currentTarget.id].headline);
		$theSeasonText.text(dynamicContent[event.currentTarget.id].text);
	}

	$theImages.click(function() {
		//console.log('clicked!');
		changeElements();
	});

	//[].forEach.call(theImages, function(image) {
	//	image.addEventListener('click', changeElements, true);
	//}); 

	//$theSubhead.firstChild.nodeValue = dynamicContent['spring'].headline;
	//$theSeasonText.firstChild.nodeValue = dynamicContent['spring'].text;
	//$theHeading.classList.add('spring');
	$theSubhead.text(dynamicContent['spring'].headline);
	$theSeasonText.text(dynamicContent['spring'].text);
	$theHeading.addClass('spring');
})();