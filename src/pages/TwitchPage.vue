<template>
    <q-page class="flex full-width column content-center">

    <div class="self-center">
        <h4>Récupération de données avec l'API Twitch</h4>
    </div>
    <br>

    <q-card>
        <q-card-section>
            <q-form @submit="generateToken" class="q-gutter-md">
                <div class="flex full-width row justify-center items-center content-center width-80">

                    <q-input 
                        class="col-8 input-m-20"
                        v-model="twitchChannel" 
                        label="Chaine Twitch" 
                        placeholder="ex: aypierre" 
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Entrez un nom correct']"
                    />

                    <q-btn class="form-button" label="Récupérer les données" type="submit"/>

                </div>

            </q-form>
        </q-card-section>
    </q-card>

    <br>
    <p class="error-msg">{{ errorMsg }}</p>
    <br>

    <twitch-profile-comp 
        :id="id" 
        :displayName="displayName" 
        :creationDate="creationDate" 
        :views="views" 
        :desc="desc"
        :profileImgUrl="profileImgUrl"
    >
    </twitch-profile-comp>
 
    </q-page>
</template>

<script>

import { idApi } from 'boot/axios'
import { api } from 'boot/axios'
import { ref } from 'vue'

import TwitchProfileComp from 'components/TwitchProfileComp.vue'

export default {

  name: "TwitchPage",
  components: {
      TwitchProfileComp,
  },
  setup() {
    const twitchChannel = ref(null)
    const token = ref(null)

    const errorMsg = ref(null)

    const data = ref(null)
    const profileImgUrl = ref(null)
    const id = ref(null)
    const displayName = ref(null)
    const desc = ref(null)
    const creationDate = ref(null)
    const views = ref(null)

    displayName.value = ""

    function generateToken () {

        idApi.post('/oauth2/token', {
            client_id: 'arncy0jv9uwb7z0e39hl2y01fbl64k',
            client_secret: 'i4usr0xlbl1mextucsgq67jtww5929',
            grant_type: 'client_credentials'
        })
        .then((response) => {
            token.value = response.data.access_token
        })
        .catch((error) => {
            console.log("Erreur dans l'éxecution de la requête de génération du token OAuth : " + error)
        })
        .finally(() => {
            getChannelInfo()
        })
       
    }

    function getChannelInfo() {

        api.get('/helix/users', {
            headers: {
                'Client-ID': 'arncy0jv9uwb7z0e39hl2y01fbl64k',
                'Authorization': 'Bearer ' + token.value
            },
            params: {
                login: twitchChannel.value
            }
        })
        .then((response) => {
            console.log(response.data.data)

            if(response.data.data[0] == null) {
                errorMsg.value = "Chaine non trouvée ! Vérifiez l'orthographe"
                profileImgUrl.value = ""
                id.value = ""
                displayName.value = ""
                desc.value = ""
                creationDate.value = ""
                views.value = ""

            } else {

                errorMsg.value = ""
                data.value = response.data.data[0]

                profileImgUrl.value = data.value.profile_image_url
                id.value = data.value.id
                displayName.value = data.value.display_name
                desc.value = data.value.description
                creationDate.value = data.value.created_at
                views.value = data.value.view_count

            }

            
        })
        .catch((error) => {
            console.log(error)
            errorMsg.value = "Erreur : " + error
        })
    }

  return { twitchChannel, profileImgUrl, id, displayName, desc, creationDate, views, generateToken, errorMsg } 
  }
}

</script>
