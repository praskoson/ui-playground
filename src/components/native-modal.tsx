"use client";

import * as React from "react";
import { cn } from "./classutils";
import { XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  children?: React.ReactNode;
  // dialogRef: React.RefObject<HTMLDialogElement>;
};

export const NativeModal = React.forwardRef<HTMLDialogElement, Props>(
  ({ children }, ref) => {
    return (
      <dialog
        ref={ref}
        className={cn(
          "fixed inset-0 z-50 mb-0 block overflow-hidden p-0 sm:m-auto",
          "[&:not([open])]:pointer-events-none [&:not([open])]:opacity-0",
          "rounded-t-md bg-stone-50 ring-1 ring-black/10 sm:rounded-md",
          "max-h-[min(80vh,100%)] w-full max-w-full sm:max-w-[min(90vw,60ch)]",
          "open:backdrop:backdrop-blur-sm",
          "duration-300 animate-in animate-out fade-out open:fade-in open:slide-in-from-bottom-full sm:open:zoom-in-75",
        )}
      >
        <form>
          <button
            formMethod="dialog"
            type="submit"
            className="absolute right-1 top-1 h-6 w-6 rounded-full p-0.5 hover:bg-black/10 active:scale-90"
          >
            <span className="sr-only">Close modal</span>
            <XMarkIcon aria-hidden="true" className="" />
          </button>
        </form>
        {children}
      </dialog>
    );
  },
);
