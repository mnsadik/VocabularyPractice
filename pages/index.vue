<template>
  <div>
    <!-- <v-card class="mx-auto" max-width="300" tile>
      <v-list dense>
        <v-subheader>REPORTS</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in this.$store.state.words"
            :key="i"
            nuxt
            :to="`/words/${item.word}`"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.word"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card> -->
    <v-card>
      <v-card-title>
        List
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="this.$store.state.words"
        :search="search"
      >
        <template v-slot:item.actions="{ item }">
          <nuxt-link :to="item.url">view more</nuxt-link>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "Word", align: "start", value: "word" },
        { text: "Actions", align: "end", value: "actions", sortable: false },
      ],
    };
  },
};
</script>
