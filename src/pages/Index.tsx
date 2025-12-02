import IdleBlob from "@/components/IdleBlob";
import TalkingBlob from "@/components/TalkingBlob";
import ListeningBlob from "@/components/ListeningBlob";

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-light text-foreground mb-3 tracking-tight">
          Voice States
        </h1>
        <p className="text-muted-foreground text-lg">
          Soothing animated blobs for each interaction state
        </p>
      </header>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-5xl">
        <article className="flex items-center justify-center">
          <IdleBlob />
        </article>
        <article className="flex items-center justify-center">
          <TalkingBlob />
        </article>
        <article className="flex items-center justify-center">
          <ListeningBlob />
        </article>
      </section>
    </main>
  );
};

export default Index;
