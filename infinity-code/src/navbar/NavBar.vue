<template>
            <nav class="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                <a href="" class="navbar-brand p-0">
                    <h1 class="m-0"><i class="fa-solid fa-infinity fa-xl pe-4" style="color: #ffffff;"></i>Infinity<span class="fs-5">Code</span></h1>
                </a>
                 <!-- <img src="./assets/img/infini.jpg" alt="Logo"> -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="fa fa-bars"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a href="index.html" class="nav-item nav-link active">Accueil</a>
                        <a href="about.html" class="nav-item nav-link">A Propos</a>
                        <a href="service.html" class="nav-item nav-link">Services</a>
                        <a href="project.html" class="nav-item nav-link">Projets</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="team.html" class="dropdown-item">Our Team</a>
                                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                <a href="404.html" class="dropdown-item">404 Page</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link">Contacte</a>
                    </div>
                    <!-- <button type="button" class="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button> -->
                </div>
            </nav>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

onMounted(() => {
  console.log('DOM chargé et prêt');
  if ($) {
    console.log('jQuery est chargé');
  } else {
    console.error('jQuery ne se charge pas');
  }

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $('.navbar').addClass('sticky-top shadow-sm');
    } else {
      $('.navbar').removeClass('sticky-top shadow-sm');
    }
  });
})
</script>

<style scoped>
</style>
