import React, { useState, useEffect } from 'react';

export default function BenHarrisResume() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [testimonialFade, setTestimonialFade] = useState(true);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('benharris207@gmail.com');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const testimonials = [
    {
      quote: "Ben Harris is without equal when it comes to resourcefulness. He listens intently to understand needs, questions, and requirements and seems to always pull together the appropriate team, application, or tool to accomplish the mission. His ability to effectively manage staff and volunteers is exceptional. We are a better organization because of his engagement!",
      author: "Mike Harris",
      title: "President, Board of Directors",
      org: "Friends of Mimosa Hall & Gardens"
    },
    {
      quote: "Ben Harris is a 'get things done' individual. His spirited work style and constant positive demeanor make it a pleasure to work with him. Ben points to where he's about to hit the ball, then he delivers home run after home run. He's doing a great job creating organizational structure for our young non-profit and we're lucky to have him!",
      author: "Steve Gibson",
      title: "Founding President, Board of Directors",
      org: "Friends of Mimosa Hall & Gardens"
    },
    {
      quote: "Ben grew our volunteer base by 150% in under one month and then managed all volunteers to produce excellent results. Once elected, Ben became my Director of Communications and Constituent Outreach and continued in assisting me in reaching out to our constituents with practical solutions to a variety of issues.",
      author: "State Representative Mary Robichaux",
      title: "Georgia House of Representatives",
      org: "District 48"
    },
    {
      quote: "Ben helped coordinate our volunteers into a well-oiled machine. After bringing him on the team, our engagement with the community went up significantly. In difficult situations he was not flustered, and he was always willing to step outside of his job description to lend a hand. I can say with confidence that he helped take us from a loss to a win.",
      author: "Preston Thompson",
      title: "Campaign Manager / Chief of Staff",
      org: "Georgia House of Representatives, District 48"
    },
    {
      quote: "Ben Harris is a dynamic and knowledgeable coach, speaker, and counselor with a giant heart, strong intellect, and core values. He is exceptional in identifying strengths and providing encouraging insight into managing challenges. He is honest, trustworthy, genuine, accountable, and reliable.",
      author: "Sharry Conroy",
      title: "Associate Director, Career Advancement Center",
      org: "Robinson College of Business"
    },
    {
      quote: "He always does what is right - even if it is inconvenient to him, he will always make sure that things are done with integrity. His focus on integrity is what helps him build trust with those he comes in contact with. If you're looking for someone to connect with people and help align them towards a common vision - I wouldn't hesitate in recommending Ben.",
      author: "Phillip Chen",
      title: "Co-founder",
      org: "Hobnob, LLC"
    },
    {
      quote: "Having Ben as a manager was the best part of working at Cold Stone. He truly believes that people work harder when they have a love for what they are doing and feel that they have a stake in it. By showing compassion to employees when needed and recognizing achievements and talents, Ben promotes a healthy work environment.",
      author: "Theresa Stowe",
      title: "Store Manager",
      org: "Cold Stone Creamery"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialFade(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setTestimonialFade(true);
      }, 500);
    }, 12000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const experiences = [
    {
      company: "Sibling Strong Retreats",
      role: "Co-founder",
      period: "Jan 2025 — Present",
      location: "Decatur, GA",
      description: "A peer-support retreat program for bereaved siblings built on 3 pillars of adventure activity, grief work, and rest.",
      highlights: ["Mission & Strategy", "Fundraising ($2k+)", "Brand Development", "Event Planning"]
    },
    {
      company: "Everly",
      role: "Co-founder / Chief Operating Officer",
      period: "Oct 2020 — Dec 2024",
      location: "Decatur, GA",
      description: "A digital platform supporting grievers and end-of-life pre-planners. Led development of 4 innovative products and raised $395,000 in angel investment.",
      highlights: ["$395k Raised", "4 Products Launched", "Team of 4 Direct Reports", "6 Media Features"]
    },
    {
      company: "Friends of Mimosa Hall & Gardens",
      role: "Engagement Director / Strategic Consultant",
      period: "Jan 2020 — Apr 2021",
      location: "Roswell, GA",
      description: "A 501(c)-3 stewarding the oldest net-zero home in America. Delivered 5-year business plan and built relationships with board members and city officials.",
      highlights: ["5-Year Business Plan", "12+ Board Relationships", "CRM Implementation", "COVID Response Strategy"]
    },
    {
      company: "Office of GA House Rep. Mary Robichaux",
      role: "Director of Communications & Constituent Engagement",
      period: "Oct 2018 — Dec 2019",
      location: "Atlanta & Roswell, GA",
      description: "Managed constituent engagement, coordinated public forums, and built relationships with government officials and advocacy groups.",
      highlights: ["250-300% Volunteer Increase", "26 Newsletters Published", "80%+ Subscriber Growth", "Public Forum Coordination"]
    },
    {
      company: "Robinson College of Business, Georgia State University",
      role: "Career Counselor & Adjunct Professor",
      period: "Oct 2015 — May 2018",
      location: "Atlanta, GA",
      description: "Developed and led a Business Communication Lab reaching 1500+ students annually. Created student ambassador program and coordinated 15+ events per semester.",
      highlights: ["1500+ Students Annually", "Business Communication Lab", "Ambassador Program", "110+ Event Attendance"]
    },
    {
      company: "Hobnob, LLC",
      role: "Founder & Operator",
      period: "Nov 2006 — Nov 2012",
      location: "Atlanta, GA",
      description: "Co-founded career-based startup licensing peer-based curriculum to college career centers including Emory University and UC-Irvine.",
      highlights: ["2 University Partnerships", "6 Curriculum Iterations", "Public Presentations", "Peer-Support Model"]
    }
  ];

  const skills = [
    { category: "Leadership", items: ["Strategic Planning", "Team Management", "Servant Leadership", "Board Relations"] },
    { category: "Communications", items: ["Public Speaking", "Content Strategy", "Newsletter Writing", "Media Relations"] },
    { category: "Engagement", items: ["Stakeholder Relations", "Community Building", "Volunteer Management", "Advocacy"] },
    { category: "Operations", items: ["Fundraising", "Event Planning", "CRM Systems", "Process Development"] }
  ];

  const volunteering = [
    {
      org: "Military Surviving Siblings & TAPS",
      role: "Facilitator / Peer Mentor / Advocate",
      period: "Jun 2012 — Present",
      description: "Founded ~300-member group for Military Surviving Siblings. Addressed 5,000 attendees at DoD/VA Joint Conference on Suicide Prevention.",
      highlights: ["~300 Members", "5,000 Conference Attendees", "DoD/VA Partnership", "Peer Mentorship"]
    },
    {
      org: "Inkomoko",
      role: "Entrepreneur-in-Residence / Mentor",
      period: "Apr 2013 — May 2013",
      location: "Kigali, Rwanda",
      description: "1 of 2 mentors in inaugural cohort; mentored business owners for 7 weeks in Africa.",
      highlights: ["Inaugural Cohort", "7 Weeks in Rwanda", "Business Mentorship", "International Development"]
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(165deg, #1a1a1a 0%, #0d0d0d 50%, #1a1410 100%)',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: '#e8e4df',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Grain overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        opacity: 0.03,
        pointerEvents: 'none',
        zIndex: 100
      }} />

      {/* Decorative accent line */}
      <div style={{
        position: 'fixed',
        left: '20px',
        top: 0,
        bottom: 0,
        width: '1px',
        background: 'linear-gradient(to bottom, transparent 0%, #c9a87c 20%, #c9a87c 80%, transparent 100%)',
        opacity: 0.3,
        zIndex: 1
      }} />

      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '80px 40px',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Header */}
        <header style={{
          marginBottom: '80px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '20px',
            marginBottom: '12px',
            flexWrap: 'wrap'
          }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              fontWeight: 400,
              letterSpacing: '-0.03em',
              margin: 0,
              fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, serif",
              background: 'linear-gradient(135deg, #f5f0e8 0%, #c9a87c 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Ben Harris
            </h1>
            <span style={{
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#8a8275',
              fontFamily: "'Trebuchet MS', sans-serif"
            }}>
              20+ Years
            </span>
          </div>

          <p style={{
            fontSize: '1.3rem',
            fontWeight: 300,
            color: '#a09485',
            margin: '0 0 40px 0',
            fontStyle: 'italic',
            letterSpacing: '0.02em'
          }}>
            Communications · Engagement · Leadership
          </p>

          <div style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
            fontSize: '0.85rem',
            fontFamily: "'Trebuchet MS', sans-serif",
            marginBottom: '32px'
          }}>
            {[
              { label: 'Email', value: 'benharris207@gmail.com', copyable: true },
              { label: 'Phone', value: '404.387.3323' },
              { label: 'Location', value: 'Decatur, GA' },
              { label: 'LinkedIn', value: '/in/benharris207', url: 'https://www.linkedin.com/in/benharris207' }
            ].map((item, i) => (
              <div key={i} style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.3 + i * 0.1}s`
              }}>
                <span style={{
                  color: '#5a554d',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontSize: '0.7rem',
                  display: 'block',
                  marginBottom: '4px'
                }}>
                  {item.label}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" style={{
                      color: '#c9a87c',
                      textDecoration: 'none',
                      transition: 'opacity 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                    >{item.value}</a>
                  ) : (
                    <span style={{ color: '#c9a87c' }}>{item.value}</span>
                  )}
                  {item.copyable && (
                    <button
                      onClick={copyEmail}
                      style={{
                        background: emailCopied ? 'rgba(201, 168, 124, 0.2)' : 'rgba(201, 168, 124, 0.08)',
                        border: '1px solid rgba(201, 168, 124, 0.3)',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        cursor: 'pointer',
                        color: '#c9a87c',
                        fontSize: '0.7rem',
                        fontFamily: "'Trebuchet MS', sans-serif",
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!emailCopied) e.target.style.background = 'rgba(201, 168, 124, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        if (!emailCopied) e.target.style.background = 'rgba(201, 168, 124, 0.08)';
                      }}
                    >
                      {emailCopied ? '✓ Copied' : 'Copy'}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <a
            href="/Ben Harris 2026 Resume & Testimonials.pdf"
            download
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              background: 'linear-gradient(135deg, #c9a87c 0%, #b8966b 100%)',
              color: '#1a1a1a',
              textDecoration: 'none',
              borderRadius: '6px',
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              border: '2px solid #c9a87c',
              boxShadow: '0 4px 12px rgba(201, 168, 124, 0.2)',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 20px rgba(201, 168, 124, 0.35)';
              e.target.style.background = 'linear-gradient(135deg, #d4b388 0%, #c9a87c 100%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(201, 168, 124, 0.2)';
              e.target.style.background = 'linear-gradient(135deg, #c9a87c 0%, #b8966b 100%)';
            }}
          >
            Download Resume PDF
          </a>
        </header>

        {/* About section */}
        <section style={{
          marginBottom: '80px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
        }}>
          <h2 style={{
            fontSize: '0.7rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#5a554d',
            marginBottom: '24px',
            fontFamily: "'Trebuchet MS', sans-serif",
            fontWeight: 500
          }}>
            About
          </h2>
          <p style={{
            fontSize: '1.15rem',
            lineHeight: 1.8,
            color: '#b8b0a5',
            maxWidth: '750px',
            margin: 0
          }}>
            Results-driven professional with <span style={{ color: '#c9a87c' }}>20+ years' experience</span> in
            communications, engagement, and management. Proven track record in external relations, advocacy,
            and strategic stakeholder engagement. Passionate about leveraging strategic thinking and collaborative
            approaches to identify problems, create solutions, and amplify impact. Recognized for
            <span style={{ color: '#c9a87c' }}> high standards, empathy, integrity</span>, and a servant-leadership approach.
          </p>
        </section>

        {/* Testimonial Section */}
        <section style={{
          marginBottom: '80px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
        }}>
          <h2 style={{
            fontSize: '0.7rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#5a554d',
            marginBottom: '32px',
            fontFamily: "'Trebuchet MS', sans-serif",
            fontWeight: 500
          }}>
            What People Say
          </h2>

          <div style={{
            background: 'rgba(201, 168, 124, 0.04)',
            border: '1px solid rgba(201, 168, 124, 0.12)',
            borderRadius: '8px',
            padding: '40px',
            position: 'relative',
            minHeight: '220px'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '30px',
              fontSize: '4rem',
              color: 'rgba(201, 168, 124, 0.15)',
              fontFamily: 'Georgia, serif',
              lineHeight: 1
            }}>
              "
            </div>

            <div style={{
              opacity: testimonialFade ? 1 : 0,
              transform: testimonialFade ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.5s ease'
            }}>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: '#b8b0a5',
                margin: '0 0 24px 0',
                fontStyle: 'italic'
              }}>
                {testimonials[currentTestimonial].quote}
              </p>

              <div>
                <p style={{
                  fontSize: '1rem',
                  color: '#c9a87c',
                  margin: '0 0 4px 0',
                  fontWeight: 500
                }}>
                  {testimonials[currentTestimonial].author}
                </p>
                <p style={{
                  fontSize: '0.85rem',
                  color: '#6a655d',
                  margin: 0,
                  fontFamily: "'Trebuchet MS', sans-serif"
                }}>
                  {testimonials[currentTestimonial].title}, {testimonials[currentTestimonial].org}
                </p>
              </div>
            </div>

            {/* Testimonial dots */}
            <div style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              marginTop: '24px'
            }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setTestimonialFade(false);
                    setTimeout(() => {
                      setCurrentTestimonial(i);
                      setTestimonialFade(true);
                    }, 300);
                  }}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    border: 'none',
                    background: i === currentTestimonial ? '#c9a87c' : 'rgba(201, 168, 124, 0.25)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Experience section */}
        <section style={{
          marginBottom: '80px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s'
        }}>
          <h2 style={{
            fontSize: '0.7rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#5a554d',
            marginBottom: '48px',
            fontFamily: "'Trebuchet MS', sans-serif",
            fontWeight: 500
          }}>
            Experience
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {experiences.map((exp, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveSection(i)}
                onMouseLeave={() => setActiveSection(null)}
                style={{
                  padding: '24px 28px',
                  marginLeft: '-28px',
                  borderRadius: '4px',
                  background: activeSection === i ? 'rgba(201, 168, 124, 0.03)' : 'transparent',
                  borderLeft: activeSection === i ? '2px solid #c9a87c' : '2px solid transparent',
                  transition: 'all 0.4s ease',
                  cursor: 'default'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '6px',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    margin: 0,
                    color: '#f5f0e8'
                  }}>
                    {exp.company}
                  </h3>
                  <span style={{
                    fontSize: '0.8rem',
                    color: '#6a655d',
                    fontFamily: "'Trebuchet MS', sans-serif",
                    letterSpacing: '0.1em'
                  }}>
                    {exp.period}
                  </span>
                </div>

                <p style={{
                  fontSize: '1rem',
                  color: '#c9a87c',
                  margin: '0 0 4px 0',
                  fontStyle: 'italic'
                }}>
                  {exp.role}
                </p>

                <p style={{
                  fontSize: '0.8rem',
                  color: '#5a554d',
                  margin: '0 0 12px 0',
                  fontFamily: "'Trebuchet MS', sans-serif"
                }}>
                  {exp.location}
                </p>

                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: '#8a8275',
                  margin: '0 0 16px 0'
                }}>
                  {exp.description}
                </p>

                <div style={{
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}>
                  {exp.highlights.map((tag, j) => (
                    <span key={j} style={{
                      fontSize: '0.72rem',
                      padding: '5px 12px',
                      background: 'rgba(201, 168, 124, 0.08)',
                      border: '1px solid rgba(201, 168, 124, 0.15)',
                      borderRadius: '20px',
                      color: '#a09485',
                      fontFamily: "'Trebuchet MS', sans-serif"
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills section */}
        <section style={{
          marginBottom: '80px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s'
        }}>
          <h2 style={{
            fontSize: '0.7rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#5a554d',
            marginBottom: '48px',
            fontFamily: "'Trebuchet MS', sans-serif",
            fontWeight: 500
          }}>
            Core Competencies
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '40px'
          }}>
            {skills.map((skill, i) => (
              <div key={i}>
                <h4 style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#c9a87c',
                  marginBottom: '16px',
                  fontFamily: "'Trebuchet MS', sans-serif",
                  fontWeight: 500
                }}>
                  {skill.category}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {skill.items.map((item, j) => (
                    <span key={j} style={{
                      fontSize: '0.95rem',
                      color: '#8a8275'
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteering section */}
        <section style={{
          marginBottom: '80px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s'
        }}>
          <h2 style={{
            fontSize: '0.7rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#5a554d',
            marginBottom: '48px',
            fontFamily: "'Trebuchet MS', sans-serif",
            fontWeight: 500
          }}>
            Volunteering & Impact
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {volunteering.map((vol, i) => (
              <div
                key={i}
                onMouseEnter={() => setActiveSection(`vol-${i}`)}
                onMouseLeave={() => setActiveSection(null)}
                style={{
                  padding: '24px 28px',
                  marginLeft: '-28px',
                  borderRadius: '4px',
                  background: activeSection === `vol-${i}` ? 'rgba(201, 168, 124, 0.03)' : 'transparent',
                  borderLeft: activeSection === `vol-${i}` ? '2px solid #c9a87c' : '2px solid transparent',
                  transition: 'all 0.4s ease',
                  cursor: 'default'
                }}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  marginBottom: '6px',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    margin: 0,
                    color: '#f5f0e8'
                  }}>
                    {vol.org}
                  </h3>
                  <span style={{
                    fontSize: '0.8rem',
                    color: '#6a655d',
                    fontFamily: "'Trebuchet MS', sans-serif",
                    letterSpacing: '0.1em'
                  }}>
                    {vol.period}
                  </span>
                </div>

                <p style={{
                  fontSize: '1rem',
                  color: '#c9a87c',
                  margin: '0 0 4px 0',
                  fontStyle: 'italic'
                }}>
                  {vol.role}
                </p>

                {vol.location && (
                  <p style={{
                    fontSize: '0.8rem',
                    color: '#5a554d',
                    margin: '0 0 12px 0',
                    fontFamily: "'Trebuchet MS', sans-serif"
                  }}>
                    {vol.location}
                  </p>
                )}

                <p style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: '#8a8275',
                  margin: '0 0 16px 0'
                }}>
                  {vol.description}
                </p>

                <div style={{
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}>
                  {vol.highlights.map((tag, j) => (
                    <span key={j} style={{
                      fontSize: '0.72rem',
                      padding: '5px 12px',
                      background: 'rgba(201, 168, 124, 0.08)',
                      border: '1px solid rgba(201, 168, 124, 0.15)',
                      borderRadius: '20px',
                      color: '#a09485',
                      fontFamily: "'Trebuchet MS', sans-serif"
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education section */}
        <section style={{
          marginBottom: '80px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1s'
        }}>
          <h2 style={{
            fontSize: '0.7rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#5a554d',
            marginBottom: '32px',
            fontFamily: "'Trebuchet MS', sans-serif",
            fontWeight: 500
          }}>
            Education
          </h2>

          <div>
            <h3 style={{
              fontSize: '1.3rem',
              fontWeight: 400,
              margin: '0 0 8px 0',
              color: '#f5f0e8'
            }}>
              Emory University
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#c9a87c',
              margin: 0,
              fontStyle: 'italic'
            }}>
              Bachelor of Arts, English / Creative Writing
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          paddingTop: '60px',
          borderTop: '1px solid rgba(201, 168, 124, 0.1)',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease 1.2s'
        }}>
          <p style={{
            fontSize: '0.8rem',
            color: '#4a453d',
            textAlign: 'center',
            fontFamily: "'Trebuchet MS', sans-serif",
            letterSpacing: '0.1em'
          }}>
            Available for new opportunities · benharris207@gmail.com
          </p>
        </footer>
      </div>
    </div>
  );
}
