/**
 * 1-bit and 2-bit Characters (LeetCode 717)
 * -----------------------------------------
 * A '0' stands alone (one-bit char).
 * A '1' always starts a two-bit char: either 10 or 11.
 * Input ends with 0; determine if that last 0 is a standalone one-bit char.
 *
 * PATTERN: Single-pass greedy pointer advance.
 * IDEA: Walk left→right stopping before last element. When you see a 1, skip next (part of two-bit char); when 0, move one step. If you land exactly on last index at start of a loop, last is one-bit.
 * WHY IT WORKS: Parsing is deterministic—no branching; two-bit char consumes 2 bits, one-bit consumes 1.
 */

export function isOneBitCharacter(bits: number[]): boolean {
  let i = 0;
  // Only parse until the second-to-last position; we want to see where we stop.
  while (i < bits.length - 1) {
    // If current bit starts a two-bit character, jump 2; else jump 1.
    i += bits[i] === 1 ? 2 : 1;
  }
  // If we stopped exactly at last index, that last bit was never consumed as part of a two-bit char.
  return i === bits.length - 1;
}

/**
 * Alternative approach (count trailing consecutive 1s before last 0):
 * Count number of consecutive 1s ending right before final 0.
 * If count is even -> last 0 is one-bit; odd -> it's paired with preceding 1.
 * Not implemented here for brevity.
 */
