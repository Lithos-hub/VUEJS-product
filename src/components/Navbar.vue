<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <v-img src="../assets/img/brand-logo.png" class="d-block mr-5" max-width="150" id="brand-logo"></v-img>
        <v-toolbar-title class="d-block" id="brand-title">Vega N1200</v-toolbar-title>
      </a>
      <v-btn class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" depressed>
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto">
          <div @mouseleave="menu1 = false">
            <li class="nav-item" id="nav-1">
              <a class="nav-link nav-hover" @mouseover="menu1 = !menu1">TwoMinus Series<span class="badge">New</span></a>
              <!-- DROPDWON MENU 1 -->
              <div v-if="menu1" id="menu1">
                <v-container>
                  <v-row>
                    <v-col>
                      <div class="img-hover">
                        <v-img src="../assets/img/smartphone.png" width="150" class="mx-auto"></v-img>
                        <h3>TwoMinus 7H</h3>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="img-hover">
                        <v-img src="../assets/img/smartphone.png" width="150" class="mx-auto"></v-img>
                        <h3>TwoMinus 7 Pro</h3>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="img-hover">
                        <v-img src="../assets/img/smartphone.png" width="150" class="mx-auto"></v-img>
                        <h3>TwoMinus 7</h3>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="img-hover">
                        <v-img src="../assets/img/smartphone.png" width="150" class="mx-auto"></v-img>
                        <h3>TwoMinus 8P</h3>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </li>
          </div>
          <div @mouseleave="menu2 = false">
            <li class="nav-item">
              <a class="nav-link nav-hover" @mouseover="menu2 = !menu2">Vega Series<span class="badge">New</span></a>
              <!-- DROPDWON MENU 2 -->
              <div v-if="menu2" id="menu2">
                <v-container>
                  <v-row>
                    <v-col>
                      <div class="img-hover">
                        <v-img src="../assets/img/smartphone2.png" width="150" class="mx-auto"></v-img>
                        <h3>Vega N1</h3>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="img-hover">
                        <v-img src="../assets/img/smartphone2.png" width="150" class="mx-auto"></v-img>
                        <h3>Vega Astral</h3>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="img-hover">
                        <v-img src="../assets/img/smartphone2.png" width="150" class="mx-auto"></v-img>
                        <h3>Vega Pro 8</h3>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </li>
          </div>
          <div @mouseleave="menu3 = false">
            <li class="nav-item">
              <a class="nav-link nav-hover" @mouseover="menu3 = !menu3">Store<span class="badge">New</span></a>
              <!-- DROPDWON MENU 3 -->
              <div v-if="menu3" id="menu3">
                <v-container>
                  <v-row>
                    <v-col>
                      <div class="img-hover">
                        <v-img src="../assets/img/cases.png" width="150" height="150" class="mx-auto"></v-img>
                        <h3>Cases & Protection</h3>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="img-hover">
                        <v-img src="../assets/img/cable.jpg" width="150" height="150" class="mx-auto"></v-img>
                        <h3>Power & Cables</h3>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="img-hover">
                        <v-img src="../assets/img/headphones.png" width="150" height="150" class="mx-auto" position="top"></v-img>
                        <h3>Audio</h3>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="img-hover">
                        <v-img src="../assets/img/bundle.png" width="150" height="150" class="mx-auto"></v-img>
                        <h3>Bundles</h3>
                      </div>
                    </v-col>
                    <v-col>
                      <div class="img-hover">
                        <v-img src="../assets/img/gear.jpg" width="150" height="150" class="mx-auto"></v-img>
                        <h3>Gear</h3>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </div>
            </li>
          </div>
          <li class="nav-item">
            <a class="nav-link nav-hover">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-hover">Support</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-hover">Community</a>
          </li>
        </ul>

        <div @mouseleave="usermenu = false">
          <v-icon class="nav-hover" id="user-icon" @mouseover="usermenu = !usermenu">mdi-account-outline</v-icon>
          <div id="user-menu" v-if="usermenu">
            <v-card class="ml-auto" tile>
              <v-list class="p-5">
                <p class="lead font-weight-bold">User</p>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-checkbox-marked-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Orders </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-account-box</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Account </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-cards-heart</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title> Refer a friend </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card>
          </div>
        </div>

        <div @mouseleave="basketmenu = false">
          <v-icon class="ml-5 nav-hover" id="basket-icon" @mouseover="basketmenu = !basketmenu">mdi-basket-outline</v-icon>
          <div id="basket-menu" v-if="basketmenu">
            <v-card class="ml-auto" tile>
              <p class="font-weight-bold ml-2">You are $100 away from free shipping.</p>
              <v-list class="p-4">
                <p class="lead font-weight-bold mb-5">My basket</p>
                <v-list-item-group v-model="selectedItem" color="primary">
                  <v-list-item>
                    <p class="text-center">Your shopping cart is empty right now, <br />but it doesn't have to be!</p>
                  </v-list-item>
                  <v-btn outlined block>Go shopping</v-btn>
                </v-list-item-group>
              </v-list>
            </v-card>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      group: null,
      menu1: false,
      menu2: false,
      menu3: false,
      usermenu: false,
      basketmenu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

* {
  font-family: $style1;
}

#navbar {
  z-index: 90;
}

h3 {
  font-size: 20px;
  text-align: center;
  letter-spacing: 5px;
}

#menu1,
#menu2,
#menu3 {
  position: absolute;
  left: 0px;
  top: 100px;
  height: 400px;
  background-color: white;
  width: 100%;
  z-index: 99999;
}

#user-menu {
  position: absolute;
  width: 300px;
  right: 0px;
}

#basket-menu {
  position: absolute;
  max-width: 400px;
  right: 0px;
}

#brand-logo {
  position: relative;

  filter: brightness(0);
}

#brand-title {
  position: relative;
  font-family: $style2;
  font-size: 15px;
  color: red;
}

.img-hover {
  margin-top: 50px;
}

.img-hover:hover {
  transform: scale(1.1);
  transition: 0.5s;
  cursor: pointer;
}

.badge {
  position: relative;
  bottom: 15px;
  border: 1px solid rgb(80, 80, 80);
  border-radius: 10px;
}

#tabs-Menu {
  margin: 0 auto;
  width: 100%;
  text-align: center;
  justify-content: center;
}

.nav-hover {
  padding-bottom: 35px;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 35px;
}

.nav-hover:hover {
  margin-top: 10px;
  border-bottom: 3px solid blue;
  transition: 0.5s;
}

.navbar-toggler {
  border: none;
  font-size: 15px;
}

#user-icon {
  width: 50px;
}

#basket-icon {
  width: 50px;
}
</style>
