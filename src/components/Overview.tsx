
import { Metric } from "../types";
import CardToday from "./CardToday";



export default function Overview({ metrics } : { metrics: Metric[] }) {
  return (
    <>
    <h2 className="px-5 font-bold text-WhiteText pb-3 relative top-[-70px] lg:px-0 lg:text-xl ">Overview - Today</h2>
    <section className="pb-5 relative top-[-60px] w-full md:grid grid-cols-2 lg:grid-cols-4 gap-4 lg:top-[-50px]">
    {
        metrics.map((metric, index) => (
          <CardToday key={index} metric={metric} />
        ))
      }
    </section>
    </>
    
  )
}
