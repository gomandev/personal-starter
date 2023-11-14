import { graphql } from 'gatsby';

export const query = graphql`
  fragment ContactPage on BcmsContactPage {
    bcms {
      meta {
        en {
          title
        }
      }
    }
  }
`;
