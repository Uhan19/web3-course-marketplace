import {
  Navbar,
  Footer,
  Breadcrumbs,
  Hero,
  Address,
  WalletBar,
  List,
  Card,
} from "@/components/index";

export default function Home() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="fit">
            <Navbar />
            <Hero />
            <Breadcrumbs />
            <Address />
            <WalletBar />
            <Card />
            <List />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
