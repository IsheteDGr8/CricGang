export default function AboutUsContactUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      Header
      {children}
      Footer
    </>
  );
}