export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string }
	String: { input: string; output: string }
	Boolean: { input: boolean; output: boolean }
	Int: { input: number; output: number }
	Float: { input: number; output: number }
	Long: { input: number; output: number }
}

export type ApiVersion = {
	x: Scalars['String']['output']
	y: Scalars['String']['output']
	z: Scalars['String']['output']
}

/** Significant adverse event entries */
export type AdverseEvent = {
	/** Number of reports mentioning drug and adverse event */
	count: Scalars['Long']['output']
	/** Log-likelihood ratio */
	logLR: Scalars['Float']['output']
	/** 8 digit unique meddra identification number */
	meddraCode?: Maybe<Scalars['String']['output']>
	/** Meddra term on adverse event */
	name: Scalars['String']['output']
}

/** Significant adverse events inferred from FAERS reports */
export type AdverseEvents = {
	/** Total significant adverse events */
	count: Scalars['Long']['output']
	/** LLR critical value to define significance */
	criticalValue: Scalars['Float']['output']
	/** Significant adverse event entries */
	rows: Array<AdverseEvent>
}

export type AlleleFrequency = {
	alleleFrequency?: Maybe<Scalars['Float']['output']>
	populationName?: Maybe<Scalars['String']['output']>
}

/** Associated Disease Entity */
export type AssociatedDisease = {
	datasourceScores: Array<ScoredComponent>
	datatypeScores: Array<ScoredComponent>
	/** Disease */
	disease: Disease
	score: Scalars['Float']['output']
}

export type AssociatedDiseases = {
	count: Scalars['Long']['output']
	datasources: Array<DatasourceSettings>
	/** Associated Targets using (On the fly method) */
	rows: Array<AssociatedDisease>
}

/** Associated Target Entity */
export type AssociatedTarget = {
	datasourceScores: Array<ScoredComponent>
	datatypeScores: Array<ScoredComponent>
	score: Scalars['Float']['output']
	/** Target */
	target: Target
}

export type AssociatedTargets = {
	count: Scalars['Long']['output']
	datasources: Array<DatasourceSettings>
	/** Associated Targets using (On the fly method) */
	rows: Array<AssociatedTarget>
}

export type BiologicalModels = {
	allelicComposition: Scalars['String']['output']
	geneticBackground: Scalars['String']['output']
	id?: Maybe<Scalars['String']['output']>
	literature?: Maybe<Array<Scalars['String']['output']>>
}

export type BiomarkerGeneExpression = {
	id?: Maybe<GeneOntologyTerm>
	name?: Maybe<Scalars['String']['output']>
}

export type Biosample = {
	ancestors?: Maybe<Array<Scalars['String']['output']>>
	biosampleId: Scalars['String']['output']
	biosampleName: Scalars['String']['output']
	children?: Maybe<Array<Scalars['String']['output']>>
	descendants?: Maybe<Array<Scalars['String']['output']>>
	description?: Maybe<Scalars['String']['output']>
	parents?: Maybe<Array<Scalars['String']['output']>>
	synonyms?: Maybe<Array<Scalars['String']['output']>>
	xrefs?: Maybe<Array<Scalars['String']['output']>>
}

export type CancerHallmark = {
	description: Scalars['String']['output']
	impact?: Maybe<Scalars['String']['output']>
	label: Scalars['String']['output']
	pmid: Scalars['Long']['output']
}

export type CellType = {
	level: Scalars['Int']['output']
	name: Scalars['String']['output']
	reliability: Scalars['Boolean']['output']
}

export type ChemicalProbe = {
	control?: Maybe<Scalars['String']['output']>
	drugId?: Maybe<Scalars['String']['output']>
	id: Scalars['String']['output']
	isHighQuality: Scalars['Boolean']['output']
	mechanismOfAction?: Maybe<Array<Scalars['String']['output']>>
	origin?: Maybe<Array<Scalars['String']['output']>>
	probeMinerScore?: Maybe<Scalars['Float']['output']>
	probesDrugsScore?: Maybe<Scalars['Float']['output']>
	scoreInCells?: Maybe<Scalars['Float']['output']>
	scoreInOrganisms?: Maybe<Scalars['Float']['output']>
	targetFromSourceId: Scalars['String']['output']
	urls: Array<ChemicalProbeUrl>
}

export type ChemicalProbeUrl = {
	niceName: Scalars['String']['output']
	url?: Maybe<Scalars['String']['output']>
}

export type Colocalisation = {
	betaRatioSignAverage?: Maybe<Scalars['Float']['output']>
	chromosome: Scalars['String']['output']
	clpp?: Maybe<Scalars['Float']['output']>
	colocalisationMethod: Scalars['String']['output']
	h3?: Maybe<Scalars['Float']['output']>
	h4?: Maybe<Scalars['Float']['output']>
	numberColocalisingVariants: Scalars['Long']['output']
	/** Credible set */
	otherStudyLocus?: Maybe<CredibleSet>
	rightStudyType: Scalars['String']['output']
}

/** Colocalisations */
export type Colocalisations = {
	count: Scalars['Long']['output']
	rows: Array<Colocalisation>
}

export type Constraint = {
	constraintType: Scalars['String']['output']
	exp?: Maybe<Scalars['Float']['output']>
	obs?: Maybe<Scalars['Long']['output']>
	oe?: Maybe<Scalars['Float']['output']>
	oeLower?: Maybe<Scalars['Float']['output']>
	oeUpper?: Maybe<Scalars['Float']['output']>
	score?: Maybe<Scalars['Float']['output']>
	upperBin?: Maybe<Scalars['Long']['output']>
	upperBin6?: Maybe<Scalars['Long']['output']>
	upperRank?: Maybe<Scalars['Long']['output']>
}

export type CredibleSet = {
	beta?: Maybe<Scalars['Float']['output']>
	chromosome?: Maybe<Scalars['String']['output']>
	colocalisation: Colocalisations
	confidence?: Maybe<Scalars['String']['output']>
	credibleSetIndex?: Maybe<Scalars['Int']['output']>
	credibleSetlog10BF?: Maybe<Scalars['Float']['output']>
	effectAlleleFrequencyFromSource?: Maybe<Scalars['Float']['output']>
	finemappingMethod?: Maybe<Scalars['String']['output']>
	isTransQtl?: Maybe<Scalars['Boolean']['output']>
	l2GPredictions: L2GPredictions
	ldSet?: Maybe<Array<LdSet>>
	locus: Loci
	locusEnd?: Maybe<Scalars['Int']['output']>
	locusStart?: Maybe<Scalars['Int']['output']>
	pValueExponent?: Maybe<Scalars['Int']['output']>
	pValueMantissa?: Maybe<Scalars['Float']['output']>
	position?: Maybe<Scalars['Int']['output']>
	purityMeanR2?: Maybe<Scalars['Float']['output']>
	purityMinR2?: Maybe<Scalars['Float']['output']>
	qtlGeneId?: Maybe<Scalars['String']['output']>
	qualityControls?: Maybe<Array<Scalars['String']['output']>>
	region?: Maybe<Scalars['String']['output']>
	sampleSize?: Maybe<Scalars['Int']['output']>
	standardError?: Maybe<Scalars['Float']['output']>
	/** Gwas study */
	study?: Maybe<Study>
	studyId?: Maybe<Scalars['String']['output']>
	studyLocusId: Scalars['String']['output']
	studyType?: Maybe<StudyTypeEnum>
	subStudyDescription?: Maybe<Scalars['String']['output']>
	variant?: Maybe<Variant>
	zScore?: Maybe<Scalars['Float']['output']>
}

export type CredibleSetColocalisationArgs = {
	page?: InputMaybe<Pagination>
	studyTypes?: InputMaybe<Array<StudyTypeEnum>>
}

export type CredibleSetL2GPredictionsArgs = {
	page?: InputMaybe<Pagination>
}

export type CredibleSetLocusArgs = {
	page?: InputMaybe<Pagination>
	variantIds?: InputMaybe<Array<Scalars['String']['input']>>
}

/** Credible Sets */
export type CredibleSets = {
	count: Scalars['Long']['output']
	rows: Array<CredibleSet>
}

export type DataVersion = {
	iteration: Scalars['String']['output']
	month: Scalars['String']['output']
	year: Scalars['String']['output']
}

export type Datasource = {
	datasourceCount: Scalars['Int']['output']
	datasourceId: Scalars['String']['output']
	datasourceNiceName: Scalars['String']['output']
}

export type DatasourceSettings = {
	id: Scalars['String']['output']
	propagate: Scalars['Boolean']['output']
	required: Scalars['Boolean']['output']
	weight: Scalars['Float']['output']
}

