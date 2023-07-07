import Head from 'next/head';
import Layout, { siteTitle } from '../styles/components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi there!<br />
          <br />
          I'm a highly skilled and experienced web developer proficient in both Backend and Frontend development with Ruby on Rails, HTML, CSS, JavaScript, Node.Js, PostGresSQL, API Integration where I use JSON, XML, DevOps: Heroku.<br />
          Here, I try Next.JS
        </p>
        <p>
          With a strong background in web development, I specialize in building robust and scalable applications.<br />
          My Domain of Expertise & Specialities are (but are not limited to):<br />
          - MVP development from scratch<br />
          - Marketplace & E-commerce<br />
          - SaaS - Stock Management Software etc.<br />
          <br />
          I have successfully completed the prestigious Le Wagon Web Development BootCamp, where I gained in-depth knowledge and hands-on experience in various web technologies. My education has equipped me with a solid foundation in software development principles and best practices.<br />
          <br />
          I take pride in delivering high-quality work that meets clients' needs and exceeds their expectations. I am detail-oriented, reliable, and passionate about crafting elegant and intuitive user interfaces.<br />
          <br />
          If you're looking for a dedicated and skilled web developer to bring your ideas to life, I'm here to help. Let's collaborate and create something exceptional together.<br />
          <br />
          Feel free to reach out to me with any questions or project opportunities. I look forward to working with you!
        </p>
        <h1 className="title">
          <Link href="/posts/first-post">Contact me!</Link>
        </h1>
      </section>
    </Layout>
  );
}
