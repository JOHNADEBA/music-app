window.addEventListener("load", () => {
  const keys = document.querySelectorAll(".keyboard div");
  const sounds = document.querySelectorAll(".sounds");
  const showVibration = document.querySelector(".show-vibration");
  const colors = [
    "saddlebrown",
    "rgba(131, 139, 19, 0.966)",
    "rgba(77, 139, 19, 0.966)",
    "rgb(55, 19, 139)",
    "rgb(135, 19, 139)",
    "rgb(19, 121, 139)",
  ];

  keys.forEach((key, i) => {
    key.addEventListener("click", function () {
      sounds[i].currentTime = 0;
      sounds[i].play();

      createVibrations(i);
    });
  });
  //   create vibrations
  const createVibrations = (i) => {
    const vibration = document.createElement("div");
    showVibration.appendChild(vibration);
    vibration.style.animation = "jump 1s ease";
    vibration.style.background = colors[i];
  };
});