export type DatasourceSettingsInput = {
	id: Scalars['String']['input']
	propagate: Scalars['Boolean']['input']
	required?: InputMaybe<Scalars['Boolean']['input']>
	weight: Scalars['Float']['input']
}

export type DbXref = {
	id?: Maybe<Scalars['String']['output']>
	source?: Maybe<Scalars['String']['output']>
}

export type DepMapEssentiality = {
	screens: Array<GeneEssentialityScreen>
	tissueId?: Maybe<Scalars['String']['output']>
	tissueName?: Maybe<Scalars['String']['output']>
}

/** Disease or phenotype entity */
export type Disease = {
	ancestors: Array<Scalars['String']['output']>
	/** associations on the fly */
	associatedTargets: AssociatedTargets
	/** Disease children entities in ontology */
	children: Array<Disease>
	/** List of external cross reference IDs */
	dbXRefs?: Maybe<Array<Scalars['String']['output']>>
	descendants: Array<Scalars['String']['output']>
	/** Disease description */
	description?: Maybe<Scalars['String']['output']>
	/** List of direct location Disease terms */
	directLocationIds?: Maybe<Array<Scalars['String']['output']>>
	/** Direct Location disease terms */
	directLocations: Array<Disease>
	/** The complete list of all possible datasources */
	evidences: Evidences
	/** Open Targets disease id */
	id: Scalars['String']['output']
	/** List of indirect location Disease terms */
	indirectLocationIds?: Maybe<Array<Scalars['String']['output']>>
	/** Indirect Location disease terms */
	indirectLocations: Array<Disease>
	/** Is disease a therapeutic area itself */
	isTherapeuticArea: Scalars['Boolean']['output']
	/** Clinical precedence for investigational or approved drugs indicated for disease and curated mechanism of action */
	knownDrugs?: Maybe<KnownDrugs>
	/** Return the list of publications that mention the main entity, alone or in combination with other entities */
	literatureOcurrences: Publications
	/** Disease name */
	name: Scalars['String']['output']
	/** List of obsolete diseases */
	obsoleteTerms?: Maybe<Array<Scalars['String']['output']>>
	/** RNA and Protein baseline expression */
	otarProjects: Array<OtarProject>
	/** Disease parents entities in ontology */
	parents: Array<Disease>
	/** Phenotype from HPO index */
	phenotypes?: Maybe<DiseaseHpOs>
	/** All parent diseases in the hierarchy from the term up to a therapeutic area. */
	resolvedAncestors: Array<Disease>
	/** Return similar labels using a model Word2CVec trained with PubMed */
	similarEntities: Array<Similarity>
	/** Disease synonyms */
	synonyms?: Maybe<Array<DiseaseSynonyms>>
	/** Ancestor therapeutic area disease entities in ontology */
	therapeuticAreas: Array<Disease>
}

/** Disease or phenotype entity */
export type DiseaseAssociatedTargetsArgs = {
	BFilter?: InputMaybe<Scalars['String']['input']>
	Bs?: InputMaybe<Array<Scalars['String']['input']>>
	datasources?: InputMaybe<Array<DatasourceSettingsInput>>
	enableIndirect?: InputMaybe<Scalars['Boolean']['input']>
	facetFilters?: InputMaybe<Array<Scalars['String']['input']>>
	orderByScore?: InputMaybe<Scalars['String']['input']>
	page?: InputMaybe<Pagination>
}

/** Disease or phenotype entity */
export type DiseaseEvidencesArgs = {
	cursor?: InputMaybe<Scalars['String']['input']>
	datasourceIds?: InputMaybe<Array<Scalars['String']['input']>>
	enableIndirect?: InputMaybe<Scalars['Boolean']['input']>
	ensemblIds: Array<Scalars['String']['input']>
	size?: InputMaybe<Scalars['Int']['input']>
}

/** Disease or phenotype entity */
export type DiseaseKnownDrugsArgs = {
	cursor?: InputMaybe<Scalars['String']['input']>
	freeTextQuery?: InputMaybe<Scalars['String']['input']>
	size?: InputMaybe<Scalars['Int']['input']>
}

/** Disease or phenotype entity */
export type DiseaseLiteratureOcurrencesArgs = {
	additionalIds?: InputMaybe<Array<Scalars['String']['input']>>
	cursor?: InputMaybe<Scalars['String']['input']>
	endMonth?: InputMaybe<Scalars['Int']['input']>
	endYear?: InputMaybe<Scalars['Int']['input']>
	startMonth?: InputMaybe<Scalars['Int']['input']>
	startYear?: InputMaybe<Scalars['Int']['input']>
}

/** Disease or phenotype entity */
export type DiseasePhenotypesArgs = {
	page?: InputMaybe<Pagination>
}

/** Disease or phenotype entity */
export type DiseaseSimilarEntitiesArgs = {
	additionalIds?: InputMaybe<Array<Scalars['String']['input']>>
	entityNames?: InputMaybe<Array<Scalars['String']['input']>>
	size?: InputMaybe<Scalars['Int']['input']>
	threshold?: InputMaybe<Scalars['Float']['input']>
}

export type DiseaseCellLine = {
	id?: Maybe<Scalars['String']['output']>
	name?: Maybe<Scalars['String']['output']>
	tissue?: Maybe<Scalars['String']['output']>
	tissueId?: Maybe<Scalars['String']['output']>
}

/** Disease and phenotypes annotations */
export type DiseaseHpo = {
	/** List of phenotype annotations. */
	evidence: Array<DiseaseHpoEvidences>
	/** Disease Entity */
	phenotypeEFO?: Maybe<Disease>
	/** Phenotype entity */
	phenotypeHPO?: Maybe<Hpo>
}

/** the HPO project provides a large set of phenotype annotations. Source: Phenotype.hpoa */
export type DiseaseHpoEvidences = {
	/** One of P (Phenotypic abnormality), I (inheritance), C (onset and clinical course). Might be null (MONDO) */
	aspect?: Maybe<Scalars['String']['output']>
	/** This refers to the center or user making the annotation and the date on which the annotation was made */
	bioCuration?: Maybe<Scalars['String']['output']>
	/** Related name from the field diseaseFromSourceId */
	diseaseFromSource: Scalars['String']['output']
	/** This field refers to the database and database identifier. EG. OMIM */
	diseaseFromSourceId: Scalars['String']['output']
	/** This field indicates the level of evidence supporting the annotation. */
	evidenceType?: Maybe<Scalars['String']['output']>
	/** A term-id from the HPO-sub-ontology */
	frequency?: Maybe<Scalars['String']['output']>
	/** HPO Entity */
	frequencyHPO?: Maybe<Hpo>
	/** HP terms from the Clinical modifier subontology */
	modifiers: Array<Hpo>
	/** A term-id from the HPO-sub-ontology below the term Age of onset. */
	onset: Array<Hpo>
	/** This optional field can be used to qualify the annotation. Values: [True or False] */
	qualifierNot: Scalars['Boolean']['output']
	/** This field indicates the source of the information used for the annotation (phenotype.hpoa) */
	references: Array<Scalars['String']['output']>
	/** Possible source mapping: HPO or MONDO */
	resource: Scalars['String']['output']
	/** This field contains the strings MALE or FEMALE if the annotation in question is limited to males or females. */
	sex?: Maybe<Scalars['String']['output']>
}

/** List of Phenotypes associated with the disease */
export type DiseaseHpOs = {
	/** Number of entries */
	count: Scalars['Long']['output']
	/** List of Disease and phenotypes annotations */
	rows: Array<DiseaseHpo>
}

export type DiseaseSynonyms = {
	relation: Scalars['String']['output']
	terms: Array<Scalars['String']['output']>
}

