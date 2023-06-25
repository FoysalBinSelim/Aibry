import { useState } from "react"

export default function contactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <div>
      <h1 className="text-center text-xl font-semibold">REQUEST & CONNECT</h1>
      <form
        className="flex flex-col items-center gap-12 py-6"
        name="contact"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Name</label> <br />
          <input
            className="w-80 bg-gray-200 px-4 py-2"
            type="text"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            name="email"
            className="w-80 bg-gray-200 px-4 py-2"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="message">Message</label> <br />
          <textarea
            className="w-80 bg-gray-200 px-4 py-2"
            name="message"
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </p>
            <button className="w-80 transition duration-500 ease-in-out bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-500 py-2 px-4 border border-transparent hover:border-blue-500 rounded">
                Submit Message
            </button>
      </form>
    </div>
  )
}