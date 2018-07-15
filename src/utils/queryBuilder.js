const queryBuilder = (state, offset) => {

  let cat = categoryQuery(state.categoryFilter)
  if (offset) cat = cat + `&offset=${state.items.length}`
  console.log(cat.length)
  return cat
}

const categoryQuery = (categories) => {
  return 'category=' + categories.map(c => c.status === '+' ? c.id : '-' + c.id).join(',')
}

export default queryBuilder