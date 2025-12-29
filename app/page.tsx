'use client';

import React, { useState } from 'react';
import { ChevronDown, AlertCircle, Brain, Heart, Activity, Info } from 'lucide-react';

export default function PMIAExplorer() {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [hoveredCondition, setHoveredCondition] = useState<string | null>(null);


const toggleSection = (section: string | null) => {
  setActiveSection(activeSection === section ? null : section);
};

  const metabolicConditions = [
    { name: "Metabolic Syndrome & Obesity", icon: "⚖️", color: "#ff6b6b" },
    { name: "Cardiovascular Diseases", icon: "❤️", color: "#ee5a6f" },
    { name: "Type 2 Diabetes", icon: "🩸", color: "#c92a2a" },
    { name: "Kidney Disease (CKD)", icon: "🫘", color: "#fa5252" },
    { name: "Liver Disease (NAFLD/MAFLD)", icon: "🫀", color: "#f03e3e" },
    { name: "Atherosclerosis", icon: "🔴", color: "#e03131" }
  ];

  const neurologicalConditions = [
    { name: "Autism Spectrum Disorder", icon: "🧩", color: "#4c6ef5" },
    { name: "ADHD", icon: "⚡", color: "#4263eb" },
    { name: "Bipolar Disorder", icon: "🎭", color: "#3b5bdb" },
    { name: "Major Depression", icon: "🌧️", color: "#364fc7" },
    { name: "Anxiety Disorders", icon: "😰", color: "#5c7cfa" },
    { name: "Schizophrenia", icon: "🧠", color: "#748ffc" },
    { name: "Cognitive Decline & Dementia", icon: "💭", color: "#91a7ff" },
    { name: "Aggression & Conduct Disorders", icon: "💥", color: "#4dabf7" },
    { name: "Suicidality", icon: "⚠️", color: "#339af0" }
  ];

  const otherConditions = [
    { name: "Gout", icon: "🦶", color: "#ff922b" },
    { name: "Kidney Stones", icon: "💎", color: "#fd7e14" },
    { name: "Pernicious Anemia", icon: "🩸", color: "#f76707" },
    { name: "Psoriasis", icon: "🔴", color: "#e8590c" },
    { name: "Sleep Apnea", icon: "😴", color: "#d9480f" }
  ];

  const mechanisms = [
    {
      title: "Nitric Oxide Inhibition",
      description: "Blocks NO production, impairing blood vessel relaxation and insulin function",
      icon: "🚫"
    },
    {
      title: "Oxidative Stress",
      description: "Acts as antioxidant outside cells, but becomes pro-oxidant inside cells",
      icon: "⚡"
    },
    {
      title: "NLRP3 Inflammasome",
      description: "Activates immune system, triggering chronic systemic inflammation",
      icon: "🔥"
    },
    {
      title: "Mitochondrial Dysfunction",
      description: "Impairs cellular energy production, considered unifying factor in many disorders",
      icon: "⚙️"
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#e8e8e8',
      fontFamily: '"Crimson Pro", "Cormorant Garamond", Georgia, serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'fixed',
        top: '10%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(76, 110, 245, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        bottom: '-10%',
        left: '-10%',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, rgba(255, 107, 107, 0.12) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(90px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <header style={{
          padding: '80px 40px 60px',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(10, 10, 20, 0.4)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            fontSize: '15px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#7dd3fc',
            marginBottom: '20px',
            fontFamily: '"JetBrains Mono", "Courier New", monospace',
            fontWeight: '500'
          }}>
            The Hidden Epidemic
          </div>
          <h1 style={{
            fontSize: 'clamp(48px, 8vw, 92px)',
            fontWeight: '300',
            lineHeight: '1.1',
            margin: '0 0 30px',
            background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.02em'
          }}>
            Purinergic-Mitochondrial-<br />Inflammatory Axis
          </h1>
          <p style={{
            fontSize: '22px',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: '1.6',
            color: '#cbd5e1',
            fontWeight: '300'
          }}>
            How elevated uric acid from dysfunctional purine metabolism triggers a cascade of modern metabolic, neurological, and inflammatory diseases
          </p>
        </header>

        {/* Allopurinol Etymology Section */}
        <section style={{
          padding: '80px 40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(125, 211, 252, 0.08) 0%, rgba(76, 110, 245, 0.08) 100%)',
            border: '1px solid rgba(125, 211, 252, 0.2)',
            borderRadius: '24px',
            padding: '50px',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: '300',
              marginBottom: '30px',
              color: '#7dd3fc',
              letterSpacing: '-0.01em'
            }}>
              Understanding Allopurinol
            </h2>
            <p style={{
              fontSize: '20px',
              lineHeight: '1.8',
              color: '#e2e8f0',
              marginBottom: '30px'
            }}>
              The name <strong style={{ color: '#7dd3fc', fontWeight: '600' }}>allopurinol</strong> is a combination of three parts that describe its chemical structure and function:
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '25px',
              marginTop: '40px'
            }}>
              {[
                {
                  prefix: "Allo-",
                  origin: "Greek: allos (ἄλλος)",
                  meaning: '"other" or "different"'
                },
                {
                  prefix: "-purin-",
                  origin: "Chemical term",
                  meaning: "Refers to purine molecules"
                },
                {
                  prefix: "-ol",
                  origin: "Chemical suffix",
                  meaning: "Contains hydroxyl group"
                }
              ].map((part, idx) => (
                <div key={idx} style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(125, 211, 252, 0.15)',
                  borderRadius: '16px',
                  padding: '30px',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}>
                  <div style={{
                    fontSize: '32px',
                    fontWeight: '600',
                    color: '#7dd3fc',
                    marginBottom: '15px',
                    fontFamily: '"JetBrains Mono", monospace'
                  }}>
                    {part.prefix}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#94a3b8',
                    marginBottom: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {part.origin}
                  </div>
                  <div style={{
                    fontSize: '17px',
                    color: '#cbd5e1',
                    lineHeight: '1.5'
                  }}>
                    {part.meaning}
                  </div>
                </div>
              ))}
            </div>
            <div style={{
              marginTop: '40px',
              padding: '30px',
              background: 'rgba(125, 211, 252, 0.05)',
              borderLeft: '4px solid #7dd3fc',
              borderRadius: '8px'
            }}>
              <p style={{
                fontSize: '19px',
                lineHeight: '1.7',
                color: '#e2e8f0',
                margin: 0
              }}>
                Together, the name translates to <strong style={{ color: '#7dd3fc' }}>"a different purine"</strong>. This is because allopurinol is a structural isomer (a slightly different version) of natural purine molecules. It works by mimicking these molecules to block the enzyme that creates uric acid, helping prevent gout and kidney stones.
              </p>
            </div>
          </div>
        </section>

        {/* The Core Problem */}
        <section style={{
          padding: '80px 40px',
          background: 'rgba(10, 10, 20, 0.3)',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '300',
              marginBottom: '40px',
              textAlign: 'center',
              color: '#f87171',
              letterSpacing: '-0.01em'
            }}>
              The Core Problem: Elevated Uric Acid
            </h2>
            <p style={{
              fontSize: '20px',
              lineHeight: '1.8',
              color: '#e2e8f0',
              maxWidth: '900px',
              margin: '0 auto 50px',
              textAlign: 'center'
            }}>
              Elevated uric acid (hyperuricemia) is increasingly recognized as a <strong style={{ color: '#f87171' }}>central driver</strong> for a wide range of modern metabolic and inflammatory disorders. It is no longer viewed only as a cause of gout.
            </p>

            {/* Mechanisms */}
            <h3 style={{
              fontSize: '32px',
              fontWeight: '400',
              marginBottom: '35px',
              color: '#fbbf24',
              textAlign: 'center',
              marginTop: '60px'
            }}>
              Mechanisms of Systemic Damage
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '30px',
              marginBottom: '60px'
            }}>
              {mechanisms.map((mech, idx) => (
                <div key={idx} style={{
                  background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(245, 158, 11, 0.08) 100%)',
                  border: '1px solid rgba(251, 191, 36, 0.2)',
                  borderRadius: '20px',
                  padding: '35px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'default'
                }}>
                  <div style={{
                    fontSize: '48px',
                    marginBottom: '20px'
                  }}>
                    {mech.icon}
                  </div>
                  <h4 style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#fbbf24',
                    marginBottom: '15px',
                    lineHeight: '1.3'
                  }}>
                    {mech.title}
                  </h4>
                  <p style={{
                    fontSize: '17px',
                    lineHeight: '1.6',
                    color: '#cbd5e1',
                    margin: 0
                  }}>
                    {mech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions Linked to PMIA */}
        <section style={{
          padding: '80px 40px',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '300',
            marginBottom: '20px',
            textAlign: 'center',
            letterSpacing: '-0.01em'
          }}>
            Conditions Linked to the PMIA
          </h2>
          <p style={{
            fontSize: '19px',
            lineHeight: '1.7',
            color: '#cbd5e1',
            maxWidth: '800px',
            margin: '0 auto 60px',
            textAlign: 'center'
          }}>
            When uric acid levels are dysregulated, they interfere with cellular communication, impair energy production, and trigger widespread inflammation across multiple body systems.
          </p>

          {/* Metabolic & Cardiovascular */}
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{
              fontSize: '32px',
              fontWeight: '400',
              marginBottom: '30px',
              color: '#f87171',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <Heart size={36} />
              Metabolic & Cardiovascular Disorders
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {metabolicConditions.map((condition, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCondition(condition.name)}
                  onMouseLeave={() => setHoveredCondition(null)}
                  style={{
                    background: hoveredCondition === condition.name
                      ? `linear-gradient(135deg, ${condition.color}20 0%, ${condition.color}10 100%)`
                      : 'rgba(15, 23, 42, 0.5)',
                    border: `1px solid ${hoveredCondition === condition.name ? condition.color + '60' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '16px',
                    padding: '25px',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    transform: hoveredCondition === condition.name ? 'translateY(-4px)' : 'translateY(0)'
                  }}
                >
                  <div style={{
                    fontSize: '36px',
                    marginBottom: '12px'
                  }}>
                    {condition.icon}
                  </div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '500',
                    color: '#e2e8f0',
                    lineHeight: '1.4'
                  }}>
                    {condition.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Neurological & Psychiatric */}
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{
              fontSize: '32px',
              fontWeight: '400',
              marginBottom: '30px',
              color: '#818cf8',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <Brain size={36} />
              Neurological & Psychiatric Conditions
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {neurologicalConditions.map((condition, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCondition(condition.name)}
                  onMouseLeave={() => setHoveredCondition(null)}
                  style={{
                    background: hoveredCondition === condition.name
                      ? `linear-gradient(135deg, ${condition.color}20 0%, ${condition.color}10 100%)`
                      : 'rgba(15, 23, 42, 0.5)',
                    border: `1px solid ${hoveredCondition === condition.name ? condition.color + '60' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '16px',
                    padding: '25px',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    transform: hoveredCondition === condition.name ? 'translateY(-4px)' : 'translateY(0)'
                  }}
                >
                  <div style={{
                    fontSize: '36px',
                    marginBottom: '12px'
                  }}>
                    {condition.icon}
                  </div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '500',
                    color: '#e2e8f0',
                    lineHeight: '1.4'
                  }}>
                    {condition.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Conditions */}
          <div>
            <h3 style={{
              fontSize: '32px',
              fontWeight: '400',
              marginBottom: '30px',
              color: '#fb923c',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <Activity size={36} />
              Additional Related Conditions
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '20px'
            }}>
              {otherConditions.map((condition, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCondition(condition.name)}
                  onMouseLeave={() => setHoveredCondition(null)}
                  style={{
                    background: hoveredCondition === condition.name
                      ? `linear-gradient(135deg, ${condition.color}20 0%, ${condition.color}10 100%)`
                      : 'rgba(15, 23, 42, 0.5)',
                    border: `1px solid ${hoveredCondition === condition.name ? condition.color + '60' : 'rgba(255, 255, 255, 0.08)'}`,
                    borderRadius: '16px',
                    padding: '25px',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    transform: hoveredCondition === condition.name ? 'translateY(-4px)' : 'translateY(0)'
                  }}
                >
                  <div style={{
                    fontSize: '36px',
                    marginBottom: '12px'
                  }}>
                    {condition.icon}
                  </div>
                  <div style={{
                    fontSize: '18px',
                    fontWeight: '500',
                    color: '#e2e8f0',
                    lineHeight: '1.4'
                  }}>
                    {condition.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Historical Context */}
        <section style={{
          padding: '80px 40px',
          background: 'rgba(10, 10, 20, 0.4)',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: '300',
              marginBottom: '40px',
              textAlign: 'center',
              color: '#fbbf24',
              letterSpacing: '-0.01em'
            }}>
              The Hidden History
            </h2>

            {/* Timeline */}
            <div style={{
              position: 'relative',
              paddingLeft: '50px',
              borderLeft: '2px solid rgba(251, 191, 36, 0.3)'
            }}>
              {[
                {
                  era: "Early-Mid 20th Century",
                  title: "Uric Acid as Disease Driver",
                  description: "Physicians like Dr. Alexander Haig theorized uric acid was responsible for nearly all modern ailments."
                },
                {
                  era: "1960s",
                  title: "Paradigm Shift",
                  description: 'Mainstream medicine moved toward viewing uric acid as an "inert waste product" rather than a cause of disease, largely because direct causality was difficult to prove.'
                },
                {
                  era: "1980s",
                  title: "Removed from Lab Panels",
                  description: "Uric acid was removed from standard laboratory panels in the U.S. Official reasoning: prevent over-prescribing allopurinol. Critics argue this led to decades of missed preventative opportunities."
                },
                {
                  era: "1980s-Present",
                  title: "Symptom Management Era",
                  description: "Pharmaceutical industry focused on treating symptoms of metabolic syndrome (blood pressure, blood sugar) with lifelong medications rather than targeting root causes like uric acid."
                },
                {
                  era: "2000s-Present",
                  title: "Renaissance of Understanding",
                  description: "Research increasingly connects hyperuricemia to metabolic syndrome, cardiovascular disease, neurological disorders, and psychiatric conditions. The PMIA framework emerges."
                },
                {
                  era: "2025",
                  title: "Current Recognition",
                  description: "Elevated uric acid now recognized as a significant risk factor for over a dozen major conditions, though it remains understudied and underdiagnosed in clinical practice."
                }
              ].map((item, idx) => (
                <div key={idx} style={{
                  marginBottom: '50px',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-57px',
                    top: '5px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: '#fbbf24',
                    border: '3px solid #1a1a2e',
                    boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)'
                  }} />
                  <div style={{
                    fontSize: '14px',
                    color: '#fbbf24',
                    marginBottom: '8px',
                    fontFamily: '"JetBrains Mono", monospace',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    {item.era}
                  </div>
                  <h4 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#e2e8f0',
                    marginBottom: '12px',
                    lineHeight: '1.3'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontSize: '17px',
                    lineHeight: '1.7',
                    color: '#cbd5e1'
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Points */}
            <div style={{
              marginTop: '60px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '25px'
            }}>
              {[
                {
                  icon: "💰",
                  title: "Profit Incentives",
                  description: "Managing chronic conditions with lifelong medications proved more profitable than addressing underlying metabolic causes."
                },
                {
                  icon: "🔬",
                  title: "Research Suppression",
                  description: "Shift away from metabolic theories toward neurotransmitter-only models aligned with pharmaceutical interests."
                },
                {
                  icon: "📊",
                  title: "Lost Data",
                  description: "Removing uric acid from routine panels made tracking population-level trends nearly impossible for decades."
                }
              ].map((point, idx) => (
                <div key={idx} style={{
                  background: 'rgba(251, 191, 36, 0.05)',
                  border: '1px solid rgba(251, 191, 36, 0.2)',
                  borderRadius: '16px',
                  padding: '30px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <div style={{
                    fontSize: '40px',
                    marginBottom: '15px'
                  }}>
                    {point.icon}
                  </div>
                  <h5 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#fbbf24',
                    marginBottom: '12px'
                  }}>
                    {point.title}
                  </h5>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.6',
                    color: '#cbd5e1',
                    margin: 0
                  }}>
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Current State */}
        <section style={{
          padding: '80px 40px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(167, 139, 250, 0.05) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            borderRadius: '24px',
            padding: '50px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '30px'
            }}>
              <AlertCircle size={48} color="#a78bfa" />
              <h2 style={{
                fontSize: '42px',
                fontWeight: '300',
                margin: 0,
                color: '#a78bfa',
                letterSpacing: '-0.01em'
              }}>
                The Current State
              </h2>
            </div>
            <div style={{
              fontSize: '19px',
              lineHeight: '1.8',
              color: '#e2e8f0',
              marginBottom: '25px'
            }}>
              <p style={{ marginBottom: '20px' }}>
                The <strong style={{ color: '#a78bfa' }}>Purinergic-Mitochondrial-Inflammatory Axis (PMIA)</strong> represents an emerging perspective in medical research. By linking purinergic signaling (cellular communication), mitochondria (energy production), and inflammation (immune response), this framework touches nearly every major chronic illness of the 21st century.
              </p>
              <p style={{ marginBottom: '20px' }}>
                While research continues to explore these intricate relationships, the PMIA offers a potential <strong style={{ color: '#a78bfa' }}>unifying theory</strong> for understanding how metabolic dysfunction cascades into diverse pathologies across multiple organ systems.
              </p>
              <p style={{ margin: 0 }}>
                Emerging fields like <strong style={{ color: '#a78bfa' }}>Metabolic Psychiatry</strong> are contributing to a broader understanding of how metabolic factors—including uric acid dysregulation—may play fundamental roles in conditions traditionally viewed through purely neurochemical lenses.
              </p>
            </div>
            <div style={{
              marginTop: '35px',
              padding: '25px',
              background: 'rgba(167, 139, 250, 0.08)',
              borderLeft: '4px solid #a78bfa',
              borderRadius: '8px'
            }}>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#cbd5e1',
                margin: 0,
                fontStyle: 'italic'
              }}>
                <strong>Note:</strong> The PMIA framework represents active research and emerging perspectives rather than established medical consensus. Ongoing studies continue to investigate the complex relationships between purine metabolism, mitochondrial function, inflammation, and disease pathology.
              </p>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section style={{
          padding: '60px 40px 80px',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h3 style={{
            fontSize: '32px',
            fontWeight: '400',
            marginBottom: '30px',
            color: '#7dd3fc',
            textAlign: 'center'
          }}>
            Further Resources
          </h3>
          <div style={{
            display: 'grid',
            gap: '20px'
          }}>
            {[
              { title: "Mayo Clinic: Gout and Uric Acid", url: "mayoclinic.org" },
              { title: "NIH: Hyperuricemia and Metabolic Health", url: "nih.gov" },
              { title: "Purinergic Signaling Research", url: "frontiersin.org" },
              { title: "Metabolic Health Alliance", url: "metabolichealthalliance.org" },
              { title: "MedlinePlus: Purine Metabolism", url: "medlineplus.gov" }
            ].map((resource, idx) => (
              <div key={idx} style={{
                background: 'rgba(15, 23, 42, 0.5)',
                border: '1px solid rgba(125, 211, 252, 0.2)',
                borderRadius: '12px',
                padding: '20px 25px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <Info size={20} color="#7dd3fc" />
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: '17px',
                    fontWeight: '500',
                    color: '#e2e8f0',
                    marginBottom: '4px'
                  }}>
                    {resource.title}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#7dd3fc',
                    fontFamily: '"JetBrains Mono", monospace'
                  }}>
                    {resource.url}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          padding: '50px 40px',
          textAlign: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(10, 10, 20, 0.5)'
        }}>
          <p style={{
            fontSize: '15px',
            color: '#94a3b8',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            This educational resource presents research on the Purinergic-Mitochondrial-Inflammatory Axis. All medical information should be discussed with qualified healthcare professionals. Individual health conditions vary, and treatment decisions should be made in consultation with licensed medical providers.
          </p>
        </footer>
      </div>
    </div>
  );
}

//TEST