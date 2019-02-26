<template>
  <main class="contact-page">
    <div class="contact-page__wrapper">
      <h2 class="contact-page__heading">Kontakta mig här</h2>
      <ul class="contact-page__skill-list">
        <li><a class="contact-page__contact-link" :href="`mailto:${Mail}`">{{Mail}}</a></li>
        <li><a class="contact-page__contact-link" :href="`http://${HomePage}`" target="_blank">{{HomePage}}</a></li>
        <li><a class="contact-page__contact-link" :href="`http://${CV}`" target="_blank">{{CV}}</a></li>
      </ul>
      <h2 class="contact-page__heading">Har erfarenhet av</h2>
      <ul class="contact-page__skill-list">
        <li v-for="skill of Skills" class="contact-page__skill-list-item">
          <p class="contact-page__skill-title">{{skill.title}} <span>+ {{skill.lib}}</span></p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      Mail: 'patrik@arsenikrecords.se',
      HomePage: 'arsenikrecords.se/patrik',
      CV: 'arsenikrecords.se/patrik/cv',
      Skills: [
        {
          title: 'JavaScript',
          lib: 'Vue, React, Node & jQuery'
        },
        {
          title: 'PHP',
          lib: 'WordPress & Laravel'
        },
        {
          title: 'HTML5 & CSS3',
          lib: 'Bootstrap, Flex, SASS & BEM'
        },
        {
          title: 'Agila metoder',
          lib: 'Scrum, sprintar etc'
        },
      ]
    }
  }
}
</script>

<style scoped>

.contact-page__wrapper {
  display: flex;
  flex-direction: column;
  padding: 3rem 6.8rem;
}

.contact-page__heading {
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contact-page__skill-list {
  padding: 0;
  list-style: none;
}

.contact-page__skill-list-item {
  margin-bottom: 1rem;
}

.contact-page__contact-link {
  font-size: 1.4rem;
  text-decoration: none;
  color: black;
}

.contact-page__contact-link:hover {
  text-decoration: underline;
}

.contact-page__skill-title {
  font-size: 1.4rem;
}

.contact-page__skill-title span {
  font-size: 1rem;
  font-style: italic;
  color: #565656;
}

</style>
