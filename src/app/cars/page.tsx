import { CarCard } from "./CarCard";
import { PageHeader } from "@/components/PageHeader";
import { cars, formatDate, sortByDateDesc, sortStarFirst } from "./cars";
import { pageMetadata, siteDescription } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Cars",
  path: "/cars",
  description: siteDescription(
    "This page shows the cars that I've driven throughout the years.",
  ),
});

const lastUpdate = formatDate(sortByDateDesc(cars)[0].date, {
  month: "long",
  year: "numeric",
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
        <p>(last update: {lastUpdate.toLowerCase()})</p>
      </div>
      <div className="mt-triple">
        {sortStarFirst(cars).map((car) => (
          <CarCard key={car.img} car={car} />
        ))}
      </div>
    </div>
  );
}
