type Props = {
  word: string;
};

export default function SearchDialog({ word }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      {/* グラデーション＋ぼかし背景 */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-100 via-white to-pink-100 backdrop-blur-sm opacity-95 transition-opacity duration-300"></div>
      {/* モーダル本体 */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 z-10 min-w-[300px] max-w-md w-full mx-4 border border-gray-200 animate-fadeIn">
        <div className="text-center">
          {/* 点滅アニメーションを追加 */}
          <span className="block text-2xl font-semibold text-gray-800 mb-4 tracking-wide animate-blink-soft">
            {word}
          </span>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes blinkSoft {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-blink-soft {
          animation: blinkSoft 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
