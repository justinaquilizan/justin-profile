import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: null });
      console.log("Form submitted:", formData);
      // Reset form after submission (in a real app, you'd do this after successful API response)
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  // Contact information
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "example@email.com",
      link: "mailto:example@email.com",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+1 (123) 456-7890",
      link: "tel:+11234567890",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Lorem Ipsum City, Country",
      link: null,
    },
  ];

  // Social media
  const socialMedia = [
    {
      icon: <Github size={20} />,
      name: "GitHub",
      link: "https://github.com/",
    },
    {
      icon: <Linkedin size={20} />,
      name: "LinkedIn",
      link: "https://linkedin.com/",
    },
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className="flex items-center mb-6">
            <Mail size={28} className="mr-3 text-black dark:text-white" />
            <h1 className="text-4xl md:text-5xl font-bold">Contact Me</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            ornare magna eros, eu pellentesque tortor vestibulum ut.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

              {formStatus.submitted ? (
                <div className="bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-100 p-4 rounded-md mb-6">
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="mt-1">
                    Thank you for your message. I'll get back to you as soon as
                    possible.
                  </p>
                  <button
                    className="mt-4 text-green-700 dark:text-green-200 font-medium underline"
                    onClick={() =>
                      setFormStatus((prev) => ({ ...prev, submitted: false }))
                    }>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md font-medium flex items-center justify-center w-full transition-all hover:bg-gray-800 dark:hover:bg-gray-200 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed">
                    {formStatus.submitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1 text-gray-800 dark:text-gray-200 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.label}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 dark:text-gray-300">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>

              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 dark:bg-gray-700 h-12 w-12 rounded-full flex items-center justify-center text-gray-800 dark:text-gray-200 transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transform hover:-translate-y-1"
                    aria-label={social.name}>
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-medium mb-4">Office Hours</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Monday - Friday: 9:00 AM - 5:00 PM
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Feel free to reach out anytime, and I'll get back to you as
                  soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
