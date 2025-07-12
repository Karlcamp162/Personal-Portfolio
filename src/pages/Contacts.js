import React from 'react';
import NavBar from './components/NavBar';
import Footer from '../components/Footer';
import { FaGithub, FaSlack, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contacts = () => (
  <>
    <NavBar />
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-900 via-purple-800 to-purple-900 w-full">
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 w-full">
        {/* Header and Subheading */}
        <h1 className="font-pixel text-5xl sm:text-6xl text-yellow-300 mb-2 text-center font-bold tracking-widest">SEND ME A MESSAGE</h1>
        <p className="font-pixel text-white text-center max-w-xl mb-10 text-sm">
          Fill out the form below and I’ll get back to you as soon as possible!
        </p>
        {/* Grid Layout */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xanbwyej"
            method="POST"
            className="bg-[#2d0a52] rounded-2xl shadow-2xl p-8 flex flex-col gap-6 border-4 border-purple-700 font-pixel"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-white mb-2 font-bold font-pixel">FIRST NAME *</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first"
                  className="!font-sans w-full px-3 py-2 rounded bg-purple-900 text-yellow-300 border-2 border-yellow-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-white mb-2 font-bold font-pixel">LAST NAME *</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last"
                  className="!font-sans w-full px-3 py-2 rounded bg-purple-900 text-yellow-300 border-2 border-yellow-300 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-white mb-2 font-bold font-pixel">EMAIL ADDRESS *</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                className="!font-sans w-full px-3 py-2 rounded bg-purple-900 text-yellow-300 border-2 border-yellow-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-white mb-2 font-bold font-pixel">SUBJECT *</label>
              <select name="subject" className="!font-sans w-full px-3 py-2 rounded bg-purple-900 text-yellow-300 border-2 border-yellow-300 focus:outline-none">
                <option value="">Select a topic...</option>
                <option value="collab">Collaboration</option>
                <option value="question">Question</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-white mb-2 font-bold font-pixel">MESSAGE *</label>
              <textarea
                name="message"
                placeholder="Tell me more about your inquiry..."
                rows={4}
                className="!font-sans w-full px-3 py-2 rounded bg-purple-900 text-yellow-300 border-2 border-yellow-300 focus:outline-none resize-none"
              />
            </div>
            <button type="submit" className="w-full mt-2 bg-purple-700 text-white font-pixel py-3 rounded hover:bg-purple-600 transition">SEND MESSAGE</button>
          </form>
          {/* Info Panels */}
          <div className="flex flex-col gap-6">
            {/* Office Location */}
            <div className="border-2 border-purple-500 rounded-xl p-6 bg-[#2d0a52] font-pixel">
              <div className="flex items-center mb-2">
                <span className="text-cyan-300 text-2xl mr-2">🏢</span>
                <span className="text-white text-xl font-bold tracking-widest">HOME LOCATION</span>
              </div>
              <div className="text-white text-xs mt-2">Tandag City, Philippines</div>
            </div>
            {/* Most Responsive */}
            <div className="border-2 border-purple-500 rounded-xl p-6 bg-[#2d0a52] font-pixel">
              <div className="flex items-center mb-2">
                <span className="text-yellow-300 text-2xl mr-2">🕒</span>
                <span className="text-white text-xl font-bold tracking-widest">MOST RESPONSIVE</span>
              </div>
              <div className="text-white text-xs mt-2">Weekdays: <span className="text-green-300">8:00 AM - 11:00 PM PHST</span></div>
              <div className="text-white text-xs">Weekends: <span className="text-green-300">10:00 AM - 11:00 PM PHST</span></div>
            </div>
            {/* Follow Us */}
            <div className="border-2 border-purple-500 rounded-xl p-6 bg-[#2d0a52] font-pixel">
              <div className="flex items-center mb-4">
                <span className="text-purple-300 text-2xl mr-2">&#x1F517;</span>
                <span className="text-white text-xl font-bold tracking-widest">FOLLOW US</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a href="https://thesmartbridge.enterprise.slack.com/team/U0938U429DW" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-purple-800 hover:bg-purple-700 text-white px-3 py-2 rounded transition"><FaSlack /> Slack</a>
                <a href="https://github.com/Karlcamp162" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-purple-800 hover:bg-purple-700 text-white px-3 py-2 rounded transition"><FaGithub /> GitHub</a>
                <a href="https://www.linkedin.com/in/karl-louise-campos-492436192" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-purple-800 hover:bg-purple-700 text-white px-3 py-2 rounded transition"><FaLinkedin /> LinkedIn</a>
                <a href="https://wa.me/639765555519" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-purple-800 hover:bg-purple-700 text-white px-3 py-2 rounded transition"><FaWhatsapp /> WhatsApp</a>
                <a href="mailto:ckarlcamp@gmail.com" className="flex items-center gap-2 bg-purple-800 hover:bg-purple-700 text-white px-3 py-2 rounded transition col-span-2"><FaEnvelope /> Email</a>
              </div>
            </div>
          </div>
        </div>
        {/* Map Section (restored) */}
        <div className="w-full flex flex-col items-center mt-12 mb-0">
          <h1 className="font-pixel text-5xl sm:text-5xl text-yellow-300 mb-2 text-center font-bold">MY CITY</h1>
          <p className="font-pixel text-white text-center mb-8">
            Proudly based in Tandag City, Philippines
          </p>
          <div className="w-full max-w-3xl bg-[#2d0a52] border-4 border-purple-700 rounded-2xl mx-auto p-8 flex flex-col items-center shadow-2xl">
            <div className="w-full h-64 rounded-xl mb-6 overflow-hidden flex items-center justify-center">
              <iframe
                title="Tandag City Map"
                src="https://www.google.com/maps?q=Tandag+City,+Philippines&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl w-full h-full"
              ></iframe>
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-around mt-4 gap-6">
              <div className="flex flex-col items-center">
                <span className="font-pixel text-yellow-300 text-3xl mb-2">🌊</span>
                <div className="font-pixel text-white text-lg">Nature</div>
                <div className="font-pixel text-purple-200 text-xs mt-1">Beaches &amp; Rivers</div>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-pixel text-yellow-300 text-3xl mb-2">🍚</span>
                <div className="font-pixel text-white text-lg">Local Food</div>
                <div className="font-pixel text-purple-200 text-xs mt-1">Seafood, Rice, Delicacies</div>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-pixel text-yellow-300 text-3xl mb-2">🎉</span>
                <div className="font-pixel text-white text-lg">Culture</div>
                <div className="font-pixel text-purple-200 text-xs mt-1">Festivals &amp; Traditions</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer 
        slackUrl="https://thesmartbridge.enterprise.slack.com/team/U0938U429DW"
        githubUrl="https://github.com/Karlcamp162"
        linkedinUrl="https://www.linkedin.com/in/karl-louise-campos-492436192"
        whatsappUrl="https://wa.me/639765555519"
        emailUrl="mailto:ckarlcamp@gmail.com"
        facebookUrl="https://www.facebook.com/karlcamp.campos"
      />
    </div>
  </>
);

export default Contacts;