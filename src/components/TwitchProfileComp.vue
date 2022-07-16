<template>
    <q-card>
        <q-card-section>

            <div class="flex full-width row justify-evenly width-80">

                <div class="col-8">
                    <div class="flex full-width row justify-start content-center">
                        <p class="col-6"><b>ID Twitch :</b> {{ id }}</p>
                        <p class="col-6"><b>Pseudonyme :</b> {{ displayName }}</p>

                        <br><br><br>

                        <p class="col-6"><b>Date de création :</b> {{ creationDate }}</p>
                        <p class="col-6"><b>Nombre de vues :</b> {{ views }}</p>

                        <br><br><br>

                        <p class="col-12"><b>Description :</b><br> {{ desc }}</p>

                        <br><br><br>

                        <p class="col-12"><b>URL : </b> 
                            <a 
                                :href="'https://twitch.tv/' + displayName" 
                                target="_blank">{{ 'https://twitch.tv/' + displayName }}
                            </a>
                        </p>
                        
                    </div>
                </div>

                <div class="col-4 img-container">
                    <img :src="profileImgUrl">
                </div>

            </div>

        </q-card-section>
    </q-card>
</template>

<script>

export default {

    props: {
        id: {
            type: String
        },
        displayName: {
            type: String
        },
        creationDate: {
            type: String
        },
        views: {
            type: String
        },
        desc: {
            type: String
        },
        profileImgUrl : {
            type: String
        }
    }
}

</script>

