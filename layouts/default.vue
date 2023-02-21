<template>
  <v-app dark>
    <v-app-bar app flat>
      <v-container class="d-flex justify-space-between align-center">
        <v-toolbar-title>Vocabulary Practice</v-toolbar-title>
        <div>
          <v-btn nuxt to="/" class="mx-1" outlined text
            ><v-icon left> mdi-home </v-icon>Home</v-btn
          >
          <v-btn nuxt to="/add" class="mx-1" outlined text
            ><v-icon left> mdi-pencil-plus </v-icon> Add</v-btn
          >
        </div>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
      <v-container class="my-0 py-0">
        <span>
          &copy;
          <a
            href="http://mnsadik.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            M.N. Sadik
          </a>
          || {{ new Date().getFullYear() }}
        </span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {};
</script>
