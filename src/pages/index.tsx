import Head from 'next/head';

import Laborally from '@/components/icons/laborally';

export default function Home() {
  return (
    <>
      <Head>
        <title>Laborally</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="head hunting, selección y reclutamiento, coaching ejecutivo, capacitación, outplacement, recursos humanos, gestión de personas, formación, entrenamiento"
        />
        <meta
          name="description"
          content="Gestión de Personas y Cultura Organizacional"
        />
        <meta property="og:title" content="Laborally" />
        <meta property="og:url" content="https://laborally.cl" />
        <meta property="og:image" content="/LaborallyPreview.webp" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Gestión de Personas y Cultura Organizacional"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Laborally" />
        <meta
          name="twitter:description"
          content="Gestión de Personas y Cultura Organizacional"
        />
        <meta name="twitter:creator" content="@diorrego" />
        <meta name="twitter:image" content="/LaborallyPreview.webp" />
        <meta name="author" content="Diego Orrego" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://laborally.cl" key="canonical" />
      </Head>
      <main className="h-screen mx-auto w-screen">
        <div className="flex justify-center w-full pt-60 sm:pt-72">
          <Laborally className="w-72 sm:w-[40rem]" />
        </div>
      </main>
    </>
  );
}
