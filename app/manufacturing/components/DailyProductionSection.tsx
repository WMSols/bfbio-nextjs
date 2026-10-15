import { manufacturingDailyProduction } from "@/data/manufacturing";
import { cn } from "@/lib/utils";
import AnimateIn from "@/components/shared/AnimateIn";

export default function DailyProductionSection() {
  const { title, columns, rows } = manufacturingDailyProduction;

  return (
    <AnimateIn as="section" className="bg-white py-16 md:py-24">
      <div className="container max-w-5xl">
        <h2 className=" mb-10 w-fit bg-brand-gradient bg-clip-text  text-3xl font-medium text-transparent md:mb-14 md:text-[40px] ml-2 ">
          {title}
        </h2>

        <div className="mx-auto max-w-5xl overflow-x-auto rounded-[28px] border border-[#E8D4F0] md:rounded-[36px]">
          <table className="min-w-[40rem] w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#F8E8F5]">
                {columns.map((column) => (
                  <th
                    key={column}
                    className="px-5 py-4 text-sm font-semibold text-brand whitespace-nowrap md:px-8 md:py-5 md:text-base"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={`${row.form}-${row.packingType}-${row.filling}`}
                  className="border-t border-[#F0E4F5]"
                >
                  <td className="px-5 py-4 md:px-8 md:py-5">
                    <span
                      className={cn(
                        "inline-flex rounded-md px-3.5 py-1 text-sm font-medium",
                        row.form === "Liquid"
                          ? "bg-brand-blue text-white"
                          : "bg-[#E8F0FA] text-brand-blue",
                      )}
                    >
                      {row.form}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-sm text-black md:px-8 md:py-5 md:text-base">
                    {row.packingType}
                  </td>
                  <td className="px-5 py-4 text-sm text-black md:px-8 md:py-5 md:text-base">
                    {row.filling}
                  </td>
                  <td className="px-5 py-4 text-sm font-medium text-brand md:px-8 md:py-5 md:text-base">
                    {row.dailyCapacity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AnimateIn>
  );
}
