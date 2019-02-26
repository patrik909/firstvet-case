<template>
  <div id="app">
    <header>
      <h1>Firstvet Case</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/json">JSON list</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Lato';
}
</style>
