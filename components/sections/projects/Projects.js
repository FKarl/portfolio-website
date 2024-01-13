/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tuqHzXC7EEb
 */
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"

export default function Projects() {
  return (
    <div className="flex flex-col items-center w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              My Publications & Projects
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              A collection of my recent works and contributions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <Button variant="ghost">All</Button>
            <Button variant="ghost">Papers</Button>
            <Button variant="ghost">Publications</Button>
            <Button variant="ghost">Projects</Button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto mt-8">
          <Card>
            <img
              alt="Project Image"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height={300}
              src="/placeholder.svg"
              width={400}
            />
            <CardHeader>
              <CardTitle>Project Title</CardTitle>
              <CardDescription>Brief description of the project or publication.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <img
              alt="Project Image"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height={300}
              src="/placeholder.svg"
              width={400}
            />
            <CardHeader>
              <CardTitle>Project Title</CardTitle>
              <CardDescription>Brief description of the project or publication.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <img
              alt="Project Image"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height={300}
              src="/placeholder.svg"
              width={400}
            />
            <CardHeader>
              <CardTitle>Project Title</CardTitle>
              <CardDescription>Brief description of the project or publication.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <img
              alt="Project Image"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height={300}
              src="/placeholder.svg"
              width={400}
            />
            <CardHeader>
              <CardTitle>Project Title</CardTitle>
              <CardDescription>Brief description of the project or publication.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <img
              alt="Project Image"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height={300}
              src="/placeholder.svg"
              width={400}
            />
            <CardHeader>
              <CardTitle>Project Title</CardTitle>
              <CardDescription>Brief description of the project or publication.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <img
              alt="Project Image"
              className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
              height={300}
              src="/placeholder.svg"
              width={400}
            />
            <CardHeader>
              <CardTitle>Project Title</CardTitle>
              <CardDescription>Brief description of the project or publication.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}

