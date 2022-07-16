<template>
    <q-page class="flex full-width column content-center">

    <div class="self-center">
      <h4>Formulaire</h4>
    </div>
    
    <br>

    <formcomp></formcomp>
       
    </q-page>
</template>

<script>
import FormComp from "components/FormComp.vue"

export default {
  name: "FormPage",
  components: {
    formcomp: FormComp,
  },
}
</script>
