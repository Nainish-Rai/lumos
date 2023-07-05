import RouteBar from "../containers/RouteBar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full bg-gray-200 dark:bg-zinc-950  pt-16">
      <RouteBar />
      {children}
    </div>
  );
}

export default layout;
