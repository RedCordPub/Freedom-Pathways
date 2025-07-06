import type { Metadata } from "next"
import Image from "next/image"
import { Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Jesus the Deliverer - Free Book",
  description:
    "Download your free copy of Jesus the Deliverer and discover the power of Christ's victory over spiritual forces.",
}

const JesusTheDelivererPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/jesus-the-deliverer-cover.jpg"
                  alt="Jesus the Deliverer Book Cover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Jesus the Deliverer</h1>
              <h2 className="text-xl md:text-2xl font-medium mb-6 text-[#0F3543]">
                Discover the Lost Ministry of the Apostles
              </h2>

              <p className="text-gray-700 mb-6">
                "Jesus the Deliverer" explores the profound impact of Jesus Christ on spiritual warfare and personal
                liberation. This book delves into the scriptures to reveal how Jesus empowers believers to overcome
                demonic oppression and live a life of freedom.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-semibold mb-4">Get Your Copy</h3>
                <p className="text-gray-600 mb-4">Download your free PDF copy or purchase the full book on Amazon.</p>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://zcnlqhdimljmsuilobyw.supabase.co/storage/v1/object/public/ministry-files//Jesus%20The%20Deliverer_June%201st%20Release.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#0F3543] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Free Download <Download className="ml-2 h-4 w-4" />
                  </a>

                  <a
                    href="https://a.co/d/ixV5z0f"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#FF9900] text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 8.206 3.166 13.044 3.166 2.688 0 5.25-.394 7.677-1.184.532-.173.996-.124 1.392.145 2.264 1.543 4.508 2.339 6.732 2.388.177.012.266-.057.266-.208v-2.33c0-.177-.089-.355-.266-.533-1.065-1.065-1.598-2.198-1.598-3.398 0-.533.12-1.042.36-1.527-2.442-3.136-6.194-4.704-11.256-4.704-5.062 0-8.814 1.568-11.256 4.704.24.485.36.994.36 1.527 0 1.2-.533 2.333-1.598 3.398-.177.178-.266.356-.266.533v2.33c0 .151.089.22.266.208 2.224-.049 4.468-.845 6.732-2.388z" />
                    </svg>
                    Buy on Amazon
                  </a>
                </div>

                <div className="text-sm text-gray-500 mt-4">
                  <p>
                    The free PDF includes the complete book content. The Amazon version includes additional formatting
                    and is available in multiple formats.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">What You'll Learn</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Understand the nature of spiritual warfare</li>
                  <li>• Recognize the tactics of the enemy</li>
                  <li>• Apply biblical principles for deliverance</li>
                  <li>• Experience the transforming power of Jesus Christ</li>
                  <li>• Minister freedom to others effectively</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JesusTheDelivererPage
