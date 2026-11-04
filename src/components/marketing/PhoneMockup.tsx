import Image from "next/image";

export function PhoneMockup({
  src,
  alt,
  priority,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="border-ink bg-ink relative w-[clamp(200px,62vw,280px)] rounded-[2.75rem] border-[10px] p-0.5 shadow-[var(--shadow-lg)]">
        <div className="bg-surface relative aspect-[1206/2622] overflow-hidden rounded-[2.12rem]">
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(min-width: 640px) 280px, 62vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
}