/** Drug/Molecule entity */
export type Drug = {
	/** Significant adverse events inferred from FAERS reports */
	adverseEvents?: Maybe<AdverseEvents>
	/** Indications for which there is a phase IV clinical trial */
	approvedIndications?: Maybe<Array<Scalars['String']['output']>>
	/** Alert on life-threteaning drug side effects provided by FDA */
	blackBoxWarning: Scalars['Boolean']['output']
	/** Chembl IDs of molecules that descend from current molecule. */
	childMolecules: Array<Drug>
	crossReferences?: Maybe<Array<DrugReferences>>
	/** Drug description */
	description?: Maybe<Scalars['String']['output']>
	/** Drug modality */
	drugType: Scalars['String']['output']
	/** Warnings present on drug as identified by ChEMBL. */
	drugWarnings: Array<DrugWarning>
	/** Has drug been withdrawn from the market */
	hasBeenWithdrawn: Scalars['Boolean']['output']
	/** Open Targets molecule id */
	id: Scalars['String']['output']
	/** Investigational and approved indications curated from clinical trial records and post-marketing package inserts */
	indications?: Maybe<Indications>
	/** Alias for maximumClinicalTrialPhase == 4 */
	isApproved?: Maybe<Scalars['Boolean']['output']>
	/** Curated Clinical trial records and and post-marketing package inserts with a known mechanism of action */
	knownDrugs?: Maybe<KnownDrugs>
	/** Therapeutic indications for drug based on clinical trial data or post-marketed drugs, when mechanism of action is known" */
	linkedDiseases?: Maybe<LinkedDiseases>
	/** Molecule targets based on drug mechanism of action */
	linkedTargets?: Maybe<LinkedTargets>
	/** Return the list of publications that mention the main entity, alone or in combination with other entities */
	literatureOcurrences: Publications
	/** Maximum phase observed in clinical trial records and post-marketing package inserts */
	maximumClinicalTrialPhase?: Maybe<Scalars['Float']['output']>
	/** Mechanisms of action to produce intended pharmacological effects. Curated from scientific literature and post-marketing package inserts */
	mechanismsOfAction?: Maybe<MechanismsOfAction>
	/** Molecule preferred name */
	name: Scalars['String']['output']
	/** ChEMBL ID of parent molecule */
	parentMolecule?: Maybe<Drug>
	/** Pharmoacogenomics */
	pharmacogenomics: Array<Pharmacogenomics>
	/** Return similar labels using a model Word2CVec trained with PubMed */
	similarEntities: Array<Similarity>
	/** Molecule synonyms */
	synonyms: Array<Scalars['String']['output']>
	/** Drug trade names */
	tradeNames: Array<Scalars['String']['output']>
	/** Year drug was approved for the first time */
	yearOfFirstApproval?: Maybe<Scalars['Int']['output']>
}

/** Drug/Molecule entity */
export type DrugAdverseEventsArgs = {
	page?: InputMaybe<Pagination>
}

/** Drug/Molecule entity */
export type DrugKnownDrugsArgs = {
	cursor?: InputMaybe<Scalars['String']['input']>
	freeTextQuery?: InputMaybe<Scalars['String']['input']>
	size?: InputMaybe<Scalars['Int']['input']>
}

/** Drug/Molecule entity */
export type DrugLiteratureOcurrencesArgs = {
	additionalIds?: InputMaybe<Array<Scalars['String']['input']>>
	cursor?: InputMaybe<Scalars['String']['input']>
	endMonth?: InputMaybe<Scalars['Int']['input']>
	endYear?: InputMaybe<Scalars['Int']['input']>
	startMonth?: InputMaybe<Scalars['Int']['input']>
	startYear?: InputMaybe<Scalars['Int']['input']>
}

/** Drug/Molecule entity */
export type DrugPharmacogenomicsArgs = {
	page?: InputMaybe<Pagination>
}

/** Drug/Molecule entity */
export type DrugSimilarEntitiesArgs = {
	additionalIds?: InputMaybe<Array<Scalars['String']['input']>>
	entityNames?: InputMaybe<Array<Scalars['String']['input']>>
	size?: InputMaybe<Scalars['Int']['input']>
	threshold?: InputMaybe<Scalars['Float']['input']>
}

export type DrugReferences = {
	ids: Array<Scalars['String']['output']>
	source: Scalars['String']['output']
}

/** Drug warnings as calculated by ChEMBL */
export type DrugWarning = {
	chemblIds?: Maybe<Array<Scalars['String']['output']>>
	/** Country issuing warning */
	country?: Maybe<Scalars['String']['output']>
	/** Reason for withdrawal */
	description?: Maybe<Scalars['String']['output']>
	/** ID of the curated EFO term that represents the adverse outcome */
	efoId?: Maybe<Scalars['String']['output']>
	/** ID of the curated EFO term that represents the high level warning class */
	efoIdForWarningClass?: Maybe<Scalars['String']['output']>
	/**  label of the curated EFO term that represents the adverse outcome */
	efoTerm?: Maybe<Scalars['String']['output']>
	id?: Maybe<Scalars['Long']['output']>
	/** Source of withdrawal information */
	references?: Maybe<Array<DrugWarningReference>>
	/** High level toxicity category by Meddra System Organ Class */
	toxicityClass?: Maybe<Scalars['String']['output']>
	/** Either 'black box warning' or 'withdrawn' */
	warningType: Scalars['String']['output']
	/** Year of withdrawal */
	year?: Maybe<Scalars['Int']['output']>
}

export type DrugWarningReference = {
	id: Scalars['String']['output']
	source: Scalars['String']['output']
	url: Scalars['String']['output']
}

/** Drug with drug identifiers */
export type DrugWithIdentifiers = {
	/** Drug entity */
	drug?: Maybe<Drug>
	drugFromSource?: Maybe<Scalars['String']['output']>
	drugId?: Maybe<Scalars['String']['output']>
}

export type EntityUnionType = Disease | Drug | Study | Target | Variant

/** Evidence for a Target-Disease pair */
export type Evidence = {
	alleleOrigins?: Maybe<Array<Scalars['String']['output']>>
	allelicRequirements?: Maybe<Array<Scalars['String']['output']>>
	/** Genetic origin of a population */
	ancestry?: Maybe<Scalars['String']['output']>
	/** Identifier of the ancestry in the HANCESTRO ontology */
	ancestryId?: Maybe<Scalars['String']['output']>
	assays?: Maybe<Array<Assays>>
	/** Assessments */
	assessments?: Maybe<Array<Scalars['String']['output']>>
	beta?: Maybe<Scalars['Float']['output']>
	betaConfidenceIntervalLower?: Maybe<Scalars['Float']['output']>
	betaConfidenceIntervalUpper?: Maybe<Scalars['Float']['output']>
	biologicalModelAllelicComposition?: Maybe<Scalars['String']['output']>
	biologicalModelGeneticBackground?: Maybe<Scalars['String']['output']>
	biologicalModelId?: Maybe<Scalars['String']['output']>
	biomarkerList?: Maybe<Array<NameDescription>>
	biomarkerName?: Maybe<Scalars['String']['output']>
	biomarkers?: Maybe<Biomarkers>
	biosamplesFromSource?: Maybe<Array<Scalars['String']['output']>>
	cellLineBackground?: Maybe<Scalars['String']['output']>
	cellType?: Maybe<Scalars['String']['output']>
	clinicalPhase?: Maybe<Scalars['Float']['output']>
	clinicalSignificances?: Maybe<Array<Scalars['String']['output']>>
	clinicalStatus?: Maybe<Scalars['String']['output']>
	cohortDescription?: Maybe<Scalars['String']['output']>
	cohortId?: Maybe<Scalars['String']['output']>
	cohortPhenotypes?: Maybe<Array<Scalars['String']['output']>>
	cohortShortName?: Maybe<Scalars['String']['output']>
	confidence?: Maybe<Scalars['String']['output']>
	contrast?: Maybe<Scalars['String']['output']>
	credibleSet?: Maybe<CredibleSet>
	crisprScreenLibrary?: Maybe<Scalars['String']['output']>
	datasourceId: Scalars['String']['output']
	datatypeId: Scalars['String']['output']
	/** Direction On Trait */
	directionOnTrait?: Maybe<Scalars['String']['output']>
	/** Disease evidence */
	disease: Disease
	diseaseCellLines?: Maybe<Array<DiseaseCellLine>>
	diseaseFromSource?: Maybe<Scalars['String']['output']>
	diseaseFromSourceId?: Maybe<Scalars['String']['output']>
	diseaseFromSourceMappedId?: Maybe<Scalars['String']['output']>
	diseaseModelAssociatedHumanPhenotypes?: Maybe<Array<LabelledElement>>
	diseaseModelAssociatedModelPhenotypes?: Maybe<Array<LabelledElement>>
	drug?: Maybe<Drug>
	drugFromSource?: Maybe<Scalars['String']['output']>
	drugResponse?: Maybe<Disease>
	geneInteractionType?: Maybe<Scalars['String']['output']>
	geneticInteractionFDR?: Maybe<Scalars['Float']['output']>
	geneticInteractionPValue?: Maybe<Scalars['Float']['output']>
	geneticInteractionScore?: Maybe<Scalars['Float']['output']>
	/** Evidence identifier */
	id: Scalars['String']['output']
	interactingTargetFromSourceId?: Maybe<Scalars['String']['output']>
	interactingTargetRole?: Maybe<Scalars['String']['output']>
	/** list of pub med publications ids */
	literature?: Maybe<Array<Scalars['String']['output']>>
	log2FoldChangePercentileRank?: Maybe<Scalars['Long']['output']>
	log2FoldChangeValue?: Maybe<Scalars['Float']['output']>
	mutatedSamples?: Maybe<Array<EvidenceVariation>>
	oddsRatio?: Maybe<Scalars['Float']['output']>
	/** Confidence interval lower-bound */
	oddsRatioConfidenceIntervalLower?: Maybe<Scalars['Float']['output']>
	oddsRatioConfidenceIntervalUpper?: Maybe<Scalars['Float']['output']>
	pValueExponent?: Maybe<Scalars['Long']['output']>
	pValueMantissa?: Maybe<Scalars['Float']['output']>
	pathways?: Maybe<Array<Pathway>>
	phenotypicConsequenceFDR?: Maybe<Scalars['Float']['output']>
	phenotypicConsequenceLogFoldChange?: Maybe<Scalars['Float']['output']>
	phenotypicConsequencePValue?: Maybe<Scalars['Float']['output']>
	/** Primary Project Hit */
	primaryProjectHit?: Maybe<Scalars['Boolean']['output']>
	/** Primary Project Id */
	primaryProjectId?: Maybe<Scalars['String']['output']>
	projectDescription?: Maybe<Scalars['String']['output']>
	projectId?: Maybe<Scalars['String']['output']>
	/** list of central pub med publications ids */
	pubMedCentralIds?: Maybe<Array<Scalars['String']['output']>>
	publicationFirstAuthor?: Maybe<Scalars['String']['output']>
	publicationYear?: Maybe<Scalars['Long']['output']>
	reactionId?: Maybe<Scalars['String']['output']>
	reactionName?: Maybe<Scalars['String']['output']>
	/** Release date */
	releaseDate?: Maybe<Scalars['String']['output']>
	/** Release version */
	releaseVersion?: Maybe<Scalars['String']['output']>
	resourceScore?: Maybe<Scalars['Float']['output']>
	/** Evidence score */
	score: Scalars['Float']['output']
	significantDriverMethods?: Maybe<Array<Scalars['String']['output']>>
	/** The statistical method used to calculate the association */
	statisticalMethod?: Maybe<Scalars['String']['output']>
	/** Overview of the statistical method used to calculate the association */
	statisticalMethodOverview?: Maybe<Scalars['String']['output']>
	statisticalTestTail?: Maybe<Scalars['String']['output']>
	studyCases?: Maybe<Scalars['Long']['output']>
	/** Number of cases in a case-control study that carry at least one allele of the qualifying variant */
	studyCasesWithQualifyingVariants?: Maybe<Scalars['Long']['output']>
	studyId?: Maybe<Scalars['String']['output']>
	studyOverview?: Maybe<Scalars['String']['output']>
	/** Sample size */
	studySampleSize?: Maybe<Scalars['Long']['output']>
	studyStartDate?: Maybe<Scalars['String']['output']>
	studyStopReason?: Maybe<Scalars['String']['output']>
	/** Predicted reason(s) why the study has been stopped based on studyStopReason */
	studyStopReasonCategories?: Maybe<Array<Scalars['String']['output']>>
	/** Target evidence */
	target: Target
	targetFromSource?: Maybe<Scalars['String']['output']>
	targetFromSourceId?: Maybe<Scalars['String']['output']>
	targetInModel?: Maybe<Scalars['String']['output']>
	targetModulation?: Maybe<Scalars['String']['output']>
	targetRole?: Maybe<Scalars['String']['output']>
	textMiningSentences?: Maybe<Array<EvidenceTextMiningSentence>>
	urls?: Maybe<Array<LabelledUri>>
	variant?: Maybe<Variant>
	variantAminoacidDescriptions?: Maybe<Array<Scalars['String']['output']>>
	/** Variant effect */
	variantEffect?: Maybe<Scalars['String']['output']>
	variantFunctionalConsequence?: Maybe<SequenceOntologyTerm>
	variantFunctionalConsequenceFromQtlId?: Maybe<SequenceOntologyTerm>
	/** Variant dbSNP identifier */
	variantRsId?: Maybe<Scalars['String']['output']>
	/** Warning message */
	warningMessage?: Maybe<Scalars['String']['output']>
}

