import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader2, RefreshCw, BookOpen, GraduationCap, Clock } from "lucide-react";
import AskAi from "../../src/Util/AskAi";

const Subject = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { subjectName } = useParams();

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const fetchData = async () => {
    setData("");
    setIsLoading(true);
    try {
      const res = await AskAi(`Provide a detailed subject note for ${subjectName}:`);
      let resArray = res.split("*");
      let formattedResponse = "";

      for (let i = 0; i < resArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          formattedResponse += resArray[i];
        } else {
          formattedResponse += `<b>${resArray[i]}</b>`;
        }
      }

      formattedResponse = formattedResponse.split("*").join("<br/> ");

      let newResponseArray = formattedResponse.split(" ");
      for (let i = 0; i < newResponseArray.length; i++) {
        delayPara(i, newResponseArray[i] + " ");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [subjectName]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-blue-600" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {subjectName.charAt(0).toUpperCase() + subjectName.slice(1)} Notes
              </h1>
            </div>
            <button
              onClick={fetchData}
              disabled={isLoading}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white font-semibold py-2.5 px-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4" />
              )}
              Refresh Notes
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 p-8">
            <div className="flex items-center justify-center p-12">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
                  <BookOpen className="w-6 h-6 text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <p className="text-lg text-gray-600 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Generating comprehensive notes...
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100">
            <div className="border-b border-blue-100 p-6">
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Study Materials</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="p-6 bg-blue-50/50 rounded-xl border border-blue-100">
                <div className="prose prose-blue max-w-none">
                  {data ? (
                    <p
                      dangerouslySetInnerHTML={{ __html: data }}
                      className="text-gray-700 leading-relaxed"
                    />
                  ) : (
                    <p className="text-gray-500 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      No data available yet.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subject;