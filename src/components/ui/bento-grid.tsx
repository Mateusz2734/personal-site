import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid lg:auto-rows-[4rem] grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-2 max-w-6xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  disableHover?: boolean;
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  disableHover,
}: BentoGridItemProps) => (
  <div
    className={cn(
      "row-span-1 rounded-xl group/bento transition duration-200 shadow-none bg-black border-white/[0.2] border justify-between flex flex-col",
      className
    )}
  >
    {header}
    <div
      className={cn(title && description && "p-4", {
        "group-hover/bento:translate-x-2 transition duration-200": !disableHover,
      })}
    >
      {icon}
      {typeof title === "string" ? (
        <h1 className="font-sans font-bold text-neutral-200">{title}</h1>
      ) : (
        title
      )}
      {typeof description === "string" ? (
        <p className="font-sans font-normal text-xs text-neutral-300 line-clamp-3">
          {description}
        </p>
      ) : (
        description
      )}
    </div>
  </div>
);