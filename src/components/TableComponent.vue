<template>
  <div class="border-2 border-gray-200 p-4 text-gray-900">
    <h1 class="mt-2 mb-4 mx-4 font-semibold">{{title}}</h1>
    <table class="w-full border-collapse">
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="header"
            :class="alignment(header)"
            class="border-t border-b-2 px-4 py-4 capitalize"
          >{{header}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in tableData" :key="data[0]">
          <td
            v-for="(colData,colName) in data"
            :key="colData"
            class="border-t px-4 py-4"
            :class="alignment(colName)"
          >{{colData}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "table-component",

  props: ["tableData", "title", "align"],
  data() {
    return {
      headers: []
    };
  },
  methods: {
    alignment(col) {
      switch (this.align[col]) {
        case "left":
          return "text-left";
        case "right":
          return "text-right";
        case "center":
          return "text-center";
        default:
          return "text-center";
      }
    }
  },
  created() {
    this.headers = Object.keys(this.tableData[0]);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.transition-all {
  transition: all 0.3s ease;
}
</style>
