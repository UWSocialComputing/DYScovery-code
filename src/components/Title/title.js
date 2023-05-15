/**
 *
 * @returns A website title component.
 */

export default function Title({ showTag = false }) {
  return (
    <div className="grid place-items-center my-3">
      <div className="text-5xl font-extrabold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500">
          <a href="/DYScovery-code">DYScovery.com</a>
        </span>
      </div>
      {showTag && (
        <p className="mt-3 text-sm text-gray-500">
          Find the short-term roommates for your next event!
        </p>
      )}
    </div>
  );
}
