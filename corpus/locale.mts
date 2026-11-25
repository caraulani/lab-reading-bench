/* lab-report-corpus: the words, headings and conventions of each country's lab reports (25 Nov 2026).
   Lab names, addresses and people are invented. Phone numbers use the US 555-01xx range set aside for fiction. */
import type { Loc, Panel } from "./catalog.mts";

export const LABS: Record<Loc, { name: string; addr: string }[]> = {
  US: [{ name: "Quillfield Clinical Laboratory (fictional)", addr: "4100 Larkspur Parkway, Suite 200 · Tel 555-0141" }, { name: "Marrowgate Diagnostic Services (fictional)", addr: "88 Corvel Avenue · Tel 555-0167" }, { name: "Tindlebrook Reference Laboratory (fictional)", addr: "2 Haverlin Plaza · Tel 555-0183" }],
  UK: [{ name: "Ashcombe Vale Pathology (fictional)", addr: "Blood Sciences, Ashcombe Vale Hospital (fictional)" }, { name: "Kelloway Blood Sciences (fictional)", addr: "Unit 7, Merrow Lane (fictional)" }, { name: "Pendrith Laboratory Services (fictional)", addr: "Pendrith Road (fictional)" }],
  DE: [{ name: "Labor Brennwalde MVZ (fiktiv)", addr: "Fehrstraße 12 (fiktiv)" }, { name: "Laborpraxis Ostermoor (fiktiv)", addr: "Am Lindgraben 4 (fiktiv)" }, { name: "Medizinisches Labor Fehrbeck (fiktiv)", addr: "Klarweg 31 (fiktiv)" }],
  ES: [{ name: "Laboratorio Clínico Valdeoria (ficticio)", addr: "Calle del Ébano 14 (ficticio)" }, { name: "Análisis Clínicos Sierramar (ficticio)", addr: "Av. de los Olmos 220 (ficticio)" }, { name: "Laboratorio Ribalenta (ficticio)", addr: "Plaza Mayor 3 (ficticio)" }],
  RO: [{ name: "Laborator Analize Medicale Vâlcereni (fictiv)", addr: "Str. Fagilor nr. 9 (fictiv)" }, { name: "Centrul de Diagnostic Mureșel (fictiv)", addr: "Bd. Teilor nr. 41 (fictiv)" }, { name: "Laborator Clinic Brădetu-Nord (fictiv)", addr: "Str. Livezii nr. 2 (fictiv)" }],
  FR: [{ name: "Laboratoire de biologie médicale Valmorin (fictif)", addr: "14 rue des Aubépines (fictif)" }, { name: "Laboratoire Les Aubrelles (fictif)", addr: "2 place du Marronnier (fictif)" }, { name: "Biologie médicale Saint-Ombre (fictif)", addr: "31 avenue des Tilleuls (fictif)" }],
};

/* invented names: given names are common ones; surnames are built from syllables so that they are unlikely to be real */
export const GIVEN: Record<Loc, { F: string[]; M: string[] }> = {
  US: { F: ["Avery", "Jordan", "Morgan", "Riley", "Casey", "Quinn"], M: ["Taylor", "Reese", "Rowan", "Emerson", "Parker", "Hayden"] },
  UK: { F: ["Alex", "Sam", "Robin", "Jamie", "Charlie", "Frankie"], M: ["Alex", "Sam", "Robin", "Jamie", "Charlie", "Toby"] },
  DE: { F: ["Erika", "Lena", "Mara", "Ilka", "Frauke", "Jule"], M: ["Max", "Ole", "Jannik", "Bent", "Till", "Mats"] },
  ES: { F: ["Ana", "Lucía", "Nerea", "Itziar", "Elena", "Paula"], M: ["Pablo", "Iker", "Unai", "Mario", "Hugo", "Dario"] },
  RO: { F: ["Ana", "Ioana", "Irina", "Oana", "Ilinca", "Sorina"], M: ["Andrei", "Radu", "Tudor", "Matei", "Vlad", "Sorin"] },
  FR: { F: ["Camille", "Claude", "Dominique", "Maëlle", "Solène", "Inès"], M: ["Camille", "Claude", "Dominique", "Gaël", "Loïc", "Yanis"] },
};
const SYL: Record<Loc, [string[], string[]]> = {
  US: [["Brax", "Quen", "Tol", "Varr", "Dun", "Mell", "Orr", "Kest"], ["ington", "worth", "ley", "brook", "dale", "ford", "mere"]],
  UK: [["Ash", "Pen", "Kel", "Thorn", "Brin", "Wex", "Marr", "Hask"], ["combe", "drith", "loway", "by", "stow", "wick", "ham"]],
  DE: [["Brenn", "Oster", "Fehr", "Kalt", "Lind", "Strom", "Haff", "Wend"], ["wald", "moor", "beck", "mann", "hagen", "feld", "sted"]],
  ES: [["Valde", "Sierra", "Riba", "Oli", "Mira", "Torre", "Alba", "Quin"], ["oria", "mar", "lenta", "vares", "dena", "blanca", "tero"]],
  RO: [["Vâlce", "Mure", "Bră", "Teo", "Lun", "Dobr", "Cire", "Mol"], ["reanu", "șanu", "descu", "rescu", "ianu", "ovici", "eanu"]],
  FR: [["Val", "Aubr", "Ombr", "Marc", "Lis", "Font", "Belle", "Roch"], ["morin", "elle", "ière", "eau", "anges", "court", "ville"]],
};
export const surname = (l: Loc, pick: <T>(xs: readonly T[]) => T) => pick(SYL[l][0]) + pick(SYL[l][1]);

