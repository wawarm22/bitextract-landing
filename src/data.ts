// Content decoded from BitExtract-AI 2.fig (canvas.fig → Kiwi)

export const keyBenefits = [
  { title: 'Precision OCR', color: 'blue', desc: 'Specialized in Thai language and cursive handwriting recognition.' },
  { title: 'Custom-Trained Intelligence', color: 'purple', desc: "Don't just use a generic model - build one that understands your specific forms." },
  { title: 'Enterprise Security', color: 'teal', desc: 'Bank-grade encryption and global compliance (GDPR, ISO 27001) built-in.' },
  { title: 'Infinite Scalability', color: 'magenta', desc: 'Hosted on AWS infrastructure, ensuring your operations never stop, no matter how much data you grow.' },
]

export const coreFeatures = [
  {
    title: 'Advanced Document Intelligence',
    items: ['Intelligent Extraction', 'Thai Language NLP', 'Model Customization'],
    desc: 'Fully supports Thai text classification and recognizes human handwriting with high confidence.',
  },
  {
    title: 'High-Performance Processing',
    items: ['Speed', 'Visual Clarity', 'Heavyweight Handling'],
    desc: 'Engineered to handle high-demand environments with a minimum throughput of 15 transactions per second.',
  },
  {
    title: 'Secure Data Management & Storage',
    items: ['Auto-Scalability', 'Versioning & Recovery', 'Unstructured Data Storage'],
    desc: 'Utilizing AWS S3 and DynamoDB technologies, storage expands automatically without downtime.',
  },
]

export const capabilities = [
  {
    title: 'Intelligent Extraction',
    desc: 'Context-aware extraction across both scanned and digital PDFs. Automatic detection of Form Fields, Selection Marks, tables, and overlapping fields. High-accuracy Selection Mark detection (checkboxes / radio buttons). Complex Table Extraction for financial and structured data. Handles overlapping fields through advanced spatial analysis.',
  },
  {
    title: 'Model Customization',
    desc: 'Tailor AI models using your specific document samples. Support for both Custom Training (new structures) and Fine-Tuning (enhancing existing accuracy).',
  },
  {
    title: 'Thai Language NLP',
    desc: 'Fully supports Thai text classification, with printed-text accuracy ≥ 97% (Character Accuracy / 1-CER) and handwritten-text accuracy ≥ 75%.',
  },
]

export const selfService = [
  "Build-your-own Extraction Profiles - ID cards, house registration, driver's licences, receipts, tax returns and more - defined from your own sample text and sample output, with no coding. Import, export, edit, and delete profiles to reuse across teams.",
  'Selectable OCR modes (general or complex-layout) and page / page-range selection, so you process only what you need.',
  'Preview the output structure before you run, then view live JSON results on screen - copy or download in one click.',
  'Review Rules automatically flag incomplete, out-of-condition, or inconsistent data for human checking.',
  'Full job history: track status, view details and JSON, cancel running jobs, and delete finished ones.',
  'User management with per-agency / per-user API keys for scoped access and external-system integration.',
]

export const performance = [
  { title: 'Heavyweight Handling', desc: 'Process files up to 500 MB or 2,000 pages per document.' },
  { title: 'Visual Clarity', desc: 'Supports high-resolution imagery up to 40 Megapixels.' },
  { title: 'Speed', desc: 'Engineered for high-demand environments: extraction speed ≥ 10 pages / minute and 15 transactions per second.' },
]

export const secureData = [
  { title: 'Unstructured Data Storage', desc: 'Effortlessly store images, PDFs, and log files.' },
  { title: 'Versioning & Recovery', desc: 'Built-in Version Control to revert to previous states and Soft-Delete protection to prevent accidental data loss.' },
  { title: 'Auto-Scalability', desc: 'Utilizing AWS S3 and DynamoDB technologies, storage expands automatically without downtime.' },
]

export const differentiation = [
  { n: '1', tag: 'THAI CONTEXT', title: 'Mastery', desc: 'Unlike generic global providers, BitExtract AI is optimized specifically for Thai syntax, local document formats, and Thai handwriting styles. It also extracts document control and reference numbers (including tax-return control numbers / DLN and forms such as ภ.ง.ด.1/3/53 and ภ.พ.30), and supports 10+ configurable form templates - including Thai government and financial documents.' },
  { n: '2', tag: 'HYBRID', title: 'Connectivity', desc: ' A full RESTful API covers document import, text-OCR calls, and structured-data extraction. Hosted on AWS for reliability, our dedicated "Low-Code" API layer integrates into your existing legacy systems.' },
  { n: '3', tag: 'PROACTIVE', title: 'Compliance', desc: "We don't just meet ISO standards - we provide automated audit logs for all data access, ensuring your Data Protection Officer (DPO) is always prepared for audits." },
]

export const specs = [
  { category: 'Infrastructure', requirement: 'Platform-as-a-Service (PaaS)', value: 'Hosted on Trusted AWS Cloud' },
  { category: 'Performance', requirement: 'Throughput', value: '15 Transactions per second' },
  { category: 'Performance', requirement: 'Extraction speed', value: '≥ 10 pages / minute' },
  { category: 'Extraction Accuracy', requirement: 'Thai — Printed', value: '≥ 97% (1-CER)' },
  { category: 'Extraction Accuracy', requirement: 'Thai — Handwritten', value: '≥ 75%' },
  { category: 'Extraction Accuracy', requirement: 'English — Printed', value: '≥ 97%' },
  { category: 'Extraction Accuracy', requirement: 'English — Handwritten', value: '≥ 75%' },
  { category: 'File Limits', requirement: 'Max Size / Pages', value: '500 MB / 2,000 Pages per file' },
  { category: 'Input Formats', requirement: 'Supported File Types', value: 'PDF (scanned & digital), JPG, JPEG, PNG, BMP, TIFF, GIF' },
  { category: 'Input Resolution', requirement: 'Minimum DPI', value: '300 DPI and above' },
  { category: 'Image Quality', requirement: 'Resolution', value: 'Up to 40 Megapixels' },
  { category: 'Training Capacity', requirement: 'Custom Models', value: 'Up to 50,000 pages; 1 GB training data' },
  { category: 'Training Capacity', requirement: 'Classification Models', value: '2,500-10,000 pages per category' },
  { category: 'Monthly Volume', requirement: 'Scalability', value: 'Unlimited' },
  { category: 'Licensing', requirement: 'Term & Pages', value: '1-year license · unlimited-page annual license per procurement' },
  { category: 'Encryption', requirement: 'Data at rest & in transit', value: 'AES-256 and TLS 1.3 Encryption' },
  { category: 'Connectivity', requirement: 'Integration', value: 'Full RESTful API Support (import · text-OCR · structured extraction)' },
]
