'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Home, ArrowLeft, Zap, Download, Code, MoreHorizontal, X, Info } from "lucide-react";

const ImagenPlayground = () => {
    const [numImages, setNumImages] = useState("1");
    const [resolution, setResolution] = useState("4:3");

    return (
        <div className="flex flex-col h-screen bg-black text-white">
            {/* Header */}
            <header className="border-b border-gray-800 p-2 flex items-center">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white text-black font-bold">
                        ML
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Home className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-lg bg-transparent border-gray-700 mr-1">
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Back
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-lg bg-gray-900 border-gray-700 flex items-center gap-1">
                        <Zap className="h-4 w-4" />
                        Realtime (Text to Image)
                    </Button>
                </div>
                <div className="mx-auto font-semibold">Imagen Playground</div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="rounded-lg bg-transparent border-gray-700">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-lg bg-transparent border-gray-700">
                        <Code className="h-4 w-4 mr-1" />
                        View Code
                    </Button>
                    <Button variant="outline" size="icon" className="bg-transparent border-gray-700 h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="bg-white text-black hover:bg-gray-200 rounded-lg">
                        Get Access
                    </Button>
                </div>
            </header>

            {/* Main content */}
            <div className="flex h-full">
                {/* Left sidebar */}
                <div className="w-52 border-r border-gray-800 p-4">
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <span className="text-sm">Number of Images</span>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="h-4 w-4 ml-1" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Select number of images to generate</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {["1", "2", "3", "4"].map((num) => (
                                <Button
                                    key={num}
                                    variant={numImages === num ? "default" : "outline"}
                                    className={`rounded-lg h-8 ${numImages === num ? "bg-gray-100 text-black" : "bg-transparent border-gray-700"}`}
                                    onClick={() => setNumImages(num)}
                                >
                                    {num}
                                </Button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center mb-2">
                            <span className="text-sm">Resolution</span>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Info className="h-4 w-4 ml-1" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Select resolution ratio</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                        <RadioGroup
                            value={resolution}
                            onValueChange={setResolution}
                            className="grid grid-cols-3 gap-2"
                        >
                            {[
                                { value: "4:3", label: "4:3" },
                                { value: "3:4", label: "3:4" },
                                { value: "1:1", label: "1:1" }
                            ].map((option) => (
                                <div
                                    key={option.value}
                                    className={`flex items-center justify-center h-8 rounded-lg cursor-pointer ${resolution === option.value
                                            ? "bg-gray-900 border border-gray-600"
                                            : "border border-gray-700"
                                        }`}
                                    onClick={() => setResolution(option.value)}
                                >
                                    <span className="text-sm">{option.label}</span>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                </div>

                {/* Main content area */}
                <div className="flex-1 p-4">
                    <div className="relative mb-4">
                        <div className="bg-gray-900 rounded-lg p-3 pl-10 pr-32 flex items-center">
                            <Zap className="h-4 w-4 mr-2" />
                            <span>Realtime (Text to Image)</span>
                        </div>
                        <div className="absolute right-2 top-2 flex gap-2">
                            <Button variant="outline" size="sm" className="rounded-lg bg-white text-black border-none">
                                View Demo
                            </Button>
                            <Button variant="ghost" size="icon" className="h-6 w-6">
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <Card className="bg-black border-gray-800 h-[500px]">
                        <CardContent className="p-6 h-full">
                            <div className="flex flex-col h-full">
                                <div className="text-sm mb-2">Write a prompt to generate your unique image.</div>
                                <Textarea
                                    className="flex-1 bg-transparent border-none resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
                                    placeholder=""
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm" className="rounded-lg border-gray-700 bg-transparent">
                            Sign in to run
                        </Button>
                        <Button variant="outline" size="sm" className="rounded-lg border-gray-700 bg-transparent">
                            Reset
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagenPlayground;