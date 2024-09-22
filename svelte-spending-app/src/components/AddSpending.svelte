<script lang="ts">
    import { createSpending } from '../lib/api';
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing'; // Import navigate function if needed
  
    let formData = {
      userid: 0,
      count: 0,
      type: 'Food',
      model: 'Cash',
    };
  
    const handleChange = (e: Event) => {
      const target = e.target as HTMLInputElement | HTMLSelectElement;
      formData[target.name] = target.value;
    };
  
    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      try {
        await createSpending(formData);
        alert('Spending added successfully!');
        setTimeout(() => {
          navigate('/'); // Adjust based on your routing setup
        }, 2000);
      } catch (error) {
        console.error('Failed to add spending', error);
        alert('Error adding spending');
        setTimeout(() => {
          navigate('/'); // Adjust based on your routing setup
        }, 2000);
      }
    };
  </script>

  <div>

    <h1 class="text-2xl font-bold mb-16">Add New Spending</h1>
  
  
  <form on:submit={handleSubmit} class="max-w-lg mx-auto p-4">
    <div class="mb-4">
      <label for="userid">UserID</label>
      <input
        name="userid"
        min={1}
        required
        type="number"
        on:input={handleChange}
        class="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="count">Count</label>
      <input
        name="count"
        min={1}
        required
        type="number"
        on:input={handleChange}
        class="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
    <div class="mb-4">
      <label for="type">Type</label>
      <select
        name="type"
        bind:value={formData.type}
        on:change={handleChange}
        class="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Gadget">Gadget</option>
      </select>
    </div>
    <div class="mb-4">
      <label for="model">Model</label>
      <select
        name="model"
        bind:value={formData.model}
        required
        on:change={handleChange}
        class="w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="Cash">Cash</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Crypto">Crypto</option>
      </select>
    </div>
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 mt-6">
      Add Spending
    </button>
  </form>
  </div>