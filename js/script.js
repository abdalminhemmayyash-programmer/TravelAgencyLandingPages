document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');

        // Animation for hamburger
        if (hamburger.classList.contains('active')) {
            hamburger.style.gap = '0px';
            hamburger.children[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            hamburger.children[1].style.opacity = '0';
            hamburger.children[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            hamburger.style.gap = '5px';
            hamburger.children[0].style.transform = 'none';
            hamburger.children[1].style.opacity = '1';
            hamburger.children[2].style.transform = 'none';
        }
    });
});


 
    const testimonials = [
        {
            name: "Mike Taylor",
            location: "Lahore, Pakistan",
            quote: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
            image: "images/Image.png"
        },
        {
            name: "Chris Thomas",
            location: "CEO of Red Button",
            quote: "loremLorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium saepe voluptates fugiat vel nesciunt tempore debitis fuga rem consequatur omnis.",
            image: "../images/360_F_298288984_8i0PB7s9aWPzi1LeuNGGrnjXkmXRpcZn.jpg" 
        },
        {
            name: "Sarah Jenkins",
            location: "London, UK",
            quote: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium saepe voluptates fugiat vel nesciunt tempore debitis fuga rem consequatur omnis.",
            image: "../images/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" 
        }
    ];

    let currentIndex = 0;

    // 2. دالة تحديث المحتوى
    function updateTestimonial(index) {
        currentIndex = index;

        // تحديث النصوص والصورة في الكارت الأساسي
        document.getElementById('user-name').innerText = testimonials[currentIndex].name;
        document.getElementById('user-location').innerText = testimonials[currentIndex].location;
        document.getElementById('user-quote').innerText = `"${testimonials[currentIndex].quote}"`;
        document.getElementById('user-img').src = testimonials[currentIndex].image;

        // تحديث النقاط (Dots)
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });

        // اختيار الكارت الخلفي (اختياري: لتغيير اسم الشخص في الكارت اللي تحت)
        const nextIndex = (currentIndex + 1) % testimonials.length;
        const bgCardName = document.querySelector('.background-card .name');
        const bgCardLoc = document.querySelector('.background-card .location');
        bgCardName.innerText = testimonials[nextIndex].name;
        bgCardLoc.innerText = testimonials[nextIndex].location;
    }

    // 3. دالة الأسهم (Up/Down)
    function changeSlide(direction) {
        let newIndex = currentIndex + direction;
        
        if (newIndex >= testimonials.length) newIndex = 0;
        if (newIndex < 0) newIndex = testimonials.length - 1;
        
        updateTestimonial(newIndex);
    }

    // 4. دالة النقاط (Jump to Slide)
    function jumpToSlide(index) {
        updateTestimonial(index);
    }
