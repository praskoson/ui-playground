import { PaginatedItems } from "@/components/paginator";

export default function Page() {
  return (
    <div className="p-6">
      <PaginatedItems itemsPerPage={4} />
    </div>
  );
}
