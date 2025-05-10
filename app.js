class Gpu {
  constructor(name, fps, cost, slot) {
    this.name = name;
    this.fps = fps;
    this.cost = cost;
    this.slot = slot;
  }
}

const res1 = document.querySelector(".res1");
const res2 = document.querySelector(".res2");
const diffs = document.querySelector(".diffs");

class UI {
  static addGpu1(gpu) {
    const fpp = gpu.cost / gpu.fps;

    const el = document.createElement("div");
    el.className = "g1";
    if (res1.firstChild) {
      document.querySelector(".g1").replaceWith(el);
    }

    el.innerHTML = `
      <h4>${gpu.name}</h4>
      <p>Fps: ${gpu.fps}</p>
      <p>Cost: £${gpu.cost}</p>
      <h4>Frames Per GBPound</h4>
      <p>${fpp.toFixed(2)}</p>
    `;
    res1.appendChild(el);
  }
  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const form1 = document.querySelector(".article1");
    const form2 = document.querySelector(".article2");
    if (message.includes("One")) {
      form1.appendChild(div);
    } else {
      form2.appendChild(div);
    }
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  static addGpu2(gpu) {
    const fpp = gpu.cost / gpu.fps;

    const el = document.createElement("div");
    el.className = "g2";
    if (res2.firstChild) {
      document.querySelector(".g2").replaceWith(el);
    }

    el.innerHTML = `
      <h4>${gpu.name}</h4>
      <p>Fps: ${gpu.fps}</p>
      <p>Cost: £${gpu.cost}</p>
      <h4>Frames Per GBPound</h4>
      <p>${fpp.toFixed(2)}</p>
    `;
    res2.appendChild(el);
  }

  static percentDiff(gpu1, gpu2) {
    let fpsDiff = null;
    let costDiff = null;
    const elf = document.createElement("div");
    elf.className = "fps";
    if (diffs.firstChild) {
      document.querySelector(".fps").replaceWith(elf);
    }

    const greaterFps = gpu1.fps > gpu2.fps ? gpu1 : gpu2;
    const greaterCost = gpu1.cost > gpu2.cost ? gpu1 : gpu2;
    const lowerFps = gpu1.fps < gpu2.fps ? gpu1 : gpu2;
    const lowerCost = gpu1.cost < gpu2.cost ? gpu1 : gpu2;
    // frames percent
    const fpsPerc = greaterFps.fps / 100;
    const performance = lowerFps.fps / fpsPerc;
    fpsDiff = 100 - performance;
    // cost percent
    const costPerc = greaterCost.cost / 100;
    const costing = lowerCost.cost / costPerc;
    costDiff = 100 - costing;

    const frames =
      fpsDiff === 0 ? "frames" : fpsDiff < 0 ? "less frames" : "more frames";

    elf.innerHTML = `
      <h4>Percent differences</h4>
      <p>${greaterFps.name} has ${fpsDiff.toFixed(2)}% ${frames} than the ${lowerFps.name} and the ${greaterCost.name} costs ${costDiff.toFixed(2)}% more than ${lowerCost.name} </p>`;

    return diffs.appendChild(elf);
  }
  static clearUI() {
    res1.textContent = "";
    res2.textContent = "";
    diffs.textContent = "";
  }
  static clearFields1() {
    document.querySelector(".gpu1").value = "";
    document.querySelector(".fps1").value = "";
    document.querySelector(".cost1").value = "";
  }
  static clearFields2() {
    document.querySelector(".gpu2").value = "";
    document.querySelector(".fps2").value = "";
    document.querySelector(".cost2").value = "";
  }
}
class Store {
  constructor() {
    this.gpuStore = [];
  }
  gpus(newGpu) {
    if (this.gpuStore.length < 2) {
      this.gpuStore.push(newGpu);
    } else {
      this.gpuStore = this.gpuStore.toSpliced(newGpu.slot, 1, newGpu);
    }
    // this.gpuStore.map((el) => (el.slot === newGpu.slot ? newGpu : el));

    const firstGpu = this.gpuStore.length - 2;
    const secondGpu = this.gpuStore.length - 1;
    if (this.gpuStore.length > 1) {
      return UI.percentDiff(this.gpuStore[firstGpu], this.gpuStore[secondGpu]);
    }
  }
  get array() {
    return this.gpuStore;
  }
}
const store = new Store();
const ui = new UI();
// Form 1
document.querySelector("#price1").addEventListener("submit", (e) => {
  const gpuName1 = document.querySelector(".gpu1").value;
  const fps1 = document.querySelector(".fps1").value;
  const cost1 = document.querySelector(".cost1").value;

  const gpu1 = new Gpu(gpuName1, fps1, cost1, 0);

  if (!gpuName1 || !fps1 || !cost1) {
    ui.showAlert("Field missing in Gpu One", "error");
  } else {
    store.gpus(gpu1);
    UI.addGpu1(gpu1);

    UI.clearFields1();
  }
  e.preventDefault();
});

// Form 2
document.querySelector("#price2").addEventListener("submit", (e) => {
  const gpuName2 = document.querySelector(".gpu2").value;
  const fps2 = document.querySelector(".fps2").value;
  const cost2 = document.querySelector(".cost2").value;

  const gpu2 = new Gpu(gpuName2, fps2, cost2, 1);

  if (!gpuName2 || !fps2 || !cost2) {
    ui.showAlert("Field missing in Gpu Two", "error");
  } else {
    store.gpus(gpu2);
    UI.addGpu2(gpu2);

    UI.clearFields2();
  }
  e.preventDefault();
});

function clearStore() {
  UI.clearUI();
  UI.clearFields1();
  UI.clearFields2();
}

const popAnchor = document.getElementById("tip-anchor");
if (!window.matchMedia("(pointer: coarse)").matches) {
  popAnchor.setAttribute("data-trigger", "hover");
} else {
  popAnchor.setAttribute("data-trigger", "manual");
}

// PopoverApi tooltip
const popovers = document.querySelectorAll(
  "[popovertarget][data-trigger='hover']"
);
popovers.forEach((el) => {
  const target = document.getElementById(el.getAttribute("popovertarget"));

  el.addEventListener("mouseover", () => target.showPopover());
  el.addEventListener("mouseout", () => target.hidePopover());
});
