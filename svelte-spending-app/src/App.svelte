<script lang="ts">
    import { Router, Route } from 'svelte-routing';
    import { routes } from './main'; // Assuming you have this exported
  
  </script>
  
  <Router>
    {#each routes as { path, component }}
      <Route path={path} component={component} />
    {/each}
  </Router>
  