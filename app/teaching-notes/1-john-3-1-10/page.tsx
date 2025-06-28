"use client"

import Link from "next/link"
import { ArrowLeft, Download, Calendar, MapPin } from "lucide-react"

export default function TeachingNotesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/events" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Events
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">1 John 3:1-10 - Children of God</h1>
              <p className="text-xl text-gray-600 mb-4">Teaching Notes from "A Love Letter from a Pastor" Series</p>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  June 29th, 2024
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  River Church Family
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Download className="h-4 w-4 mr-2" />
                Print / Save as PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Main Passage */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
                I. MAIN PASSAGE: 1 John 3:1-10 (NET)
              </h2>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 mb-6">
                <p className="text-gray-800 leading-relaxed">
                  <strong>[1Jo 3:1-10 NET]</strong> 1 (See what sort of love the Father has given to us: that we should
                  be called God's children - and indeed we are! For this reason the world does not know us: because it
                  did not know him. 2 Dear friends, we are God's children now, and what we will be has not yet been
                  revealed. We know that whenever it is revealed we will be like him, because we will see him just as he
                  is. 3 And everyone who has this hope focused on him purifies himself, just as Jesus is pure). 4
                  Everyone who practices sin also practices lawlessness; indeed, sin is lawlessness. 5 And you know that
                  Jesus was revealed to take away sins, and in him there is no sin. 6 Everyone who resides in him does
                  not sin; everyone who sins has neither seen him nor known him. 7 Little children, let no one deceive
                  you: The one who practices righteousness is righteous, just as Jesus is righteous. 8 The one who
                  practices sin is of the devil, because the devil has been sinning from the beginning. For this purpose
                  the Son of God was revealed: to destroy the works of the devil. 9 Everyone who has been fathered by
                  God does not practice sin, because God's seed resides in him, and thus he is not able to sin, because
                  he has been fathered by God. 10 By this the children of God and the children of the devil are
                  revealed: Everyone who does not practice righteousness - the one who does not love his fellow
                  Christian - is not of God.
                </p>
              </div>
            </section>

            {/* Jesus Came to Reveal */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
                II. JESUS CAME TO REVEAL
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    A. First and Foremost: He is the Deliverer
                  </h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-800">
                      <strong>[1Jo 3:5 NET]</strong> 5 And you know that Jesus was revealed to take away sins, and in
                      him there is no sin.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">B. Three Key Revelations:</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li className="text-gray-700">
                      <strong>Our Position</strong> – Beloved children of God
                    </li>
                    <li className="text-gray-700">
                      <strong>Our Purpose</strong> – Living in holy purity
                    </li>
                    <li className="text-gray-700">
                      <strong>Our Promise</strong> – Future glory reflecting Christ fully
                    </li>
                  </ol>

                  <div className="bg-green-50 p-4 rounded-lg mt-4 border-l-4 border-green-600">
                    <p className="text-green-800 font-medium">
                      <strong>Remember:</strong> Position. Purpose. Promise. In Christ, the Father's extravagant love is
                      clearly revealed—our identity reclaimed, our calling clarified, and our hope secured.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Historical Context */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
                III. HISTORICAL CONTEXT: THE DISINHERITANCE AND RESTORATION
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">A. Humanity's Disinheritance at Babel</h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-800 mb-4">
                      <strong>[Deu 32:8-9 NET]</strong> 8 When the Most High gave the nations their inheritance, when he
                      divided up humankind, he set the boundaries of the peoples, according to the number of the
                      heavenly assembly. 9 For the LORD's allotment is his people, Jacob is his special possession.
                    </p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                    <li>Humanity was disinherited at Babel (Deut. 32:8–9)</li>
                    <li>
                      God divided the nations and gave them over to lesser spiritual beings due to their rebellion (cf.
                      Gen. 11)
                    </li>
                    <li>
                      Israel became God's covenant people, but the rest of the nations were placed under the rule of
                      other elohim who later became corrupt (Psalm 82)
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">B. The Corrupt Rule of Lesser Beings</h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-800">
                      <strong>[Psa 82:1-8 NET]</strong> 1 God stands in the assembly of El; in the midst of the gods he
                      renders judgment. 2 He says, "How long will you make unjust legal decisions and show favoritism to
                      the wicked? (Selah) 3 Defend the cause of the poor and the fatherless! Vindicate the oppressed and
                      suffering! 4 Rescue the poor and needy! Deliver them from the power of the wicked! 5 They neither
                      know nor understand. They stumble around in the dark, while all the foundations of the earth
                      crumble. 6 I thought, 'You are gods; all of you are sons of the Most High.' 7 Yet you will die
                      like mortals; you will fall like all the other rulers." 8 Rise up, O God, and execute judgment on
                      the earth! For you own all the nations.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">C. Jesus' Mission to Reclaim the Nations</h3>
                  <p className="text-gray-700 mb-4">
                    Jesus, the true Son of God and the seed of Abraham, came to reclaim the disinherited nations through
                    His death, resurrection, and the outpouring of the Spirit (Acts 2)
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">D. Pentecost: The Reversal of Babel</h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-800">
                      <strong>[Act 2:5-11 NET]</strong> 5 Now there were devout Jews from every nation under heaven
                      residing in Jerusalem. 6 When this sound occurred, a crowd gathered and was in confusion, because
                      each one heard them speaking in his own language. 7 Completely baffled, they said, "Aren't all
                      these who are speaking Galileans? 8 And how is it that each one of us hears them in our own native
                      language? 9 Parthians, Medes, Elamites, and residents of Mesopotamia, Judea and Cappadocia, Pontus
                      and the province of Asia, 10 Phrygia and Pamphylia, Egypt and the parts of Libya near Cyrene, and
                      visitors from Rome, 11 both Jews and proselytes, Cretans and Arabs - we hear them speaking in our
                      own languages about the great deeds God has done!"
                    </p>
                  </div>
                  <p className="text-gray-700 italic">
                    Pentecost, where every nation heard the gospel in their own language, was the symbolic reversal of
                    Babel (Acts 2:5–11).
                  </p>
                </div>
              </div>
            </section>

            {/* Our Restoration in Christ */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
                IV. OUR RESTORATION IN CHRIST
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">A. Brought Near</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-800">
                      <strong>Ephesians 2:12–13 (NET):</strong> "that you were at that time without the Messiah,
                      alienated from the citizenship of Israel and strangers to the covenants of promise, having no hope
                      and without God in the world. But now in Christ Jesus you who used to be far away have been
                      brought near by the blood of Christ."
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">B. Members of God's Household</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-800">
                      <strong>Ephesians 2:19 (NET):</strong> "So then you are no longer foreigners and noncitizens, but
                      you are fellow citizens with the saints and members of God's household."
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">C. Adopted as Sons and Daughters</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-800">
                      <strong>Romans 8:15–17 (NET):</strong> "For you did not receive the spirit of slavery leading
                      again to fear, but you received the Spirit of adoption, by whom we cry, 'Abba, Father.' The Spirit
                      himself bears witness to our spirit that we are God's children. And if children, then heirs
                      (namely, heirs of God and also fellow heirs with Christ)—if indeed we suffer with him so we may
                      also be glorified with him."
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">D. Sons of Abraham</h3>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <p className="text-gray-800">
                      <strong>Galatians 3:7 (NET):</strong> "So then, understand that those who believe are the sons of
                      Abraham."
                    </p>
                    <p className="text-gray-800">
                      <strong>Galatians 3:29 (NET):</strong> "And if you belong to Christ, then you are Abraham's
                      descendants, heirs according to the promise."
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Jesus Came to Rescue Us */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
                V. JESUS CAME TO RESCUE US FROM SIN AND SATAN (1 John 3:4-8)
              </h2>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-800">
                  <strong>[1Jo 3:4-8 NET]</strong> 4 Everyone who practices sin also practices lawlessness; indeed, sin
                  is lawlessness. 5 And you know that Jesus was revealed to take away sins, and in him there is no sin.
                  6 Everyone who resides in him does not sin; everyone who sins has neither seen him nor known him. 7
                  Little children, let no one deceive you: The one who practices righteousness is righteous, just as
                  Jesus is righteous. 8 The one who practices sin is of the devil, because the devil has been sinning
                  from the beginning. For this purpose the Son of God was revealed: to destroy the works of the devil.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">A. Jesus Rescued Us From:</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-700">
                    <li>
                      <strong>Sin's Deception</strong> – Liberating us from rebellion's lies
                    </li>
                    <li>
                      <strong>Satan's Dominion</strong> – Stripping away the enemy's illegitimate rule
                    </li>
                    <li>
                      <strong>Spiritual Defeat</strong> – Empowering us to live victoriously
                    </li>
                  </ol>

                  <div className="bg-green-50 p-4 rounded-lg mt-4 border-l-4 border-green-600">
                    <p className="text-green-800 font-medium">
                      <strong>Remember:</strong> Deception. Dominion. Defeat. Christ destroyed the chains, dethroned the
                      enemy, and delivered us to live in freedom.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    B. Understanding Sin as Lawlessness (vv. 4–6)
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 mb-4">
                    <li>Sin is rebellion (anomia): a rejection of God's rule</li>
                    <li>All sin is essentially rebellion against God's law</li>
                    <li>
                      "Lawlessness" in Scripture means living as though God's law doesn't matter – a posture of heart
                      that leads to acts of sin and iniquity
                    </li>
                    <li>
                      It is not confined to any one group but describes all human wickedness that flouts God's will
                    </li>
                  </ul>

                  <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600 mb-4">
                    <p className="text-yellow-800 font-bold text-center">Key Equation: sin = lawlessness = rebellion</p>
                  </div>

                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                    <li>
                      Scholars note that John was likely correcting false teachers who downplayed the seriousness of sin
                    </li>
                    <li>
                      By defining sin as anomia, he stresses that to commit sin is to declare open rebellion against
                      God's authority
                    </li>
                    <li>
                      This understanding brings clarity and gravity: any practice of sin puts one in a stance of
                      opposition to God
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    C. Clarifying the Particular Sin of "Lawlessness"
                  </h3>
                  <p className="text-gray-700 mb-4">
                    When John defines sin as lawlessness in 1 John 3:4, he's speaking broadly of all sin as rebellion
                    against God. However, by verse 10, he focuses his definition more narrowly on specific evidences of
                    "lawlessness":
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-700 mb-4">
                    <li>Not Practicing Righteousness</li>
                    <li>Not Loving One's Brother (or Sister)</li>
                  </ol>
                  <p className="text-gray-700 italic">
                    These two indicators serve as litmus tests, revealing genuine believers versus those who are
                    "lawless" (children of the devil).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    D. Jesus Destroyed Satan's Authority (v. 8)
                  </h3>

                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Greek Insights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-blue-700">
                      <li>
                        <strong>"Destroy" (lysē):</strong> to loose, dismantle, nullify
                      </li>
                      <li>
                        <strong>"Authority" (exousia):</strong> legal right or jurisdiction
                      </li>
                      <li>
                        <strong>"Power" (dunamis):</strong> ability, strength, influence
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3 text-gray-700">
                    <h4 className="font-semibold">Key Points:</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>At the cross, Jesus legally revoked Satan's authority (Col. 2:14–15)</li>
                      <li>Satan no longer has jurisdiction over those in Christ</li>
                      <li>However, Satan retains functional power (dunamis)—through deception, agreement, and sin</li>
                    </ul>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg mt-4 border-l-4 border-gray-600">
                    <p className="text-gray-800 italic">
                      <strong>Quote:</strong> "Jesus has taken the authority, but people still give the demonic realm
                      influence by believing lies and living in rebellion against God." — Michael Heiser, The Unseen
                      Realm
                    </p>
                  </div>

                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 mt-4">
                    <li>Satan's dominion was based on rebellion; Jesus stripped him of the right to rule</li>
                    <li>Christ is now exalted with all authority (Matt. 28:18). We are under His domain</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Jesus Gives Us New Life */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
                VI. JESUS GIVES US NEW LIFE (1 John 3:9-10)
              </h2>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-800">
                  <strong>[1Jo 3:9-10 NET]</strong> 9 Everyone who has been fathered by God does not practice sin,
                  because God's seed resides in him, and thus he is not able to sin, because he has been fathered by
                  God. 10 By this the children of God and the children of the devil are revealed: Everyone who does not
                  practice righteousness - the one who does not love his fellow Christian - is not of God.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">A. New Life Characterized By:</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-4 text-gray-700">
                    <li>
                      <strong>A New Heart</strong> – Transformed desires and affections
                    </li>
                    <li>
                      <strong>A New Heritage</strong> – Adopted into the royal family
                    </li>
                    <li>
                      <strong>A New Habit</strong> – Practicing righteousness consistently
                    </li>
                  </ol>

                  <div className="bg-green-50 p-4 rounded-lg mt-4 border-l-4 border-green-600">
                    <p className="text-green-800 font-medium">
                      <strong>Remember:</strong> Heart. Heritage. Habit. Reborn through Christ, we are transformed
                      inwardly, embraced lovingly, and empowered practically.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">B. Born of God</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                    <li>We are born of God—His "seed" (Spirit and nature) lives in us</li>
                    <li>This new birth produces a transformation from the inside out</li>
                    <li>We cannot remain in sin because our nature has changed—we are a new creation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">C. Biblical Foundation for New Birth</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Jesus' Teaching to Nicodemus:</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-800">
                          <strong>John 3:3, 5–6 (NET):</strong> "Jesus replied, 'I tell you the solemn truth, unless a
                          person is born from above, he cannot see the kingdom of God.' ... 'Unless a person is born of
                          water and spirit, he cannot enter the kingdom of God. What is born of the flesh is flesh, and
                          what is born of the Spirit is spirit.'"
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Old Testament Promise Fulfilled:</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-800">
                          <strong>Ezekiel 36:26–27 (NET):</strong> "I will give you a new heart, and I will put a new
                          spirit within you. I will remove the heart of stone from your body and give you a heart of
                          flesh. I will put my Spirit within you..."
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Paul's Description:</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-800">
                          <strong>2 Corinthians 5:17 (NET):</strong> "So then, if anyone is in Christ, he is a new
                          creation; what is old has passed away—look, what is new has come!"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Closing Exhortation */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
                VII. CLOSING EXHORTATION
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">A. Summary Points:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                    <li>
                      Jesus was <strong>REVEALED</strong> as our Deliverer, restoring us to our identity as God's
                      children
                    </li>
                    <li>
                      He <strong>RESCUED</strong> us by breaking Satan's illegitimate authority, leaving the enemy
                      powerless unless we believe his lies
                    </li>
                    <li>
                      We have been <strong>REBORN</strong> to reflect God's character, live in holiness, and love deeply
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">B. Simple Takeaway:</h3>
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
                    <p className="text-red-800 font-medium text-lg">
                      You are not who you once were. Satan has no legitimate claim over your life. Today is your day to
                      break agreement with the lies of the enemy.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">C. Call to Action:</h3>
                  <ol className="list-decimal list-inside space-y-3 ml-4 text-gray-700">
                    <li>
                      <strong>Reflect:</strong> What lies have you believed about yourself, about God, about others?
                    </li>
                    <li>
                      <strong>Act:</strong> Step forward to break agreement with these lies and receive the gift of
                      deliverance and freedom offered today.
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t pt-8 mt-12">
              <div className="text-center text-gray-500">
                <p className="mb-2">© Together in Battle Ministry</p>
                <p>
                  For more resources, visit:{" "}
                  <Link href="/" className="text-blue-600 hover:text-blue-800">
                    BattleTogether.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
