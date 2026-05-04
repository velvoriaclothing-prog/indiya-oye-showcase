const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`divider-ornament ${className}`}>
    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-gold">
      <path d="M20 2 L24 10 L20 18 L16 10 Z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.3"/>
      <circle cx="6" cy="10" r="1.5" fill="currentColor"/>
      <circle cx="34" cy="10" r="1.5" fill="currentColor"/>
    </svg>
  </div>
);

export default Ornament;
