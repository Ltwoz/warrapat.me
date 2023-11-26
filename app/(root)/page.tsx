import Social from "./_components/social";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-8 w-full">
      <section className="space-y-4 dark:text-neutral-400">
        <h1 className="text-2xl text-white">Warrapat Choedchusakunrat</h1>
        <p>
          I&apos;m a Software Engineering student somewhere in Thailand and a
          software developer. I enjoy building things that run on computers and
          exploring a lot (or a bit) of other tools, languages etc. while doing
          that.
        </p>
        <p>
          During my free time, I like to build things that I find interesting
          or would use; sometimes to learn more about something or just to
          fix a problem that&apos;s particularly frustrated me enough at that point
          in time. you can find other random things I
          build on my GitHub profile.
        </p>
      </section>
      <Social />
    </div>
  );
}
