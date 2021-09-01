import * as React from "react"

const ToPath = ({ pageContext }) => {
  const { example, toPath } = pageContext

  return <h1>{`${example}: ${toPath}`}</h1>
}

export default ToPath
