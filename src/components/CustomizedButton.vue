<template>
    <button class="button" @click="$emit('click')">{{button_text}}</button>
</template>
  

<script>

    export default
    {
        props: {
        button_text: {
            type: String,
            required: true,
            default: "---Details---"
        },
        },   
    }
  
</script>

<style scoped>
.button
{
    outline: none;
    background-color: grey;
    text-align: center;
    background-color: grey;
    font-size: 12px;
    color:black;
    border-color: gray;
}
</style>

  