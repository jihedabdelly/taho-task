<script lang="ts">
    import * as echarts from "echarts";
    import { onMount, onDestroy } from "svelte";
  
    interface Spending {
      userId: number;
      count: number;
      type: string;
    }
  
    export let data: Spending[] = []; // Initialize with an empty array
    let chartEl: HTMLDivElement;
  
    // Aggregate data function
    const aggregateData = (data: Spending[]) => {
      const aggregated: Record<string, number> = {};
  
      data.forEach(({ type, count }) => {
        if (aggregated[type]) {
          aggregated[type] += count;
        } else {
          aggregated[type] = count;
        }
      });
  
      return Object.entries(aggregated).map(([type, count]) => ({
        type,
        count,
      }));
    };
  
    let chart: echarts.ECharts | null = null;
  
    // Function to set up the chart
    const setupChart = () => {
      if (chart) {
        chart.dispose();
      }
      chart = echarts.init(chartEl);
      const aggregatedData = aggregateData(data);
  
      const option = {
        tooltip: {},
        xAxis: {
          type: "category",
          data: aggregatedData.map((item) => item.type),
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: aggregatedData.map((item) => item.count),
            type: "bar",
            barWidth: "60%",
          },
        ],
      };
  
      chart.setOption(option);
    };
  
    // Setup chart on mount and whenever data changes
    onMount(() => {
      setupChart();
    });
  
    $: if (data.length > 0) {
      setupChart(); // Update chart whenever data changes
    }
  
    // Cleanup chart on component unmount
    onDestroy(() => {
      if (chart) {
        chart.dispose();
      }
    });
  </script>
  
  <!-- Chart container -->
  <div bind:this={chartEl} class="w-full h-96">chart</div>


