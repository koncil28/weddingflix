// ===============================
// ELEMENTS
// ===============================
const cover = document.getElementById('cover');
const openBtn = document.getElementById('openInvitation');
const profiles = document.getElementById('profiles');
const main = document.getElementById('main');

const tudum = document.getElementById('tudum');
const backsound = document.getElementById('backsound');
const musicToggle = document.getElementById('musicToggle');

const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popupTitle');
const popupMessage = document.getElementById('popupMessage');

// ===============================
// STATE
// ===============================
let audioStarted = false;
let invitationOpened = false;

// ===============================
// COVER → PROFILE
// ===============================
openBtn.addEventListener('click', () => {
  if (invitationOpened) return;
  invitationOpened = true;

  cover.classList.add('fade-out');

  setTimeout(() => {
    cover.style.display = 'none';
    profiles.classList.remove('hidden');
    profiles.classList.add('show');
  }, 600);
});

// ===============================
// PROFILE → MAIN + AUDIO
// ===============================
document.querySelectorAll('.profile').forEach(profile => {
  profile.addEventListener('click', () => {

    if (!audioStarted) {
      tudum.currentTime = 0;
      tudum.volume = 1;
      tudum.play().catch(() => {});

      setTimeout(() => {
        backsound.volume = 0.35;
        backsound.play().catch(() => {});
      }, 1200);

      audioStarted = true;
    }

    profiles.classList.remove('show');
    profiles.classList.add('hidden');
    main.classList.remove('hidden');
  });
});

// ===============================
// MUSIC TOGGLE
// ===============================
musicToggle.addEventListener('click', () => {
  if (backsound.paused) {
    backsound.play().catch(() => {});
    musicToggle.innerText = 'MUSIC ON';
  } else {
    backsound.pause();
    musicToggle.innerText = 'MUSIC OFF';
  }
});

// ===============================
// SCROLL TO RSVP
// ===============================
const scrollBtn = document.getElementById('scrollRsvp');
if (scrollBtn) {
  scrollBtn.addEventListener('click', () => {
    document.getElementById('rsvp').scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// ===============================
// RSVP SUBMIT
// ===============================
const rsvpForm = document.getElementById('rsvpForm');
if (rsvpForm) {
  rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showPopup(
      'Kehadiran Anda berhasil dikonfirmasi ❤️',
      'RSVP Berhasil'
    );
    rsvpForm.reset();
  });
}

// ===============================
// WEDDING GIFT COPY
// ===============================
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const item = e.target.closest('.gift-item');
    if (!item) return;

    const rek = item.dataset.rek;

    navigator.clipboard.writeText(rek).then(() => {
      showPopup('Nomor rekening berhasil disalin 💝');
    }).catch(() => {
      showPopup('Gagal menyalin nomor rekening');
    });
  });
});

// ===============================
// COMMENTS / DOA
// ===============================
const commentForm = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

if (commentForm) {
  commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = commentForm.querySelector('input').value.trim();
    const msg = commentForm.querySelector('textarea').value.trim();

    if (!name || !msg) return;

    const div = document.createElement('div');
    div.className = 'comment';
    div.innerHTML = `<strong>${name}</strong><p>${msg}</p>`;

    commentList.prepend(div);
    commentForm.reset();

    showPopup('Terima kasih atas doa dan ucapannya 💖');
  });
}

// ===============================
// POPUP
// ===============================
function showPopup(message, title = 'Terima Kasih') {
  popupTitle.innerText = title;
  popupMessage.innerText = message;
  popup.classList.remove('hidden');
}

function closePopup() {
  popup.classList.add('hidden');
}
