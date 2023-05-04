/**
 *
 * @returns A post component that has the posts.
 */

interface PostInfo {
  image: string;
}

export default function Post({ image }: PostInfo) {
  return (
    <div className="w-56 m-6 bg-white shadow rounded-lg">
      <img
        src={image}
        className="object-cover aspect-[5/3] w-full rounded-t-lg"
      />

      <div className="px-6 p-2 flex flex-col space-y-0.5">
        <div className="flex justify-between items-center">
          <p className="font-medium">DYS Concert</p>
          <p className="text-sm">4/28-4/29</p>
        </div>
        <p className="text-sm">
          2 <a className="underline decoration-pink-500/60">females</a> wants 2{" "}
          <a className="underline decoration-pink-500/60">females</a>
        </p>
        <p className="text-sm text-gray-500">$150-$200 /room /night</p>
        <p className="text-sm truncate text-gray-500">
          Warwick Seattle, Downtown Seattle, wowww
        </p>

        <div className="grid place-items-center">
          <button className="mt-2 px-6 py-1 bg-cyan-500 hover:bg-cyan-700 text-white font-bold rounded">
            More
          </button>
        </div>
      </div>
    </div>
  );
}
