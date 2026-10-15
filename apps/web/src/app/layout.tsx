import type { Metadata } from "next";
import "@calories-counter/styles/global.scss";

export const metadata: Metadata = {
  title: "Calories Counter",
  description: "Suivez simplement vos calories et vos macronutriments.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
