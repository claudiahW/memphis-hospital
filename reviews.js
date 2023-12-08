//local reviews data

const reviews = [
    {
      id: 1,
      name: "Susan Smith",
      estate:"Buruburu",
      img:"./woman.png" ,
      text: "I loved the food.",
    },

    {
      id: 2,
      name: "John Doe",
      estate:"Umoja",
      img:"./man.png" ,
      text: "Fast delivery time!",
    },

    {
      id: 3,
      name: "Mike Davis",
      estate:"south B",
      img:"./profile.png" ,
      text: "lorem20",
    },

  ];

  //select items 
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const estate = document.getElementById("estate");
  const info = document.getElementById("info");

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");

  //set starting item
  let currentItem = 0;

  //load initial item
  window.addEventListener("DOMContentLoaded", function(){

    showPerson(currentItem);

  });

  //show person based on item
  function showPerson(person){

   const item = reviews[person];
   img.src = item.img;
   author.textContent = item.name;
   estate.textContent = item.estate;
   info.textContent = item.text;

  }
  //show next person

  nextBtn.addEventListener("click", function () {
    currentItem++;
    if(currentItem > reviews.length -1){
      currentItem = 0;
    }
    showPerson(currentItem);
  } );

  //show previous person

  prevBtn.addEventListener("click", function () {
    currentItem--;
    if(currentItem <0){
      currentItem = reviews.length -1;
    }

    showPerson(currentItem);
  } );

  

