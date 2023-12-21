import Image from "next/image";
interface CardProps {
  img: string;
  title: string;
  width: number;
  height: number;
}

const FeatureCard: React.FC<CardProps> = ({ img, title, width, height }) => {
  return (
    <>
      <div className="rounded-xl max-w-[25rem] bg-white flex flex-col space-y-5 justify-center items-center">
        <Image
          src={img}
          width={width}
          height={height}
          alt={"png"}
          className="py-6"
        />

        <div className="w-full rounded-b-xl bg-green2 ">
          <h3 className="text-3xl font-semibold text-white text-center px-4">
            {title}
          </h3>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
