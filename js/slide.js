const track = document.getElementById('sliderTrack');
    if (track) {
        let isHovered = false;
        let isDragging = false;
        let startX;
        let initialScrollAmount;
        let scrollAmount = 0;
        const speed = 1.2;

        const originalItems = track.innerHTML;
        track.innerHTML += originalItems;

        function autoScroll() {
            if (!isHovered && !isDragging) {
                scrollAmount += speed;
                    
                if (scrollAmount >= track.scrollWidth / 2) {
                    scrollAmount = 0;
                }
                    
                track.style.transform = `translateX(-${scrollAmount}px)`;
            }
            requestAnimationFrame(autoScroll);
        }
        track.addEventListener('mouseenter', () => isHovered = true);
        track.addEventListener('mouseleave', () => {
            isHovered = false;
            isDragging = false;
            track.style.cursor = 'grab';
        });
        track.addEventListener('mousedown', (e) => {
            isDragging = true;
            track.style.cursor = 'grabbing';
            startX = e.pageX;
            initialScrollAmount = scrollAmount;
        });

        track.addEventListener('mouseup', () => {
            isDragging = false;
            track.style.cursor = 'grab';
        });

        track.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
                
            const x = e.pageX;
            const distance = startX - x;
                
            scrollAmount = initialScrollAmount + distance;
            if (scrollAmount >= track.scrollWidth / 2) {
                scrollAmount = 0;
                startX = e.pageX;
                initialScrollAmount = scrollAmount;
            } else if (scrollAmount <= 0) {
                scrollAmount = track.scrollWidth / 2;
                startX = e.pageX;
                initialScrollAmount = scrollAmount;
            }
            track.style.transform = `translateX(-${scrollAmount}px)`;
        });
        autoScroll();
    }