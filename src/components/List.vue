<template>
  <main class="job-list">
    <div class="job-list__wrapper">
      <h2 class="job-list__title">Listar <span>{{AvailableJobs.length}}</span> frontend jobb i <span>{{Region}}</span></h2>
      <!-- <ListFilter /> -->


    <!-- <div class="job-list__filter">
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
    </div> -->

      <ListedJobs :JobList="AvailableJobs" />
    </div>
  </main>
</template>

<script>

import ListFilter from './parts/ListFilter'
import ListedJobs from './parts/ListedJobs'

export default {
  name: 'List',
  components: {
    ListFilter,
    ListedJobs
  },
  data () {
    return {
      AllJobs: [],
      AvailableJobs: [],
      Region: 'hela Sverige'
    }
  },
  created: function () {
    fetch('http://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?yrkesid=7633&antalrader=100')
    .then((res) => res.json())
    .then((response) => {
      this.AvailableJobs = response.matchningslista.matchningdata
      this.AllJobs = response.matchningslista.matchningdata
    })
  },
  methods: {
    FilterList (FilterValue) {
      this.Region = FilterValue
      if (FilterValue === 'hela Sverige') {
        this.AvailableJobs = this.AllJobs
      } else {
        this.AvailableJobs = this.AllJobs.filter(job => job.kommunnamn === FilterValue)
      }
    }
  }
}
</script>

<style scoped>

.job-list__wrapper {
  padding-top: 4rem;
}

.job-list__title {
  margin-bottom: 2rem;
  padding: 0 1.5rem;
  font-weight: 500;
  text-align: center;
}

.job-list__title span {
  font-weight: 700;
}

/* -- - */


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

.active {
  background: #565656;
  color: white;
  font-weight: 700;
}

</style>
