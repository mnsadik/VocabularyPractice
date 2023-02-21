<template>
  <v-card class="rounded-lg">
    <v-card-title>
      <span class="mx-auto text-h4 my-2">Add a new word !</span>
    </v-card-title>
    <v-card-text>
      <v-form v-model="valid">
        <v-container>
          <v-row align="center">
            <v-col cols="12" sm="3" lg="2" xl="1">
              <strong class="text-body-1">Word</strong>
            </v-col>
            <v-col cols="12" sm="9" lg="10" xl="11">
              <v-text-field
                v-model="word"
                dense
                outlined
                hide-details="auto"
                :rules="rules"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" lg="2" xl="1">
              <strong class="text-body-1">Meaning</strong>
            </v-col>
            <v-col cols="12" sm="9" lg="10" xl="11">
              <v-text-field
                v-model="meaning"
                dense
                outlined
                hide-details="auto"
                :rules="rules"
                required
              ></v-text-field>
            </v-col>

            <!-- ############## Synonyms ############## -->

            <v-col cols="12" sm="3" lg="2" xl="1">
              <strong class="text-body-1">Synonym</strong>
            </v-col>
            <v-col cols="12" sm="9" lg="10" xl="11">
              <v-text-field
                v-model="synonym"
                dense
                outlined
                hide-details="auto"
                :append-outer-icon="synonym ? 'mdi-plus' : ''"
                @click:append-outer="add('syn')"
                @keypress.enter="add('syn')"
                required
              >
                <template v-slot:prepend-inner>
                  <v-chip
                    class="mx-1"
                    small
                    close
                    v-for="(item, i) in synonyms"
                    :key="i"
                    @click:close="remove(i, 'syn')"
                  >
                    {{ item.word }}
                  </v-chip>
                </template>
              </v-text-field>
            </v-col>

            <!-- ############## Antonyms ############## -->

            <v-col cols="12" sm="3" lg="2" xl="1">
              <strong class="text-body-1">Antonym</strong>
            </v-col>
            <v-col cols="12" sm="9" lg="10" xl="11">
              <v-text-field
                v-model="antonym"
                dense
                outlined
                hide-details="auto"
                :append-outer-icon="antonym ? 'mdi-plus' : ''"
                @click:append-outer="add('ant')"
                @keypress.enter="add('ant')"
                required
              >
                <template v-slot:prepend-inner>
                  <v-chip
                    class="mx-1"
                    small
                    close
                    v-for="(item, i) in antonyms"
                    :key="i"
                    @click:close="remove(i, 'ant')"
                  >
                    {{ item.word }}
                  </v-chip>
                </template>
              </v-text-field>
            </v-col>

            <!-- ############## Examples ############## -->

            <v-col cols="12" sm="3" lg="2" xl="1">
              <strong class="text-body-1">Example</strong>
            </v-col>
            <v-col cols="12" sm="9" lg="10" xl="11">
              <v-text-field
                v-model="example"
                dense
                outlined
                hide-details="auto"
                :append-outer-icon="example ? 'mdi-plus' : ''"
                @click:append-outer="add('ex')"
                @keypress.enter="add('ex')"
                required
              ></v-text-field>
              <v-chip
                class="mx-1 mt-2"
                small
                close
                v-for="(item, i) in examples"
                :key="i"
                @click:close="remove(i, 'ex')"
              >
                {{ item }}
              </v-chip>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-snackbar v-model="snackbar" timeout="3000" text>
        {{ snackbartext }}
      </v-snackbar>
    </v-card-text>
    <v-card-actions
      ><v-btn class="px-8 mx-auto mb-6" :disabled="!valid" @click="submit">
        Submit
      </v-btn></v-card-actions
    >
  </v-card>
</template>

<script>
export default {
  head: () => ({
    title: "Add",
    meta: [
      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: "description",
        name: "description",
        content: "Add a word",
      },
    ],
  }),
  data: () => ({
    valid: false,
    snackbar: false,
    snackbartext: "It already exist.",
    word: "",
    meaning: "",
    synonym: "",
    antonym: "",
    example: "",
    synonyms: [],
    antonyms: [],
    examples: [],
    rules: [(v) => !!v || "This is required."],
  }),
  methods: {
    add(key) {
      // ############## synonyms ##############
      if (key == "syn") {
        const findword = this.synonyms.find(
          (word) => word.word == this.synonym
        );
        if (findword == undefined && this.synonym != "") {
          this.synonyms.push({
            word: this.synonym,
            url: `/word/${this.synonym}`,
          });
        } else {
          this.snackbar = true;
        }
        this.synonym = "";
      }
      // ############## antonyms ##############
      else if (key == "ant") {
        const findword = this.antonyms.find(
          (word) => word.word == this.antonym
        );
        if (findword == undefined && this.antonym != "") {
          this.antonyms.push({
            word: this.antonym,
            url: `/word/${this.antonym}`,
          });
        } else {
          this.snackbar = true;
        }
        this.antonym = "";
      }
      // ############## examples ##############
      else {
        const findword = this.examples.find(
          (word) => word.word == this.example
        );
        if (findword == undefined && this.example != "") {
          this.examples.push(this.example);
        } else {
          this.snackbar = true;
        }
        this.example = "";
      }
    },
    remove(index, key) {
      if (key == "syn") {
        this.synonyms.splice(index, 1);
      } else if (key == "ant") {
        this.antonyms.splice(index, 1);
      } else {
        this.examples.splice(index, 1);
      }
    },
    submit() {
      const checkList = this.$store.getters.getWord(this.word);
      if (checkList == undefined) {
        this.$store.dispatch("addWord", {
          Word: {
            word: this.word,
            url: `/words/${this.word}`,
            meaning: this.meaning,
            synonyms: this.synonyms,
            antonyms: this.antonyms,
            examples: this.examples,
          },
        });
        alert("Word has been added !");
      } else {
        this.snackbar = true;
      }
    },
  },
};
</script>

<style></style>
