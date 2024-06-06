export default [
  {
    _id: { $oid: "6654ba90507bbb3a0105dc56" },
    name: "Alex Johnson",
    bio: "Alex is an avid dog lover who enjoys spending weekends at the park with his dogs. He also enjoys hiking and outdoor adventures.",
    looking_for: "a playdate",
    location: "Edinburgh",
    users_id: {
      $oid: "66573f74eb325b3b2f26ab6d",
    },
    dog_ids: [
      { $oid: "6650e7382268810116dc6ec5" },
      { $oid: "6650eea42268810116dc6ed5" },
    ],
  },
  {
    _id: { $oid: "6654ba90507bbb3a0105dc59" },
    name: "Maria Gomez",
    bio: "Maria, an artist, spends her days painting and hanging out with her dogs. She loves finding new dog-friendly cafes and art spots.",
    looking_for: "a playdate",
    location: "Manchester",
    users_id: "66573f74eb325b3b2f26ab70",
    dog_ids: [
      {
        $oid: "6650ee662268810116dc6ed1",
      },
      {
        $oid: "6650eee32268810116dc6ed7",
      },
    ],
  },
  {
    _id: {
      $oid: "6654ba90507bbb3a0105dc5a",
    },
    name: "Kevin Smith",
    bio: "Kevin, a teacher, enjoys teaching both his students and his German shepherd, Rocky, new tricks. He loves the outdoors and dog sports.",
    looking_for: "friend for my dog",
    location: "Edinburgh",
    users_id: "66573f74eb325b3b2f26ab71",
    dog_ids: [
      {
        $oid: "6650e7382268810116dc6ec4",
      },
    ],
  },
  {
    _id: { $oid: "6654ba90507bbb3a0105dc5b" },
    name: "Emily Davis",
    bio: "Emily, a writer, spends her days crafting stories and taking long walks with her three big dogs. They love exploring new trails and parks.",
    looking_for: "activity recommendations",
    location: "Birmingham",
    users_id: "66573f74eb325b3b2f26ab72",
    dog_ids: [
      {
        $oid: "665ee1d9ffdbd9dbfc63855d",
      },
      {
        $oid: "6650e7382268810116dc6ec6",
      },
      {
        $oid: "6650ee8a2268810116dc6ed3",
      },
    ],
  },
  {
    _id: { $oid: "6654ba90507bbb3a0105dc5d" },
    name: "Rachel Martin",
    bio: "Rachel, a nurse, spends her free time caring for her patients and her Poodle, Daisy. They enjoy swimming and playing fetch at the lake.",
    looking_for: "friend for my dog",
    location: "Birmingham",
    users_id: "66573f74eb325b3b2f26ab74",
    dog_ids: [
      {
        $oid: "6650ee532268810116dc6ecf",
      },
    ],
  },
  {
    _id: { $oid: "6654ba90507bbb3a0105dc5f" },
    name: "Jessica Taylor",
    bio: "Jessica, a baker, loves creating new recipes and spending time with her Chihuahua, Coco. They enjoy visiting dog-friendly bakeries and parks.",
    looking_for: "a playdate",
    location: "London",
    users_id: "66573f74eb325b3b2f26ab76",
    dog_ids: [
      {
        $oid: "6650ee2b2268810116dc6ecb",
      },
    ],
  },
];
