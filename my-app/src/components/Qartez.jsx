import Nkar from "./Nkar";
import Orinak from "./Orinak";
import Qartezcalendar from "./Qartezcalendar";

export default function Qartez() {
    return (
        <div className='qartez'>
            <Qartezcalendar />
            <Orinak />
            <Nkar />
        </div>
    )
}