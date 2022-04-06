<template>
  <div>
    <label> {{ value }}</label>
    <button v-on:click="value = value + 1">increase</button>
    <button v-on:click="value = value - 1">decrease</button>
    <label>SUM:</label>
    <form>
      <!-- <input type="text" :value="name" @input="event=>name=event.target.value"/> -->
      <label>enter first number</label>
      <input
        type="number"
        :value="a"
        @input="(event) => (a = event.target.value)"
      />
      <label>enter second number</label>
      <input
        type="number"
        :value="b"
        @input="(event) => (b = event.target.value)"
      />
      <button v-on:click="submit">result</button>
    </form>
    <label>output:{{ d }}</label>
  </div>
</template>
<script>
export default {
  name: "Employee-list",
  data() {
    return {
      value: 0,
      sum: 0,
      a: 0,
      b: 0,
      d: 0,
    };
  },
  watch: {
    value(val) {
      if (val % 5 == 0) {
        alert("hjkh");
      }
    },
  },
  methods: {
    submit(e) {
      this.d = this.ShowResult;
      e.preventDefault();
    },
  },

  computed: {
    ShowResult() {
      return this.a + this.b;
    },
  },
};
</script>
