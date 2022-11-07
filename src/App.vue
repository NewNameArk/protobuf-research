<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import protoRoot from "./proto/proto";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  mounted() {
    this.testFunc();
  },
  methods: {
    testFunc() {
      let testobj = protoRoot.lookup("PBUser").create();
      console.log(testobj);
      testobj.userId = 12;
      testobj.name = "恰奇";
      testobj.mobile = "You wanna play now?";
      console.log("testobj", testobj);
      let testObjBuffer = protoRoot.lookup("PBUser").encode(testobj).finish();
      console.log(testObjBuffer);
      let testData = protoRoot.lookup("PBUser").decode(testObjBuffer);
      console.log(testData);
      let testObj2 = protoRoot.lookup("PBUser").create({
        userId: 13,
        name: '杰森',
        mobile: "打不死的鬼怪"
      });
      console.log(testObj2)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
