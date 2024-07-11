import React from "react";
import Header from "../components/Header";
const policyData = [
  {
    sectionTitle: "PERSONAL DATA",
    subsections: [
      {
        title: "COLLECTION AND PROCESSING OF PERSONAL DATA",
        content: `Sea Wave Logistics is committed to preserving the privacy of users of our websites. When you visit our web pages, our web servers always temporarily save for security purposes the connection data of the computer connecting to our site, a list of the web pages that you visit within our site, the date and duration of your visit, the identification data of the type of browser and operation system used as well as the website through which you linked to our site. Additional personal information such as your name, address, telephone number or e-mail address is not collected unless you provide this data voluntarily, e.g. while completing an online contact form, as part of a registration, survey, competition, fulfillment of contract or an information request.`,
      },
      {
        title: "UTILIZATION AND PASSING ON OF PERSONAL DATA",
        content: `We use the personal data which you have made available to us exclusively for technical administration of the web pages and to fulfill your wishes and requests - thus primarily for fulfillment of a contract concluded with you or to answer your request. In turn, it helps us improve the services we offer to you, and to make our website's content and services easier to use and more appropriate to you.`,
      },
    ],
  },
  {
    sectionTitle: "GOOGLE ANALYTICS",
    subsections: [
      {
        title: "USE OF WEB TRACKING",
        content: `We use tracking software to determine how many users visit our website and how often. We do not use this software to collect individual personal data or individual IP addresses. The data are used solely in anonymous and summarized form for statistical purposes and for developing the website.`,
      },
    ],
  },
  {
    sectionTitle: "GOOGLE ADWORDS",
    subsections: [
      {
        title: "USE OF GOOGLE ADWORDS CONVERSION TRACKING",
        content: `We use the online advertising program "Google AdWords" and the conversion tracking function of Google AdWords. Google conversion tracking is an analytics service provided by Google Inc. (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; "Google"). When you click on an ad delivered by Google, a conversion tracking cookie is placed on your computer. These cookies expire after 30 days, do not contain any personal data and therefore cannot be used to identify you personally. If you visit certain pages on our website and the cookie has not yet expired, we and Google can tell that you clicked on the ad and were directed to that page.`,
      },
    ],
  },
  {
    sectionTitle: "SECURITY",
    subsections: [
      {
        title: "PROTECTION OF YOUR PERSONAL DATA",
        content: `Sea Wave Logistics takes all of the necessary technical and organizational security measures to protect your personal data from being lost or misused. For instance, your data is saved in a secure operating environment which is not accessible to the public. In certain cases, your personal data is encrypted by Secure Socket Layer technology (SSL) during transmission. This means that an approved encryption procedure is used for communication between your computer and the Sea Wave Logistics servers if your browser supports SSL.`,
      },
    ],
  },
  {
    sectionTitle: "COOKIES",
    subsections: [
      {
        title: "USE OF COOKIES",
        content: `"Cookies" are small files that enable us to store information related to your PC and you, the user, specifically, while you visit one of our websites. Cookies help us to determine how frequently our internet pages are accessed as well as the number of users. And they help us configure our offers so that they are as convenient and efficient as possible for you. On the one hand, we use what are called "session cookies", those that are stored exclusively for the duration of your visit to one of our internet pages. On the other, we use "persistent cookies" for retaining information about visitors who repeatedly access one of our internet pages.`,
      },
      {
        title: "Salesforce Marketing Cloud Tracking Cookie",
        content: `The content of this persistent tracking cookie is limited to an identification number and is generally used in exactly the same way as all of our other persistent cookies. However, if you are already a Sea Wave Logistics customer contact or you contact Sea Wave Logistics using certain online contact forms in the Logistics content area, your email address is added to the cookie to create an individual profile of your online activities. These same contact forms also provide you with an option to sign up for email marketing updates. By giving your permission, this also allows us to provide you with personalized content, offers or promotions that may interest you. Should you choose not to sign up for email marketing updates, you will not be contacted in the future and your email address will only be used confidentially by Sea Wave Logistics internally to understand your individual online activities. This means that we can still continue to deliver new and improved website content to suit your specific needs. You can learn more about the Salesforce Marketing Cloud Tracking cookie in the Sea Wave Logistics list of Cookies below. Alternatively, to opt out of being tracked by Salesforce Marketing Cloud across all websites (or to reverse your setting if you have previously opted out), you can do so under 'How to Manage Cookies' below.`,
      },
    ],
  },
  {
    sectionTitle: "OVERVIEW COOKIES",
    subsections: [
      {
        title: "LIST OF COOKIES AND CATEGORIZATION",
        content: `We have provided details of all cookies used on Sea Wave Logistics websites in the list below. All cookies in the list above have been categorized according to 4 numbered groups. The categories are as follows:
  1. Strictly Necessary: These cookies are essential in order to enable you to move around the website and use its features. Without these cookies, services you have asked for cannot be provided.
  2. Performance: These cookies collect information about how visitors use a website, for instance which pages visitors go to most often. These cookies don’t collect information that identifies a visitor. All information these cookies collect is aggregated and therefore anonymous. It is only used to improve how a website works.`,
      },
    ],
  },
];

const Policy = () => {
  return (
    <div>
       <div className="absolute z-10  ">
        <Header />
      </div>
      <div className="p-4 lg:p-8">
      <h1 className="text-3xl font-bold mb-6">Our Policy</h1>
      {policyData.map((section, sectionIndex) => (
        <section key={sectionIndex} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {section.sectionTitle}
          </h2>
          {section.subsections.map((subsection, subsectionIndex) => (
            <div key={subsectionIndex} className="mb-4">
              <h3 className="text-xl font-semibold">{subsection.title}</h3>
              <p className="mb-4">{subsection.content}</p>
            </div>
          ))}
        </section>
      ))}
    </div>
    </div>
  );
};

export default Policy;
