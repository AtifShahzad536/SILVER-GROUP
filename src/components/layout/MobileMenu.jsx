import React, { useState, useEffect } from 'react';
import { X, ChevronDown, Globe } from 'lucide-react';

/* ─── Smooth Accordion using CSS Grid rows trick ─────────────────────────
   grid-template-rows: 0fr → 1fr  is perfectly linear and silky smooth.
   The inner div needs overflow:hidden + min-height:0.
──────────────────────────────────────────────────────────────────────── */
const Accordion = ({ isOpen, children }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateRows: isOpen ? '1fr' : '0fr',
      transition: 'grid-template-rows 380ms cubic-bezier(0.4, 0, 0.2, 1)',
    }}
  >
    <div style={{ overflow: 'hidden', minHeight: 0 }}>
      {children}
    </div>
  </div>
);

const MobileMenu = ({ isOpen, onClose, navLinks, drawerData }) => {
  const [expandedLink, setExpandedLink] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [mounted, setMounted] = useState(false);

  /* Mount after first open so CSS transition fires properly */
  useEffect(() => {
    if (isOpen) setMounted(true);
  }, [isOpen]);

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  /* Reset when closed */
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setExpandedLink(null);
        setExpandedCategory(null);
      }, 400); // wait for slide-out to finish before resetting
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const toggleLink = (link) => {
    setExpandedLink(prev => (prev === link ? null : link));
    setExpandedCategory(null);
  };

  const toggleCategory = (key) =>
    setExpandedCategory(prev => (prev === key ? null : key));

  const hasDrawer = (link) => !!drawerData[link];

  if (!mounted) return null; // don't render until first open

  return (
    <>
      {/* ── Backdrop ─────────────────────────────────────────────────── */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 70,
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(4px)',
          transition: 'opacity 350ms ease',
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
      />

      {/* ── Bottom Sheet ─────────────────────────────────────────────── */}
      <div
        style={{
          position: 'fixed',
          bottom: 0, left: 0, right: 0,
          zIndex: 75,
          height: '92dvh',
          background: '#fff',
          borderTopLeftRadius: 22,
          borderTopRightRadius: 22,
          boxShadow: '0 -12px 60px rgba(0,0,0,0.22)',
          display: 'flex',
          flexDirection: 'column',
          /* ← THE REAL smooth spring curve applied via inline style */
          transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 480ms cubic-bezier(0.32, 0.72, 0, 1)',
          willChange: 'transform',
        }}
      >
        {/* Handle bar */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 6px' }}>
          <div style={{ width: 40, height: 4, borderRadius: 99, background: '#d1d5db' }} />
        </div>

        {/* Header row */}
        <div
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '10px 20px 10px',
            borderBottom: '1px solid #f3f4f6',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
            <div style={{ position: 'relative', width: 28, height: 28 }}>
              <div style={{
                position: 'absolute', top: 0,
                width: 0, height: 0,
                borderLeft: '14px solid transparent',
                borderRight: '14px solid transparent',
                borderBottom: '24px solid black',
              }} />
            </div>
            <span style={{ fontSize: 18, fontWeight: 900, letterSpacing: '-0.04em', marginTop: 2 }}>
              SELECT
            </span>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              padding: 8, borderRadius: '50%',
              background: '#f3f4f6', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 200ms',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#e5e7eb'}
            onMouseLeave={e => e.currentTarget.style.background = '#f3f4f6'}
          >
            <X size={19} strokeWidth={1.6} />
          </button>
        </div>

        {/* ── Scrollable nav list ───────────────────────────────────── */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '8px 20px 24px', WebkitOverflowScrolling: 'touch' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map((link, linkIdx) => {
              const data = drawerData[link];
              const isExpanded = expandedLink === link;
              const cats = data?.categories || [];
              const hasSubs = hasDrawer(link);

              return (
                <li
                  key={link}
                  style={{
                    borderBottom: '1px solid #f3f4f6',
                    /* Stagger items on open */
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
                    transition: `opacity 350ms ease ${linkIdx * 40}ms, transform 350ms ease ${linkIdx * 40}ms`,
                  }}
                >
                  {/* Top-level row */}
                  <button
                    onClick={() => hasSubs && toggleLink(link)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between', padding: '16px 0',
                      background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                    }}
                  >
                    <span style={{
                      fontSize: 13, fontWeight: 700,
                      letterSpacing: '0.12em', color: '#000',
                    }}>
                      {link}
                    </span>
                    {hasSubs && (
                      <ChevronDown
                        size={17}
                        strokeWidth={1.8}
                        style={{
                          color: '#9ca3af',
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 350ms cubic-bezier(0.4,0,0.2,1)',
                        }}
                      />
                    )}
                  </button>

                  {/* Category accordion */}
                  {hasSubs && (
                    <Accordion isOpen={isExpanded}>
                      <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 12px 0' }}>
                        {cats.map((cat, idx) => {
                          const isObj = typeof cat === 'object';
                          const catName = isObj ? cat.name : cat;
                          const subCats = isObj && cat.subCategories ? cat.subCategories : [];
                          const catKey = `${link}-${catName}`;
                          const isCatExpanded = expandedCategory === catKey;

                          return (
                            <li
                              key={idx}
                              style={{ borderLeft: '2px solid #f3f4f6', marginLeft: 4 }}
                            >
                              {subCats.length > 0 ? (
                                <>
                                  {/* Category row */}
                                  <button
                                    onClick={() => toggleCategory(catKey)}
                                    style={{
                                      width: '100%', display: 'flex', alignItems: 'center',
                                      justifyContent: 'space-between',
                                      padding: '11px 4px 11px 16px',
                                      background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                                    }}
                                  >
                                    <span style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: '0.08em', color: '#374151' }}>
                                      {catName}
                                    </span>
                                    <ChevronDown
                                      size={14}
                                      strokeWidth={1.8}
                                      style={{
                                        color: '#9ca3af',
                                        transform: isCatExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 320ms cubic-bezier(0.4,0,0.2,1)',
                                      }}
                                    />
                                  </button>

                                  {/* Sub-categories accordion */}
                                  <Accordion isOpen={isCatExpanded}>
                                    <ul style={{
                                      listStyle: 'none', margin: '0 0 8px 16px', padding: 0,
                                    }}>
                                      {subCats.map((sub, si) => (
                                        <li
                                          key={si}
                                          style={{
                                            display: 'flex', alignItems: 'center', gap: 12,
                                            padding: '8px 0 8px 16px',
                                            borderLeft: '1px solid #f3f4f6',
                                            cursor: 'pointer',
                                          }}
                                        >
                                          {sub.image && (
                                            <div style={{
                                              width: 32, height: 32, flexShrink: 0,
                                              borderRadius: 6, overflow: 'hidden', background: '#f9fafb',
                                            }}>
                                              <img
                                                src={sub.image}
                                                alt={sub.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                loading="lazy"
                                              />
                                            </div>
                                          )}
                                          <span style={{
                                            fontSize: 11.5, fontWeight: 500,
                                            letterSpacing: '0.07em', color: '#6b7280',
                                          }}>
                                            {sub.name}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </Accordion>
                                </>
                              ) : (
                                /* Simple category */
                                <div style={{
                                  padding: '11px 0 11px 16px', cursor: 'pointer',
                                  borderRadius: '0 8px 8px 0',
                                }}>
                                  <span style={{ fontSize: 12.5, fontWeight: 500, letterSpacing: '0.08em', color: '#374151' }}>
                                    {catName}
                                  </span>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </Accordion>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Bottom — language */}
          <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid #f3f4f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <div style={{
                width: 20, height: 20, borderRadius: '50%', background: '#2563eb',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Globe size={11} color="#fff" />
              </div>
              <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', color: '#374151', display: 'flex', alignItems: 'center', gap: 4 }}>
                International <ChevronDown size={12} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
