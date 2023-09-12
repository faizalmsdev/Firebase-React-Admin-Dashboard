import './home.scss';
import Sidebar from '../../components/sideBar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widgets from '../../components/Widgets/Widgets';
import Featured from '../../components/Featured/Featured';
import Chart from '../../components/Chart/Chart';

    const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widgets type='user'/>
                    <Widgets type='order'/>
                    <Widgets type='earning'/>
                    <Widgets type='balance'/>
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
            </div>
        </div>
    )
    }

    export default Home
