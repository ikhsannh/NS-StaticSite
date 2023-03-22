import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { introLeftAnimation, introRightAnimation, videoAnimation, textAnimation } from "@/utils/animations";

const Home: NextPage = () => {
    return (
        <motion.div
            className="min-h-screen px-40 bg-darkGreen text-cream"
            initial="initial"
            animate="animate"
        >
        <Head>
            <title>Home | Team RE</title>
        </Head>
        <Navbar />
        <main className="grid grid-cols-[3fr_1fr] py-2">
            <h1 className="text-6xl font-bold w-[40rem] leading-[90%] tracking">
           <AnimatedWords title="Generate electricity from the sun's." />
            </h1>
            <motion.div className="text-base leading-[150%] self-end" variants={introRightAnimation}>
            We offer a clean, sustainable, and reliable source of electricity that
            can help reduce our dependence on fossil fuels.
            </motion.div>
        </main>
        <motion.video className="rounded-lg" loop autoPlay muted playsInline variants={videoAnimation}>
            <source src={'https://auctions-live.s3.ap-southeast-2.amazonaws.com/re-energy.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkcwRQIhAKrcfvT6K8j4VYZ7Pm47HaJOPKz4gGqv1CFcF7ltpBuzAiBMPmGFtU8ZXhXvVD2mCObmjHlxNZq0xHXB%2BRMjEnGqyirtAgiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDQyMjYzMTAwMjM4NiIMtaK4OK25de%2Br66o4KsECeQR5MrWUogD7KMFBYBgDIaWOnSzd0%2B%2FdLqBp1wZeYYKo3P1hUKdebC7trNTfGFhMNddS6BijlGcnUv8SoKclmGIAJGhxVKwUjWcjqF6kBjuqSWtJpJuNi0Grkj9JChUTono%2Bg1d3rhq814cOaa7bFnlDygBqo70HRLIv1mIXgZzaMG2qiWP4nqGlAYzNQtyKzxfpQ4W%2Bpud2Ac7kOM%2BLDkEGDFbVPGz9tVewh%2FDZCExUNdo0TXFF17nRR423lK1%2FCeAhxGxMcymtcNVgdxQ2Jz8wxHpcSGf7gf0PUg6YMtz9pfRH0w73r9l3gAO7sAUInCyNRqKvmWxKatmeDPshEB4gOEAzREr1qXfXuHld2UeW9ic%2FYDba9%2BKrqeGrWb9d1tuq010ZdyxQ4aJpJDt9KDQMcSm3VLX8xl9QnGz%2B5u8wMKeF7qAGOrMCpdxIsaT0nHq670Ry8bY%2B9J2x4oi%2FmsFRaXWexIzQZcY2U9CH55J6OaAaaGTwep1Q4yYbmr1041Nl0Q9Ru3uxYaGW8ghV8Y%2FIruRopLlqPHJTIKJ8SnpgIHto28YXjh4RS2Lnm0oJaFEs5iGwB9HarrSLOkYt%2F1QvwBTGUH8fKIgLK0TsIEzjtNpHeFh5%2BlPy4n8YSVCXwnBG65VHrFDF4HZt5Wkd1u9zCZcXKy2Zfh4oWI5aeLpShBy1pjJcZg36921g0HO2cTCiI8OIG2yw4G0GSFOCaM%2FARTM1UOhAN%2FuDBqO9j3OtSGVakhfc0F4xhxXPQDQFEOo2PLVn9Fj4r5mzbCyhFky2N07IYXLP%2FrJzAD0QyylJni617eH4DgEzBzB4mLAwcPs%2BhW6brngFNipNfg%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230322T223928Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAWEZWFKEJPBZFVNQP%2F20230322%2Fap-southeast-2%2Fs3%2Faws4_request&X-Amz-Signature=7f6ffd716ea5a2872b82f3c1856c3c98ca7475f106fccae3b897a8eb6aa088e5'} type="video/mp4" />
        </motion.video>
      
        <Footer />
        </motion.div>
    );
    };

    type AnimatedWordsProps = { 
        title: string;
      };
      
      export const AnimatedWords: React.FC<AnimatedWordsProps> = ({ title }) => {
        return (
          <motion.span variants={introLeftAnimation}>
            {title.split(" ").map((word, index) => (
              <div key={index} className="inline-block overflow-hidden">
                <motion.span className="inline-block overflow-hidden" variants={textAnimation}>{word + "\u00a0"}</motion.span>
              </div>
            ))}
          </motion.span>
        );
      };

export default Home;

