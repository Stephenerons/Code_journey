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
      <body className={`bg-[#fafaf9] w-full md:max-w-7xl h-full md:h-1/2 flex md:flex flex-col md:flex-col justify-center md:justify-center md:items-center md:mx-auto `}>{children}</body>
    </html>
  );
}
