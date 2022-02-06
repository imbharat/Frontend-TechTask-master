export const Queries = {
    getProducts: `{
      categories(ids: "156658", locale: de_DE) {
        name
        articleCount
        childrenCategories {
          name
          urlPath
        }
        categoryArticles(first: 30, offset: $offset) {
          articles {
            name
            variantName
            prices {
              currency
              regular {
                value
              }
            }
            images(
              format: WEBP
              maxWidth: 200
              maxHeight: 200
              limit: 1
            ) {
              path
            }
          }
        }
      }
    }`,
    searchSuggestions: `{
      autoSuggestion(prefix: "$prefix", locale: de_DE) {
        name
        count: results
        image(format: WEBP, maxWidth: 32, maxHeight: 32)
      }
    }`
}