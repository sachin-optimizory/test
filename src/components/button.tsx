import React from "react"
import Button from "@atlaskit/button/new"

//@ts-ignore
export const button = ({ text }) => {
  return (
    <div>
      <Button appearance="primary">{text}</Button>
    </div>
  )
}
