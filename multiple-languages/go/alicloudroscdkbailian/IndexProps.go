package alicloudroscdkbailian


// Properties for defining a `Index`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-index
type IndexProps struct {
	// Property name: Knowledge base name.
	//
	// 1-20 characters. Supports Chinese, English, numbers, underscores (_), hyphens (-), periods (.) and colons (:).
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property sourceType: Data source type.
	//
	// DATA_CENTER_CATEGORY: import files from specified categories. DATA_CENTER_FILE: import specified files.
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	// Property structureType: Knowledge base type.
	//
	// unstructured: document search or audio\/video knowledge base. structured: data query or image Q&A knowledge base.
	StructureType interface{} `field:"required" json:"structureType" yaml:"structureType"`
	// Property workspaceId: Workspace ID.
	//
	// The knowledge base will be created in this workspace.
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	// Property categoryIds: Category IDs to import when creating the knowledge base.
	//
	// Required when SourceType is DATA_CENTER_CATEGORY.
	CategoryIds interface{} `field:"optional" json:"categoryIds" yaml:"categoryIds"`
	// Property chunkMode: Chunk strategy.
	//
	// If not specified, smart chunking is used. When set to regex, Separator must also be provided.
	ChunkMode interface{} `field:"optional" json:"chunkMode" yaml:"chunkMode"`
	// Property chunkSize: Chunk size, the maximum number of characters per text slice.
	//
	// Range [1-6000]. Defaults to 500. If ChunkSize is less than 100, OverlapSize must also be set.
	ChunkSize interface{} `field:"optional" json:"chunkSize" yaml:"chunkSize"`
	// Property connectId: Connection ID.
	//
	// Replaces the deprecated datasourceCode parameter.
	ConnectId interface{} `field:"optional" json:"connectId" yaml:"connectId"`
	// Property database: Database name for structured knowledge base.
	Database interface{} `field:"optional" json:"database" yaml:"database"`
	// Property denseSimilarityTopK: Vector retrieval Top K.
	//
	// Retrieves the K most similar text slices by vector similarity. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
	DenseSimilarityTopK interface{} `field:"optional" json:"denseSimilarityTopK" yaml:"denseSimilarityTopK"`
	// Property description: Knowledge base description.
	//
	// 0-1000 characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property documentIds: Document IDs to import when creating the knowledge base.
	//
	// Required when SourceType is DATA_CENTER_FILE.
	DocumentIds interface{} `field:"optional" json:"documentIds" yaml:"documentIds"`
	// Property embeddingModelName: Embedding model used by the knowledge base.
	//
	// Defaults to text-embedding-v3.
	EmbeddingModelName interface{} `field:"optional" json:"embeddingModelName" yaml:"embeddingModelName"`
	// Property enableHeaders: Whether to enable headers for document parsing.
	//
	// Defaults to false.
	EnableHeaders interface{} `field:"optional" json:"enableHeaders" yaml:"enableHeaders"`
	// Property enableRewrite: Whether to enable multi-turn dialogue rewriting.
	//
	// Defaults to true.
	EnableRewrite interface{} `field:"optional" json:"enableRewrite" yaml:"enableRewrite"`
	// Property knowledgeScene: Knowledge base scene.
	//
	// Must be provided together with KnowledgeType. The valid values depend on KnowledgeType.
	KnowledgeScene interface{} `field:"optional" json:"knowledgeScene" yaml:"knowledgeScene"`
	// Property knowledgeType: Knowledge base type classification.
	//
	// Must be provided together with KnowledgeScene. If both are omitted, the system uses default based on StructureType.
	KnowledgeType interface{} `field:"optional" json:"knowledgeType" yaml:"knowledgeType"`
	// Property metaExtractColumns: Metadata extraction configuration.
	MetaExtractColumns interface{} `field:"optional" json:"metaExtractColumns" yaml:"metaExtractColumns"`
	// Property overlapSize: Overlap size, the number of overlapping characters between adjacent text slices.
	//
	// Range [0-1024]. Defaults to 100. Must be less than ChunkSize.
	OverlapSize interface{} `field:"optional" json:"overlapSize" yaml:"overlapSize"`
	// Property pipelineCommercialCu: RCU count for enterprise edition.
	//
	// Only required when PipelineCommercialType is enterprise. Range [1-200].
	PipelineCommercialCu interface{} `field:"optional" json:"pipelineCommercialCu" yaml:"pipelineCommercialCu"`
	// Property pipelineCommercialType: Knowledge base specification type.
	//
	// standard: Standard edition. enterprise: Enterprise edition. Defaults to standard.
	PipelineCommercialType interface{} `field:"optional" json:"pipelineCommercialType" yaml:"pipelineCommercialType"`
	// Property pipelineRetrieveRateLimitStrategy: Retrieval rate limit strategy for enterprise edition.
	//
	// Defaults to downgrade.
	PipelineRetrieveRateLimitStrategy interface{} `field:"optional" json:"pipelineRetrieveRateLimitStrategy" yaml:"pipelineRetrieveRateLimitStrategy"`
	// Property rerankInstruct: Custom rerank instruction.
	//
	// Required when RerankMode is custom.
	RerankInstruct interface{} `field:"optional" json:"rerankInstruct" yaml:"rerankInstruct"`
	// Property rerankMinScore: Similarity threshold.
	//
	// Only text slices with similarity score exceeding this value will be recalled. Range [0.01-1.00]. Defaults to 0.01.
	RerankMinScore interface{} `field:"optional" json:"rerankMinScore" yaml:"rerankMinScore"`
	// Property rerankMode: Rerank mode.
	//
	// qa: Q&A scenario (default). similar: similarity scenario. custom: custom rerank instruction, requires RerankInstruct.
	RerankMode interface{} `field:"optional" json:"rerankMode" yaml:"rerankMode"`
	// Property rerankModelName: Rerank model used by the knowledge base.
	//
	// Defaults to qwen3-rerank when not specified.
	RerankModelName interface{} `field:"optional" json:"rerankModelName" yaml:"rerankModelName"`
	// Property separator: Separator for chunking.
	//
	// Only effective when ChunkMode is regex.
	Separator interface{} `field:"optional" json:"separator" yaml:"separator"`
	// Property sinkInstanceId: Vector storage instance ID.
	//
	// Required when SinkType is ADB.
	SinkInstanceId interface{} `field:"optional" json:"sinkInstanceId" yaml:"sinkInstanceId"`
	// Property sinkRegion: Region of the vector storage instance.
	//
	// Required when SinkType is ADB.
	SinkRegion interface{} `field:"optional" json:"sinkRegion" yaml:"sinkRegion"`
	// Property sinkType: Vector storage type.
	//
	// BUILT_IN: managed by Bailian platform. ADB: AnalyticDB for PostgreSQL. Defaults to BUILT_IN. When set to ADB, SinkInstanceId and SinkRegion are required.
	SinkType interface{} `field:"optional" json:"sinkType" yaml:"sinkType"`
	// Property sparseSimilarityTopK: Keyword retrieval Top K.
	//
	// Retrieves text slices by exact keyword matching. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
	SparseSimilarityTopK interface{} `field:"optional" json:"sparseSimilarityTopK" yaml:"sparseSimilarityTopK"`
	// Property table: Table name for structured knowledge base.
	Table interface{} `field:"optional" json:"table" yaml:"table"`
	// Property tableIds: Table IDs to import when creating the knowledge base.
	TableIds interface{} `field:"optional" json:"tableIds" yaml:"tableIds"`
}

