import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import IdleBlob from "@/components/IdleBlob";
import IdleBlobAlt from "@/components/IdleBlobAlt";
import TalkingBlob from "@/components/TalkingBlob";
import TalkingBlobAlt from "@/components/TalkingBlobAlt";
import ListeningBlob from "@/components/ListeningBlob";
import ListeningBlobAlt from "@/components/ListeningBlobAlt";

const Index = () => {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center px-6 py-12 gap-12">
      <Tabs defaultValue="optionA" className="w-full max-w-6xl">
        <TabsList className="grid w-full max-w-xs mx-auto grid-cols-2">
          <TabsTrigger value="optionA">Option A</TabsTrigger>
          <TabsTrigger value="optionB">Option B</TabsTrigger>
        </TabsList>
        
        <TabsContent value="optionA" className="mt-12">
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
        
        <TabsContent value="optionB" className="mt-12">
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
      </Tabs>
    </main>
  );
};

export default Index;
