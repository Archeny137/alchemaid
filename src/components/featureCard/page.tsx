import Image from "next/image";
import { motion } from "framer-motion";
interface CardProps {
  img: string;
  title: string;
  width: number;
  height: number;
}

const FeatureCard: React.FC<CardProps> = ({ img, title, width, height }) => {
  return (
    <>
      <motion.div
        className="rounded-3xl max-w-[25rem] bg-white flex flex-col space-y-5 justify-center items-center h-full"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={img}
          width={width}
          height={height}
          alt={"png"}
          className="py-6"
        />

        <div className="w-full rounded-b-3xl bg-green2 h-full items-center flex justify-center py-2">
          <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold text-white text-center px-4 max-w-sm">
            {title}
          </h3>
        </div>
      </motion.div>
    </>
  );
};

export default FeatureCard;
