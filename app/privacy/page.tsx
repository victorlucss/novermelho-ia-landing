"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ShieldCheck, Utensils, Flame } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: March 24, 2025</p>
        </div>

        <div className={`${theme === "dark" ? "prose-invert" : "prose"} max-w-none`}>
          <p className="text-lg text-foreground">
            Instead of a boring privacy policy, here's another delicious cup noodles recipe! Since NoVermelho isn't a
            real app, we thought you'd prefer something tasty instead.
          </p>

          <Card className="my-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Spicy Korean Cup Noodles</CardTitle>
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <CardDescription>A delicious spicy upgrade to your regular cup noodles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-foreground">
                  <Utensils className="h-5 w-5 text-primary" />
                  Ingredients
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-foreground">
                  <li>1 package of Korean style cup noodles (Shin Ramyun recommended)</li>
                  <li>2 cups of water</li>
                  <li>1 tablespoon of butter</li>
                  <li>1 egg</li>
                  <li>2 slices of American cheese</li>
                  <li>1 green onion, chopped</li>
                  <li>1 teaspoon of sesame seeds</li>
                  <li>1 sheet of nori (seaweed), cut into strips (optional)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-foreground">
                  <Flame className="h-5 w-5 text-primary" />
                  Instructions
                </h3>
                <ol className="list-decimal pl-5 space-y-3 text-foreground">
                  <li>
                    <strong>Prepare ingredients:</strong> Chop green onions, separating white and green parts. Cut
                    cheese slices into quarters.
                  </li>
                  <li>
                    <strong>Boil water:</strong> In a small pot, bring 2 cups of water to a boil.
                  </li>
                  <li>
                    <strong>Cook noodles:</strong> Add the noodles and the white parts of green onions to the boiling
                    water. Cook for 2 minutes.
                  </li>
                  <li>
                    <strong>Add seasoning:</strong> Add the seasoning packet and stir well.
                  </li>
                  <li>
                    <strong>Add egg:</strong> Crack an egg into the center of the pot. Do not stir for 30 seconds to let
                    it start cooking.
                  </li>
                  <li>
                    <strong>Add cheese:</strong> Place cheese quarters on top of the noodles around the egg. Cover the
                    pot and turn off the heat.
                  </li>
                  <li>
                    <strong>Finish and garnish:</strong> After 1 minute, add butter and stir gently. Transfer to a bowl
                    and top with green parts of onion, sesame seeds, and nori strips.
                  </li>
                </ol>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-foreground">Spice Level Adjustments</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
                  <li>
                    <strong>Mild:</strong> Use only half the spice packet and add more butter
                  </li>
                  <li>
                    <strong>Medium:</strong> Use the full spice packet as directed
                  </li>
                  <li>
                    <strong>Hot:</strong> Use the full spice packet plus 1 teaspoon of gochujang (Korean chili paste)
                  </li>
                  <li>
                    <strong>Extra Hot:</strong> Add the full spice packet plus 1 tablespoon of gochujang and 1 teaspoon
                    of chili oil
                  </li>
                </ul>
              </div>

              <div className="mt-6 p-4 border border-dashed border-primary/50 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-foreground">Recipe Variations</h3>
                <p className="text-foreground">
                  <strong>Protein Boost:</strong> Add sliced cooked chicken, beef, or tofu.
                </p>
                <p className="mt-2 text-foreground">
                  <strong>Veggie Version:</strong> Add spinach, mushrooms, and bean sprouts in the last minute of
                  cooking.
                </p>
                <p className="mt-2 text-foreground">
                  <strong>Seafood Special:</strong> Add small cooked shrimp or imitation crab meat.
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="text-foreground">
            We hope you enjoy this delicious cup noodles recipe! Remember, NoVermelho isn't a real app, so we don't
            actually need a privacy policy. But if we did, we'd definitely respect your data and probably not sell it to
            noodle companies.
          </p>

          <p className="text-foreground">
            If you were expecting an actual privacy policy, we apologize for the confusion. But honestly, isn't this
            recipe more useful?
          </p>
        </div>
      </div>
    </div>
  )
}

