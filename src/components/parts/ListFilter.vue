<template>
  <div class="job-list__filter">
    <p class="job-list__filter-title">Filter: </p>
    <button
      class="job-list__filter-button"
      v-bind:class="{ active: Region === 'hela Sverige' }"
      v-on:click="FilterList('hela Sverige')" 
    >
      Hela Sverige
    </button>
    <button 
      class="job-list__filter-button"
      v-bind:class="{ active: Region === 'Stockholm' }"
      v-on:click="FilterList('Stockholm')"
    >
      Stockholm
    </button>
    <button 
      class="job-list__filter-button"
      v-bind:class="{ active: Region === 'Göteborg' }"
      v-on:click="FilterList('Göteborg')"
    >
      Göteborg
    </button>
    <button 
      class="job-list__filter-button"
      v-bind:class="{ active: Region === 'Malmö' }"
      v-on:click="FilterList('Malmö')"
    >
      Malmö
    </button>
  </div>
</template>

<script>
export default {
  name: 'ListFilter',
  // data () {
  //   return {
  //     IsNavOpen: false
  //   }
  // },
  // methods: {
  //   OpenNav() {
  //     (!this.IsNavOpen) ? this.IsNavOpen = true : this.IsNavOpen = false
  //   }
  // }
}
</script>

<style scoped>

.job-list__filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 0 1rem;
  font-size: 1.2rem;
}

.job-list__filter-title {
  font-weight: 700;
}

.job-list__filter-button {
  height: 2.4rem;
  background: #efefef;
  border: none;
  border-radius: 0.3em;
}

/* .active {
  background: #565656;
  color: white;
  font-weight: 700;
} */

</style>
