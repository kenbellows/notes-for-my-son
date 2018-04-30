'use strict'

const baseUrl = 'localhost:3000'

module.exports = {
  getUserInfo(id) {
    return fetch(baseUrl+'/graphql', {method: 'post', body:`
      query {
        getUserInfo(${id}) {
          username
          recipients {
            id
            name
            address
          }
        }
      }
    `}).then(r => r.json())
  },
  
  getRecipientInfo(id) {
    return fetch(baseUrl+'/graphql', {method: 'post', body:`
      query {
        getRecipientInfo(${id}) {
          id
          name
          address
          queue
        }
      }
    `}).then(r => r.json())
  }
}