import ClientOnly from "@/components/ClientOnly";
import AppHeader from "@/components/app-header/AppHeader";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="jp">
      <body>
        <ClientOnly>
          <div className="sticky top-0">
            <AppHeader />
            <div className="divider m-0" />
          </div>
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
