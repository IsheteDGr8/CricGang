import { NextResponse } from 'next/server';

const players = [
  {name: 'Ishaan', overs: 4, wickets: 2, runs: 20, extras: 7, scored: 15},
  {name: 'Shivek', overs: 4, wickets: 3, runs: 25, extras: 5, scored: 30}, 
  {name: 'Subodh', overs: 4, wickets: 1, runs: 30, extras: 10, scored: 25},
];

export async function GET() {
  try {
    return NextResponse.json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    return NextResponse.json({ error: 'Failed to fetch players' }, { status: 500 });
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


