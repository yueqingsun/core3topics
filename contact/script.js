const outerCircle = document.querySelector('.outer-circle');
const innerCircle = document.querySelector('.inner-circle');

// 获取外圆的半径
const radius = outerCircle.offsetWidth / 2;

// 页面监听鼠标移动事件
document.addEventListener('mousemove', (e) => {
    // 获取大圆的中心坐标
    const outerCircleRect = outerCircle.getBoundingClientRect();
    const centerX = outerCircleRect.left + radius;
    const centerY = outerCircleRect.top + radius;

    // 获取鼠标的位置
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // 计算鼠标位置相对于大圆中心的距离
    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // 判断鼠标是否在大圆的范围内
    if (distance < radius - 7.5) {
        // 鼠标在大圆范围内，直接更新小圆的位置
        innerCircle.style.left = `${mouseX - outerCircleRect.left}px`;
        innerCircle.style.top = `${mouseY - outerCircleRect.top}px`;
    } else {
        // 鼠标在大圆外部，限制小圆在大圆边缘上
        const angle = Math.atan2(deltaY, deltaX);
        const limitedX = centerX + (radius - 7.5) * Math.cos(angle);
        const limitedY = centerY + (radius - 7.5) * Math.sin(angle);
        innerCircle.style.left = `${limitedX - outerCircleRect.left}px`;
        innerCircle.style.top = `${limitedY - outerCircleRect.top}px`;
    }
});
