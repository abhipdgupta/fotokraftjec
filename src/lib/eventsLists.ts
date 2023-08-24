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
      thumbnail:
        "https://scontent.fgau1-5.fna.fbcdn.net/v/t39.30808-6/344242005_179610535025497_32961772407785816_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=4jqyeNTTufkAX-FKUTk&_nc_ht=scontent.fgau1-5.fna&oh=00_AfBKvVye-VuWxpq2onmFCH_q9jeELdKI_94Y3QbBu2Z6_w&oe=64E81717",
      album: "",
    },
    {
      name: "CreatriX'23",
      description: "Annual Photography competiton held all over the state",
      thumbnail: "https://scontent.fgau1-5.fna.fbcdn.net/v/t39.30808-6/344242005_179610535025497_32961772407785816_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=4jqyeNTTufkAX-FKUTk&_nc_ht=scontent.fgau1-5.fna&oh=00_AfBKvVye-VuWxpq2onmFCH_q9jeELdKI_94Y3QbBu2Z6_w&oe=64E81717",
      album: "",
    },
    {
      name: "PhotoWalk",
      description: "",
      thumbnail: "https://scontent.fgau1-5.fna.fbcdn.net/v/t39.30808-6/344242005_179610535025497_32961772407785816_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=4jqyeNTTufkAX-FKUTk&_nc_ht=scontent.fgau1-5.fna&oh=00_AfBKvVye-VuWxpq2onmFCH_q9jeELdKI_94Y3QbBu2Z6_w&oe=64E81717",
      album: "",
    },
    {
      name: "WorkShop",
      description: "",
      thumbnail: "https://scontent.fgau1-5.fna.fbcdn.net/v/t39.30808-6/344242005_179610535025497_32961772407785816_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=4jqyeNTTufkAX-FKUTk&_nc_ht=scontent.fgau1-5.fna&oh=00_AfBKvVye-VuWxpq2onmFCH_q9jeELdKI_94Y3QbBu2Z6_w&oe=64E81717",
      album: "",
    },
  ],
  yr2022: [
    {
      name: "Phoenix'22",
      description: "Annual Tech Fest of JEC covered by fotokraft year 2022",
      thumbnail:
        "https://scontent.fgau1-5.fna.fbcdn.net/v/t39.30808-6/344242005_179610535025497_32961772407785816_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=4jqyeNTTufkAX-FKUTk&_nc_ht=scontent.fgau1-5.fna&oh=00_AfBKvVye-VuWxpq2onmFCH_q9jeELdKI_94Y3QbBu2Z6_w&oe=64E81717",
      album: "",
    },
    {
      name: "CreatriX'22",
      description: "Annual Photography competiton held all over the state ",
      thumbnail: "https://scontent.fgau1-5.fna.fbcdn.net/v/t39.30808-6/344242005_179610535025497_32961772407785816_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=4jqyeNTTufkAX-FKUTk&_nc_ht=scontent.fgau1-5.fna&oh=00_AfBKvVye-VuWxpq2onmFCH_q9jeELdKI_94Y3QbBu2Z6_w&oe=64E81717",
      album: "",
    },
    {
      name: "College Week",
      description:
        "Withness the fun and joy college week as we cover the competitons and engagement . ",
      thumbnail: "https://scontent.fgau1-5.fna.fbcdn.net/v/t39.30808-6/344242005_179610535025497_32961772407785816_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=4jqyeNTTufkAX-FKUTk&_nc_ht=scontent.fgau1-5.fna&oh=00_AfBKvVye-VuWxpq2onmFCH_q9jeELdKI_94Y3QbBu2Z6_w&oe=64E81717",
      album: "",
    },
    {
      name: "Short Film Making Competiton",
      description: "Showcase your passion and story through a short film",
      thumbnail: "https://scontent.fgau1-5.fna.fbcdn.net/v/t39.30808-6/344242005_179610535025497_32961772407785816_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=4jqyeNTTufkAX-FKUTk&_nc_ht=scontent.fgau1-5.fna&oh=00_AfBKvVye-VuWxpq2onmFCH_q9jeELdKI_94Y3QbBu2Z6_w&oe=64E81717",
      album: "",
    },
    {
      name: "Photo Exibition",
      description: "Showcasing all of your creative works",
      thumbnail: "https://scontent.fgau1-5.fna.fbcdn.net/v/t39.30808-6/344242005_179610535025497_32961772407785816_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=4jqyeNTTufkAX-FKUTk&_nc_ht=scontent.fgau1-5.fna&oh=00_AfBKvVye-VuWxpq2onmFCH_q9jeELdKI_94Y3QbBu2Z6_w&oe=64E81717",
      album: "",
    },
    {
      name: "WorkShop by Ashwini Borkotoki",
      description: "Learn from the best ",
      thumbnail: "https://scontent.fgau1-5.fna.fbcdn.net/v/t39.30808-6/344242005_179610535025497_32961772407785816_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=4jqyeNTTufkAX-FKUTk&_nc_ht=scontent.fgau1-5.fna&oh=00_AfBKvVye-VuWxpq2onmFCH_q9jeELdKI_94Y3QbBu2Z6_w&oe=64E81717",
      album: "",
    },
    {
      name: "Lets Meet",
      description: " ",
      thumbnail: "https://scontent.fgau1-5.fna.fbcdn.net/v/t39.30808-6/344242005_179610535025497_32961772407785816_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=4jqyeNTTufkAX-FKUTk&_nc_ht=scontent.fgau1-5.fna&oh=00_AfBKvVye-VuWxpq2onmFCH_q9jeELdKI_94Y3QbBu2Z6_w&oe=64E81717",
      album: "",
    },
  ],
};

export default EventsList;
