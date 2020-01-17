/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = ({ actions }) => {
  const c = path =>
    actions.createPage({
      path,
      component: require.resolve(`./src/templates/index`),
    })

  c(`/`)
  c(`/1`)
  c(`/2`)
  c(`/3`)
}
