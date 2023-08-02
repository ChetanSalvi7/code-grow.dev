import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Information() {
  const ResumeRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(ResumeRef);
    const fromAnimation = {
      scale: 1.7,
      opacity: 0,
    };

    const toAnimation = (triggerTarget: string) => ({
      scale: 1,
      opacity: 1,
      // clipPath: "circle(100% at 50%, 50%)",
      scrollTrigger: {
        trigger: q(`.${triggerTarget}`),
        delay: 0.7,
        scrub: true,
        scroll: true,
        start: "top bottom",
        end: "top center",
      },
    });
    const cleanGsap = gsap.context(() => {
      gsap.fromTo(q(".heading-text"), fromAnimation, toAnimation("main-items"));
      gsap.fromTo(q(".items-1"), fromAnimation, toAnimation("main-items"));
      gsap.fromTo(q(".items-2"), fromAnimation, toAnimation("main-items"));
      gsap.fromTo(q(".items-3"), fromAnimation, toAnimation("main-items"));
      gsap.fromTo(q(".items-4"), fromAnimation, toAnimation("main-items"));
      gsap.fromTo(q(".items-5"), fromAnimation, toAnimation("main-items"));
      gsap.fromTo(q(".items-6"), fromAnimation, toAnimation("main-items"));
    }, ResumeRef);
    return () => {
      cleanGsap.revert();
    };
  });
  return (
    <div
      className={"mx-auto max-w-7xl px-6 lg:pt-20 min-h-[80vh] relative"}
      id={"resume"}
      ref={ResumeRef}
    >
      <div className="px-4 sm:px-0 heading-text">
        <h3 className=" text-3xl font-semibold leading-7 text-primary">
          Applicant Information
        </h3>
        <p className=" mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and application.
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100 main-items">
        <dl className="divide-y divide-gray-100">
          <div className="items-1 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Chetan Salvi
            </dd>
          </div>
          <div className="items-2 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Application for
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Frontend Developer
            </dd>
          </div>
          <div className="items-3 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              salvi5375@gmail.com
            </dd>
          </div>
          <div className="items-4 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Salary expectation
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              ------------------
            </dd>
          </div>
          <div className="items-5 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              About
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Developer with over one year of experience using React.js,
              JavaScript, Typescript, CSS, SCSS, Redux and HTML to develop web
              applications. More then 3 projects were successfully completed,
              including KYC on-boarding, a hotel management system, and a child
              tracking system. Dedicated to performance optimization,
              scalability, and maintainability, with expertise in Agile
              methodologies and best coding practices. Currently, I am
              responsible for developing and maintaining web applications.
            </dd>
          </div>
          <div className="items-6 px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Attachments
            </dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul
                role="list"
                className="divide-y divide-gray-100 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">
                        resume_front_end_developer.pdf
                      </span>
                      <span className="flex-shrink-0 text-gray-400">1mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <button
                      type="button"
                      onClick={downloadFile}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Download
                    </button>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

function downloadFile() {
  // Replace 'YOUR_FILE_URL' with the actual URL of the file you want to download
  const fileUrl =
    "https://drive.google.com/file/d/1jlcdVtmmhALYLWvZRJOrdYMqnm6N5mq2/view?usp=drive_link";

  // Create a hidden anchor element
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = fileUrl;

  // Replace 'YOUR_FILE_NAME' with the desired name for the downloaded file
  link.setAttribute("download", "resume_front_end_developer.pdf");

  // Add the anchor to the document
  document.body.appendChild(link);

  // Trigger a click event on the anchor element
  link.click();

  // Remove the anchor from the document (optional)
  document.body.removeChild(link);
}
