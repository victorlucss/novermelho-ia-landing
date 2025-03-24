"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Clock, Flame, Utensils } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function TermsPage() {
  const { theme } = useTheme()

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-10">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: March 24, 2025</p>
        </div>

        <div className={`${theme === "dark" ? "prose-invert" : "prose"} max-w-none`}>
          <p className="text-lg text-foreground">
            Instead of boring legal terms, we present our Terms of Service as a delicious Cup Noodles recipe. This is
            not a real app, so enjoy this actual cup noodles recipe instead!
          </p>

          <Card className="my-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Classic Cup Noodles Recipe</CardTitle>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Prep time: 3 minutes</span>
                </div>
              </div>
              <CardDescription>The perfect quick meal for hungry developers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-foreground">
                  <Utensils className="h-5 w-5 text-primary" />
                  Ingredients
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-foreground">
                  <li>1 package of instant cup noodles (any flavor)</li>
                  <li>2 cups of water</li>
                  <li>1 egg (optional)</li>
                  <li>1 tablespoon of green onions, chopped (optional)</li>
                  <li>1 teaspoon of sesame oil (optional)</li>
                  <li>Sriracha or hot sauce to taste (optional)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-foreground">
                  <Flame className="h-5 w-5 text-primary" />
                  Basic Instructions
                </h3>
                <ol className="list-decimal pl-5 space-y-3 text-foreground">
                  <li>
                    <strong>Boil water:</strong> Bring 2 cups of water to a boil in a kettle or pot.
                  </li>
                  <li>
                    <strong>Prepare the cup:</strong> Remove the lid from your cup noodles and take out the seasoning
                    packet.
                  </li>
                  <li>
                    <strong>Add hot water:</strong> Pour the boiling water into the cup up to the fill line.
                  </li>
                  <li>
                    <strong>Cover and wait:</strong> Cover the cup with the lid and let it sit for 3 minutes.
                  </li>
                  <li>
                    <strong>Stir and enjoy:</strong> Stir the noodles and enjoy your simple cup noodles!
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-foreground">
                  <Flame className="h-5 w-5 text-primary" />
                  Upgraded Instructions
                </h3>
                <ol className="list-decimal pl-5 space-y-3 text-foreground">
                  <li>
                    <strong>Boil water:</strong> Bring 2 cups of water to a boil in a small pot.
                  </li>
                  <li>
                    <strong>Cook noodles:</strong> Empty the cup noodles into the pot and cook for 2 minutes.
                  </li>
                  <li>
                    <strong>Add egg:</strong> Crack an egg into the pot and stir gently to create egg ribbons.
                  </li>
                  <li>
                    <strong>Season:</strong> Add the seasoning packet and stir well.
                  </li>
                  <li>
                    <strong>Finish and garnish:</strong> Pour back into the cup or a bowl. Add chopped green onions, a
                    drizzle of sesame oil, and hot sauce to taste.
                  </li>
                </ol>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-foreground">Chef's Tips</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
                  <li>For a richer broth, use only 1.5 cups of water instead of 2</li>
                  <li>Add a slice of American cheese on top for a creamy texture</li>
                  <li>Frozen vegetables like corn, peas, or carrots make great additions</li>
                  <li>Leftover cooked meat can be added for extra protein</li>
                  <li>A dash of soy sauce or fish sauce can enhance the flavor</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <p className="text-foreground">
            Remember, this is not a real terms of service document because NoVermelho is not a real app. We're just
            having fun with cup noodles recipes instead of boring legal text!
          </p>

          <p className="text-foreground">
            If you were expecting actual terms of service, we apologize for the confusion. But honestly, isn't this more
            enjoyable than reading legal jargon?
          </p>
        </div>
      </div>
    </div>
  )
}

