import Head from 'next/head'
import { getEntries } from '../lib/entries'
import Entry from '../components/index/entry'
import Layout from '../components/layout'

export default function Home({ entries }) {
  return (
    <Layout>
      <Head>
        <title>Μεμονωμένα Περιστατικά</title>
        <meta property="og:title" content="Μεμονωμένα Περιστατικά" />
        <meta property="og:description" content="Αστυνομική βία, αυθαιρεσία και κατάχρηση εξουσίας" />
        <meta property="og:image" content="https://memonomenaperistatika.gr/social-header.jpg?v=1" />
        <meta property="og:url" content="https://memonomenaperistatika.gr" />
        <meta property="og:type" content="website" />
      </Head>

      <h1><em>{ entries.reduce((acc, entry) => acc + entry.videos.length, 0) }</em> Μεμονωμένα Περιστατικά</h1>
      <h3>Αστυνομικής <em>βίας</em> και <em>κατάχρησης</em> εξουσίας</h3>

      <nav>
        <a href="https://forms.gle/cNgRuEyUQWDPr4rr8" className="button button-primary">Αναφορα Περιστατικου</a>
        <a href="https://twitter.com/peristatika" className="button button-secondary">Twitter</a>
      </nav>

      <section id="content">
        {
          entries.map(
            entry => <Entry entry={entry} key={entry.title} />
          )
        }
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const entries = await getEntries()

  return {
    props: { entries }
  }
}
