import static org.junit.Assert.*;

import org.junit.Test;

public class FrogJumpTest {

	@Test
	public void canCrossTest() {
		int[] arr = { 0, 1, 3, 5, 6, 8, 12, 17 };
		assertTrue(FrogJump.canCross(arr));
	}

	@Test
	public void cannotCrossTest() {
		int[] arr = { 0, 1, 2, 3, 4, 8, 9, 11 };
		assertFalse(FrogJump.canCross(arr));
	}

}
