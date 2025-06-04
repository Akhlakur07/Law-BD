import lawerimg from "../../assets/success-lawyer.png";
import reviewimg from "../../assets/success-review.png";
import caseimg from "../../assets/success-hammer.png";
import stuffimg from "../../assets/success-staffs.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const ServiceCard = ({ img, end, label }) => {
  const [ref, inView] = useInView({ triggerOnce: false });
  return (
    <div ref={ref} className="bg-[#f3f3f3] py-10 px-14 w-[22%] rounded-2xl">
      <img src={img} alt="" />
      <p className="text-5xl font-extrabold mt-5">
        {inView ? <CountUp key={inView} end={end} duration={6} /> : 0}+
      </p>
      <p className="text-xl font-medium text-gray-500 mt-3">{label}</p>
    </div>
  );
};

const Services = () => (
  <div className="mx-40 my-[100px]">
    <h2 className="text-center text-[40px] font-extrabold">
      We Provide Best Law Services
    </h2>
    <p className="text-center text-lg font-medium mt-4 w-3/4 mx-auto text-gray-500">
      Our platform connects you with verified, experienced Lawyers across
      various specialities — all at your convenience.
    </p>
    <div className="flex justify-between mt-8">
      <ServiceCard img={lawerimg} end={199} label="Total Lawyer" />
      <ServiceCard img={reviewimg} end={467} label="Total Reviews" />
      <ServiceCard img={caseimg} end={1900} label="Case Initiated" />
      <ServiceCard img={stuffimg} end={300} label="Total Stuffs" />
    </div>
  </div>
);

export default Services;