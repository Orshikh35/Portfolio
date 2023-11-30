import CIcon from "./icons/CIcon";

export default function Footer() {
  return (
    <div className=" bg-slate-50 w-screen flex justify-center">
      <div className="py-6 flex justify-center items-center gap-2">
        <CIcon />
        <p className="text-sm text-current font-normal leading-5">
          2023 | Designed and coded with ❤️️ by Sagar Shah
        </p>
      </div>
    </div>
  );
}
