export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // We set the background and ensure it takes up the full screen
    <div className="h-screen w-full bg-white overflow-hidden">
      {children}
    </div>
  );
}