import clsx from "clsx";
import {
  InputHTMLAttributes,
  ForwardedRef,
  ReactNode,
  forwardRef,
  memo,
} from "react";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  placeholder?: string;
  errorMessage?: string;
  labelName?: string;
  rightIconElement?: ReactNode;
}

const Input = (
  {
    type,
    name,
    labelName,
    errorMessage,
    placeholder,
    rightIconElement,
    ...rest
  }: Props,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <div className={`flex flex-col relative ${errorMessage ? "" : "mb-8"}`}>
      {!!labelName && (
        <label className="mb-2" htmlFor={labelName}>
          {labelName}
        </label>
      )}

      <input
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        className={clsx(
          "w-full rounded-md border shadow border-white py-3 bg-white px-4 text-gray-100 text-bold",
          {
            "ring-1 ring-inset ring-red-500": !!errorMessage,
            "placeholder:text-gray-400": !!placeholder,
            "pl-4 pr-20": rightIconElement,
          },
        )}
        {...rest}
      />

      {rightIconElement && (
        <div className="absolute inset-y-0 right-2 flex items-center">
          {rightIconElement}
        </div>
      )}

      {!!errorMessage && (
        <label className="mt-2 h-[24px] text-[13px] text-red-500">
          {errorMessage}
        </label>
      )}
    </div>
  );
};

const Component = forwardRef<HTMLInputElement, Props>(
  function Component(props) {
    return <Input {...props} />;
  },
);

export default memo(Component);