export const SECTIONS: Record<Loc, Record<Panel, string>> = {
  US: { chem: "COMPREHENSIVE METABOLIC PANEL", liver: "HEPATIC FUNCTION PANEL", lipid: "LIPID PANEL", cbc: "CBC WITH DIFFERENTIAL/PLATELET", diff: "DIFFERENTIAL", iron: "IRON, TIBC AND FERRITIN PANEL", thyroid: "THYROID", vit: "VITAMINS AND HORMONES", urine: "URINE, RANDOM" },
  UK: { chem: "Clinical Biochemistry", liver: "Liver function tests", lipid: "Lipid profile", cbc: "Full blood count", diff: "White cell differential", iron: "Iron studies", thyroid: "Thyroid function", vit: "Vitamins and hormones", urine: "Urine (spot sample)" },
  DE: { chem: "Klinische Chemie", liver: "Leberwerte", lipid: "Fettstoffwechsel", cbc: "Blutbild (EDTA-Blut)", diff: "Differentialblutbild", iron: "Eisenstoffwechsel", thyroid: "Schilddrüse", vit: "Vitamine und Hormone", urine: "Spontanurin" },
  ES: { chem: "BIOQUÍMICA", liver: "PERFIL HEPÁTICO", lipid: "PERFIL LIPÍDICO", cbc: "HEMOGRAMA", diff: "FÓRMULA LEUCOCITARIA", iron: "METABOLISMO DEL HIERRO", thyroid: "PERFIL TIROIDEO", vit: "VITAMINAS Y HORMONAS", urine: "ORINA" },
  RO: { chem: "BIOCHIMIE", liver: "PROFIL HEPATIC", lipid: "PROFIL LIPIDIC", cbc: "HEMOLEUCOGRAMĂ COMPLETĂ", diff: "FORMULA LEUCOCITARĂ", iron: "METABOLISMUL FIERULUI", thyroid: "HORMONI TIROIDIENI", vit: "VITAMINE ȘI HORMONI", urine: "URINĂ" },
  FR: { chem: "BIOCHIMIE SANGUINE", liver: "BILAN HÉPATIQUE", lipid: "BILAN LIPIDIQUE", cbc: "HÉMATOLOGIE - NUMÉRATION", diff: "FORMULE LEUCOCYTAIRE", iron: "BILAN MARTIAL", thyroid: "HORMONOLOGIE THYROÏDIENNE", vit: "VITAMINES ET HORMONES", urine: "URINES (échantillon)" },
};

