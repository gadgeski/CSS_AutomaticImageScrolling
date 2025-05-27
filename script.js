// 全ての画像要素取得
const images = document.querySelectorAll(".marquee-inner-stop img");
const marqueeInners = document.querySelectorAll(".marquee-inner-stop");

// 各画像にホバーイベント追加
images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    // 全ての.marquee-inner-stopのアニメーション停止
    marqueeInners.forEach((marqueeInner) => {
      marqueeInner.classList.add("marquee-paused");
    });
  });

  img.addEventListener("mouseleave", () => {
    // 全ての.marquee-inner-stopのアニメーション再開
    marqueeInner.forEach((marqueeInner) => {
      marqueeInner.classList.remove("marquee-paused");
    });
  });
});
