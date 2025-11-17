import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mind Color Sequence',
  description: 'Memory game on Base - Earn BONK tokens',
  metadataBase: new URL('https://mindgame-omega.vercel.app'),
  openGraph: {
    title: 'Mind Color Sequence',
    description: 'Memory game on Base - Earn BONK tokens',
    images: ['/image.png'],
  },
  other: {
    'fc:miniapp': JSON.stringify({
      version: "1",
      imageUrl: "https://mindgame-omega.vercel.app/image.png",
      splashImageUrl: "https://mindgame-omega.vercel.app/splash.png",
      button: {
        title: "BRAIN.exe!",
        action: {
          type: "launch_frame",
          name: "Mind Color Sequence",
          url: "https://mindgame-omega.vercel.app/",
          splashImageUrl: "https://mindgame-omega.vercel.app/splash.png",
          splashBackgroundColor: "#ffd753"
        }
      }
    })
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}