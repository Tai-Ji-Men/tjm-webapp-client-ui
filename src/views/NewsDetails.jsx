import Link from "next/link"
import {useEffect, useState} from "react";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {getNewsDetailsBySlug} from "@/lib/apiUtils";

export default function NewsDetails({ slug, onBack }) {

    const [data, setData] = useState(null);
    const [status, setStatus] = useState("loading"); // "loading" | "ready" | "error"

    useEffect(() => {
        let alive = true;
        async function run() {
            setStatus("loading");
            try {
                const json = await getNewsDetailsBySlug(slug);
                console.log("Get news details!! " + json);
                if (alive) {
                    setData(json);
                    setStatus("ready");
                }
            } catch (e) {
                if (alive) setStatus("error");
            }
        }

        if (slug) run();
        return () => { alive = false; };
    }, [slug]);

    if (status === "loading") {
        return (
            <div className="min-h-screen bg-white">
                <div className="max-w-[1440px] mx-auto px-4 py-24">
                    <p className="text-gray-600">Loading article…</p>
                </div>
            </div>
        );
    }

    if (status === "error" || !data) {
        return (
            <div className="min-h-screen bg-white">
                <div className="max-w-[1440px] mx-auto px-4 py-24">
                    <h1 className="text-2xl font-bold">Article not found</h1>
                    <button onClick={onBack} className="mt-4 text-blue-600 underline">
                        ← Back to News
                    </button>
                </div>
            </div>
        );
    }

    // const dateStr = data.publishedAt ? new Date(data.publishedAt).toLocaleDateString() : null;

    return (
        <div className="min-h-screen bg-white relative">
            {/* Orange Line */}
            {<div className="w-[35px] h-[2px]  mx-auto mt-16"></div>}

            <div className="max-w-[1440px] mx-auto px-4 py-24">
                <button onClick={onBack} className="mt-4 text-blue-600 underline">
                    ← Back to News
                </button>
            </div>

            {/* World News Section */}
            <div className="max-w-[1440px] mx-auto px-4 mt-16">
                {/* Category header */}
                <div className="flex items-center mb-8 mt-6">
                    <h1 className="font-inter font-medium text-[24px] leading-[29px] text-black mr-8">
                        {data.category ?? "News"}
                    </h1>
                    <div className="flex-1 h-[2px] bg-black"></div>
                </div>

                {/* Title / subtitle / meta */}
                <div className="text-center mb-16">
                    <h2 className="font-['Source_Serif_Pro'] font-semibold text-[60px] leading-[120%] text-black max-w-[1080px] mx-auto">
                        {data.title}
                    </h2>
                </div>
                {data.subtitle && (
                    <div className="text-center mb-16">
                        <p className="font-['Source_Serif_Pro'] font-semibold text-[24px] leading-[130%] text-[#525560] max-w-[1041px] mx-auto text-justify">
                            {data.subtitle}
                        </p>
                    </div>
                )}

                {/* Main Image */}
                <div className="mb-16">
                    <div className="relative w-full max-w-[1334px] mx-auto">
                        <img
                            src="/images/content/news1.png"
                            alt="Dr. Hong ringing the Bell of World Peace and Love"
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="font-roboto font-normal italic text-[20px] leading-[130%] text-[#696969] mt-4 text-justify">
                            Dr. Hong, Tao-Tze, president of the Federation of World Peace and Love (FOWPAL) and the
                            zhang-men-ren (leader) of Tai Ji Men, rings the Bell of World Peace and Love. He rang the
                            bell nine times to pray for lasting global peace.
                        </p>
                    </div>
                </div>

                {/* Article Content */}
                <div className="max-w-[1072px] mx-auto space-y-[43px] mb-16">
                    <p className="font-['Source_Serif_Pro'] font-normal text-[28px] leading-[171%] text-black text-justify">
                        As climate change rapidly deteriorates the environment and the world stands at the brink of
                        conflict, each person's decision becomes critical for humanity's continued existence. In
                        celebration of the UNdeclared International Day of Peace, the 22nd annual "Celebration for
                        People Living in Peace & Climate Week" was held in Times Square, New York, on September 21,
                        2024. The Federation of World Peace and Love (FOWPAL), which has visited 109 countries, was
                        invited to host a ceremony of ringing the Bell of World Peace and Love to pray for the world and
                        send blessings worldwide through live streaming.
                    </p>

                    <p className="font-['Source_Serif_Pro'] font-normal text-[28px] leading-[171%] text-black text-justify">
                        This year marks the 23rd anniversary of the 9/11 terrorist attacks in the United States. At noon
                        on September 21, 2024, FOWPAL hosted a prayer and bell-ringing ceremony, where Dr. Hong,
                        Tao-Tze, president of FOWPAL and zhang-men-ren (leader) of Tai Ji Men, rang the Bell of World
                        Peace and Love nine times, praying for lasting global peace. Dr. Hong explained the significance
                        of the ceremony: "Times change quickly, chaos spreads, unsettling hearts. The ancient bell rings
                        with a soothing melody, awakening conscience in this very moment. For love and peace, we act on
                        our hopes, acquiring blessings and wisdom by helping all beings." He made three heartfelt
                        wishes: "May the world be blessed with peace, and all beings with safety. May the Earth be
                        secure and sustainable. May the universe be harmonious, and all living things be purified."
                        Through this sacred and solemn bell-ringing, FOWPAL sought to bring comfort to all creatures on
                        Earth, spreading the message of love and peace to every living being.
                    </p>
                </div>

                {/* Second Image */}
                <div className="mb-16">
                    <div className="relative w-full max-w-[1080px] mx-auto">
                        <img
                            src="/images/content/news2.png"
                            alt="FOWPAL members performing as angels"
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="font-roboto font-normal italic text-[20px] leading-[130%] text-[#696969] mt-4 text-justify">
                            FOWPAL members, dressed as angels with pure white wings, performed the song "Children from
                            Heaven." Their gentle singing aimed to awaken people's conscience.
                        </p>
                    </div>
                </div>

                {/* Second Article Content */}
                <div className="max-w-[1079px] mx-auto space-y-[43px] mb-16">
                    <p className="font-['Source_Serif_Pro'] font-normal text-[28px] leading-[171%] text-black text-justify opacity-98">
                        When the 9/11 terrorist attacks occurred 23 years ago, Dr. Hong led the FOWPAL delegation to New
                        York to participate in the 54th UN NGO/DP| Annual Conference, where they held ceremonies of
                        ringing the Bell of World Peace and Love to spread blessings. With the recent surge in natural
                        and man-made disasters worldwide, this year's bell-ringing ceremony in Times Square carried even
                        greater significance.
                    </p>

                    <p className="font-['Source_Serif_Pro'] font-normal text-[28px] leading-[171%] text-black text-justify">
                        FOWPAL members, dressed as angels with pure white wings, performed the song "Children from
                        Heaven." Their gentle singing brought the audience back to the innocence and kindness of a
                        child's heart, awakening their conscience and encouraging self-reflection through daily
                        meditation. To inspire positive thoughts for the world, FOWPAL members led the audience in a
                        30-second meditation, motivating each person to pray for a better world in their own way,
                        wishing for peaceful coexistence for all living beings on Earth.
                    </p>
                </div>

                {/* Third Image */}
                <div className="mb-16">
                    <div className="relative w-full max-w-[1086px] mx-auto">
                        <img
                            src="/images/content/news3.png"
                            alt="Dr. Hong presenting Compass Clock of Conscience"
                            className="w-full h-auto rounded-lg"
                        />
                        <p className="font-roboto font-normal italic text-[20px] leading-[130%] text-[#696969] mt-4 text-justify opacity-98">
                            Dr. Hong, Tao-Tze presents the Compass Clock of Conscience to former Trinidad and Tobago
                            President Anthony Thomas Aquinas Carmona, left, and ACS Commissioner Jess Dannhauser, right.
                        </p>
                    </div>
                </div>

                {/* Third Article Content */}
                <div className="max-w-[1079px] mx-auto space-y-[43px] mb-16">
                    <p className="font-['Source_Serif_Pro'] font-normal text-[28px] leading-[171%] text-black text-justify opacity-98">
                        Dr. Hong presented the Compass Clock of Conscience to former Trinidad and Tobago President
                        Anthony Thomas Aquinas Carmona and ACS Commissioner Jess Dannhauser. The clock symbolizes the
                        role of conscience in guiding people toward a bright path, reminding them to seize each moment,
                        follow their conscience, and do good deeds. Commissioner Dannhauser expressed his appreciation
                        for the beautiful ceremony that unites people and allows them to share their wishes. His hope is
                        for children to feel calm and secure, creating a safe environment for both children and young
                        people to thrive together.
                    </p>

                    <p className="font-['Source_Serif_Pro'] font-normal text-[28px] leading-[171%] text-black text-justify opacity-98">
                        Dr. Hong presented the Compass Clock of Conscience to former Trinidad and Tobago President
                        Anthony Thomas Aquinas Carmona and ACS Commissioner Jess Dannhauser. The clock symbolizes the
                        role of conscience in guiding people toward a bright path, reminding them to seize each moment,
                        follow their conscience, and do good deeds. Commissioner Dannhauser expressed his appreciation
                        for the beautiful ceremony that unites people and allows them to share their wishes. His hope is
                        for children to feel calm and secure, creating a safe environment for both children and young
                        people to thrive together.
                    </p>
                </div>

                {/* Two Images Side by Side */}
                <div className="max-w-[1079px] mx-auto mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                        <img
                            src="/images/content/news4.png"
                            alt="FOWPAL members meditating"
                            className="w-full h-auto rounded-lg"
                        />
                        <img
                            src="/images/content/news5.png"
                            alt="Declaration signing"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <p className="font-roboto font-normal italic text-[20px] leading-[130%] text-[#696969] text-justify opacity-98">
                            FOWPAL members led the audience to meditate for 30 seconds, praying for a better world in
                            their own way, and wishing that all creatures on the Earth can coexist peacefully.
                        </p>
                        <p className="font-roboto font-normal italic text-[20px] leading-[130%] text-[#696969] text-justify opacity-98">
                            FOWPAL members invite attendees to sign the Declaration of World Day of the Power of Hope,
                            to turn their hopes for peace into action. By uniting people's kindness, FOWPAL aimed to
                            address the crises threatening human survival.
                        </p>
                    </div>
                </div>

                {/* Final Article Content */}
                <div className="max-w-[1079px] mx-auto space-y-[43px] mb-16">
                    <p className="font-['Source_Serif_Pro'] font-normal text-[28px] leading-[171%] text-black text-justify opacity-98">
                        An attendee remarked on the inspiring sight of global leaders uniting for a common purpose:
                        promoting and spreading world peace. He expressed his wish for peace education to be implemented
                        and accelerated worldwide. UN Secretary-General Antonio Guterres mentioned in his speech on the
                        International Day of Peace, "Our world needs peace. Peace is the ultimate prize for all
                        humanity. And as this International Day of Peace reminds us - the solutions are in our hands.
                        Cultivating a culture of peace means replacing division, disempowerment, and despair with
                        justice, equality and hope for all."
                    </p>

                    <p className="font-['Source_Serif_Pro'] font-normal text-[28px] leading-[171%] text-black text-justify opacity-98">
                        During the event, FOWPAL members invited attendees to sign the Declaration of World Day of the
                        Power of Hope, encouraging them to transform their hopes for peace into action. By uniting in
                        kindness, they aimed to address the crises threatening human survival and contribute to the
                        sustainability of the Earth.
                    </p>

                    <p className="font-['Source_Serif_Pro'] font-normal text-[28px] leading-[171%] text-black text-justify opacity-98">
                        This event was organized by Good News Corporation in partnership with the Manhattan Borough
                        President and OMMM. Groups from around the world supported this meaningful international day in
                        various ways. On-site, the American Oriental Art Foundation displayed the largest Peace and
                        Friendship Tree artwork, which took five years to complete. The Tree symbolizes the collective
                        efforts of numerous peace advocates to promote peace, love, and care for Mother Earth.
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
            {/*<div className="w-full h-[625px] bg-white relative">*/}
            {/* Join Us Section */}
            {/*<div className="text-center mb-16">
          <h2 className="font-roboto font-bold italic text-[70px] leading-[120%] text-[#FF725E] max-w-[1037px] mx-auto">
            "Join Us! Change Your Destiny"
          </h2>
        </div>

        {/* Learn More Button */}
            {/*<div className="text-center mb-16">
          <button className="w-[200px] h-[44px] border border-[#FF725E] rounded-[30px] font-inter font-semibold text-[16px] leading-[44px] text-[#FF725E] hover:bg-[#FF725E] hover:text-white transition-colors duration-300">
            Join Now!
          </button>
        </div>*/}

            {/* Social Media */}
            {/*<div className="max-w-[380px] mx-auto text-center">
          <div className="flex justify-between items-center mb-4">
            <div className="text-center">
              <div className="w-8 h-8 bg-[#FF725E] rounded mb-2"></div>
              <span className="font-inter font-normal text-[11px] leading-[44px] text-[#FF725E]">Instagram</span>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-[#FF725E] rounded mb-2"></div>
              <span className="font-inter font-normal text-[11px] leading-[44px] text-[#FF725E]">Facebook</span>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-[#FF725E] rounded mb-2"></div>
              <span className="font-inter font-normal text-[11px] leading-[44px] text-[#FF725E]">TikTok</span>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-[#FF725E] rounded mb-2"></div>
              <span className="font-inter font-normal text-[11px] leading-[44px] text-[#FF725E]">Discord</span>
            </div>
          </div>
        </div>*/}
            {/*</div>*/}
        </div>
    )
}