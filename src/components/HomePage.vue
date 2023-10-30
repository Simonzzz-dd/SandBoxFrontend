<template lang="">
  <v-main class="d-flex align-center justify-center  pa-5" style="height: 100vh">
    <v-card flat theme="dark" color="#efefef" width="100%" style="max-width: 850px" height="500px" class="ma-2 pa-0">
      <v-row  style="height: 100%"  dense>
        <v-col style="height: 50%" class=" pa-2 pb-1 pr-1" cols="5">
          <v-card
            class="red-gradient"
            height="100%"
            color="#c10013"
            theme="dark"
          >
            <v-avatar image="@/assets/voda-white.svg" size="75"></v-avatar>
            <v-card-title class="text-h5">
              Mark Five
            </v-card-title>

            <v-card-subtitle>Role: Software Developer</v-card-subtitle>

            <v-card-actions>
              <v-btn variant="text">
                markfive@vm.co.mz
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="7" style="height: 50%" class=" pa-2 pb-1 pl-0">
          <v-card
            height="100%"
            color="#8EC987"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-avatar image="@/assets/m-pesa.svg" style="margin-top: -15px; margin-bottom: -10px; margin-left: -15px" size="100"></v-avatar>
                <v-card-title class="text-h5">
                  Vodacom M-Pesa
                </v-card-title>

                <v-card-subtitle>Maputo-Mozambique <br> Business Config Team</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ms-2"
                    variant="outlined"
                    size="small"
                  >
                  "Get it done toghether"
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                style="opacity: .2"
                class="ma-3"
                size="170"
                rounded="0"
              >
                <v-img src="@/assets/download.svg"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" style="height: 50%" class=" pa-2 pt-0 pb-0">
          <v-card
            height="100%"
            color="#d4d4d4"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div style="width: 50%">
                <v-card-title class="text-h5">
                  Change Password
                </v-card-title>

                <v-text-field
                  class="ma-4 mt-5 mb-0"
                  label="Your Email"
                  density="compact"

                  model-value="Enter Your Email"
                  hint="ivancomo@gmail.com"
                  variant="outlined"
                ></v-text-field>

                <v-text-field
                  class="ma-4 mt-0 mb-0"
                  label="Your Email"
                  model-value="Enter Your Password"
                  hint="ivancomo@gmail.com"
                  density="compact"

                  variant="outlined"

                  name="input-10-2"


                ></v-text-field>
                <div class="mb-4 ml-4">
                <v-btn
                  class="text-none"
                  color="#dddddd"

                  min-width="152"

                  flat
                >
                  Submit
                </v-btn>
                </div>
              </div>



              <v-carousel
                :continuous="false"
                cycle
                :show-arrows="false"
                hide-delimiters
                style="max-width:550px"
                width="200px"
                hide-delimiter-background
                height="100%"
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
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-main>
</template>
<script>
export default {

}
</script>
<style>
  .my-red {
    background-color: #c10013;
  }
  .red-gradient {
    background: rgb(150,7,21);
    background: linear-gradient(90deg, rgba(150,7,21,1) 0%, rgba(193,0,19,1) 35%, rgba(193,0,19,1) 100%);
  }
</style>
