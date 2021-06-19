import Document, {
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

// eslint-disable-next-line @typescript-eslint/naming-convention -- Custom Document component
export default class _Document extends Document {
  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href='/favicon.ico'
            rel='icon' />
          <link
            href='https://fonts.gstatic.com'
            rel='preconnect' />
          <link
            href='https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&family=Inter:wght@400;700&family=Nothing+You+Could+Do&display=swap'
            rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
