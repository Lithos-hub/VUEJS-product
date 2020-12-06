<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12" id="col-para">
        <h1 id="slogan-1">Stop worrying about power.</h1>
        <p id="para-1" class="font-weight-bold">Seeing your battery at 1% is never fun. That's why we powered the N1200 with a long-lasting 5,000 mAh battery and included a 18W fast charger to make sure it stays powered.</p>
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12" id="col-img">
        <div>
          <v-img src="../assets/img/person1.png" max-height="1000"></v-img>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12" id="col-img2">
        <div>
          <v-img src="../assets/img/product-2.png" max-height="1000"></v-img>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12" id="col-para2">
        <h1 id="slogan-2">Plenty of space to play. Or work. (But preferably play.)</h1>
        <p id="para-2" class="font-weight-bold">The N1200 keeps it 100. With 8 GB of RAM, you can quickly switch between streaming, messaging apps, and games. Store all your favorite content with 128 GB of storage.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section2",
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

#slogan-1 {
  font-size: 4em;
  color: $primary;
  font-family: $style3;
  font-weight: bold;
  padding-left: 300px;
  padding-top: 150px;
}
#para-1 {
  padding-left: 300px;
  font-family: $style3;
  text-align: justify;
  font-size: 1.5em;
  margin-right: 50px;
  color: black !important;
}

#slogan-2 {
  font-size: 4em;
  color: $primary;
  font-family: $style3;
  font-weight: bold;
  padding-right: 300px;
  padding-top: 150px;
}
#para-2 {
  padding-right: 300px;
  font-family: $style3;
  text-align: justify;
  font-size: 1.5em;
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
  body {
    max-width: 600px;
  }

  #col-img,
  #col-img2 {
    display: none;
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
  #para-1 {
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
    padding: 0px;
  }

  #slogan-2 {
    font-size: 4em;
    color: $primary;
    font-family: $style3;
    font-weight: bold;
    text-align: center;
    position: relative;
    padding: 0px;
    margin: 0 auto;
  }
  #para-2 {
    font-size: 20px;
    padding: 0px;
    margin: 0 auto;
  }
}
</style>
