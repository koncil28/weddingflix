<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>WEDFLIX – Wedding Invitation</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>

<!-- AUDIO -->
<audio id="tudum" src="assets/sound/tudum.mp3"></audio>
<audio id="backsound" src="assets/sound/bg-music.mp3" loop></audio>
<button id="musicToggle" class="music-btn" aria-label="Toggle Music">
  MUSIC
</button>

<!-- INTRO -->
<section id="intro">
  <h1 class="logo">WEDFLIX</h1>
  <p class="greeting" id="greetingText">
    Yuk saksikan perjalanan cinta kami 🎬
  </p>
</section>

<!-- PROFILE -->
<section id="profiles" class="hidden">
  <h2>Siapa yang datang?</h2>
  <div class="profiles">
    <div class="profile">Keluarga</div>
    <div class="profile">Kerabat</div>
    <div class="profile">Sahabat</div>
    <div class="profile">Rekan Kerja</div>
  </div>
</section>

<!-- MAIN CONTENT -->
<main id="main" class="hidden">

  <!-- HERO DETAIL -->
  <section class="hero-detail">
    <div class="hero-bg"></div>

    <div class="hero-info">
      <span class="badge">WEDFLIX ORIGINAL</span>
      <span class="badge red">SPECIAL FOR YOU</span>

      <h1 class="title">ADIT & DEWI</h1>

      <div class="meta">
        <span class="match">99% Match</span>
        <span>2026</span>
        <span class="age">13+</span>
        <span>Limited Series</span>
        <span>Ultra HD</span>
      </div>

      <p class="desc">
        Halo <b id="heroGuest">Tamu Spesial</b>, sebuah perjalanan cinta yang penuh tawa kini tiba di episode puncak: Janji Suci.
      </p>

      <div class="actions">
        <button class="btn primary">▶ Save Date</button>
        <button class="btn secondary" id="scrollRsvp">ℹ RSVP</button>
      </div>
    </div>
  </section>

  <!-- GALLERY -->
  <section class="row">
    <h2>Trending Now: Pre-Wedding Gallery</h2>
    <div class="row-cards">
      <img src="assets/img/foto 1.jpg">
      <img src="assets/img/foto 2.jpg">
      <img src="assets/img/foto 3.jpg">
    </div>
  </section>

  <!-- EPISODES -->
  <section class="episodes">
    <h2>Season 1: The Wedding Day</h2>

    <div class="episode-card">
      <div class="thumb">▶</div>
      <div class="ep-info">
        <h3>Akad Nikah <span>08:00 – 10:00</span></h3>
        <p>Prosesi sakral pengikatan janji suci di hadapan keluarga inti.</p>
      </div>
    </div>

    <div class="episode-card">
      <div class="thumb">▶</div>
      <div class="ep-info">
        <h3>Resepsi Pernikahan <span>11:00 – 14:00</span></h3>
        <p>Waktunya merayakan kebahagiaan bersama seluruh tamu undangan.</p>
      </div>
    </div>
  </section>

  <!-- LOCATION -->
  <section class="location">
    <h2>Location & Sets</h2>
    <div class="location-card">
      <h3>Kediaman Mempelai Wanita</h3>
      <p>Kediaman Mempelai Wanita, Kalanganyar, Kabupaten Lebak</p>
      <button class="btn primary">📍 Buka Lokasi Syuting</button>
    </div>
  </section>

  <!-- RSVP CARD -->
  <section class="rsvp-section" id="rsvp">
    <div class="rsvp-card">
      <h2>RSVP</h2>
      <p class="subtitle">Pastikan kehadiran Anda tercatat.</p>

      <form id="rsvpForm">
        <input type="text" placeholder="Nama Lengkap" required>

        <div class="rsvp-row">
          <select required>
            <option value="">Jumlah Tamu</option>
            <option>1 Tamu</option>
            <option>2 Tamu</option>
            <option>3 Tamu</option>
          </select>

          <select required>
            <option value="">Kehadiran</option>
            <option>Hadir</option>
            <option>Tidak Hadir</option>
          </select>
        </div>

        <button class="btn primary full">CONFIRM</button>
      </form>
    </div>
  </section>

  <!-- WEDDING GIFT -->
<section class="gift-section">
  <div class="gift-card">
    <h2>Wedding Gift</h2>
    <p class="subtitle">
      Doa restu Anda adalah hadiah terindah.  
      Namun bila berkenan berbagi tanda kasih:
    </p>

    <div class="gift-item">
      <span>Bank BCA</span>
      <strong id="rekBca">1234567890</strong>
      <button class="btn secondary" onclick="copyRek('rekBca')">Copy</button>
    </div>

    <div class="gift-item">
      <span>Bank Mandiri</span>
      <strong id="rekMandiri">9876543210</strong>
      <button class="btn secondary" onclick="copyRek('rekMandiri')">Copy</button>
    </div>
  </div>
</section>

    <!-- FOOTER -->
  <footer>
    <h1>WEDFLIX</h1>
    <p>© 2026 With Love Adit & Dewi</p>
  </footer>

</main>

<script src="assets/js/app.js"></script>
</body>
</html>
