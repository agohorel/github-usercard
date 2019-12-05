/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

function callApiAndCreateCard(user) {
  axios
    .get(`https://api.github.com/users/${user}`)
    .then(response =>
      document
        .querySelector(".container .cards")
        .appendChild(createCard(response.data))
    )
    .catch(err => console.error(err));
}

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [
  "agohorel",
  "gregtemp",
  "REAS",
  "benfry",
  "lmccart",
  "shiffman"
];

followersArray.map(user => {
  callApiAndCreateCard(user);
});

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:


<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function createCard(data) {
  const {
    avatar_url,
    name,
    login: username,
    location,
    html_url: url,
    followers,
    following,
    bio
  } = data;
  const component = document.createElement("div");
  component.classList.add("card");

  const img = document.createElement("img");
  img.src = avatar_url;
  component.appendChild(img);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  component.appendChild(cardInfo);

  const cardName = document.createElement("h3");
  cardName.classList.add("name");
  cardName.textContent = name;
  cardInfo.appendChild(cardName);

  const cardUserName = document.createElement("p");
  cardUserName.classList.add("username");
  cardUserName.textContent = username;
  cardInfo.appendChild(cardUserName);

  const cardLocation = document.createElement("p");
  cardLocation.textContent = location;
  cardInfo.appendChild(cardLocation);

  const cardProfile = document.createElement("p");
  cardProfile.textContent = "Profile: ";
  cardInfo.appendChild(cardProfile);

  const cardUrl = document.createElement("a");
  cardUrl.href = url;
  cardUrl.setAttribute("target", "_blank");
  cardUrl.setAttribute("rel", "noopener", "noreferrer");
  cardUrl.textContent = "Github";
  cardProfile.appendChild(cardUrl);

  const cardFollowers = document.createElement("p");
  cardFollowers.textContent = `Followers: ${followers.toLocaleString()}`;
  cardInfo.appendChild(cardFollowers);

  const cardFollowing = document.createElement("p");
  cardFollowing.textContent = `Following: ${following.toLocaleString()}`;
  cardInfo.appendChild(cardFollowing);

  const cardBio = document.createElement("p");
  cardBio.textContent = bio === null ? null : `Bio: ${bio}`;
  cardInfo.appendChild(cardBio);

  return component;
}
