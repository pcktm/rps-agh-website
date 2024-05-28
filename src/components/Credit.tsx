import { useFloating, shift, offset } from '@floating-ui/react-dom';
import { useEffect, useState } from 'react';
import jkopankoimg from '/src/assets/jkopanko.jpg';

export default function Credit() {
  const { refs, floatingStyles } = useFloating({
    placement: 'top',
    middleware: [offset(10), shift({padding: 10})],
  });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isHovered);
  }, [isHovered]);

  return (
    <div className="relative">
      <ul
        className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0"
      >
        <li>
          by
          {' '}
          <a
            href="https://kopanko.com"
            target="_blank"
            className="hover:underline"
            ref={refs.setReference}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            Jakub
          </a>
        </li>
      </ul>
      {
        isHovered && (
        <div
          ref={refs.setFloating}
          className={`absolute z-10 p-1 pointer-events-none bg-white rounded-lg shadow-lg transition-opacity duration-[3s] delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{
            width: 'max-content',
            ...floatingStyles,
          }}
        >
          <img
            src={jkopankoimg.src}
            alt="Jakub z kotem na kolanach"
            className="rounded shadow w-32 h-[144px]"
          />
        </div>
      )}
    </div>
  )
}