<template>
  <ul class="job-list__list">
    <li v-for="job of AvailableJobs" class="job-list__list-item">
      <div class="job-list__job-wrapper"> 
        <p class="job-list__job-title">{{ job.annonsrubrik.substring(0, 30) }}<span v-if="job.annonsrubrik.length > 30">...</span></p>
        <p class="job-list__job-info"><span>{{ job.arbetsplatsnamn}}</span> i {{ job.kommunnamn }}</p>
      </div>
      <a class="job-list__job-link" :href="'/job/'+ job.annonsid"><i class="fas fa-chevron-circle-right"></i></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ListedJobs',
  props: ['JobList'],
  data() {
    return {
      AvailableJobs: []
    }
  },
  watch: {
    JobList (Jobs) {
      this.AvailableJobs = Jobs
    }
  }
}
</script>

<style scoped>

.job-list__list {
  padding: 1rem;
}

.job-list__list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0.5rem;
  border-bottom: 1px solid #cccccc;
  list-style: none;
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
