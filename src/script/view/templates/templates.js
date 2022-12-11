const homeListLapangan = (fields) => `
<div class="col-xl-4 col-md-6 portfolio-item filter-interlock">
<div class="portfolio-wrap">
  <a href="${fields.pictureField}" data-gallery="portfolio-gallery-app" class="glightbox"><img src="${fields.pictureField}" class="img-fluid" alt="${fields.fieldType}"></a>
  <div class="portfolio-info">
    <h4><a href="#/detail/${fields._id}" title="More Details">${fields.fieldType}</a></h4>
    <p>Yogyakarta ⭐ 4.5</p> 
    <p>Rp ${fields.pricePerHour}/ jam</p>
  </div>
</div>
</div>
`;

const detailLapangan = (field) => `
<div class="detail-container">
  <div class="section-header">
    <h2>Detail Lapangan</h2>
    <p>Berikut adalah informasi detail dari lapangan futsal dari kami</p>
  </div>
  <div class="detail-lapangan">
    <div class="detail-header">
    <img src="${field.pictureField}" class="img-fluid" alt="${field.fieldType}">
      <h1>${field.fieldType}</h1>
    </div>
  </div>
  <div class="detail-fasilitas">
    <div class="list-fasilitas">
      <p>Kamar Mandi</p>
      <p>Price</p>
      <p>Bola</p>
      <p>Rating</p>
      <p>Lapangan</p>
      <p>Parkiran</p>
    </div>

    <div class="jumlah-fasilitas">
      <p>1 Kamar Mandi</p>
      <p>${field.pricePerHour}/Jam</p>
      <p>15 Bola</p>
      <p>4.5<i class="fa-solid fa-star fa-lg"></i></p>
      <p>${field.fieldType}</p>
      <p>Luas</p>
    </div>
  </div>

  <div class="deskripsi">
    <h1>Deskripsi</h1>
    <div class="detail-deskripsi">
      <p>
      ${field.description}  
      </p>
    </div>
  </div>
</div>

<div class="btn-booking">
  <a href="http://wa.me/+6289633176801" target= "_blank" rel= "noopener"> Booking</a>
</div>
`;

const bookPage = () => `
  <div></div>
`;

const homePage = () => `
<main id="main">
<!-- ======= Portfolio Section ======= -->
<section id="portfolio" class="portfolio sections-bg">
  <div class="container" data-aos="fade-up">

    <div class="section-header">
      <h2>Galery</h2>
      <p>Berikut adalah lapangan futsal rekomendasi dari kami</p>
    </div>

    <div class="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4 portfolio-container" id="list-lapangan">

      </div>

    </div>

  </div>
</section>
</main>
`;

const aboutPage = () => `
<section id="about" class="about">
  <div class="container" data-aos="fade-up">

    <div class="section-header">
      <h2>About Us</h2>
      <p>Di dalam lapangan futsal memiliki beberapa jenis lapangan, untuk memudahkan kamu mencari jenis lapangan yuk simak informasi berikut !</p>
    </div>

    <div class="row gy-4">
      <div class="col-lg-6">
        <h3>Lapangan Rumput</h3>
        <img src="./img/lap-rumput.jpg" class="img-fluid rounded-4 mb-4" alt="">
        <p>Lantai interlock futsal jenis ini menggunakan bahan dasar plastik PP dengan tujuan agar tidak mudah sobek atau rusak mengingat olahraga futsal membutuhkan pergerakan yang intens. Tekstur lantai dengan bahan ini padat serta hampir seperti keramik. Penggunaan interlocking floor semacam ini tidak hanya untuk lapangan futsal saja, tetapi bisa juga untuk lapangan olahraga lainnya seperti voli dan bulutangkis. </p>
      </div>
      <div class="col-lg-6">
        <div class="content ps-0 ps-lg-5">
          <p class="fst-italic">
            Karpet rumput sintetis futsal ini adalah jenis karpet yang paling populer. Bukan hanya dipergunakan sebagai alas lantai futsal saja, tetapi juga untuk lantai rumah, playground dan masih banyak lagi yang lainnya. Seperti namanya, rumput sintetis ini berbentuk seperti rumput asli hanya saja terbuat dari bahan plastik atau vinyl. Dengan penggunaan rumput sintetis ini, maka kondisi lapangan futsal jadi terlihat mirip dengan lapangan sepak bola. 
          </p>
          <h3>Lapangan Interlock</h3>

          <div class="position-relative mt-4">
            <img src="./img/interlock.jpg" class="img-fluid rounded-4" alt="">
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

`;

const contactPage = () => `
<section id="contact" class="contact">
  <div class="container" data-aos="fade-up">

    <div class="section-header">
      <h2>Contact</h2>
    </div>

    <div class="row gx-lg-0 gy-4 justify-content-center">

      <div class="col-lg-8" >
        <form action="forms/contact.php" method="post" role="for  m" class="php-email-form">
          <div class="contact-wrap">
        <div class="wrap-header">
          <i class="fa-solid fa-location-dot"></i>
          <a href="">Dicoding Academy</a>
        </div>
        <div class="wrap-header">
          <i class="fa-solid fa-phone"></i>
          <a href="">+628-1211-1213-12</a>
        </div>
        <div class="wrap-header3">
          <i class="fa-solid fa-envelope"></i>
          <a href="">dicoding@gmail.com</a>
        </div>
      </div>
        </form>
      </div>

    </div>

  </div>
</section>`;

export { homePage, detailLapangan, bookPage, homeListLapangan, aboutPage, contactPage };
