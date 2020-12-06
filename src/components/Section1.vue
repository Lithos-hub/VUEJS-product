<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12" id="col-left">
        <h1 id="slogan-1">
          Play <br />
          all day.
        </h1>
      </div>

      <div class="col-lg-6 col-md-6 col-sm-12" id="col-right">
        <div>
          <v-list-item class="list-play"><v-icon class="plus-icon">mdi-plus</v-icon>5,000 mAh Battery</v-list-item>

          <v-list-item class="list-play"><v-icon class="plus-icon">mdi-plus</v-icon>8 GB RAM</v-list-item>

          <v-list-item class="list-play"><v-icon class="plus-icon">mdi-plus</v-icon>128 GB Storage</v-list-item>

          <v-list-item class="list-play"><v-icon class="plus-icon">mdi-plus</v-icon>6.52" Screen</v-list-item>

          <v-list-item class="list-play"><v-icon class="plus-icon">mdi-plus</v-icon>Dual Speakers</v-list-item>

          <v-list-item class="list-play"><v-icon class="plus-icon">mdi-plus</v-icon>Triple Camera</v-list-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section1",
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

#slogan-1 {
  font-size: 10em;
  color: $primary;
  font-family: $style3;
  font-weight: bold;
  padding-left: 300px;
  padding-top: 150px;
}
.list-play {
  font-size: 5em;
  color: $secondary;
}

.plus-icon {
  font-size: 40px !important;
  color: #00b2d2 !important;
}

@media (max-width: 600px) {
  #col-right {
    position: relative;
    right: 0px;
    text-align: right;
  }
  #slogan-1 {
    font-size: 4em;
    color: $primary;
    font-family: $style3;
    font-weight: bold;
    text-align: center;
    position: relative;
    padding: 0px;
  }
  .list-play {
    font-size: 40px;
    color: $secondary;
    padding: 0px;
    margin: 0 auto;
  }

  .plus-icon {
    font-size: 20px !important;
    color: #00b2d2 !important;
  }
}
</style>