export type EvidenceSource = {
	datasource: Scalars['String']['output']
	datatype: Scalars['String']['output']
}

export type EvidenceTextMiningSentence = {
	dEnd: Scalars['Long']['output']
	dStart: Scalars['Long']['output']
	section: Scalars['String']['output']
	tEnd: Scalars['Long']['output']
	tStart: Scalars['Long']['output']
	text: Scalars['String']['output']
}

/** Sequence Ontology Term */
export type EvidenceVariation = {
	functionalConsequence?: Maybe<SequenceOntologyTerm>
	numberMutatedSamples?: Maybe<Scalars['Long']['output']>
	numberSamplesTested?: Maybe<Scalars['Long']['output']>
	numberSamplesWithMutationType?: Maybe<Scalars['Long']['output']>
}

/** Evidence for a Target-Disease pair */
export type Evidences = {
	count: Scalars['Long']['output']
	cursor?: Maybe<Scalars['String']['output']>
	rows: Array<Evidence>
}

export type Expression = {
	protein: ProteinExpression
	rna: RnaExpression
	tissue: Tissue
}

export type GeneEssentialityScreen = {
	cellLineName?: Maybe<Scalars['String']['output']>
	depmapId?: Maybe<Scalars['String']['output']>
	diseaseCellLineId?: Maybe<Scalars['String']['output']>
	diseaseFromSource?: Maybe<Scalars['String']['output']>
	expression?: Maybe<Scalars['Float']['output']>
	geneEffect?: Maybe<Scalars['Float']['output']>
	mutation?: Maybe<Scalars['String']['output']>
}

export type GeneOntology = {
	aspect: Scalars['String']['output']
	evidence: Scalars['String']['output']
	geneProduct: Scalars['String']['output']
	source: Scalars['String']['output']
	/** Gene ontology term */
	term: GeneOntologyTerm
}

export type GeneOntologyTerm = {
	id: Scalars['String']['output']
	name: Scalars['String']['output']
}

export type GenomicLocation = {
	chromosome: Scalars['String']['output']
	end: Scalars['Long']['output']
	start: Scalars['Long']['output']
	strand: Scalars['Int']['output']
}

/** Phenotype entity */
export type Hpo = {
	/** Phenotype description */
	description?: Maybe<Scalars['String']['output']>
	/** Open Targets hpo id */
	id: Scalars['String']['output']
	/** Phenotype name */
	name: Scalars['String']['output']
	/** namespace */
	namespace?: Maybe<Array<Scalars['String']['output']>>
}

export type HallmarkAttribute = {
	description: Scalars['String']['output']
	name: Scalars['String']['output']
	pmid?: Maybe<Scalars['Long']['output']>
}

export type Hallmarks = {
	attributes: Array<HallmarkAttribute>
	cancerHallmarks: Array<CancerHallmark>
}

export type Homologue = {
	homologyType: Scalars['String']['output']
	isHighConfidence?: Maybe<Scalars['String']['output']>
	queryPercentageIdentity: Scalars['Float']['output']
	speciesId: Scalars['String']['output']
	speciesName: Scalars['String']['output']
	targetGeneId: Scalars['String']['output']
	targetGeneSymbol: Scalars['String']['output']
	targetPercentageIdentity: Scalars['Float']['output']
}

export type IdAndSource = {
	id: Scalars['String']['output']
	source: Scalars['String']['output']
}

export type IndicationReference = {
	ids?: Maybe<Array<Scalars['String']['output']>>
	source: Scalars['String']['output']
}

export type IndicationRow = {
	/** Disease */
	disease: Disease
	maxPhaseForIndication: Scalars['Float']['output']
	references?: Maybe<Array<IndicationReference>>
}

export type Indications = {
	approvedIndications?: Maybe<Array<Scalars['String']['output']>>
	count: Scalars['Long']['output']
	rows: Array<IndicationRow>
}

export type Interaction = {
	count: Scalars['Long']['output']
	/** List of evidences for this interaction */
	evidences: Array<InteractionEvidence>
	intA: Scalars['String']['output']
	intABiologicalRole: Scalars['String']['output']
	intB: Scalars['String']['output']
	intBBiologicalRole: Scalars['String']['output']
	score?: Maybe<Scalars['Float']['output']>
	sourceDatabase: Scalars['String']['output']
	speciesA?: Maybe<InteractionSpecies>
	speciesB?: Maybe<InteractionSpecies>
	targetA?: Maybe<Target>
	targetB?: Maybe<Target>
}

