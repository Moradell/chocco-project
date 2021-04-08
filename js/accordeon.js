const mesureWidth = item => {
  let reqItemWidth = 0;

  //Переменные для ширины поля
  const screenWidth = $(window).width();
  const container = item.closest(".products-menu");
  const titlesBlocks = container.find(".products-menu__title");
  const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

  //Переменные для ширины текста
  const textContainer = item.find(".product-menu__container");
  const paddingLeft = parseInt(textContainer.css("padding-left"));
  const paddingright = parseInt(textContainer.css("padding-right"));

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    reqItemWidth = screenWidth - titlesWidth;
  } else {
    reqItemWidth = 524;
  }

  return {
    container: reqItemWidth,
    textContainer: reqItemWidth - paddingLeft - paddingright
  }
};

const closeEveryItemInContainer = (container) => {
  const items = container.find(".products-menu__item");
  const content = container.find(".products-menu__content");

  items.removeClass("active");
  content.width(0);
};

const openAccoItem = (item) => {
  const hiddenContent = item.find(".products-menu__content");
  const reqWidth = mesureWidth(item);
  const textBlock = item.find(".product-menu__container");

  item.addClass("active");
  hiddenContent.width(reqWidth.container);
  textBlock.width(reqWidth.textContainer);
};

$(".products-menu__title").on("click", e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const item = $this.closest(".products-menu__item");
  const itemAccoOpened = item.hasClass("active");
  const container = $this.closest(".products-menu");

  if (itemAccoOpened) {
    closeEveryItemInContainer(container);
  } else {
    closeEveryItemInContainer(container);
    openAccoItem(item);
  };
});
