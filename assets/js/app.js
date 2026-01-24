// ===============================
// ELEMENTS
// ===============================
const intro = document.getElementById('intro');
const profiles = document.getElementById('profiles');
const main = document.getElementById('main');

const tudum = document.getElementById('tudum');
const backsound = document.getElementById('backsound');
const musicToggle = document.getElementById('musicToggle');

// ===============================
// GREETING FROM URL
// ===============================
const greetingEl = document.getElementById('greetingText');
const heroGuest = document.getElementById('heroGuest');
const params = new URLSearchParams(window.location.search);
let guestName = params.get('to');

if (guestName) {
  guestName = guestName.replace(/[-_]/g, ' ');
  guestName = guestName.replace(/\b\w/g, l => l.toUpperCase());

  greetingEl.innerHTML =
    `Halo <b>${guestName}</b> 👋<br>Yuk saksikan perjalanan cinta kami 🎬`;

  heroGuest.innerText = guestName;
}

// ===============================
// INTRO FLOW (VISUAL ONLY)
// ===============================
setTimeout(() => {
  intro.style.display = 'none';
  profiles.classList.remove('hidden');
}, 3000);

// ===============================
// PROFILE CLICK = AUDIO START
// ===============================
let audioStarted = false;

document.querySelectorAll('.profile').forEach(profile => {
  profile.addEventListener('click', () => {

    if (!audioStarted) {
      tudum.currentTime = 0;
      tudum.volume = 1;
      tudum.play();

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

// ===============================
// MUSIC TOGGLE
// ===============================
musicToggle.addEventListener('click', () => {
  if (backsound.paused) {
    backsound.play();
    musicToggle.innerText = 'MUSIC ON';
  } else {
    backsound.pause();
    musicToggle.innerText = 'MUSIC OFF';
  }
});

// ===============================
// SCROLL TO RSVP
// ===============================
document.getElementById('scrollRsvp').addEventListener('click', () => {
  document.getElementById('rsvp').scrollIntoView({
    behavior: 'smooth'
  });
});

// ===============================
// RSVP SUBMIT
// ===============================
document.getElementById('rsvpForm').addEventListener('submit', e => {
  e.preventDefault();
  showPopup(
    'Kehadiran Anda berhasil dikonfirmasi ❤️',
    'RSVP Berhasil'
  );
});

// ===============================
// WEDDING GIFT COPY
// ===============================
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const rek = e.target.closest('.gift-item').dataset.rek;
    navigator.clipboard.writeText(rek);
    showPopup('Nomor rekening berhasil disalin 💝');
  });
});

// ===============================
// COMMENTS (FRONTEND ONLY)
// ===============================
document.getElementById('commentForm').addEventListener('submit', e => {
  e.preventDefault();

  const name = e.target.querySelector('input').value;
  const msg = e.target.querySelector('textarea').value;

  const div = document.createElement('div');
  div.className = 'comment';
  div.innerHTML = `<strong>${name}</strong><p>${msg}</p>`;

  document.getElementById('commentList').prepend(div);
  e.target.reset();
});

// ===============================
// POPUP
// ===============================
function showPopup(message, title = 'Terima Kasih') {
  document.getElementById('popupTitle').innerText = title;
  document.getElementById('popupMessage').innerText = message;
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}
