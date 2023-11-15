import { graphql } from 'gatsby';

export const query = graphql`
  fragment Portfolio on BcmsPortfolioPage {
    bcms {
      meta {
        en {
          title
          description {
            type
            name
            value
          }
          slug
        }
      }
    }
  }
`;
