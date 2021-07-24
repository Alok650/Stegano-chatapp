import React from "react";
import steg from "../steganography";
import { FileDrop } from "react-file-drop";

class Decrypt extends React.Component {
  state = {
    dataImageURI: "",
    decodedSecret: " ",
    decodingError: false,
  };

  readURL(input_file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        dataImageURI: e.target.result,
      });
      document.querySelector("#rawcodeimg").src = e.target.result;
    };
    reader.readAsDataURL(input_file[0]);
  }

  // encodeTextIntoImage() {
  //   if (
  //     this.state.dataImageURI &&
  //     document.querySelector("#secret").value.length
  //   ) {
  //     document.querySelector("#encodeimg").src = steg.encode(
  //       document.querySelector("#secret").value,
  //       this.state.dataImageURI
  //     );
  //   }
  // }

  // fileDropEncode(input_file) {
  //   let reader = new FileReader();
  //   reader.onload = (e) => {
  //     this.setState({
  //       dataImageURI: e.target.result,
  //     });
  //     document.querySelector("#rawcodeimg").src = e.target.result;
  //   };
  //   reader.readAsDataURL(input_file[0]);
  // }

  // encodeDroppedImage() {
  //   if (
  //     this.state.dataImageURI &&
  //     document.querySelector("#secret").value.length
  //   ) {
  //     document.querySelector("#encodeimg").src = steg.encode(
  //       document.querySelector("#secret").value,
  //       this.state.dataImageURI
  //     );
  //   }
  // }

  fileDropDecode = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.item(0);
    this.decodeDroppedImage(file);
  };

  decodeDroppedImage(input_file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      try {
        this.setState({
          decodedSecret: this.cleanString(steg.decode(e.target.result)),
          decodingError: false,
        });
      } catch (e) {
        // give notifaction that image contains no readable secret
        this.setState({
          decodingError: true,
          decodedSecret: " ",
        });
      }
    };
    reader.readAsDataURL(input_file);
  }

  cleanString = (input) => {
    var output = "";
    for (var i = 0; i < input.length; i++) {
      if (input.charCodeAt(i) <= 127) {
        output += input.charAt(i);
      }
    }
    return output;
  };

  decodeImage(input_file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      try {
        this.setState({
          decodedSecret: this.cleanString(steg.decode(e.target.result)),
          decodingError: false,
        });
      } catch (e) {
        // give notifaction that image contains no readable secret
        this.setState({
          decodingError: true,
          decodedSecret: " ",
        });
      }
    };
    reader.readAsDataURL(input_file[0]);
  }

  triggerEncodeInputFile = () => this.encodeFileInput.click();
  triggerDecodeInputFile = () => this.decodeFileInput.click();

  render() {
    return (
      <div className="Decrypt">
        {/* ONLINE TOOL SECTION */}
        <div className="bg-gray-800 pb-64">
          <div>
            {/* <div className="flex flex-center leading-8">
              <div className="mt-6 grid grid-cols-12 flex-1">
                <div className="col-span-12">
                  <h3 class="text-xl leading-6 font-medium text-gray-300">
                    Information Hiding
                  </h3>
                  <p class="mt-1 text-sm leading-5 text-gray-400">
                    Upload an image file to hide information within
                  </p>
                </div>
                <div className="col-span-4 sm:col-span-2 lg:col-span-3"></div>
                <div className="col-span-4 sm:col-span-8 lg:col-span-6">
                  <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-none">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-500"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="mt-1 text-sm text-gray-400">
                        <button
                          type="button"
                          onClick={() => this.triggerEncodeInputFile()}
                          className="font-medium text-indigo-500 hover:text-indigo-400 focus:outline-none focus:underline transition duration-150 ease-in-out"
                        >
                          Click here to upload a file
                        </button>{" "}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-4 sm:col-span-2 lg:col-span-3"></div> */}

                {/* Textarea for secret */}
                {/* <p class="mt-1 text-sm leading-5 text-gray-400 col-span-12 py-2">
                  Secret Information
                </p> */}

                {/* Textarea for secret */}
                {/* <div className="col-span-5 sm:col-span-4"></div>
                <textarea
                  id="secret"
                  rows="3"
                  class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 col-span-2 sm:col-span-4 mb-4 bg-gray-300 opacity-75"
                ></textarea>
                <div className="col-span-5 sm:col-span-4 "></div> */}

                {/* Decrypt button */}
                {/* <div className="col-span-5 sm:col-span-5 mt-4"></div>
                <button
                  onClick={() => this.encodeTextIntoImage()}
                  type="button"
                  class="py-2 border border-transparent leading-6 font-medium rounded-2xl text-indigo-700 bg-indigo-200 hover:bg-indigo-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo active:bg-indigo-200 transition ease-in-out duration-150 col-span-2 "
                >
                  Hide me
                </button>
                <div className="col-span-5 sm:col-span-5"></div> */}

                {/* Image section */}
                {/* <div className="col-span-6 flex flex-col ml-18">
                  <p class="mt-1 text-sm  text-gray-400">original image</p>
                  <div className="opacity-50">
                    <img
                      src="/image-original-missing2.png"
                      id="rawcodeimg"
                      alt=""
                      className="w-5/12 block mx-auto"
                    />
                  </div>
                </div> */}

                {/* <div className="col-span-6 flex flex-col">
                  <p class="mt-1 text-sm text-gray-400 col-span-5">
                    hidden info image
                  </p>
                  <div>
                    <div className="opacity-50">
                      <img
                        src="/encoded-image-not-ready3.png"
                        alt=""
                        id="encodeimg"
                        className="w-5/12 block mx-auto"
                      />
                    </div>
                  </div>
                </div>
                <input
                  className="invisible"
                  ref={(encodeFileInput) =>
                    (this.encodeFileInput = encodeFileInput)
                  }
                  type="file"
                  name="img"
                  id=""
                  accept="image/*"
                  onChange={(e) => this.readURL(e.target.files)}
                />
              </div> 
            </div>*/}
            <div className="ml-6 grid grid-cols-12 flex-1">
              <div className="col-span-12">
                <h3 class="mt-4 text-xl leading-6 font-medium text-gray-300">
                  Information Extracting
                </h3>
                <p class="mt-1 text-sm leading-5 text-gray-400">
                  Upload an image file containing hidden information
                </p>
              </div>
              <div className="col-span-4 sm:col-span-2 lg:col-span-3"></div>
              <div className="col-span-4 sm:col-span-8 lg:col-span-6">
                <FileDrop onFrameDrop={(e) => this.fileDropDecode(e)}>
                  <div className="mt-6 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-500"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="mt-1 text-sm text-gray-400">
                        <button
                          type="button"
                          onClick={() => this.triggerDecodeInputFile()}
                          className="font-medium text-indigo-500 hover:text-indigo-400 focus:outline-none focus:underline transition duration-150 ease-in-out"
                        >
                          Upload a file
                        </button>{" "}
                        or drag and drop
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </FileDrop>
              </div>
              <div className="col-span-4 sm:col-span-2 lg:col-span-3"></div>
              {this.state.decodedSecret && !this.state.decodingError ?
                  <h2 id="decodedsecret">{this.state.decodedSecret}</h2> : <h2>ERROR</h2>}
               <div className="col-span-4 sm:col-span-2 lg:col-span-3"></div>
            </div>

            <div className="col-span-12 mt-16">
              {this.state.decodedSecret && !this.state.decodingError ? (
                <div>
                  <h3 class="ml-6 text-xl leading-6 font-medium text-gray-300">
                    Your Secret Information
                  </h3>
                  <p
                    class="mt-1 text-lg leading-5 text-gray-400"
                    id="decodedsecret"
                  >
                    {this.state.decodedSecret}
                  </p>
                </div>
              ) : (
                <span class="mt-1 text-lg leading-5 text-gray-400">
                  Could not decode secret
                </span>
              )}
              <input
                className="invisible"
                type="file"
                name="img"
                id=""
                ref={(decodeFileInput) =>
                  (this.decodeFileInput = decodeFileInput)
                }
                accept="image/*"
                onChange={(e) => this.decodeImage(e.target.files)}
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Decrypt;
