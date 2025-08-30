import React, { use, useState } from "react";
import { useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    passwordRef.current.type = "text";
    if (ref.current.src.includes("/eye-block.png")) {
      ref.current.src = "/eye-open.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "/eye-block.png";
      passwordRef.current.type = "text";
    }
  };

  const savePassword = () => {
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const copyText = (text) => {
    toast("Copied to Clipboard 🔗", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
    });
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        
      />
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className="bg-yellow-200 mycontainer rounded-lg  my-2">
        <h1 className="text-4xl font-bold text- text-center">
          <span className="text-red-700"> &lt; </span>
          <span>Pass</span>
          <span className="text-red-700">OP/&gt; </span>
        </h1>
        <p className="text-center text-red-900 text-lg">
          Your one-stop solution for password management.
        </p>
        <div className="text-white flex flex-col p-4 text-black gap-8 items-center">
          <input
            value={form.site}
            onChange={handleChange}
            placeholder="Enter website name"
            className="rounded-full border border-red-700 w-full p-4 py-1"
            type="text"
            name="site"
            id=""
          />

          <div className="flex w-full justify-between gap-3">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              type="text"
              className="rounded-full border border-red-700 w-full p-4 py-1"
              name="username"
              id=""
            />
            <div className="relative">
              <input
                ref={passwordRef}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                type="password"
                className="rounded-full border border-red-700 w-full p-4 py-1"
                name="password"
                id=""
              />
              <span
                className="absolute right-[4px] top-[4px] cursor-pointer "
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={30}
                  src="/eye-open.png"
                  alt="eye"
                />
              </span>
            </div>
          </div>

          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 bg-red-600 hover:bg-red-500 rounded-full px-8 py-2 w-fit border-2 border-red-700"
          >
            <lord-icon
              src="https://cdn.lordicon.com/vjgknpfx.json"
              trigger="hover"
            ></lord-icon>
            Save Password
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-2xl py-2">Your Saved Passwords</h2>
          {passwordArray.length === 0 && <div>No passwords saved yet.</div>}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-red-800">
                <tr>
                  <th className="py-2">site</th>
                  <th className="py-2">username</th>
                  <th className="py-2">password</th>
                  <th className="py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-red-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 border border-white text-center">
                        <div className="items-center justify-center flex">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div className="" onClick={() => copyText(item.site)}>
                            <img
                              className="w-6 mx-2 cursor-pointer"
                              src="copy.png"
                              alt="copy logo"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center ">
                        <div className="items-center justify-center flex">
                          {item.username}
                          <div
                            className=""
                            onClick={() => {
                              copyText(item.username);
                            }}
                          >
                            <img
                              className="w-6 mx-2 cursor-pointer"
                              src="copy.png"
                              alt="copy logo"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="py-2 border border-white text-center">
                        <div className="items-center justify-center flex">
                          {item.password}
                          <div
                            className=""
                            onClick={() => {
                              copyText(item.password);
                            }}
                          >
                            <img
                              className="w-6 mx-2 cursor-pointer"
                              src="copy.png"
                              alt="copy logo"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="flex justify-center items-center py-2 border border-white text-center">
                        <span className="cursor-pointer mx-2">
                          <img className="w-10" src="edit.png" alt="" />
                        </span>
                        <span className="cursor-pointer mx-2">
                          <img className="w-9" src="delete.png" alt="" />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
