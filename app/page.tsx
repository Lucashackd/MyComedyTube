import Header from "./components/header";
import Thumbnail from "./components/thumbnail";

export default function Home() {
  return (
    <main className="px-4 py-8">
      <div className="grid grid-cols-1 justify-items-center gap-4">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    </main>
  )
}
