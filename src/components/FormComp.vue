<template>
  <q-card class="width-30">
    <q-card-section>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">

        <div class="flex row">
          <q-input
              class="input-m-88 col-5"
              v-model="name"
              label="Nom *"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Entrez un nom correct']"
          />

          <q-input
              class="col-5"
              v-model="surname"
              label="Prénom *"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Entrez un prénom correct']"
          />
        </div>

        <q-input
          v-model="address"
          label="Adresse *"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Entrez une adresse correcte']"
        />

        <q-select 
          v-model="country" 
          :options="countryList" 
          label="Pays *" 
          :rules="[ val => val && val.length > 0 || 'Sélectionnez un pays']"
        />

        <div class="flex row">
          <q-select 
            class="col-4"
            v-model="code" 
            :options="codesList" 
            label="Indicatif *" 
            :rules="[ val => val && val.length > 0 || 'Sélectionnez un indicatif']"
          />
          <q-input
            class="col-8"
            v-model="phone"
            label="Téléphone *"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Entrez un numéro correct']"
          />

        </div>

        <br>

        <div>
          <q-btn label="Envoyer" type="submit" color="primary"/>
          <q-btn label="Annuler" type="reset" color="primary" flat class="q-ml-sm" />
        </div>

      </q-form>

    </q-card-section>
  </q-card>
</template>

<script>
import { ref } from 'vue'


export default {
  setup () {

    const name = ref(null)
    const surname = ref(null)
    const address = ref(null)
    const country = ref(null)
    const code = ref(null)
    const phone = ref(null)

    const countryList = [] 
    const codesList = []

    const countries = require("i18n-iso-countries")
    countries.registerLocale(require("i18n-iso-countries/langs/fr.json"))

    const countriesListObject = countries.getNames("fr", { select : "official" })
    for (let key in countriesListObject) {
      let value = countriesListObject[key]
      countryList.push(value)
    }

    const countryCodes = require('country-codes-list')

    const countryCodesListObject = countryCodes.customList('countryCode', ' [{countryCode}] +{countryCallingCode}')
    for (let key in countryCodesListObject) {
        let value = countryCodesListObject[key]
        codesList.push(value)
      }
    codesList.sort()

    return {
      name,
      surname,
      address,
      country,
      code,
      phone,
      countryList,
      codesList,

      onSubmit () {
        console.log(
          "Formulaire envoyé \n" 
        + "Nom : " + name.value + "\n"
        + "Prénom : " + surname.value + "\n"
        + "Adresse : " + address.value + "\n"
        + "Pays : " + country.value + "\n"
        + "Téléphone : (" + code.value.substr(code.value.indexOf('+')) + ")" + phone.value
        )
      },

      onReset () {
        name.value = null
        surname.value = null
        address.value = null
        country.value = null
        code.value = null
        phone.value = null
      }
    }
  }
}
</script>