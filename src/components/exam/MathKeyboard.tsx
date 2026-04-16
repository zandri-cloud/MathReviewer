import React from 'react';

interface MathKeyboardProps {
  onInsert: (text: string) => void;
}

export function MathKeyboard({ onInsert }: MathKeyboardProps) {
  const buttons = [
    { label: 'frac', insert: '\\frac{}{} ' },
    { label: '^', insert: '^{} ' },
    { label: 'sqrt', insert: '\\sqrt{} ' },
    { label: 'sin', insert: '\\sin ' },
    { label: 'cos', insert: '\\cos ' },
    { label: 'tan', insert: '\\tan ' },
    { label: 'ln', insert: '\\ln ' },
    { label: 'e^x', insert: 'e^{} ' },
    { label: 'π', insert: '\\pi ' },
    { label: 'sinh', insert: '\\sinh ' },
    { label: 'cosh', insert: '\\cosh ' },
    { label: '∫', insert: '\\int ' },
    { label: '∫_a^b', insert: '\\int_{}^{} ' },
    { label: '∞', insert: '\\infty ' },
  ];

  return (
    <div className="flex overflow-x-auto no-scrollbar gap-2 mb-3 bg-surface-container-lowest p-2 rounded-xl border border-outline-variant/30">
      {buttons.map((btn) => (
        <button
          key={btn.label}
          onClick={() => onInsert(btn.insert)}
          className="flex-shrink-0 px-3 py-1.5 bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant font-mono text-sm rounded-lg border border-outline-variant/20 shadow-sm transition-colors active:scale-95"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
