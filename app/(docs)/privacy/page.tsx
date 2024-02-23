import React from 'react'

const Page = () => (
    <div className="mx-auto max-w-4xl flex flex-col items-center text-center mt-32 lg:mt-48">
        <h1 className="font-bold text-[28px] md:text-5xl lg:leading-tight text-white">
            Privacy Policy
        </h1>
        <div className='mt-10 text-left flex flex-col space-y-12 mb-10 font-satoshi'>
            <div>
                <p className="mt-5 md:mt-3 font-satoshi">
                    This Privacy Policy describes how Espai ({`"we", "us", or "our"`}) collects, uses, and shares
                    information about you when you use our Espai interior decoration app (the {`"App"`}). By using the
                    App, you agree to the collection and use of information in accordance with this policy.
                </p>
            </div>
            <div>
                <h1 className='text-xl mb-4'>
                    1. Information We Collect
                </h1>
                <ul className='list-disc ml-6 flex flex-col space-y-4'>
                    <li>
                        <span className='font-extrabold'>Personal Information:</span> When you use the App, we may
                        collect personal information such as your name, email address, and any other information you
                        choose to provide.
                    </li>
                    <li>
                        <span className='font-extrabold'>Usage Information:</span> When you use the App, we may
                        collect personal information such as your name, email address, and any other information you
                        choose to provide.
                    </li>
                    <li>
                        <span className='font-extrabold'>Device Information:</span> We may collect information about the
                        device you use to access the App, including the device type, operating system, and unique device
                        identifiers.
                    </li>
                </ul>
            </div>


            <div>
                <h1 className='text-xl mb-4'>
                    2. How We Use Your Information
                </h1>
                <h2 className='mb-4'>We may use the information we collect for various purposes, including:</h2>
                <ul className='list-disc ml-6 flex flex-col space-y-4'>
                    <li>
                        <span className='font-extrabold'>Providing and Improving the App:</span> We use the information
                        to provide and improve the {`App's`} features and functionality.
                    </li>
                    <li>
                        <span className='font-extrabold'>Communicating with You:</span> We may use your information to
                        communicate with you about the App, including sending you updates and notifications.
                    </li>
                    <li>
                        <span className='font-extrabold'>Personalizing Content:</span> We may use your information to
                        personalize the content and recommendations we provide to you.
                    </li>
                </ul>
            </div>

            <div>
                <h1 className='text-xl mb-4'>
                    3. Information Sharing
                </h1>
                <h2 className='mb-4'>We may share your information with third parties in the following
                    circumstances:</h2>
                <ul className='list-disc ml-6 flex flex-col space-y-4'>
                    <li>
                        <span className='font-extrabold'>Service Providers:</span> We may share your information with
                        third-party service providers who help us operate the App.
                    </li>
                    <li>
                        <span className='font-extrabold'>Legal Requirements:</span> We may share your information in
                        response to a legal request, such as a court order or subpoena.
                    </li>
                </ul>
            </div>

            <div>
                <h1 className='text-xl mb-4'>
                    4. Your Choices
                </h1>
                <h2 className='mb-4'>
                    You may choose to limit the information you provide to us or opt out of certain types of data
                    collection. However, please note that this may limit your ability to use certain features of the
                    App.
                </h2>
            </div>

            <div>
                <h1 className='text-xl mb-4'>
                    5. Data Security
                </h1>
                <h2 className='mb-4'>
                    We take reasonable measures to protect the information we collect from unauthorized access or
                    disclosure. However, no method of transmission over the internet or electronic storage is 100%
                    secure.
                </h2>
            </div>

            <div>
                <h1 className='text-xl mb-4'>
                    6. Changes to this Privacy Policy
                </h1>
                <h2 className='mb-4'>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page.
                </h2>
            </div>

            <div>
                <h1 className='text-xl mb-4'>
                    7. Contact Us
                </h1>
                <h2 className='mb-4'>
                    If you have any questions about this Privacy Policy, please contact us at <a href='mailto:hello@espai.co' className='text-blue-400'>hello@espai.co</a>.
                </h2>
            </div>
        </div>
    </div>
)

export default Page