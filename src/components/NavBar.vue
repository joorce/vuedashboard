<template>
  <header class="bg-gray-800 w-full sm:flex sm:px-4 sm:py-3 sm:items-end">
    <div class="px-4 py-3 sm:p-0 sm:pb-2 flex items-center justify-between">
      <div class>
        <img class="inline-block h-10" src="/assets/logo.svg" />
      </div>

      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          class="block text-gray-500 focus:text-white focus:outline-none hover:text-white transition-all"
        >
          <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              v-if="isOpen"
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
            />
            <path v-if="!isOpen" d="M0 3H20V5H0V3ZM0 9H20V11H0V9ZM0 15H20V17H0V15Z" />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="px-2 pt-2 pb-4 sm:flex sm:ml-10 sm:p-0"
      :class="isOpen ? 'block' : 'hidden'"
    >
      <a
        class="block px-2 py-1 text-white font-semibold hover:bg-gray-700 transition-all"
        href="#"
      >Dashboard 1</a>
      <a
        class="block mt-1 sm:mt-0 sm:ml-2 px-2 py-1 text-white font-semibold hover:bg-gray-700 transition-all"
        href="#"
      >Dashboard 2</a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>
<style scoped>
.transition-all {
  transition: all 0.3s ease;
}
</style>

