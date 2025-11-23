import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Slack, ArrowRight, Users } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "VIMI Support - Get Help",
  description: "Contact VIMI Support - Reach out via Slack, Email, or your dedicated contact",
}

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/images/vimi-logo.png"
              alt="VIMI Technology Logo"
              width={236}
              height={114}

            />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-3">Support Center</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We're here to help. Choose the support channel that works best for you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Support Channels Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Slack Support */}
          <Card className="border-2 border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Slack className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardTitle className="text-foreground">Connect on Slack</CardTitle>
              <CardDescription>Real-time support and quick responses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Contact us through your Slack workspace to connect with our support team for immediate assistance and direct
                communication.
              </p>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Instant messaging
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Quick response times
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Email Support */}
          <Card className="border-2 border-border hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
              </div>
              <CardTitle className="text-foreground">Email Support</CardTitle>
              <CardDescription>Submit support requests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Send us an email to open a support case. This is great for detailed requests.
              </p>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Detailed support requests
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Ticket tracking
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Dedicated Contact Section */}
        <Card className="border-2 border-primary/30 bg-primary/5">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-foreground flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  Need Additional Help?
                </CardTitle>
                <CardDescription>For complex issues or specific needs</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              If you require specialized assistance or have unique requirements, please reach out to your dedicated VIMI
              contact. They will provide personalized support tailored to your specific needs and ensure you get the
              expert guidance you need.
            </p>
            <div className="bg-background border border-border rounded-lg p-4 mt-4">
              <p className="text-sm font-semibold text-foreground mb-2">Your dedicated contact will help with:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Custom solutions and integrations
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Account management and strategic guidance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Support and Service Level Agreements (SLAs)
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Footer */}
      <footer className="border-t border-border mt-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 VIMI Consulting
          </p>
        </div>
      </footer>
    </main>
  )
}
