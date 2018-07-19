const queryBuilder = (state, offset) => {

  let queryItems = []
  queryItems.push(queryOrder(state.queryFilter))
  if (state.categoryFilter.length > 0) queryItems.push(queryCategories(state.categoryFilter))
  if (state.queryFilter.search) queryItems.push(querySearch(state.queryFilter))
  if (state.queryFilter.type !== 'Kaikki') queryItems.push(queryType(state.queryFilter))

  //let cat = categoryQuery(state.categoryFilter)

  // if (offset) cat = cat + `&offset=${state.items.length}`
  if (offset) queryItems.push(`&offset=${state.items.length}`)
  console.log(queryItems.join('&'))
  return queryItems.join('&')
}

const queryCategories = (categories) => {
  return 'category=' + categories.map(c => c.status === '+' ? c.id : '-' + c.id).join(',')
}

const querySearch = (queryFilter) => {
  return 'q=' + queryFilter.search
}

const queryOrder = (queryFilter) => {
  return 'order=' + queryFilter.order
}

const queryType = (queryFilter) => {
  return 'type=' + queryFilter.type
}

export default queryBuilder