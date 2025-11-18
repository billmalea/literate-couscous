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
 *
 * DUMB ANALOGY: Reading Tickets at a Gate
 * - Think of the array as a line of tickets.
 * - A ticket '0' is a solo ticket: one person walks through alone.
 * - A ticket '1' means this person bought a "buddy pass" that covers TWO spots (the '1' plus the next bit, either 10 or 11). They must pass together as a pair.
 * - The line always ends with a '0' ticket. Question: does that last '0' walk alone, or did a buddy pass right before it already consume it?
 * How to check quickly:
 *   Greedy scan: walk the line. If you see '1', let two people pass (i += 2). If you see '0', let one pass (i += 1). If you stop exactly on the final position before processing it, that last '0' is a solo ticket.
 *   Trailing-ones trick: count how many '1's are right before the last '0'. Odd count → last '0' gets paired (not solo). Even count → last '0' walks solo.
 */

export function isOneBitCharacter(bits: number[]): boolean {
  let i = 0;
  // Ticket line scan: stop before the final spot (the last ticket '0').
  while (i < bits.length - 1) {
    // If current ticket is '1' (buddy pass), two people go together → move 2.
    // If it's '0' (solo ticket), one person goes alone → move 1.
    i += bits[i] === 1 ? 2 : 1;
  }
  // If we land exactly on the last index, that last '0' wasn't consumed by a buddy pass → it walks solo.
  return i === bits.length - 1;
}

/**
 * Alternative approach: count trailing consecutive 1s before the final 0.
 * Logic:
 * - Scan from the element before the last (since input ends with 0).
 * - Count how many consecutive 1s appear right before that last 0.
 * - If that count is even, the last 0 stands alone (one-bit). If odd, it's paired with the preceding 1 (two-bit), so last isn't standalone.
 */
export function isOneBitCharacterByTrailingOnes(bits: number[]): boolean {
  if (bits.length === 0) return false;
  // By problem guarantee, bits[bits.length - 1] is 0. If not, fall back to greedy check.
  let i = bits.length - 2; // start from the element before the last 0
  let ones = 0;
  while (i >= 0 && bits[i] === 1) {
    ones++;
    i--;
  }
  // If we saw an even number of consecutive 1s, last 0 is a one-bit char; if odd, it's part of a two-bit char
  return ones % 2 === 0;
}
