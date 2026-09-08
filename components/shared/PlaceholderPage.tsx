export function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 p-8">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-2 text-muted-foreground">
        Placeholder page for Bf Bio Sciences.
      </p>
    </main>
  );
}
