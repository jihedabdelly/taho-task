<script lang="ts">
  import { navigate } from "svelte-navigator"; // If you're using svelte-navigator
  import { Link } from "svelte-routing"; 

  const handleClick = () => {
    console.log(11)
    navigate("/add-spending");
    console.log(22)
  };
</script>

<div class="flex justify-center pb-5">
    <Link to="/add-spending">
        <button
            class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-200"
            on:click={handleClick}
        >
            Create New Spending
        </button>
    </Link>
  
</div>
