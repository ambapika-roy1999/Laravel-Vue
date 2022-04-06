<template>
  <div>
    <EmployeeList />
    <form>
      <label>Name</label>
      <!-- <input type="text" :value="name" @input="event=>name=event.target.value"/> -->
      <input type="text" v-model="name" />
      <label>Address</label>
      {{ identity }}
      {{ hobbies }}
      <input type="text" v-model="address" />
      <label> gender </label>
      <input
        type="radio"
        name="gender"
        :value="male"
        @input="(event) => (gender = event.target.value)"
      />Male
      <input
        type="radio"
        name="gender"
        :value="female"
        @input="(event) => (gender = event.target.value)"
      />Female
      <br />
      <label>Hobbies</label>
      <input
        type="checkbox"
        :value="cricket"
        @input="(event) => (hobbies = event.target.value)"
      />
      <input
        type="checkbox"
        :value="baseball"
        @input="(event) => (hobbies = event.target.value)"
      />
      <!-- <input/>
         <input/> -->

      <input type="button" value="submit" @click="login" />
    </form>
  </div>
</template>
<script>
import EmployeeList from "./EmployeeList.vue";
export default {
  name: "FORM_SUBMISSION",
  components: {
    EmployeeList,
  },
  methods: {
    login(e) {
      this.identity.name = this.name;
      this.identity.address = this.address;
      console.log(this.gender);
      console.log(this.hobbies);
      this.$emit("child-data", this.identity);
      e.preventDefault();
    },
  },
  data() {
    return {
      name: "ambapika",
      address: "hxjhjxd",
      identity: {},
      male: "male",
      female: "female",
      gender: null,
      hobbies: [],
      cricket: "cricket",
      baseball: "baseball",
      //   tennis:"tennis",
      //   football:"football"
    };
  },
  created() {
    console.log(this.name);
  },
  beforeCreate() {
    console.log("hfddddh");
  },
  beforeMount() {
    console.log("beforemount", this.$el);
  },
  mounted() {
    console.log("mount", this.$el);
  },
};
</script>
