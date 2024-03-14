import './globals.css';


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
