import Link from "next/link";

export default function Header(props) {
  return (
    <div class='grid grid-cols-12 col-span-12 h-20 flex'>
        <div class="col-span-11 flex pl-10">
      <Link href="/">
        <a class="flex items-center text-2xl">
            AquariumML
        </a>
      </Link>
      </div>
    </div>
  );
}
