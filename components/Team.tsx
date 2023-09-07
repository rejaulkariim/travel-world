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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {teams.map((team, index) => (
          <div
            key={index}
            className="bg-card shadow-md rounded-lg overflow-hidden h-72 md:w-64 p-2 mt-2 md:mt-0"
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
              <h2 className="text-sm font-semibold uppercase text-muted-foreground">
                {team.name}
              </h2>
              <p className="text-sm md:text-sm text-muted-foreground">
                {team.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
