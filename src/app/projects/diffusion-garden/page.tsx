import { BulletList } from "@/components/BulletList";
import { Img } from "@/components/Img";
import { ProjectLayout } from "@/components/ProjectLayout";
import { TextLink } from "@/components/TextLink";
import { getProject, projectMetadata } from "../projects";

const project = getProject("/projects/diffusion-garden");
export const metadata = projectMetadata(project);

const APP_URL = "https://diffusion.sandr.in";

export default function Page() {
  return (
    <ProjectLayout
      title={project.title}
      subtitle={project.subtitle}
      intro={
        <div>
          Try it out now at{" "}
          <TextLink href={APP_URL} newTab>
            {APP_URL}
          </TextLink>
        </div>
      }>
      <div className="max-w-2xl">
        <a href={APP_URL} target="_blank" className="my-double block">
          <Img src={project.images![0]} className="w-full shadow-xl" />
        </a>
        <h2>What is this?</h2>
        <p>
          <TextLink href={APP_URL} newTab>
            diffusion.sandr.in
          </TextLink>{" "}
          is an AI canvas for image generation that I built during my residency
          at the{" "}
          <TextLink href="https://www.recurse.com/" newTab>
            Recurse Center
          </TextLink>
          . You start with a prompt, then branch it into connected text or image
          blocks that can each run tools like expand, twist, image variations,
          etc. Each block can take in input from multiple blocks, and direct
          output to many other blocks. The edges between blocks preserve the
          history of an idea, making it easy to branch and explore in multiple
          directions.
        </p>
        <h2>Why did I build it?</h2>
        <p>
          I decided to build this as an exercise to get myself comfortable
          integrating text and image generation into a real product. I also
          wanted to run an experiment in building software that is tightly
          tailored to my own needs. All the tools I’ve built into this product
          are the result of trying to sand down the rough edges of my workflow
          in generating images.
        </p>
        <h2>Is there a demo?</h2>
        <p>
          You bet!{" "}
          <TextLink href="https://www.youtube.com/watch?v=ruvm8wIi_I0" newTab>
            Check out the demo below:
          </TextLink>
        </p>
        <div className="w-full">
          <iframe
            className="mt-double aspect-[3720/2160] w-full"
            src="https://www.youtube.com/embed/ruvm8wIi_I0?si=AIdMNkDg9ROifNCh&rel=0"
            title="diffusion.sandr.in demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <h2>How does it work?</h2>
        <p>
          The main canvas is built on{" "}
          <TextLink href="https://reactflow.dev/" newTab>
            ReactFlow
          </TextLink>
          , an excellent library that provides scaffolding to build node-based
          UIs, which runs inside a React+Typescript frontend. I decided to try
          out{" "}
          <TextLink href="https://github.com/pmndrs/zustand" newTab>
            Zustand
          </TextLink>{" "}
          for state management, because it seemed like a lighter and simpler
          alternative to Redux, and it has delivered on that expectation.
        </p>
        <p>
          It would have been feasible to run this entire application in the
          frontend, since I planned to run inference through the OpenAI and
          Gemini APIs. However, I had two key requirements for this project that
          steered me towards implementing a backend:
        </p>
        <BulletList>
          <li>
            I wanted users to navigate to the website and start creating right
            away. In a frontend-only application, this would have required
            shipping my OpenAI and Gemini API keys with the frontend, which
            would expose them to abuse. By performing inference requests from
            the backend, I have full control over their throughput and
            lifecycle.
          </li>
          <li>
            I wanted users to be able to start an image or text generation task,
            leave the canvas, and have that task complete in the background.
            This required some mechanism for performing background jobs, which
            is much easier to implement with a backend.
          </li>
        </BulletList>
        <p>
          To meet these requirements, I decided to implement a backend in
          Python, running a{" "}
          <TextLink href="https://fastapi.tiangolo.com/" newTab>
            FastAPI
          </TextLink>{" "}
          web server with a Postgres database. The backend has several
          responsibilities:
        </p>
        <BulletList>
          <li>
            It maintains a queue of image and text generation jobs, and kicks
            them off asynchronously with retry logic and graceful failure. The
            frontend is able to subscribe to the status of these jobs through
            Server Side Events, and request both in-progress updates and final
            results. SSE is also how I'm able to stream chunks of text as they
            come in from the API, creating the waterfall effect during text
            generation.
          </li>
          <li>
            The backend receives frequent updates on the state of the canvas
            itself, and saves that state to the database. This allows the canvas
            to be restored after a page refresh.
          </li>
          <li>
            The backend manages the creation of pre-signed links for{" "}
            <TextLink
              href="https://www.cloudflare.com/developer-platform/products/r2/"
              newTab>
              Cloudflare R2
            </TextLink>{" "}
            object storage (similar to AWS S3, but with a more generous free
            tier!), which can then be used by both frontend and backend to
            upload images. This frees up bandwidth in the backend server, and
            makes the images load much faster since they are behind Cloudflare's
            CDN.
          </li>
          <li>
            The backend implements aggressive rate-limiting to the API endpoints
            for text and image generation (30 req/min per IP address). This
            protects the endpoints from abuse, and prevents my Google Cloud bill
            from ballooning.
          </li>
        </BulletList>
        <p>
          Both frontend and backend are hosted on{" "}
          <TextLink href="https://railway.app/" newTab>
            Railway
          </TextLink>
          , as separate projects. Railway takes care of auto-scaling resources
          vertically to my web server and database.
        </p>
        <h2>Where's the code?</h2>
        <p>
          The code for this project is open source and available on{" "}
          <TextLink
            href="https://github.com/matteosandrin/diffusion-garden"
            newTab>
            GitHub
          </TextLink>
          .
        </p>
      </div>
    </ProjectLayout>
  );
}
