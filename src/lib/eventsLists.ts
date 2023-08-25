// Provide list of events for only last two years
// After changing here like for year yr2024 also update it in event components

type Event = {
  name: string;
  description: string;
  thumbnail: string;
  album: string;
};

type EventsByYear = {
  [year: string]: Event[];
};

const EventsList: EventsByYear = {
  yr2023: [
    {
      name: "Phoenix'23",
      description: "Annual Tech Fest of JEC covered by fotokraft year 2023",
      thumbnail: `/events/2023/workshop.jpg`,
      album: "",
    },
    {
      name: "CreatriX'23",
      description: "Annual Photography competiton held all over the state",
      thumbnail: `/events/2023/workshop.jpg`,
      album: "",
    },
    {
      name: "PhotoWalk",
      description: "",
      thumbnail: `/events/2023/workshop.jpg`,
      album: "",
    },
    {
      name: "WorkShop",
      description: `The First Workshop of Session 2023 is held on 11th March .Where everyone got to know about the Basics of Photography by learning from each other and applying the same for a said objective. Looking forward to more such meets. Greetings✨`,
      thumbnail: `/events/2023/workshop.jpg`,
      album: "",
    },
  ],
  yr2022: [
    {
      name: "Phoenix'22",
      description: "Annual Tech Fest of JEC covered by fotokraft year 2022",
      thumbnail: `/events/2023/workshop.jpg`,
      album: "",
    },
    {
      name: "CreatriX'22",
      description: "Annual Photography competiton held all over the state ",
      thumbnail: `/events/2023/workshop.jpg`,
      album: "",
    },
    {
      name: "College Week",
      description:
        "Withness the fun and joy college week as we cover the competitons and engagement . ",
      thumbnail: `/events/2023/workshop.jpg`,
      album: "",
    },
    {
      name: "Short Film Making Competiton",
      description: "Showcase your passion and story through a short film",
      thumbnail: `/events/2023/workshop.jpg`,
      album: "",
    },
    {
      name: "Photo Exibition",
      description: "Showcasing all of your creative works",
      thumbnail: `/events/2023/workshop.jpg`,
      album: "",
    },
    {
      name: "WorkShop by Ashwini Borkotoki",
      description: `workshop on photography basics and more powered by cannon`,
      thumbnail: `/events/2022/workshop_by_ashwini_borkotoki.jpg`,
      album: "",
    },
    {
      name: "Lets Meet",
      description: `We are grateful and extremely delighted to announce that Obiettivo, the photography club of NIT, Silchar has collaborated with FOTOKRAFT along with the photography clubs of prestigious colleges like Flashpoint (Assam Engineering College), Tezpur University Photography Club, Photography and Fine Arts Club (NIT Meghalaya) for a grand photography weekend.`,
      thumbnail: `/events/2022/lets_meet.jpg`,
      album: "",
    },
  ],
};

export default EventsList;
