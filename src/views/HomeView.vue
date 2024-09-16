<template>
  <div class="container-xxl bg-white p-0">
    <!-- Spinner Start -->
    <!-- <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
             <div class="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
                 <span class="sr-only">Loading...</span>
             </div>
         </div> -->
    <!-- Spinner End -->

    <!-- Navbar & Hero Start -->
    <div class="container-xxl position-relative p-0">
      <NavBar />

      <div class="container-xxl py-5 bg-dark hero-header mb-5">
        <div class="container my-5 py-5 px-lg-5">
          <div class="row g-5 py-5">
            <div class="col-lg-6 text-center text-lg-start">
              <h1 class="text-white mb-4 animated zoomIn">Agence Web</h1>
              <p class="text-white pb-3 animated zoomIn">
                Notre équipe réalise des sites webs, applications mobiles,
                gestion des CMS, Réference gogole, maintenance des sites
              </p>
              <a
                href="tel:+762195305"
                class="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft"
                style="margin:1rem"
                >07 62 19 53 05</a
              >
              <a
                @click="navigateToContactPage"
                class="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight"
                >Contactez Nous</a
              >
            </div>
            <div class="col-lg-6 text-center text-lg-start">
              <img
                class="img-fluid rounded"
                src="../assets/img/infinity-code.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Navbar & Hero End -->

    <!-- Full Screen Search Start -->
    <div class="modal fade" id="searchModal" tabindex="-1">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content" style="background: rgba(29, 29, 39, 0.7)">
          <div class="modal-header border-0">
            <button
              type="button"
              class="btn bg-white btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div
            class="modal-body d-flex align-items-center justify-content-center"
          >
            <div class="input-group" style="max-width: 600px">
              <input
                type="text"
                class="form-control bg-transparent border-light p-3"
                placeholder="Type search keyword"
              />
              <button class="btn btn-light px-4">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Full Screen Search End -->

    <!-- About Start -->
    <div class="container-xxl py-5">
      <div class="container px-lg-5">
        <div class="row g-5">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="section-title position-relative mb-4 pb-2">
              <h6 class="position-relative text-4">Pourquoi nous choisir ?</h6>
              <h2 class="mt-2">
                Conduire votre projet professionnel avec notre agence
              </h2>
            </div>
            <p class="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>
            <div class="row g-3">
              <div class="col-sm-6">
                <h6 class="mb-3">
                  <i class="fa fa-check text-success me-2"></i>Une équipe
                  professionnel dédié
                </h6>
                <h6 class="mb-0">
                  <i class="fa fa-check text-success me-2"></i>Pas de sous
                  traitance
                </h6>
              </div>
              <div class="col-sm-6">
                <h6 class="mb-3">
                  <i class="fa fa-check text-success me-2"></i>Support de 7h
                  jusqu'a 22h 7/7
                </h6>
                <h6 class="mb-0">
                  <i class="fa fa-check text-success me-2"></i>Prix attractif
                </h6>
              </div>
            </div>
            <div class="d-flex align-items-center mt-4">
              <a class="btn btn-success rounded-pill px-4 me-3" href=""
                >Read More</a
              >
              <a class="btn btn-outline-success btn-square me-3" href=""
                ><i class="fab fa-facebook-f"></i
              ></a>
              <a class="btn btn-outline-success btn-square me-3" href=""
                ><i class="fab fa-twitter"></i
              ></a>
              <a class="btn btn-outline-success btn-square me-3" href=""
                ><i class="fab fa-instagram"></i
              ></a>
              <a class="btn btn-outline-success btn-square" href=""
                ><i class="fab fa-linkedin-in"></i
              ></a>
            </div>
          </div>
          <div class="col-lg-6">
            <img
              class="img-fluid wow zoomIn"
              data-wow-delay="0.5s"
              src="../assets/img/about.jpg"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->

    <!-- Newsletter Start -->
    <div
      class="container-xxl bg-dark newsletter my-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div class="container px-lg-5">
        <div class="row align-items-center" style="height: 250px">
          <div class="">
            <h3 class="text-white">Ils font confiance à notre agence web</h3>
            <div class="position-relative w-100 mt-3">
              <button
                type="button"
                class="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Newsletter End -->

    <!-- Service Start -->
    <div class="container-xxl py-5">
      <div class="container px-lg-5">
        <div
          class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <h6 class="position-relative d-inline text-primary ps-4">
            Nos services
          </h6>
          <h2 class="mt-2">Quelles solutions nous proposons ?</h2>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div
              class="service-item d-flex flex-column justify-content-center text-center rounded"
            >
              <div class="service-icon flex-shrink-0">
                <i class="fa fa-home fa-2x"></i>
              </div>
              <h5 class="mb-3">Optimisation SEO</h5>
              <p>
                Nous optimisons votre site pour les moteurs de recherche afin
                d'améliorer sa visibilité et d'attirer plus de visiteurs
                qualifiés. Profitez de notre expertise pour augmenter votre
                classement et générer du trafic organique.
              </p>
              <!-- <a class="btn px-3 mt-auto mx-auto" href="">Read More</a> -->
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div
              class="service-item d-flex flex-column justify-content-center text-center rounded"
            >
              <div class="service-icon flex-shrink-0">
                <i class="fa fa-home fa-2x"></i>
              </div>
              <h5 class="mb-3">Conception de sites web</h5>
              <p>
                Nous créons des sites web attrayants et fonctionnels qui
                reflètent votre marque et répondent aux besoins de vos
                utilisateurs. De la conception au développement, nous nous
                occupons de tout pour vous offrir une présence en ligne
                professionnelle.
              </p>
              <!-- <a class="btn px-3 mt-auto mx-auto" href="">Read More</a> -->
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div
              class="service-item d-flex flex-column justify-content-center text-center rounded"
            >
              <div class="service-icon flex-shrink-0">
                <i class="fa fa-home fa-2x"></i>
              </div>
              <h5 class="mb-3">Marketing des médias sociaux</h5>
              <p>
                Nous développons des stratégies de marketing sur les réseaux
                sociaux pour accroître votre visibilité, engager votre audience
                et stimuler la croissance de votre entreprise. Laissez-nous
                gérer vos campagnes pour maximiser votre impact.
              </p>
              <!-- <a class="btn px-3 mt-auto mx-auto" href="">Read More</a> -->
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
            <div
              class="service-item d-flex flex-column justify-content-center text-center rounded"
            >
              <div class="service-icon flex-shrink-0">
                <i class="fa fa-home fa-2x"></i>
              </div>
              <h5 class="mb-3">Développement d'applications mobiles</h5>
              <p>
                Nous développons des applications mobiles innovantes et
                performantes pour Android et iOS, adaptées à vos besoins
                spécifiques. Profitez d'une interface utilisateur intuitive et
                de fonctionnalités avancées pour engager vos utilisateurs.
              </p>
              <!-- <a class="btn px-3 mt-auto mx-auto" href="">Read More</a> -->
            </div>
          </div>
          <!-- <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                         <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                             <div class="service-icon flex-shrink-0">
                                 <i class="fa fa-home fa-2x"></i>
                             </div>
                             <h5 class="mb-3">PPC Advertising</h5>
                             <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                             <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
                         </div>
                     </div> -->
          <!-- <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                         <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                             <div class="service-icon flex-shrink-0">
                                 <i class="fa fa-home fa-2x"></i>
                             </div>
                             <h5 class="mb-3">Developpement app mobile</h5>
                             <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                             <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
                         </div>
                     </div> -->
        </div>
      </div>
    </div>
    <!-- Service End -->

    <!-- Portfolio Start -->
    <div class="container-xxl py-5">
      <div class="container px-lg-5">
        <div
          class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <h6 class="position-relative d-inline text-primary ps-4">
            Our Projects
          </h6>
          <h2 class="mt-2">Recently Launched Projects</h2>
        </div>
        <div class="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
          <div class="col-12 text-center">
            <ul class="list-inline mb-5" id="portfolio-flters">
              <li class="btn px-3 pe-4 active" data-filter="*">All</li>
              <li class="btn px-3 pe-4" data-filter=".first">Design</li>
              <li class="btn px-3 pe-4" data-filter=".second">Development</li>
            </ul>
          </div>
        </div>
        <div class="row g-4 portfolio-container">
          <div
            class="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
            data-wow-delay="0.1s"
          >
            <div class="position-relative rounded overflow-hidden">
              <img
                class="img-fluid w-100"
                src="../assets/img/portfolio-1.jpg"
                alt=""
              />
              <div class="portfolio-overlay">
                <a
                  class="btn btn-light"
                  href="../assets/img/portfolio-1.jpg"
                  data-lightbox="portfolio"
                  ><i class="fa fa-plus fa-2x text-primary"></i
                ></a>
                <div class="mt-auto">
                  <small class="text-white"
                    ><i class="fa fa-folder me-2"></i>Web Design</small
                  >
                  <a class="h5 d-block text-white mt-1 mb-0" href=""
                    >Project Name</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
            data-wow-delay="0.3s"
          >
            <div class="position-relative rounded overflow-hidden">
              <img
                class="img-fluid w-100"
                src="../assets/img/portfolio-2.jpg"
                alt=""
              />
              <div class="portfolio-overlay">
                <a
                  class="btn btn-light"
                  href="../assets/img/portfolio-2.jpg"
                  data-lightbox="portfolio"
                  ><i class="fa fa-plus fa-2x text-primary"></i
                ></a>
                <div class="mt-auto">
                  <small class="text-white"
                    ><i class="fa fa-folder me-2"></i>Web Design</small
                  >
                  <a class="h5 d-block text-white mt-1 mb-0" href=""
                    >Project Name</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
            data-wow-delay="0.6s"
          >
            <div class="position-relative rounded overflow-hidden">
              <img
                class="img-fluid w-100"
                src="../assets/img/portfolio-3.jpg"
                alt=""
              />
              <div class="portfolio-overlay">
                <a
                  class="btn btn-light"
                  href="../assets/img/portfolio-3.jpg"
                  data-lightbox="portfolio"
                  ><i class="fa fa-plus fa-2x text-primary"></i
                ></a>
                <div class="mt-auto">
                  <small class="text-white"
                    ><i class="fa fa-folder me-2"></i>Web Design</small
                  >
                  <a class="h5 d-block text-white mt-1 mb-0" href=""
                    >Project Name</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
            data-wow-delay="0.1s"
          >
            <div class="position-relative rounded overflow-hidden">
              <img
                class="img-fluid w-100"
                src="../assets/img/portfolio-4.jpg"
                alt=""
              />
              <div class="portfolio-overlay">
                <a
                  class="btn btn-light"
                  href="../assets/img/portfolio-4.jpg"
                  data-lightbox="portfolio"
                  ><i class="fa fa-plus fa-2x text-primary"></i
                ></a>
                <div class="mt-auto">
                  <small class="text-white"
                    ><i class="fa fa-folder me-2"></i>Web Design</small
                  >
                  <a class="h5 d-block text-white mt-1 mb-0" href=""
                    >Project Name</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 portfolio-item first wow zoomIn"
            data-wow-delay="0.3s"
          >
            <div class="position-relative rounded overflow-hidden">
              <img
                class="img-fluid w-100"
                src="../assets/img/portfolio-5.jpg"
                alt=""
              />
              <div class="portfolio-overlay">
                <a
                  class="btn btn-light"
                  href="../assets/img/portfolio-5.jpg"
                  data-lightbox="portfolio"
                  ><i class="fa fa-plus fa-2x text-primary"></i
                ></a>
                <div class="mt-auto">
                  <small class="text-white"
                    ><i class="fa fa-folder me-2"></i>Web Design</small
                  >
                  <a class="h5 d-block text-white mt-1 mb-0" href=""
                    >Project Name</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 col-md-6 portfolio-item second wow zoomIn"
            data-wow-delay="0.6s"
          >
            <div class="position-relative rounded overflow-hidden">
              <img
                class="img-fluid w-100"
                src="../assets/img/portfolio-6.jpg"
                alt=""
              />
              <div class="portfolio-overlay">
                <a
                  class="btn btn-light"
                  href="../assets/img/portfolio-6.jpg"
                  data-lightbox="portfolio"
                  ><i class="fa fa-plus fa-2x text-primary"></i
                ></a>
                <div class="mt-auto">
                  <small class="text-white"
                    ><i class="fa fa-folder me-2"></i>Web Design</small
                  >
                  <a class="h5 d-block text-white mt-1 mb-0" href=""
                    >Project Name</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Portfolio End -->

    <!-- Testimonial Start -->
    <!-- <div class="container-xxl bg-primary testimonial py-5 my-5 wow fadeInUp" data-wow-delay="0.1s">
             <div class="container py-5 px-lg-5">
                 <div class="owl-carousel testimonial-carousel">
                     <div class="testimonial-item bg-transparent border rounded text-white p-4">
                         <i class="fa fa-quote-left fa-2x mb-3"></i>
                         <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                         <div class="d-flex align-items-center">
                             <img class="img-fluid flex-shrink-0 rounded-circle" src="./assets/img/testimonial-1.jpg" style="width: 50px; height: 50px;">
                             <div class="ps-3">
                                 <h6 class="text-white mb-1">Client Name</h6>
                                 <small>Profession</small>
                             </div>
                         </div>
                     </div>
                     <div class="testimonial-item bg-transparent border rounded text-white p-4">
                         <i class="fa fa-quote-left fa-2x mb-3"></i>
                         <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                         <div class="d-flex align-items-center">
                             <img class="img-fluid flex-shrink-0 rounded-circle" src="./assets/img/testimonial-2.jpg" style="width: 50px; height: 50px;">
                             <div class="ps-3">
                                 <h6 class="text-white mb-1">Client Name</h6>
                                 <small>Profession</small>
                             </div>
                         </div>
                     </div>
                     <div class="testimonial-item bg-transparent border rounded text-white p-4">
                         <i class="fa fa-quote-left fa-2x mb-3"></i>
                         <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                         <div class="d-flex align-items-center">
                             <img class="img-fluid flex-shrink-0 rounded-circle" src="./assets/img/testimonial-3.jpg" style="width: 50px; height: 50px;">
                             <div class="ps-3">
                                 <h6 class="text-white mb-1">Client Name</h6>
                                 <small>Profession</small>
                             </div>
                         </div>
                     </div>
                     <div class="testimonial-item bg-transparent border rounded text-white p-4">
                         <i class="fa fa-quote-left fa-2x mb-3"></i>
                         <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                         <div class="d-flex align-items-center">
                             <img class="img-fluid flex-shrink-0 rounded-circle" src="./assets/img/testimonial-4.jpg" style="width: 50px; height: 50px;">
                             <div class="ps-3">
                                 <h6 class="text-white mb-1">Client Name</h6>
                                 <small>Profession</small>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div> -->
    <!-- Testimonial End -->

    <!-- Team Start -->
    <div class="container-xxl py-5">
      <div class="container px-lg-5">
        <div
          class="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <h6 class="position-relative d-inline text-success ps-4">
            Notre équipe
          </h6>
          <h2 class="mt-2">Rencontrez notre équipe</h2>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item">
              <div class="d-flex">
                <div
                  class="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                  style="width: 75px"
                >
                  <a class="btn btn-square text-primary bg-white my-1" href=""
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn btn-square text-primary bg-white my-1" href=""
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn btn-square text-primary bg-white my-1" href=""
                    ><i class="fab fa-instagram"></i
                  ></a>
                  <a class="btn btn-square text-primary bg-white my-1" href=""
                    ><i class="fab fa-linkedin-in"></i
                  ></a>
                </div>
                <img
                  class="img-fluid rounded w-100"
                  src="../assets/img/team-1.jpg"
                  alt=""
                />
              </div>
              <div class="px-4 py-3">
                <h5 class="fw-bold m-0">Haroun Azoulay</h5>
                <small>Developeur</small>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="team-item">
              <div class="d-flex">
                <div
                  class="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5"
                  style="width: 75px"
                >
                  <a class="btn btn-square text-primary bg-white my-1" href=""
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn btn-square text-primary bg-white my-1" href=""
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn btn-square text-primary bg-white my-1" href=""
                    ><i class="fab fa-instagram"></i
                  ></a>
                  <a class="btn btn-square text-primary bg-white my-1" href=""
                    ><i class="fab fa-linkedin-in"></i
                  ></a>
                </div>
                <img
                  class="img-fluid rounded w-100"
                  src="../assets/img/team-1.jpg"
                  alt=""
                />
              </div>
              <div class="px-4 py-3">
                <h5 class="fw-bold m-0">Mohammed Diouani</h5>
                <small>Chef de projet / Commercial</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import $ from "jquery";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import NavBar from "../navbar/NavBar.vue";
import Footer from "../footer/Footer.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const navigateToContactPage = () => {
  router.push({ path: "contact" });
};

onMounted(() => {

  // Sticky Navbar
  $(window).scroll(function () {
    const scrollTop = $(this)?.scrollTop();
  if (scrollTop && scrollTop > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  $(window).scroll(function () {
    const scrollTop = $(this)?.scrollTop();
    if (scrollTop && scrollTop > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  $(window).scroll(function () {
    const scrollTop = $(this)?.scrollTop();
    if (scrollTop && scrollTop > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  // Portfolio Isotope
  imagesLoaded(".portfolio-container", function () {
    const portfolioIsotope = new Isotope(".portfolio-container", {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    $("#portfolio-flters li").on("click", function () {
      $("#portfolio-flters li").removeClass("active");
      $(this).addClass("active");

      portfolioIsotope.arrange({ filter: $(this).data("filter") });
    });
  });

  //    new WOW().init();
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
