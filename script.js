// 1. SECTION SWITCHING
function showSection(sectionId) {
  // Hide all sections
  document.querySelectorAll(".page-section").forEach((sec) => {
    sec.classList.remove("active");
    sec.classList.add("hidden");
  });

  // Show selected section
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove("hidden");
    target.classList.add("active");
  }

  // Update Nav Active State
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("onclick").includes(sectionId)) {
      item.classList.add("active");
    }
  });
}

// 2. CREATE POST
function createPost() {
  const input = document.getElementById("postInput");
  const text = input.value;
  if (!text.trim()) return alert("Post cannot be empty!");

  const feed = document.getElementById("feedContainer");
  const newPost = document.createElement("div");
  newPost.className = "card post";
  newPost.innerHTML = `
        <div class="post-header">
            <div class="avatar bg-blue">ME</div>
            <div class="post-meta"><strong>Me</strong><span>Just now</span></div>
        </div>
        <div class="post-body"><p>${text}</p></div>
        <div class="post-footer">
            <button class="action-btn"><span class="material-icons">thumb_up</span> Like</button>
            <button class="action-btn"><span class="material-icons">comment</span> Comment</button>
            <button class="action-btn"><span class="material-icons">share</span> Share</button>
        </div>
    `;
  feed.prepend(newPost);
  input.value = "";
}

// 3. RESPONSIVE CHAT LOGIC
function openChat(userName, colorClass) {
  // Update Chat Header
  document.getElementById("chatName").innerText = userName;
  const avatar = document.getElementById("chatAvatar");
  avatar.className = `avatar small ${colorClass}`;
  avatar.innerText = userName.charAt(0);

  // Clear dummy body and add greeting
  const body = document.getElementById("chatBody");
  body.innerHTML = `<div class="bubble received">This is the start of your conversation with ${userName}.</div>`;

  // MOBILE ONLY: Slide the chat window in
  const wrapper = document.getElementById("msgWrapper");
  wrapper.classList.add("active-chat");
}

function backToContacts() {
  // MOBILE ONLY: Slide the chat window out
  const wrapper = document.getElementById("msgWrapper");
  wrapper.classList.remove("active-chat");
}

function sendMessage() {
  const input = document.getElementById("msgInput");
  const text = input.value;
  if (!text.trim()) return;

  const body = document.getElementById("chatBody");
  const msg = document.createElement("div");
  msg.className = "bubble sent";
  msg.innerText = text;
  body.appendChild(msg);
  input.value = "";
  body.scrollTop = body.scrollHeight;
}
