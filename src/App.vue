<template>
  <div>
    <TheNavigation />
    <router-view />
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";
export default {
  name: "App",
  components: { TheNavigation },
};
</script>