export type InteractionEvidence = {
	evidenceScore?: Maybe<Scalars['Float']['output']>
	expansionMethodMiIdentifier?: Maybe<Scalars['String']['output']>
	expansionMethodShortName?: Maybe<Scalars['String']['output']>
	hostOrganismScientificName?: Maybe<Scalars['String']['output']>
	hostOrganismTaxId?: Maybe<Scalars['Long']['output']>
	intASource: Scalars['String']['output']
	intBSource: Scalars['String']['output']
	interactionDetectionMethodMiIdentifier: Scalars['String']['output']
	interactionDetectionMethodShortName: Scalars['String']['output']
	interactionIdentifier?: Maybe<Scalars['String']['output']>
	interactionTypeMiIdentifier?: Maybe<Scalars['String']['output']>
	interactionTypeShortName?: Maybe<Scalars['String']['output']>
	participantDetectionMethodA?: Maybe<Array<InteractionEvidencePdm>>
	participantDetectionMethodB?: Maybe<Array<InteractionEvidencePdm>>
	pubmedId?: Maybe<Scalars['String']['output']>
}

export type InteractionEvidencePdm = {
	miIdentifier?: Maybe<Scalars['String']['output']>
	shortName?: Maybe<Scalars['String']['output']>
}

export type InteractionResources = {
	databaseVersion: Scalars['String']['output']
	sourceDatabase: Scalars['String']['output']
}

export type InteractionSpecies = {
	mnemonic?: Maybe<Scalars['String']['output']>
	scientificName?: Maybe<Scalars['String']['output']>
	taxonId?: Maybe<Scalars['Long']['output']>
}

export type Interactions = {
	count: Scalars['Long']['output']
	rows: Array<Interaction>
}

/** A key-value pair */
export type KeyValue = {
	key: Scalars['String']['output']
	value: Scalars['String']['output']
}

/** An array of key-value pairs */
export type KeyValueArray = {
	items: Array<KeyValue>
}

/** Clinical precedence entry for drugs with investigational or approved indications targeting gene products according to their curated mechanism of action. Entries are grouped by target, disease, drug, phase, status and mechanism of action */
export type KnownDrug = {
	approvedName: Scalars['String']['output']
	/** Drug target approved symbol based on curated mechanism of action */
	approvedSymbol: Scalars['String']['output']
	/** Clinicaltrials.gov identifiers on entry trials */
	ctIds: Array<Scalars['String']['output']>
	/** Curated disease indication entity */
	disease?: Maybe<Disease>
	/** Curated disease indication Open Targets id */
	diseaseId: Scalars['String']['output']
	/** Curated drug entity */
	drug?: Maybe<Drug>
	/** Open Targets drug id */
	drugId: Scalars['String']['output']
	/** Drug modality */
	drugType: Scalars['String']['output']
	/** Curated disease indication */
	label: Scalars['String']['output']
	/** Mechanism of Action description */
	mechanismOfAction: Scalars['String']['output']
	/** Clinical Trial phase */
	phase: Scalars['Float']['output']
	/** Drug name */
	prefName: Scalars['String']['output']
	/** Source urls for FDA or package inserts */
	references: Array<KnownDrugReference>
	/** Trial status */
	status?: Maybe<Scalars['String']['output']>
	/** Drug target entity based on curated mechanism of action */
	target?: Maybe<Target>
	/** Drug target class based on curated mechanism of action */
	targetClass: Array<Scalars['String']['output']>
	/** Drug target Open Targets id based on curated mechanism of action */
	targetId: Scalars['String']['output']
	/** Source urls from clinical trials */
	urls: Array<Url>
}

export type KnownDrugReference = {
	ids: Array<Scalars['String']['output']>
	source: Scalars['String']['output']
	urls: Array<Scalars['String']['output']>
}

/** Set of clinical precedence for drugs with investigational or approved indications targeting gene products according to their curated mechanism of action */
export type KnownDrugs = {
	/** Total number of entries */
	count: Scalars['Long']['output']
	cursor?: Maybe<Scalars['String']['output']>
	/** Clinical precedence entries with known mechanism of action */
	rows: Array<KnownDrug>
	/** Total unique diseases or phenotypes */
	uniqueDiseases: Scalars['Long']['output']
	/** Total unique drugs/molecules */
	uniqueDrugs: Scalars['Long']['output']
	/** Total unique known mechanism of action targetsTotal unique known mechanism of action targets */
	uniqueTargets: Scalars['Long']['output']
}

export type L2GFeature = {
	name: Scalars['String']['output']
	shapValue: Scalars['Float']['output']
	value: Scalars['Float']['output']
}

export type L2GPrediction = {
	features?: Maybe<Array<L2GFeature>>
	score: Scalars['Float']['output']
	shapBaseValue: Scalars['Float']['output']
	studyLocusId: Scalars['String']['output']
	/** Target */
	target?: Maybe<Target>
}

export type L2GPredictions = {
	count: Scalars['Long']['output']
	id: Scalars['String']['output']
	rows: Array<L2GPrediction>
}

export type LabelAndSource = {
	label: Scalars['String']['output']
	source: Scalars['String']['output']
}

export type LabelledElement = {
	id: Scalars['String']['output']
	label: Scalars['String']['output']
}

export type LabelledUri = {
	niceName?: Maybe<Scalars['String']['output']>
	url: Scalars['String']['output']
}

export type LdPopulationStructure = {
	ldPopulation?: Maybe<Scalars['String']['output']>
	relativeSampleSize?: Maybe<Scalars['Float']['output']>
}

export type LdSet = {
	r2Overall?: Maybe<Scalars['Float']['output']>
	tagVariantId?: Maybe<Scalars['String']['output']>
}

/** Linked Disease Entities */
export type LinkedDiseases = {
	count: Scalars['Int']['output']
	/** Disease List */
	rows: Array<Disease>
}

/** Linked Target Entities */
export type LinkedTargets = {
	count: Scalars['Int']['output']
	/** Target List */
	rows: Array<Target>
}

export type LocationAndSource = {
	labelSL?: Maybe<Scalars['String']['output']>
	location: Scalars['String']['output']
	source: Scalars['String']['output']
	termSL?: Maybe<Scalars['String']['output']>
}

export type Loci = {
	count: Scalars['Long']['output']
	rows?: Maybe<Array<Locus>>
}

export type Locus = {
	beta?: Maybe<Scalars['Float']['output']>
	is95CredibleSet?: Maybe<Scalars['Boolean']['output']>
	is99CredibleSet?: Maybe<Scalars['Boolean']['output']>
	logBF?: Maybe<Scalars['Float']['output']>
	pValueExponent?: Maybe<Scalars['Int']['output']>
	pValueMantissa?: Maybe<Scalars['Float']['output']>
	posteriorProbability?: Maybe<Scalars['Float']['output']>
	r2Overall?: Maybe<Scalars['Float']['output']>
	standardError?: Maybe<Scalars['Float']['output']>
	variant?: Maybe<Variant>
}

export type MappingResult = {
	hits?: Maybe<Array<SearchResult>>
	term: Scalars['String']['output']
}

export type MappingResults = {
	aggregations?: Maybe<SearchResultAggs>
	/** Mappings */
	mappings: Array<MappingResult>
	total: Scalars['Long']['output']
}

export type Match = {
	endInSentence: Scalars['Long']['output']
	mappedId: Scalars['String']['output']
	matchedLabel: Scalars['String']['output']
	/** Type of the matched label */
	matchedType: Scalars['String']['output']
	sectionEnd?: Maybe<Scalars['Long']['output']>
	sectionStart?: Maybe<Scalars['Long']['output']>
	startInSentence: Scalars['Long']['output']
}

export type MechanismOfActionRow = {
	actionType?: Maybe<Scalars['String']['output']>
	mechanismOfAction: Scalars['String']['output']
	references?: Maybe<Array<Reference>>
	targetName?: Maybe<Scalars['String']['output']>
	/** Target List */
	targets: Array<Target>
}

export type MechanismsOfAction = {
	rows: Array<MechanismOfActionRow>
	uniqueActionTypes: Array<Scalars['String']['output']>
	uniqueTargetTypes: Array<Scalars['String']['output']>
}

export type Meta = {
	apiVersion: ApiVersion
	dataVersion: DataVersion
	/** Return Open Targets downloads information */
	downloads?: Maybe<Scalars['String']['output']>
	name: Scalars['String']['output']
}

export type ModelPhenotypeClasses = {
	id: Scalars['String']['output']
	label: Scalars['String']['output']
}

export type MousePhenotype = {
	biologicalModels: Array<BiologicalModels>
	modelPhenotypeClasses: Array<ModelPhenotypeClasses>
	modelPhenotypeId: Scalars['String']['output']
	modelPhenotypeLabel: Scalars['String']['output']
	targetInModel: Scalars['String']['output']
	targetInModelEnsemblId?: Maybe<Scalars['String']['output']>
	targetInModelMgiId: Scalars['String']['output']
}

export type NameDescription = {
	description: Scalars['String']['output']
	name: Scalars['String']['output']
}

