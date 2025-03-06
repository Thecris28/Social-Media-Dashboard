import { User } from "../types";
import Card from "./Card";

type UserProps = {
    Users: User[]
}

export default function OverviewContainer({ Users }: UserProps) {
  return (
    <section className="pb-5 relative top-[-80px] w-full md:grid grid-cols-2 lg:grid-cols-4 gap-4 lg:top-[-120px]">
    {
        Users.map((user, index) => (
          <Card key={index} User={user} />
        ))
      }
    </section>
  )
}
