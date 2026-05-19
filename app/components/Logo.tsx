export function DiamondMark({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 52 52" fill="none" className={className}>
      <polygon points="26,2 50,28 26,28" fill="currentColor" />
      <polygon points="26,52 50,28 26,28" fill="currentColor" opacity="0.2" />
      <polygon points="26,2 2,28 26,28" fill="currentColor" opacity="0.55" />
      <polygon points="26,52 2,28 26,28" fill="currentColor" opacity="0.08" />
    </svg>
  );
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <DiamondMark size={26} />
      <span
        style={{
          fontFamily: 'Geist, system-ui, sans-serif',
          fontSize: 17,
          fontWeight: 600,
          letterSpacing: -0.5,
          color: 'white',
        }}
      >
        vexor
      </span>
    </div>
  );
}
