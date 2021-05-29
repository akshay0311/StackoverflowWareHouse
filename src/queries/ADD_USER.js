import {gql} from '@apollo/client';


export const ADD_USER = gql`
  mutation Mutation($username: String, $password: String) {
    addUser(username: $username, password: $password) {
      user_id,
      username
    }
  }
`;

