import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IdleBlob from "@/components/IdleBlob";
import IdleBlobAlt from "@/components/IdleBlobAlt";
import TalkingBlob from "@/components/TalkingBlob";
import TalkingBlobAlt from "@/components/TalkingBlobAlt";
import ListeningBlob from "@/components/ListeningBlob";
import ListeningBlobAlt from "@/components/ListeningBlobAlt";
import CombinedBlob from "@/components/CombinedBlob";

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center px-6 py-12 gap-8">
      <Tabs defaultValue="option-a" className="w-full max-w-6xl">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
          <TabsTrigger value="option-a">Option A</TabsTrigger>
          <TabsTrigger value="option-b">Option B</TabsTrigger>
          <TabsTrigger value="option-c">Option C</TabsTrigger>
        </TabsList>
        
        <TabsContent value="option-a" className="mt-12">
          <section className="w-full">
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
        </TabsContent>
        
        <TabsContent value="option-b" className="mt-12">
          <section className="w-full">
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
        </TabsContent>
        
        <TabsContent value="option-c" className="mt-12">
          <section className="w-full">
            <div className="flex justify-center">
              <CombinedBlob />
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Index;
