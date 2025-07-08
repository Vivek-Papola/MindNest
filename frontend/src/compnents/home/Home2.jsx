// Home2.jsx
import React from 'react';

const Home2 = () => {
  return (
    <section className="bg-gray-800 dark:bg-gray-800 animate-fade-in">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Mental Health</h2>
          <p className="font-light sm:text-xl text-white">Read about some mental health related topics</p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            {
              title: "ADHD",
              img: "https://img.freepik.com/premium-vector/adhd-attention-disorder-prevent-adhd-vector-stock-illustration_100456-10568.jpg",
              link: "https://applications.emro.who.int/docs/EMRPUB_leaflet_2019_mnh_214_en.pdf"
            },
            {
              title: "Depression",
              img: "https://st4.depositphotos.com/23877174/25249/v/450/depositphotos_252490948-stock-illustration-depression-icon-vector-from-human.jpg",
              link: "https://www.who.int/news-room/fact-sheets/detail/depression"
            },
            {
              title: "Bipolar Disorder",
              img: "https://i0.wp.com/www.additudemag.com/wp-content/uploads/2021/07/GettyImages-1250310797.jpg",
              link: "https://applications.emro.who.int/docs/EMRPUB_leaflet_2019_mnh_216_en.pdf"
            },
            {
              title: "PTSD",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIB4hzxb2gqZY1oD5Key0bryI_xkC_0IUY3LObg_y2Hg&s",
              link: "https://applications.emro.who.int/docs/WHOEMMNH235E-eng.pdf?ua=1"
            },
            {
              title: "Schizophrenia",
              img: "https://i0.wp.com/mindsitenews.org/wp-content/uploads/2023/09/shutterstock_1519533587-schizophrenia.jpeg?resize=780%2C780&ssl=1",
              link: "https://www.who.int/news-room/fact-sheets/detail/schizophrenia"
            },
            {
              title: "Anxiety",
              img: "https://static01.nyt.com/images/2022/01/19/well/19good-anxiety/19good-anxiety-mediumSquareAt3X-v3.jpg",
              link: "https://www.who.int/news-room/fact-sheets/detail/anxiety-disorders"
            },
            {
              title: "Eating Disorder",
              img: "https://zinc.ca/wp-content/uploads/2023/04/zinc-eating-disorders.jpg",
              link: "https://www.nimh.nih.gov/health/statistics/eating-disorders"
            },
            {
              title: "Paranoia",
              img: "https://etimg.etb2bimg.com/photo/99479867.cms",
              link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6420131/"
            },
          ].map(({ title, img, link }, index) => (
            <div key={index} className="text-center text-gray-500 dark:text-gray-400 transition-transform transform hover:scale-105 duration-300">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full animate-zoom-in" src={img} alt={`${title} Avatar`} />
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">{title}</h3>
              <a className="cursor-pointer text-blue-300 hover:underline" href={link} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home2;
