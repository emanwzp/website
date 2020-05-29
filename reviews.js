
//this javascript file loads the reviews for the product page
"use strict";  //enables strict mode
const url = "https://student.computing.edgehill.ac.uk/~walshd/cis1110api/product-reviews/bikeoil";

window.onload = function () {  //to load when the window is opened
  fetch(url)                      //fetches the url assigned to the constant
     .then(function (response) {
         return response.json();    //returns the response as a json object
     })
     .then(function(data) {
       for(let i=0; i<4 ;i++){
         //Gets the data required and assigns to variables
         let nickname = data[i].nickname;
         let rating = data[i].rating;
         let review = data[i].review;
         let starRating = ratingTranslation(rating);
         addReview(nickname, starRating, review);
       }
     }
     )
     .catch(function(error) {
     alert(error);      //handles any errors
     });
}


function addReview(nickname, rating, review){
  //creates grid-x container for each review
  let reviewsContainer = document.createElement("div");
  reviewsContainer.className = 'grid-x review-container';


  //divides user and review section cell large-6 each
  let userSection = document.createElement("div");
  userSection.className = 'cell large-6 userSection';
  let reviewsSection = document.createElement("div");
  reviewsSection.className = 'cell large-6 reviewsSection';

  //adding the actual information
  let userPara = document.createElement("p");
  let node = document.createTextNode(nickname);
  userPara.appendChild(node);
  userSection.appendChild(userPara);

  let ratingPara = document.createElement("p");
  ratingPara.className = 'rating'
  let node2 = document.createTextNode(rating);
  ratingPara.appendChild(node2);
  userSection.appendChild(ratingPara);

  let reviewPara = document.createElement("p");
  let node3 = document.createTextNode(review);
  reviewPara.appendChild(node3);
  reviewsSection.appendChild(reviewPara);

  //appending everything to the right place
  reviewsContainer.appendChild(userSection);
  reviewsContainer.appendChild(reviewsSection);
  let htmlreviewsContainer = document.getElementById("reviews-container")
  htmlreviewsContainer.appendChild(reviewsContainer);
}


function ratingTranslation(rating){
  let starRating;
  if(rating==1){
    starRating = "★☆☆☆☆";
  }
  else if(rating==2){
    starRating = "★★☆☆☆";
  }
  else if(rating==3){
    starRating = "★★★☆☆";
  }
  else if(rating==4){
    starRating = "★★★★☆";
  }
  else if(rating==5){
    starRating = "★★★★★";
  }
  else{
    starRating = "unknown rating";
  }
   return starRating;
}


function loadAllReviews(){
  //cleans the review container
  let reviews = document.getElementById("reviews-container");
  while (reviews.firstChild) reviews.removeChild(reviews.firstChild);

  //Loads all reviews
  fetch(url)                      //fetches the url assigned to the constant
     .then(function (response) {
         return response.json();    //returns the response as a json object
     })
     .then(function(data) {
       let length = data.length; //will be used in a loop if the user presses the view all reviews button to load every single review in the same fashion
       for(let i=0; i<length ;i++){
         //Gets the data required and assigns to variables
         let nickname = data[i].nickname;
         let rating = data[i].rating;
         let review = data[i].review;
         let starRating = ratingTranslation(rating);
         addReview(nickname, starRating, review);
       }
     }
     )
     .catch(function(error) {
     alert(error);      //handles any errors
     });
     //removes the button
     let btn = document.getElementById("loadAllReviews-btn");
     btn.parentNode.removeChild(btn);
}
