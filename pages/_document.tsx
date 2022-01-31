import { Head, Html, Main, NextScript } from "next/document";

export default function MyDocument(): JSX.Element {
  return (
    <Html className="w-full h-full">
      <Head />
      <body className="w-full h-full text-gray-800 bg-gray-200 dark:text-gray-200 dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
