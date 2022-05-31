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
        title > Stream Pay Store < /title> <
        meta name = "title"
        content = "Stream Pay Store" / >
        <
        meta name = "description"
        content = "Buy items on my store using Stream Pay!" / >
        <
        /Head>
    );
}