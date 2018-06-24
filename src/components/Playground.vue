<template>
  <div class='container'>
    <div class="control">
      <button v-on:click='addElement'> Add Element </button>
      <button v-on:click='removeElement'> Remove Element </button>
    </div>
    <section class='parent'>
      <div class='child' v-for="child in numChild" v-bind:id="'child-'+child" v-bind:index="index" v-bind:key="'Element-' + child">
        {{ child }}
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Playground",
  props: {
    msg: String
  },
  data: function() {
    return {
      numChild: 1
    };
  },
  methods: {
    addElement: function() {
      this.numChild = this.numChild + 1;
    },
    removeElement: function() {
      this.numChild = this.numChild - 1;
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.parent {
  border: 5px solid black;
  height: 50vw;
  width: 50vw;
}
.child {
}
.sidebar {
}
.footer {
}
.header {
}
.content {
}
.control {
  display: flex;
  justify-content: space-evenly;
  width: 50%;
}
.control button {
  font-size: 1em;
  padding: 0.5em;
  margin: 1em 0 1em 0;
}
</style>
