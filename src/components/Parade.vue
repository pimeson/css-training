<template>
  <div class='container'>
    <h1> Today is the day of the big parade! </h1>
    <div style="margin-bottom: 1em">
      <button v-on:click='addSoldier'> Add Soldier </button>
      <button v-on:click='addCar'> Add Car </button>
      &nbsp;
      <button v-on:click='removeSoldier'> Remove Soldier </button>
      <button v-on:click='removeCar'> Remove Car </button>
      <button v-on:click='removeParadee'> Remove Paradee </button>
    </div>
    <section class='band'>
      <div class='paradee' v-for="(paradee, index) in paradees" v-bind:index="index" v-bind:key="'soldier-tank-' + index">
        <div> {{ index }} </div>
        <div v-if="paradee === 'soldier'" class='soldier'> 💂‍ </div>
        <div v-if="paradee === 'car'" class='car'> 🚘 </div>
      </div>
    </section>
  </div>
</template>


<style>
.soldier {
  font-size: 5em;
}
.car {
  font-size: 10em;
}
.paradee {
  border: 2px red dotted;
  font-size: 1em;
}
.band {
  border: 5px solid black;
  width: 50vw;
}

.band-conductor {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
button {
  margin-right: 5em;
}
</style>

<script>
export default {
  name: "Parade",
  props: {
    msg: String
  },
  data: function() {
    return {
      numSoldiers: 1,
      paradees: ["soldier"]
    };
  },
  methods: {
    addSoldier: function() {
      this.numSoldiers = this.numSoldiers + 1;
      this.paradees = [...this.paradees, "soldier"];
    },
    addCar: function() {
      this.paradees = [...this.paradees, "car"];
    },
    removeSoldier: function() {
      const removalIndex = this.paradees.lastIndexOf("soldier");
      if (removalIndex === -1) return;
      this.paradees = [
        ...this.paradees.slice(0, removalIndex),
        ...this.paradees.slice(removalIndex + 1)
      ];
    },
    removeCar: function() {
      const removalIndex = this.paradees.lastIndexOf("car");
      if (removalIndex === -1) return;
      this.paradees = [
        ...this.paradees.slice(0, removalIndex),
        ...this.paradees.slice(removalIndex + 1)
      ];
    },
    removeParadee: function() {
      this.paradees = this.paradees.slice(0, -1);
    }
  }
};
</script>
