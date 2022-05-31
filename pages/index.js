import { useState, useEffect } from "react";
import CreateProduct from "../components/CreateProduct";
import Product from "../components/Product";
import HeadComponent from "../components/Head";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const renderNotConnectedContainer = () => ( <
    div >
    <
    img src = "https://media0.giphy.cohttps://giphy.com/gifs/money-bar-gold-xULW8MIrFV8pyZjChim/media/LveMkKaN3KWcg/giphy.gif"
    alt = "gold bar" /
    >
    <
    div className = "button-container" >
    <
    WalletMultiButton className = "cta-button connect-wallet-button" / >
    <
    /div> < /
    div >
);

const App = () => {
    const { publicKey } = useWallet();
    const isOwner = publicKey ?
        publicKey.toString() === process.env.NEXT_PUBLIC_OWNER_PUBLIC_KEY :
        false;
    const [creating, setCreating] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (publicKey) {
            fetch(`/api/fetchProducts`)
                .then((response) => response.json())
                .then((data) => {
                    setProducts(data);
                    console.log("Products", data);
                });
        }
    }, [publicKey]);

    const renderItemBuyContainer = () => ( <
        div className = "products-container" > {
            products.map((product) => ( <
                Product key = { product.id }
                product = { product }
                />
            ))
        } <
        /div>
    );

    return ( <
        div className = "App" >
        <
        HeadComponent / >
        <
        div className = "container" >
        <
        header className = "header-container" >
        <
        p className = "header" > Stream Gold Store < /p> <
        p className = "sub-text" >
        The Stream Protocol is about tokenizing the asset gold in which there is transparency as to the property rights and redemption of the Gold.Stream Token gives customers the benefits of actual physical ownership of specific gold bars with the speed and mobility of a digital asset. <
        /p>

        {
            isOwner && ( <
                button className = "create-product-button"
                onClick = {
                    () => setCreating(!creating)
                } > { creating ? "Close" : "Create Product" } <
                /button>
            )
        } <
        /header>

        <
        main > { creating && < CreateProduct / > } { publicKey ? renderItemBuyContainer() : renderNotConnectedContainer() } <
        /main> < /
        div > <
        /div>
    );
};

export default App;