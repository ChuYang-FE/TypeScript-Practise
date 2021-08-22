import React, { useEffect } from 'react'

export interface Props {
  name: string;
  level?: number;
}

export default function Hello({ name, level = 1 }: Props) {
  if (level <= 0) {
    throw new Error('You could be a little more enthusiastic(At least 1)');
  }

  return (
    <div>
      <h1>Hello {name + getMarks(level)}</h1>
    </div>
  )
}

function getMarks(level: number) {
  return Array(level + 1).join('!');
}