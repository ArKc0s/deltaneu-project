<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="main-toolbar">
       
        <q-toolbar-title >
          Travaux Pratiques - Léo Wadin
        </q-toolbar-title>

        <div class="menu">
          <router-link append to="/" class="menu-link"><a>Accueil</a></router-link>
          <router-link append to="/form" class="menu-link"><a>Formulaire</a></router-link>
          <router-link append to="/twitch" class="menu-link"><a>API Twitch</a></router-link>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>
