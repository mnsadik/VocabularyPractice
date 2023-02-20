<template>
  <v-app dark>
    <v-app-bar app flat>
      <v-container class="d-flex justify-space-between">
        <v-toolbar-title>Vocabulary Practice</v-toolbar-title>
        <nuxt-link to="/">
          <v-icon> mdi-home </v-icon>
        </nuxt-link>
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
