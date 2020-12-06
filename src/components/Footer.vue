<template>
  <v-footer padless>
    <v-container id="footer-menu">
      <div class="row mx-5">
        <div class="col col-xs-12">
          <v-list-item-group>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">Phones </v-list-item-title>
            </v-list-item-content>

            <v-list-item v-for="(item, i) in phones" :key="i">
              <v-list-item-content>
                <a>{{ item }}</a>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </div>

        <div class="col col-xs-12">
          <v-list-item-group>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">Accesories </v-list-item-title>
            </v-list-item-content>

            <v-list-item v-for="(item, i) in accesories" :key="i">
              <v-list-item-content>
                <a>{{ item }}</a>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </div>

        <div class="col col-xs-12">
          <v-list-item-group>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">Programs </v-list-item-title>
            </v-list-item-content>

            <v-list-item v-for="(item, i) in programs" :key="i">
              <v-list-item-content>
                <a>{{ item }}</a>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </div>

        <div class="col col-xs-12">
          <v-list-item-group>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">Support </v-list-item-title>
            </v-list-item-content>

            <v-list-item v-for="(item, i) in support" :key="i">
              <v-list-item-content>
                <a>{{ item }}</a>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </div>

        <div class="col col-xs-12">
          <v-list-item-group>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">Company </v-list-item-title>
            </v-list-item-content>

            <v-list-item v-for="(item, i) in company" :key="i">
              <v-list-item-content>
                <a>{{ item }}</a>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </div>
      </div>
    </v-container>
    <div class="row">
      <div class="col"></div>
      <div class="col-12 text-center">
        <div>
          <div id="subfooter">
            <a class="ml-5">Privacy Policy</a>

            <a class="ml-5">User Agreement</a>

            <a class="ml-5">Terms of Sales</a>

            <a class="ml-5">Security Feedback</a>

            <a class="ml-5">Site Map</a>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
    <div class="col-md-12 text-center">{{ new Date().getFullYear() }} — <strong>Carlos Segura García</strong></div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      phones: ["TwoMinus 7H", "TwoMinus 7 Pro", "TwoMinus 7", "TwoMinus 8P", "N20 5G", "N1200"],
      accesories: ["Cases & Protection", "Powr & Cables", "Audio", "Bundles", "Gear"],
      programs: ["Education program", "Trade-in Program", "Referral program", "Affiliate program", "Shot on TwoMinus", "Financing"],
      support: ["Shoping FAQs", "User Manuals", "Software Upgrade", "Repair Service", "Contact Us"],
      company: ["About TwoMinus", "Community", "TwoMinus 7", "Careers", "Sustainability", "Press"],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

#footer-menu {
  margin-left: 200px;
  margin-right: 200px;
  font-family: $style3;
}

a {
  color: $secondary !important;

  &:hover {
    cursor: pointer;
  }
}

@media (max-width: 600px) {
  .col-xs-12 {
    align-content: center;
    padding: 0px;
    margin: 0 auto;
    text-align: center;
  }
  #footer-menu {
    margin: 0 auto;
    font-family: $style3;
  }

  #subfooter {
    align-items: center !important;
    margin: 0 auto !important;
    text-align: center !important;
    padding: 0px !important;
    font-size: 15px;
  }

  .ml-5 {
    align-items: center !important;
    margin: 0 auto !important;
    padding-top: 50px;
    padding-bottom: 20px;
    text-align: center !important;
    display: block;
    font-size: 20px;
  }
}
</style>
