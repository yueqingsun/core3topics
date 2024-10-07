window.onload = function() {
    setTimeout(function() {
        let rectangles = document.querySelectorAll('.rectangle');
        rectangles.forEach(function(rect) {
            rect.style.width = '60px';
            rect.style.height = '60px'; /* 缩小后保持4:3比例 */
            rect.classList.add('shrunk'); /* 添加缩小后的类 */
        });

        // 设置每个矩形缩小后的不同位置
        //M
        rectangles[0].style.top = '34%';
        rectangles[0].style.left = '20%';

        rectangles[1].style.top = '39%';
        rectangles[1].style.left = '16%';

        rectangles[2].style.top = '28%';
        rectangles[2].style.left = '18%';

        rectangles[3].style.top = '35%';
        rectangles[3].style.left = '12%';

        //Q
        rectangles[4].style.top = '27%';
        rectangles[4].style.left = '70%';

        rectangles[5].style.top = '25%';
        rectangles[5].style.left = '66%';

        rectangles[6].style.top = '15%';
        rectangles[6].style.left = '73%';

        rectangles[7].style.top = '20%';
        rectangles[7].style.left = '69%';

        rectangles[8].style.top = '31%';
        rectangles[8].style.left = '80%';

        rectangles[9].style.top = '37%';
        rectangles[9].style.left = '78%';

        //BK
        rectangles[10].style.top = '65%';
        rectangles[10].style.left = '53%';

        rectangles[11].style.top = '70%';
        rectangles[11].style.left = '57%';

        // 一秒后给矩形添加一个类以启用 hover 效果
        setTimeout(function() {
            rectangles.forEach(function(rect) {
                rect.classList.add('hover-enabled');
            });
        }, 1000); // 1秒之后启用 hover 效果
    }, 1000);
};

const outerCircle = document.querySelector('.outer-circle');
const innerCircle = document.querySelector('.inner-circle');

// 定义一个函数来添加鼠标移动事件监听器
function addMouseMoveListener() {
    document.addEventListener('mousemove', (e) => {
        // 获取大圆和小圆的半径
        const outerRadius = outerCircle.offsetWidth / 2; // 大圆半径
        const innerRadius = innerCircle.offsetWidth / 2; // 小圆半径

        // 获取大圆的中心坐标
        const outerCircleRect = outerCircle.getBoundingClientRect();
        const centerX = outerCircleRect.left + outerRadius;
        const centerY = outerCircleRect.top + outerRadius;

        // 获取鼠标的位置
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // 计算鼠标位置相对于大圆中心的距离
        const deltaX = mouseX - centerX;
        const deltaY = mouseY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // 判断鼠标是否在大圆的范围内
        if (distance < outerRadius - innerRadius) {
            // 鼠标在大圆范围内，直接更新小圆的位置
            innerCircle.style.left = `${mouseX - outerCircleRect.left}px`;
            innerCircle.style.top = `${mouseY - outerCircleRect.top}px`;
        } else {
            // 鼠标在大圆外部，限制小圆在大圆边缘上
            const angle = Math.atan2(deltaY, deltaX);
            const limitedX = centerX + (outerRadius - innerRadius) * Math.cos(angle);
            const limitedY = centerY + (outerRadius - innerRadius) * Math.sin(angle);
            innerCircle.style.left = `${limitedX - outerCircleRect.left}px`;
            innerCircle.style.top = `${limitedY - outerCircleRect.top}px`;
        }
    });
}

// 页面加载后，1秒后添加鼠标移动事件监听器
setTimeout(addMouseMoveListener, 1000);
