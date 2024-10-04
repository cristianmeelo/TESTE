import { HeaderTitle } from "../../components/HeaderTitle"
import { Description } from "./Description"

export const About = () => {
  return (
    <section className="flex flex-col min-h-screen ">
      <div className="flex-grow flex flex-col items-start justify-start pt-12">
        <HeaderTitle level="h2" children='about me' />
        <Description />
      </div>
      <div className="h-px bg-custom-gray w-full" />
    </section>
  )
}
