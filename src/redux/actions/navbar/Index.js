import axios from "axios"
export const loadSuggestions = () => {
  return dispatch => {
    axios.get("/api/search/bookmarks/data").then(response => {
      dispatch({
        type: "MAYBE_UPDATE_SUGGESTIONS",
        suggestions: response.data.searchResult
      })
    })
  }
}

export const updateStarred = object => {
  return dispatch => {
    axios
      .post("api/update/bookmarks", {
        obj: object
      })
      .then(() => {
        dispatch({
          type: "UPDATE_STARRED",
          object
        })
        dispatch(loadSuggestions())
      })
  }
}

// import axios from 'axios'

// // ** Get Bookmarks Array from @fakeDB
// export const getBookmarks = () => {
//   return dispatch => {
//     return axios.get('/api/bookmarks/data').then(response => {
//       dispatch({
//         type: 'GET_BOOKMARKS',
//         data: response.data.suggestions,
//         bookmarks: response.data.bookmarks
//       })
//     })
//   }
// }

// // ** Update & Get Updated Bookmarks Array
// export const updateBookmarked = id => {
//   return dispatch => {
//     return axios.post('/api/bookmarks/update', { id }).then(() => {
//       dispatch({ type: 'UPDATE_BOOKMARKED', id })
//     })
//   }
// }

// // ** Handle Bookmarks & Main Search Queries
// export const handleSearchQuery = val => dispatch => dispatch({ type: 'HANDLE_SEARCH_QUERY', val })
