const infos = [
  {
    title: "Info 1",
    body:
      "Proin suscipit ipsum vel lacus suscipit iaculis. Morbi lacinia justo at consequat molestie. Vestibulum vulputate volutpat ante et lobortis. Proin luctus euismod urna, ut vehicula ex finibus at. Nam a augue eget diam egestas tincidunt. Aliquam vel ullamcorper nulla, id facilisis libero. Mauris sed nisi a eros sollicitudin varius.",
    img: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
  },
  {
    title: "Info 2",
    body:
      "Proin suscipit ipsum vel lacus suscipit iaculis. Morbi lacinia justo at consequat molestie. Vestibulum vulputate volutpat ante et lobortis. Proin luctus euismod urna, ut vehicula ex finibus at. Nam a augue eget diam egestas tincidunt. Aliquam vel ullamcorper nulla, id facilisis libero. Mauris sed nisi a eros sollicitudin varius."
  },
  {
    title: "Info 3",
    body:
      "Proin suscipit ipsum vel lacus suscipit iaculis. Morbi lacinia justo at consequat molestie. Vestibulum vulputate volutpat ante et lobortis. Proin luctus euismod urna, ut vehicula ex finibus at. Nam a augue eget diam egestas tincidunt. Aliquam vel ullamcorper nulla, id facilisis libero. Mauris sed nisi a eros sollicitudin varius.",
    img: "https://www.newton.ac.uk/files/covers/968361.jpg"
  },
  {
    title: "Info 4",
    body:
      "Proin suscipit ipsum vel lacus suscipit iaculis. Morbi lacinia justo at consequat molestie. Vestibulum vulputate volutpat ante et lobortis. Proin luctus euismod urna, ut vehicula ex finibus at. Nam a augue eget diam egestas tincidunt. Aliquam vel ullamcorper nulla, id facilisis libero. Mauris sed nisi a eros sollicitudin varius."
  },
  ,
  {
    title: "Info 5",
    body:
      "Proin suscipit ipsum vel lacus suscipit iaculis. Morbi lacinia justo at consequat molestie. Vestibulum vulputate volutpat ante et lobortis. Proin luctus euismod urna, ut vehicula ex finibus at. Nam a augue eget diam egestas tincidunt. Aliquam vel ullamcorper nulla, id facilisis libero. Mauris sed nisi a eros sollicitudin varius."
  },
  {
    title: "Info 6",
    body:
      "Proin suscipit ipsum vel lacus suscipit iaculis. Morbi lacinia justo at consequat molestie. Vestibulum vulputate volutpat ante et lobortis. Proin luctus euismod urna, ut vehicula ex finibus at. Nam a augue eget diam egestas tincidunt. Aliquam vel ullamcorper nulla, id facilisis libero. Mauris sed nisi a eros sollicitudin varius.",
    img: "https://www.newton.ac.uk/files/covers/968361.jpg"
  }
];

const makeInfoCard = ({ title, body, img }) => {
  const imgTag = `<img src="${img}" class="card-img-top" />`;
  return `<div class="card">
      ${img ? imgTag : ""}
      <div class="card-body">
        <h3 class="card-title">${title}</h3>
        <p class="card-text">${body.substring(0, 80) +
          (body.length > 80 ? "..." : "")}</p>
        <p class="card-text text-right">
          <button class="btn btn-outline-secondary">
            <i class="fab fa-readme mr-2"></i>
            Read more
          </button>
        </p>
      </div>
    </div>`;
};

$(window).on("load", () => {
  const infosCards = $("#infos");
  infos.map(makeInfoCard).forEach(card => infosCards.append(card));
});
