<template>
  <div class="app-main-layout">
    <NavBar />
    <SideBar />

    <main class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/app/NavBar.vue';
import SideBar from '@/components/app/SideBar.vue';

export default {
  name: 'MainLayout',

  components: {
    NavBar,
    SideBar,
  },
};
</script>
