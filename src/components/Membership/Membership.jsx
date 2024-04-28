import { Helmet } from "react-helmet-async";


const Membership = () => {
    return (
        <div className="font-roboto">
            <Helmet>
                <title>Elite Estates | Membership</title>
            </Helmet>
            <div className="text-center mt-12 mb-6 font-semibold lg:text-4xl">
                <h1>Welcome to our <span className="text-[#b99954]">Elite Estates</span> Membership!</h1>
            </div>
            <div className="flex lg:flex-row flex-col items-center lg:px-32 px-4 mb-8">
                <div className="card lg:w-3/4 h-52 bg-base-100 shadow-xl image-full ">
                    <figure><img src="https://i.ibb.co/kG68vkK/membership-1.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#b99954]">Regular Membership</h2>
                        <p className="text-left">Essential features, standard listings.</p>
                        <div className="card-actions justify-end">
                            <button className="btn border-black bg-[#b99954]">Register</button>
                        </div>
                    </div>
                </div>
                <div className="text-center lg:my-10 my-5 lg:pl-20 ">
                    <p className="font-bold text-left "> Embark on a journey of success in commercial real estate with our Regular Membership! <br /> Dive into a world of exclusive benefits including market insights, networking events, educational <br /> resources, property listings, member discounts, and vibrant community support. Don't miss out on this opportunity to elevate your expertise and maximize your potential. Join us today and unlock the doors to endless opportunities!</p>
                </div>
            </div>
            <hr className="border-dashed lg:border-none border-[2px] border-[#b99954]" />

            <div className="flex lg:flex-row flex-col items-center lg:px-32 px-4 mb-8">
                <div className="text-center lg:my-10 my-5 lg:pl-20 ">
                    <p className="font-bold text-left "> Discover Prime Properties First. Gain Exclusive Access with Premium Membership! <br />Get ahead in commercial real estate with our Premium Membership. Be the first to access off-market deals, leverage advanced analytics, and receive personalized support. Join now for exclusive opportunities and unparalleled benefits!</p>


                </div>
                <div className="card  lg:w-3/4 h-52 bg-slate-50 shadow-xl image-full ">
                    <figure><img src="https://i.ibb.co/zRMxsZq/membership-2.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-[#b99954]">Premium Membership</h2>
                        <p className="text-left" >Exclusive access, VIP treatment.</p>
                        <div className="card-actions justify-end">
                            <button className="btn  border-black bg-[#b99954]">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;