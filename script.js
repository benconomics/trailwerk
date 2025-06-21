// script.js for Netlify Forms — only handles trail dropdown logic

document.addEventListener("DOMContentLoaded", () => {
  // Trail options by system
  const trailOptions = {
    "Carpenter Bypass": [
      "Alpha", "B-Line", "Bloody Stump", "Boneyard", "Boundary", "Brad's Bad Gravity", "Burial Ground", "Don Sled",
      "Egress", "Eric's Drop", "Fun Times", "He", "It'll be Great", "Letz Peak", "Lollipop", "Mama Tried", "Meth Lab",
      "Micronet", "More Play", "Moto Alley", "Northridge", "NRA", "Ode to Joy", "Salal", "Snakepath", "SST",
      "Stumps Don't Win", "Sunset", "Tree Prison", "Uno Mas", "Whole Nine Yards", "Y2k"
    ],
    "Thurston": ["Acer Spades", "Yew Haw", "Super Maple", "Chinquapin Chutes"],
    "Ridgeline": ["Baby Steps", "Pipedream"],
    "Hardesty": ["Goodman", "Hardesty", "Willamette"]
  };

  // Get selects
  const systemSelect = document.getElementById("trailSystem");
  const trailSelect = document.getElementById("trail");

  // Populate trails when system changes
  systemSelect.addEventListener("change", () => {
    const trails = trailOptions[systemSelect.value] || [];
    trailSelect.innerHTML = "";
    trails.forEach(trail => {
      const opt = document.createElement("option");
      opt.value = trail;
      opt.textContent = trail;
      trailSelect.appendChild(opt);
    });
  });
});



