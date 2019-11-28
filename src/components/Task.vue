<template>
  <div class="content has-text-left is-size-5">
    <ul>
      <li v-for="(task, index) in tasks" :key="index"> {{ task }} </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: {
      tasks: {
        default: () => {
          return []
        }
      }
    }
  }
</script>
