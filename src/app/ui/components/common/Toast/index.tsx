import clsx from "clsx";
import { Button } from "..";

interface ToastProps {
  message: string;
  onClose?: () => void;
  color?: string ;
}

const Toast = ({ message, color = "bg-green-400", onClose }: ToastProps) => {
  return (
    <div
      className={clsx(
        `fixed right-10 top-20 flex items-center w-full max-w-xs p-4 mb-4 z-40 rounded-lg shadow ${color}`,
      )}
      role="alert"
      data-testid="toast">
      <div className="ms-3 text-sm text-white font-normal">{message}</div>
      <Button
        type="button"
        onClick={onClose}
        className={`ms-auto -mx-1.5 -my-1.5 text-white hover:text-gray-900 rounded-lg inline-flex items-center justify-center h-8 w-8 `}
        aria-label="Close">
        X
      </Button>
    </div>
  );
};

export default Toast;
