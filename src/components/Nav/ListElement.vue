<template>
    <div class="my-list">
    <ul>
        <li class="list" v-for="(item, index) in items" :key="index" @click="gotToPage(item.path)">{{ item.name }}</li>
    </ul>
    </div>
</template>


<script>
export default {
    data()
    {
        return {
            isVisible: false
        }
    },
    props: {
      items: {
        type: Array,
        required: true,
      }
    },
    methods:
    {
        gotToPage(item)
        {
          this.$router.push({ name: item})
        }
    }
}

</script>

<style>
.list
{
    color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: absolute;
  text-align: left;
  overflow: hidden;
  z-index: 1;
}

.my-list
{
    background-color: #f0f0f0;
  padding: 10px;
  list-style: none;
  border: 1px solid #ccc;
  position: absolute;
  top: 100%;
  left: 0;
  width: 300px;
    list-style-type: none;
}

.list:hover{
    background-color: red;
}

</style>
