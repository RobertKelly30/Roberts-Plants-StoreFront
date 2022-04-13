import { PageTitle } from "./../components/PageTitle"

export default function Home() {
  return (
    <>
      <PageTitle title="Robert's Plants Store Font" tagline="Let's grow together"/>
    </>
  )
}

function ListItem({number, props}){
  return <li>{number}</li>
}