import Image from "next/image";
import { CiMobile3 } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

function aside() {
  return (
    <aside className="md:max-w-64 mr-md mb-md">
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

        <div className="flex flex-col justify-between md:mt-md">
          <div>
            <h2 className="text-2xl font-semibold">성민</h2>
            <p className="text-silver800">웹 개발자</p>
          </div>

          <div className="md:mt-md mt-sm flex flex-col text-sm">
            <div className="flex items-center text-silver200">
              <IoLocationOutline size={18} />
              <a className="ml-sm text-silver200" href="#">
                Daejeon, Korea
              </a>
            </div>
            <div className="mt-sm flex items-center text-silver200">
              <CiMobile3 size={18} />
              <a className="ml-sm text-silver200" href="#">
                010-5653-9944
              </a>
            </div>
            <div className="mt-sm flex items-center text-silver200">
              <MdAlternateEmail size={18} />
              <a className="ml-sm text-silver200" href="#">
                dureotkd123@naver.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default aside;
