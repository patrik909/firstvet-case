<template>
  <div id="app">
    <Header />
    <div class="underline"></div>
    <router-view/>
  </div>
</template>

<script>

import Header from './components/parts/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
      IsNavOpen: false
    }
  },
  methods: {
    OpenNav(HandleValue) {
      this.IsNavOpen = HandleValue
    }
  }
}
</script>

<style>

html {
  font-size: 10px;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  background: #565656;
}

button {
  border: none;
  cursor: pointer;
  outline: none;
}

#app {
  width: 375px;
  min-height: 667px;
  font-family: 'Lato';
  background: white;
}

.underline {
  width: 90%;
  margin: auto;
  border-bottom: 1px solid #ededed;
}

main {
  width: 100%;
}
</style>