export type ColKind = "name" | "value" | "flag" | "unit" | "range" | "value2" | "unit2" | "prior0" | "prior1" | "inr" | "outr";
export const COLTITLE: Record<Loc, Partial<Record<ColKind, string>>> = {
  US: { name: "Tests", value: "Result", flag: "Flag", unit: "Units", range: "Reference Interval", inr: "In Range", outr: "Out of Range", prior0: "Previous", prior1: "Previous" },
  UK: { name: "Test", value: "Result", flag: "", unit: "Units", range: "Reference range", prior0: "", prior1: "" },
  DE: { name: "Untersuchung", value: "Ergebnis", flag: "", unit: "Einheit", range: "Referenzbereich", prior0: "Vorwert", prior1: "Vorwert" },
  ES: { name: "Prueba", value: "Resultado", flag: "", unit: "Unidades", range: "Valores de referencia", prior0: "Resultado anterior", prior1: "Anterior" },
  RO: { name: "Denumire analiză", value: "Rezultat", flag: "", unit: "UM", range: "Interval biologic de referință", prior0: "Rezultat anterior", prior1: "Anterior" },
  FR: { name: "Analyse", value: "Résultat", flag: "", unit: "", value2: "", unit2: "", range: "Valeurs de référence", prior0: "Antériorité", prior1: "Antériorité" },
};

export const LABEL: Record<Loc, Record<string, string>> = {
  US: { patient: "Patient", dob: "DOB", sex: "Sex", id: "Patient ID", collected: "Collected", received: "Received", reported: "Reported", physician: "Ordering Physician", specimen: "Specimen", page: "Page {n} of {m}", cont: "continued", F: "Female", M: "Male", age: "Age", fasting: "Fasting" },
  UK: { patient: "Patient", dob: "Date of birth", sex: "Sex", id: "Hospital no.", collected: "Sample collected", received: "Received", reported: "Authorised", physician: "Requested by", specimen: "Sample", page: "Page {n} of {m}", cont: "continued", F: "Female", M: "Male", age: "Age", fasting: "Fasting" },
  DE: { patient: "Patient", dob: "Geb.-Datum", sex: "Geschlecht", id: "Auftragsnr.", collected: "Entnahme", received: "Eingang", reported: "Befund vom", physician: "Einsender", specimen: "Material", page: "Seite {n} von {m}", cont: "Fortsetzung", F: "weiblich", M: "männlich", age: "Alter", fasting: "nüchtern" },
  ES: { patient: "Paciente", dob: "F. nacimiento", sex: "Sexo", id: "N.º historia", collected: "Fecha de extracción", received: "Recepción", reported: "Fecha de informe", physician: "Médico solicitante", specimen: "Muestra", page: "Página {n} de {m}", cont: "continuación", F: "Mujer", M: "Hombre", age: "Edad", fasting: "En ayunas" },
  RO: { patient: "Pacient", dob: "Data nașterii", sex: "Sex", id: "Cod pacient", collected: "Data recoltării", received: "Data primirii", reported: "Data eliberării", physician: "Medic trimițător", specimen: "Produs biologic", page: "Pagina {n} din {m}", cont: "continuare", F: "F", M: "M", age: "Vârsta", fasting: "à jeun" },
  FR: { patient: "Patient(e)", dob: "Né(e) le", sex: "Sexe", id: "N° dossier", collected: "Prélevé le", received: "Reçu le", reported: "Édité le", physician: "Prescripteur", specimen: "Nature", page: "Page {n} / {m}", cont: "suite", F: "F", M: "M", age: "Âge", fasting: "À jeun" },
};
export const SPECIMEN_WORD: Record<Loc, Record<string, string>> = {
  US: { serum: "Serum", plasma: "Plasma (fluoride)", "whole blood": "Whole blood (EDTA)", urine: "Urine, random" },
  UK: { serum: "Serum", plasma: "Fluoride plasma", "whole blood": "EDTA whole blood", urine: "Urine (spot)" },
  DE: { serum: "Serum", plasma: "NaF-Plasma", "whole blood": "EDTA-Blut", urine: "Spontanurin" },
  ES: { serum: "Suero", plasma: "Plasma", "whole blood": "Sangre total (EDTA)", urine: "Orina" },
  RO: { serum: "Ser", plasma: "Plasmă", "whole blood": "Sânge integral (EDTA)", urine: "Urină" },
  FR: { serum: "Sérum", plasma: "Plasma", "whole blood": "Sang total (EDTA)", urine: "Urines" },
};

export const dateIn = (iso: string, l: Loc) => { const [y, m, d] = iso.split("-"); return l === "US" ? `${m}/${d}/${y}` : l === "DE" || l === "RO" ? `${d}.${m}.${y}` : l === "UK" ? `${d}/${m}/${y}` : `${d}/${m}/${y}`; };
export const dateShort = (iso: string, l: Loc) => { const [y, m, d] = iso.split("-"); return l === "US" ? `${m}/${d}/${y.slice(2)}` : l === "DE" || l === "RO" ? `${d}.${m}.${y.slice(2)}` : `${d}/${m}/${y.slice(2)}`; };

