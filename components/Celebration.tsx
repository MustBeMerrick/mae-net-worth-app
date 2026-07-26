"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const MESSAGES: Record<string, string> = {
  balances: "Saved!",
  contribution: "Added!"
};

const CONFETTI_COUNT = 18;
const LIFETIME_MS = 900;

// Visibility is driven straight off the `celebrate` URL param (no local echo
// state) so there's nothing to desync when the param gets stripped below.
export function Celebration() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const celebrate = searchParams.get("celebrate");
  const message = celebrate ? MESSAGES[celebrate] : undefined;

  useEffect(() => {
    if (!message) return;

    const params = new URLSearchParams(searchParams);
    params.delete("celebrate");
    const qStr = params.toString();

    // Strip the param after the animation plays out, not immediately, so the
    // celebration stays mounted for its full lifetime.
    const timer = setTimeout(() => {
      router.replace(qStr ? `${pathname}?${qStr}` : pathname, { scroll: false });
    }, LIFETIME_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [celebrate]);

  if (!message) return null;

  return (
    <div className="celebration" aria-hidden="true" key={celebrate}>
      {Array.from({ length: CONFETTI_COUNT }, (_, i) => {
        const style: React.CSSProperties & Record<`--${string}`, string> = {
          "--angle": `${(360 / CONFETTI_COUNT) * i}deg`,
          "--delay": `${(i % 5) * 20}ms`
        };
        return <span key={i} className="celebration-piece" style={style} />;
      })}
      <div className="celebration-badge">{message}</div>
    </div>
  );
}
