let photoPickedUp = false;
let isGunPicked = false;

function beginInvestigation() {
  document.querySelector(".container").innerHTML = `
    <div class="container">
      <h1 class="">Critical Mission</h1>
      <p class="story">You find yourself on the top floor of a 67-story building, facing a critical mission to save a held by an emotionally developed android. The current probability of success is 45%.</p>
      <p><strong>Choose your next move:</strong></p>
      <button onclick="pickUpPhoto()">Pick up the photo</button>
      <button onclick="walkAway()">Walk away from the photo</button>
    </div>
  `;
}

function pickUpPhoto() {
  photoPickedUp = true;
  document.querySelector(".container").innerHTML = `
    <div class="container">
      <p class="story">Upon picking up the photo, you discover the name of the hostage, Emma, and the probability of success increases to 50%.</p>
      <p>You decide to move forward and tackle the mission.</p>
      <p><strong>How would you like to proceed?</strong></p>
      <button onclick="talkToOfficer()">Talk to the officer</button>
      <button onclick="investigateRoom()">Investigate the surroundings</button>
    </div>
  `;
}

function walkAway() {
  document.querySelector(".container").innerHTML = `
    <div class="container">
      <p class="story">You decide to walk away from the photo, proceeding with the mission. The probability of success remains the same.</p>
      <p>You choose to advance further and confront the challenge.</p>
      <p><strong>What will be your next step?</strong></p>
      <button onclick="investigateRoom()">Investigate the surroundings</button>
    </div>
  `;
}

function talkToOfficer() {
  document.querySelector(".container").innerHTML = `
    <div class="container">
      <p class="story">You approach the police officer on the scene to gather more information. As you ask about the android's details, the officer gets agitated and refuses to provide any further clues.</p>
      <p>You are left to handle the situation yourself.</p>
      <button onclick="investigateRoom()">Investigate the surroundings</button>
    </div>
  `;
}

function investigateRoom() {
  let gunStatus = isGunPicked ? "taken" : "not taken";
  document.querySelector(".container").innerHTML = `
    <div class="container">
      <p class="story">While investigating the room, you find an empty box that previously contained a Glock. It seems the android has taken the weapon.</p>
      <p>You decide to proceed to the hostage's room.</p>
      <button onclick="emmaRoom()">Go to the hostage's room</button>
    </div>
  `;
}

function emmaRoom() {
  let hostageName = photoPickedUp ? "Emma" : "the hostage";
  document.querySelector(".container").innerHTML = `
    <div class="container">
      <p class="story">In the hostage's room, you find a video recording where she praises "David" as the best android in the world, indicating a strong bond between them.</p>
      <p>Your investigation unveils crucial details.</p>
      <button onclick="victimScene()">Investigate the victims on the scene</button>
    </div>
  `;
}

function victimScene() {
  document.querySelector(".container").innerHTML = `
    <div class="container">
      <p class="story">At the victim scene, you discover two dead bodies—the first being the hostage's father, who had purchased a new android to replace David, and the second body is of a police officer, possibly wounded by David.</p>
      <p>You spot a gun near the police officer.</p>
      <p><strong>What will you do next?</strong></p>
      <button onclick="pickGun()">Pick up the gun</button>
      <button onclick="leaveGun()">Leave the gun</button>
    </div>
  `;
}

function pickGun() {
  isGunPicked = true;
  document.querySelector(".container").innerHTML = `
    <div class="container">
      <p class="story">You pick up the gun considering its potential significance in the mission.</p>
      <p>Your next move is critical.</p>
      <button onclick="confrontAndroid()">Confront the emotionally developed android</button>
    </div>
  `;
}

function leaveGun() {
  document.querySelector(".container").innerHTML = `
    <div class="container">
      <p class="story">You choose not to pick up the gun and proceed with your mission.</p>
      <p>Your next move is crucial in this       mission.</p>
      <button onclick="confrontAndroid()">Confront the emotionally developed android</button>
    </div>
  `;
}

function confrontAndroid() {
  let successProbability = isGunPicked ? 80 : 70;

  document.querySelector(".container").innerHTML = `
    <div class="container">
      <p class="story">You are at the scene, with snipers and helicopters surrounding the area, facing the emotionally developed android who is trying to shoot you. Your probability of success is at ${successProbability}% due to your thorough investigations.</p>
      <p>This is a pivotal moment in the mission.</p>
      <p><strong>Your choices determine the outcome:</strong></p>
      <button onclick="truthChoice()">Tell him the truth about being armed</button>
      <button onclick="lieChoice()">Empathize with lies to calm the android</button>
    </div>
  `;
}

function truthChoice() {
  let truthText = isGunPicked ? "armed" : "unarmed";

  document.querySelector(".container").innerHTML = `
    <div class="container">
      <p class="story">You choose to tell the truth about being ${truthText}, hoping to defuse the situation.</p>
      <p>It's a critical moment in the mission.</p>
      <p><strong>Your next step determines the fate of the mission.</strong></p>
      <button onclick="missionFailed()">Mission will end</button>
    </div>
  `;
}

function lieChoice() {
  document.querySelector(".container").innerHTML = `
    <div class="container">
      <p class="story">You empathize with lies to calm the android, sending away the helicopters to gain his trust.</p>
      <p>Your empathetic approach impacts the situation and he leaves the hostage. He starts demanding for a car to leave the city.</p>
      <p><strong>The mission will now test your resolve.</strong></p>
      <button onclick="signal()">Signal for assistance</button>
    </div>
  `;
}

function missionFailed() {
  document.querySelector(".container").innerHTML = `
    <div class="container">
      <h1 class="">Mission Failed</h1>
      <p class="story">The emotionally developed android jumps with the kid, ending the mission in failure. The game ends here.</p>
    </div>
  `;
}

function signal() {
  document.querySelector(".container").innerHTML = `
    <div class="container">
      <p class="story">You signal for assistance, leading to sniper shots from every angle, resulting in the android's demise.</p>
      <p>The mission is completed successfully as you ensured the safety of everyone involved.</p>
      <h1 class="ending">Mission Accomplished</h1>
    </div>
  `;
}
 
