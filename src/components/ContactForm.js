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
      setResult("Success!");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  
  return (
    <div>
      <div className="font-bold text-xl mb-2">contact me</div>
      <form onSubmit={onSubmit} className="flex flex-col align-middle gap-4">
        <div className="flex flex-row gap-2 items-center">
          <label htmlFor="name">name</label>
          <input type="text" name="name" className="form-input rounded-md border-transparent focus:ring-0" required/>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <label htmlFor="name">email</label>
          <input type="text" name="email" className="form-input rounded-md border-transparent focus:ring-0" required/>
        </div>
        <div className="flex flex-row gap-2 items-start">
          <label htmlFor="message">message</label>
          <textarea name="message" rows={4} className="form-textarea rounded-md border-transparent focus:ring-0" required></textarea>
        </div>
        <button type="submit" className="rounded-md px-4 py-2 dark:bg-cape-cod-900 hover:bg-cape-cod-300 dark:hover:bg-cape-cod-800 bg-cape-cod-200 transition-colors cursor-pointer w-min">submit</button>
        <p>{result}</p>
      </form>
    </div>
    );
}