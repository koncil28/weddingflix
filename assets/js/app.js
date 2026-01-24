const intro = document.getElementById('intro');
const profiles = document.getElementById('profiles');
const main = document.getElementById('main');

const tudum = document.getElementById('tudum');
const backsound = document.getElementById('backsound');
const musicToggle = document.getElementById('musicToggle');

// GREETING
const greetingEl = document.getElementById('greetingText');
const heroGuest = document.getElementById('heroGuest');

const params = new URLSearchParams(window.location.search);
let guestName = params.get('to');

if (guestName) {
  guestName = guestName.replace(/[-_]/g, ' ');
  guestName = guestName.replace(/\b\w/g, l => l.toUpperCase());
  greetingEl.innerHTML = `Halo <b>${guestName}</b> 👋<br>Yuk saksikan perjalanan cinta kami 🎬`;
  heroGuest.innerText = guestName;
}

// // INTRO SOUND
// setTimeout(() => {
//   tudum.play();
// }, 500);

// setTimeout(() => {
//   intro.style.display = 'none';
//   profiles.classList.remove('hidden');
//   backsound.volume = 0.35;
//   backsound.play();
// }, 3000);

// ===============================
// INTRO VISUAL ONLY (NO AUDIO)
// ===============================
setTimeout(() => {
  intro.style.display = 'none';
  profiles.classList.remove('hidden');
}, 3000);

// ===============================
// PROFILE CLICK = AUDIO START
// ===============================
let audioStarted = false;

document.querySelectorAll('.profile').forEach(p => {
  p.addEventListener('click', () => {

    if (!audioStarted) {
      // TU-DUM
      tudum.currentTime = 0;
      tudum.volume = 1;
      tudum.play();

      // BACKSOUND (delay dikit biar cinematic)
      setTimeout(() => {
        backsound.volume = 0.35;
        backsound.play();
      }, 1200);

      audioStarted = true;
    }

    profiles.style.display = 'none';
    main.classList.remove('hidden');
  });
});

// PROFILE
document.querySelectorAll('.profile').forEach(p => {
  p.addEventListener('click', () => {
    profiles.style.display = 'none';
    main.classList.remove('hidden');
  });
});

// // MUSIC TOGGLE
// musicToggle.addEventListener('click', () => {
//   if (backsound.paused) {
//     backsound.play();
//     musicToggle.innerText = '🔊';
//   } else {
//     backsound.pause();
//     musicToggle.innerText = '🔇';
//   }
// });

// ===============================
// MUSIC TOGGLE (FLAT STYLE)
// ===============================
musicToggle.addEventListener('click', () => {
  if (backsound.paused) {
    backsound.play();
    musicToggle.classList.remove('off');
    musicToggle.innerText = 'MUSIC ON';
  } else {
    backsound.pause();
    musicToggle.classList.add('off');
    musicToggle.innerText = 'MUSIC OFF';
  }
});


// SCROLL RSVP
document.getElementById('scrollRsvp').addEventListener('click', () => {
  document.getElementById('rsvp').scrollIntoView({ behavior: 'smooth' });
});

// RSVP SUBMIT
document.getElementById('rsvpForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('RSVP berhasil dikonfirmasi 🎬');
});
