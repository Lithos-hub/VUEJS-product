<template>
  <div id="section3-background">
    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12">
        <h1 id="slogan-1">Life is too short for small screens.</h1>
        <p id="para-1" class="font-weight-bold">What you watch is just as important as what you watch it on. So with the N1200, we stretched the screen to 6.52'' to give you a better viewing experience for your movies, games, and apps.*</p>
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12">
        <v-img src="../assets/img/product-3.png" max-height="1200" width="1200" id="product-3"></v-img>
      </div>
    </div>

    <div class="row" id="row-2">
      <div class="col-lg-6 col-md-12 col-sm-12">
        <v-img src="../assets/img/product-4b.png" width="800" id="product-4"></v-img>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12">
        <h1 id="slogan-2">When you have a big screen, you expect big sound.</h1>
        <p id="para-2" class="font-weight-bold">The N1200 rocks a set of powerful dual speakers for more immersive audio. So, whether you're watching your favorite TV series or that new movie you've been waiting to see, every moment sounds richer and louder.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section3",
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

#section3-background {
  width: 100%;
  height: 100%;
  padding-top: 200px;
  background-image: url(../assets/img/section-3.jpg);
  background-size: cover;
  background-attachment: fixed;
}

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
  color: white;
  font-family: $style3;
  text-align: justify;
  font-size: 1.5em;
  margin-right: 50px;
  padding-bottom: 500px;
}

#row-2 {
  padding-top: 400px;
}

#slogan-2 {
  font-size: 4em;
  color: $primary;
  font-family: $style3;
  font-weight: bold;
  padding-right: 300px;
  position: absolute;
  bottom: 360px;
}
#para-2 {
  padding-right: 300px;
  color: white;
  font-family: $style3;
  text-align: justify;
  font-size: 1.5em;
  margin-right: 50px;
  bottom: 100px;
  position: absolute;
}

#product-3 {
  transform: rotate(-90deg);
  margin-left: 200px;
  bottom: 100px;
}

#product-4 {
  position: absolute;
  bottom: 0px;
  right: 50px;
}

@media (max-width: 600px) {
  #slogan-1 {
    font-size: 4em;
    padding: 0px;
    text-align: center;
    margin: 0 auto;
  }
  #para-1 {
    color: white;
    font-family: $style3;
    text-align: justify;
    font-size: 20px;
    padding: 0px;
    text-align: center;
    margin: 0 auto;
  }

  #row-2 {
    padding-top: 700px;
    padding-bottom: 100px;
  }

  #slogan-2 {
    font-size: 4em;
    color: $primary;
    font-family: $style3;
    font-weight: bold;
    padding: 0px;
    text-align: center;
  }
  #para-2 {
    color: white;
    font-family: $style3;
    text-align: justify;
    font-size: 20px;
    padding: 0px;
    text-align: center;
    margin: 0 auto;
  }

  #product-3 {
    display: none;
  }

  #product-4 {
    display: none;
  }
}
</style>
