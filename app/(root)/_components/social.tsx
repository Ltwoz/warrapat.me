import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Ltwoz",
    icon: FaGithub,
  },
  {
    label: "Discord",
    href: "https://discord.com/users/406803233466613780",
    icon: FaDiscord,
  },
  {
    label: "X",
    href: "https://twitter.com/Ltwoz",
    icon: FaXTwitter,
  },
  {
    label: "Email",
    href: "mailto:warrapat.cho@gmail.com",
    icon: HiOutlineMail,
  },
];

export default function Social() {
  return (
    <section className="space-y-2 w-full dark:text-neutral-400">
      <h3 className="text-lg text-white">Find me on</h3>
      <div className="flex items-center gap-6 w-full">
        {socialLinks.map(({label, href, icon: Icon}) => (
          <a key={href} href={href} target="_blank" rel="noopener noreferrer">
            <Icon
              size={28}
              className="hover:brightness-0 dark:hover:invert transition-all"
            />
            <span className="sr-only">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
