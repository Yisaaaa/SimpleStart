//   _       _         _
//  | |     (_)       | |
//  | |      _  _ __  | | __ ___
//  | |     | || '_ \ | |/ // __|
//  | |____ | || | | ||   < \__ \
//  |______||_||_| |_||_|\_\|___/

const arr = ["first", "second", "third", "fourth"];

generateLinks();

function generateLinks() {
    for (item of arr) {
        let colContainerClass = `.${item}-col-container`;
        let colcontainer = CONFIG[`${item}ColumnContainer`];
        let colTitle = document.querySelector(
            `${colContainerClass} .col-title`
        );
        colTitle.textContent = `${colcontainer.title}`;

        for (content of colcontainer.contents) {
            let links = document.querySelector(`${colContainerClass} .links`);
            let linkElement = document.createElement("a");
            linkElement["href"] = content.url;
            linkElement.textContent = content.name;
            linkElement.classList.add("link");
            links.append(linkElement);
        }
    }
}
