<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }" id="logo">CF Dashboard</router-link>
    <router-link to="/bubbles">Bubbles</router-link>
    <router-link to="/dashboard">Dashboard</router-link>
    <!-- <router-link
      v-for="route in routes"
      :key="route.id"
      :to="{
        name: 'route.name',
        // params: { id: route.id, slug: route.slug },
      }"
    >
      {{ route.name }}
    </router-link> -->
    <!-- <router-link :to="{ name: 'protected' }">Dashboard</router-link>
    <router-link to="https://vueschool.io">Vue School</router-link> -->
    <button @click.prevent="toggle">
      {{ buttonText }}
    </button>
  </div>
</template>
<script>
// import routes from "@/routes.json";
// import router-link from "@/components/router-link.vue";
// export default {
//   //   components: { router-link },
//   //   data() {
//   //     return {
//   //       routes,
//   //     };
//   //   },
// };
export default {
  data() {
    return {
      editable: "no",
      texts: {
        no: "Enter edit mode",
        yes: "Quit edit mode",
      },
    };
  },
  computed: {
    buttonText() {
      return this.texts[this.editable];
    },
  },
  methods: {
    toggle() {
      const divs = document.querySelectorAll("*:not(:has(*))");
      let f;
      if (this.editable === "no") {
        this.editable = "yes";
        f = (x) => (x.contentEditable = "true");
      } else {
        this.editable = "no";
        f = (x) => (x.contentEditable = "false");
      }
      divs.forEach(f);
    },
  },
};
</script>
