import static org.junit.Assert.*;

import org.junit.Test;

public class NumberOfIslandsTest {

	@Test
	public void testNumberOfIslands() {
		int[][] island = { { 1, 1, 0, 0, 0 }, { 1, 1, 0, 0, 0 }, { 0, 0, 0, 1, 1 }, { 0, 0, 0, 1, 1 } };
		NumberOfIslands numberOfIslands = new NumberOfIslands();
		assertEquals(numberOfIslands.numDistinctIslands(island), 1);
	}
	@Test
	public void testNumberOfIslandsTwo() {
		int[][] island = { { 1, 1, 0, 1, 1 }, { 1, 0, 0, 0, 0 }, { 0, 0, 0, 0, 1 }, { 1, 1, 0, 1, 1 } };
		NumberOfIslands numberOfIslands = new NumberOfIslands();
		assertEquals(numberOfIslands.numDistinctIslands(island), 3);
	}

}
