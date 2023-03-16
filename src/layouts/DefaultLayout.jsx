import Card from "../components/Card";
import Navbar from "../components/Navbar";

const DefaultLayout = ({children}) => {
    return (
       <main className="d">
            <Navbar  />
            <div>
                {children}
            </div>
            <div>
                <Card name={"Samuel Henshaw"} />
            </div>
            {/* footer */}
       </main>
    )
}

export default DefaultLayout;