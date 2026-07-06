import { NextRequest, NextResponse } from 'next/server';

const escMd = (text: string) => String(text).replace(/[_*[\]()~`>#+\-=|{}.!\\]/g, '\\$&');

export const POST = async (req: NextRequest) => {
  try {
    const { name, contact, projectType, budget, desc } = await req.json();

    if (!name?.trim() || !contact?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { BOT_TOKEN, TEAM_CHAT_ID } = process.env;

    if (!BOT_TOKEN || !TEAM_CHAT_ID) {
      console.error('Missing BOT_TOKEN or TEAM_CHAT_ID');
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
    }

    const text = [
      '📥 *Нова заявка з сайту*',
      '',
      `👤 *Ім'я:* ${escMd(name)}`,
      `📬 *Контакт:* ${escMd(contact)}`,
      `🔧 *Тип проєкту:* ${escMd(projectType || '—')}`,
      `💰 *Бюджет:* ${escMd(budget || '—')}`,
      `📝 *Опис:* ${escMd(desc || '—')}`,
      '',
      `🌐 *Джерело:* vexor\\.team`,
    ].join('\n');

    if (!BOT_TOKEN || process.env.PLAYWRIGHT_TEST === 'true' || process.env.NODE_ENV === 'test') {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TEAM_CHAT_ID,
        text,
        parse_mode: 'MarkdownV2',
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error('Telegram error:', err);

      return NextResponse.json({ error: 'Failed to send message' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('Contact API error:', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
};
