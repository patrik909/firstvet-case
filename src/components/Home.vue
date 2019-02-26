<template>
  <div class="front-page">
    <p>Den här appen bygger på <span>Vue.JS</span> och byggdes som case för <span>FirstVet.</span></p>
    <p>Appen visar 100 <span>frontend job</span> i <span>hela Sverige</span> med möjlighet för <span>filtrering</span> på städerna <span>Stockholm</span>, <span>Göteborg</span> och <span>Malmö</span>.</p>
    <p><span>Arbetsförmedlingens API</span> gör det lätt för utvecklare att hämta hem data med specifika sökvägar. Jag valde däremot att filtrera datan med array funktioner.</p>
    <h3>Tack för utmaningen!</h3>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.front-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 85vh;
  padding: 0 4rem;
}

.front-page p {
  font-size: 1.2rem;
  margin-bottom: 4rem;
  letter-spacing: 0.08em;
  line-height: 1.8em;
  text-transform: uppercase;
}

.front-page p span {
  font-weight: 700;
}

h3 {
  font-size: 2rem;
  letter-spacing: 0.08em;
  line-height: 1.8em;
  text-transform: uppercase;
  text-align: center;
}

</style>
