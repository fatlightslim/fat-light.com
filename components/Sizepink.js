import Image from "next/image"


export default function Sizepink({spec}) {
  return (
    <div className="relative py-12">
      <div className="relative max-w-7xl mx-auto sm:px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-gray-50 to-white lg:rounded-lg sm:shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="p-4">
            <div className="lg:self-center">
              <div className="flex flex-col">
                <div className=" overflow-x-auto ">
                  <div className="align-top inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border border-red-700">
                      <Table {...spec} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:mt-12">
            <Image
              src={spec.img.src}
              width={spec.img.width}
              height={spec.img.height}
              alt={spec.img.alt}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function Table({data}) {
  return (
    <table className="min-w-full border border-red-600 text-center text-sm text-red-500 font-medium ">
      <thead>
        <tr>
          <th
            scope="col"
            colSpan="2"
            className="px-6 py-3 text-red-600 font-bold text-lg tracking-wider bg-white"
          >
            製品仕様
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {data.map((v) => {
          const desc = v.desc.split("\n")
          return (
            <tr key={v.label}>
              <th className="py-2 border border-red-600">{v.label}</th>
              <td className="py-2 border border-red-600">
                {desc.map((v) => (
                  <span key={v} className="block">{v}</span>
                ))}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
