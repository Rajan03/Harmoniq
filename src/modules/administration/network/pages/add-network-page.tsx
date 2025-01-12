import { OwnerForm } from "../components/owner-form.tsx";
import { NetworkForm } from "../components/add-network-form";

export default function AddNetworkPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Add Network and Owner
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          <NetworkForm />
          <OwnerForm />
        </div>
      </div>
    </div>
  );
}
