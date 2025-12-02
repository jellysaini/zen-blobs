import IdleBlob from "@/components/IdleBlob";
import IdleBlobAlt from "@/components/IdleBlobAlt";
import TalkingBlob from "@/components/TalkingBlob";
import TalkingBlobAlt from "@/components/TalkingBlobAlt";
import ListeningBlob from "@/components/ListeningBlob";
import ListeningBlobAlt from "@/components/ListeningBlobAlt";

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-light text-foreground mb-3 tracking-tight">
          Voice States
        </h1>
        <p className="text-muted-foreground text-lg">
          Soothing animated blobs for each interaction state
        </p>
      </header>
      
      {/* Option A - Original animations */}
      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-xl font-medium text-muted-foreground text-center mb-8 uppercase tracking-widest">
          Option A
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <article className="flex items-center justify-center">
            <IdleBlob />
          </article>
          <article className="flex items-center justify-center">
            <TalkingBlob />
          </article>
          <article className="flex items-center justify-center">
            <ListeningBlob />
          </article>
        </div>
      </section>

      {/* Option B - Alternative animations */}
      <section className="w-full max-w-6xl">
        <h2 className="text-xl font-medium text-muted-foreground text-center mb-8 uppercase tracking-widest">
          Option B
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <article className="flex items-center justify-center">
            <IdleBlobAlt />
          </article>
          <article className="flex items-center justify-center">
            <TalkingBlobAlt />
          </article>
          <article className="flex items-center justify-center">
            <ListeningBlobAlt />
          </article>
        </div>
      </section>
    </main>
  );
};

export default Index;
