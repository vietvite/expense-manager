export const parseCurrency = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const calcSum = data => {
  if (!(data instanceof Array)) { return 0 }

  return data
    .map(item => item.total)
    .reduce((sum, curCost) => sum + Number(curCost), 0)
}

export const expenseFilter = (listExpense = [], filterStates) => {
  return listExpense
    .filter(expense => filterStates[expense.status])
    .filter(expense => {
      if (expense.type === 'income') {
        return filterStates[expense.type]
      }
      return filterStates['outcome']
    })
}

export const isValid = (pattern, text) => {
  const regex = new RegExp(pattern)
  return regex.test(text)
}

export const formatDate = (datetime = new Date()) => {
  const year = datetime.getFullYear()
  const month = datetime.getMonth() + 1
  const date = datetime.getDate()
  return `${year}/${month < 10 ? '0' + month : month}/${date < 10 ? '0' + date : date}`
}