import { graphql } from 'gatsby';

export const query = graphql`
  fragment Testimonials on BcmsTestimonialsPage {
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
