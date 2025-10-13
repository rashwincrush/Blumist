import Image from "next/image";
import Link from "next/link";

export default function BrandLockup({ showTagline = true }: { showTagline?: boolean }) {
  return (
    <Link
      href="/"
      className="group flex items-center gap-3 transition-opacity hover:opacity-90"
      aria-label="BluMist Aerial Solutions — Home"
    >
      {/* Logo Mark */}
      <div className="relative">
        {/* Enhanced glow behind logo to improve contrast */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-4 rounded-full mix-blend-screen
                     bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.55),transparent_75%)]
                     blur-xl md:blur-2xl opacity-95"
        />
        {/* Secondary cyan bloom for extra pop */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-6 rounded-full mix-blend-screen
                     bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),transparent_80%)]
                     blur-2xl md:blur-[40px] opacity-90"
        />
        <Image
          src="/Logo.png"
          alt="BluMist Logo"
          width={100}  // Increased from 80
          height={100} // Increased from 80
          priority
          className="h-22 w-22 md:h-25 md:w-25 transition-transform duration-300 ease-out group-hover:scale-105"
          style={{ 
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 18px rgba(59, 130, 246, 0.38))'
          }}
        />
      </div>
    </Link>
  );
}
