export default function Footer() {
  return (
    <footer className="border-t border-muted bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-serif text-lg font-medium text-ocean-blue">MASTERMIND2.0</h3>
            <p className="text-sm font-light text-muted-foreground">
              Luxury mental health and addiction retreats for discerning clients worldwide.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium text-ocean-blue">Programs</h4>
            <ul className="space-y-2 text-sm font-light text-muted-foreground">
              <li>Quantum Leap Program</li>
              <li>Standard Program</li>
              <li>Family Treatment</li>
              <li>Executive Burnout</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium text-ocean-blue">Locations</h4>
            <ul className="space-y-2 text-sm font-light text-muted-foreground">
              <li>Europe</li>
              <li>Caribbean</li>
              <li>North America</li>
              <li>Asia Pacific</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-medium text-ocean-blue">Contact</h4>
            <ul className="space-y-2 text-sm font-light text-muted-foreground">
              <li>info@mastermind2.com</li>
              <li>+1 (888) 555-0123</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-muted pt-6 text-center">
          <p className="text-xs font-light text-muted-foreground">
            &copy; {new Date().getFullYear()} MASTERMIND2.0. All rights reserved. Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}

