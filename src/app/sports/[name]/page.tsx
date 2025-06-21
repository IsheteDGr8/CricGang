import React from 'react'

const SportNamePage = async ({params}:{params:Promise<{name:string}>}) => {
  const data = await params;
  const info = await fetch("http://localhost:3000/api/sports");
  const infoText = await info.json();

  return (
    <div>{infoText}</div>
  )
}

export default SportNamePage
