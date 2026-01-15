import { useState } from "react";


export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "76e6d316-aba0-421c-96fc-7820df1518d6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Success! I will get back to you as soon as possible.");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  
  return (
    <div className="text-lg">
      <p className="font-bold mb-4 text-2xl">Contact Me</p>
      <form onSubmit={onSubmit} className="flex flex-col align-middle gap-4 font-[--font-playfair-display]">
        <div className="flex flex-row gap-4 items-center">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="form-input rounded-md border-transparent focus:ring-0 w-48 sm:w-64 md:w-80 lg:w-96" required/>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <label htmlFor="name">Email</label>
          <input type="text" name="email" className="form-input rounded-md border-transparent focus:ring-0 w-48 sm:w-64 md:w-80 lg:w-96" required/>
        </div>
        <div className="flex flex-row gap-4 items-start">
          <label htmlFor="message">Message</label>
          <textarea name="message" rows={4} className="form-textarea rounded-md border-transparent focus:ring-0 w-48 sm:w-64 md:w-80 lg:w-96" required></textarea>
        </div>
        <button type="submit" className="rounded-md px-4 py-2 dark:bg-cape-cod-900 hover:bg-cape-cod-300 dark:hover:bg-cape-cod-800 bg-cape-cod-200 transition-colors cursor-pointer w-min">Submit</button>
        <p>{result}</p>
      </form>
    </div>
    );
}