"use client";

import { btn, cn } from "@/components/classutils";
import { NativeModal } from "@/components/native-modal";
import { useSimpleModal } from "@/components/use-simple-modal";
import { UserIcon } from "@heroicons/react/24/outline";
import { Suspense } from "react";

export default function Page() {
  const { close: simpleClose, open: simpleOpen, dialogRef } = useSimpleModal();
  const open = () => {
    const dialog = document.querySelector("dialog");
    // dialog?.show(); // Opens a non-modal dialog
    dialog?.showModal();
  };
  const close = () => {
    const dialog = document.querySelector("dialog");
    dialog?.close();
  };

  return (
    <>
      <div className="p-20">
        <div className="mb-20 space-y-6 text-sm">
          <p>
            What's the difference between dialogs and modals? when the modal is
            open you cannot do anything on the page except for scroll. All other
            interaction is blocked until you explicitly close the modal. On the
            other hand, when the dialog is open you can still interact with the
            page just like normal.
          </p>
          <p>
            We expect the dialog/modal to close on outside click, but this isn't
            natively supported, so we add JS for that.
          </p>
          <p>
            If you have a form in your dialog you can set the method attribute
            of your form to dialog. This will cause the form to close the dialog
            when it is submitted and most importantly it will NOT submit your
            form. Instead the form data will be saved so if you reopen the same
            dialog your form will have all the same data in it.
          </p>
          <p>
            This can be taken a step further since on any submit button in your
            form you can add the formmethod="dialog" attribute to make that
            button act as if the form method was set to dialog. This is useful
            if you want to have a cancel button in your form that closes the
            dialog without submitting the form while the normal submit button
            would submit the form.{" "}
          </p>
          <p>
            <a
              className="underline visited:text-sky-500"
              href="https://web.dev/building-a-dialog-component/#adding-closing-and-closed-events"
            >
              Resource
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <button className={btn.secondary} onClick={open}>
            Simple Modal Implementation
          </button>
          <button className={btn.secondary} onClick={simpleOpen}>
            Implementation with Hook
          </button>
        </div>

        <dialog
          className={cn(
            "relative z-10 mt-[35vh] h-[160px] w-[300px] rounded-md border-slate-950 bg-slate-900 p-4 text-white",
            "backdrop:bg-indigo-600/20 backdrop:backdrop-blur-sm",
          )}
        >
          Hello from a browser native dialog element
          <button
            onClick={close}
            className={cn(btn["secondary-dark"], "absolute bottom-4 right-4")}
          >
            Close
          </button>
        </dialog>

        <Suspense>
          <NativeModal ref={dialogRef}>
            <form className="px-6 pb-20 pt-4 sm:pb-10">
              <h2 className="mb-8 flex select-none items-center text-lg font-medium text-neutral-900">
                <UserIcon className="-ml-1 mr-1 inline h-5 w-5 stroke-2 text-neutral-700" />
                Add User
              </h2>
              <div>
                <input className="mr-2 rounded-sm px-1 py-1.5 ring-1 ring-black/20" />
                <button className={btn.primary}>Submit</button>
              </div>
            </form>
          </NativeModal>
        </Suspense>
      </div>
    </>
  );
}
