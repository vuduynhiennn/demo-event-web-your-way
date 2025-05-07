import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">Excellence Academy</span>
          </div>
          <p className="text-muted-foreground">
            Transforming lives through world-class education and personalized learning experiences.
          </p>
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Programs</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/programs/undergraduate" className="text-muted-foreground hover:text-foreground transition-colors">
                Undergraduate Programs
              </Link>
            </li>
            <li>
              <Link href="/programs/graduate" className="text-muted-foreground hover:text-foreground transition-colors">
                Graduate Programs
              </Link>
            </li>
            <li>
              <Link href="/programs/professional" className="text-muted-foreground hover:text-foreground transition-colors">
                Professional Certifications
              </Link>
            </li>
            <li>
              <Link href="/programs/online" className="text-muted-foreground hover:text-foreground transition-colors">
                Online Learning
              </Link>
            </li>
            <li>
              <Link href="/programs/international" className="text-muted-foreground hover:text-foreground transition-colors">
                International Programs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                Campus Gallery
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                Student Stories
              </Link>
            </li>
            <li>
              <Link href="/news" className="text-muted-foreground hover:text-foreground transition-colors">
                News & Events
              </Link>
            </li>
            <li>
              <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                Careers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <address className="not-italic space-y-2">
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
              <span className="text-muted-foreground">
                123 Education Blvd.<br />
                Learning City, LC 12345
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">admissions@excellence.edu</span>
            </div>
          </address>
        </div>
      </div>

      <div className="container mt-8">
        <Separator className="mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Excellence Academy. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;