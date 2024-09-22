<script lang="ts">
  export let onReset: () => void; // Prop for resetting the filters
</script>

<button
  on:click={onReset}
  class="bg-red-500 ml-5 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
>
  Reset Filters
</button>
