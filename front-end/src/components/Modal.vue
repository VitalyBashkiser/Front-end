<template>
  <div class="modal">
    <div class="modal-content">
      <slot></slot>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>
