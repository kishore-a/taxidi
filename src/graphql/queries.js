/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      Image
      rating
      number_of_people_rated
      house_type
      Place
      House_description
      before_price
      after_price
      latitude
      longitude
      description
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Image
        rating
        number_of_people_rated
        house_type
        Place
        House_description
        before_price
        after_price
        latitude
        longitude
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
