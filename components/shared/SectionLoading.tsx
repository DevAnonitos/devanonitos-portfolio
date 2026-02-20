import { Skeleton } from "../ui/skeleton";

const SectionLoading = () => {
    return (
      <div className="w-full py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-4">
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-[400px] w-full" />
      </div>
    );
};

export default SectionLoading;