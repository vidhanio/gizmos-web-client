import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument(): JSX.Element {
  return (
    <Html className="w-full h-full">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link href="" rel="stylesheet" />
      </Head>
      <body
        className={
          "text-gray-900 bg-gray-100 [font-feature-settings:'ss05'] dark:text-gray-100 font-['Cartograph_CF',ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,'Noto_Sans',sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] dark:bg-gray-900"
        }
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
