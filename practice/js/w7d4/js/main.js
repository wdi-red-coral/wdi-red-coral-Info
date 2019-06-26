// When the #new form is submitted, add the new item
// $('#new').on('submit', addNewItem);
$(document).ready(function(){

$("#new").on("submit",addImage);


// Functions for add image
function addImage(event){
		// Prevent page reload
		event.preventDefault();

		// Get the text the user entered
		let value = $("#newItem").val();

		// Select the ul by id use Jquery and assgin the 'ul' element to variable called list
		let list = $("#list-of-image");

		//Try to fetch the data from 'giphy' API, and set the method as 'get' by using axios
		axios({
			method:"get", 
			url:"http://api.giphy.com/v1/gifs/search?q=" + value + "+cat&api_key=Xudk5142l5iraCXsaFRtYZM9z1oq15XU&limit=1"
		})
		.then((response) => { // .then wants a function to run if the request is succesfu 

			//get the value of 'url' key in the object and assign it to variable called image
			console.log(response.data.data[0].images.fixed_height.url);
			let image = response.data.data[0].images.fixed_height.url;

			//append a 'li' within img in the unorder list
			list.append(`<li> <img src="${image}" > </li>`)
		})
		.catch((error) => { // .catch wants a function to run if the request is fails
			console.log("There was an error");
		})
		

}
	
});