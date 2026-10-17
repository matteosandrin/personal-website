import type { ReactNode } from "react";
import { Img } from "@/components/Img";
import type { Car } from "./cars";
import { formatDate } from "./cars";
import { cx } from "@/lib/cx";

export function CarCard({ car }: { car: Car }) {
  return (
    <div>
      <h2>
        {car.make} {car.model}
      </h2>
      <Img
        className="my-double aspect-[2/1] w-full rounded-xl object-contain object-center"
        src={car.img}
      />
      <table>
        <tbody>
          <Row label="Date">
            {formatDate(car.date, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </Row>
          <Row label="Model">{car.year}</Row>
          <Row label="Tags" className="flex flex-row gap-2">
            {car.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-slate-300 px-2.5 text-center text-slate-600 shadow-sm">
                {tag}
              </span>
            ))}
          </Row>
        </tbody>
      </table>
      {car.description.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

type RowProps = { label: string; className?: string; children: ReactNode };

function Row({ label, className, children }: RowProps) {
  return (
    <tr>
      <td className="py-[0.25rem] font-medium">{label}</td>
      <td className={cx("py-[0.25rem] pl-4", className)}>{children}</td>
    </tr>
  );
}
