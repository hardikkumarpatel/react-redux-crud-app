const initialState = {
  profileDetailsList: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PROFILE_DETAILS':
      const { id, firstname, lastname, desigination } = action.paylod;
      return {
        ...state,
        profileDetailsList: state.profileDetailsList.concat({
          id: id,
          firstname: firstname,
          lastname: lastname,
          desigination: desigination
        })
      };

    default:
      return state;
  }
};

export default Reducer;
