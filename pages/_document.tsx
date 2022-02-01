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
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={
          "text-gray-900 bg-gray-100 dark:text-gray-100 font-['JetBrains_Mono',ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,'Helvetica_Neue',Arial,'Noto_Sans',sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji','Segoe_UI_Symbol','Noto_Color_Emoji'] dark:bg-gray-900"
        }
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
