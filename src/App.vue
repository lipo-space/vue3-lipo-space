<template>
  <div id="app">
    <div class="common-layout">
      <el-container>

        <Transition>
          <el-aside class="cebian" v-if="!isCollapsed">
            <SideBar></SideBar>
          </el-aside>
        </Transition>

        <Transition>
          <el-aside class="cebianmini" v-if="isCollapsed">
            <MiniBar></MiniBar>
          </el-aside>
        </Transition>

        <el-container>
          <el-header class="header" :style="{ marginLeft: isCollapsed ? '88px' : '260px' }">

            <el-button class="shouqi" color="#ffd04b" circle size="large" @click="isCollapsed = true" v-if="!isCollapsed">
              <el-icon color="#725047" size="18px">
                <DArrowLeft />
              </el-icon>
            </el-button>
            <el-button class="dakai" color="#ffd04b" circle size="large" @click="isCollapsed = false" v-if="isCollapsed">
              <el-icon color="#725047" size="18px">
                <DArrowRight />
              </el-icon>
            </el-button>

            <HeaderBar></HeaderBar>
          </el-header>


          <el-main class="zhongjian" :style="{ marginLeft: isCollapsed ? '88px' : '260px' }">
            <router-view v-slot="{ Component }">
              <Transition name="slide-fade">
                <component :is="Component" />
              </Transition>
            </router-view>
          </el-main>

          <el-footer class="footer" :style="{ paddingLeft: isCollapsed ? '88px' : '260px' }">
            <FooterBar></FooterBar>
          </el-footer>

        </el-container>

      </el-container>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar';
import MiniBar from './components/MiniBar';
import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';

export default {
  components: {
    SideBar,
    HeaderBar,
    FooterBar,
    MiniBar
  },
  data() {
    return {
      isCollapsed: false,
      transitionName: 'fade',
    }
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 1000) {
        this.isCollapsed = true;
      } else if (window.innerWidth >= 1000) {
        this.isCollapsed = false;
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: none;
}

.layout {
  position: relative;
}

.cebian {
  position: fixed;
  top: 0;
  left: 0;

  min-width: 200px;
  max-width: 260px;
  padding: 0;
}

.cebianmini {
  position: fixed;
  top: 0;
  left: 0;
  width: 88px;
}

.shouqi {
  position: absolute;
  top: 10px;
  left: -20px;
  z-index: 9999;
}

.dakai {
  position: absolute;
  top: 10px;
  left: -20px;
  z-index: 9999;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(0px);
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}


.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.header {
  position: fixed;
  width: 100vw;
  padding: 0;
  box-sizing: border-box;
  border-left: 1px solid #725047;
  height: 70px;
  transition: all 0.5s;
}

.footer {
  position: fixed;
  bottom: 0;
  padding: 0;
  width: 100%;
  height: 60px;
  transition: 0.5s ease;
}

.zhongjian {
  margin-top: 70px;
  margin-bottom: 60px;
  transition: 0.5s ease;
}
</style>
