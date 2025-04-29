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
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/70 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-lg w-[95vw] max-h-screen p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">過去の戦績</h2>
          <button
            className="text-gray-400 hover:text-gray-600 transition"
            onClick={onClose}
            aria-label="閉じる"
          >
            ×
          </button>
        </div>
        <div className="overflow-y-auto max-h-[70vh]">
          <table className="min-w-full table-auto border-separate border-spacing-0">
            <thead className="sticky top-0 z-10">
              <tr>
                <th className="bg-gray-100 text-gray-700 font-semibold px-4 py-2 border-b text-xs text-left w-[15%]">日付・開催・天候</th>
                <th className="bg-gray-100 text-gray-700 font-semibold px-4 py-2 border-b text-xs text-left w-[25%]">レース名・距離・馬場</th>
                <th className="bg-gray-100 text-gray-700 font-semibold px-4 py-2 border-b text-xs text-center w-[10%]">着順</th>
                <th className="bg-gray-100 text-gray-700 font-semibold px-4 py-2 border-b text-xs text-left w-[20%]">騎手・斤量</th>
                <th className="bg-gray-100 text-gray-700 font-semibold px-4 py-2 border-b text-xs text-left w-[30%]">詳細情報</th>
              </tr>
            </thead>
            <tbody>
              {histories.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center text-gray-400 py-8">
                    戦歴データがありません
                  </td>
                </tr>
              ) : (
                histories.map((h, i) => (
                  <tr
                    key={h.race_name}
                    className={
                      i % 2 === 0
                        ? "bg-white hover:bg-blue-50"
                        : "bg-gray-50 hover:bg-blue-50"
                    }
                  >
                    {/* 日付・開催・天候 */}
                    <td className="px-4 py-2 text-sm text-gray-800 whitespace-pre-line leading-5">
                      {`${h.date}\n${h.venue}\n${h.weather}`}
                    </td>
                    {/* レース名・距離・馬場 */}
                    <td className="px-4 py-2 text-sm whitespace-pre-line leading-5">
                      <span className="font-bold text-indigo-700">{h.race_name}</span>
                      {"\n"}
                      <span className="text-indigo-600">{`${h.distance}・${h.track_condition}`}</span>
                    </td>
                    {/* 着順 */}
                    <td className="px-4 py-2 text-lg text-center font-extrabold text-red-600 drop-shadow-sm">
                      {h.finish_position}
                    </td>
                    {/* 騎手・斤量 */}
                    <td className="px-4 py-2 text-sm whitespace-pre-line leading-5">
                      <span className="font-semibold text-blue-700">{h.jockey}</span>
                      {"\n"}
                      <span className="text-blue-500">{`斤量 ${h.weight}`}</span>
                    </td>
                    {/* 詳細情報 */}
                    <td className="px-4 py-2 text-sm text-gray-600 whitespace-pre-line">
                      {`着差: ${h.margin}\nペース: ${h.pace}\n馬体重: ${h.horse_weight}\n上り: ${h.rise}`}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
