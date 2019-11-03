<template>
  <div class="border-2 border-gray-200 p-4 pb-0 text-gray-900">
    <h1 class="mt-2 mb-4 mx-4 font-semibold">{{title}}</h1>
    <table class="w-full border-collapse">
      <thead>
        <tr>
          <th
            v-for="header in headers"
            :key="header"
            :class="alignment(header)"
            class="border-t border-b-2 px-4 py-4"
          >{{header}}</th>
          <th class="border-t border-b-2 px-4 py-4">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in tableData" :key="data[0]">
          <td class="border-t px-4 py-4">
            <div class="flex">
              <img class="rounded-full w-10 h-10 block" :src="`assets/${data.username.image}`" />
              <div class="pl-5">
                <span
                  class="inline-block uppercase text-xs bg-teal-400 font-semibold px-2 text-white rounded-full tracking-wide"
                >{{data.username.since}}</span>
                <p>{{data.username.name}}</p>
              </div>
            </div>
          </td>
          <td class="border-t px-4 py-4 text-center">{{data.currency}}</td>
          <td class="border-t px-4 py-4 text-right">{{data.balance}} </td>
          <td class="border-t px-4 py-4 text-right">{{data['reserved in orders']}}</td>
          <td class="border-t px-4 py-4">
            <div class="text-center py-1 flex">
              <div
                class="group pl-3 pr-2 py-1 border border-r-0 rounded-l-full hover:bg-green-500 transition-all"
              >
                <a href="#">
                  <simple-svg
                    filepath="/zondicons/checkmark.svg"
                    :class="'w-5 h-5 fill-current text-green-500 group-hover:text-white align-bottom'"
                  />
                </a>
              </div>
              <div
                class="group pr-3 pl-2 py-1 border rounded-r-full hover:bg-red-500 transition-all"
              >
                <a href="#">
                  <simple-svg
                    filepath="/zondicons/close.svg"
                    :class="'w-5 h-5 fill-current text-red-500 group-hover:text-white align-bottom'"
                  />
                </a>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "user-table",

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
