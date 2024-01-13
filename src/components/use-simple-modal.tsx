import { useRef, useEffect, useMemo } from "react";

export const useSimpleModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const lightDismiss = ({ target }: HTMLElementEventMap["click"]) => {
    if ((target as Element | null)?.nodeName === "DIALOG") {
      dialogRef.current?.close("dismiss");
    }
  };
  const onDialogClose = ({ target }: HTMLElementEventMap["close"]) => {
    (target as HTMLDialogElement).setAttribute("inert", "");
  };
  const dialogAttrObserver = useMemo(
    () =>
      new window.MutationObserver((mutations) => {
        mutations.forEach(async (mutation) => {
          if (mutation.attributeName === "open") {
            const dialog = mutation.target as HTMLDialogElement;

            const isOpen = dialog.hasAttribute("open");
            if (!isOpen) return;

            dialog.removeAttribute("inert");

            // set focus
            const focusTarget = dialog.querySelector("[autofocus]");
            focusTarget
              ? (focusTarget as HTMLElement).focus()
              : dialog.querySelector("button")?.focus();
          }
        });
      }),
    [],
  );

  const open = () => {
    dialogRef.current?.showModal();
    void dialogRef.current?.offsetWidth;
  };

  const close = () => {
    if (!dialogRef.current) return;

    dialogRef.current.addEventListener(
      "animationend",
      () => {
        dialogRef.current?.close();
      },
      { once: true },
    );
  };

  useEffect(() => {
    dialogRef.current?.addEventListener("click", lightDismiss);
    dialogRef.current?.addEventListener("close", onDialogClose);
    dialogAttrObserver.observe(dialogRef.current!, { attributes: true });

    return () => {
      dialogRef.current?.removeEventListener("click", lightDismiss);
      dialogRef.current?.removeEventListener("close", onDialogClose);
      dialogAttrObserver.disconnect();
    };
  }, [dialogRef.current]);

  return { open, close, dialogRef };
};

async function animationsComplete(element: Element) {
  Promise.allSettled(
    element.getAnimations().map((animation) => animation.finished),
  );
}
