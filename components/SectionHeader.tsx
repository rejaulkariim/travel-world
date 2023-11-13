"use client";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <div className="animate_top mx-auto text-center">
      <div className="mb-4 inline-block rounded-full bg-zumthor px-4 py-2 dark:border dark:border-strokedark dark:bg-blacksection">
        <span className="text-sectiontitle font-medium text-primary">
          {title}
        </span>
      </div>
      <h2 className="mx-auto mb-4 text-3xl font-bold md:w-4/5 xl:w-1/2 md:text-3xl">
        {subtitle}
      </h2>
      <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">{description}</p>
    </div>
  );
};

export default SectionHeader;
