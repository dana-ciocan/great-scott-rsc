import './globals.css';
import Menu from './components/Menu/Menu';
export const metadata = {
  title: 'Time travel R us',
  description: 'We will get you when you want to go',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Menu />
        <h1>Time travel R us</h1>
        {children}
      </body>
    </html>
  );
}
