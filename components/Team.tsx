import { teams } from "@/constants";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const Team = () => {
  return (
    <section className="section-padding">
      <div className="wrapper">
        <SectionHeader
          headerInfo={{
            title: "OUR TEAM",
            subtitle: "Meet the Professionals Team",
            description:
              "Our success is shaped by a passionate and dedicated team committed to excellence. Meet the faces behind the exceptional service that makes your travel experiences truly remarkable.",
          }}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-4">
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
      </div>
    </section>
  );
};

export default Team;
