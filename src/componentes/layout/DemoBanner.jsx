import site from "../../site.config";

export const ALTURA_BANNER = 28;

function DemoBanner() {
  if (!site.demo) return null;
  return (
    <div
      role="note"
      style={{ height: ALTURA_BANNER, zIndex: 10010 }}
      className="fixed top-0 left-0 w-full bg-zinc-800 text-zinc-200 text-[11px] md:text-xs flex items-center justify-center px-2 text-center border-b border-zinc-700"
    >
      {site.avisoDemo}
    </div>
  );
}

export default DemoBanner;
