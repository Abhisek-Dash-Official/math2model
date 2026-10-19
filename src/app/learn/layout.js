import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function LearnLayout({ children }) {
    return (
        <>
            <Header />
            <Breadcrumbs />
            <main className="flex-1">{children}</main>
            <Footer />
        </>
    );
}