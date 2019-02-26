<template>
  <main class="job" v-if="jobContent.annons">
    <div class="job__wrapper">
      <h2 class="job__title">{{jobContent.annons.annonsrubrik}}</h2>
      <div class="job__underline"></div>
      <p class="job__work-place"><span>{{jobContent.arbetsplats.arbetsplatsnamn}}</span> i {{jobContent.arbetsplats.postort}}</p>
      <p class="job__info-text" v-for="jobInfo of JobInfoText">{{jobInfo}}</p>
      <a class="job__back-link" href="/list"> < Tillbaka</a>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Job',
  data () {
    return {
      jobContent: [],
      JobInfoText: ''
    }
  },
  created: function () {
    // Fetching job ad.
    fetch(`http://api.arbetsformedlingen.se/af/v0/platsannonser/${this.$route.params.id}`)
    .then((res) => res.json())
    .then((response) => {
      this.jobContent = response.platsannons
      // Turning string into array, to create breaklines.
      this.JobInfoText = response.platsannons.annons.annonstext.split('\n').map(text => { return text } )
    })
  }
}
</script>

<style scoped>

.job__wrapper {
  padding: 2rem;
}

.job__title {
  font-size: 3rem;
  margin-bottom: 1.6rem;
}

.job__work-place {
  margin-top: 2rem;
  margin-bottom: 4rem;
  font-size: 1.4rem;
  color: #565656;
}

.job__underline {
  border-bottom: 1px solid #565656;
  width: 60%;
}

.job__work-place span {
  font-style: italic;
}

.job__info-text {
  font-size: 1.2rem;
  line-height: 1.6em;
}

.job__back-link {
  display: inline-block;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 6rem;
  font-size: 1.4rem;
  font-style: italic;
  color: #565656;
}

</style>
