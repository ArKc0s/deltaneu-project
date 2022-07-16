<template>
  <q-page class="flex full-width column content-center">

    <div class="self-center">
        <h4>Projet Alternance Delta NEU</h4>
    </div>

    <div class="self-center">
      <p>Site internet réalisé par Léo Wadin avec le framework VueJS Quasar</p>
    </div>

    <br><br>

    <div class="self-center" style="min-width: 60vw; max-width: 60vw; text-align: center;">
      <p>
        La première page est un formulaire en schéma imposé, la liste ISO des pays a été récupérée en utilisant le 
        package <b>i18n-iso-countries</b>, et la liste des indcatifs téléphoniques avec le package 
        <b>country-codes-list</b>. La deuxième page permet d'utiliser l'API Twitch avec <b>axios</b>, un token est 
        généré lors de l'envoi du formulaire, ensuite les données de la chaine sont récupérées via une requête GET à 
        l'API.
      </p>
    </div>

    <br><br><br>

    <q-btn class="form-button" size="20px" label="Page de formulaire avec schéma imposé" no-caps>
      <router-link append to="/form" class="absolute full-width full-height"/>
    </q-btn>

    <br><br>

    <q-btn class="form-button" size="20px" label="Interaction avec l'API Twitch" no-caps>
      <router-link append to="/twitch" class="absolute full-width full-height"/>
    </q-btn>
    
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})

</script>
