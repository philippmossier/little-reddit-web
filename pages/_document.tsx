import React from 'react';
import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
    DocumentInitialProps,
} from 'next/document';

class MyDocument extends Document {
    static async getInitialPropsPromise(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
