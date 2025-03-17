import React, { useContext } from "react";
import { Bot, Send, User, Sparkles, MessageCircle } from "lucide-react";
import { Context } from "./Context";

const ChatBox = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="flex-1 min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="w-6 h-6 text-sky-600" />
          <h1 className="text-2xl font-bold text-gray-800">AI Assistant</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          {!showResult ? (
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
                Hello, Students
              </h2>
              <p className="text-lg text-gray-600">Ready to assist you</p>
            </div>
          ) : (
            <div className="space-y-4 mb-24">
              <div className="bg-white/80 backdrop-blur rounded-2xl shadow-md border border-sky-100 p-6">
                <div className="flex gap-3 items-start border-b border-sky-100 pb-4">
                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
                    <User className="w-4 h-4 text-sky-600" />
                  </div>
                  <p className="text-gray-800 font-medium">{recentPrompt}</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-sky-600" />
                  </div>
                  {loading ? (
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-sky-400 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-sky-500 animate-bounce delay-100"></div>
                      <div className="w-2 h-2 rounded-full bg-sky-600 animate-bounce delay-200"></div>
                    </div>
                  ) : (
                    <div
                      className="prose prose-sky max-w-none"
                      dangerouslySetInnerHTML={{ __html: resultData }}
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="fixed bottom-6 left-4 right-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur rounded-xl shadow-lg border border-sky-100 p-3">
                <div className="flex items-center gap-3">
                  <Bot className="w-5 h-5 text-sky-500 ml-2" />
                  <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    placeholder="Ask anything..."
                    className="flex-1 p-2 text-gray-700 bg-transparent outline-none focus:ring-2 focus:ring-sky-200 rounded-lg transition-all"
                  />
                  <button
                    onClick={() => onSent()}
                    className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;