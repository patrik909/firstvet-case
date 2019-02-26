<template>
  <div>
    <h2>{{jobContent.annons.annonsrubrik}}</h2>
    <h3>{{jobContent.annons.anstallningstyp}} i {{jobContent.annons.kommunnamn}}</h3>
    <p>{{jobContent.annons.annonstext}}</p>
  </div>
</template>

<script>
export default {
  name: 'JsonResult',
  data () {
    return {
      jobContent: []
    }
  },
  created: function () {
    fetch(`http://api.arbetsformedlingen.se/af/v0/platsannonser/${this.$route.params.id}`)
    .then((res) => res.json())
    .then((response) => {
      this.jobContent = response.platsannons
      console.log( this.jobContent)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
