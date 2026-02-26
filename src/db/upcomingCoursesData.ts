export interface courseType {
  title: string,
  level: string,
  date: string,
  instructor: {
    name: string,
    image: string,
  },
  bgImages: string[],
}

export const courses: courseType[] = [
  {
    title: "Portuguese Language",
    level: "Advanced",
    date: "22 Nov, 2023",
    instructor: {
      name: "James Knarr",
      image: "/images/users/user5.jpg",
    },
    bgImages: ["/images/shapes/bg-shape1.png", "/images/shapes/bg-shape2.png"],
  },
  {
    title: "Korean Language",
    level: "Advanced",
    date: "22 Nov, 2023",
    instructor: {
      name: "Steven James",
      image: "/images/users/user1.jpg",
    },
    bgImages: ["/images/shapes/bg-shape1.png", "/images/shapes/bg-shape2.png"],
  },
  {
    title: "Hindi Language",
    level: "Advanced",
    date: "22 Nov, 2023",
    instructor: {
      name: "Charles Ferrell",
      image: "/images/users/user3.jpg",
    },
    bgImages: ["/images/shapes/bg-shape1.png", "/images/shapes/bg-shape2.png"],
  },
];
