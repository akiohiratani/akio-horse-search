import { NextResponse } from 'next/server';
import { generateHorses, searchHorses } from '@/app/lib/mock/horses';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query') || '';

  // モックデータ生成（本番環境ではDB接続）
  const allHorses = generateHorses(1000);
  const results = searchHorses(allHorses, query);

  return NextResponse.json({ 
    data: results.slice(0, 100) // 最大100件
  });
}