/* words a lab prints in the value column instead of a number: the reader must not invent one */
export const NO_VALUE: Record<Loc, Record<"comment" | "pending" | "notdone" | "notcalc", string[]>> = {
  US: { comment: ["See Note", "SEE COMMENT"], pending: ["PENDING", "To Follow"], notdone: ["TNP", "Not performed", "QNS"], notcalc: ["Not calculated", "N/A"] },
  UK: { comment: ["See comment"], pending: ["To follow", "Pending"], notdone: ["Not processed", "Insufficient sample"], notcalc: ["Not calculated"] },
  DE: { comment: ["s. Kommentar", "siehe Bem."], pending: ["folgt", "in Arbeit"], notdone: ["n. durchgef.", "Material fehlt"], notcalc: ["n. berechenbar", "entfällt"] },
  ES: { comment: ["Ver comentario", "Ver nota"], pending: ["Pendiente", "En curso"], notdone: ["No realizado", "Muestra insuficiente"], notcalc: ["No calculable"] },
  RO: { comment: ["Vezi comentariu", "vezi obs."], pending: ["În lucru", "Urmează"], notdone: ["Nu s-a efectuat", "Probă insuficientă"], notcalc: ["Nu se calculează"] },
  FR: { comment: ["Voir commentaire", "cf. commentaire"], pending: ["En cours", "À suivre"], notdone: ["Non réalisé", "Prélèvement insuffisant"], notcalc: ["Non calculable"] },
};
export const COMMENT_TEXT: Record<Loc, (name: string) => string[]> = {
  US: (n) => [`${n}: Specimen hemolyzed. Result not reported. Please recollect.`, `${n}: Result withheld pending verification.`],
  UK: (n) => [`${n}: Sample haemolysed; result not reported.`, `${n}: Unable to report, sample received outside stability window.`],
  DE: (n) => [`${n}: Probe hämolytisch, Wert nicht verwertbar.`, `${n}: Material zu alt, keine Bestimmung möglich.`],
  ES: (n) => [`${n}: Muestra hemolizada, resultado no valorable.`, `${n}: Resultado pendiente de confirmación.`],
  RO: (n) => [`${n}: Probă hemolizată, rezultat neraportat.`, `${n}: Rezultat în curs de validare.`],
  FR: (n) => [`${n} : échantillon hémolysé, résultat non rendu.`, `${n} : résultat en attente de contrôle.`],
};
/* a word printed after a number in the value cell: the number is still the result */
export const VALUE_SUFFIX: Record<Loc, string[]> = { US: ["(rpt)", "verif"], UK: ["(rpt)", "(conf)"], DE: ["(wdh.)", "kontr."], ES: ["(rep.)", "(conf.)"], RO: ["(rep.)", "(verif.)"], FR: ["(contr.)", "(vérif.)"] };
export const NOT_CALC_LDL: Record<Loc, string> = { US: "LDL not calculated: triglycerides > 400 mg/dL.", UK: "LDL not calculated when triglycerides exceed 4.5 mmol/L.", DE: "LDL-Berechnung bei Triglyceriden > 400 mg/dl nicht zulässig.", ES: "LDL no calculable con triglicéridos > 400 mg/dL.", RO: "LDL nu se calculează la trigliceride > 400 mg/dL.", FR: "LDL non calculable si triglycérides > 4,00 g/L." };

