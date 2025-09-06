import Arajark from "./Arajark";
import FilterPox from "./Filterpox";
import Footer from "./Footer";
import Header from "./Header";
import Pox from "./Pox";
import Zexjdiv from "./Zexjdiv";
import NkarZexj from "./Zexjnkar";

export default function Zexj() {
    return (
        <>
            <Header />
            <div className="vernagir">
                <p className="m-3">—————————————————————————————————</p>
                <h1>ՀԱՏՈՒԿ ԶԵՂՉԵՐ</h1>
                <p className="m-3">—————————————————————————————————</p>
            </div>
            <Zexjdiv />
            <Arajark />
            <div className="vernagir">
                <p className="m-3">—————————————————————————————————</p>
                <h1>ԹԵԺ ԱՌԱՋԱՐԿՆԵՐ</h1>
                <p className="m-3">—————————————————————————————————</p>
            </div>
            <div className="arajarks">
                <Pox />
                <FilterPox />
            </div>
            <NkarZexj />
            <Footer />
        </>
    )
}