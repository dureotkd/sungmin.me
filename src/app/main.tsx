"use client";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.4 }, // 순차적으로 실행
  }),
};

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    // ⏳ 1.2초 후 실행 & 리스트 아이템은 0.3초 간격으로 실행
    transition: { delay: 1.2, delayChildren: 1.2, staggerChildren: 0.3 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Main() {
  const projects = [
    {
      title: "Programmers",
      link: "https://exam-six-cyan.vercel.app",
      descriptions: [
        "MVVM 구조",
        "Prototype 상속을 활용한 정답 검토 시스템 개발",
      ],
      languages: ["React", "Node.js", "Javascript"],
    },
    {
      title: "부동산 매물 알리미",
      link: "https://www.areleme.com",
      descriptions: [
        "3Layer architecture(Controller -> Service Layer -> Data Access Layer)",
        "Promise.all 병렬 처리로 부동산 수집 속도 평균 2.5초 단축",
        "Bundle Analyzer 활용으로 번들 크기 30% 감소",
      ],
      languages: ["Next.js", "Node.js", "Jest", "Typescript"],
    },
    {
      title: "Ethicstem",
      link: "https://ethicstem.kr",
      descriptions: [
        "도메인 정책 수립 및 URL 표준화(canonical)",
        "반응형 웹 개발",
      ],
      languages: ["HTML", "CSS", "Javascript"],
    },
    {
      title: "League of Legends 밴픽 시뮬레이션",
      link: "https://lolban.vercel.app",
      descriptions: [
        "FSD 아키텍쳐 개발",
        "Socket.io를 활용한 양방향 이벤트 통신 개발",
      ],
      languages: ["React", "Node.js", "Javascript"],
    },
    {
      title: "모주지 - 선물 큐레이션 서비스",
      link: "https://disquiet.io/product/%EB%AA%A8%EC%A3%BC%EC%A7%80",
      descriptions: [
        "Android & IOS 배포",
        "코드푸쉬 개발",
        "Proguard를 통한 App Volumne 최적화",
      ],
      languages: ["React Native CLI", "Javascript"],
    },
    {
      title: "비드코칭연구소(주)",
      link: "https://www.okems.net",
      descriptions: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quae, blanditiis minima culpa quaerat optio cupiditate itaque. Eaque dignissimos dicta reprehenderit eveniet, possimus ab cum ea illum quis modi veniam?",
      ],
      languages: ["PHP", "Laravel", "Mysql", "React", "Rocky Linux"],
    },
    {
      title: "(주)터전",
      link: "https://www.terjeon.com/",
      descriptions: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quae, blanditiis minima culpa quaerat optio cupiditate itaque. Eaque dignissimos dicta reprehenderit eveniet, possimus ab cum ea illum quis modi veniam?",
      ],
      languages: ["PHP", "Laravel", "Mysql", "React", "Rocky Linux"],
    },
  ];

  return (
    <div className="mb-md">
      <div className="font-merriweather">
        <motion.div initial="hidden" animate="visible" exit="hidden">
          <motion.h2
            className="italic text-2xl"
            variants={textVariants}
            custom={0}
          >
            “더 나은 세상을 만드는 아름다운 여정에 함께 기여하고 싶습니다.”
          </motion.h2>
          <motion.p
            className="mt-sm leading-7 text-silver800"
            variants={textVariants}
            custom={1}
          >
            저는 자바스크립트에 관심이 많습니다. 그리고 개발에 있어서, 심플한
            UI를 구상하고 직관적이며 간결한 코드를 작성하도록 하는
            “미니멀리즘”에 관심이 많습니다. 심플한 UI는 모든 유저가 손쉽게
            서비스에 사용 및 접근할 수 있게 하고, 직관적이며 간결한 코드는
            개발자 사이에서 협업을 수월하게 합니다. 실력 있는 개발자는, 잘
            갖춰진 기술을 바탕으로 복잡하고 어려운 것들을 누구나 이해할 수
            있도록 쉽게 풀어낼 수 있고, 커뮤니케이션에 능통하여 편안하고 원활한
            협업이 가능하게 하는 사람이라고 생각합니다. 이러한 개발자가 되기
            위해서 끊임없이 학습하고 노력하고 있습니다.
          </motion.p>
        </motion.div>
      </div>

      <article className="border-primary border-t mt-lg">
        {/* 리스트 컨테이너 애니메이션 */}
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={listContainerVariants}
        >
          <ul>
            {projects.map((item, index) => (
              <motion.li
                className="pt-lg pb-lg border-primary border-b"
                key={`project-${index}`}
                variants={listItemVariants}
              >
                <div className="flex flex-col">
                  <div>
                    <div className="md:inline-block md:mr-sm md:mb-0 mb-sm">
                      <a
                        className="text-xl hover:underline underline-offset-[6px]"
                        href={item.link}
                        target="_blank"
                      >
                        {item.title}
                      </a>
                    </div>
                    {item.languages.map((lang, _index) => (
                      <span
                        className="text-sm mr-sm bg-gray-800 pl-sm pr-sm pt-tiny pb-tiny border-primary"
                        key={`lang-${_index}`}
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                  <div className="mt-sm">
                    {item.descriptions.map((des, key) => {
                      return (
                        <p className="mt-sm text-silver800" key={`des-${key}`}>
                          - {des}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </article>
    </div>
  );
}
