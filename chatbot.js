
  let chatInitialized = false;

  function toggleChat() {
    const chat = document.getElementById("floatingChatbot");
    const chatbox = document.getElementById("chatbox");

    if (chat.style.display === "flex") {
      chat.style.display = "none";
    } else {
      chat.style.display = "flex";
      if (!chatInitialized) {
        chatbox.innerHTML += `<p><strong>Grace:</strong> Hello! I'm Grace, your HGI Ministry assistant. How can I help you today?".</p>`;
        chatbox.scrollTop = chatbox.scrollHeight;
        chatInitialized = true;
      }
    }
  }

  const chatbox = document.getElementById("chatbox");
  const chatInput = document.getElementById("chat-input");

  chatInput.addEventListener("keypress", async function (e) {
    if (e.key === "Enter") {
      const question = chatInput.value.trim();
      if (question) {
        chatbox.innerHTML += `<p><strong>You:</strong> ${question}</p>`;
        await handleChat(question);
        chatInput.value = "";
        chatbox.scrollTop = chatbox.scrollHeight;
      }
    }
  });

  async function handleChat(input) {
    if (/\b\w+\s*\d+:\d+\b/.test(input)) {
      const verse = await getBibleVerse(input);
      chatbox.innerHTML += `<p><strong>Grace:</strong> ${verse}</p>`;
    } else {
      const response = getChatbotResponse(input);
      chatbox.innerHTML += `<p><strong>Grace:</strong> ${response}</p>`;
    }
  }

  async function getBibleVerse(ref) {
    try {
      const response = await fetch(`https://bible-api.com/${encodeURIComponent(ref)}?translation=kjv`);
      const data = await response.json();
      if (data.text) {
        return `"${data.text.trim()}" — ${data.reference} (KJV)`;
      } else {
        return "Hmm, I couldn't find that verse. Please try writing it like this 'John 3:16'.";
      }
    } catch (error) {
      return "Oops! Verse not found. Kindly check if you typed in the correct verse";
    }
  }

  function getChatbotResponse(input) {
    input = input.toLowerCase();
    if (input.includes("service")) return "Our services are every Sunday at 1am and Wednesdays at 5pm.";
    if (input.includes("location")) return "We are located at Hand of God International Ministries, Waterval 146c, Hlalelani Street";
    if (input.includes("pastor")) return "Our lead pastor is Prophet Joseph Chuma.";
    if (input.includes("Prophet")) return "Prophet Joseph Chuma.";
    if (input.includes("apostle")) return "Prophet Joseph Chuma.";
    if (input.includes("leader")) return "Prophet Joseph Chuma.";
    if (input.includes("contact")) return "You can reach us on Whatsapp or call +27 63 632 9809.";
    if (input.includes("grace")) return "That's me! I'm Grace, do you need any help?";
    if (input.includes("hi")) return "Hello! I'm Grace, your HGI Ministry assistant. How can I help you today?";
    if (input.includes("hello")) return "Hello! I'm Grace, your HGI Ministry assistant. How can I help you today?";
    if (input.includes("avuxeni")) return "Ahee! Hi mina Tintswalo (Grace), mupfuni wa nwina wale HGI Ministry. Ningami pfuna hi yina namuntla xana?";
    return "I'm not sure about that, but feel free to contact the church office directly!";


  }

