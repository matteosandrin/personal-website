export type Car = {
  year: string;
  make: string;
  model: string;
  img: string;
  // ISO date (YYYY-MM-DD) of when I drove the car.
  date: string;
  description: string[];
  tags: string[];
};

export const cars: Car[] = [
  {
    year: "2026",
    make: "Lincoln",
    model: "Navigator",
    img: "/assets/img/cars/2026_lincoln_navigator.png",
    date: "2026-10-12",
    description: ["I rented this car on a company offsite to Portland. It's plenty spacious and luxuruious inside. However, it does consume gas extremely quickly."],
    tags: ["rental", "SUV"],
  },
  {
    year: "2026",
    make: "Mazda",
    model: "CX-5",
    img: "/assets/img/cars/2026_mazda_cx5.png",
    date: "2026-04-26",
    description: ["I went to pick up a shelving unit in New Jersey with this car. I felt ill that morning so my girlfriend had to drive."],
    tags: ["rental", "SUV"],
  },
  {
    year: "2025",
    make: "Kia",
    model: "K4 Hatchback",
    img: "/assets/img/cars/2025_kia_k4_hatchback.png",
    date: "2026-04-13",
    description: ["I rented this car to drive around town in Inverness, Scotland, while we were waiting for our flight home. It was a great time, except I got a parking ticket because I could not sign up for the parking app without a UK phone number. Thankfully I was able to dispute that."],
    tags: ["rental", "hatchback"],
  },
  {
    year: "2025",
    make: "Mercedes-Benz",
    model: "GLB",
    img: "/assets/img/cars/2025_mercedes_glb.png",
    date: "2026-04-06",
    description: [
      "I was given this car after having the accident with the Peugeot. They gave me a much nicer car because it was the only one left that could seat six people. I was so scared of damaging this one too, since our destination was the Isle of Skye, which is famous for narrow and poorly maintained roads.",
      "I have to say, this car made me realize why people buy luxury cars. This vacation required a lot of driving, and it is remarkably more comfortable to do that driving in a luxurious car."
    ],
    tags: ["rental", "SUV"],
  },
  {
    year: "2025",
    make: "Peugeot",
    model: "5008",
    img: "/assets/img/cars/2025_peugeot_5008.png",
    date: "2026-04-06",
    description: ["I rented this car in Scoltand, at the Edinburgh airport. It was my frist time driving on the left side of the road. I stopped in Stirling to pick up some friends, and when I pulled into a parking lot I failed to see a bollard on the left side of the car. There was a fair amount of damage to the bumper, which made the car undriveable. A nice Scottish man from road assistance towed us an the car back to Edinburgh. Luckily insurance paid out in full."],
    tags: ["rental", "SUV"],
  },
  {
    year: "2025",
    make: "Chevrolet",
    model: "Trax",
    img: "/assets/img/cars/2025_chevrolet_trax.png",
    date: "2025-11-25",
    description: [],
    tags: ["rental", "SUV"],
  },
  {
    year: "2025",
    make: "Kia",
    model: "Sportage",
    img: "/assets/img/cars/2025_kia_sportage.png",
    date: "2025-08-15",
    description: [],
    tags: ["rental", "SUV"],
  },
  {
    year: "2025",
    make: "Polestar",
    model: "2",
    img: "/assets/img/cars/2025_polestar_2.png",
    date: "2025-06-18",
    description: ["I drove this car on a day trip from Milan to lake Como. The road to Bellagio is so narrow and windy that I could not test its full speed."],
    tags: ["rental", "sedan", "electric"],
  },
  {
    year: "1969",
    make: "Citroën",
    model: "Mehari",
    img: "/assets/img/cars/1969_citroen_mehari.jpg",
    date: "2025-06-20",
    description: [
      "This car is an orange bathtub on wheels. No doors, no windows, no seat belts. Perfect for an italian summer, because there's always a breeze! The transmission is manual and temperamental, the steering wheel as large as a truck's. It's a surprisingly fun car to drive, and scary one to be a passenger in.",
    ],
    tags: ["vintage", "manual"],
  },
  {
    year: "2024",
    make: "Peugeot",
    model: "2008",
    img: "/assets/img/cars/2024_peugeot_2008.png",
    date: "2025-06-06",
    description: [
      "I rented this car at Bilbao airport in Spain, and drove it for five days along the coast of the Basque country. The manual transmission was smooth, even when contending with cramped parking structures.",
      "When I returned this vehicle, I foolishly forgot to take any pictures. A few days later, I got a letter from the rental agency alleging I had caused damage to the car, and asking me to pay €1000+ in damages. Fortunately Google Maps reviews showed this was a common scam for this location. I contacted my credit card issuer, which resolved the issue in my favor three weeks later.",
    ],
    tags: ["rental", "suv", "manual"],
  },
  {
    year: "2024",
    make: "Toyota",
    model: "Prius",
    img: "/assets/img/cars/2024_toyota_prius.png",
    date: "2025-03-20",
    description: [
      "I am positively surprised by the glow up that the Prius has received with the the latest generation. It looks sleek as hell, which I never thought I would say about a Prius.",
    ],
    tags: ["rental", "hatchback", "hybrid"],
  },
  {
    year: "2023",
    make: "DR",
    model: "4.0",
    img: "/assets/img/cars/2023_dr_4_0.jpg",
    date: "2024-12-30",
    description: [
      "This is a peculiar car. The DR brand is Italian, but the car itself is a rebadged version of a chinese car. It looks like a normal SUV, but shrunken down by 20%. It can run on either gasoline or GPL, and will get incredibly high mileage on GPL. The GPL system seems like an aftermarket modification, since it's not integrated with the car's dashboard.",
    ],
    tags: ["rental", "suv", "GPL", "manual"],
  },
  {
    year: "2000",
    make: "Ford",
    model: "Ka",
    img: "/assets/img/cars/2000_ford_ka.jpg",
    date: "2024-12-17",
    description: [
      "I learned how to drive on this six-speed manual transmission car. It's my mom's old car. The acceleration is surprisingly good, considering it's a quarter decade old.",
      "However the passenger window doesn't work, the central locking system doesn't work, the power steering is long gone, it overheats going over 80km/h, and the rearview mirror is missing. Despite its inherent danger (or because of it), I love this vehicle.",
    ],
    tags: ["hatchback", "manual"],
  },
  {
    year: "2025",
    make: "Toyota",
    model: "Camry",
    img: "/assets/img/cars/2025_toyota_camry.png",
    date: "2024-12-13",
    description: [
      "I'm amazed at the level of efficiency hybrid cars can achieve. They also provide a more fun driving experience at low speed, thanks to the  electric motor.",
    ],
    tags: ["rental", "hybrid", "sedan"],
  },
  {
    year: "2024",
    make: "Mini",
    model: "Countryman",
    img: "/assets/img/cars/2024_mini_countryman.jpg",
    date: "2024-12-06",
    description: [
      "This is my cousin's car, which she drives in Miami. She let me drive it for the weekend.",
      "I was surprised by the responsiveness of the accelerator on this car. I was delighted by the aircraft style switches on the console of this car. They are fun to use!",
    ],
    tags: ["hatchback"],
  },
  {
    year: "2023",
    make: "Mitsubishi",
    model: "Outlander",
    img: "/assets/img/cars/2023_mitsubishi_outlander_white.png",
    date: "2024-11-25",
    description: [
      "I drove this car to thanksgiving in Westchester, New York. I was impressed by the quality of the interiors, for a non-luxury car.",
    ],
    tags: ["rental", "SUV"],
  },
  {
    year: "2024",
    make: "Chevrolet",
    model: "Equinox",
    img: "/assets/img/cars/2024_chevrolet_equinox.png",
    date: "2024-11-10",
    description: [],
    tags: ["rental", "SUV"],
  },
  {
    year: "2023",
    make: "Jeep",
    model: "Grand Cherokee",
    img: "/assets/img/cars/2023_jeep_grandcherokee_white.jpg",
    date: "2024-10-26",
    description: [],
    tags: ["rental", "SUV"],
  },
  {
    year: "2023",
    make: "Chevrolet",
    model: "Malibu",
    img: "/assets/img/cars/2023_chevrolet_malibu.png",
    date: "2024-10-17",
    description: [
      "I drove this car two hours west of Boston to go see the Tsuchinshan-ATLAS comet, which was visible in areas with low light pollution.",
    ],
    tags: ["rental", "sedan"],
  },
  {
    year: "2022",
    make: "Chevrolet",
    model: "Malibu",
    img: "/assets/img/cars/2022_chevrolet_malibu.jpg",
    date: "2024-09-23",
    description: [
      "I drove this car to Hawley, PA to join some friends for a week in a cabin in nature. This was a thoroughly unimpressive vehicle.",
    ],
    tags: ["rental", "sedan"],
  },
  {
    year: "2024",
    make: "Kia",
    model: "Carnival",
    img: "/assets/img/cars/2024_kia_carnival.png",
    date: "2024-09-14",
    description: [],
    tags: ["rental", "minivan"],
  },
  {
    year: "2023",
    make: "Cadillac",
    model: "XT4",
    img: "/assets/img/cars/2023_cadillac_xt4.png",
    date: "2024-08-31",
    description: [
      "I drove this car to go hike Mt. Monadnock in New Hampshire (again!).",
    ],
    tags: ["rental", "SUV"],
  },
  {
    year: "2023",
    make: "Citroën",
    model: "C3",
    img: "/assets/img/cars/2023_citroen_c3.png",
    date: "2024-08-13",
    description: [
      "I drove this car around Provence in France. It is a fun yet spartan vehicle. It feels much smaller than American SUVs. I even drove someone to the hospital in this car.",
    ],
    tags: ["rental", "SUV"],
  },
  {
    year: "2023",
    make: "Genesis",
    model: "G80",
    img: "/assets/img/cars/2023_genesis_g80.jpg",
    date: "2024-07-13",
    description: [
      "I drove this car to the beach, which is not its natural habitat.",
      "I suspect that I was upgraded to a luxury car because it was my birthday.",
    ],
    tags: ["rental", "sedan"],
  },
  {
    year: "1999",
    make: "Toyota",
    model: "Landcruiser",
    img: "/assets/img/cars/1999_toyota_landcruiser.jpg",
    date: "2024-07-04",
    description: [
      "This car is a beauty to drive. The V8 engine sounds incredible and it's surprisingly comfortable for a vintage car.",
      "Shortly after I drove this car, the brakes completely failed, fortunately while driving at low speed.",
    ],
    tags: ["vintage", "SUV"],
  },
  {
    year: "2023",
    make: "Kia",
    model: "Sportage",
    img: "/assets/img/cars/2023_kia_sportage.png",
    date: "2024-07-01",
    description: ["I drove this car to Connecticut to celebrate July 4th"],
    tags: ["rental", "SUV"],
  },
  {
    year: "2023",
    make: "Ford",
    model: "Explorer",
    img: "/assets/img/cars/2023_ford_explorer.png",
    date: "2024-06-22",
    description: [
      "I drove this car to pick up and drop off my cousins who were visiting. I was stopped by state troopers at the airport, because I accidentally drove the wrong way (there was construction and the signage was unclear). Fortunately the officer was understanding of my mistake.",
    ],
    tags: ["rental", "SUV"],
  },
  {
    year: "2024",
    make: "Jeep",
    model: "Grand Cherokee",
    img: "/assets/img/cars/2024_jeep_grandcherokee.png",
    date: "2024-06-15",
    description: [
      "I drove this car to Crane Beach, just an hour north of Boston.",
    ],
    tags: ["rental", "SUV", "hybrid"],
  },
  {
    year: "2024",
    make: "Chrysler",
    model: "Pacifica",
    img: "/assets/img/cars/2024_chrysler_pacifica.png",
    date: "2024-04-08",
    description: [
      "I drove five hours up to Vermont to see the total Eclipse. This minivan was comfortable and spacious even with seven passengers. It makes you feel like the king of the road.",
    ],
    tags: ["rental", "minivan", "hybrid"],
  },
  {
    year: "2023",
    make: "Hyundai",
    model: "Santa Fe",
    img: "/assets/img/cars/2023_hyundai_santafe_white.png",
    date: "2024-02-24",
    description: [],
    tags: ["rental", "SUV"],
  },
  {
    year: "2023",
    make: "Mitsubishi",
    model: "Outlander",
    img: "/assets/img/cars/2023_mistubishi_outlander_blue.png",
    date: "2024-01-29",
    description: ["This is the first plug-in hybrid I've driven."],
    tags: ["rental", "SUV", "hybrid"],
  },
  {
    year: "2023",
    make: "Jeep",
    model: "Grand Cherokee",
    img: "/assets/img/cars/2023_jeep_grandcherokee_silver.jpg",
    date: "2024-01-13",
    description: [
      "I drove this car to go skiing at Attitash mountain in New Hampshire.",
    ],
    tags: ["rental", "SUV"],
  },
  {
    year: "2023",
    make: "Genesis",
    model: "G80E",
    img: "/assets/img/cars/2023_genesis_g80e.jpg",
    date: "2023-12-17",
    description: [
      "This is the first electric car I've driven.",
      "I had never heard of Genesis before, it is a sub-brand of Hyundai that makes their line of luxury cars. I was impressed with its acceleration and responsiveness. The interior felt luxurious and well made.",
      "The car was only partly charged when I picked it up, but showed more than enough range for my trip. As I was driving back however, the range estimate dropped significantly. I almost didn't make it back to the rental counter.",
    ],
    tags: ["rental", "sedan", "electric"],
  },
  {
    year: "2023",
    make: "Chevrolet",
    model: "Equinox",
    img: "/assets/img/cars/2023_chevrolet_equinox.png",
    date: "2023-11-20",
    description: ["I drove this car to thanksgiving in Westchester, New York."],
    tags: ["rental", "SUV"],
  },
  {
    year: "2023",
    make: "Hyundai",
    model: "Santa Fe",
    img: "/assets/img/cars/2023_hyundai_santafe_grey.png",
    date: "2023-10-13",
    description: [
      "I drove this car to go hike Mt. Lafyette in New Hampshire. It was a 2-day hike with an overnight stop at Greenleaf hut on the mountain top.",
      "When I arrived back at the car, the keyfob had stopped working because of the cold. I had to open the car manually with the emergency key, and the alarm went off. The alarm would not stop until the keyfob got warm enough to work again.",
    ],
    tags: ["rental", "SUV"],
  },
  {
    year: "2023",
    make: "Ford",
    model: "Escape",
    img: "/assets/img/cars/2023_ford_escape.png",
    date: "2023-09-08",
    description: [],
    tags: ["rental", "SUV"],
  },
  {
    year: "2023",
    make: "Toyota",
    model: "Highlander",
    img: "/assets/img/cars/2023_toyota_highlander.png",
    date: "2023-09-06",
    description: [],
    tags: ["rental", "SUV"],
  },
  {
    year: "2023",
    make: "Kia",
    model: "K5",
    img: "/assets/img/cars/2023_kia_k5.png",
    date: "2023-08-20",
    description: [
      "I drove this car to go hike Mt. Monadnock in New Hampshire.",
    ],
    tags: ["rental", "sedan"],
  },
  {
    year: "2023",
    make: "Nissan",
    model: "Rogue",
    img: "/assets/img/cars/2023_nissan_rogue.png",
    date: "2023-08-11",
    description: [
      "I drove this car to drive up to Jeremy's cabin in Maine. The car was white, and it handled well the dirt road leading up to the cabin.",
    ],
    tags: ["rental", "SUV"],
  },
];

export function sortByDateDesc(cars: Car[]) {
  return [...cars].sort((a, b) => b.date.localeCompare(a.date));
}

// Use UTC, so that the ISO date does not move to the previous day.
export function formatDate(
  isoDate: string,
  options: Intl.DateTimeFormatOptions,
) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    ...options,
    timeZone: "UTC",
  });
}
