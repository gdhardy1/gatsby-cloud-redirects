import * as React from "react"

const ToPath = ({ pageContext }) => {
  const { fromPath, toPath, isPermanent } = pageContext

  return (
    <>
      <h1>{`fromPath: ${fromPath}`}</h1>
      <h1>{`toPath: ${toPath}`}</h1>
      <h1>{`isPermanent: ${isPermanent ? isPermanent : false}`}</h1>
    </>
  )
}

export default ToPath
