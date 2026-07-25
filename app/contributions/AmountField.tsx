"use client";

import { useState } from "react";

// Mobile's decimal keypad has no minus key, so withdrawals (negative amounts)
// were untypeable on a phone. A sign toggle sidesteps that without giving up
// the numeric keypad for the common (positive) case.
export function AmountField() {
  const [negative, setNegative] = useState(false);
  const [magnitude, setMagnitude] = useState("");

  // A pasted/typed leading "-" in the magnitude field cancels out with the
  // toggle instead of stacking into "--70" (a double negative should net positive).
  const trimmed = magnitude.trim();
  const magnitudeNegative = trimmed.startsWith("-");
  const magnitudeAbs = magnitudeNegative ? trimmed.slice(1) : trimmed;
  const effectiveNegative = negative !== magnitudeNegative;
  const amountValue = magnitudeAbs && effectiveNegative ? `-${magnitudeAbs}` : magnitudeAbs;

  return (
    <div className="amount-field">
      <button
        type="button"
        className="amount-sign-toggle"
        aria-pressed={negative}
        aria-label={negative ? "Withdrawal (negative) — tap to switch to contribution" : "Contribution (positive) — tap to switch to withdrawal"}
        onClick={() => setNegative((n) => !n)}
      >
        {negative ? "−" : "+"}
      </button>
      <input
        type="text"
        inputMode="decimal"
        value={magnitude}
        onChange={(e) => setMagnitude(e.target.value)}
        placeholder="0.00"
        required
      />
      <input type="hidden" name="amount" value={amountValue} />
    </div>
  );
}
