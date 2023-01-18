import React from 'react'


import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import * as styles from '../templates/blog-post.module.css'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { StaticImage } from 'gatsby-plugin-image'


class BlogIndex extends React.Component {
  render() {

    const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title='About'
             description='Alexander Thiele is a seasoned technology leader and a Flutter developer by heart with more than 10 years experience in mobile development.' />
        <Hero
          image={author.heroImage.gatsbyImageData}
          title='About'
          content='Alexander Thiele is a seasoned technology leader and a Flutter developer by heart with more than 10 years experience in mobile development.' />
        <div className={styles.container}>
          <div className={styles.article}>
            <div
              className={styles.body}
            >
              <h2>Short Biography</h2>
              <p>Alexander Thiele is a seasoned technology leader and developer with more than 10
                years experience in tech including being a developer, tech lead, freelancer, CTO and more.</p>

              <img alt={'title'} src='/img/alex.jpg' />

              <h2>Where do you live?</h2>
              <p>I live in <b>Munich, Germany</b> and previously spent several years in Berlin working in various
                startups and
                even founded my own startup.</p>

              <h2>Where have you worked as a technology leader?</h2>
              <p>When I was still a Senior Android Engineer at Doodle, I got the chance to make my first experiences as
                an engineering manager in 2017. In the beginning, the Berlin team started with 4 employees and grew to
                over 30 after a few years.
                I created a friendly company & engineering culture and was also a prokurist for Doodle Germany and
                managed legal, contracts, accounting, and payroll for the entire team in Germany.
              </p>

              <p>In 2019, I joined a startup as the CTO (Chief Technology Officer) in Berlin. Prosperity was a FinTech &
                Digital Insurance Startup (Private Pension Management).
                I established an entirely new engineering team, created the technical roadmap and cleared all
                roadblocks. We were re-thinking the digital insurances with a scalable Backend, a shiny Frontend &
                stable Native
                Apps. The backend service managed around 400 million CHF in assets in the countries Switzerland,
                Liechtenstein, Germany, Austria, France, and Italy. Growing the team from 2 to 13.
                I was also a Managing Director and managed legal, contracts, accounting, and payroll in close
                cooperation with the team in Liechtenstein.</p>

              <h2>You also founded a startup, right?</h2>

              <p>Yes, in 2020 i founded LinkFive, moved to Munich and built the whole tech B2B SaaS myself. LinkFive is
                the
                Flutter In-App- Purchase Management service with a self developed Flutter plugin.
                Scaling multiple backends on gcloud cloud run with kotlin ktor, service communication with PubSub, API
                frontend with Vue.js, Flutter Plugins / Android SDK for Apps and landing page and developer
                documentation with gatsby.</p>
              <p>I have learned a lot and I am glad that I have taken the step to found a company.</p>

              <h2>Why do you like Flutter?</h2>
              <p>Throughout my career I've used and tested quite a few frameworks. I started with native development and
                tested phonegap, react native and Flutter right after it was released. </p>
              <p>With Flutter, the developer experience was by far the best. The development was just extremely fun and
                the community is just great. There are really a lot of plugins that developers put up for free on github
                and pub.dev. </p>
              <h2>Get in Contact</h2>

              <p>
                <ul>
                  <li>Ideally we just connect on <a href={'https://www.linkedin.com/in/athiele/'}
                                                    target={'_blank'}> LinkedIn</a></li>
                  <li>or write me an email to <a href={'mailto:alex@thiele.dev'} target={'_blank'}>alex@thiele.dev</a>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex


export const pageQuery = graphql`
  query HomeQueryOnBlog {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          shortBio
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
  }
`