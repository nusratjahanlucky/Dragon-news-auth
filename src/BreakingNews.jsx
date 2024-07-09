import Marquee from "react-fast-marquee"
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex">
            <h2 className="btn btn-secondary">Breaking News</h2>
            <Marquee pauseOnHover={true} speed={200}>
                <Link className="mr-12" to='/'>I can be a React component......</Link>
                <Link className="mr-12" to='/'>I can be a React component.....</Link>
                <Link className="mr-12" to='/'>I can be a React component.....</Link>
            </Marquee>

        </div>

    );
};

export default BreakingNews;