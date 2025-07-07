import React, { useState, useEffect } from 'react';
import { Smartphone, Bot, Globe, MessageCircle } from 'lucide-react';

interface PlatformBadgesProps {
  className?: string;
}

const PlatformBadges: React.FC<PlatformBadgesProps> = ({ className = '' }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: isMobile ? '30px' : '40px',
    justifyContent: isMobile ? 'center' : 'flex-start',
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'rgba(124, 58, 237, 0.1)',
    border: '1px solid rgba(124, 58, 237, 0.3)',
    padding: isSmallMobile ? '8px 12px' : isMobile ? '10px 16px' : '12px 20px',
    borderRadius: '50px',
    color: 'white',
    fontSize: isSmallMobile ? '0.7rem' : isMobile ? '0.8rem' : '0.9rem',
    fontWeight: '600',
    backdropFilter: 'blur(20px)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  };

  const hoverStyle: React.CSSProperties = {
    background: 'rgba(124, 58, 237, 0.2)',
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 30px rgba(124, 58, 237, 0.2)',
  };

  const iconStyle: React.CSSProperties = {
    width: isSmallMobile ? '16px' : isMobile ? '18px' : '20px',
    height: isSmallMobile ? '16px' : isMobile ? '18px' : '20px',
    marginRight: isMobile ? '6px' : '8px',
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getBadgeStyle = (index: number): React.CSSProperties => ({
    ...badgeStyle,
    ...(hoveredIndex === index ? hoverStyle : {}),
  });

  const badges = [
    { icon: Smartphone, label: 'iOS App' },
    { icon: Bot, label: 'Android' },
    { icon: Globe, label: 'Web Portal' },
    { icon: MessageCircle, label: 'AI Assistant' },
  ];

  return (
    <div 
      className={`platform-badges ${className}`}
      style={containerStyle}
    >
      {badges.map((badge, index) => {
        const IconComponent = badge.icon;
        return (
          <span
            key={index}
            style={getBadgeStyle(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <IconComponent style={iconStyle} />
            {badge.label}
          </span>
        );
      })}
    </div>
  );
};

export default PlatformBadges;