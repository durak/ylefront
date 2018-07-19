import React from 'react'
import { connect } from 'react-redux'
import { Item, Image, Icon } from 'semantic-ui-react'

const ItemList = ({ items }) => {

  const startTime = (item) => {
    const current = item.publicationEvent.find((i) =>
      i.temporalStatus === 'currently'
    )
    return current.startTime.substring(0, 10)
  }

  const item = (n) => {
    return (
      <Item key={n.id}>
        {n.image.id && <Item.Image src={`http://images.cdn.yle.fi/image/upload/w_320,h_320,c_fit/${n.image.id}.jpg`} alt="kuva" size="medium" />}
        <Item.Content>
          <Item.Header>
            <span>
              {n.title ?
                n.title :
                n.partOfSeries ?
                  n.partOfSeries.title :
                  "no title"}
            </span>
          </Item.Header>
          
          <Item.Meta>
            <a href={`https://areena.yle.fi/${n.id}`} target="blank" rel="noopener noreferrer"><Icon name="play circle" link color="blue" /></a>                      
          </Item.Meta>

          <Item.Meta>
            {n.originalTitle &&
              <span>Alkuperäisnimi: {n.originalTitle}</span>
            }
          </Item.Meta>

          <Item.Meta><span> Tyyppi: {n.type}</span></Item.Meta>

          <Item.Description>
            {n.description ?
              n.description :
              n.partOfSeries ?
                n.partOfSeries.description :
                "no description"}
          </Item.Description>

          <Item.Extra>
            <span>Julkaistu: {startTime(n)}</span>
          </Item.Extra>
        </Item.Content>
      </Item>
    )
  }

  return (
    <div>

      <Item.Group divided>
        {items.map(i => item(i))}
      </Item.Group>

    </div>
  )


}


const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(
  mapStateToProps
)(ItemList)