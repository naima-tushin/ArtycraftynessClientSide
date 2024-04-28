import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-center font-semibold mt-64 mb-6 text-6xl text-red-600">404!!</h1>
            <h1 className="text-center text-4xl">Pages Not Found!!!</h1>
            <button className="mt-10"><Link to="/" className="btn-ghost bg-gray-500 text-black font-semibold text-xl text-center ml-[80px] lg:ml-[715px] rounded-xl p-2">Go Back</Link></button>
        </div>
    );
};

export default ErrorPage;