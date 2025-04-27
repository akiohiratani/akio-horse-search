import React from "react";
import { History } from "@/app/domain/models/History";

type Props = {
  open: boolean;
  onClose: () => void;
  histories: History[];
};

export const HistoryDialog = ({ open, onClose, histories }: Props) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      {/* モーダル本体 */}
      <div className="bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl w-full max-w-4xl mx-4 border border-slate-100">
        {/* メインコンテンツ */}
        <div className="overflow-x-auto max-h-[60vh]">
          <table className="w-full text-sm">
            <tbody>
              {histories.length === 0 ? (
                <tr>
                  <td colSpan={13} className="text-center p-6 text-slate-400">
                    戦歴データがありません
                  </td>
                </tr>
              ) : (
                histories.map((h, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/80 transition even:bg-slate-50/30 border-b border-slate-100"
                  >
                    {/* 優先項目 */}
                    <td className="p-3 whitespace-nowrap">
                      <div className="font-medium text-slate-800">{h.date}</div>
                      <div className="text-xs text-slate-500 mt-1">
                        <span className="bg-slate-100/80 px-2 py-1 rounded-full">
                          {h.venue}
                        </span>
                        <span className="ml-2">{h.weather}</span>
                      </div>
                    </td>

                    <td className="p-3">
                      <div className="font-semibold text-slate-900">
                        {h.race_name}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        <span className="bg-blue-100/50 text-blue-800 px-2 py-1 rounded-full">
                          {h.distance}
                        </span>
                        <span className="ml-2">{h.track_condition}</span>
                      </div>
                    </td>

                    {/* 数値データ */}
                    <td className="p-3 text-right">
                      <span className="inline-block w-8 font-mono text-blue-600">
                        {h.finish_position}
                      </span>
                    </td>

                    <td className="p-3">
                      <div className="text-slate-800">{h.jockey}</div>
                      <div className="text-xs text-slate-500">
                        斤量 {h.weight}
                      </div>
                    </td>

                    <td className="p-3 text-right space-x-2">
                      <span className="inline-block w-12 text-slate-700">{h.margin}</span>
                      <span className="inline-block w-12 text-emerald-600">{h.pace}</span>
                      <span className="inline-block w-12 text-slate-700">{h.horse_weight}</span>
                      <span className="inline-block w-12 text-rose-600">{h.rise}</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* フッター */}
        <div className="flex justify-end p-4 border-t border-slate-100">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-lg shadow-blue-100"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
}
