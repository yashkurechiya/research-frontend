export default function DisclosureBox({ children }) {
  return (
    <div className="w-full max-w-[680px] rounded-[14px] border border-indigo/25 bg-indigo/[0.07] px-5.5 py-4.5">
      <div className="mb-1.5 text-[13px] font-bold text-indigo">Disclosure</div>
      <p className="text-[13px] leading-relaxed text-slate">{children}</p>
    </div>
  );
}
