<script>
  export let text;
  export let className = undefined;
</script>

<button class={className} on:click>{text}</button>
