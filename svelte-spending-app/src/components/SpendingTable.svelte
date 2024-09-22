<script lang="ts">
  export let spendings: { id: number; userid: number; count: number; type: string; model: string; createdat: string}[] = [];
  import { formatDate } from "../utils/formatDate";

</script>

<div class="px-3">
  <table class="min-w-full table-auto border  border-gray-300">
    <thead class="bg-gray-200">
      <tr>
        <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Spending ID</th>
        <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">User ID</th>
        <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Count</th>
        <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Type</th>
        <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Model</th>
        <th class="px-4 py-2 text-left text-sm font-medium text-gray-700">Created at</th>
      </tr>
    </thead>
    <tbody>
      {#each spendings as spending}
        <tr class="border-b hover:bg-gray-100">
          <td class="px-4 py-2 text-sm text-gray-600">{spending.id}</td>
          <td class="px-4 py-2 text-sm text-gray-600">{spending.userid}</td>
          <td class="px-4 py-2 text-sm text-gray-600">{spending.count}</td>
          <td class="px-4 py-2 text-sm text-gray-600">{spending.type}</td>
          <td class="px-4 py-2 text-sm text-gray-600">{spending.model}</td>
          <td class="px-4 py-2 text-sm text-gray-600">{formatDate(spending.createdat)}</td>
          <td class="px-4 py-2 text-sm text-gray-600">
            <!-- Optional buttons for edit/delete can be added here if needed -->
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
