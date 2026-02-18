import { useState, useRef } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  onNavigate?: (page: string) => void;
}

const Contact = ({ }: ContactProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  // Key state tetap name/email agar onChange bisa match
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Pakai data-key untuk mapping state, bukan name attribute
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const key = (e.target.dataset.key ?? e.target.name) as keyof typeof formData;
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black py-20 px-6 lg:px-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Get In </span>
            <span className="text-green-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Kiri: Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Mail className="text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href="mailto:dimas.asna@gmail.com" className="text-gray-400 hover:text-green-400 transition-colors">
                    dimas.asna@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Phone className="text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <a href="tel:+6287736854680" className="text-gray-400 hover:text-green-400 transition-colors">
                    +62 877-3685-4680
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <MapPin className="text-green-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-gray-400">Bantul, Yogyakarta</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-linear-to-br from-green-500/10 to-green-600/5 border border-green-400/30 rounded-xl">
              <h4 className="text-white font-semibold mb-2">Available for freelance</h4>
              <p className="text-gray-400 text-sm">
                I'm currently available for freelance work and open to discussing new projects and opportunities.
              </p>
            </div>
          </div>

          {/* Kanan: Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="from_name"        
                  data-key="name"        
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="from_email"       // untuk EmailJS template {{from_email}}
                  data-key="email"        // untuk update state formData.email
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"          // state key & EmailJS variable sama: subject
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"          // state key & EmailJS variable sama: message
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-green-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex cursor-pointer items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 disabled:bg-gray-700 text-black disabled:text-gray-400 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 shadow-lg shadow-green-500/50 disabled:shadow-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-400/30 rounded-lg text-green-400 text-center text-sm">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-400/30 rounded-lg text-red-400 text-center text-sm">
                  ✕ Failed to send message. Please try again or contact me directly via email.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;