export type OtarProject = {
	integratesInPPP?: Maybe<Scalars['Boolean']['output']>
	otarCode: Scalars['String']['output']
	projectName?: Maybe<Scalars['String']['output']>
	reference: Scalars['String']['output']
	status?: Maybe<Scalars['String']['output']>
}

export type Pagination = {
	index: Scalars['Int']['input']
	size: Scalars['Int']['input']
}

/** Pathway entry */
export type Pathway = {
	id?: Maybe<Scalars['String']['output']>
	name: Scalars['String']['output']
}

export type Pharmacogenomics = {
	datasourceId?: Maybe<Scalars['String']['output']>
	datatypeId?: Maybe<Scalars['String']['output']>
	/** Drug List */
	drugs: Array<DrugWithIdentifiers>
	evidenceLevel?: Maybe<Scalars['String']['output']>
	genotype?: Maybe<Scalars['String']['output']>
	genotypeAnnotationText?: Maybe<Scalars['String']['output']>
	genotypeId?: Maybe<Scalars['String']['output']>
	haplotypeFromSourceId?: Maybe<Scalars['String']['output']>
	haplotypeId?: Maybe<Scalars['String']['output']>
	isDirectTarget: Scalars['Boolean']['output']
	literature?: Maybe<Array<Scalars['String']['output']>>
	pgxCategory?: Maybe<Scalars['String']['output']>
	phenotypeFromSourceId?: Maybe<Scalars['String']['output']>
	phenotypeText?: Maybe<Scalars['String']['output']>
	studyId?: Maybe<Scalars['String']['output']>
	/** Target entity */
	target?: Maybe<Target>
	targetFromSourceId?: Maybe<Scalars['String']['output']>
	variantAnnotation?: Maybe<Array<VariantAnnotation>>
	variantFunctionalConsequence?: Maybe<SequenceOntologyTerm>
	variantFunctionalConsequenceId?: Maybe<Scalars['String']['output']>
	variantId?: Maybe<Scalars['String']['output']>
	variantRsId?: Maybe<Scalars['String']['output']>
}

export type ProteinCodingCoordinate = {
	alternateAminoAcid: Scalars['String']['output']
	aminoAcidPosition: Scalars['Int']['output']
	datasources: Array<Datasource>
	/** Diseases */
	diseases: Array<Disease>
	referenceAminoAcid: Scalars['String']['output']
	/** Target */
	target?: Maybe<Target>
	therapeuticAreas: Array<Scalars['String']['output']>
	uniprotAccessions: Array<Scalars['String']['output']>
	/** Variant */
	variant?: Maybe<Variant>
	/** Most severe consequence sequence ontology */
	variantConsequences: Array<SequenceOntologyTerm>
	variantEffect?: Maybe<Scalars['Float']['output']>
}

export type ProteinCodingCoordinates = {
	count: Scalars['Long']['output']
	rows: Array<ProteinCodingCoordinate>
}

export type ProteinExpression = {
	cellType: Array<CellType>
	level: Scalars['Int']['output']
	reliability: Scalars['Boolean']['output']
}

export type Publication = {
	pmcid?: Maybe<Scalars['String']['output']>
	pmid: Scalars['String']['output']
	/** Publication Date */
	publicationDate?: Maybe<Scalars['String']['output']>
	/** Unique counts per matched keyword */
	sentences?: Maybe<Array<Sentence>>
}

/** Publication list */
export type Publications = {
	count: Scalars['Long']['output']
	cursor?: Maybe<Scalars['String']['output']>
	/** Earliest publication year. */
	earliestPubYear: Scalars['Int']['output']
	filteredCount: Scalars['Long']['output']
	rows: Array<Publication>
}

export type Query = {
	/** The complete list of all possible datasources */
	associationDatasources: Array<EvidenceSource>
	/** Return a Credible Set */
	credibleSet?: Maybe<CredibleSet>
	credibleSets: CredibleSets
	/** Return a Disease */
	disease?: Maybe<Disease>
	/** Return Diseases */
	diseases: Array<Disease>
	/** Return a drug */
	drug?: Maybe<Drug>
	/** Return drugs */
	drugs: Array<Drug>
	/** Search facets */
	facets: SearchFacetsResults
	/** Gene ontology terms */
	geneOntologyTerms: Array<Maybe<GeneOntologyTerm>>
	/** The complete list of all possible datasources */
	interactionResources: Array<InteractionResources>
	/** Map terms to IDs */
	mapIds: MappingResults
	/** Return Open Targets API metadata information */
	meta: Meta
	/** Multi entity search */
	search: SearchResults
	/** Return a studies */
	studies: Studies
	/** Return a Study */
	study?: Maybe<Study>
	/** Return a Target */
	target?: Maybe<Target>
	/** Return Targets */
	targets: Array<Target>
	/** Return a Variant */
	variant?: Maybe<Variant>
}

export type QueryCredibleSetArgs = {
	studyLocusId: Scalars['String']['input']
}

export type QueryCredibleSetsArgs = {
	page?: InputMaybe<Pagination>
	regions?: InputMaybe<Array<Scalars['String']['input']>>
	studyIds?: InputMaybe<Array<Scalars['String']['input']>>
	studyLocusIds?: InputMaybe<Array<Scalars['String']['input']>>
	studyTypes?: InputMaybe<Array<StudyTypeEnum>>
	variantIds?: InputMaybe<Array<Scalars['String']['input']>>
}

export type QueryDiseaseArgs = {
	efoId: Scalars['String']['input']
}

export type QueryDiseasesArgs = {
	efoIds: Array<Scalars['String']['input']>
}

export type QueryDrugArgs = {
	chemblId: Scalars['String']['input']
}

export type QueryDrugsArgs = {
	chemblIds: Array<Scalars['String']['input']>
}

export type QueryFacetsArgs = {
	category?: InputMaybe<Scalars['String']['input']>
	entityNames?: InputMaybe<Array<Scalars['String']['input']>>
	page?: InputMaybe<Pagination>
	queryString?: InputMaybe<Scalars['String']['input']>
}

export type QueryGeneOntologyTermsArgs = {
	goIds: Array<Scalars['String']['input']>
}

export type QueryMapIdsArgs = {
	entityNames?: InputMaybe<Array<Scalars['String']['input']>>
	queryTerms: Array<Scalars['String']['input']>
}

export type QuerySearchArgs = {
	entityNames?: InputMaybe<Array<Scalars['String']['input']>>
	page?: InputMaybe<Pagination>
	queryString: Scalars['String']['input']
}

export type QueryStudiesArgs = {
	diseaseIds?: InputMaybe<Array<Scalars['String']['input']>>
	enableIndirect?: InputMaybe<Scalars['Boolean']['input']>
	page?: InputMaybe<Pagination>
	studyId?: InputMaybe<Scalars['String']['input']>
}

export type QueryStudyArgs = {
	studyId?: InputMaybe<Scalars['String']['input']>
}

export type QueryTargetArgs = {
	ensemblId: Scalars['String']['input']
}

export type QueryTargetsArgs = {
	ensemblIds: Array<Scalars['String']['input']>
}

export type QueryVariantArgs = {
	variantId: Scalars['String']['input']
}

export type RnaExpression = {
	level: Scalars['Int']['output']
	unit: Scalars['String']['output']
	value: Scalars['Float']['output']
	zscore: Scalars['Long']['output']
}

export type ReactomePathway = {
	pathway: Scalars['String']['output']
	pathwayId: Scalars['String']['output']
	topLevelTerm: Scalars['String']['output']
}

export type Reference = {
	ids?: Maybe<Array<Scalars['String']['output']>>
	source: Scalars['String']['output']
	urls?: Maybe<Array<Scalars['String']['output']>>
}

export type SafetyBiosample = {
	cellFormat?: Maybe<Scalars['String']['output']>
	cellId?: Maybe<Scalars['String']['output']>
	cellLabel?: Maybe<Scalars['String']['output']>
	tissueId?: Maybe<Scalars['String']['output']>
	tissueLabel?: Maybe<Scalars['String']['output']>
}

export type SafetyEffects = {
	direction: Scalars['String']['output']
	dosing?: Maybe<Scalars['String']['output']>
}

export type SafetyLiability = {
	biosamples?: Maybe<Array<SafetyBiosample>>
	datasource: Scalars['String']['output']
	effects?: Maybe<Array<SafetyEffects>>
	event?: Maybe<Scalars['String']['output']>
	eventId?: Maybe<Scalars['String']['output']>
	literature?: Maybe<Scalars['String']['output']>
	studies?: Maybe<Array<SafetyStudy>>
	url?: Maybe<Scalars['String']['output']>
}

export type SafetyStudy = {
	description?: Maybe<Scalars['String']['output']>
	name?: Maybe<Scalars['String']['output']>
	type?: Maybe<Scalars['String']['output']>
}

