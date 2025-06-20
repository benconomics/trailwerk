// 1. Define trail system and trails
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwmHSnqdm2nm_W3A44urVbmlQdD9jYnA4Xakbvgc3cXlpsGhumpoXfdBxKWTczB4wM/exec";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("trailwork-form");

  // Trail options by system
  const trailOptions = {
    "Carpenter Bypass": ["Y2K", "Mama Tried", "Ode to Joy", "Hit Parade", "SST", "Boundary", "Don Sled", "Alpha", "Can’t Be Done"],
    "Thurston": ["Dead Mountain", "Lawler", "Hardesty", "Larison Rock"],
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


