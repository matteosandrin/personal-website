import { CarCard } from "./CarCard";
import { PageHeader } from "@/components/PageHeader";
import { LastUpdate } from "@/components/LastUpdate";
import { cars, sortByDateDesc } from "./cars";
import { pageMetadata, siteDescription } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Cars",
  path: "/cars",
  description: siteDescription(
    "This page shows the cars that I've driven throughout the years.",
  ),
});

export default function Cars() {
  return (
    <div className="max-w-2xl">
      <div className="mx-auto max-w-2xl">
        <PageHeader
          title="Cars"
          subtitle="A list of all the cars I've ever driven"
        />
        <p>
          I created this page as a place to collect every car I've ever driven,
          along with the stories, trips, and little quirks that made each one
          memorable. Every entry pins a moment in time (where I went, who I was
          with, what broke, what surprised me) while also documenting how
          different kinds of cars feel to drive. Over time, it becomes a way to
          trace my travels, my tastes, and the evolution of automobiles.
        </p>
        <LastUpdate path="src/app/(collections)/cars/page.tsx" />
      </div>
      <div className="mt-triple">
        {sortByDateDesc(cars).map((car) => (
          <CarCard key={car.img} car={car} />
        ))}
      </div>
    </div>
  );
}