export type Sample = {
	ancestry?: Maybe<Scalars['String']['output']>
	sampleSize?: Maybe<Scalars['Int']['output']>
}

export type ScoredComponent = {
	id: Scalars['String']['output']
	score: Scalars['Float']['output']
}

export type SearchFacetsCategory = {
	name: Scalars['String']['output']
	total: Scalars['Long']['output']
}

export type SearchFacetsResult = {
	category: Scalars['String']['output']
	datasourceId?: Maybe<Scalars['String']['output']>
	entityIds?: Maybe<Array<Scalars['String']['output']>>
	highlights: Array<Scalars['String']['output']>
	id: Scalars['String']['output']
	label: Scalars['String']['output']
	score: Scalars['Float']['output']
}

/** Search facets results */
export type SearchFacetsResults = {
	/** Categories */
	categories: Array<SearchFacetsCategory>
	/** Return combined */
	hits: Array<SearchFacetsResult>
	/** Total number or results given a entity filter */
	total: Scalars['Long']['output']
}

export type SearchResult = {
	category: Array<Scalars['String']['output']>
	description?: Maybe<Scalars['String']['output']>
	entity: Scalars['String']['output']
	highlights: Array<Scalars['String']['output']>
	id: Scalars['String']['output']
	keywords?: Maybe<Array<Scalars['String']['output']>>
	multiplier: Scalars['Float']['output']
	name: Scalars['String']['output']
	ngrams?: Maybe<Array<Scalars['String']['output']>>
	/** Associations for a fixed target */
	object?: Maybe<EntityUnionType>
	prefixes?: Maybe<Array<Scalars['String']['output']>>
	score: Scalars['Float']['output']
}

export type SearchResultAggCategory = {
	name: Scalars['String']['output']
	total: Scalars['Long']['output']
}

export type SearchResultAggEntity = {
	categories: Array<SearchResultAggCategory>
	name: Scalars['String']['output']
	total: Scalars['Long']['output']
}

export type SearchResultAggs = {
	entities: Array<SearchResultAggEntity>
	total: Scalars['Long']['output']
}

/** Search results */
export type SearchResults = {
	/** Aggregations */
	aggregations?: Maybe<SearchResultAggs>
	/** Return combined */
	hits: Array<SearchResult>
	/** Total number or results given a entity filter */
	total: Scalars['Long']['output']
}

export type Sentence = {
	/** List of matches */
	matches: Array<Match>
	/** Section of the publication (either title or abstract) */
	section: Scalars['String']['output']
}

/** Sequence Ontology Term */
export type SequenceOntologyTerm = {
	id: Scalars['String']['output']
	label: Scalars['String']['output']
}

export type Similarity = {
	category: Scalars['String']['output']
	id: Scalars['String']['output']
	/** Similarity label optionally resolved into an entity */
	object?: Maybe<EntityUnionType>
	score: Scalars['Float']['output']
}

/** Studies */
export type Studies = {
	count: Scalars['Long']['output']
	rows: Array<Study>
}

/** A genome-wide association study */
export type Study = {
	analysisFlags?: Maybe<Array<Scalars['String']['output']>>
	backgroundTraits?: Maybe<Array<Disease>>
	/** biosample */
	biosample?: Maybe<Biosample>
	cohorts?: Maybe<Array<Scalars['String']['output']>>
	/** Condition */
	condition?: Maybe<Scalars['String']['output']>
	/** Credible sets */
	credibleSets: CredibleSets
	discoverySamples?: Maybe<Array<Sample>>
	diseases?: Maybe<Array<Disease>>
	hasSumstats?: Maybe<Scalars['Boolean']['output']>
	/** The study identifier */
	id: Scalars['String']['output']
	initialSampleSize?: Maybe<Scalars['String']['output']>
	ldPopulationStructure?: Maybe<Array<LdPopulationStructure>>
	nCases?: Maybe<Scalars['Int']['output']>
	nControls?: Maybe<Scalars['Int']['output']>
	nSamples?: Maybe<Scalars['Int']['output']>
	/** The project identifier */
	projectId?: Maybe<Scalars['String']['output']>
	publicationDate?: Maybe<Scalars['String']['output']>
	publicationFirstAuthor?: Maybe<Scalars['String']['output']>
	publicationJournal?: Maybe<Scalars['String']['output']>
	publicationTitle?: Maybe<Scalars['String']['output']>
	pubmedId?: Maybe<Scalars['String']['output']>
	qualityControls?: Maybe<Array<Scalars['String']['output']>>
	replicationSamples?: Maybe<Array<Sample>>
	/** The study type */
	studyType?: Maybe<StudyTypeEnum>
	summarystatsLocation?: Maybe<Scalars['String']['output']>
	sumstatQCValues?: Maybe<Array<SumStatQc>>
	/** Target */
	target?: Maybe<Target>
	traitFromSource?: Maybe<Scalars['String']['output']>
	traitFromSourceMappedIds?: Maybe<Array<Scalars['String']['output']>>
}

/** A genome-wide association study */
export type StudyCredibleSetsArgs = {
	page?: InputMaybe<Pagination>
}

export type StudyTypeEnum = 'eqtl' | 'gwas' | 'pqtl' | 'sceqtl' | 'scpqtl' | 'scsqtl' | 'sctuqtl' | 'sqtl' | 'tuqtl'

export type SumStatQc = {
	QCCheckName: Scalars['String']['output']
	QCCheckValue: Scalars['Float']['output']
}

/** Target entity */
export type Target = {
	alternativeGenes: Array<Scalars['String']['output']>
	/** Approved gene name */
	approvedName: Scalars['String']['output']
	/** HGNC approved symbol */
	approvedSymbol: Scalars['String']['output']
	/** associations on the fly */
	associatedDiseases: AssociatedDiseases
	/** Molecule biotype */
	biotype: Scalars['String']['output']
	chemicalProbes: Array<ChemicalProbe>
	/** Database cross references */
	dbXrefs: Array<IdAndSource>
	/** depMapEssentiality */
	depMapEssentiality?: Maybe<Array<DepMapEssentiality>>
	/** The complete list of all possible datasources */
	evidences: Evidences
	/** RNA and Protein baseline expression */
	expressions: Array<Expression>
	/** ... */
	functionDescriptions: Array<Scalars['String']['output']>
	/** Gene Ontology annotations */
	geneOntology: Array<GeneOntology>
	/** Symbol synonyms */
	geneticConstraint: Array<Constraint>
	/** Chromosomic location */
	genomicLocation: GenomicLocation
	/** Target-modulated essential alterations in cell physiology that dictate malignant growth */
	hallmarks?: Maybe<Hallmarks>
	/** Gene homologues */
	homologues: Array<Homologue>
	/** Open Targets target id */
	id: Scalars['String']['output']
	/** Biological pathway membership from Reactome */
	interactions?: Maybe<Interactions>
	/** isEssential */
	isEssential?: Maybe<Scalars['Boolean']['output']>
	/** Clinical precedence for drugs with investigational or approved indications targeting gene products according to their curated mechanism of action */
	knownDrugs?: Maybe<KnownDrugs>
	/** Return the list of publications that mention the main entity, alone or in combination with other entities */
	literatureOcurrences: Publications
	/** Biological pathway membership from Reactome */
	mousePhenotypes: Array<MousePhenotype>
	/** Alternative names */
	nameSynonyms: Array<LabelAndSource>
	/** Obsolete names */
	obsoleteNames: Array<LabelAndSource>
	/** Obsolete symbols */
	obsoleteSymbols: Array<LabelAndSource>
	/** Reactome pathways */
	pathways: Array<ReactomePathway>
	/** Pharmoacogenomics */
	pharmacogenomics: Array<Pharmacogenomics>
	/** Factors influencing target-specific properties informative in a target prioritisation strategy. Values range from -1 (deprioritised) to 1 (prioritised). */
	prioritisation?: Maybe<KeyValueArray>
	/** Protein coding coordinates */
	proteinCodingCoordinates: ProteinCodingCoordinates
	/** Related protein IDs */
	proteinIds: Array<IdAndSource>
	/** Known target safety effects and target safety risk information */
	safetyLiabilities: Array<SafetyLiability>
	/** Return similar labels using a model Word2CVec trained with PubMed */
	similarEntities: Array<Similarity>
	/** Location of ... */
	subcellularLocations: Array<LocationAndSource>
	/** Alternative symbols */
	symbolSynonyms: Array<LabelAndSource>
	/** Alternative names and symbols */
	synonyms: Array<LabelAndSource>
	targetClass: Array<TargetClass>
	/** Target Enabling Package (TEP) */
	tep?: Maybe<Tep>
	/** Target druggability assessment */
	tractability: Array<Tractability>
	/** Ensembl transcript IDs */
	transcriptIds: Array<Scalars['String']['output']>
}

