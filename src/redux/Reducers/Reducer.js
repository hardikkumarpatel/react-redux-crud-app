const initialState = {
  profileDetailsList: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROFILE_DETAILS":
      const { id, firstname, lastname, desigination } = action.paylod;
      return {
        ...state,
        profileDetailsList: state.profileDetailsList.concat({
          id: id,
          firstname: firstname,
          lastname: lastname,
          desigination: desigination,
        }),
      };

    case "DELETE_PROFILE_DETAILS":
      const { deleteId } = action.paylod;
      return {
        ...state,
        profileDetailsList: state.profileDetailsList.filter(
          (res) => res.id !== deleteId
        ),
      };

    default:
      return state;
  }
};

export default Reducer;
