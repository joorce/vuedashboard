<template>
  <div id="app">
    <div class="flex w-full fixed z-10 shadow-md">
      <NavBar></NavBar>
    </div>
    <div class="flex pt-20 mx-2 flex-wrap md:flex-no-wrap">
      <simple-card
        icon="credit-card"
        currentGoal="5235"
        goal="7000"
        subtext="Total sales"
        color="#4299E1"
        class="mx-2 mt-4 bg-white md:w-1/2"
      ></simple-card>
      <simple-card
        icon="globe"
        currentGoal="5235"
        goal="7000"
        subtext="Total sales"
        color="#ED8936"
        class="mx-2 mt-4 bg-white md:w-1/2"
      ></simple-card>
      <simple-card
        icon="heart"
        currentGoal="5235"
        goal="7000"
        subtext="Total sales"
        color="#ED64A6"
        class="mx-2 mt-4 bg-white md:w-1/2"
      ></simple-card>
      <simple-card
        icon="time"
        currentGoal="5235"
        goal="7000"
        subtext="Total sales"
        color="#38B2AC"
        class="mx-2 mt-4 bg-white md:w-1/2"
      ></simple-card>
    </div>
    <div class="flex mx-2 flex-wrap flex-wrap lg:flex-no-wrap">
      <CircularChart
        class="mx-2 mt-4 bg-white md:w-full"
        title="Total Revenue"
        :value="circularChartData['value']"
        :info="circularChartData['info']"
      ></CircularChart>
      <bar-chart class="mx-2 mt-4 bg-white md:w-full" title="Income amounts" :data="simpleBarChartData"></bar-chart>
      <pie-chart class="mx-2 mt-4 bg-white md:w-full" :data="pieChartData" title="Total Users"></pie-chart>
    </div>
    <div class="flex mt-2 mb-8 mx-2 flex-wrap lg:flex-no-wrap">
      <table-component
        class="w-full mx-2 mt-2 md:w-full bg-white"
        :tableData="tableData"
        title="Best selling products"
        :align="{'product name': 'left','price': 'right','quantity': 'right','amount': 'right',}"
      ></table-component>
      <user-table
        class="w-full mx-2 mt-2 md:w-full bg-white"
        :tableData="userTableData"
        title="Top 5 Users Balances"
        :align="{'username': 'center','currency': 'center','balance': 'right','reserved in orders': 'right',}"
      ></user-table>
    </div>
  </div>
</template>

<script>
import CircularChart from "./components/CircularChart.vue";
import SimpleCard from "./components/SimpleCard.vue";
import TableComponent from "./components/TableComponent.vue";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import UserTable from "./components/UserTable";
import NavBar from "./components/NavBar";

export default {
  name: "app",
  components: {
    CircularChart,
    SimpleCard,
    TableComponent,
    BarChart,
    PieChart,
    UserTable,
    NavBar
  },
  data() {
    return {
      circularChartData: {
        info: {
          Target: { label: "Target", value: 641, ascending: true },
          "Last week": { label: "Last week", value: 234, ascending: false },
          "Last Month": { label: "Last Month", value: 3012, ascending: true }
        },
        value: "75"
      },
      pieChartData: {
        info: {
          Target: { label: "Target", value: 641, ascending: true },
          "Last week": { label: "Last week", value: 234, ascending: false },
          "Last Month": { label: "Last Month", value: 3012, ascending: true }
        },
        values: [
          { value: 22.5, color: "#FAF089" },
          { value: 37.5, color: "#ED8936" },
          { value: 40, color: "#63B3ED" }
        ]
      },
      simpleBarChartData: {
        info: {
          Target: { label: "Target", value: 641, ascending: true },
          "Last week": { label: "Last week", value: 234, ascending: false },
          "Last Month": { label: "Last Month", value: 3012, ascending: true }
        },
        values: [125, 243, 188, 208, 185, 143, 258, 162, 155, 123, 190, 225]
      },

      userTableData: [
        {
          username: {
            name: "Margeret V. Ligon",
            image: "user-2.jpg",
            since: "2017"
          },
          currency: "BTC",
          balance: "0.00816117",
          // "reserved in orders": "0.00097036"
        },
        {
          username: {
            name: "Erwin E. Brown",
            image: "user-3.jpg",
            since: "2016"
          },
          currency: "ETH",
          balance: "3.16117008",
          // "reserved in orders": "1.70360009"
        },
        {
          username: { name: "Tomaslau", image: "user-4.jpg", since: "2011" },
          currency: "EUR",
          balance: "25.08",
          // "reserved in orders": "12.58"
        },
        {
          username: {
            name: "Jose D. Delacruz",
            image: "user-5.jpg",
            since: "2015"
          },
          currency: "CNY",
          balance: "82",
          // "reserved in orders": "30.83"
        },
        {
          username: {
            name: "Luke J. Sain",
            image: "user-6.jpg",
            since: "2016"
          },

          currency: "BTC",
          balance: "2.00816117",
          // "reserved in orders": "1.00097036"
        }
      ],

      tableData: [
        {
          "product name": "ASOS Ridley High Waist",
          price: "$79.49",
          quantity: "82",
          amount: "$6,518.18"
        },
        {
          "product name": "Marco Lightweight Shirt",
          price: "$128.50",
          quantity: "37",
          amount: "$4,754.50"
        },
        {
          "product name": "Half Sleeve Shirt",
          price: "$39.99",
          quantity: "64",
          amount: "$2,559.36"
        },
        {
          "product name": "Lightweight Jacket",
          price: "$20.00",
          quantity: "184",
          amount: "$3,680.00"
        },
        {
          "product name": "Marco Shoes",
          price: "$28.49",
          quantity: "69",
          amount: "$1,965.81"
        },
        {
          "product name": "ASOS Ridley High Waist",
          price: "$79.49",
          quantity: "82",
          amount: "$6,518.18"
        },
        {
          "product name": "Half Sleeve Shirt",
          price: "$39.99",
          quantity: "64",
          amount: "$2,559.36"
        }
        // {
        //   "product name": "Lightweight Jacket",
        //   price: "$20.00",
        //   quantity: "184",
        //   amount: "$3,680.00"
        // }
      ]
    };
  }
};
</script>

<style src="./assets/tailwind.css">
