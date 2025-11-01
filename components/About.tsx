import BentoGrid from "./ui/bento-grid";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <h1 className="heading text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        À propos de <span className="text-purple-500">moi</span>
      </h1>
      <BentoGrid className="mt-12" />
    </section>
  );
}
