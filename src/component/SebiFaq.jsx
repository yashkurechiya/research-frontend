const faqs = [
  {
    q: "Who is SEBI?",
    a: "SEBI, the Securities and Exchange Board of India, is the government-established regulator responsible for overseeing India's securities markets, including stock exchanges, listed companies, and registered market intermediaries such as Research Analysts (RAs) and Investment Advisers (IAs). SEBI sets the rules these intermediaries must follow and has the authority to register, monitor, and take action against them.",
  },
  {
    q: "How do I verify a Research Analyst's SEBI registration?",
    a: "Every SEBI registered Research Analyst is issued a unique registration number in the format INH0000XXXXX. You can verify any registration number directly on SEBI's official intermediary register, which shows the analyst's registration status, validity, and any regulatory actions on record. On Signalz, each analyst's registration number is a clickable link that takes you straight to their entry on SEBI's official register, including on this profile page.",
  },
  {
    q: "How do I know which Research Analysts are listed on Signalz and which are not?",
    a: "Only SEBI registered Research Analysts and Investment Advisers who have onboarded with Signalz appear on the platform with a profile like this one, showing a verifiable registration number. If an analyst, tipster, or channel is not listed on Signalz and does not display a SEBI registration number you can independently verify, you should treat their recommendations with caution — giving investment recommendations for a fee without SEBI registration falls outside SEBI's regulatory framework.",
  },
  {
    q: "Does SEBI registration guarantee an analyst's performance?",
    a: "No. Registration granted by SEBI, membership of BASL (in case of IAs), and certification from NISM in no way guarantee the performance of a Research Analyst or Investment Adviser, or provide any assurance of returns to investors. Registration confirms the analyst meets SEBI's eligibility, qualification, and conduct requirements — it is not an endorsement of any specific call, recommendation, or track record.",
  },
  {
    q: "What should I do if I have a complaint against a Research Analyst?",
    a: "If you have a grievance against a SEBI registered Research Analyst, you can first raise it directly with the analyst. If it remains unresolved, you can escalate it through SEBI's SCORES platform (scores.sebi.gov.in) or the Online Dispute Resolution (ODR) portal, both available to all investors free of cost.",
  },
];

export default function SebiFaq() {
  return (
    <div className="flex w-full flex-col items-start gap-4">
      <h2 className="text-[22px] font-bold text-ink">Frequently Asked Questions About SEBI</h2>
      <div className="flex w-full flex-col rounded-2xl  bg-white bg-card">
        {faqs.map((faq, i) => (
          <div key={faq.q} className={i > 0 ? "border-t border-slate-300" : ""}>
            <div className="flex flex-col gap-2 p-6">
              <p className="text-base font-bold text-ink">{faq.q}</p>
              <p className="text-[15px] leading-relaxed text-slate-600">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
