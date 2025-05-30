// Hàm phát âm thanh và thêm hiệu ứng
function handleDrum(key) {
    const soundMap = {
      w: "sounds/tom-1.mp3",
      a: "sounds/tom-2.mp3",
      s: "sounds/tom-3.mp3",
      d: "sounds/tom-4.mp3",
      j: "sounds/snare.mp3",
      k: "sounds/crash.mp3",
      l: "sounds/kick-bass.mp3",
    };
    
    const audio = soundMap[key];
    if (audio) {
      new Audio(audio).play();
      const button = document.querySelector(`.${key}`);
      if (button) {
        button.classList.add("active");
        setTimeout(() => button.classList.remove("active"), 100); //hiệu ứng
      }
    }
  }
  
  // Xử lý sự kiện chuột và bàn phím
  document.querySelectorAll(".drum").forEach(drum => 
    drum.addEventListener("click", () => handleDrum(drum.classList[0]))
  );
  
  document.addEventListener("keydown", event => handleDrum(event.key.toLowerCase()));
  