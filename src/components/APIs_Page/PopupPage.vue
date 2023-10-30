<template>
  <div class="text-center">
    <div style="display: none;">{{ computedValue }}</div>
      <v-dialog
        @click="RemPopup"
        v-model="dialog"
        activator="parent"
        width="auto"
        theme="dark"
      >
        <v-card color="#222222" @click="RemPopup">
          <div class="d-flex justify-right pt-2"><v-icon icon="mdi-close" size="40"></v-icon></div>
          <v-card-text>
            {{ message }}
          </v-card-text>
        </v-card>
      </v-dialog>
  </div>
</template>
<script>
import { ref } from 'vue';
  export default {
    props: {
      popup_state: Boolean,
      removePopup: Function,
      message: String,
    },
    data () {
      let dialog = ref(false)
      return {
        dialog
      }
    },
    computed: {
      computedValue () {
        this.updateValue()
        console.log("from", this.popup_state)
        return this.popup_state
      },
     },
     methods: {
      updateValue() {
        this.dialog = this.popup_state
        console.log(this.dialog)
      },
      RemPopup ( ) {
        this.removePopup()
      }
    }
  }
</script>
