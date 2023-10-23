import { teams } from "@/constants";
import Image from "next/image";

const Team = () => {
  return (
    <section className="wrapper section-padding">
      <div className="max-w-xl mx-auto text-center space-y-2 pb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground uppercase">
          Our Exceptional <span className="text-gradient">Team</span>
        </h2>
        <p className="text-sm md:text-base text-foreground">
          Meet the Professionals Behind Our Success.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {teams.map((team, index) => (
          <div
            key={index}
            className="bg-card rounded-xl shadow-md p-4 min-h-[320px] cursor-pointer relative"
          >
            <div className="h-[280px] w-[280px] mx-auto relative">
              <Image
                src={team.image}
                alt={team.name}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
                className="rounded-lg"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-base font-semibold text-foreground uppercase">
                {team.name}
              </h2>
              <p className="text-sm text-foreground">{team.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
