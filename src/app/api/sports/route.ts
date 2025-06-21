import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json("Kohli is king");
  } catch (error) {
    console.error('Error fetching sports:', error);
    return NextResponse.json({ error: 'Failed to fetch sports' }, { status: 500 });
  }
}


export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('Received data:', data);
    return NextResponse.json({ message: 'Data received successfully', data });
  } catch (error) {
    console.error('Error processing POST request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}


export async function PUT(request: Request) {
  try {
    const data = await request.json();
    console.log('Received data for PUT:', data);
    return NextResponse.json({ message: 'Data updated successfully', data });
  } catch (error) {
    console.error('Error processing PUT request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}   


export async function DELETE(request: Request) {    
  try {
    const data = await request.json();
    console.log('Received data for DELETE:', data);
    return NextResponse.json({ message: 'Data deleted successfully', data });
  } catch (error) {
    console.error('Error processing DELETE request:', error);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}