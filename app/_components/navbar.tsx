import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center py-2">
      <Link href="/" className="h-full">
        <span className="font-bold text-xl flex justify-center items-center">
          Ltwoz
        </span>
      </Link>
      <div className="hidden md:flex items-center ml-auto gap-4">
        <Link href="/projects">Projects</Link>
        <Link href="/archives">Archives</Link>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="h-7 w-7 ml-auto md:hidden flex items-center justify-center border rounded-md hover:bg-muted">
          <AlignJustify className="h-5 w-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/projects">Projects</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/archives">Archives</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
