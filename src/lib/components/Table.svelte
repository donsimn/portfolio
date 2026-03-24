<script lang="ts">
	interface Props {
		headers: string[];
		rows: (string | number)[][];
		caption?: string;
		inverted?: boolean;
		striped?: boolean;
		class?: string;
	}

	let {
		headers,
		rows,
		caption,
		inverted = false,
		striped = true,
		class: className = ''
	}: Props = $props();
</script>

<div class="table-wrapper overflow-x-auto {className}">
	<table
		class="w-full font-mono text-sm border-collapse border-2 border-black dark:border-white"
		class:inverted
	>
		{#if caption}
			<caption class="text-left mb-3 uppercase tracking-wider text-xs opacity-60">{caption}</caption>
		{/if}

		<thead>
			<tr>
				{#each headers as header}
					<th
						class="px-4 py-3 text-left uppercase tracking-wider text-xs border-b-2 border-r border-black dark:border-white last:border-r-0"
					>
						{header}
					</th>
				{/each}
			</tr>
		</thead>

		<tbody>
			{#each rows as row, i}
				<tr class:even={striped && i % 2 === 0}>
					{#each row as cell}
						<td
							class="px-4 py-3 border-b border-r border-black dark:border-white last:border-r-0"
						>
							{cell}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	/* Default: white bg, black text */
	table {
		background-color: transparent;
	}

	thead tr {
		background-color: black;
		color: white;
	}

	:global(.dark) thead tr {
		background-color: white;
		color: black;
	}

	/* Striped rows */
	tbody tr.even {
		background-color: rgb(245 245 245);
	}

	:global(.dark) tbody tr.even {
		background-color: rgb(20 20 20);
	}

	/* Inverted variant: black bg, white text */
	table.inverted {
		background-color: black;
		color: white;
	}

	:global(.dark) table.inverted {
		background-color: white;
		color: black;
	}

	table.inverted thead tr {
		background-color: white;
		color: black;
	}

	:global(.dark) table.inverted thead tr {
		background-color: black;
		color: white;
	}

	table.inverted tbody tr.even {
		background-color: rgb(20 20 20);
	}

	:global(.dark) table.inverted tbody tr.even {
		background-color: rgb(235 235 235);
	}
</style>
