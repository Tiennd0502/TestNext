"use client";

import { ReactNode, memo, useEffect, useRef } from "react";
import Button from "../Button";

interface Props {
  isOpen: boolean;
  children: ReactNode;
  isLoading?: boolean;
  title: string;
  onClose?: () => void;
  onSubmit?: () => void;
}

const Modal = ({ title, isOpen, children, onClose, onSubmit, isLoading }: Props) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when click outside
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose?.();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [modalRef, onClose]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none bg-[#5A718033]">
          <div ref={modalRef} className={`relative`}>
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none">
              <button className="text-end px-3" onClick={onClose}>
                <span className="block outline-none text-2xl">x</span>
              </button>

              {title && (
                <div className="flex justify-center rounded-t">
                  <h4 className="text-3xl font-semibold">{title}</h4>
                </div>
              )}

              <div className="relative p-6 flex justify-center">{children}</div>

              <div className="flex items-center justify-center p-6 rounded-b">
                <Button
                  onClick={onClose}
                  className="bg-gray-100 w-40 mr-5 text-white">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  onClick={onSubmit}
                  isLoading={isLoading}
                  className="text-white w-40 bg-blue-400">
                  Confirm
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Modal);
