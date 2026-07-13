export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-xs text-slate-soft md:flex-row">
        <span className="font-display font-extrabold text-ink">
          BIT<span className="text-brand-blue">EXTRACT</span>-AI · ThinkBit
        </span>
        <p>Hosted on AWS · GDPR · HIPAA · ISO/IEC 27001 Certified</p>
        <p>© {new Date().getFullYear()} BitExtract AI</p>
      </div>
    </footer>
  )
}
