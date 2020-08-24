<template>
  <q-layout view="hhh lpR fFf">
    <!-- master header -->
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-btn icon="menu" flat dense round
               @click="drawerVisible = !drawerVisible"
        />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Simulador H - TP2
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerVisible" :mini="!drawerVisible || drawerMinimized"
              behavior="desktop"
              mini-to-overlay bordered
              @mouseenter="drawerMinimized = false"
              @mouseleave="drawerMinimized = true"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <drawer-link v-for="link in drawerLinks" :key="link.name"
                       :link="link"
          />
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from '@vue/composition-api';

  import DrawerLink from 'components/DrawerLink.vue';

  function useMainLayout() {
    const state = reactive({
      drawerVisible: true,
      drawerMinimized: true,
      drawerLinks: [{
        name: 'Home',
        icon: 'home',
        path: '/',
      }, {
        name: 'Goodness of Fit',
        icon: 'school',
        path: '/goodness-of-fit',
      }],
    });

    return toRefs(state);
  }

  export default defineComponent({
    name: 'MainLayout',
    components: { DrawerLink },
    setup() {
      return useMainLayout();
    },
  });
</script>
