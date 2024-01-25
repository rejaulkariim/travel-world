"use client";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="mb-4 inline-block rounded-full bg-zumthor border px-4 py-2">
        <p>
          <span className="text-sm font-medium text-primary">{title}</span>
        </p>
      </div>
      <h2 className="text-xl md:text-4xl font-bold md:leading-10 max-w-2xl mx-auto">
        {subtitle}
      </h2>
      <p className="p-regular-14 max-w-prose mx-auto mt-2 md:mt-4">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
