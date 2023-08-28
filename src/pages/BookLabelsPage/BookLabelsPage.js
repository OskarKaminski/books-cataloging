import React from 'react'
import { observer } from 'mobx-react'
import ctrl from './BookLabelsPage.ctrl'
import styled from 'styled-components'

const Type = styled.span`
  padding: 6px;
  background-color: aliceblue;
`

const Category = styled.span`
  padding: 6px;
  background-color: aliceblue;
  border-radius: 10px;
  margin-right: 8px;
`

const Item = styled.div`
  border: 1px dashed;
  break-inside: avoid;
  display: flex;
  grid-gap: 10px;
  align-items: center;

  @media print {
    font-size: 16pt;
  }
`

const Name = styled.span`
  font-size: 1.25em;
  width: 100%;
`

const Author = styled.span`
  font-style: italic;
`

const Content = styled.div`
  padding: 10px;
  display: flex;
  width: 100%;
  grid-gap: 5px;
  align-items: center;
  border-right: 2px solid;
`

const Meta = styled.div`
  padding: 10px;
  display: flex;
  grid-gap: 5px;
  align-items: center;
`

export default observer(() => {
        return (
            <div>
                {
                    JSON.stringify(ctrl.books[0])
                }
                {
                    ctrl.books.map(book => (
                        <Item>
                            <Content>
                                <Name>{book.name}</Name> - <Author>{book.authors}</Author>
                            </Content>
                            <Meta>
                                <Type>{book.type}</Type> -
                                <Category>{book.categories}</Category>
                            </Meta>
                        </Item>
                    ))
                }

            </div>
        )
    }
)