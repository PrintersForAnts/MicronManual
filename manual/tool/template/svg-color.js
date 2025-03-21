document.addEventListener("DOMContentLoaded", function () {
  const config = [
      { type: "main", buttonId: "colorPickerMainButton", inputId: "colorPickerMain" },
      { type: "accent", buttonId: "colorPickerAccentButton", inputId: "colorPickerAccent" }
  ];

  config.forEach(({ type, buttonId, inputId }) => {
      const button = document.getElementById(buttonId);
      const input = document.getElementById(inputId);

      if (!input || !button) {
          console.warn(`Missing input or button for type "${type}"`);
          return;
      }

      button.addEventListener("click", e => {
          e.preventDefault();
          input.click();
      });

      input.addEventListener("input", function () {
        const newColor = input.value;
        button.querySelector("i").style.color = newColor;
        document.documentElement.style.setProperty('--accent', newColor);
        // Only target paths for the current picker (main or accent)
        // document.querySelectorAll('svg[color]').forEach(svg => {
        //     const svgColor = svg.getAttribute('color');
        //     if (svgColor !== type) return;
    
        //     // TYPE 1: Paths inside any <g id^="fill">
        //     const groupPaths = svg.querySelectorAll('g[id^="fill"] path');
    
        //     // Combine into a Set to avoid duplicates if any path matches both
        //     const allPaths = new Set([...groupPaths, ...coloredPaths]);
    
        //     allPaths.forEach(path => {
        //         path.removeAttribute('class');     // Remove class like .st0
        //         path.style.fill = newColor;        // Apply inline fill
        //     });
        // });
    });
  });
});
