<template>
  <div class='battleship'>
    <div class='battleship-grid'>
    </div>
  </div>
</template>

<style>
.battleship {
  height: 100vh;
  background: #3498db;
  display: grid;
  align-items: center;
  justify-content: center;
}
.battleship-grid {
  height: 75vh;
  width: 75vh;
  border: 5px solid black;
}
</style>

<script>
export default {
  name: "Battleship"
};
</script>
