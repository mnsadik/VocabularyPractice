<template>
  <div>
    <v-card class="rounded-lg">
      <v-card-title class="text-h3 pl-15 py-8"
        >{{ word.word }}
        <v-btn icon @click="speak(word.word)" class="ml-4"
          ><v-icon>mdi-volume-high</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-timeline align-top dense>
          <v-timeline-item small>
            <v-row>
              <v-col sm="3" lg="2" xl="1">
                <strong class="text-body-1">Meaning</strong>
              </v-col>
              <v-col>
                <div class="text-body-1">
                  {{ word.meaning }}
                  <v-btn icon @click="speak(word.meaning)" x-small
                    ><v-icon>mdi-volume-high</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item small>
            <v-row>
              <v-col sm="3" lg="2" xl="1">
                <strong class="text-body-1">Synonyms</strong>
              </v-col>
              <v-col>
                <div
                  class="text-body-1"
                  v-for="(item, i) in word.synonyms"
                  :key="i"
                >
                  <nuxt-link
                    v-if="item.url"
                    :to="item.url"
                    class="text-decoration-none"
                  >
                    {{ item.word }}, &nbsp;
                  </nuxt-link>
                  <span v-else>{{ item.word }}, &nbsp;</span>
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item small>
            <v-row>
              <v-col sm="3" lg="2" xl="1">
                <strong class="text-body-1">Antonyms</strong>
              </v-col>
              <v-col>
                <div
                  class="text-body-1"
                  v-for="(item, i) in word.antonyms"
                  :key="i"
                >
                  <nuxt-link
                    v-if="item.url"
                    :to="item.url"
                    class="text-decoration-none"
                  >
                    {{ item.word }}, &nbsp;
                  </nuxt-link>
                  <span v-else>{{ item.word }}, &nbsp;</span>
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
          <v-timeline-item small>
            <v-row>
              <v-col sm="3" lg="2" xl="1">
                <strong class="text-body-1">Examples</strong>
              </v-col>
              <v-col>
                <div
                  class="text-body-1"
                  v-for="(item, i) in word.examples"
                  :key="i"
                >
                  {{ i + 1 }}/ {{ item }}
                  <v-btn icon @click="speak(item)" x-small
                    ><v-icon>mdi-volume-high</v-icon>
                  </v-btn>
                  <br />
                </div>
              </v-col>
            </v-row>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.word.word,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: this.word.meaning,
        },
      ],
    };
  },
  computed: {
    word() {
      return this.$store.getters.getWord(this.$route.params.word);
    },
  },
  methods: {
    speak(text) {
      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = 0.75;
      // utter.voice = speechSynthesis.getVoices()[2];
      speechSynthesis.speak(utter);
    },
  },
};
</script>
