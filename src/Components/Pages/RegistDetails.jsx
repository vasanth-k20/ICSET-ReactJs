import React from 'react'

export default function RegistDetails() {
    return (
        <div>
            <div>
                {/* Banner Section */}
                <div className="relative bg-[#881B1B] py-20 text-white text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold relative z-10 opacity-85">Registration Details</h1>
                    <div className="absolute inset-0 mt-33 px-10 opacity-10 flex items-center justify-start">
                        <h1 className="text-3xl hidden md:block md:text-5xl lg:text-6xl font-bold text-[#f99696]">Registration and Payment</h1>
                    </div>
                </div>
            </div>
            <section className="w-full lg:w-[60%] mx-auto my-12 text-center px-4">
                {/* Registration Details */}
                <div className="text-left">
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">Registration Fees</h3>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                        <li>Early Bird Registration (Before June 31, 2025): $500</li>
                        <li>Standard Registration (After June 31, 2025): $600</li>
                        <li>Student Registration: $300 (Valid student ID required)</li>
                    </ul>

                    {/* Bank Details */}
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">Bank Details</h3>
                    <div className="space-y-2 mb-6">
                        <p><strong>Bank Name:</strong> Example Bank</p>
                        <p><strong>Account Name:</strong> ICSET 2025</p>
                        <p><strong>Account Number:</strong> 1234567890</p>
                        <p><strong>SWIFT Code:</strong> EXMPUS33</p>
                        <p><strong>Bank Address:</strong> 123 Main Street, London, United Kingdom</p>
                    </div>

                    {/* Payment Instructions */}
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">Payment Instructions</h3>
                    <ol className="list-decimal list-inside space-y-2 mb-6">
                        <li>Transfer the registration fee to the bank account listed above.</li>
                        <li>Include your full name and registration ID in the payment reference.</li>
                        <li>Send a copy of the payment receipt to <strong>registration@icset2025.org</strong>.</li>
                        <li>Wait for a confirmation email from the organizing committee.</li>
                    </ol>

                    {/* Author Registration Policy */}
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">Author Registration Policy</h3>
                    <div className="space-y-2 mb-6">
                        <p>
                            An accepted paper will be published in the conference proceedings on IEEE Xplore only if the following two conditions are met:
                        </p>
                        <ol className="list-decimal list-inside pl-5">
                            <li>
                                The full-fee (which can be the fee of CAS, IEEE Member, or Non-Member, but NOT Student Member or IEEE Life Member) registration payment for the presenting author is received and correctly processed by <strong>June 14, 2025</strong>. This policy is applicable for all accepted papers.
                            </li>
                            <li>
                                The author presents the paper in person at the conference venue.
                            </li>
                        </ol>
                        <p>
                            Not meeting either of the above two requirements will result in the paper being flagged as “no show” and removed from publishing in the conference proceedings on IEEE Xplore.
                        </p>
                    </div>

                    {/* Covering The Expenses for Paper Presentation & Publication */}
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">
                        Covering The Expenses for Paper Presentation & Publication
                    </h3>
                    <div className="space-y-2 mb-6">
                        <p>
                            One author registration will cover the publication expenses of up to two accepted papers. For each additional accepted paper associated with the same registration, a <strong>$150 USD</strong> fee will be charged.
                        </p>
                        <p>
                            In the case no registration has been received and correctly processed to cover the paper publication, the conference organizers will contact the authors before the paper is removed from the proceedings.
                        </p>
                    </div>

                    {/* Invitation Letters */}
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">Invitation Letters</h3>
                    <div className="space-y-2 mb-6">
                        <p>
                            <strong>IMPORTANT:</strong> Visa letters will only be issued once you have registered and paid all necessary fees.
                        </p>
                        <p>
                            Letters can be downloaded directly from the registration confirmation email.
                        </p>
                    </div>

                    {/* Registration Problems & Further Information */}
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">
                        Registration Problems & Further Information
                    </h3>
                    <div className="space-y-2">
                        <p>
                            For further information concerning your registration, please contact the ICSET Conference Manager:
                        </p>
                        <p>
                            <strong>Katherine Pierce</strong><br />
                            Email: <a href="mailto:ckravec@conferencecatalysts.com" className="text-blue-600">pckatherine@conferencecatalysts.com</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
