import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import developer from './1.png'
import Image from "next/image"
import { StaticImageData } from "next/image"
export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">About Us</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-muted-foreground mb-4">
          Founded in 2023, our company has been at the forefront of innovation in the tech industry. 
          We started with a simple idea: to make technology accessible to everyone. Today, we're proud 
          to serve customers worldwide with our cutting-edge solutions.
        </p>
        <Button variant="outline">Learn More</Button>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <blockquote className="border-l-4 border-primary pl-4 italic">
          "To empower individuals and businesses through innovative technology solutions, 
          fostering growth and positive change in the world."
        </blockquote>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Jane Doe", role: "CEO", image: "/placeholder.svg?height=100&width=100" },
            { name: "John Smith", role: "CTO", image: "/placeholder.svg?height=100&width=100" },
            { name: "Muhammad Tayyab", role: "Developer", image: developer as StaticImageData },
          ].map((member) => (
            <Card key={member.name}>
              <CardContent className="flex flex-col items-center p-6">
              <Image src={developer} width={100} className="rounded-sm mb-3" height={100} alt={member.name} />
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Company Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Customers", value: "10,000+" },
            { label: "Countries", value: "50+" },
            { label: "Team Members", value: "100+" },
            { label: "Years in Business", value: "5+" },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}