 
export enum Language {
  English = "English Speaking",
  Hindi = "Hindi Speaking",
  Urdu = "Urdu Speaking",
  Spanish = "Spanish Speaking",
  Turkish = "Turki Speaking",
  Chinese = "China Speaking",
  Arabic = "Arabic Speaking",
  Bangla = "Bangla Speaking",
  Hebrew = "Hibru Speaking",
}

// Define a reusable Instructor type
export interface Instructor {
  readonly name: string;
  readonly image: string;
  readonly role: string;
}

// Main Course type
export interface Course {
  readonly icon?: string;
  readonly title: Language;
  readonly description: string;
  readonly instructor: Instructor;
}

// Strictly typed data
export const coursesData: Course[] = [
  {
    title: Language.English,
    description: "Learn the Beauty of English",
    instructor: {
      name: "Steven James",
      role: "Instructor",
      image: "/images/users/user1.jpg",
    },
  },
  {
    title: Language.Hindi,
    description: "Learn the Beauty of Hindi",
    instructor: {
      name: "Michael Eller",
      role: "Instructor",
      image: "/images/users/user2.jpg",
    },
  },
  {
    title: Language.Urdu,
    description: "Learn the Beauty of Urdu",
    instructor: {
      name: "Charles Ferrell",
      role: "Instructor",
      image: "/images/users/user3.jpg",
    },
  },
  {
    title: Language.Spanish,
    description: "Learn the Beauty of Spanish",
    instructor: {
      name: "Steven James",
      role: "Instructor",
      image: "/images/users/user1.jpg",
    },
  },
  {
    title: Language.Turkish,
    description: "Learn the Beauty of Turki",
    instructor: {
      name: "Michael Eller",
      role: "Instructor",
      image: "/images/users/user2.jpg",
    },
  },
  {
    title: Language.Chinese,
    description: "Learn the Beauty of China",
    instructor: {
      name: "Charles Ferrell",
      role: "Instructor",
      image: "/images/users/user3.jpg",
    },
  },
  {
    title: Language.Arabic,
    description: "Learn the Beauty of Arabic",
    instructor: {
      name: "Steven James",
      role: "Instructor",
      image: "/images/users/user1.jpg",
    },
  },
  {
    title: Language.Bangla,
    description: "Learn the Beauty of Bangla",
    instructor: {
      name: "Michael Eller",
      role: "Instructor",
      image: "/images/users/user2.jpg",
    },
  },
  {
    title: Language.Hebrew,
    description: "Learn the Beauty of Hibru",
    instructor: {
      name: "Charles Ferrell",
      role: "Instructor",
      image: "/images/users/user3.jpg",
    },
  },
] as const;



// Strictly typed dataset
export const coursesDataThree: Course[] = [
  {
    icon: "/images/icons/english.svg",
    title: Language.English,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    instructor: {
      image: "/images/users/user1.jpg",
      name: "Steven James",
      role: "Instructor",
    },
  },
  {
    icon: "/images/icons/hindi.svg",
    title: Language.Hindi,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    instructor: {
      image: "/images/users/user1.jpg",
      name: "Steven James",
      role: "Instructor",
    },
  },
  {
    icon: "/images/icons/urdu.svg",
    title: Language.Urdu,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    instructor: {
      image: "/images/users/user1.jpg",
      name: "Steven James",
      role: "Instructor",
    },
  },
  {
    icon: "/images/icons/spanish.svg",
    title: Language.Spanish,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    instructor: {
      image: "/images/users/user1.jpg",
      name: "Steven James",
      role: "Instructor",
    },
  },
] as const;