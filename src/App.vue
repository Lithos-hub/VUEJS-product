<template>
  <div>
    <Navbar />
    <Header />
    <Section1 class="section-divider" />
    <Section2 class="section-divider" />
    <Section3 class="section-divider" />
    <Section4 class="section-divider" />
    <v-divider id="divider"></v-divider>
    <Footer />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Header,
    Section1,
    Section2,
    Section3,
    Section4,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "src/scss/variables";

.section-divider {
  margin-top: 100px;
  margin-bottom: 100px;
}

#divider {
  background-color: $secondary !important;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(58, 58, 58);
  background-color: $secondary;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: red;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ff0000;
}
</style>
