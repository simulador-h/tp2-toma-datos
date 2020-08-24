export interface IDrawerLink {
  name: string;
  icon: string;
  path: string;
}

export interface IData {
  ts: string;
  iat: number;
}

export interface IProbabilityDistribution {
  name: string;
  expectedProbabilities: number[];
  expectedFrequencies: number[];
  chiSquared?: {
    statistic: number;
    probability: number;
  };
  kolmogorovSmirnov?: {
    statistic: number;
    rejected: boolean;
  }
}

export interface IStatisticProperties {
  n: number;
  min: number;
  max: number;
  mean: number;
  variance: number;
  std: number;
  rate: number;
}

export interface IAnalysisParameters {
  intervals: number;
  step: number;
  bounds: number[][];
}
