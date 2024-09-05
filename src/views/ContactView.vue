<template>
  <div class="container-xxl py-5">
    <div class="container px-lg-5">
      <div class="row justify-content-center">
        <div class="col-lg-7">
          <div class="section-title position-relative text-center mb-5 pb-2">
            <h6 class="position-relative d-inline text-primary ps-4">
              Pour nous Contacter
            </h6>
            <h2 class="mt-2">Contact For Any Query</h2>
          </div>
          <div>
            <form @submit.prevent="sendEmail">
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                       
                      placeholder="Votre Nom"
                    />
                    <label for="name">Votre Nom</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      v-model="email"
                      placeholder="Votre Email"
                    />
                    <label for="email">Votre Email</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      v-model="subjects"
                      placeholder="Sujet"
                    />
                    <label for="subject">Sujet</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      id="message"
                      v-model="message"
                      placeholder="Laissez un message ici"
                      style="height: 150px"
                    ></textarea>
                    <label for="message">Message</label>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-success w-100 py-3" type="submit">
                    Envoyer le Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import NavBar from "../navbar/NavBar.vue";
import Footer from "../footer/Footer.vue";
import Email from "../assets/smtp/smtp.js";


const name = ref("");
const email = ref("");
const subjects = ref("");
const message = ref("");

const sendEmail = (): void => {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: import.meta.env.VITE_USERNAME,
    Port: 587,
    Password: import.meta.env.VITE_PASSWORD,
    To: import.meta.env.VITE_TO,
    From: import.meta.env.VITE_FROM,
    Name: name.value,
    Subject: subjects.value,
    Body: `
            <h4>Nouveau message de contact</h4>
            <p><strong>Nom :</strong> ${name.value}</p>
            <p><strong>Email :</strong> ${email.value}</p>
            <p><strong>Sujet :</strong> ${subjects.value}</p>
            <p><strong>Message :</strong> ${message.value}</p>
        `
  }).then((message: string) => alert(message));
};
</script>
