import { Fcards } from "@/constants/page";
import FeatureCard from "../featureCard/page";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import Button from "../button/page";
import Image from "next/image";
const Hero = () => {
  const [selected, setSelected] = useState("pneumonia");
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const webcamRef = useRef<Webcam>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  function base64ToFile(base64String: string, fileName: string): File {
    const base64WithoutPrefix = base64String.replace(/^data:[^;]+;base64,/, "");

    const binaryData = atob(base64WithoutPrefix);

    const arrayBuffer = new ArrayBuffer(binaryData.length);
    const view = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryData.length; i++) {
      view[i] = binaryData.charCodeAt(i);
    }

    const blob = new Blob([arrayBuffer], { type: "image/webp" });

    const file = new File([blob], fileName, { type: "image/webp" });

    return file;
  }

  const handleCapture = () => {
    if (webcamRef.current) {
      const capturedImage = webcamRef.current.getScreenshot();
      setImageSrc(capturedImage);
      setFile(base64ToFile(capturedImage || "", "image.jpeg"));
      setCameraOpen(false);
    }
  };

  async function uploadchest() {
    if (file) {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(
          "https://pneumonia-fmaprfvioa-de.a.run.app",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const result = await response.json();
          setResult(result.prediction);
          setLoading(false);
        } else {
          console.error("Failed to upload file");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error during file upload:", error);
        setLoading(false);
      }
    }
  }

  async function uploadbrain() {
    if (file) {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(
          "https://braintumor-fmaprfvioa-de.a.run.app",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const result = await response.json();
          setResult(result.prediction);
          setLoading(false);
        } else {
          console.error("Failed to upload file");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error during file upload:", error);
        setLoading(false);
      }
    }
  }

  async function uploadeye() {
    if (file) {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(
          "https://diabeticretinopathy-fmaprfvioa-de.a.run.app",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const result = await response.json();
          setResult(result.prediction);
          setLoading(false);
        } else {
          console.error("Failed to upload file");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error during file upload:", error);
        setLoading(false);
      }
    }
  }

  async function uploadskin() {
    if (file) {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch(
          "https://skindisease-fmaprfvioa-de.a.run.app",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const result = await response.json();
          setResult(result.prediction);
          setLoading(false);
        } else {
          console.error("Failed to upload file");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error during file upload:", error);
        setLoading(false);
      }
    }
  }

  const [cameraOpen, setCameraOpen] = useState(false);
  return (
    <motion.div
      className="flex  justify-center items-center min-h-[90dvh]  w-full py-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-gradient-to-br to-green3 from-green1 rounded-3xl gap-x-10 flex md:flex-row flex-col-reverse items-center justify-center md:max-w-[90vw] md:mx-0 md:w-full w-5/6  md:px-16 py-8 px-4">
        <div className="flex flex-col ">
          <h1 className="md:text-[4rem] text-[1.5rem] md:text-left text-center font-bold text-white">
            Revolutionizing Healthcare
          </h1>
          <span className="text-md flex justify-center text-center text-white font-semibold bg-green3 bg-opacity-30 custome-shdaow bg-blur-2xl w-fit px-4 py-2 rounded-2xl">
            AI Foresees Diseases in Medical Scans
          </span>
          <p className="text-md md:pt-10 pt-4 max-w-3xl text-white">
            Upload X-rays, MRIs, CT Scans, and More. Let Our AI Predict Diseases
            for Informed Healthcare Decisions and Better Outcomes
          </p>

          <div className="flex">
            <Dialog>
              <DialogTrigger>
                <button className="md:text-3xl text-xl bg-white w-fit md:px-12 md:py-4 px-6 py-2 rounded-2xl mt-8 font-semibold hover:scale-110 duration-300">
                  Try It Out!
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-[90vw] md:max-w-[40%]">
                <DialogHeader>
                  <DialogTitle className="text-center py-6">Scan</DialogTitle>
                  <DialogDescription>
                    <Select
                      onValueChange={(e) => {
                        setSelected(e);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type of scan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select a type of scan</SelectLabel>
                          <SelectItem value="pneumonia">Chest Scan</SelectItem>
                          <SelectItem value="braintumor">Brain Scan</SelectItem>
                          <SelectItem value="diabeticretinopathy">
                            Eye CT Scan
                          </SelectItem>
                          <SelectItem value="skindisease">
                            Skin Photo
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <div className="py-6 flex flex-col space-y-4 justify-center">
                      <div className=" md:flex md:justify-center grid grid-cols-1 gap-5">
                        <Input type="file" onChange={handleFileChange} />

                        <Dialog>
                          <DialogTrigger className="md:hidden w-full">
                            <button
                              onClick={() => setCameraOpen(true)}
                              className="border rounded-lg px-6 py-2"
                            >
                              Open Camera
                            </button>
                          </DialogTrigger>
                          <DialogContent className="flex flex-col">
                            <Webcam className="w-95vw h-[80dvh]" />
                            <button onClick={handleCapture}>Capture</button>
                          </DialogContent>
                        </Dialog>
                      </div>

                      {imageSrc && <img src={imageSrc} alt="" />}

                      <div
                        onClick={() => {
                          if (selected === "pneumonia") {
                            uploadchest();
                          } else if (selected === "braintumor") {
                            uploadbrain();
                          } else if (selected === "diabeticretinopathy") {
                            uploadeye();
                          } else if (selected === "skindisease") {
                            uploadskin();
                          }
                        }}
                        className="flex justify-center pt-4"
                      >
                        <Button text="Upload" />
                      </div>

                      <div className="flex justify-center">
                        {loading ? (
                          <div className="flex flex-col space-y-4">
                            <p className="animate-pulse">
                              <Image
                                src="/logo.png"
                                alt="logo"
                                width={100}
                                height={100}
                              />
                            </p>{" "}
                          </div>
                        ) : !loading && result ? (
                          <div className="flex flex-col space-y-4">
                            <h1 className="text-green-500 md:text-2xl font-bold text-xl text-center text-semibold">
                              Results
                            </h1>
                            <p className="text-lg">
                              Diagnosis:{" "}
                              <span className="font-bold capitalize md:text-2xl text-xl">
                                {result}
                              </span>
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <Image
          src="/HerIcon.png"
          alt=""
          height={500}
          width={500}
          className=""
        />
      </div>
    </motion.div>
  );
};

export default Hero;
