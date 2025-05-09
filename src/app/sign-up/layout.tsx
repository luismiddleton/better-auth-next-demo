export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="min-h-screen w-full flex items-center justify-center">{children}</main>;
}
