import {
  getKnowledgeBase,
  updateKnowledgeBase,
  addKnowledgeEntry,
} from '@/lib/gemini-rag';

export async function GET() {
  try {
    const knowledge = getKnowledgeBase();
    return new Response(JSON.stringify({ knowledge }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('[v0] Knowledge GET error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to retrieve knowledge' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { content, category } = body;

    if (!content || !category) {
      return new Response(
        JSON.stringify({ error: 'Content and category are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const entry = addKnowledgeEntry(content, category);
    return new Response(JSON.stringify({ success: true, entry }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('[v0] Knowledge POST error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to add knowledge' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { knowledge } = body;

    if (!Array.isArray(knowledge)) {
      return new Response(
        JSON.stringify({ error: 'Knowledge must be an array' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    updateKnowledgeBase(knowledge);
    return new Response(JSON.stringify({ success: true, knowledge }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('[v0] Knowledge PUT error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to update knowledge' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
