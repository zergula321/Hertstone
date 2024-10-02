<template>
  <div class="creature">
      <p class="name">{{name}}</p>
      <div class="horizontal">
          <div class="square" style="background-color: cadetblue">{{attack}}</div>
          <div style="flex: 1"></div>
          <div class="square" style="background-color: crimson">{{defence}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Creature",
    props: ["name", "attack", "defence"]
}
</script>

<style scoped>
  .creature {
      background-color: darkgoldenrod;
      width: 7vw;
      height: 10vw;
      font-size: 2vw;
  }
  .name {
      text-align: center;
  }
  .horizontal {
      margin-top: 40%;
      margin-left: 10%;
      margin-right: 10%;
      display: flex;
      /*justify-content: space-between;*/
      align-items: stretch;
      height: 25%;
  }
  .square {
      aspect-ratio: 1 / 1;
      text-align: center;
  }

</style>