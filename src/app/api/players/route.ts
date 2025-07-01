import { NextResponse } from 'next/server';

const players = [
  {name: 'Ishaan', played: 0, overs: 0, wickets: 0, runs: 0, extras: 0, scored: 0},
  {name: 'Shivek', played: 1, overs: 2.3, wickets: 2, runs: 11, extras: 1, scored: 19}, 
  {name: 'Subodh', played: 0, overs: 0, wickets: 0, runs: 0, extras: 0, scored: 0},
  {name: 'Jaswant', played: 1, overs: 3, wickets: 2, runs: 18, extras: 6, scored: 7},
  {name: 'Vivek', played: 1, overs: 1, wickets: 0, runs: 11, extras: 3, scored: 42},
  {name: 'Kaushik', played: 1, overs: 0, wickets: 0, runs: 0, extras: 0, scored: 7},
  {name: 'Harsh M', played: 1, overs: 0, wickets: 0, runs: 0, extras: 0, scored: 0},
  {name: 'Yash', played: 1, overs: 2, wickets: 0, runs: 7, extras: 3, scored: 10},
  {name: 'Vishnu', played: 1, overs: 2, wickets: 1, runs: 8, extras: 1, scored: 0},
  {name: 'Nikhil', played: 1, overs: 2, wickets: 3, runs: 6, extras: 3, scored: 10},
];


// API 

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


