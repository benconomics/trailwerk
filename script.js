
// 1. Define trail system and trails
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("trailwork-form");

  // Trail options by system
  const trailOptions = {
    "Carpenter Bypass": ["Alpha", "B-Line", "Bloody Stump", "Boneyard", "Boundary", "Brad's Bad Gravity", "Burial Ground", "Don Sled", "Egress", "Eric's Drop", "Fun Times", "He", "It'll be Great", "Letz Peak","Lollipop","Mama Tried", "Meth Lab", "Micronet", "More Play", "Moto Alley", "Moto Alley", "Northridge", "NRA", "Ode to Joy", "Salal", "Snakepath", "SST", "Stumps Don't Win", "Sunset","Tree Prison", "Uno Mas", "Whole Nine Yards", "Y2k"],
    "Thurston": ["Acer Spades", "Yew Haw", "Super Maple", "Chinquapin Chutes"],
    "Ridgeline": ["Baby Steps", "Pipedream"],
    "Hardesty": ["Goodman", "Hardesty", "Willamette"]
  };

  // Populate trails when system changes
  const systemSelect = document.getElementById("trailSystem");
  const trailSelect = document.getElementById("trail");

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

  // Handle form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: document.getElementById("name").value,
      date: document.getElementById("date").value,
      trailSystem: systemSelect.value,
      trail: trailSelect.value,
      workTypes: Array.from(document.querySelectorAll('input[name="workType"]:checked')).map(el => el.value),
      hours: document.getElementById("hours").value,
      notes: document.getElementById("notes").value
    };

    fetch(SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.text())
    .then(response => {
      alert("Trail work submitted. Thank you!");
      form.reset();
      trailSelect.innerHTML = ""; // clear trail list
    })
    .catch(err => {
      alert("Submission failed. Please try again.");
      console.error("Error:", err);
    });
  });
});


