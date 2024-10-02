<template>
<div class="field">
    <Creature v-for="creature in creatures"
              :name="creature.name"
              :attack="creature.attack"
              :defence="creature.defence"/>
</div>
</template>


<script>
import Creature from "@/components/Creature.vue";
export default {
    name: "Field",
    components: {Creature},
    props: ["creatures"],
}
</script>

<style scoped>

.field {
    display: flex;
    justify-content: space-evenly;
    background-color: brown;
    padding: 3% 0;
}

</style>