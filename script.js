const trailOptions = {
  "Carpenter Bypass": ["Y2K", "Mama Tried", "Ode to Joy", "The Gift"],
  "Thurston": ["Acer Spades", "Yew Haw", "Super Maple", "Chinquapin Chutes", "Basalt Rim"],
  "Ridgeline": ["Baby Steps", "PipeDream"],
  "Hardesty": ["Goodman", "Hardesty", "Willamette"]
};

document.getElementById('trail-system').addEventListener('change', function() {
  const trailSelect = document.getElementById('trail');
  const trails = trailOptions[this.value] || [];
  trailSelect.innerHTML = trails.map(trail => `<option value="${trail}">${trail}</option>`).join('');
});

document.getElementById('trailwork-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const obj = {};
  data.forEach((val, key) => {
    if (key === 'worktype') {
      if (!obj[key]) obj[key] = [];
      obj[key].push(val);
    } else {
      obj[key] = val;
    }
  });

  fetch('https://script.google.com/macros/s/AKfycbzPvP_EwBR_iwuMNC8Vt0pswys_u-ccS2VQHJNjBu5ZPlWzvU3d95bp7oXP4d3sRow/exec', {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: { 'Content-Type': 'application/json' }
  }).then(() => {
    form.style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
  });
});
