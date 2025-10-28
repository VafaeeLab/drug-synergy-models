export interface DrugSynergyEntry {
  id: number;
  paper: string;
  dataset: string;
  synergyMetric: string;
  model: string;
  evaluationStrategy: string;
  regressionResults: string;
  additionalInfo: string;
}

export const drugSynergyData: DrugSynergyEntry[] = [
  {
    id: 1,
    paper: "DeepSynergy (2018)",
    dataset: "O'Neil/Merck - 38 drugs, 39 cell lines, 23,062 samples",
    synergyMetric: "Loewe",
    model: "DeepSynergy",
    evaluationStrategy: "Leave combination out - 5-fold CV",
    regressionResults: "MSE=255.49, RMSE=15.91±1.56, Pearson=0.73±0.04",
    additionalInfo: "Table 2"
  },
  {
    id: 2,
    paper: "DeepSynergy (2018)",
    dataset: "O'Neil/Merck - 38 drugs, 39 cell lines, 23,062 samples",
    synergyMetric: "Loewe",
    model: "Gradient Boosting",
    evaluationStrategy: "Leave combination out - 5-fold CV",
    regressionResults: "MSE=275.39, RMSE=16.54±1.37, Pearson=0.69±0.02",
    additionalInfo: "Table 2"
  },
  {
    id: 3,
    paper: "DeepSynergy (2018)",
    dataset: "O'Neil/Merck - 38 drugs, 39 cell lines, 23,062 samples",
    synergyMetric: "Loewe",
    model: "Random Forest",
    evaluationStrategy: "Leave combination out - 5-fold CV",
    regressionResults: "MSE=307.56, RMSE=17.49±1.63, Pearson=0.65±0.03",
    additionalInfo: "Table 2"
  },
  {
    id: 4,
    paper: "DeepSynergy (2018)",
    dataset: "O'Neil/Merck - 38 drugs, 39 cell lines, 23,062 samples",
    synergyMetric: "Loewe",
    model: "SVM",
    evaluationStrategy: "Leave combination out - 5-fold CV",
    regressionResults: "MSE=398.39, RMSE=19.92±1.28, Pearson=0.50±0.03",
    additionalInfo: "Table 2"
  },
  {
    id: 5,
    paper: "DeepSynergy (2018)",
    dataset: "O'Neil/Merck - 38 drugs, 39 cell lines, 23,062 samples",
    synergyMetric: "Loewe",
    model: "Elastic Net",
    evaluationStrategy: "Leave combination out - 5-fold CV",
    regressionResults: "MSE=420.24, RMSE=20.46±1.29, Pearson=0.44±0.03",
    additionalInfo: "Table 2"
  },
  {
    id: 6,
    paper: "DeepSynergy (2018)",
    dataset: "O'Neil/Merck - 38 drugs, 39 cell lines, 23,062 samples",
    synergyMetric: "Loewe",
    model: "Baseline (Median Polish)",
    evaluationStrategy: "Leave combination out - 5-fold CV",
    regressionResults: "MSE=477.77, RMSE=21.80±1.49, Pearson=0.43±0.02",
    additionalInfo: "Table 2"
  },
  {
    id: 7,
    paper: "AuDNNsynergy (2021)",
    dataset: "O'Neil/Merck - 38 drugs, 39 cell lines, 23,062 samples",
    synergyMetric: "Loewe",
    model: "AuDNNsynergy (93,019 features)",
    evaluationStrategy: "Leave combination out - 5-fold nested CV",
    regressionResults: "Rank Correlation=0.73±0.02, MSE=241.12±43.52, RMSE=15.46±1.44, Pearson=0.74±0.03",
    additionalInfo: "Table 2"
  },
  {
    id: 8,
    paper: "TranSynergy (2021)",
    dataset: "O'Neil/Merck - 38 drugs, 39 cell lines, 18,553 samples used",
    synergyMetric: "Loewe",
    model: "TranSynergy (Gene dep + Gene exp)",
    evaluationStrategy: "Leave combination out - 5-fold nested CV",
    regressionResults: "MSE=231±21, Spearman=0.730±0.016, Pearson=0.746±0.018",
    additionalInfo: "Network propagated targets with PPI - Table 5"
  },
  {
    id: 9,
    paper: "DeepDDS (2022)",
    dataset: "O'Neil/Merck - 38 drugs, 39 cell lines, 23,062 samples",
    synergyMetric: "Loewe",
    model: "DeepDDS-GAT",
    evaluationStrategy: "5-fold cross-validation",
    regressionResults: "MAE=0.023±0.001, RMSE=0.041±0.001, Pearson=0.801±0.017",
    additionalInfo: "Supplementary Table S7"
  },
  {
    id: 10,
    paper: "DeepDDS (2022)",
    dataset: "O'Neil/Merck - 38 drugs, 39 cell lines, 23,062 samples",
    synergyMetric: "Loewe",
    model: "DeepDDS-GCN",
    evaluationStrategy: "5-fold cross-validation",
    regressionResults: "MAE=0.025±0.001, RMSE=0.042±0.001, Pearson=0.797±0.020",
    additionalInfo: "Supplementary Table S7"
  },
  {
    id: 11,
    paper: "MatchMaker (2022)",
    dataset: "DrugComb - 3,040 drugs, 81 cell lines, 286,421 samples",
    synergyMetric: "Loewe",
    model: "MatchMaker",
    evaluationStrategy: "60% train, 20% validation, 20% test split - 5-fold CV",
    regressionResults: "MSE=79.49, Pearson=0.79, Spearman=0.74",
    additionalInfo: "Figure 3 (Results text)"
  },
  {
    id: 12,
    paper: "MatchMaker (2022)",
    dataset: "DrugComb - 3,040 drugs, 81 cell lines, 286,421 samples",
    synergyMetric: "Loewe",
    model: "DeepSynergy",
    evaluationStrategy: "60% train, 20% validation, 20% test split - 5-fold CV",
    regressionResults: "MSE=105.9",
    additionalInfo: "Figure 3 (Results text)"
  },
  {
    id: 13,
    paper: "PRODeepSyn (2022)",
    dataset: "O'Neil/Merck - 38 drugs, 39 cell lines, 23,062 samples",
    synergyMetric: "Loewe",
    model: "PRODeepSyn",
    evaluationStrategy: "Leave combination out - 5-fold nested CV",
    regressionResults: "MSE=229.49±42.81, RMSE=15.09±1.37, Pearson=0.75±0.02",
    additionalInfo: "Table 1"
  },
  {
    id: 14,
    paper: "SYNPRED (2022)",
    dataset: "NCI ALMANAC - 105 drugs, 61 cell lines, 311,466 samples",
    synergyMetric: "Bliss",
    model: "SYNPRED Ensemble",
    evaluationStrategy: "80% train, 20% test split",
    regressionResults: "RMSE=4.35, MSE=18.92, Pearson=0.71, MAE=3.07, Spearman=0.59",
    additionalInfo: "Supplementary Table 8"
  },
  {
    id: 15,
    paper: "SYNPRED (2022)",
    dataset: "NCI ALMANAC - 105 drugs, 61 cell lines, 311,466 samples",
    synergyMetric: "HSA",
    model: "SYNPRED Ensemble",
    evaluationStrategy: "80% train, 20% test split",
    regressionResults: "RMSE=4.09, MSE=16.70, Pearson=0.73, MAE=2.86, Spearman=0.64",
    additionalInfo: "Supplementary Table 9"
  }
];
