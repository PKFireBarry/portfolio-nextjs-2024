import React from 'react'

function Timeline() {
  const events = [
    {
      name: "Scale AI - QA Engineer",
      description:
        "As an enthusiastic programmer, I've poured my heart and soul into developing multiple web applications that truly showcase my full-stack development skills. I've been working on curating and annotating high-quality datasets that play a pivotal role in training AI models to achieve high-performance levels, enabling them to tackle complex problems with levels of accuracy effectively for clients like Google, General Motors, and others.",
      time: '2023 - 2024', // If there is no specific time associated with this role
    },
    {
      name: "Extant3D - IT Administrator",
      description:
        "From 2020 to 2022, I worked as an IT Administrator at Extant3D. During this time, I conducted security audits and vulnerability assessments to identify potential security risks and implemented preventative measures. I also optimized the efficiency of the IT infrastructure by implementing strategies to minimize downtime and improve transaction processing times. I worked closely with the Chief Technology Officer to ensure the smooth operation of the company's data center equipment and IT infrastructure. I investigated and resolved security issues to minimize risks and ensure that the IT infrastructure was secure and protected using a ticket system. I utilized Python to automate routine tasks resulting in a more stable and secure IT infrastructure.",
      time: "2020 - 2022",
    },
    {
      name: "Action Link - Intel Sales Representative",
      description:
        "Prior to becoming a developer, I worked as a Channel Sales Representative at ActionLink. During this time, I strategically promoted content that equipped big box store associates with essential tools and resources to drive sales of Intel's products, resulting in an 8% increase in sales for the client in 2019 in my region. I utilized a comprehensive training program to successfully drive sales growth and significantly enhance brand awareness for the Intel retail edge website. I collaborated with cross-functional teams, including designers and developers, to create engaging and visually appealing web content that effectively communicated the value of Intel's products.",
      time: "2019 - 2020",
    },
    {
      name: "Hillsborough Community College",
      description:
        "A.S. in Information Technology\nRelevant Courses: Responsive Web Design, JavaScript Algorithms And Data Structures, Systems Analysis, Python for Everybody.",
      time: "2017 - 2020",
    },
  ];

  return (
    <div id='timeline' className="flex flex-col items-center justify-center min-h-screen bg-white mt-8 rounded-3xl dark:bg-gray-900 w-[60%]">
      <header className="my-10 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl underline">Timeline</h1>
        <p className="text-gray-500 dark:text-gray-400 m-4">A timeline of my work</p>
      </header>
      <main className="flex flex-col items-center justify-center px-4 md:px-6">
        <div className="w-full max-w-2xl">
          <div className="relative mt-12">
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600" />
            <div className="relative w-ful">
              {events.map((event, index) => (
                <div key={index} className={`flex items-start  justify-between mb-8  ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="px-6 rounded-xl bg-[#0d5d8c] py-4  outline w-4/6">
                    <h3 className="text-xl font-bold">{event.time}</h3>
                    <h4 className="text-lg text-white underline font-semibold  dark:text-gray-400">
                      {event.name}
                    </h4>
                    <p className="text-sm text-white dark:text-gray-400">
                      {event.description}
                    </p>
                  </div>
                  <div className="w-1/2 pl-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Timeline