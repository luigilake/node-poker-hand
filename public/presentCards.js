let presentCards = (cards) => {
  cards.forEach( card => {
    console.log(` - ${card.printCard()}`)
  })
}

export default presentCards;
