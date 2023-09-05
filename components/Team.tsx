import { teams } from "@/constants";
import Image from "next/image";

const Team = () => {
  return (
    <section className="section-padding">
      <div className="max-w-xl mx-auto text-center space-y-2 pb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-muted-foreground">
          Our Exceptional Team
        </h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Meet the Professionals Behind Our Success
        </p>
      </div>
      <div className="flex justify-center gap-4">
        {teams.map((team, index) => (
          <div
            key={index}
            className="bg-card shadow-lg rounded-lg overflow-hidden h-72 w-60 p-2"
          >
            <div className="p-4 h-44 w-44 mx-auto">
              <Image
                src={team.image}
                alt={team.name}
                height={360}
                width={360}
                priority
                className="object-cover h-full w-full rounded-lg"
              />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-semibold text-muted-foreground">
                {team.name}
              </h1>
              <p className="text-muted-foreground">{team.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
