export const makeSplash = (color: string): string => {
	return `
      const button = e.currentTarget;
      const circle = document.createElement('span');
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = CSS.px(diameter);
      circle.style.left = CSS.px(e.clientX - button.offsetLeft - radius);
      circle.style.top = CSS.px(e.clientY - button.offsetTop - radius);
      circle.classList.add('ripple','absolute','rounded-full','scale-0','${color}')
      const ripple = button.getElementsByClassName('ripple')[0];
      if (ripple) {
        ripple.remove();
      }
      button.appendChild(circle);
      circle.animate({
        transform:['scale(0)','scale(4)'],
        opacity:[1,0],
      },{
        duration:600,
        fill:'both',
        easing: 'cubic-bezier(0, 0, .75, 1)',
        autoplay:true,
      });
    `;
};

export const makeNavClose = () => {
	return `
		  Object.values(navItemsEnterAle).forEach((ale, i) => {
	    	ale.playbackRate = -1;
	    	ale.play();
            if (i === Object.values(navItemsEnterAle).length - 4) {
                ale.onfinish = function () {
                    if (isNavOpen) {
                        console.log(isNavOpen,'I am removing from the dom')
                        navDialogContainerAle.playbackRate = -1;
                        navDialogContainerAle.play();
                        setTimeout(() => {
                            isOpen = false;
                        },DurOfContainerToAppear);
            	    };
                    isNavOpen = false;
                }
            }
	    });
	`;
};

export const makeNavOpen = () => {
	return `
		  	isOpen = true;
				Object.values(navItemsEnterAle).forEach((ale) => {
					ale.playbackRate = +1;
					ale.play();
				});
				navDialogContainerAle.playbackRate = +1;
				navDialogContainerAle.play();
				setTimeout(()=>{
					isNavOpen = true;
				},DurOfContainerToAppear)
	`;
};
