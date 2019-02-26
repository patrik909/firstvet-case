<template>
  <div id="app">
    <header>
      <h1>FirstVet Case</h1>
      <button class="open-nav">
        <div></div>
        <div></div>
        <div></div>
      </button>
      <nav>
        <div>
          <button>
            <div></div>
            <div></div>
          </button>
        </div>
        <div class="links">
          <a href="/">Hem</a>
          <a href="/json">Lista</a>
          <a href="/contact">Kontakt</a>         
        </div>
      </nav>
      <!-- <nav>
        <a href="/">Home</a>
        <a href="/json">JSON list</a>
        <a href="/contact">Contact</a>
      </nav> -->
    </header>
    <div class="underline"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

html {
  font-size: 10px;
}

#app {
  font-family: 'Lato';
}

body {
  margin: 0;
}

button {
  outline: none;
}

header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 15vh;
  padding: 0 1rem;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
}

.open-nav {
  border: none;
}

.open-nav div {
  margin: 0.5rem 0;
  width: 3rem;
  height: 0.3rem;
  background: black;
}

nav {
  position: absolute;
  top: 0;
  right: 0;
  background:rgba(0,0,0,0.8);
  width: 60vw;
  height: 100vh;
  z-index: 10;
}

nav {
  right: -60vw;
}

nav button {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border: none;
}
nav button div {
  position: absolute;
  top: 1.5rem;
  right: 3rem;
  background: white;
  width: 0.3rem;
  height: 3.3rem;

}

nav button div:nth-child(1) {
transform: rotate(45deg);
} 

nav button div:nth-child(2) {
transform: rotate(-45deg);
} 

nav .links {
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
}

nav .links a {
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 2rem;
  margin-left: 4rem;
  color: white;
  text-decoration: none;
}

nav .links a:hover {
  text-decoration: underline;
}

.underline {
  width: 95%;
  margin: auto;
  border-bottom: 1px solid #ededed;
}
</style>
