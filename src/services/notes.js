'use strict'

const baseUrl = 'http://localhost:3000'

function graphqlQuery(query) {
  return fetch(baseUrl + '/graphql', {
    method: 'post',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({query})
  }).then(res => res.json())
}

export default {
  getUserInfo(id) {
    return graphqlQuery(`
      query {
        getUserInfo(id: ${id}) {
          username
          recipients {
            id
            name
            address
          }
        }
      }
    `)
  },

  getRecipientInfo(id) {
    return graphqlQuery(`
      query {
        getRecipientInfo(id: ${id}) {
          id
          name
          address
          queue
        }
      }
    `)
  }
}
