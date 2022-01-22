<template>
  <div class="pages-static">
    <h3> {{title}} </h3>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default(){
                return 'The information is being filled in...'
            }
        }
    }
};
</script>

<style>
.pages-static {
  padding: 24px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  min-height: 320px;
}

.pages-static h3 {
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #001d42;
  margin-bottom: 24px;
}
</style>