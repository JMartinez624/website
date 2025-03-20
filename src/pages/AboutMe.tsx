import { motion } from "motion/react"
import React from "react"
import { IconBrandLinkedinFilled } from '@tabler/icons-react';
import { IconBrandGithubFilled } from '@tabler/icons-react';
import { IconFileText } from '@tabler/icons-react';


export default function AboutMe() {
  return (
    <>
    <div className="flex  items-center justify-between h-lvh">
        <div>
            <motion.div animate={{ x: 150 }} initial="hidden" transition={{ type: "spring", duration: 1 }}>
                <h1 className="text-3xl text-black font-bold"> Hi there!</h1>
            </motion.div>
            <motion.div animate={{ x: 150 }} transition={{ type: "spring", duration: 2 }}>
                <h1 className="text-4xl text-black font-bold"> My name is <span className="text-amber-500 font-bold">Juan Martinez</span></h1>
            </motion.div>
            <motion.div animate={{ x: 150 }} transition={{ type: "spring", duration: 3 }}>
                <h1 className="text-xl text-black font-bold">Senior in Software Engineering at the University of Nebraska - Lincoln</h1>
            </motion.div>
            <div className="flex">
                <motion.div whileHover={{ scale: 1.2 }} initial={{ x: 150, scale: 0 }} animate={{ scale: [1, 1.5, 1.5, 1],
                rotate: [0, 0, 15, -15, 0], }} transition={{ duration: 2,
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,}}>                
                    <IconFileText stroke={2} width={64} height={64}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} initial={{ x: 150, opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },}}>                
                    <IconBrandGithubFilled width={64} height={64}/>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} initial={{ x: 150, opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },}}>                
                    <IconBrandLinkedinFilled width={64} height={64} color="#0077B5"/> 
                </motion.div>
            </div>
        </div>
        <div>
            <motion.svg width="700"
                height="full"
                viewBox="0 -200 300 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                initial={{pathLength: 0}}
                animate={{pathLength: 1}}
                transition={{
                    duration: 5.5,
                    ease: "easeIn",
                }}
                d="M1 148.5L62.5 146.5L54 125.5L47.5 100.5C47.5
                 100.5 45.5 97 45 96.5C44.5 96 47 91.5 47.5 90.5C48 
                 89.5 46 77 51 70.5C56 64 70 59 70 59C70 59 81.5 58.5 77.5 
                 62C73.5 65.5 84 57 84 57L82 65L87.5 79.5L97 74.5L99.5 85L97 
                 98.5L94.5 112.5L91.5 125.5L88.5 127.5L84 123L79.5 112.5L76.25 
                 105.5M73 98.5L76.25 105.5M76.25 105.5C76.25 105.5 74 112 74.5 
                 112.5C75 113 76.25 112.5 76.25 112.5L77.5 119H79.5V123L72 124.5C72
                124.5 66 129 65.5 130.5C65 132 65.5 136 65.5 136C65.5 136 68.5 130.5 71 
                  128.5C73.5 126.5 76.25 125.5 76.25 125.5H82L85.5 128.5H91.5L99.5 130.5H102L99.5 
                  138.5L100 145.5L91.5 143.5H82L74.5 145.5L67.5 146.5L58.5 148.5L51 150.5L54 153L61.5
                   152L72 150.5L84 148.5H91.5L97 150.5L95.5 155H82L65.5 156.5H52.5L47.5 
                   152V150.5L52.5 155H61.5H74.5L88.5 153L98.5 154L114 153H130.5H140V155H126.5H114H100L98.5
                    156.5L100 150.5L108.5 148.5H117L126.5 150.5L138.5 152L130.5 148.5L123.5 146.5H117M117
                    146.5L114 143.5L114.5 137.5L119 133H110.5L105.5 132L102 138.5V143.5L105.5 
                     145.5L112.5 146.5H117ZM123.5 145.5H128H137H143.5H150L156.5 148.5V146.5L154 
                     143.5L150 141L145.5 137.5L150 138.5L155 140.5L160.5 145.5L165.5 148.5V145.5L164.25 143M152.5 
                     133L155 134.5M155 134.5L157.5 136L159 137.25M155 134.5L159 137.25M159 137.25L160.5 138.5L163 140.5L164.25 143M164.25 143L167.5 143.5L170 143L167.5 138.5L163 133L157.5 132L155 130.5L151.5 129L145.5 130.5L140 132L131.5 134L123.5 133L120 126.5L119 114.5L114 98.5L112.5 94L114.5 85L117 81.5L116 74L114.5 70.5L112.5 74.5L110.5 81.5H105.5L102 76.5L95.5 72L93 65L90 59V53L91.5 48.5V46V44M91.5 44V42L94.5 44.5L91.5 44ZM87.5 39V34.5L91.5 33.5L95.5 36.5L97 34.5L102 30.5V26.5L100 24L103.5 20.5H108.5L114.5 24L122.5 26L130.5 26.5L133.5 26L137 20.5L138.5 14L131.5 8L122.5 2.5L114.5 1H105.5H95.5L90 5L85.5 9.5L87.5 14L90 17.5H92.75M95.5 17.5H92.75M92.75 17.5L91.5 15.5H85.5L82 19V24L82.5 27.5L84 30.5V34.5L91.5 30.5L95.5 32L100 34.5L106.5 36H110.5C110.5 36 114.5 32 112.5 34M112.5 34C112.5 34 113.5 32 114.5 32C115.5 32 120 32.5 120 33.5C120 34.5 120 36.25 120 36.25M112.5 34C112.5 34 112 34 110.5 36.5C109 39 109.5 40.5 110.5 42C111.5 43.5 115 44.5 117 44C119 43.5 120 39 120 39V36.25M120 36.25L123.5 36.5L125 39C125 39 124.455 43.5242 126.5 44C128.545 44.4758 130.175 44.5349 129 44C132.901 44.1381 133.435 44.109 133.5 44C134.647 42.6459 134.643 41.8758 134.5 40.5C134.718 37.1738 134.698 36.342 134.5 36C134.5 36 133 33 130.5 33.5C128 34 128.5 34 128.5 34M126.5 34.5L128.5 34M128.5 34L129 39V42V46V53L125 55L123.5 59L122.5 62L120 65H116L110.5 62L105.5 59C104.133 57.4379 103.367 56.5621 102 55C102 55 101.751 54.9864 100 55L97 53L98 49.5L97 46C97 46 95 48 95.5 48.5C96 49 100 51 100 51L103.5 53L106.5 57C106.721 58.9926 113.293 59.2862 110.5 59C107.707 58.7138 112.5 62 112.5 62C114.467 63.8129 118 63.5 119 63.5C120 63.5 122.03 63.3367 123.5 63.5L129 65L133.5 67L138.5 69L143.5 72L150 78L151.5 85L154 90.5L157.5 96.5L161.5 104.5L164.5 111.5L167.5 116.5L170 119L173 122L170 123H167.5H163L159 124.5V126.5H160.5H161.5L162.5 125.5L164.5 124.5L169.5 124H172L175 125.5H176.5L177.5 126.5L178.5 128V130.5L177 132.5L176.5 135.5L175 138.5L174 141L173 144L171.5 147.5L170.5 150L169.5 152L167 152.5L163 152L158 151L154 150.5L149.5 150L146 149.5H142.5L138.5 148.5L135 147.5L141 150H144.5L146.5 150.5L150.5 152H154L159 153L162.5 154L166.5 153.5L167.5 150.5L169.5 147.5L171.5 142L174 137.25L175 133L176.5 128L177.5 125.5L180 120.5L182 116.5L183.5 111.5L186 107L188.5 102L191.5 100L195.5 99H202.5H210.5L217.5 100H224H232L237.5 99L241.5 100H245L246 103L244.5 107L240 118L236.5 126.5L233 134.5L229.5 144L227 148.5L224 150L219.5 150.5L212 151.5L202 152L197 152.5L190 153L182 153.5L175.5 154H173L176 152.5L181 152L185.5 151L192 150.5L198 150H205L209.5 149L217 148.5H222L225.5 148L231 147.5L236 148L243.5 147.5H250H254.5H259H261" 
                     stroke="black"
                     strokeWidth={2.5}/>
            </motion.svg>

        </div>
    </div>
    <hr></hr>
    <div className="bg-stone-200 text-center h-auto">
        <h1 className="text-4xl text-black font-bold py-10"> A Little About Me. </h1>
        <h2 className="px-50 pb-20"> 
         Thanks for scrolling and reading to get to know me! My name is Juan Martinez and currently I am a senior at the University of Nebraska - Lincoln in Lincoln, Nebraska. I plan to graduate with a Bachelors in Software Engineering. 
         I have a strong interest in software development, primarily related to web development as well as mobile development. I have work experience in automation testing, secure software development, and experience with the product lifecycle from 
         building a feature to rolling it out to the general audience and valuing their feedback to better improve the software. I'm always looking for my next challenge whether that be integrating myself in a new environment with new people or 
         handling new tools and code. Outside of coding, I like going to the gym, reading sci-fi and fantasy books, playing video games like Overwatch, Pokemon, and Stardew Valley, and picking up new skills—whether it’s learning French, rock climbing, playing tennis, or lockpicking. I'm always looking to meet
         new people so feel free to reach out to chat!
         </h2>
    </div>
    </>
  )
}