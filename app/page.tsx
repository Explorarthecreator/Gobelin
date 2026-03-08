import { geistMono, ppneuemontreal, rocoleta } from "./font";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="space-y-2">
        <p className="text-2xl">God is the greatest</p>
        <p className={`text-3xl ${ppneuemontreal.className}`}>Let God be God</p>
        <p className={`text-3xl ${geistMono.className}`}>Let God be God</p>
        <p className={`text-3xl ${rocoleta.className}`}>Let God be God</p>
      </div>
    </div>
  );
}
