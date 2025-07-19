
import { MapPin, Mail, Phone, Send } from 'lucide-react';


function Contact() {
    const handleSubmit = (event)=>{
        event.preventDefault();

    }
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Contact Header */}
                <div className="bg-gradient-to-r from-blue-600 to-pink-600 p-6 text-center">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                        Get in touch with <span className="text-white">Luxora</span>
                    </h1>
                    <p className="mt-2 text-blue-100">
                        We'd love to hear from you! Reach out for any inquiries or support.
                    </p>
                </div>

                {/* Contact Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
                            <p className="text-gray-600">
                                Have a question or need support? We're here to help you with your shopping journey.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="mt-1 text-pink-600">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Address</h3>
                                    <p className="text-gray-800">Tamluk, West Bengal</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="mt-1 text-pink-600">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Email</h3>
                                    <p className="text-gray-800">madhumita011das@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="mt-1 text-pink-600">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                                    <p className="text-gray-800">+91 8653424874</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-800">Send us a message</h2>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                                    placeholder="Type your message..."
                                    required
                                ></textarea>
                            </div>

                            <button
                            onSubmit={handleSubmit}
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-pink-600 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition duration-200"
                            >
                                <Send className="h-4 w-4" />
                                Send Your Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;