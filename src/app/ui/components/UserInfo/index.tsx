import Image from "next/image";

// Images
import { avatar } from "@/public/images";

interface IProps {
  src: string;
  name: string;
  role: string;
}

const UserInfo = ({ src, name = "", role = "" }: IProps) => {
  return (
    <div className="flex pt-8 justify-center items-center cursor-pointer">
      <div>
        <Image
          priority
          src={src || avatar}
          width={40}
          height={40}
          alt="avatar"
        />
      </div>
      <div className="px-4 uppercase space-y-1.5">
        <p className="text-white">{name}</p>
        <p className="text-blue-100">{role}</p>
      </div>
    </div>
  );
};

export default UserInfo;
