import Header from "./component/Header";
import ResourceSection from "./component/ResourceSection";
import Footer from "./component/Footer";
import { resources } from "./data/resources";
import { motion } from "framer-motion";

const App = () => {
  const siteUrl = "https://gamma.app";

  return (
    <div className="w-screen min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center font-sans overflow-x-hidden overflow-y-scroll h-64 scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-800 scrollbar-thin">
      
      <section className="w-full text-center py-16 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Header />
        </motion.div>
      </section>

      <main className="w-full max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ResourceSection title="Basics & Tutorials" resources={resources.basics} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ResourceSection title="Videos" resources={resources.videos} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ResourceSection title="PDFs & Books" resources={resources.pdfs} />
        </motion.div>
      </main>

      <Footer siteUrl={siteUrl} />
    </div>
  );
};

export default App;
