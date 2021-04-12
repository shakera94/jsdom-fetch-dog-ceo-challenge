document.addEventListener("DOMContentLoaded", function (){
})

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(dog => {
    const randomDogs = applyDogImage();
    addRandomDogsToDom(randomDogs);
});

function applyDogImage() {
    const dogs = document.createElement ('div')
    dogs.classList.add("dogs");

    const image = document.createElement("img")
    image.src ="https://images.dog.ceo//breeds//pitbull//20190801_154956.jpg"
    image.src ="https://images.dog.ceo//breeds//newfoundland//n02111277_3056.jpg"
    image.src ="https://images.dog.ceo//breeds//saluki//n02091831_725.jpg"
    image.src ="https://images.dog.ceo//breeds//shihtzu//n02086240_2254.jpg"

    dogs.appendChild(image);

    return dogs;
}

function addRandomDogsToDom(randomDogs) {
    const dogImageContainer = document.getElementById("dog-image-container")
    dogImageContainer.appendChild(randomDogs);
}

function dogBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderDogBreeds(json))
  }
  
  function renderDogBreeds() {
    const message = document.querySelector('message');
    Dogbreeds.forEach(breeds => {
      const ul = document.createElement('ul');
      ul.innerHTML = dog-breeds.message;
      message.appendChild(ul);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    dogBreeds()
  });

  function addDogBreedsList() {
    const li = document.createElement("li");
    li.textContent = dogBreeds.name;
    li.addEventListener('click', function (event) {
      const DogBreed  = event.target.textContent;
      loadDogBreed();
    })
    listContainer.appendChild(li)}