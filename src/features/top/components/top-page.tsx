import SnapScroll from "@/features/top/components/snap-scroll"
import Footer from "@/shared/components/layout/footer"

export default function TopPage() {
  return (
    <SnapScroll
      duration={1}
      ease="power2.inOut"
      sectionLabels={["About", "Services", "Resources", "AI Drivent Development"]}
    >
      <section className="flex h-screen w-full items-center justify-center bg-blue-500">
        <h1 className="text-5xl font-bold text-white">About</h1>
      </section>

      <section className="flex h-screen w-full items-center justify-center bg-red-500">
        <h1 className="text-5xl font-bold text-white">Services</h1>
      </section>

      <section className="flex h-screen w-full items-center justify-center bg-green-500">
        <h1 className="text-5xl font-bold text-white">Resources</h1>
      </section>

      <section className="flex h-screen w-full items-center justify-center bg-orange-500">
        <h1 className="text-5xl font-bold text-white">AI Drivent Development</h1>
      </section>

      <Footer />
    </SnapScroll>
  )
}
