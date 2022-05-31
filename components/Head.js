import Head from "next/head";

export default function HeadComponent() {
    return ( <
        Head >
        <
        meta name = "viewport"
        content = "initial-scale=1.0, width=device-width" / >
        <
        meta name = "theme-color"
        content = "#000000" / >

        <
        title > StreamPay Store < /title> <
        meta name = "title"
        content = "StreamPay Store" / >
        <
        meta name = "description"
        content = "Buy tokenized gold on store using StreamPay!" / >
        <
        /Head>
    );
}