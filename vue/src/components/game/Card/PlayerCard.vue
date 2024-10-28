<template>
    <div
        class="card"
    >
        <p class="card__text">{{cardStruct.name}}</p>
        <p class="card__text">цена: {{cardStruct.cost}}</p>
        <p class="card__text">атака: {{cardStruct.attack}}</p>
        <p class="card__text">защита: {{cardStruct.defence}}</p>
    </div>
</template>

<script>
import { Cards } from "@/gameLogic/cards"

export default {
    name: "PlayerCard",
    props: ["cardId"],
    computed: {
        cardStruct() {
            return Cards[this.cardId]
        },
    },
}
</script>

<style lang="less">
  @import "./styles/style";
</style>