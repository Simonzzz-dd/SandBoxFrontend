<template lang="">
  <div style="position: fixed; width: 100vw; height: 100vh" class="hero"></div>
  <div style="height: 100vh; width: 100vw;  background-color: #222222" class="d-flex justify-center align-center ">
  <PopupPage
  :message="message"
  :color="color"
  :removePopup="removePopup"
  :popup_state = "popup_state"
  :icon_="icon_"
  ></PopupPage>
  <v-card
    class="mx-auto"
    width="800"
  >


    <v-toolbar
      color="#c10013"
      dark
      height="15"
    >
    </v-toolbar>

    <v-container class="pa-0 bg-grey-lighten a" fluid>
      <v-row dense>
        <v-col
          class="pa-0 pt-1"
          :cols="4"
        >
          <v-card style="border-radius: 0px" >
            <v-carousel
            :continuous="false"
            cycle
            :show-arrows="false"
            hide-delimiters
            width="100%"
            hide-delimiter-background
            height="400"
            >
            <v-carousel-item
                src="./src/assets/dom.jpg"
                cover
              ></v-carousel-item>

              <v-carousel-item
                src="./src/assets/boat.jpg"
                cover
              ></v-carousel-item>

              <v-carousel-item
                src="./src/assets/carousel.jpg"
                cover
              ></v-carousel-item>
            </v-carousel>

          </v-card>
        </v-col>
        <v-col
          :cols="8"
          class=" pa-0 pt-1"
        >
          <v-card class="bg-grey-lighten-3" style="border-radius: 0px" flat width="100%" height="100%">
            <form>
            <div class="text-center mt-11">Welcome to M-pesa DC Panel</div>
            <H1 class="text-center mb-6">Login</H1>
            <v-text-field
              class="ma-4 mt-5 mb-0"
              label="Your Email"
              density="compact"
              v-model="email"

              hint="ivancomo@gmail.com"
              variant="outlined"
            ></v-text-field>
            <div
              class=" text-decoration-none text-green text-right  pr-4 mt-0"
              style="font-size: 14px"

              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
            Forgot login password?</div>
            <v-text-field
              class="ma-4 mt-0"
              label="Your Password"
              density="compact"
              v-model="password"
              variant="outlined"
              :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show2 ? 'text' : 'password'"
              name="input-10-2"
              @click:append-inner="show2 = !show2"

            ></v-text-field>


            <div class="text-center">
              <v-btn
                class="text-none"
                color="#dddddd"
                @click="()=>loginUser(email, password)"
                min-width="152"

                flat
              >
                Submit
              </v-btn>
            </div>

          </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-toolbar
      color="#8ec987"
      dark
      height="15"
    >
    </v-toolbar>
  </v-card>
  <v-avatar style="position: fixed; bottom: 30px; right: 30px" image="@/assets/voda-logo.svg" size="90" class="ml-2"></v-avatar>
  </div>

</template>
<script>
import { ref } from "vue";
import ServerConnection from "../middleware/Connection"
import PopupPage from "@/components/PopupPage.vue";
export default {

  components: {
    PopupPage
  },
  data: () => {
    const email = ref("")
    const password = ref("")
    const active = ref(false);


    return {
      active,
      message: "",
      color: "",
      icon_: "",
      popup_state: false,
      show1: false,
      email,
      show2: true,
      password,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
    };
  },
  methods: {
    async loginUser ( email, password ) {
        try {
          await ServerConnection.Login({email, password})
          this.message = "succesful login"
          this.color = "#8ec987"
          this.icon_="mdi-emoticon-happy"
          this.popup_state = true
          setTimeout(()=>{
            this.removePopup()
          }, 1000)
          let push = this.$router
          setTimeout(()=>{
            push.push("/")
          },2000)
        } catch ( err ) {
          this.message = err
          this.color = "#c10013"
          this.popup_state = true
          this.icon_="mdi-emoticon-sad"
        }
    },
    removePopup ( ) {
      this.popup_state = false
      this.message=""
      this.color = ""
    }

  }
};
</script>
<style scope>
.hero {
  background: url("../assets/image.jpg") repeat;
  opacity: 0.05;
  height: 100vh;
}

</style>
