import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { useTheme } from "next-themes";
import Link from "next/link";

export function MainNav() {
  const { theme } = useTheme();
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <div className="w-7 h-7">
          <img
            src={`${theme === "light" ? "logo_dark.svg" : "logo_light.svg"}`}
            alt="Flair Logo"
            className="object-contain"
          />
        </div>
        <span className="inline-block text-xl font-bold">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  );
}
