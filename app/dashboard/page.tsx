export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-gray-600">Your recent generations will appear here.</p>

      <div className="p-6 border rounded-xl bg-white text-center text-gray-500">
        No generations yet.
      </div>
    </div>
  );
}