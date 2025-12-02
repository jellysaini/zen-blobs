import IdleBlob from "@/components/IdleBlob";
import IdleBlobAlt from "@/components/IdleBlobAlt";
import TalkingBlob from "@/components/TalkingBlob";
import TalkingBlobAlt from "@/components/TalkingBlobAlt";
import ListeningBlob from "@/components/ListeningBlob";
import ListeningBlobAlt from "@/components/ListeningBlobAlt";

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12 gap-16">
      {/* Option A */}
      <section className="w-full max-w-6xl">
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

      {/* Option B */}
      <section className="w-full max-w-6xl">
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
