import React from 'react'

type Props = {
  params: { filename: string}
}

function page({ params }: Props) {

  const { filename } = params;

  return (
    <div> {filename}
    </div>
  )
}

export default page