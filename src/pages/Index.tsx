import IdleBlobAlt from "@/components/IdleBlobAlt";
import ListeningBlobAlt from "@/components/ListeningBlobAlt";
import ThinkingBlobAlt from "@/components/ThinkingBlobAlt";
import TalkingBlobAlt from "@/components/TalkingBlobAlt";

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center px-6 py-12 gap-8">
      <section className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <article className="flex items-center justify-center">
            <IdleBlobAlt />
          </article>
          <article className="flex items-center justify-center">
            <ListeningBlobAlt />
          </article>
          <article className="flex items-center justify-center">
            <ThinkingBlobAlt />
          </article>
          <article className="flex items-center justify-center">
            <TalkingBlobAlt />
          </article>
        </div>
      </section>
    </main>
  );
};

export default Index;
