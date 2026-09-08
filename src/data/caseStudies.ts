export interface CaseStudy {
  id: string;
  slug: string;
  category: string;
  cardTitle: string;
  cardSubtitle?: string;
  cardDescription: string;
  cardImage: string;
  
  // Full page content
  pageTitle?: string;
  pageSubtitle?: string;
  executiveSummary?: string;
  challenge?: string;
  methodology?: {
    dataEngine: string;
    processingTechnique: string;
    measurementPhysics: string;
    analyticalFocus: string;
  };
  imagePlaceholder?: {
    src: string;
    caption: string;
  };
  technicalFindings?: {
    zoneClassification: string;
    observedSignal: string;
    interpretation: string;
  }[];
  businessImpact?: {
    title: string;
    description: string;
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "predictive-slope-failure-analysis",
    category: "MINING",
    cardTitle: "Predictive Slope Failure Analysis",
    cardSubtitle: "Retrospective InSAR Analysis of an Active Open-Cast Pit Wall Failure",
    cardDescription: "Following a major structural collapse at an open-cast quarry, InSpectiv Labs conducted a retrospective 12-month InSAR analysis. The radar data revealed widespread ground instability across the terrain, with localized high-velocity red hotspots developing months before physical failure occurred.",
    cardImage: "/images/case_study_1.jpeg",
    
    pageTitle: "Predictive Slope Failure Analysis",
    pageSubtitle: "Retrospective Sentinel-1 InSAR Evaluation of an Active Open-Cast Pit Wall Collapse",
    executiveSummary: "In 2025, a severe quarry wall collapse occurred at an active open-cast mining operation during routine drilling, burying equipment and personnel. InSpectiv Labs performed a retrospective 12-month SBAS InSAR analysis across a 5 sq km footprint leading up to the incident month. The satellite radar data confirmed that the site suffered from widespread, multi-hectare terrain instability, with critical high-velocity failure zones concentrating directly along the upper pit wall crest months prior to the collapse.",
    challenge: "Open-cast quarrying continuously alters slope geometry, stress distributions, and bench stability. Slope failures are rarely sudden; they stem from progressive internal stress buildup, bench weakening, and subtle surface displacement over time. Traditional physical inspection and localized survey tools often fail to cover broad, multi-hectare pit faces continuously, leaving slow-developing slope instabilities undetected until structural failure occurs.",
    methodology: {
      dataEngine: "Sentinel-1 C-band Synthetic Aperture Radar (SAR) imagery acquired over a 12-month timeframe (~5 sq km area).",
      processingTechnique: "Small Baseline Subset (SBAS) Interferometric Time-Series Analysis.",
      measurementPhysics: "Line-of-Sight (LOS) displacement tracking capable of measuring millimeter-scale surface movement.",
      analyticalFocus: "Mapping deformation trends, velocity changes, and high-risk spatial clustering along active pit slopes."
    },
    imagePlaceholder: {
      src: "/images/case_study_1.jpeg",
      caption: "Figure 1. SBAS InSAR Mean LOS Velocity map showing widespread terrain instability across the site, with concentrated high-velocity red failure hotspots along the active quarry wall crest prior to collapse."
    },
    technicalFindings: [
      {
        zoneClassification: "Critical Red Hotspots",
        observedSignal: "High negative LOS velocity / concentrated deep red clusters along pit crest (~50 sq m)",
        interpretation: "Point of maximum acceleration and slope failure. Serves as a clear, localized early warning indicator directly along the active excavation crest."
      },
      {
        zoneClassification: "Widespread Site Instability",
        observedSignal: "Predominant yellow and orange grid patterns across the broader quarry area",
        interpretation: "Indicates that the majority of the surrounding site was undergoing progressive surface shift and escalating ground stress rather than remaining stable."
      }
    ],
    businessImpact: [
      {
        title: "Predictive Lead-Time",
        description: "Demonstrates that satellite radar can identify subtle slope shifts and broad terrain stress months before physical collapse occurs."
      },
      {
        title: "Targeted Geotechnical Intervention",
        description: "Pinpoints exact high-risk slope sections to prioritize ground checks, instrumentation placement, and bench reinforcements."
      },
      {
        title: "Worker & Asset Protection",
        description: "Provides independent spatial intelligence to adjust excavation schedules and keep workers out of hazardous zones."
      }
    ]
  },
  {
    id: "2",
    slug: "mine-deformation-baseline-assessment",
    category: "MINING",
    cardTitle: "Mine Deformation Baseline Assessment",
    cardSubtitle: "12-Month InSAR Ground Stability Assessment Over Active Mining Lease",
    cardDescription: "InSpectiv Labs executed a 12-month ground stability assessment over an active open-cast mine using Sentinel-1 SBAS InSAR. The study successfully flagged high-risk active subsidence (-10 to -16 mm/yr) adjacent to active pit faces while verifying overall lease stability.",
    cardImage: "/images/case_study_2.jpeg",
    pageTitle: "Mine Lease Deformation Baseline Assessment",
    pageSubtitle: "12-Month Sentinel-1 SBAS InSAR Monitoring over an Active Open-Cast Mining Operation",
    executiveSummary: "InSpectiv Labs completed a 12-month satellite-based ground deformation assessment over an active open-cast mining lease using Sentinel-1 SAR data processed with the SBAS InSAR technique. The assessment mapped overall lease stability, successfully pinpointed localized subsidence zones (-10 to -16 mm/yr) adjacent to active excavation, and differentiated mine-induced movement from off-site groundwater fluctuations.",
    challenge: "Open-cast mining continuously modifies slope geometry, bench configurations, and localized hydrogeology. These operational changes induce gradual ground shifts long before visible cracks appear. Mine operators require continuous, lease-wide deformation screening without incurring the extreme capital expenditure of dense ground-based hardware sensor networks.",
    methodology: {
      dataEngine: "Sentinel-1A/B C-band SAR (IW Mode, Ascending Pass).",
      processingTechnique: "SBAS (Small Baseline Subset) Interferometric Time-Series Analysis with atmospheric error mitigation.",
      measurementPhysics: "Line-of-Sight (LOS) velocity mapping ranging from -16 mm/yr to +13 mm/yr.",
      analyticalFocus: "12-Month Continuous Assessment Window."
    },
    imagePlaceholder: {
      src: "/images/case_study_2.jpeg",
      caption: "Figure 1. Average Line-of-Sight (LOS) ground velocity derived from Sentinel-1 SBAS InSAR processing, highlighting active high-risk deformation zones inside the lease boundary."
    },
    technicalFindings: [
      {
        zoneClassification: "High-Risk Zone",
        observedSignal: "-10 to -16 mm/yr",
        interpretation: "Active subsidence adjacent to active excavation. Immediate field verification and close monitoring required."
      },
      {
        zoneClassification: "Moderate-Risk Zone",
        observedSignal: "-5 to -10 mm/yr",
        interpretation: "Potential slope/ground settlement. Recommended for ongoing trend tracking across future observation cycles."
      },
      {
        zoneClassification: "General Mine Lease",
        observedSignal: "-5 to +13 mm/yr",
        interpretation: "Stable ground. No evidence of widespread or accelerating structural deformation detected."
      },
      {
        zoneClassification: "Off-Site Anomalies",
        observedSignal: "Localized Red Patches",
        interpretation: "Subsidence detected outside lease boundary; attributed to groundwater/seasonal moisture shifts, not mining activity."
      }
    ],
    businessImpact: [
      {
        title: "Cost-Effective Screening",
        description: "Evaluates multi-square-kilometer lease areas remotely, flagging risk zones for targeted engineering checks."
      },
      {
        title: "Anomaly Discrimination",
        description: "Clear spatial delineation protects operators by distinguishing off-lease environmental shifts from mine-induced ground movements."
      },
      {
        title: "Proactive Risk Management",
        description: "Enables integration of satellite radar insights into geotechnical planning, bench design, and site safety protocols."
      }
    ]
  },

];
