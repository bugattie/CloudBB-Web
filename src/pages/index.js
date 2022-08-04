import React from "react"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import MainBanner from "../components/ITStartup/MainBanner"
import PageBanner from "../components/Common/PageBanner"
import ProductCard from "../components/Shop/ProductCard"
import AboutUsContent from "../components/MachineLearning/AboutUsContent"
import TeamStyleTwo from "../components/Common/TeamStyleTwo"
import Footer from "../components/_App/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <MainBanner />
    <AboutUsContent />
    <PageBanner pageTitle="Products" />
    <ProductCard />
    <TeamStyleTwo />
    <Footer />
  </Layout>
)

export default IndexPage
