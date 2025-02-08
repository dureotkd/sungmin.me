import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "areleme",
      link: "",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quae, blanditiis minima culpa quaerat optio cupiditate itaque. Eaque dignissimos dicta reprehenderit eveniet, possimus ab cum ea illum quis modi veniam?",
      languages: ["Typescript"],
    },
    {
      title: "areleme",
      link: "",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quae, blanditiis minima culpa quaerat optio cupiditate itaque. Eaque dignissimos dicta reprehenderit eveniet, possimus ab cum ea illum quis modi veniam?",
      languages: ["Typescript"],
    },
    {
      title: "areleme",
      link: "",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem quae, blanditiis minima culpa quaerat optio cupiditate itaque. Eaque dignissimos dicta reprehenderit eveniet, possimus ab cum ea illum quis modi veniam?",
      languages: ["Typescript"],
    },
  ];

  return (
    <div className="bg-primary flex w-full h-full min-h-screen pl-md pr-md pt-xl">
      <main className="w-full md:flex">
        <aside className="md:max-w-64 mr-md">
          <div className="flex md:flex-col">
            <div className="min-w-28 mr-md">
              <Image
                className="md:w-full w-32 rounded-sm"
                src="/face.jpg"
                alt="증명사진"
                width={200}
                height={200}
              />
            </div>

            <div className="flex flex-col justify-center md:mt-md">
              <h2 className="text-2xl font-semibold">성민</h2>
              <p className="mt-sm text-silver800">
                안녕하세요.. 어쩌구 저쩌구.......안녕안녕하세요.. 어쩌구
              </p>
            </div>
          </div>

          <div className="mt-md flex flex-col">
            <a className="text-silver200" href="#">
              Daejeon, Korea
            </a>
            <a className="mt-sm text-silver200" href="#">
              010-5653-9944
            </a>
            <a className="mt-sm text-silver200" href="#">
              dureotkd123@naver.com
            </a>
          </div>
        </aside>

        <article className="mt-md border-primary border-t">
          <ul>
            {projects.map((item, index) => {
              return (
                <li className="pt-lg pb-lg border-primary border-b" key={index}>
                  <div className="flex flex-col">
                    <div>
                      <a className="text-xl hover:underline" href={item.link}>
                        {item.title}
                      </a>
                      {item.languages.map((lang, _index) => {
                        return (
                          <span
                            className="text-sm ml-sm"
                            key={`lang-${_index}`}
                          >
                            {lang}
                          </span>
                        );
                      })}
                    </div>
                    <div className="mt-sm">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </article>
      </main>
    </div>
  );
}
