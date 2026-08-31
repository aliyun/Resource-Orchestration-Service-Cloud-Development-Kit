package alicloudroscdkbailian


// Properties for defining a `RosIndex`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-index
type RosIndexProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	SourceType interface{} `field:"required" json:"sourceType" yaml:"sourceType"`
	StructureType interface{} `field:"required" json:"structureType" yaml:"structureType"`
	WorkspaceId interface{} `field:"required" json:"workspaceId" yaml:"workspaceId"`
	CategoryIds interface{} `field:"optional" json:"categoryIds" yaml:"categoryIds"`
	ChunkMode interface{} `field:"optional" json:"chunkMode" yaml:"chunkMode"`
	ChunkSize interface{} `field:"optional" json:"chunkSize" yaml:"chunkSize"`
	ConnectId interface{} `field:"optional" json:"connectId" yaml:"connectId"`
	Database interface{} `field:"optional" json:"database" yaml:"database"`
	DenseSimilarityTopK interface{} `field:"optional" json:"denseSimilarityTopK" yaml:"denseSimilarityTopK"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DocumentIds interface{} `field:"optional" json:"documentIds" yaml:"documentIds"`
	EmbeddingModelName interface{} `field:"optional" json:"embeddingModelName" yaml:"embeddingModelName"`
	EnableHeaders interface{} `field:"optional" json:"enableHeaders" yaml:"enableHeaders"`
	EnableRewrite interface{} `field:"optional" json:"enableRewrite" yaml:"enableRewrite"`
	KnowledgeScene interface{} `field:"optional" json:"knowledgeScene" yaml:"knowledgeScene"`
	KnowledgeType interface{} `field:"optional" json:"knowledgeType" yaml:"knowledgeType"`
	MetaExtractColumns interface{} `field:"optional" json:"metaExtractColumns" yaml:"metaExtractColumns"`
	OverlapSize interface{} `field:"optional" json:"overlapSize" yaml:"overlapSize"`
	PipelineCommercialCu interface{} `field:"optional" json:"pipelineCommercialCu" yaml:"pipelineCommercialCu"`
	PipelineCommercialType interface{} `field:"optional" json:"pipelineCommercialType" yaml:"pipelineCommercialType"`
	PipelineRetrieveRateLimitStrategy interface{} `field:"optional" json:"pipelineRetrieveRateLimitStrategy" yaml:"pipelineRetrieveRateLimitStrategy"`
	RerankInstruct interface{} `field:"optional" json:"rerankInstruct" yaml:"rerankInstruct"`
	RerankMinScore interface{} `field:"optional" json:"rerankMinScore" yaml:"rerankMinScore"`
	RerankMode interface{} `field:"optional" json:"rerankMode" yaml:"rerankMode"`
	RerankModelName interface{} `field:"optional" json:"rerankModelName" yaml:"rerankModelName"`
	Separator interface{} `field:"optional" json:"separator" yaml:"separator"`
	SinkInstanceId interface{} `field:"optional" json:"sinkInstanceId" yaml:"sinkInstanceId"`
	SinkRegion interface{} `field:"optional" json:"sinkRegion" yaml:"sinkRegion"`
	SinkType interface{} `field:"optional" json:"sinkType" yaml:"sinkType"`
	SparseSimilarityTopK interface{} `field:"optional" json:"sparseSimilarityTopK" yaml:"sparseSimilarityTopK"`
	Table interface{} `field:"optional" json:"table" yaml:"table"`
	TableIds interface{} `field:"optional" json:"tableIds" yaml:"tableIds"`
}

