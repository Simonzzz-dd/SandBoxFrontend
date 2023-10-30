<template lang="">
  <div class="">
    <v-card style="min-height: 80vh" theme="dark" flat class="ma-5">
      <!-- <PopupPage
      :message="message"
      :removePopup="removePopup"
      :popup_state = "popup_state"
  ></PopupPage> -->
      <v-toolbar
      class="pa-3"
      dense
      compact
      floating
    >
      <v-text-field
        density="compact"
        hide-details
        prepend-icon="mdi-magnify"
        single-line
      ></v-text-field>
    </v-toolbar>

    <div  style="width:100%" >
      <v-table
      style="width:100%; overflow-y: scroll; max-height: 70vh;"
      density="compact"
      fixed-header

      >
        <div style="max-width: 100%;   overflow-x: scroll;">


        <thead>
          <tr>
            <th v-for="header_ in tableHeader" :key="header_" class="text-left pa-3  pl-4 table-header" style="border-bottom: 1px solid #505050">
              {{header_}}
            </th>
            <th class="text-center pr-3 pa-3 table-header" style="border-bottom: 1px solid #505050" v-if="tableHeader.length > 0">
              Api Request
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class=""

            v-for="item in tableBody"
            :key="item._id"
          >
            <td class="text-left pa-3 pb-3 pt-2 pl-4 table-header" style="border-bottom: 1px solid #505050" v-for="header_ in tableHeader" :key="header_">{{ item[header_] }}</td>
            <td class="text-left pa-3 pb-3 pt-2 pl-4 table-header" style="border-bottom: 1px solid #505050">
              <v-btn append-icon="mdi-web" flat variant="text" @click="()=>viewBody(item.api_req_body)">View Api</v-btn>
            </td>
          </tr>
        </tbody>
      </div>
      </v-table>
    </div>



    </v-card>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import ConnectionMiddleware from "../../middleware/Connection";
// import PopupPageVue from '../../components/APIs_Page/PopupPage.vue';

export default {
  components: [
    // PopupPageVue------------------------------------------------------hgp
  ],
  data() {
    const tableHeader = ref([]);
    const tableBody = ref([]);
    onMounted(() => {
      ConnectionMiddleware.ApiRequestDocuments({
        collectionName: this.$route.params.type,
      })
        .then((res) => {
          const documents_ = res.responseData.documents;
          tableBody.value = documents_;
          const filteredDocArray = documents_
            .slice(documents_.length - 10, documents_.length)
            .map((doc) => {
              const filteredDoc = Object.keys(doc).filter((ele) => {
                return ele !== "_id" && ele !== "__v" && ele !== "api_req_body";
              });
              return filteredDoc;
            });

          filteredDocArray.forEach((doc) => {
            doc.forEach((ele) => {
              if (!tableHeader.value.includes(ele)) {
                tableHeader.value.push(ele);
              }
            });
          });

          console.log(tableHeader.value);
        })
        .catch((err) => {
          console.log(err);
        });
    });

    return {
      popup_state: false,
      message: "",
      tableHeader,
      tableBody,
    };
  },
  methods: {
    removePopup ( ) {
      this.popup_state = false
      this.message=""
      this.color = ""
    },
    viewBody( data ){
      console.log(data)
      this.popup_state = true
      this.message = data
    }
  },
  watch: {
    "$route.params.type": function (newType) {
      console.log(newType)
      this.tableHeader = []
      ConnectionMiddleware.ApiRequestDocuments({
        collectionName: this.$route.params.type,
      })
        .then((res) => {
          const documents_ = res.responseData.documents;
          this.tableBody = documents_;
          const filteredDocArray = documents_
            .slice(documents_.length - 10, documents_.length)
            .map((doc) => {
              const filteredDoc = Object.keys(doc).filter((ele) => {
                return ele !== "_id" && ele !== "__v" && ele !== "api_req_body";
              });
              return filteredDoc;
            });

          filteredDocArray.forEach((doc) => {
            doc.forEach((ele) => {
              if (!this.tableHeader.includes(ele)) {
                this.tableHeader.push(ele);
              }
            });
          });

          console.log(this.tableHeader);
        })
        .catch((err) => {
          console.log(err);

        });
    },
  },
};
</script>
<style>
.table-header {
  color: #dddddd;
  font-size: 14px;
}
</style>
