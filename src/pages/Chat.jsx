import { useState } from "react";
import { Search, PlusCircle, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "You" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex h-full">
      <aside className="w-64 border-r">
        <div className="p-4">
          <Input
            placeholder="Search..."
            className="mb-4"
            icon={<Search className="h-4 w-4" />}
          />
          <Button variant="outline" className="w-full mb-4">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Conversation
          </Button>
          <ScrollArea className="h-[calc(100vh-160px)]">
            {/* List of conversations */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 p-2 hover:bg-muted rounded-md cursor-pointer">
                <Avatar>
                  <AvatarImage src="https://via.placeholder.com/40" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium">John Doe</span>
                  <span className="text-xs text-muted-foreground">Hello!</span>
                </div>
              </div>
              {/* Add more conversations here */}
            </div>
          </ScrollArea>
        </div>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex items-center gap-2 border-b p-4">
          <Avatar>
            <AvatarImage src="https://via.placeholder.com/40" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">Online</span>
          </div>
        </header>
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    message.sender === "You"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex items-center gap-2 border-t p-4">
          <Input
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;