const BuyMeACoffee = () => {
  return (
    <a
      href="https://www.buymeacoffee.com/andrea.vega"
      target="_blank"
      rel="noopener noreferrer"
      // Bootstrap-klasser för styling, flexbox och marginaler
      className="btn btn-warning border-dark d-inline-flex align-items-center gap-2 fw-bold px-3 py-2"
      style={{ 
        backgroundColor: "#FFDD00", // Tvingar exakt din gula färg om btn-warning är för mörk
        color: "#000000" 
      }}
    >
      {/* Kaffekopps-ikon (SVG) */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" x2="6" y1="2" y2="4" />
        <line x1="10" x2="10" y1="2" y2="4" />
        <line x1="14" x2="14" y1="2" y2="4" />
      </svg>
      <span>Buy me a coffee</span>
    </a>
  );
};

export default BuyMeACoffee;