export const METHOD_FOOT: Record<Loc, (mark: string, date: string) => string[]> = {
  US: (m, d) => [`${m} Effective ${d} this test is performed on a new immunoassay platform. Results may not be directly comparable with prior results.`, `${m} Method change on ${d}: results before this date were obtained with a different assay.`],
  UK: (m, d) => [`${m} New assay from ${d}. Results are not directly comparable with earlier values.`, `${m} Method changed ${d}; please interpret trends with caution.`],
  DE: (m, d) => [`${m} Methodenumstellung am ${d}. Werte mit Vorbefunden nur eingeschränkt vergleichbar.`, `${m} Ab ${d} neues Testverfahren (Immunoassay).`],
  ES: (m, d) => [`${m} Cambio de método el ${d}. Resultados no comparables con los anteriores.`, `${m} Desde ${d} se utiliza un nuevo inmunoensayo.`],
  RO: (m, d) => [`${m} Schimbare de metodă din ${d}. Rezultatele nu sunt direct comparabile cu cele anterioare.`, `${m} Din ${d} se utilizează o nouă metodă imunochimică.`],
  FR: (m, d) => [`${m} Changement de technique le ${d} : résultats non directement comparables aux antériorités.`, `${m} Nouvelle méthode immunologique depuis le ${d}.`],
};
export const UNIT_FOOT: Record<Loc, (mark: string, unit: string, date: string) => string> = {
  US: (m, u, d) => `${m} Prior result reported in ${u} (before ${d}).`,
  UK: (m, u, d) => `${m} Earlier result reported in ${u} before ${d}.`,
  DE: (m, u, d) => `${m} Vorwert in ${u} (vor ${d}).`,
  ES: (m, u, d) => `${m} Resultado anterior expresado en ${u} (antes de ${d}).`,
  RO: (m, u, d) => `${m} Rezultatul anterior exprimat în ${u} (înainte de ${d}).`,
  FR: (m, u, d) => `${m} Antériorité exprimée en ${u} (avant le ${d}).`,
};
/* notes labs print among results: numbers and marker names, none of them a result */
export const NOTES: Record<Loc, Partial<Record<string, string[]>>> = {
  US: { "ldl-cholesterol": ["Desirable range <100 mg/dL for primary prevention; <70 mg/dL for patients with CHD or diabetes."], hba1c: ["Prediabetes: 5.7 - 6.4   Diabetes: >6.4   Glycemic control: <7.0"], egfr: ["eGFR calculated with the CKD-EPI 2021 equation."], "vitamin-d-25-oh": ["Deficiency <20 ng/mL; Insufficiency 20 - 29 ng/mL; Optimal >= 30 ng/mL"] },
  UK: { hba1c: ["Non-diabetic: below 42 mmol/mol. Diabetes likely: 48 mmol/mol or above."], "total-cholesterol": ["Interpret lipids with QRISK3; no single cut-off applies."], egfr: ["eGFR (CKD-EPI 2021) in mL/min/1.73m2; values above 90 are reported as >90."] },
  DE: { "ldl-cholesterol": ["Zielwert bei sehr hohem Risiko: < 55 mg/dl"], hba1c: ["Diabetes mellitus ab 6,5 % (48 mmol/mol)"], "vitamin-d-25-oh": ["Mangel < 20 ng/ml, Insuffizienz 20-30 ng/ml"] },
  ES: { "total-cholesterol": ["Valores deseables: < 200 mg/dL"], "glucose-fasting": ["Muestra en ayunas de 8 horas"] },
  RO: { "total-cholesterol": ["Valori de referință în funcție de riscul cardiovascular (SCORE2)"], "glucose-fasting": ["Probă recoltată à jeun"] },
  FR: { hba1c: ["Objectif chez le diabétique : HbA1c < 7,0 %"], "ldl-cholesterol": ["Objectif selon le risque cardiovasculaire (recommandations ESC 2019)"], egfr: ["DFG estimé selon CKD-EPI 2021, en mL/min/1,73 m²"] },
};
/** printed at the top of every page, in English on every report */
export const NOT_REAL = "SYNTHETIC — not a real lab";
export const SYNTHETIC: Record<Loc, string> = {
  US: "SYNTHETIC TEST DOCUMENT - fictional patient and laboratory - lab-report-corpus",
  UK: "SYNTHETIC TEST DOCUMENT - fictional patient and laboratory - lab-report-corpus",
  DE: "SYNTHETISCHES TESTDOKUMENT - fiktive Person und fiktives Labor - lab-report-corpus",
  ES: "DOCUMENTO SINTÉTICO DE PRUEBA - paciente y laboratorio ficticios - lab-report-corpus",
  RO: "DOCUMENT SINTETIC DE TEST - pacient și laborator fictive - lab-report-corpus",
  FR: "DOCUMENT SYNTHÉTIQUE DE TEST - patient et laboratoire fictifs - lab-report-corpus",
};
export const METHODS_RO: Record<string, string> = { chem: "Metodă: spectrofotometrie", liver: "Metodă: cinetic IFCC", lipid: "Metodă: enzimatic colorimetric", cbc: "Metodă: citometrie în flux", diff: "Metodă: citometrie în flux", iron: "Metodă: colorimetric", thyroid: "Metodă: CLIA", vit: "Metodă: CLIA", urine: "Metodă: imunoturbidimetric" };
