import './globals.css';


export const metadata = {
  title: 'Code Journey',
  description: 'Portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add the style tag for the font here */}
      </head>
      <body className={` md:bg-[#fafaf9]   h-full md:h-1/2 justify-center md:justify-center md:items-center md:mx-auto `}>{children}</body>
    </html>
  );
}
