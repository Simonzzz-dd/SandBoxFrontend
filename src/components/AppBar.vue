<template>

    <v-navigation-drawer   width="340" style="border: 0px; box-shadow: 2px 5px 10px #222222;  height: 100vh;" theme="dark" permanent >
      <v-card
        color="#c10013"
        height="90px"
        class="d-flex align-center rounded-0"
      >
        <v-avatar image="@/assets/voda-white.svg" size="50" class="ml-2"></v-avatar>
        <div
          class="font-weight-medium text-white ml-auto text-right mr-6"
        >
          Vodacom M-Pesa <br />DC Panel
        </div>
      </v-card>

      <v-divider></v-divider>

      <v-list density="compact" nav lines="two">
        <div class=" ml-2 mt-4 font-weight-normal text-red-accent-4 the-font">
          Transactions
        </div>
        <v-list-group value="API REQUEST">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="API Request"
              value="API REQUEST"
              class="API REQUEST"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="collection in apiRequestCollections"
            link="true"
            :key="collection"
            :to="`/request/${collection}`"
            v-bind="props"
            prepend-icon="mdi-arrow-right-bottom"
            :title="collection"
            :value="collection + 'jffbf'"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="API RESPONSE">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="API Response"
              value="API RESPONSE"
              class="API RESPONSE"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="collection in apiResponseCollection"
            :key="collection"
            v-bind="props"
            prepend-icon="mdi-arrow-right-bottom"
            :title="collection"
            :value="collection + 'jfy'"
          ></v-list-item>
        </v-list-group>

        <v-list-group value="TRANSACTION RESULT">
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              title="API Result"
              value="API RESULT4"
              class="API RESULT"
            ></v-list-item>
          </template>

          <v-list-item
            link="true"
            v-for="collection in ApiResultCollection"
            :key="collection"
            v-bind="props"
            prepend-icon="mdi-arrow-right-bottom"
            :title="collection"
            :value="collection"
          ></v-list-item>

        </v-list-group>
        <div class=" ml-2 mt-4 font-weight-normal text-red-accent-4  the-font">
          Settings
        </div>

        <v-list-item
          prepend-icon="mdi-account"
          title="My Account"
          value="account"
          exact="true"
          to="/"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-group-outline"
          title="Manage Users"
          value="users"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-security"
          title="Security"
          value="Security"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

</template>

<script>
import ConnectionMiddleware from '@/middleware/Connection';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const apiRequestCollections = ref([])
    const apiResponseCollection = ref([])
    const ApiResultCollection = ref([])



    onMounted(()=>{
      ConnectionMiddleware.ApiResponseCollections()
      .then(( res ) => {
        apiResponseCollection.value = res.sucess
          console.log(res)
        }).catch( err => console.log(err))

      ConnectionMiddleware.ApiRequestCollections()
      .then(( res ) => {
        apiRequestCollections.value = res.sucess
        console.log(res)
      }).catch( err => console.log(err))

      ConnectionMiddleware.ApiResultCollections()
      .then(( res ) => {
        ApiResultCollection.value = res.sucess
        console.log(res)
      }).catch( err => console.log(err))
    })

    return {
      open: ["Users"],
      ApiResultCollection,
      apiRequestCollections,
      apiResponseCollection
    };
  },
};
</script>
<style>

.the-font {

    font-size: 14px;
}


</style>
