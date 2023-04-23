import { DataItem } from "../types"

// Below is the prompt

// 生成10条类似下面结构的数据。date 的值是递增的（从“2023-04-21”开始）， value 的值是包含40～50个单词左右的口语长句
// ```
// {
//     date: "2023-03-20",
//     value: "foo",
//   },
// ```

const strings: DataItem[] = [
  {
    date: "2023-02-28",
    value:
      "Millions of new objects have just been cataloged in a vast new sky map that will lead to more investigations about our universe's environment, the discovery team says.",
  },
  {
    date: "2023-03-01",
    value:
      "The Apple Watch Series 8 generation is expected to incorporate quite a few design changes, and may include more than just one model being released in 2022. On Sunday, a newsletter offered more details of what to expect to be introduced by Apple, and what could be withdrawn",
  },
  {
    date: "2023-03-02",
    value:
      "The Curiosity rover took a picture of something pretty enticing this week on the surface of Mars. While the object in question looks like a tiny little flower or maybe even some type of organic feature, the rover team confirmed this object is a mineral formation, with delicate structures that formed by minerals precipitating from water.",
  },
  {
    date: "2023-03-03",
    value:
      "In a-ha's 1985 music video for Take on Me, the lead singer walks through a 2D drawing that eventually becomes three-dimensional. The video was revolutionary at the time and continues to inspire. One look at Tokyo's 2D Cafe and one can't help but think of the iconic video. Located in the Shin Okubo neighborhood, this cute cafe looks like a page from a manga.",
  },
  {
    date: "2023-03-04",
    value:
      "NASA has released a stunning image of Portugal’s coastlineshowing the immense power of massive, seven-story-high waves as they crashed toward the shore. The image, taken in 2020, was captured on the same day that an 18-year-old surfer reportedly rode a record-breaking 101.4-foot-high (30.9 meters) wave in the area.",
  },
  {
    date: "2023-03-05",
    value:
      "There's probably no Marvel catchphrase stuck in the public consciousness more right now than, “I am Groot,” but as it turns out, that's not what he started saying. This happened in the Secret Wars tie-in The Infinity Gauntlet. The story and art were handled by Dustin Weaver with a script by Gerry Duggan.",
  },
  {
    date: "2023-03-06",
    value:
      "Tyrese Maxey raced ahead of the Cleveland Cavaliers’ transition defense, received a bounce pass from James Harden for the one-handed slam, and screamed as he flung both arms forward.",
  },
  {
    date: "2023-03-07",
    value:
      "Meta lost $13.7 billion on its Reality Labs segment in 2022. That’s the business unit responsible for building the company’s ambitious metaverse technologies. Reality Labs generated revenue of $727 million in the fourth quarter, and $2.16 billion for all of 2022 — a decline from $2.27 billion in 2021 — including sales of Quest headsets.",
  },
  {
    date: "2023-03-08",
    value:
      "The company behind Funko Pop collectibles, those small figurines that vaguely represent celebrities and fictional characters and which you likely ignore at your local GameStop, vastly over-estimated demand and is dumping $30 million worth of figurines in a landfill, Kotaku reports.",
  },
  {
    date: "2023-03-12",
    value:
      "Nearly a quarter million Floridians are being warned to avoid washing their face with tap water after a man died from a brain-eating amoeba in February.",
  },
  {
    date: "2023-03-13",
    value:
      "During the immediate aftermath of the DART mission — NASA's first asteroid target practice — the Hubble Space Telescope captured the hour-by-hour changes as the space rock cast off over 1,000 tons of debris. The time-lapse, shown below, depicts the rock and dust spraying out into a complex pattern for days after the impact.",
  },
  {
    date: "2023-03-14",
    value:
      "The first-ever image of a black hole was released on April 10, 2019. The image was captured by the Event Horizon Telescope (EHT), a global network of radio telescopes that combined their data to create the first-ever image of a black hole.",
  },
  {
    date: "2023-03-15",
    value:
      "California regulators closed down the tech lender and put it under the control of the US Federal Deposit Insurance Corporation. The FDIC is acting as a receiver, which typically means it will liquidate the bank’s assets to pay back its customers, including depositors and creditors.",
  },
  {
    date: "2023-03-16",
    value:
      'The International Space Station Twitter account indicated there was an issue with a "faulty hook sensor" on the capsule, but said ground controllers were able to send up a software override that took care of the issue.',
  },
  {
    date: "2023-03-17",
    value:
      "The US Food and Drug Administration (FDA) has approved the first drug to treat Alzheimer's disease in nearly two decades. The drug, aducanumab, is a monoclonal antibody that targets beta amyloid, a protein that forms plaques in the brain of people with Alzheimer's disease.",
  },
  {
    date: "2023-03-18",
    value:
      "Even if they don’t get paid for their time, it’s basically free advertising for the performers, who typically see a bump in sales for tickets and their back catalog. Justin Timberlake sales rose 534% after his 2018 performance, as reported by Esquire, and sales of Lady Gaga, sales of her digital catalog spiked 1000% following her 2017 performance.",
  },
  {
    date: "2023-03-19",
    value:
      "Alabama star freshman Brandon Miller brought the gun that teammate Darius Miles allegedly used in a January killing in Tuscaloosa, according to police testimony cited by AL.com. The shooting led to capital murder charges against Miles, who was dismissed from the team. Another man, Michael Davis, was also charged with capital murder in the shooting which left Jamea Jonae Harris dead.",
  },
  {
    date: "2023-03-20",
    value:
      "Smith took to Twitter to announce the “binding” contract, promising to drop “Xbox games and Activision titles like Call of Duty” on Nintendo hardware at the same time these games hit Xbox consoles. The news comes as Microsoft’s roughly $69 billion acquisition of Activision Blizzard is put under the magnifying glass by almost every regulator imaginable.",
  },
  {
    date: "2023-03-21",
    value:
      "I've been trying to learn how to play the guitar, but it's been difficult to find the time to practice regularly with my busy schedule.",
  },
  {
    date: "2023-03-22",
    value:
      "My favorite type of cuisine is definitely Italian food - there's just something about the combination of pasta, sauce, and cheese that I can never resist.",
  },
  {
    date: "2023-03-23",
    value:
      "I'm really looking forward to the upcoming music festival - I've been a fan of several of the artists performing for years and can't wait to finally see them live.",
  },
  {
    date: "2023-03-24",
    value:
      "One of the most important lessons I've learned in life is that success is often the result of hard work, perseverance, and a willingness to take risks.",
  },
  {
    date: "2023-03-25",
    value:
      "I recently started taking yoga classes and have already noticed a significant improvement in my flexibility and overall sense of well-being.",
  },
  {
    date: "2023-03-26",
    value:
      "It's always a bit nerve-wracking to speak in public, but I've found that the key is to practice beforehand and focus on delivering the message rather than worrying about mistakes.",
  },
  {
    date: "2023-03-27",
    value:
      "I'm currently reading a book about the history of ancient Egypt, and it's fascinating to learn about the customs, beliefs, and architecture of such a rich and complex civilization.",
  },
  {
    date: "2023-03-28",
    value:
      "One of my favorite things to do on a lazy Sunday afternoon is to curl up on the couch with a good book and a hot cup of tea.",
  },
  {
    date: "2023-03-29",
    value:
      "I've always been interested in learning about different cultures and traditions, and traveling has allowed me to do just that while also gaining a broader perspective on the world.",
  },
  {
    date: "2023-03-30",
    value:
      "In my opinion, one of the most important qualities in a leader is the ability to inspire and motivate others to achieve their goals and reach their full potential.",
  },
  {
    date: "2023-03-31",
    value:
      "I'm a big fan of cooking, and I love experimenting with new recipes and ingredients to create delicious and healthy meals for myself and my family.",
  },
  {
    date: "2023-04-01",
    value:
      "I'm really looking forward to the weekend, I'm planning to go hiking with some friends in the mountains and have a picnic with some delicious food and drinks.",
  },
  {
    date: "2023-04-02",
    value:
      "I've been trying to learn a new language for a few months now, but it's been difficult to find the time and motivation to keep up with it consistently.",
  },
  {
    date: "2023-04-03",
    value:
      "I recently read a book about the history of philosophy, and it was fascinating to learn about the different schools of thought and how they have evolved over time.",
  },
  {
    date: "2023-04-04",
    value:
      "I'm a big fan of cooking, and I love experimenting with new recipes and ingredients to create delicious and healthy meals for myself and my family.",
  },
  {
    date: "2023-04-05",
    value:
      "I've been working on a new project at work that's been keeping me busy and challenged, but I'm excited about the potential impact it could have on our business and customers.",
  },
  {
    date: "2023-04-06",
    value:
      "I enjoy listening to a wide variety of music, from classical to jazz to rock, and I find that it can really improve my mood and help me relax and unwind after a long day.",
  },
  {
    date: "2023-04-07",
    value:
      "I'm planning to take a vacation later this year to visit some friends and explore a new city, and I'm really excited about the opportunity to travel and see new sights and experiences.",
  },
  {
    date: "2023-04-08",
    value:
      "I've been trying to get more exercise lately, and I've found that going for a run or doing some yoga in the morning can really help me feel energized and focused throughout the day.",
  },
  {
    date: "2023-04-09",
    value:
      "I recently attended a concert by one of my favorite bands, and it was an amazing experience to see them perform live and connect with other fans who share my passion for their music.",
  },
  {
    date: "2023-04-10",
    value:
      "I'm currently reading a novel by a new author that's been getting a lot of buzz, and I'm really enjoying the engaging characters and compelling plot that keep me hooked and wanting to read more.",
  },
  {
    date: "2023-04-11",
    value:
      "I was really looking forward to going to the concert last night, but unfortunately I got sick and had to stay home.",
  },
  {
    date: "2023-04-12",
    value:
      "I can't believe it's already been a year since we graduated from college, time really flies.",
  },
  {
    date: "2023-04-13",
    value:
      "I'm not sure if I'm going to be able to make it to the meeting tomorrow, I have a lot of other things I need to take care of.",
  },
  {
    date: "2023-04-14",
    value:
      "The weather has been really nice lately, it's been great to finally be able to spend more time outside.",
  },
  {
    date: "2023-04-15",
    value:
      "I'm really looking forward to the long weekend coming up, I'm planning to take a trip to the beach.",
  },
  {
    date: "2023-04-16",
    value:
      "I can't believe how much my kids have grown up in the last year, they're getting so big.",
  },
  {
    date: "2023-04-17",
    value:
      "I had a really busy day at work today, I barely had time to grab lunch.",
  },
  {
    date: "2023-04-18",
    value:
      "I'm so glad that the new restaurant in town is finally open, I've been looking forward to trying it out.",
  },
  {
    date: "2023-04-19",
    value:
      "I had a great time at the party last night, it was so nice to see all of my old friends again.",
  },
  {
    date: "2023-04-20",
    value:
      "I'm really hoping that the weather stays nice this weekend, I'm planning to do some gardening in my backyard.",
  },
  {
    date: "2023-04-21",
    value:
      "Hey, have you heard about the new coffee shop that just opened downtown? They're supposed to have the best latte in the city.",
  },
  {
    date: "2023-04-22",
    value:
      "I can't believe how fast this year is going by. It feels like just yesterday we were ringing in the new year.",
  },
  {
    date: "2023-04-23",
    value:
      "You know, I was thinking about trying that new Italian restaurant that just opened up. I've heard their pasta is amazing.",
    zh: "你知道吗，我想去那家刚刚开业的意大利餐厅。我听说他们的意大利面很好吃。",
    keyPoints: ['You know, ___', 'I was thinking about ___'],
  },
  {
    date: "2023-04-24",
    value:
      "I've been really into yoga lately. It's such a great way to relax and unwind after a long day.",
    zh: "我最近非常喜欢瑜伽。这是一个很好的放松和放松的方法，尤其是在一天结束后。",
    keyPoints: ['I\'ve been really into ___', 'It\'s such a great way to ___'],
  },
  {
    date: "2023-04-25",
    value:
      "I'm so excited for my trip to Hawaii next month. I can't wait to lay on the beach and soak up the sun.",
    zh: "我对下个月去夏威夷的旅行感到非常兴奋。我迫不及待地躺在海滩上，吸收阳光。",
    keyPoints: ['I\'m so excited for ___', 'I can\'t wait to ___'],
  },
  {
    date: "2023-04-26",
    value:
      "I've been trying to learn how to play the guitar for years, but I just can't seem to get the hang of it.",
    zh: "我已经尝试学习吉他多年了，但我似乎无法掌握它。",
    keyPoints: ['I\'ve been trying to ___', 'I just can\'t seem to ___'],
  },
  {
    date: "2023-04-27",
    value:
      "It's crazy how much technology has changed our lives. I can't imagine going back to a world without smartphones or social media.",
    zh: "技术如何改变了我们的生活是多么的疯狂。我无法想象回到没有智能手机或社交媒体的世界。",
    keyPoints: ['It\'s crazy how much ___', 'I can\'t imagine going back to ___'],
  },
  {
    date: "2023-04-28",
    value:
      "I'm really looking forward to the summer. There's nothing better than spending a lazy day at the beach with friends.",
    zh: "我非常期待夏天。没有什么比和朋友在海滩上度过一个懒散的日子更好了。",
    keyPoints: ['I\'m really looking forward to ___', 'There\'s nothing better than ___'],
  },
  {
    date: "2023-04-29",
    value:
      "I've been trying to eat healthier lately, but it's so hard to resist all the delicious junk food out there.",
    zh: "我最近一直在尝试健康饮食，但是抵制所有美味的垃圾食品是如此困难。",
    keyPoints: ['I\'ve been trying to ___', 'It\'s so hard to resist ___'],
  },
  {
    date: "2023-04-30",
    value:
      "I can't believe how quickly my kids are growing up. It feels like just yesterday they were babies, and now they're almost teenagers.",
    zh: "我无法相信我的孩子们长大得多么快。感觉就像昨天他们还是婴儿，现在他们几乎是青少年了。",
    keyPoints: ['I can\'t believe how quickly ___', 'It feels like just yesterday ___'],
  },
  {
    date: "2023-05-01",
    value:
      "I can't believe how fast this year is going by, it feels like we just celebrated New Year's yesterday!",
    zh: "我无法相信这一年过得有多快，感觉就像我们昨天刚刚庆祝新年一样！",
    keyPoints: ['I can\'t believe how fast ___', 'It feels like ___'],
  },
  {
    date: "2023-05-02",
    value:
      "I really need to start working out more, my body is not as young as it used to be and I'm starting to feel the effects of not taking care of myself.",
    zh: "我真的需要开始锻炼更多，我的身体不像以前那么年轻，我开始感受到不照顾自己的影响。",
    keyPoints: ['I really need to start ___', 'I\'m starting to feel the effects of ___'],
  },
  {
    date: "2023-05-03",
    value:
      "I think it's important to take time for yourself every once in a while, whether that means going on a solo trip or just taking a day off to relax and recharge.",
    zh: "我认为每隔一段时间，你需要为自己花一点时间，无论是去旅行还是只是休息一天，都很重要。",
    keyPoints: ['I think it\'s important to ___', 'Whether that means ___ or just ___'],
  },
  {
    date: "2023-05-04",
    value:
      "I'm so excited for summer, there's nothing better than spending a day at the beach with friends and family.",
    zh: "我对夏天感到非常兴奋，没有什么比和朋友和家人在海滩上度过一天更好了。",
    keyPoints: ['I\'m so excited for ___', 'There\'s nothing better than ___'],
  },
  {
    date: "2023-05-05",
    value:
      "I wish I had more time to read, there are so many great books out there and I feel like I'm always falling behind on my reading list.",
    zh: "我希望有更多的时间阅读，有很多很棒的书，我感觉我总是落后于我的阅读清单。",
    keyPoints: ['I wish I had more time to ___', 'I feel like I\'m always falling behind on ___'],
  },
  {
    date: "2023-05-06",
    value:
      "I can't wait to try out that new restaurant downtown, I've heard such great things about their food and atmosphere.",
    zh: "我迫不及待要尝试那家新开的餐厅，我听说他们的食物和氛围都很棒。",
    keyPoints: ['I can\'t wait to ___', 'I\'ve heard such great things about ___'],
  },
  {
    date: "2023-05-07",
    value:
      "I'm really enjoying my new job, it's challenging but also very rewarding and I feel like I'm learning so much every day.",
    zh: "我很享受我的新工作，它很具有挑战性，但也非常有回报，我感觉每天都在学习很多东西。",
    keyPoints: ['I\'m really enjoying ___', 'It\'s challenging but also very rewarding and I feel like ___'],
  },
  {
    date: "2023-05-08",
    value:
      "I think it's important to stay positive and focus on the good things in life, even when things get tough.",
    zh: "我认为保持积极向上并专注于生活中的美好事物是很重要的，即使在困难时刻也是如此。",
    keyPoints: ['I think it\'s important to ___', 'Even when ___'],
  },
  {
    date: "2023-05-09",
    value:
      "I'm so grateful for my family and friends, they always know how to make me laugh and bring me back up when I'm feeling down.",
    zh: "我对我的家人和朋友感到非常感激，他们总是知道如何让我笑起来，当我感到沮丧时，他们会让我回到正轨。",
    keyPoints: ['I\'m so grateful for ___', 'They always know how to ___ and ___'],
  },
  {
    date: "2023-05-10",
    value:
      "I can't believe it's already May, time really does fly by when you're having fun!",
    zh: "我无法相信已经是五月了，当你玩得开心时，时间真的会飞快！",
    keyPoints: ['I can\'t believe it\'s already ___', 'Time really does fly by when ___'],
  },
]

export default strings
