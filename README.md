# firstvet-case

Case for job application built with Vue, fetching data from Arbetsförmedlingens API.

## Setup

```
npm install
npm run dev
```

## File structure

```
.
+-- App.vue
+-- router/
|   +-- index.js (Routes with paths etc.)
+-- components/
    +-- Contact.vue (Contact page)
    +-- Home.vue (Home page)
    +-- Job.vue (Displays selected job by id)
    +-- List.vue (Lists 100 front end jobs in Sweden)
    +-- components/parts/
        +-- Header.vue (Header for app, with hamburger nav)
        +-- ListedJobs.vue (Looping list of jobs)
        +-- ListFilter.vue (Holds filterbuttons)
```
