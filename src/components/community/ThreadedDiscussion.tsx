
import Thread from "./Thread";

// Expanded placeholder threads for better UX exploration
const demoThread = [
  {
    id: 21,
    author: "David Kim",
    verified: true,
    content: "Curious about digital twins for water networks—what are the best tools that integrate with GIS systems?",
    upvotes: 9,
    replies: [
      {
        id: 22,
        author: "Javier Morales",
        verified: false,
        content: "We've used InfoWorks with ArcGIS; integration is powerful but needs solid data standards.",
        upvotes: 6,
        replies: [
          {
            id: 23,
            author: "Nina Lee",
            verified: true,
            content: "Seconded! For smaller utilities, QGIS plugins can work and are open-source friendly.",
            upvotes: 5,
            replies: [],
          },
          {
            id: 24,
            author: "Carlos Martin",
            verified: false,
            content: "What about support for LID modeling or urban drainage?",
            upvotes: 2,
            replies: [
              {
                id: 25,
                author: "Dr. Sarah Chen",
                verified: true,
                content: "SWMM integrations are popular for drainage; can elaborate if needed!",
                upvotes: 4,
                replies: [],
              },
            ],
          },
        ],
      },
      {
        id: 26,
        author: "Arjun Patel",
        verified: false,
        content: "Does anyone have a recommendation for scalable, open APIs?",
        upvotes: 2,
        replies: [
          {
            id: 27,
            author: "Prof. Anna Petrov",
            verified: true,
            content: "Look into Open Geospatial Consortium standards—API4INSPIRE is very promising.",
            upvotes: 2,
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    author: "Vanessa Lee",
    verified: false,
    content: "Great summary. What lessons are most critical for future green hydrogen projects?",
    upvotes: 8,
    replies: [
      {
        id: 12,
        author: "Dr. Sarah Chen",
        verified: true,
        content: "Integration planning and early stakeholder engagement. Policy support is crucial.",
        upvotes: 12,
        replies: [
          {
            id: 13,
            author: "David Kim",
            verified: true,
            content: "Would you prioritize early capex guarantees or PPA clarity?",
            upvotes: 6,
            replies: [],
          },
          {
            id: 14,
            author: "Arjun Patel",
            verified: false,
            content: "Curious if anyone's worked with municipal finance authorities in these contexts?",
            upvotes: 2,
            replies: [
              {
                id: 15,
                author: "Emma Thompson",
                verified: false,
                content: "We've partnered on funding models for hydrogen bus networks in Singapore—happy to chat!",
                upvotes: 3,
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 31,
    author: "Lina Becker",
    verified: false,
    content: "Circular waste models sound great, but who are the most innovative companies implementing these at city scale?",
    upvotes: 4,
    replies: [
      {
        id: 32,
        author: "Julia Becker",
        verified: true,
        content: "Check out CleanLoop—Zurich's partnership got waste diversion to 65%. Also, Veolia pilots in Paris.",
        upvotes: 3,
        replies: [
          {
            id: 33,
            author: "Rahul Singh",
            verified: false,
            content: "In India, BruClean is piloting programs with great tech adoption.",
            upvotes: 1,
            replies: [],
          },
        ],
      },
    ],
  },
];

const ThreadedDiscussion = () => {
  return (
    <div>
      <div className="text-xs text-cyan-400 font-medium mb-2">Threaded Replies Example</div>
      <div>
        {demoThread.map((t) => (
          <Thread key={t.id} post={t} />
        ))}
      </div>
    </div>
  );
};

export default ThreadedDiscussion;
