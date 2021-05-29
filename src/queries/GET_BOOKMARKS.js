import { gql } from '@apollo/client';


export const GET_ALL_BOOKMARKS_FOR_A_USER = gql`
  query RootQueryType($username: String){
    user_account(username: $username){
      user_id,
      username,
      password,
      bookmark_questions{
        question_id,
        question_header,
        question_link,
        votes_count,
        views_count,
        displayname,
        user_info_link,
        dp_link,
        creation_date
      }
    }
  }
`;