/** Target entity */
export type TargetAssociatedDiseasesArgs = {
	BFilter?: InputMaybe<Scalars['String']['input']>
	Bs?: InputMaybe<Array<Scalars['String']['input']>>
	datasources?: InputMaybe<Array<DatasourceSettingsInput>>
	enableIndirect?: InputMaybe<Scalars['Boolean']['input']>
	facetFilters?: InputMaybe<Array<Scalars['String']['input']>>
	orderByScore?: InputMaybe<Scalars['String']['input']>
	page?: InputMaybe<Pagination>
}

/** Target entity */
export type TargetEvidencesArgs = {
	cursor?: InputMaybe<Scalars['String']['input']>
	datasourceIds?: InputMaybe<Array<Scalars['String']['input']>>
	efoIds: Array<Scalars['String']['input']>
	size?: InputMaybe<Scalars['Int']['input']>
}

/** Target entity */
export type TargetInteractionsArgs = {
	page?: InputMaybe<Pagination>
	scoreThreshold?: InputMaybe<Scalars['Float']['input']>
	sourceDatabase?: InputMaybe<Scalars['String']['input']>
}

/** Target entity */
export type TargetKnownDrugsArgs = {
	cursor?: InputMaybe<Scalars['String']['input']>
	freeTextQuery?: InputMaybe<Scalars['String']['input']>
	size?: InputMaybe<Scalars['Int']['input']>
}

/** Target entity */
export type TargetLiteratureOcurrencesArgs = {
	additionalIds?: InputMaybe<Array<Scalars['String']['input']>>
	cursor?: InputMaybe<Scalars['String']['input']>
	endMonth?: InputMaybe<Scalars['Int']['input']>
	endYear?: InputMaybe<Scalars['Int']['input']>
	startMonth?: InputMaybe<Scalars['Int']['input']>
	startYear?: InputMaybe<Scalars['Int']['input']>
}

/** Target entity */
export type TargetPharmacogenomicsArgs = {
	page?: InputMaybe<Pagination>
}

/** Target entity */
export type TargetProteinCodingCoordinatesArgs = {
	page?: InputMaybe<Pagination>
}

/** Target entity */
export type TargetSimilarEntitiesArgs = {
	additionalIds?: InputMaybe<Array<Scalars['String']['input']>>
	entityNames?: InputMaybe<Array<Scalars['String']['input']>>
	size?: InputMaybe<Scalars['Int']['input']>
	threshold?: InputMaybe<Scalars['Float']['input']>
}

export type TargetClass = {
	id: Scalars['Long']['output']
	label: Scalars['String']['output']
	level: Scalars['String']['output']
}

/** Target Enabling Package (TEP) */
export type Tep = {
	description: Scalars['String']['output']
	name: Scalars['String']['output']
	therapeuticArea: Scalars['String']['output']
	uri: Scalars['String']['output']
}

/** Tissue, organ and anatomical system */
export type Tissue = {
	/** Anatomical systems membership */
	anatomicalSystems: Array<Scalars['String']['output']>
	/** UBERON id */
	id: Scalars['String']['output']
	/** UBERON tissue label */
	label: Scalars['String']['output']
	/** Organs membership */
	organs: Array<Scalars['String']['output']>
}

export type Tractability = {
	label: Scalars['String']['output']
	modality: Scalars['String']['output']
	value: Scalars['Boolean']['output']
}

export type TranscriptConsequence = {
	aminoAcidChange?: Maybe<Scalars['String']['output']>
	codons?: Maybe<Scalars['String']['output']>
	consequenceScore: Scalars['Float']['output']
	distanceFromFootprint: Scalars['Int']['output']
	distanceFromTss: Scalars['Int']['output']
	impact?: Maybe<Scalars['String']['output']>
	isEnsemblCanonical: Scalars['Boolean']['output']
	lofteePrediction?: Maybe<Scalars['String']['output']>
	polyphenPrediction?: Maybe<Scalars['Float']['output']>
	siftPrediction?: Maybe<Scalars['Float']['output']>
	/** Target */
	target?: Maybe<Target>
	transcriptId?: Maybe<Scalars['String']['output']>
	transcriptIndex: Scalars['Long']['output']
	uniprotAccessions?: Maybe<Array<Scalars['String']['output']>>
	/** Most severe consequence sequence ontology */
	variantConsequences: Array<SequenceOntologyTerm>
}

/** Source URL for clinical trials, FDA and package inserts */
export type Url = {
	/** resource name */
	name: Scalars['String']['output']
	/** resource url */
	url: Scalars['String']['output']
}

export type Variant = {
	alleleFrequencies?: Maybe<Array<AlleleFrequency>>
	alternateAllele: Scalars['String']['output']
	chromosome: Scalars['String']['output']
	/** Credible sets */
	credibleSets: CredibleSets
	dbXrefs?: Maybe<Array<DbXref>>
	/** The complete list of all possible datasources */
	evidences: Evidences
	hgvsId?: Maybe<Scalars['String']['output']>
	id: Scalars['String']['output']
	/** Most severe consequence sequence ontology */
	mostSevereConsequence?: Maybe<SequenceOntologyTerm>
	/** Pharmoacogenomics */
	pharmacogenomics: Array<Pharmacogenomics>
	position: Scalars['Int']['output']
	/** Protein coding coordinates */
	proteinCodingCoordinates: ProteinCodingCoordinates
	referenceAllele: Scalars['String']['output']
	rsIds?: Maybe<Array<Scalars['String']['output']>>
	transcriptConsequences?: Maybe<Array<TranscriptConsequence>>
	variantDescription: Scalars['String']['output']
	variantEffect?: Maybe<Array<VariantEffect>>
}

export type VariantCredibleSetsArgs = {
	page?: InputMaybe<Pagination>
	studyTypes?: InputMaybe<Array<StudyTypeEnum>>
}

export type VariantEvidencesArgs = {
	cursor?: InputMaybe<Scalars['String']['input']>
	datasourceIds?: InputMaybe<Array<Scalars['String']['input']>>
	size?: InputMaybe<Scalars['Int']['input']>
}

export type VariantPharmacogenomicsArgs = {
	page?: InputMaybe<Pagination>
}

export type VariantProteinCodingCoordinatesArgs = {
	page?: InputMaybe<Pagination>
}

/** PharmGKB's variant curation that supports a clinical annotation. */
export type VariantAnnotation = {
	/** Allele or genotype in the base case. */
	baseAlleleOrGenotype?: Maybe<Scalars['String']['output']>
	/** Allele or genotype in the comparison case. */
	comparisonAlleleOrGenotype?: Maybe<Scalars['String']['output']>
	/** Allele directionality of the effect. */
	directionality?: Maybe<Scalars['String']['output']>
	/** Allele observed effect. */
	effect?: Maybe<Scalars['String']['output']>
	/** Summary of the impact of the allele on the drug response. */
	effectDescription?: Maybe<Scalars['String']['output']>
	/** Type of effect. */
	effectType?: Maybe<Scalars['String']['output']>
	/** Entity affected by the effect. */
	entity?: Maybe<Scalars['String']['output']>
	/** PMID of the supporting publication. */
	literature?: Maybe<Scalars['String']['output']>
}

export type VariantEffect = {
	assessment?: Maybe<Scalars['String']['output']>
	assessmentFlag?: Maybe<Scalars['String']['output']>
	method?: Maybe<Scalars['String']['output']>
	normalisedScore?: Maybe<Scalars['Float']['output']>
	score?: Maybe<Scalars['Float']['output']>
	/** Target */
	target?: Maybe<Target>
}

export type Assays = {
	description?: Maybe<Scalars['String']['output']>
	isHit?: Maybe<Scalars['Boolean']['output']>
	shortName?: Maybe<Scalars['String']['output']>
}

export type Biomarkers = {
	geneExpression?: Maybe<Array<BiomarkerGeneExpression>>
	geneticVariation?: Maybe<Array<GeneticVariation>>
}

export type GeneticVariation = {
	functionalConsequenceId?: Maybe<SequenceOntologyTerm>
	id?: Maybe<Scalars['String']['output']>
	name?: Maybe<Scalars['String']['output']>
}

export type LungCarcinomaAssociatedTargetsQueryVariables = Exact<{ [key: string]: never }>

export type LungCarcinomaAssociatedTargetsQuery = {
	disease?: {
		associatedTargets: {
			rows: Array<{
				score: number
				target: { id: string; approvedSymbol: string }
				datatypeScores: Array<{ id: string; score: number }>
			}>
		}
	} | null
}
