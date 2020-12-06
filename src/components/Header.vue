<template>
  <div id="header-background">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-12 text-right mt-5" id="col-left">
          <h1 id="main-title">TwoMinus</h1>
          <h1 id="main-subtitle">Vega N1200</h1>
          <h1 id="early-access" class="mt-5">Get early access</h1>
        </div>
        <div class="col-md-6 col-sm-12" id="col-right">
          <v-img max-width="800" src="../assets/img/product-1.png" id="img"></v-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

#col-left {
  padding-top: 100px;
}

#header-background {
  width: 100%;
  height: 100%;
  padding-top: 200px;
  padding-bottom: 100px;
  background-image: url(../assets/img/header.jpg);
  background-size: cover;
  background-attachment: fixed;
}

#main-title {
  font-family: $style3;
  font-size: 8em;
  color: white;
}

#main-subtitle {
  font-family: $style1;
  font-size: 5em;
  color: rgb(211, 38, 38);
}

#early-access {
  font-weight: 100;
  color: white;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
  }
}

@media (max-width: 600px) {
  #main-title {
    font-size: 4em;
    text-align: center;
    margin: 0 auto;
  }
  #main-subtitle {
    font-size: 3em;
    text-align: center;
  }
  #early-access {
    font-size: 1em;
    margin: 0 auto;
    text-align: center;
  }

  #img {
    visibility: hidden;
  }
}
</style>
