const bread = (state = [], action) => {
    switch (action.type) {
      case 'MAKE_SANDWICH':
        return [
          ...state,
          {
            forPerson:action.forPerson,
            secretSauce:action.secretSauce
          }
        ]
      case 'APOLOGIZE':
        return [
            ...state,
            {
                fromPerson:action.fromPerson,
                toPerson:action.toPerson,
                error:action.error
            }
        ]
        case 'WITHDRAW':
        return[
            ...state,{
                amount:action.amount
            }
        ]
      default:
        return state
    }
  }
  export default bread