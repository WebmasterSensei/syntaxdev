import ContactUs from "../components/contactus";
import Footer from "../components/footer";
import Nav from "../components/nav";

export default function PageContact(){
    return (
         <div className="min-h-screen bg-linear-to-br from-blue-950 via-slate-950 to-blue-950 dark:from-slate-900 dark:to-black">
      
              <Nav />
        
              <ContactUs />
        
              <Footer />
        
            </div>
    )
}