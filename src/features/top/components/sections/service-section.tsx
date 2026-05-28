"use client"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel"
import { Button } from "@/shared/components/ui/button"

const services = [
  {
    id: 1,
    title: "Web System Development",
    description: `We develop web systems using Ruby, Python, PHP and more. From frontend to backend, we support a wide range of needs, including server setup and deployment.`,
    image: "/service1.jpg",
  },
  {
    id: 2,
    title: "Chatbot",
    description:
      "Based on ChatGPT technology, we integrate APIs such as LINE and Facebook Messenger to handle customer inquiries, questions, and bookings. We help you leverage chat for your business.",
    image: "/service2.jpg",
  },
  {
    id: 3,
    title: "App Development",
    description:
      "Our IoT projects span smart home device integration, photo management, shopping apps, and live streaming services across many domains.",
    image: "/service3.png",
  },
  {
    id: 4,
    title: "DX for Business Efficiency",
    description:
      "We provide full-cycle services covering every aspect of system development to support your DX initiatives, helping to improve operational efficiency.",
    image: "/service4.jpg",
  },
  {
    id: 5,
    title: "AI Development",
    description: `We offer specialized AI, data analysis, and machine learning services. By integrating cutting-edge technology, we create optimized solutions to solve business challenges.`,
    image: "/service5.png",
  },
  {
    id: 6,
    title: "Big Data",
    description: `From web data collection and database creation to manual data labeling and categorization, we execute data creation processes efficiently to save time and cost.`,
    image: "/service6.jpg",
  },
  {
    id: 7,
    title: "MGPT - Chatbot 5.0",
    description: `Powered by ChatGPT technology and integrated with LINE and Facebook Messenger APIs, MGPT seamlessly handles customer inquiries, FAQs, and bookings. Let us help you elevate your business with advanced chat capabilities.`,
    image: "/service7.jpeg",
  },
]

export default function ServiceSection() {
  return (
    <section className="bg-border/50 flex min-h-screen w-full items-center justify-center px-6 pt-8 sm:px-20 xl:px-64">
      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <div className="mb-1.5 flex flex-col items-center justify-center gap-1 sm:mb-4 sm:gap-3">
          <h2 className="text-xl font-medium lg:text-3xl">Service</h2>
          <div className="lg:text-md max-w-3xl text-center text-xs">
            At TOMOSIA, we can meet user needs with our extensive experience and track record in app
            and web system development, from development to system operation of recommendation
            systems, prediction systems, and customer-specific chatbots. In addition to development
            and operation, you can also rely on us for IT consulting services.
          </div>
          <Button variant={"outline"} className="sm:text-md text-xs sm:px-4 sm:py-5">
            Business Details
          </Button>
        </div>

        <CarouselContent className="-ml-4">
          {/* Service Cards */}
          {services.map((service) => (
            <CarouselItem
              key={service.id}
              className="pl-4 sm:basis-1/2 lg:basis-[34%] xl:basis-[23%]"
            >
              <div
                className="group relative isolate h-[50vh] transform-gpu cursor-pointer overflow-hidden rounded-[24px] will-change-transform"
                tabIndex={0}
                onMouseEnter={(e) => {
                  const focused = document.activeElement
                  if (focused && focused !== e.currentTarget) {
                    ;(focused as HTMLElement).blur()
                  }
                }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 scale-110 bg-linear-to-b from-black/80 via-black/30 to-transparent transition-all duration-500 group-hover:from-black/70 group-hover:via-black/80 group-hover:to-black/90 group-focus:from-black/70 group-focus:via-black/80 group-focus:to-black/90" />

                {/* Content */}
                <div className="absolute top-0 right-0 left-0 p-7">
                  <span className="block text-lg font-medium text-white transition-opacity duration-300">
                    {service.title}
                  </span>
                  <p className="mt-2 translate-y-2 text-sm leading-relaxed text-white/85 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                    {service.description}
                  </p>
                </div>

                {/* Read more */}
                <div className="absolute right-0 bottom-0 left-0 translate-y-2 p-7 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                  <div className="text-primary flex items-center gap-2 text-sm font-medium">
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4 flex items-center justify-end">
          <div className="mr-2 flex gap-2">
            <CarouselPrevious className="static size-12 translate-y-0 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 lg:size-16" />
            <CarouselNext className="static size-12 translate-y-0 rounded-full border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 lg:size-16" />
          </div>
        </div>
      </Carousel>
    </section>
  )
}
