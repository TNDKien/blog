import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Hero Section */}
      <section className="space-y-8">
        <h1 className="text-4xl font-bold">
          Welcome to my blog{" "}
          <span className="inline-block w-4 h-4 bg-red-500 rounded-full" />{" "}
          I&apos;m a developer and here I document my latest explorations.
        </h1>

        <nav className="flex gap-6">
          <Link href="/gallery" className="text-blue-500 hover:text-blue-700">
            GALLERY ↗
          </Link>
          <Link href="/demos" className="text-blue-500 hover:text-blue-700">
            DEMOS ↗
          </Link>
          <Link
            href="https://kiendang.nl"
            className="text-blue-500 hover:text-blue-700"
          >
            ABOUT ME ↗
          </Link>
        </nav>
      </section>

      {/* Recent Tutorials */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Recent Tutorials</h2>
          <Link href="/tutorials" className="text-blue-500 hover:text-blue-700">
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} className="overflow-hidden">
              <Link href={tutorial.href}>
                <div className="relative h-48">
                  <Image
                    src={tutorial.image}
                    alt={tutorial.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent>
                  <h3 className="font-medium mb-2">{tutorial.title}</h3>
                  <p className="text-sm text-gray-600">{tutorial.date}</p>
                  <span className="inline-block mt-2 text-xs uppercase tracking-wider bg-gray-100 px-2 py-1 rounded">
                    {tutorial.category}
                  </span>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Courses */}
      <section>
        <h2 className="text-2xl font-bold mb-8">Featured Courses</h2>
        <Card>
          <CardHeader>
            <CardTitle>Web Animation Course</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Learn how to create stunning web animations using Next.js, Framer
              Motion, GSAP and more
            </p>
            <Link
              href="/courses/web-animation"
              className="inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              Learn More
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

const tutorials = [
  {
    id: 1,
    title: "Mask Section Transition",
    date: "June 2, 2024",
    category: "SCROLL",
    image: "/placeholder.svg?height=400&width=600",
    href: "/tutorials/mask-section-transition",
  },
  {
    id: 2,
    title: "Mouse Image Distortion",
    date: "June 2, 2024",
    category: "MOUSE",
    image: "/placeholder.svg?height=400&width=600",
    href: "/tutorials/mouse-image-distortion",
  },
  {
    id: 3,
    title: "Background Image Parallax",
    date: "May 25, 2024",
    category: "SCROLL",
    image: "/placeholder.svg?height=400&width=600",
    href: "/tutorials/background-image-parallax",
  },
];
