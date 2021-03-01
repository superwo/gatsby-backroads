import { Link } from "gatsby"
import React from "react"
import Banner from "../components/Banner"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"

export default function Home() {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="continue exploring"
          info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, molestiae?"
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </SimpleHero>
    </Layout>
  )
}
