import gql from "graphql-tag"

export const allArticlesQuery = gql`
    query allArticlesQuery{
        articles{
            id
            title
            date
            description
            body
            slug
        }
    }
`
export const singleArticleQuery = gql`
    query singleArticleQuery($id: ID!){
       article(id: $id){
            id
            title
            date
            description
            body
            slug
        }
    }
`
