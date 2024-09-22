<script lang="ts">
    import { onMount } from 'svelte';
    import { getSpendings } from '../lib/api';
    import SpendingChart from '../components/SpendingChart.svelte';
    import SpendingTable from '../components/SpendingTable.svelte';
    import AddSpendingButton from '../components/buttons/AddSpendingButton.svelte';
    import ResetFiltersButton from '../components/buttons/ResetFiltersButton.svelte';
  
    interface Filters {
      userid: number;
      startdate: string;
      enddate: string;
      type: string;
      model: string;
    }
  
    let spendings: any[] = [];
    let filters: Filters = {
      userid: 0,
      startdate: '',
      enddate: '',
      type: '',
      model: '',
    };
  
    const fetchData = async () => {
      let data;
      if (filters.userid === 0 && filters.startdate === '' && filters.enddate === '' && filters.type === '' && filters.model === '') {
        data = await getSpendings();
      } else {
        data = await getSpendings(filters);
      }
      spendings = data;
    };
  
    // Fetch data on mount and when filters change
    onMount(() => {
      fetchData();
    });
  
    const handleFilterChange = (e: Event) => {
      const target = e.target as HTMLInputElement | HTMLSelectElement;
      const key = target.name as keyof Filters;
      filters[key] = target.value;
      fetchData(); // Fetch data after changing filters
    };
  
    const resetFilters = () => {
      filters = {
        userid: 0,
        startdate: '',
        enddate: '',
        type: '',
        model: '',
      };
      fetchData(); // Fetch data after resetting filters
    };
  </script>
  
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">User Spendings</h1>
    <SpendingChart data={spendings} />
    <AddSpendingButton />
  
    <!-- Filter Form -->
    <div class="mb-4">
      <input
        type="number"
        name="userid"
        placeholder="User ID"
        bind:value={filters.userid}
        on:input={handleFilterChange}
        class="border p-2 mr-2"
      />
      <input
        type="date"
        name="startdate"
        bind:value={filters.startdate}
        on:input={handleFilterChange}
        class="border p-2 mr-2"
      />
      <input
        type="date"
        name="enddate"
        bind:value={filters.enddate}
        on:input={handleFilterChange}
        class="border p-2 mr-2"
      />
      <select
        name="type"
        bind:value={filters.type}
        on:change={handleFilterChange}
        class="border p-2 mr-2"
      >
        <option value="">All Types</option>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Gadget">Gadget</option>
      </select>
      <select
        name="model"
        bind:value={filters.model}
        on:change={handleFilterChange}
        class="border p-2"
      >
        <option value="">All Models</option>
        <option value="Cash">Cash</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Crypto">Crypto</option>
      </select>
  
      <ResetFiltersButton onReset={resetFilters} />
    </div>
  
    <SpendingTable spendings={spendings} />
  </div>
  
  