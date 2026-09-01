import * as ros from '@alicloud/ros-cdk-core';
import { RosIndex } from './bailian.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosIndex as IndexProperty };

/**
 * Properties for defining a `Index`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-index
 */
export interface IndexProps {

    /**
     * Property name: Knowledge base name. 1-20 characters. Supports Chinese, English, numbers, underscores (_), hyphens (-), periods (.) and colons (:).
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property sourceType: Data source type. DATA_CENTER_CATEGORY: import files from specified categories. DATA_CENTER_FILE: import specified files.
     */
    readonly sourceType: string | ros.IResolvable;

    /**
     * Property structureType: Knowledge base type. unstructured: document search or audio\/video knowledge base. structured: data query or image Q&A knowledge base.
     */
    readonly structureType: string | ros.IResolvable;

    /**
     * Property workspaceId: Workspace ID. The knowledge base will be created in this workspace.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * Property categoryIds: Category IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_CATEGORY.
     */
    readonly categoryIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property chunkMode: Chunk strategy. If not specified, smart chunking is used. When set to regex, Separator must also be provided.
     */
    readonly chunkMode?: string | ros.IResolvable;

    /**
     * Property chunkSize: Chunk size, the maximum number of characters per text slice. Range [1-6000]. Defaults to 500. If ChunkSize is less than 100, OverlapSize must also be set.
     */
    readonly chunkSize?: number | ros.IResolvable;

    /**
     * Property connectId: Connection ID. Replaces the deprecated datasourceCode parameter.
     */
    readonly connectId?: string | ros.IResolvable;

    /**
     * Property database: Database name for structured knowledge base.
     */
    readonly database?: string | ros.IResolvable;

    /**
     * Property denseSimilarityTopK: Vector retrieval Top K. Retrieves the K most similar text slices by vector similarity. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
     */
    readonly denseSimilarityTopK?: number | ros.IResolvable;

    /**
     * Property description: Knowledge base description. 0-1000 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property documentIds: Document IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_FILE.
     */
    readonly documentIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property embeddingModelName: Embedding model used by the knowledge base. Defaults to text-embedding-v3.
     */
    readonly embeddingModelName?: string | ros.IResolvable;

    /**
     * Property enableHeaders: Whether to enable headers for document parsing. Defaults to false.
     */
    readonly enableHeaders?: boolean | ros.IResolvable;

    /**
     * Property enableRewrite: Whether to enable multi-turn dialogue rewriting. Defaults to true.
     */
    readonly enableRewrite?: boolean | ros.IResolvable;

    /**
     * Property knowledgeScene: Knowledge base scene. Must be provided together with KnowledgeType. The valid values depend on KnowledgeType.
     */
    readonly knowledgeScene?: string | ros.IResolvable;

    /**
     * Property knowledgeType: Knowledge base type classification. Must be provided together with KnowledgeScene. If both are omitted, the system uses default based on StructureType.
     */
    readonly knowledgeType?: string | ros.IResolvable;

    /**
     * Property metaExtractColumns: Metadata extraction configuration.
     */
    readonly metaExtractColumns?: Array<RosIndex.MetaExtractColumnsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property overlapSize: Overlap size, the number of overlapping characters between adjacent text slices. Range [0-1024]. Defaults to 100. Must be less than ChunkSize.
     */
    readonly overlapSize?: number | ros.IResolvable;

    /**
     * Property pipelineCommercialCu: RCU count for enterprise edition. Only required when PipelineCommercialType is enterprise. Range [1-200].
     */
    readonly pipelineCommercialCu?: number | ros.IResolvable;

    /**
     * Property pipelineCommercialType: Knowledge base specification type. standard: Standard edition. enterprise: Enterprise edition. Defaults to standard.
     */
    readonly pipelineCommercialType?: string | ros.IResolvable;

    /**
     * Property pipelineRetrieveRateLimitStrategy: Retrieval rate limit strategy for enterprise edition. Defaults to downgrade.
     */
    readonly pipelineRetrieveRateLimitStrategy?: string | ros.IResolvable;

    /**
     * Property rerankInstruct: Custom rerank instruction. Required when RerankMode is custom.
     */
    readonly rerankInstruct?: string | ros.IResolvable;

    /**
     * Property rerankMinScore: Similarity threshold. Only text slices with similarity score exceeding this value will be recalled. Range [0.01-1.00]. Defaults to 0.01.
     */
    readonly rerankMinScore?: number | ros.IResolvable;

