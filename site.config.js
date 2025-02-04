const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Ashfakh",
    image: "/dp.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Software Architect",
    bio: "I write, Sometimes stories and sometimes code",
    email: "ashfakhrithu@gmail.com",
    linkedin: "ashfakh",
    github: "ashfakh",
    instagram: "ashfakh__",
  },
  projects: [
    {
      name: `hermes`,
      href: "https://github.com/Ashfakh/hermes",
    },
    {
      name: `personal-web`,
      href: "https://github.com/Ashfakh/personal-web",
    },
    {
      name: `qna-assistant`,
      href: "https://github.com/Ashfakh/qna-assistant",
    }
  ],
  // blog setting (required)
  blog: {
    title: "Ashfakh",
    description: "welcome to ashfakh.in!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://ashfakh.in",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "Ashfakh/personal-web",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }