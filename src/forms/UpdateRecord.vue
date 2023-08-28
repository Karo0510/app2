<template>
    <div class="form">
      <h1>UPDATE RECORD</h1>
      <p>{{ items["hazard"] }}</p>
    </div>
</template>

<script>

export default {
name: 'UpdateRecordForm',
props: {
    items: {
      type: Object,
      required: true
    }
}

}

</script>

<style scoped>

