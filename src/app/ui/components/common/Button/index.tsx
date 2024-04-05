import { SpinnerIcon } from "@/app/ui/icons";
import clsx from "clsx";
import { memo } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

const Button = ({
  children,
  disabled,
  className,
  isLoading,
  ...rest
}: ButtonProps) => (
  <button
    type="button"
    className={clsx(
      `flex items-center justify-center rounded-md full hover:opacity-70 text-black p-3`,
      { "pointer-events-none opacity-50": disabled },
      className,
    )}
    {...rest}>
    {isLoading ? <SpinnerIcon /> : children}
  </button>
);

export default memo(Button);
