<template>
  <div>
    <v-container>
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <v-img src="../assets/img/product-5.jpg" max-height="1000" width="800"></v-img>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <v-img src="../assets/img/product-6.jpg" max-height="1000" width="800"></v-img>
        </div>
      </div>
    </v-container>

    <div id="section4-background">
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <h1 id="slogan-1">A camera system that stacks up.</h1>
          <p id="para-1" class="font-weight-bold">The first step to taking great photos is having the right tools. The N100 comes prepared with a 13 MP main camera for stunning shots, a macro lens for getting up close, and a specialized camera for portrait photos.*</p>
        </div>

        <div class="col-lg-6 col-sm-6 col-xs-12">
          <div>
            <v-img src="../assets/img/product-7.jpg" max-width="600" max-height="850" position="top" id="product-7"></v-img>
            <v-img src="../assets/img/product-7b.jpg" max-width="700" max-height="560" id="product-7b"></v-img>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <v-img src="../assets/img/product-8.jpg" height="1000"></v-img>
        </div>
        <div class="col-lg-6 col-sm-6 col-xs-12">
          <v-img src="../assets/img/product-9.jpg" height="1000"></v-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section4",
};
</script>

<style lang="scss">
@import "src/scss/variables";

#section4-background {
  width: 100%;
  height: 100%;
  padding-top: 200px;
  background-image: url(../assets/img/section-4.jpg);
  background-size: cover;
  background-attachment: fixed;
}

#slogan-1 {
  font-size: 4em;
  color: $primary;
  font-family: $style3;
  font-weight: bold;
  padding-left: 300px;
  padding-top: 250px;
}
#para-1 {
  padding-left: 300px;
  color: white;
  font-family: $style3;
  text-align: justify;
  font-size: 1.5em;
  margin-right: 50px;
  padding-bottom: 500px;
}

#product-7 {
  position: absolute;
  bottom: 350px;
  top: 450px;
  margin-right: 100px;
  z-index: 1;
  box-shadow: 10px -5px 30px 3px rgba(0, 0, 0, 0.426);
}

#product-7b {
  position: absolute;
  bottom: 500px;
  right: 50px;
  z-index: 0;
}

@media (max-width: 1500px) {
  #product-7 {
    width: 50%;
  }

  #product-7b {
    width: 50%;
  }
}

@media (max-width: 600px) {
  #slogan-1 {
    margin: 0 auto;
    text-align: center;
    padding: 0px;
  }
  #para-1 {
    font-size: 20px;
    margin: 0 auto;
    text-align: center;
    padding: 0px;
    padding-bottom: 200px;
  }

  #product-7 {
    display: none;
  }

  #product-7b {
    display: none;
  }
}
</style>
