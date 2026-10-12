export const clubs = [
  {
    id: 'robotics',
    name: 'Robotics Club',
    category: 'Technology',
    color: 'mint',
    image: '/src/img/photo-1581091226825-a6a2a5aee158.jpg',
    shortDescription: 'Build, code, and bring clever ideas to life with a hands-on crew.',
    description: 'Curious about how things work? Robotics Club is a friendly space to design, build, and program robots with students from every discipline. Learn by making, collaborate on challenges, and get practical experience with electronics, mechanics, and code.',
    members: 128,
    meeting: 'Wednesdays · 4:00 PM',
    location: 'Innovation Lab, Room 204',
    events: [
      { name: 'Arduino for Beginners', date: '2026-10-21', time: '4:00 PM', location: 'Innovation Lab' },
      { name: 'Campus Robotics Showcase', date: '2026-11-07', time: '11:00 AM', location: 'Student Center' }
    ]
  },
  {
    id: 'green-campus',
    name: 'Green Campus',
    category: 'Community',
    color: 'green',
    image: '/src/img/photo-1472396961693-142e6e269027.jpg',
    shortDescription: 'Make campus greener through small actions and shared projects.',
    description: 'Green Campus brings students together to care for the place we call home. Join community gardens, sustainability workshops, campus clean-ups, and conversations about making everyday choices kinder to the planet. No experience required—just bring your curiosity.',
    members: 94,
    meeting: 'Fridays · 3:30 PM',
    location: 'Campus Garden',
    events: [
      { name: 'Plant & Potting Afternoon', date: '2026-10-23', time: '3:30 PM', location: 'Campus Garden' },
      { name: 'Low-Waste Living Workshop', date: '2026-11-05', time: '5:00 PM', location: 'Commons Room' }
    ]
  },
  {
    id: 'creative-studio',
    name: 'Creative Studio',
    category: 'Arts & Culture',
    color: 'peach',
    image: '/src/img/photo-1513364776144-60967b0f800f.jpg',
    shortDescription: 'A low-pressure home for makers, artists, and curious creatives.',
    description: 'Creative Studio is where ideas get messy—in the best way. Bring your sketchbook, camera, craft project, or simply an open mind. We host collaborative art sessions, skill swaps, and showcases that celebrate the many ways students express themselves.',
    members: 176,
    meeting: 'Tuesdays · 5:00 PM',
    location: 'Arts Building, Studio 1',
    events: [
      { name: 'Open Studio Night', date: '2026-10-20', time: '5:00 PM', location: 'Arts Building' },
      { name: 'Zine-Making Social', date: '2026-11-03', time: '4:30 PM', location: 'Creative Hub' }
    ]
  },
  {
    id: 'adventure-society',
    name: 'Adventure Society',
    category: 'Sports & Outdoors',
    color: 'blue',
    image: '/src/img/photo-1478131143081-80f7f84ca84d.jpg',
    shortDescription: 'Find your next outdoor adventure, from easy hikes to new trails.',
    description: 'Adventure Society makes it easy to get outside, try something new, and meet people along the way. We plan accessible hikes, weekend trips, outdoor skills sessions, and relaxed meetups. Beginners are always welcome, and we help members find the right gear and pace.',
    members: 112,
    meeting: 'Thursdays · 4:30 PM',
    location: 'Recreation Center Lobby',
    events: [
      { name: 'Sunset Trail Walk', date: '2026-10-22', time: '4:30 PM', location: 'North Trail Gate' },
      { name: 'Outdoor Skills 101', date: '2026-11-08', time: '10:00 AM', location: 'Recreation Center' }
    ]
  },
  {
    id: 'minds-in-motion',
    name: 'Minds in Motion',
    category: 'Academic',
    color: 'lavender',
    image: '/src/img/photo-1523240795612-9a054b0db644.jpg',
    shortDescription: 'Swap ideas, build study habits, and learn better together.',
    description: 'Minds in Motion is a welcoming community for lifelong learners. From peer-led study circles and guest talks to thoughtful discussions and career skill sessions, we make academic growth more social, supportive, and fun.',
    members: 83,
    meeting: 'Mondays · 6:00 PM',
    location: 'Library, Collaboration Zone',
    events: [
      { name: 'Study Sprint & Snacks', date: '2026-10-19', time: '6:00 PM', location: 'Library Collaboration Zone' },
      { name: 'Ideas Worth Sharing: Student Talks', date: '2026-11-02', time: '5:30 PM', location: 'Lecture Hall B' }
    ]
  }
]

export const categories = ['All clubs', 'Technology', 'Community', 'Arts & Culture', 'Sports & Outdoors', 'Academic']