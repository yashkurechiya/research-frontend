const columns = [
  { title: "Product", links: ["Live signals", "Experts", "Subscriptions"] },
  { title: "Experts", links: ["RA & IA profiles", "Publish signals", "Model portfolios"] },
  { title: "Learn", links: ["Courses", "Webinars", "Masterclasses"] },
  { title: "Company", links: ["About", "Careers", "Contact", "Partners"] },
  { title: "Legal", links: ["Terms", "Privacy", "Disclosures"] },
];

export default function RaFooter() {
  return (
    <footer className="w-full bg-navy px-8 py-10 text-white/70">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-1.5 text-sm">
              {col.links.map((link) => (
                <span key={link}>{link}</span>
              ))}
            </div>
          ))}
        </div>
        <p className="text-xs text-white/50">
          SEBI registration disclosure shown on verified RA &amp; IA profiles. Investments are subject to
          market risk. Signalz is advisory and education only, not custody.
        </p>
      </div>
    </footer>
  );
}
