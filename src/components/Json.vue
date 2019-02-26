<template>
  <div class="job-list">

    <h2>Listar <span>{{AvailableJobs.length}}</span> frontend jobb i <span>{{Region}}</span></h2>

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


    <ul class="job-list__list">
      <li v-for="job in AvailableJobs"  class="job-list__list-item">
        <div class="job-list__job-wrapper"> 
          <p class="job-list__job-title">{{ job.annonsrubrik.substring(0, 30) }}<span v-if="job.annonsrubrik.length > 30">...</span></p>
          <p class="job-list__job-info"><span>{{ job.arbetsplatsnamn}}</span> i {{ job.kommunnamn }}</p>
        </div>
        <a class="job-list__job-link" v-bind:href="'/jsonresult/'+ job.annonsid"><i class="fas fa-chevron-circle-right"></i></a>
      </li>
    </ul>

    
  </div>
</template>

<script>
export default {
  name: 'Json',
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


h2 {
  margin-bottom: 2rem;
  padding: 0 1.5rem;
  font-weight: 500;
  text-align: center;
}

h2 span {
  font-weight: 700;
}

.job-list {
  padding-top: 4rem;
  min-height: 90vh;
}


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


.job-list__list {
  padding: 1rem;
}

.job-list__list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  padding: 2rem 0.5rem;
  border-bottom: 1px solid #cccccc;
}

.job-list__list-item:first-child {
  border-top: 1px solid #cccccc;
}

.job-list__job-title {
  margin: 0;
  margin-bottom: 0.8rem;
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.job-list__job-info {
  margin: 0;
  font-weight: 500;
  font-size: 1.4rem;
  color: #595959;
}

.job-list__job-info span {
  font-style: italic;
}

.job-list__job-link {
  font-size: 2.5rem;
  color: #c1c1c1;
}

</style>
