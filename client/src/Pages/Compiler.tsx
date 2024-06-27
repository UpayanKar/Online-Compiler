import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import CodeEditor from "@/components/CodeEditor";
import HelpHeader from "@/components/HelpHeader";
import RenderCode from "@/components/RenderCode";
import { useParams } from "react-router-dom";

 export default function Compiler() {
  const {urlId} = useParams()
  console.log(urlId)
  
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[350px]"
        defaultSize={50}
      >
        <HelpHeader />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-[calc(100dvh-60px)] min-w-[350px]"
        defaultSize={50}
      >
        <RenderCode/>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

// export default Compiler;
