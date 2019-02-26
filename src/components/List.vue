<template>
  <main class="job-list">
    <div class="job-list__wrapper">
      <h2 class="job-list__title">Listar <span>{{AvailableJobs.length}}</span> frontend jobb i <span>{{Region}}</span></h2>
      <ListFilter @clicked="FilterList"/>
      <ListedJobs :JobList="AvailableJobs"  v-if="AvailableJobs"/>
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
      /*  Sets AllJob and AvailableJobs
          AllJobs holds all listed jobs, to be able to use the same fetched array when unfilter..
          AvailableJobs is looped in the DOM. */
      this.AvailableJobs = this.AllJobs = response.matchningslista.matchningdata
    })
  },
  methods: {
    FilterList (FilterValue) {
      this.Region = FilterValue
      if (FilterValue === 'hela Sverige') {
        // Lists all the jobs from AllJobs-holder array.
        this.AvailableJobs = this.AllJobs
      } else {
        // Filtering AllJobs by selected city.
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

</style>
