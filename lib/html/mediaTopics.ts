import type { HtmlTopic } from "./htmlTopic";

export const mediaTopics: Record<string, HtmlTopic> = {
    a: {
        title: "HTML Anchor (Link)",
        description: {
            en: "The <a> tag defines a hyperlink. It allows users to navigate between web pages.",
            bn: "<a> tag hyperlink তৈরি করে যা ব্যবহারকারীকে একটি পেজ থেকে অন্য পেজে যেতে দেয়।",
        },
        realWorld: {
            en: "Links are the backbone of the web. Navigation menus, buttons, and references all use anchor tags.",
            bn: "Link ওয়েবের backbone। Navigation menu, button এবং reference link সবই anchor tag ব্যবহার করে।",
        },
        exampleCode: `<a href="https://google.com">Visit Google</a>

<a href="/about">Go to About Page</a>

<a href="https://example.com" target="_blank">
  Open in New Tab
</a>`,
        questions: [
            {
                questionEn: "What is the purpose of the <a> tag?",
                questionBn: "<a> tag এর কাজ কী?",
                answerEn: "It creates hyperlinks to other pages or resources.",
                answerBn: "এটি অন্য পেজ বা resource এর link তৈরি করে।",
            },
            {
                questionEn: "What does the href attribute do?",
                questionBn: "href attribute কী করে?",
                answerEn: "It specifies the destination URL of the link.",
                answerBn: "এটি link এর destination URL নির্ধারণ করে।",
            },
            {
                questionEn: "What does target=\"_blank\" do?",
                questionBn: "target=\"_blank\" কী করে?",
                answerEn: "It opens the link in a new browser tab.",
                answerBn: "এটি link নতুন tab এ খুলে।",
            },
        ],
    },

    img: {
        title: "HTML Image",
        description: {
            en: "The <img> tag embeds an image in a webpage.",
            bn: "<img> tag ওয়েবপেজে image প্রদর্শনের জন্য ব্যবহৃত হয়।",
        },
        realWorld: {
            en: "Images are used for product photos, blog illustrations, banners, and UI design.",
            bn: "Product photo, blog illustration, banner ও UI design এ image ব্যবহৃত হয়।",
        },
        exampleCode: `<img src="photo.jpg" alt="Beautiful landscape">

<img src="/logo.png" width="200">`,
        questions: [
            {
                questionEn: "Is the <img> tag a void element?",
                questionBn: "<img> কি void element?",
                answerEn: "Yes, it does not have a closing tag.",
                answerBn: "হ্যাঁ, এর closing tag নেই।",
            },
            {
                questionEn: "What is the purpose of the alt attribute?",
                questionBn: "alt attribute এর কাজ কী?",
                answerEn: "It provides alternative text if the image cannot load.",
                answerBn: "Image load না হলে alternative text দেখায়।",
            },
            {
                questionEn: "Why is alt important for accessibility?",
                questionBn: "Accessibility এর জন্য alt কেন গুরুত্বপূর্ণ?",
                answerEn: "Screen readers use alt text to describe images.",
                answerBn: "Screen reader image বর্ণনা করতে alt text ব্যবহার করে।",
            },
        ],
    },

    audio: {
        title: "HTML Audio",
        description: {
            en: "The <audio> element is used to embed sound content in a webpage.",
            bn: "<audio> element ওয়েবপেজে audio যুক্ত করার জন্য ব্যবহৃত হয়।",
        },
        exampleCode: `<audio controls>
  <source src="song.mp3" type="audio/mpeg">
</audio>`,
        questions: [
            {
                questionEn: "What attribute adds playback controls?",
                questionBn: "কোন attribute audio control দেখায়?",
                answerEn: "The controls attribute.",
                answerBn: "controls attribute।",
            },
        ],
    },

    video: {
        title: "HTML Video",
        description: {
            en: "The <video> element embeds video content.",
            bn: "<video> element ওয়েবপেজে video প্রদর্শন করে।",
        },
        exampleCode: `<video width="400" controls>
  <source src="movie.mp4" type="video/mp4">
</video>`,
        questions: [
            {
                questionEn: "What attribute enables video controls?",
                questionBn: "Video control দেখাতে কোন attribute লাগে?",
                answerEn: "The controls attribute.",
                answerBn: "controls attribute।",
            },
        ],
    },

    iframe: {
        title: "HTML Iframe",
        description: {
            en: "The <iframe> element embeds another webpage inside the current page.",
            bn: "<iframe> element অন্য একটি ওয়েবপেজকে বর্তমান পেজের ভিতরে embed করে।",
        },
        exampleCode: `<iframe src="https://example.com" width="600" height="400"></iframe>`,
        questions: [
            {
                questionEn: "What does an iframe do?",
                questionBn: "iframe কী করে?",
                answerEn: "It embeds another webpage.",
                answerBn: "এটি অন্য ওয়েবপেজ embed করে।",
            },
            {
                questionEn: "Where are iframes commonly used?",
                questionBn: "iframe সাধারণত কোথায় ব্যবহার হয়?",
                answerEn: "YouTube embeds, Google Maps, and external content.",
                answerBn: "YouTube embed, Google Map, external content।",
            },
        ],
    },

};