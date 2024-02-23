import React from 'react'

const Page = () => (
    <div className="mx-auto max-w-4xl flex flex-col items-center text-center mt-32 lg:mt-48">
        <h1 className="font-bold text-[28px] md:text-5xl lg:leading-tight text-white">
            Terms of Use
        </h1>
        <div className='mt-10 text-left flex flex-col space-y-16 mb-10 font-satoshi'>
            <div>
                <h1 className='text-xl '>1. Introduction</h1>
                <p className="mt-5 md:mt-3">
                    Welcome to Espai! These Terms of Use govern your use of the Espai app (the {`"App"`}). By using the
                    App, you agree to be bound by these Terms of Use. If you do not agree to these Terms of Use, please
                    do not use the App.
                </p>
            </div>

            <div>
                <h1 className=''>2. Changes to the Terms of Use</h1>
                <p className="mt-5 md:mt-3 ">
                    We may update these Terms of Use from time to time. We will notify you of any changes by posting the
                    new Terms of Use on this page. Your continued use of the App after any such changes constitutes your
                    acceptance of the new Terms of Use.
                </p>
            </div>

            <div>
                <h1>3. Use of the App</h1>
                <p className="mt-5 md:mt-3">
                    You may use the App for your personal, non-commercial use only. You may not use the App for any
                    illegal or unauthorized purpose. You agree to comply with all applicable laws and regulations.
                </p>
            </div>

            <div>
                <h1>4. Intellectual Property</h1>
                <p className="mt-5 md:mt-3">
                    All content and materials available on the App, including but not limited to text, graphics, logos,
                    button icons, images, audio clips, and data compilations, are the property of Espai or its
                    content suppliers and are protected by Nigerian and international copyright laws.
                </p>
            </div>

            <div>
                <h1>5. Disclaimer of Warranties</h1>
                <p className="mt-5 md:mt-3">
                    The App is provided {`"as is"`} and {`"as available"`} without any warranties of any kind, express
                    or implied. We do not warrant that the App will be uninterrupted or error-free, nor do we make any
                    warranty as to the results that may be obtained from the use of the App.

                </p>
            </div>

            <div>
                <h1>6. Limitation of Liability
                </h1>
                <p className="mt-5 md:mt-3">
                    In no event shall Espai be liable for any direct, indirect, incidental, special, or
                    consequential damages arising out of or in any way connected with the use of the App or with the
                    delay or inability to use the App, whether based on contract, tort, strict liability, or otherwise.
                </p>
            </div>

            <div>
                <h1>7. Governing Law
                </h1>
                <p className="mt-5 md:mt-3">
                    In no event shall Espai be liable for any direct, indirect, incidental, special, or
                    consequential damages arising out of or in any way connected with the use of the App or with the
                    delay or inability to use the App, whether based on contract, tort, strict liability, or otherwise.
                </p>
            </div>
            <div>
                <h1>8. Contact Us
                </h1>
                <p className="mt-5 md:mt-3">
                    If you have any questions about these Terms of Use, please contact us at <a
                    href='mailto:hello@espai.co' className='text-blue-400'>hello@espai.co</a>
                </p>
            </div>

        </div>
    </div>
)

export default Page