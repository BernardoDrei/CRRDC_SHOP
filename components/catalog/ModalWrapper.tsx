"use client";

// components/catalog/ModalWrapper.tsx — Shared Viewport-Centered Modal Portal with Scroll Lock
import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  className?: string;
}

// Global modal counter for nested/sequential modals to reliably lock/restore body scroll
let activeModalsCount = 0;

export default function ModalWrapper({
  isOpen,
  onClose,
  children,
  maxWidth = "min(92vw, 520px)",
  ariaLabel,
  ariaLabelledBy,
  className = "",
}: ModalWrapperProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock background body scroll while modal is open, and restore when closed
  useEffect(() => {
    if (!isOpen) return;

    activeModalsCount++;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      activeModalsCount = Math.max(0, activeModalsCount - 1);
      if (activeModalsCount === 0) {
        document.body.style.overflow = originalOverflow;
      }
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="modal-portal-overlay"
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className={`modal-portal-panel ${className}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        aria-label={ariaLabel}
        style={{ maxWidth }}
      >
        {children}
      </div>

      <style jsx>{`
        .modal-portal-overlay {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: oklch(from var(--color-ink) l c h / 0.5);
          backdrop-filter: blur(2px);
          z-index: 99999;
          padding: 16px;
          box-sizing: border-box;
          animation: modalOverlayFadeIn 180ms ease-out;
        }

        @keyframes modalOverlayFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .modal-portal-panel {
          position: relative;
          width: 100%;
          max-height: 85vh;
          max-height: 85dvh;
          background-color: #ffffff;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 20px 60px oklch(0% 0 0 / 0.35);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-sizing: border-box;
          animation: modalPanelScaleIn 180ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalPanelScaleIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>,
    document.body
  );
}
