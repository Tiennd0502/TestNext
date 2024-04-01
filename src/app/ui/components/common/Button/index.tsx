import clsx from "clsx";
import { memo } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = ({ children, disabled, className, ...rest }: ButtonProps) => (
  <button
    type="button"
    className={clsx(
      `flex items-center justify-center rounded-md full hover:opacity-70 bg-white text-black p-3`,
      { "pointer-events-none opacity-50": disabled },
      className,
    )}
    {...rest}>
    {children}
  </button>
);

export default memo(Button);
