import swagPhotos from '../../../photos'

export default function PhotoPage({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
          <p>This is an example page to show the bug. The total of photos is {swagPhotos.length}</p>
      </div>
    </div>
  )
}