    /**
     * Property rerankMode: Rerank mode. qa: Q&A scenario (default). similar: similarity scenario. custom: custom rerank instruction, requires RerankInstruct.
     */
    readonly rerankMode?: string | ros.IResolvable;

    /**
     * Property rerankModelName: Rerank model used by the knowledge base. Defaults to qwen3-rerank when not specified.
     */
    readonly rerankModelName?: string | ros.IResolvable;

    /**
     * Property separator: Separator for chunking. Only effective when ChunkMode is regex.
     */
    readonly separator?: string | ros.IResolvable;

    /**
     * Property sinkInstanceId: Vector storage instance ID. Required when SinkType is ADB.
     */
    readonly sinkInstanceId?: string | ros.IResolvable;

    /**
     * Property sinkRegion: Region of the vector storage instance. Required when SinkType is ADB.
     */
    readonly sinkRegion?: string | ros.IResolvable;

    /**
     * Property sinkType: Vector storage type. BUILT_IN: managed by Bailian platform. ADB: AnalyticDB for PostgreSQL. Defaults to BUILT_IN. When set to ADB, SinkInstanceId and SinkRegion are required.
     */
    readonly sinkType?: string | ros.IResolvable;

    /**
     * Property sparseSimilarityTopK: Keyword retrieval Top K. Retrieves text slices by exact keyword matching. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
     */
    readonly sparseSimilarityTopK?: number | ros.IResolvable;

    /**
     * Property table: Table name for structured knowledge base.
     */
    readonly table?: string | ros.IResolvable;

    /**
     * Property tableIds: Table IDs to import when creating the knowledge base.
     */
    readonly tableIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `Index`.
 */
export interface IIndex extends ros.IResource {
    readonly props: IndexProps;

    /**
     * Attribute Id: The unique ID of the knowledge base index.
     */
    readonly attrId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Bailian::Index`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIndex`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-index
 */
export class Index extends ros.Resource implements IIndex {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: IndexProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Id: The unique ID of the knowledge base index.
     */
    public readonly attrId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: IndexProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosIndex = new RosIndex(this, id,  {
            description: props.description,
            rerankMode: props.rerankMode === undefined || props.rerankMode === null ? 'qa' : props.rerankMode,
            sinkInstanceId: props.sinkInstanceId,
            sourceType: props.sourceType,
            knowledgeScene: props.knowledgeScene,
            sparseSimilarityTopK: props.sparseSimilarityTopK === undefined || props.sparseSimilarityTopK === null ? 100 : props.sparseSimilarityTopK,
            workspaceId: props.workspaceId,
            chunkMode: props.chunkMode,
            sinkRegion: props.sinkRegion,
            name: props.name,
            tableIds: props.tableIds,
            enableRewrite: props.enableRewrite === undefined || props.enableRewrite === null ? true : props.enableRewrite,
            pipelineRetrieveRateLimitStrategy: props.pipelineRetrieveRateLimitStrategy === undefined || props.pipelineRetrieveRateLimitStrategy === null ? 'downgrade' : props.pipelineRetrieveRateLimitStrategy,
            database: props.database,
            pipelineCommercialCu: props.pipelineCommercialCu,
            knowledgeType: props.knowledgeType,
            documentIds: props.documentIds,
            overlapSize: props.overlapSize === undefined || props.overlapSize === null ? 100 : props.overlapSize,
            table: props.table,
            enableHeaders: props.enableHeaders === undefined || props.enableHeaders === null ? false : props.enableHeaders,
            denseSimilarityTopK: props.denseSimilarityTopK === undefined || props.denseSimilarityTopK === null ? 100 : props.denseSimilarityTopK,
            categoryIds: props.categoryIds,
            connectId: props.connectId,
            rerankModelName: props.rerankModelName,
            metaExtractColumns: props.metaExtractColumns,
            pipelineCommercialType: props.pipelineCommercialType === undefined || props.pipelineCommercialType === null ? 'standard' : props.pipelineCommercialType,
            chunkSize: props.chunkSize === undefined || props.chunkSize === null ? 500 : props.chunkSize,
            structureType: props.structureType,
            rerankInstruct: props.rerankInstruct,
            embeddingModelName: props.embeddingModelName === undefined || props.embeddingModelName === null ? 'text-embedding-v3' : props.embeddingModelName,
            rerankMinScore: props.rerankMinScore === undefined || props.rerankMinScore === null ? 0.01 : props.rerankMinScore,
            sinkType: props.sinkType === undefined || props.sinkType === null ? 'BUILT_IN' : props.sinkType,
            separator: props.separator,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIndex;
        this.attrId = rosIndex.attrId;
    }
}
