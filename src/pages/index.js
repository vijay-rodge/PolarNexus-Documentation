import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="hero-badge">
          SMART INDIA HACKATHON 2026 &middot; PROBLEM STATEMENT 26063
        </div>
        <h1 className="hero-title">
          PolarNexus
        </h1>
        <p className="hero-subtitle">
          Integrated Polar Science Outreach, Knowledge Repository and Media Dissemination Portal for NCPOR & Ministry of Earth Sciences (MoES)
        </p>
        <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link
            className="button button--primary button--lg pn-btn-primary"
            to="/docs/intro">
            Explore System Docs
          </Link>
          <Link
            className="button button--secondary button--lg pn-btn-secondary"
            to="/blog">
            RAG & ML Deep Dives
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Engineering Documentation"
      description="Production-Grade Architecture and System Specification for the NCPOR Polar Science Knowledge Portal">
      <HomepageHeader />
      <main style={{padding: '3.5rem 0'}}>
        <div className="container">
          <div className="row" style={{gap: '1.5rem 0'}}>
            <div className="col col--4">
              <div className="feature-card" style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                  <h3 className="card-title-cyan">Unified Knowledge Repository</h3>
                  <p className="card-desc">
                    Synthesizes 40+ years of Indian Antarctic, Arctic, and Southern Ocean expeditions, linking research stations, institutional datasets, publications, and photographic bitstreams into a relational schema.
                  </p>
                </div>
                <div>
                  <Link to="/docs/knowledge/knowledge-repository" className="card-link-cyan">
                    Read Knowledge Docs &rarr;
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="feature-card" style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                  <h3 className="card-title-emerald">Deterministic Data Engine</h3>
                  <p className="card-desc">
                    Zero-hallucination meteorological computation engine. Replaces generative LLM mathematical guesses with sandboxed AST Pandas vectorized analysis over raw Quality-Controlled AWS sensor archives.
                  </p>
                </div>
                <div>
                  <Link to="/docs/scientific-data/overview" className="card-link-emerald">
                    Read Scientific Data Docs &rarr;
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col--4">
              <div className="feature-card" style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                  <h3 className="card-title-indigo">Audience Outreach Engine</h3>
                  <p className="card-desc">
                    Translates technical cryospheric papers into pedagogical school explainers, press bulletins, and interactive exhibits with human-in-the-loop scientific provenance tracking.
                  </p>
                </div>
                <div>
                  <Link to="/docs/outreach/overview" className="card-link-indigo">
                    Read Outreach Docs &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}