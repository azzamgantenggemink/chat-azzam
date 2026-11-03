'use client';

import { useState, useRef, useEffect } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => Promise<void>;
  isLoading: boolean;
}

export default function ChatInput({
  onSendMessage,
  isLoading,
}: ChatInputProps) {
  const [input, setInput] = useState('');
  const [isComposing, setIsComposing] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = async () => {
    if (!input.trim() || isLoading || isComposing) return;

    const message = input.trim();
    setInput('');

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    // Blur textarea to hide mobile keyboard
    if (textareaRef.current) {
      textareaRef.current.blur();
    }

    await onSendMessage(message);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Tombol Enter sekarang hanya berfungsi untuk baris baru
    // Fitur kirim via Enter telah dimatikan sesuai permintaan user
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(
        textareaRef.current.scrollHeight,
        120
      ) + 'px';
    }
  }, [input]);



  return (
    <div className="border-t border-emerald-100 dark:border-slate-700 pt-4">
      <div className="relative flex items-end gap-3">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          placeholder="Tanya apa aja, saya siap membantu."
          disabled={isLoading}
          rows={1}
          className="flex-1 p-3 text-sm md:text-base rounded-xl border border-emerald-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-400 resize-none max-h-[120px] disabled:opacity-50 disabled:cursor-not-allowed shadow-sm shadow-emerald-100/60 dark:shadow-slate-950/50"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="px-4 py-3 bg-gradient-to-r from-emerald-500 to-red-500 hover:from-emerald-600 hover:to-red-600 text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md shadow-emerald-200/60"
        >
          {isLoading ? (
            <i className="fas fa-spinner animate-spin"></i>
          ) : (
            <i className="fas fa-paper-plane"></i>
          )}
        </button>
      </div>
      <div className="text-xs text-emerald-700 dark:text-gray-300 mt-6 text-center space-y-1">
        <p>“Azzamgantenkgemink AI Asisten bisa membantu, tapi tetap perlu verifikasi jika informasi sensitif.”</p>
        <p>© 2026 Hak Cipta Dilindungi.</p>
        <p>
          Developed by{' '}
          <a
            href="https://adi-muhamad.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 dark:text-red-300 hover:text-red-800 dark:hover:text-red-200 hover:underline transition-colors"
          >
            Azzamgantenkgemink
          </a>
        </p>
      </div>
    </div>
  );
}
