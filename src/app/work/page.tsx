import { Job } from "./Job";
import { TextLink } from "@/components/TextLink";
import { pageMetadata, siteDescription } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Work | Matteo Sandrin",
  description: siteDescription(
    "This page showcases Matteo's professional accomplishments in software engineering",
  ),
});

export default function Work() {
  return (
    <div className="max-w-2xl">
      <h1>Work</h1>
      <div>
        <Job company="Google" role="Software Engineer">
          <p>
            I'm a software engineer on the Google Travel team. I lead
            development of new formats &amp; improvements on the{" "}
            <TextLink href="http://google.com/hotels" newTab>
              Google Hotels
            </TextLink>{" "}
            ads booking module.
          </p>
          <p>
            I get to work on a product with hundreds of millions of daily users.
            I run experiments every day to improve ad performance by a couple
            percentage points, which translates into large revenue gains. I also
            get to learn from some of the most accomplished software engineers
            in the industry.
          </p>
          <p>
            Before that, I interned on the Google Flights team. Over the course
            of a summer, I and a scrappy band of interns redesigned and rewrote
            from scratch the frontend of the{" "}
            <TextLink href="https://matrix.itasoftware.com" newTab>
              Matrix
            </TextLink>{" "}
            flight search engine. This search engine has a loyal following of
            over 200,000 flight enthusiasts.
          </p>
          <p>
            Cambridge, MA
            <br />
            2021 – Now (full time)
            <br />
            Summer 2020 (intern)
          </p>
        </Job>
        <Job company="Smartcar" role="Software Engineering Intern">
          <p>
            Smartcar's core product is an API to remotely control any vehicle.
            Think lock, unlock, climate control, windows, etc. I
            reverse-engineered the Chrysler and Volkswagen Android apps, in
            order to figure out their APIs and integrate them into the core
            product. I spent many hours in the sunny office parking lot,
            remotely poking and prodding Smartcar's fleet of test cars.
          </p>
          <p>
            Smartcar was a small company at the time, no more than 15 employees.
            I enjoyed the challenge of working at an early-stage startup, doing
            everything from code to design to hosting a hackathon. I learned
            more in those three months about software engineering that I ever
            had before, and made some lifelong friends along the way.
          </p>
          <p>
            Mountain View, CA
            <br />
            Summer 2019
          </p>
        </Job>
      </div>
    </div>
  );
}
