import React from 'react'

export default class Test6 extends React.Component {
  render() {
    throw new Error("Client Test")
    return (
      <div>
        <h1>Client Test 6</h1>
      </div>
    );
  }
}