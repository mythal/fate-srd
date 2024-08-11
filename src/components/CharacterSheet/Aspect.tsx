import React from 'react'
import { Title, BlockContainer, InputWithLabel } from './Share'

export function Aspects(): JSX.Element {
  return (
    <div>
      <div>
        <Title>特征</Title>
      </div>
      <div className="flex items-center pt-2">
        <BlockContainer>
          <InputWithLabel name="high-concept" id="high-concept">
            核心概念
          </InputWithLabel>
          <InputWithLabel name="trouble" id="trouble">
            麻煩
          </InputWithLabel>
          <InputWithLabel name="relationship" id="relationship">
            關係
          </InputWithLabel>
          <InputWithLabel name="other-aspect" id="other-aspect-1">
            其他特征
          </InputWithLabel>
          <InputWithLabel name="other-aspect" id="other-aspect-2">
            其他特征
          </InputWithLabel>
        </BlockContainer>
      </div>
    </div>
  )
}
