<template>
  <q-item v-ripple :to="link.path"
          exact clickable
  >
    <q-item-section avatar>
      <q-icon :name="link.icon" />
    </q-item-section>

    <q-item-section>
      {{ link.name }}
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
  import { defineComponent, PropType } from '@vue/composition-api';

  import { IDrawerLink } from 'interfaces';

  export default defineComponent({
    name: 'DrawerLink',

    props: {
      link: {
        required: true,
        type: Object as PropType<IDrawerLink>,
      },
    },
  });
</script>
