<template>
  <nav
    class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0 bg-dark"
  >
    <a href="" class="navbar-brand p-0">
      <h1 class="m-0">
        <i class="fa-solid fa-infinity fa-xl pe-4" style="color: #ffffff"></i
        >Infinity<span class="fs-5">Code</span>
      </h1>
    </a>
    <!-- <img src="./assets/img/infini.jpg" alt="Logo"> -->

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
      style="color: white"
    >
      <span class="fa fa-bars"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <div class="navbar-nav ms-auto py-0">
        <a href="#" @click="navigateToHomePage" class="nav-item nav-link active"
          >Accueil</a
        >
        <!-- <a href="about.html" class="nav-item nav-link">A Propos</a>
        <a href="service.html" class="nav-item nav-link">Services</a>
        <a href="project.html" class="nav-item nav-link">Projets</a> -->
        <!-- <div class="nav-item dropdown"> -->
          <!-- <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"
            >Pages</a
          > -->
          <!-- <div class="dropdown-menu m-0">
            <a href="team.html" class="dropdown-item">Our Team</a>
            <a href="testimonial.html" class="dropdown-item">Testimonial</a>
            <a href="404.html" class="dropdown-item">404 Page</a>
          </div> -->
        <!-- </div> -->
        <a href="#" @click="navigateToContactPage" class="nav-item nav-link"
          >Contact</a
        >
      </div>
      <!-- <button type="button" class="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button> -->
    </div>
  </nav>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const navigateToContactPage = () => {
  router.push({ path: "/contact" });
};

const navigateToHomePage = () => {
  router.push({ path: "/" });
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
});
</script>

<style scoped></style>
