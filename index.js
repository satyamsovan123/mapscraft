// console.log($("a"));
AOS.init();

punArray = ["What's Steve's favourite sport? Boxing!",
"How do Minecraft players celebrate? They throw block parties!",
"Why didn't the Enderman cross the road? Because he teleported instead!",
"Did you hear about the Creeper-only party? It was a bast!",
"How does Steve stay in shape? He runs around the block!",
"A Creeper walks into a bar... everyone dies.",
"Did you hear about the Minecraft movie coming out? It's a blockbuster!",
"What did the zombie say to the villager? Nice to eat you!",
"What is a Ghast's favourite country? The Nether-lands.",
"Did you know Zombies are deadicated?",
// "Only difference between Java and Javascript is, Minecraft is made of Java and Mapscraft is made of Javascript!",
"Knock, knock. Who's there? Steve. Steve who? ...ERROR: strings[jokes] out of bound...",
"You've now reached the bedrock-bottom of jokes array!"
];

randomNumber = Math.floor(Math.random() * punArray.length);
randomPun = punArray[randomNumber];

$(".sub-heading").text(randomPun);

function playSound(name){
  var audio = new Audio(name + ".mp3");
  audio.muted = false;
  audio.play();
}

$(".inst").on("click", function(event) {
  playSound("block");
});

$(".dwnld").on("click", function(event) {
  playSound("minecraft");
});

$(".dl").on("click", function(event) {
  playSound("eating");
});

$(".ctc").on("click", function(event) {
  playSound("villager");
});



// <div data-aos="zoom-in-up" data-aos-duration="2100" class="col-lg-4 col-md-6">
//   <img src="5.jpg" class="map" alt="map">
//   <a class="dl btn btn-outline-light btn-lg" href="#" role="button">Download</a>
// </div>
// <div data-aos="zoom-in-down" data-aos-duration="2400" class="col-lg-4 col-md-6">
//   <img src="6.jpg" class="map" alt="map">
//   <a class="dl btn btn-outline-light btn-lg" href="#" role="button">Download</a>
// </div>

currentMaps = $(".map-div").length;
console.log($(".map-div").length);
// for(var i = 0; i < currentMaps; i++){
//   if(i == currentMaps - 1){
//     // $(".map-div")[currentMaps - 1].innerHTML += ("<div data-aos='zoom-in-down' data-aos-duration='1900' class='col-lg-4 col-md-6'> <img src='4.jpg' class='map' alt='map'> <a class='dl btn btn-outline-light btn-lg' href='#' role='button'>Download</a></div>");
//   }
//   else{
//     console.log("check_this_out");
//     console.log($(".map-div")[i]);
//   }
// }

//
// $(".row").html += ("<div data-aos='zoom-in-down' data-aos-duration='1900' class='col-lg-4 col-md-6'> <img src='4.jpg' class='map' alt='map'> <a class='dl btn btn-outline-light btn-lg' href='#' role='button'>Download</a></div>");

timerInc = 300;

function addMapDiv(imgName){
  if(imgName % 2 == 0){
    $(".map-div").last().after("<div data-aos='zoom-in-" + "up' " + "data-aos-duration='1300' class='col-lg-4 col-md-6'> <img src='" + imgName + ".jpg' class='map' alt='map'> <a class='dl btn btn-outline-light btn-lg' href='#' role='button'>Download</a></div>");
  }
  else{
    $(".map-div").last().after("<div data-aos='zoom-in-" + "down' " + "data-aos-duration='1000' class='col-lg-4 col-md-6'> <img src='" + imgName + ".jpg' class='map' alt='map'> <a class='dl btn btn-outline-light btn-lg' href='#' role='button'>Download</a></div>");
  }
}


//function call to add more maps on the fly
addMapDiv(4);

addMapDiv(5);

addMapDiv(6);

// $(".map-div").last().after("<div data-aos='zoom-in-down' data-aos-duration='1900' class='col-lg-4 col-md-6'> <img src='4.jpg' class='map' alt='map'> <a class='dl btn btn-outline-light btn-lg' href='#' role='button'>Download</a></div>");

// $(".map-div").last().html();
