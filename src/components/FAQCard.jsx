import React, { useState } from 'react';

const faqData = [
  {
    question: "Can I still get into the Phase I sale?",
    answer: "Unfortunately, our Phase I sale was over in record time with unprecedented bonuses, and only the lucky ones were able to participate. But you can still be in time for Phase II where you can get 80% extra tokens, so don't miss out!"
  },
  {
    question: "What makes IronDoge so special that the Phase I sale sold out so quickly?",
    answer: "IronDoge is a game-changer, blending the irresistible charm of memes with the tangible benefits of real-world utility—an unprecedented combo in the crypto world. This unique mix is captivating investors with its promise of both fun and functionality. IronDoge isn't just a coin; it’s a community-driven powerhouse that combines humor, governance, and utility in a way rarely seen in the crypto scene. Phase I’s rapid sell-out was just the beginning. Don’t miss your chance to be part of this revolutionary movement in Phase II. Act now, or risk watching from the sidelines as IronDoge makes history!"
  },
  {
    question: "Are there any bonuses for the Phase II sale?",
    answer: "Yes, there are exclusive bonuses for early participants in Phase II! While not as high as the record-breaking Phase I bonuses, these incentives are still significant i.e. 80% extra tokens and our WL spots are almost full."
  },
  {
    question: "What is the expected timeline for the Phase II sale?",
    answer: "Phase II is just around the corner and is expected to sell out quickly, just like Phase I. We highly recommend staying updated through our official channels to ensure you don't miss the opportunity."
  },
  {
    question: "How can I ensure I don't miss out on the next sale phase?",
    answer: "To secure your spot, make sure to follow our social media channels and get whitelisted.. Don't miss out on your chance to join the IronDoge revolution!"
  },
  {
    question: "What happens if I miss Phase II? Will there be another chance to invest?",
    answer: "Each phase of the IronDoge Private sale offers unique benefits, and missing out means losing access to these exclusive opportunities. While there may be future phases, they will likely come with different terms and fewer bonuses. Don’t wait—seize the moment with Phase II!"
  },
  {
    question: "How does IronDoge plan to sustain its growth and innovation?",
    answer: "IronDoge’s strategy is nothing short of legendary. We forge strategic alliances with key players in both crypto and traditional markets, solidifying our presence and influence. Our marketing is as dynamic as our community, leveraging viral trends and engaging content to captivate new audiences. IronDoge is not just riding the wave of change; it’s creating it, ensuring we remain at the forefront of the meme coin space and beyond. ( Please correct the answers to technical procedure questions)"
  },
  {
    question: "Is there a limit on how many tokens I can purchase during the IronDoge ICO?",
    answer: "Yes, there is a cap on the maximum number of tokens each participant can purchase to ensure fair distribution. The specific limits will be announced closer to the sale date, so stay tuned for updates."
  },
  {
    question: "How do I participate in the IronDoge Private sale?",
    answer: "Participating in the IronDoge ICO is straightforward. Follow these steps: Get Whitelisted: Follow our social media channels for instructions on how to get whitelisted. Set Up a Wallet: Use a compatible crypto wallet to store your IronDoge tokens. Fund Your Wallet: Ensure your wallet has the necessary cryptocurrency to participate. Access the Portal: On the launch date, visit our official portal for detailed participation instructions."
  }
];

const FAQCard = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs px-5 md:px-8 mt-5 md:mt-10">
      {faqData.map((faq, index) => (
        <div key={index} className={`faq ${openIndex === index ? 'open' : ''}`}>
          <div
            className="faq-question relative text-base md:text-lg text-white transition-all duration-500 pr-8 md:pr-20 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </div>
          <div className={`faq-answer text-sm md:text-base leading-relaxed text-white-light ${openIndex === index ? 'block' : 'hidden'}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQCard;
