<template>
  <main class="front-page">
    <div class="front-page__wrapper">
      <p class="front-page__text">
        Applikationen är byggd med Vue.
        <br><br>
        100 listade frontend job visas från Arbetsförmedlingens API. Dom har gjort det lätt för utvecklare att hämta hem data med specifika sökvägar.
        <br><br>
        Jag valde att filtrera med hjälp av array funktioner.  
      </p>
      <h2 class="front-page__subheading">Tack för utmaningen!</h2>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>

.front-page {
  min-height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.front-page__text {
  padding: 0 5rem;
  font-size: 1.6rem;
  line-height: 1.8em;
}

.front-page__subheading {
  margin-top: 5rem;
  font-size: 2rem;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

</style>
