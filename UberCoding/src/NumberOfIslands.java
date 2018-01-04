import java.util.HashSet;
import java.util.Set;

public class NumberOfIslands {

	public int numDistinctIslands(int[][] grid) {
		if (grid == null || grid.length < 1 || grid[0].length < 1)
			return 0;
		int m = grid.length, n = grid[0].length;
		Set<String> res = new HashSet<>();
		for (int i = 0; i < m; i++) {
			for (int j = 0; j < n; j++) {
				Set<String> set = new HashSet<>();
				if (grid[i][j] == 1) {
					dfs(grid, i, j, i, j, set);
					res.add(set.toString());
				}
			}
		}
		return res.size();
	}

	private void dfs(int[][] grid, int i, int j, int baseX, int baseY, Set<String> set) {
		int m = grid.length, n = grid[0].length;
		if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0)
			return;
		set.add((i - baseX) + "_" + (j - baseY));
		grid[i][j] = 0;
		dfs(grid, i + 1, j, baseX, baseY, set);
		dfs(grid, i - 1, j, baseX, baseY, set);
		dfs(grid, i, j - 1, baseX, baseY, set);
		dfs(grid, i, j + 1, baseX, baseY, set);
	}
}
