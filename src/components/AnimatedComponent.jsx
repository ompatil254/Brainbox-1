import React from 'react';

function AnimatedComponent() {
  return (
    <div className={` animated-container flex justify-center mt-12 p-12 gap-[10rem]`}>
      <div className="animated-item">
        <img src="https://assets-global.website-files.com/60890f6ac44206aef9237eb4/61a7f1ea3242ca4e62169754_6188e229b9d0ec413fc03da2_Group%2097-min.png" alt="Photo 1" className="w-32 h-32 rounded-full text-center" />
        <h2 className="text-lg font-semibold mt-2">The "good" kind of
peer pressure</h2>
        <p className="text-gray-200 mt-1">You know how your parents always say peer pressure is bad? Well… when it comes to studying, they’re wrong. Studying with peers helps you get better grades - and that’s scientifically proven.</p>
      </div>
      <div className="animated-item">
        <img src="https://assets-global.website-files.com/60890f6ac44206aef9237eb4/61a7f1ea7cb8166ce8b029de_61895872dd6b3875c19b7a12_Group%2099-min.png" alt="Photo 2" className="w-32 h-32 rounded-full" />
        <h2 className="text-lg font-semibold mt-2">24/7 support,
all year round  </h2>
        <p className="text-gray-200 mt-1">Find a study buddy (or a procrastinate-mate), access exclusive boot camps, chat with tutors, or ask for community help. When you need a break, take a 5 min guided mindfulness session.</p>
      </div>
      <div className="animated-item">
        <img src="https://assets-global.website-files.com/60890f6ac44206aef9237eb4/61a7f1eacf1ab8ca3819eab9_61895898b53f191cf9513f14_Group%2098-min.png" alt="Photo 3" className="w-32 h-32 rounded-full" />
        <h2 className="text-lg font-semibold mt-2">Studying,
reloaded</h2>
        <p className="text-gray-200 mt-1">Let’s be honest, any task is more fun when you know there’s a reward at the end of it. We’ll track your progress and gamify your study sessions – all you have to do is set session goals, start the timer and you’ll get rewarded.</p>
      </div>
    </div>
  );
}

export default AnimatedComponent;
