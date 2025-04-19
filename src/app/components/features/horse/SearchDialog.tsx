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
      {/* グレーの背景・クリックで閉じない */}
      <div className="fixed inset-0 bg-white-500 bg-opacity-90 pointer-events-auto"></div>
      {/* モーダル本体 */}
      <div className="relative bg-white rounded-lg shadow-xl p-8 z-10 min-w-[300px] max-w-lg mx-auto border-2 border-black-500">
        {word}
      </div>
    </div>
  );
}
