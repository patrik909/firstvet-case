<template>
  <div>
    {{jobContent.annons.annonsrubrik}}
    {{jobContent.annons.anstallningstyp}}
    {{jobContent.annons.kommunnamn}}
    {{jobContent.annons.annonstext}}
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
