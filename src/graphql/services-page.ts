import { graphql } from 'gatsby';

export const query = graphql`
  fragment ServicePage on BcmsServicesPage {
    bcms {
      meta {
        en {
         title
         description {
            value
            type
            name
          }
         slug
        }
      }
    }
  }
`;
