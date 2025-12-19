import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-white text-neutral-900">
        <main id="main-content" className="flex-grow scroll-mt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
