<template>

  <section class="src-components-conversor">
    <div class="container">
      <h1><u>Conversor de Temperaturas</u></h1>
      <br>
      <h5>Ingrese Temperatura °C: <input type="text" v-model="centigrados"></h5> 
      <h5>Conv Temperatura °F: <span :style="{color: getColor(centigrados)}">{{ convTemp.farenheit }}</span></h5>
      <h5>Conv Temperatura °K: <span :style="{color: getColor(centigrados)}">{{ convTemp.kelvin }}</span></h5>

     <hr>
      <p><b>Respuestas:</b> 1:c - 2:b - 3:c - 4:a </p>

    </div>
   
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-conversor',
    props: [],
    mounted () {

    },
    data () {
      return {
        centigrados: '',
        farenheit: '',
        kelvin: ''
      }
    },
    methods: {
      getColor(centigrados) {
        if(isNaN(centigrados)) return ''
        else if (centigrados <= 0) return 'yellow'
        else if (centigrados >= 0 && centigrados < 15) return 'pink'
        else return 'red'
      }
    },
    computed: {
      convTemp() {
        let farenheit = !isNaN(this.centigrados) && this.centigrados? (Number(this.centigrados) * 9/5)  + 32 : ''
        let kelvin = !isNaN(this.centigrados) && this.centigrados? Number(this.centigrados) + 273.15 : ''
        return {
          farenheit,
          kelvin
        }
      }
    }
}


</script>

<style scoped lang="css">

h1 {
  text-align: center;
}
</style>
