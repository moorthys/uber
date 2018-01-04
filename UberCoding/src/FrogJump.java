import java.util.HashMap;
import java.util.HashSet;

public class FrogJump {
	public static boolean canCross(int[] stones) {
		int len = stones.length;
		HashMap<Integer, HashSet<Integer>> map = new HashMap<Integer, HashSet<Integer>>();
		for (int i = 0; i < len; i++) {
			map.put(stones[i], new HashSet<Integer>());
		}
		map.get(0).add(1);
		for (int i = 0; i < len - 1; i++) {
			for (int step : map.get(stones[i])) {
				int to = step + stones[i];
				if (to == stones[len - 1]) {
					return true;
				}
				HashSet<Integer> tmp = map.get(to);
				if (tmp != null) {
					tmp.add(step);
					if (step > 1) {
						tmp.add(step - 1);
					}
					tmp.add(step + 1);
				}
			}
		}
		return false;
	}
}
