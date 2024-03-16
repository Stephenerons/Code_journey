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
      <body className={`bg-[#fafaf9] `}>{children}</body>
    </html>
  );
}
