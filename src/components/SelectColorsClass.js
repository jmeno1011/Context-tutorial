import React, { Component } from 'react'
import ColorContext from '../contexts/color';

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// class 를 이용한 static context 사용
export default class SelectColorsClass extends Component {
    static contextType = ColorContext;

    handleSetColor = color =>{
        this.context.actions.setColor(color)
    }
    handleSetSubcolor = color =>{
        this.context.actions.setSubcolor(color);
    }
  render() {
    return (
        <div>
        <h2>색상을 선택하세요</h2>
            <div style={{ display: "flex" }}>
              {colors.map((color) => (
                <div
                  key={color}
                  style={{
                    background: color,
                    width: 24,
                    height: 24,
                    cursor: "pointer",
                  }}
                  onClick={()=>this.handleSetColor(color)}
                  onContextMenu={e=>{e.preventDefault(); this.handleSetSubcolor(color)}}
                />
              ))}
            </div>
        <hr />
      </div>
    )
  }
}
