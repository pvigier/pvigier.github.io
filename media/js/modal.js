var images = document.getElementsByClassName("modal-image");

function create_opening_event(modal) {
	return function () {
	    modal.style.display = "block";
	};
};

function create_closing_event(modal) {
	return function () {
		modal.style.display = 'none'; 
	};
};

for(var i = 0; i < images.length; i++) {
	var image = images[i];
	console.log(image);
	// Modal
	var modal = document.createElement("div");
	modal.classList.add("modal");
	image.parentNode.parentNode.insertBefore(modal, image.parentNode.nextSibling);
	// Close button
	var button = document.createElement("span");
	button.classList.add("modal-close");
	button.onclick = create_closing_event(modal);
	button.innerHTML = "&times;";
	modal.appendChild(button);
	// Modal image
	var modalImage = document.createElement("img");
	modalImage.src = image.src;
	modalImage.classList.add("modal-content");
	modal.appendChild(modalImage);
	// Caption text
	var caption = document.createElement("div");
	caption.innerHTML = image.alt;
	caption.classList.add("modal-caption");
	modal.appendChild(caption);
	// Event
	image.onclick = create_opening_event(modal);
}