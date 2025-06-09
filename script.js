const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value.trim() === "") {
        alert("Add something!!!");
        return;
    }

    const li = document.createElement("li");
    li.className = "flex items-center gap-3 pl-2 pr-12 py-3 text-[17px] relative cursor-pointer group";

    const checkbox = document.createElement("img");
    checkbox.src = "image/checkbox.png";
    checkbox.className = "w-6 h-6 toggle-check";
    li.appendChild(checkbox);

    const taskText = document.createElement("span");
    taskText.innerText = inputBox.value;
    taskText.className = "flex-1";
    li.appendChild(taskText);

    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.className = "absolute top-[5px] right-0 w-10 h-10 text-[22px] leading-[40px] text-[#475e3d] text-center rounded-full hover:bg-[#edeef0] cursor-pointer";
    li.appendChild(closeBtn);

    listContainer.appendChild(li);
    inputBox.value = "";

    saveData();
}

listContainer.addEventListener("click", function (e) {
    const li = e.target.closest("li");

    // Toggle check image and style
    if (e.target.tagName === "IMG" && "li") {
        const img = e.target;
        const text = li.querySelector("span");
        const isChecked = li.classList.toggle("checked");

        if (isChecked) {
            img.src = "image/check-square.png";
            text.classList.add("line-through", "text-gray-500");
        } else {
            img.src = "checkbox.png";
            text.classList.remove("line-through", "text-gray-500");
        }
        saveData();
    }

    // Delete task
        if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");

    
    listContainer.querySelectorAll("li").forEach((li) => {
        const img = li.querySelector("img");
        const text = li.querySelector("span");

        if (li.classList.contains("checked")) {
            img.src = "check-square.png";
            text.classList.add("line-through", "text-gray-500");
        } else {
            img.src = "checkbox.png";
            text.classList.remove("line-through", "text-gray-500");
        }
    });
}


  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
        }
      }
    }
  };


showTask();
