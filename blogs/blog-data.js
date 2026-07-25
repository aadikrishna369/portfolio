// ============================================================================
// BLOG POST DATA — single source of truth for blogs/all.html
// ============================================================================
// This list powers the "All Posts" page (with pagination, 10 per page).
// It does NOT control the homepage's blog section — that grid on index.html
// is still hand-written on purpose, per the note there.
//
// TO ADD A NEW POST TO THE "ALL POSTS" PAGE:
//   1. Write the actual post: duplicate /blogs/dying-light-review.html,
//      rename it, edit its content.
//   2. Duplicate one object below and fill it in. New posts can go
//      anywhere in the array — all.html always shows the newest 10 first
//      if you keep this list newest-first.
//   3. Optional: for the banner image, use one of the ready-made
//      placeholders in /assets (blog-banner-placeholder-1.svg or
//      -2.svg) until you have real cover art, or add your own image
//      to /assets and point "banner" at it.
//   4. If you also want the post to appear on the homepage, add a
//      matching <article class="blog-card"> block in index.html
//      (see the BLOG GRID comment there) — keep it to 2-3 posts max.
// ============================================================================

const blogPosts = [
  {
    slug: "dying-light-review",
    title: "Dying Light: Why Its Parkour Still Holds Up",
    excerpt: "A look at what makes Dying Light's movement system click, and what I've been taking from it while thinking about my own gameplay systems.",
    date: "July 2026",
    readTime: "6 min read",
    category: "GAME NOTES",
    url: "dying-light-review.html",
    banner: "../assets/blog-banner-dying-light.svg"
  }

  // Add future posts above this line.
];
