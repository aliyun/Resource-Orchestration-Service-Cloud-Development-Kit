import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosApiKey`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
 */
export interface RosApiKeyProps {
    /**
     * @Property authSetModel: The model of the authentication.
     */
    readonly authSetModel?: RosApiKey.AuthSetModelProperty | ros.IResolvable;
    /**
     * @Property description: The description of the API key.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Bailian::ApiKey`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApiKey` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
 */
export declare class RosApiKey extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Bailian::ApiKey";
    /**
     * @Attribute ApiKeyId: The id of the API key.
     */
    readonly attrApiKeyId: ros.IResolvable;
    /**
     * @Attribute Key: The value of the API key.
     */
    readonly attrKey: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property authSetModel: The model of the authentication.
     */
    authSetModel: RosApiKey.AuthSetModelProperty | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the API key.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApiKeyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosApiKey {
    /**
     * @stability external
     */
    interface AuthSetModelProperty {
        /**
         * @Property accessIps: The IP addresses of the access.
         */
        readonly accessIps?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property authSetMode: The mode of the authentication.
         */
        readonly authSetMode?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosIndex`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-index
 */
export interface RosIndexProps {
    /**
     * @Property name: Knowledge base name. 1-20 characters. Supports Chinese, English, numbers, underscores (_), hyphens (-), periods (.) and colons (:).
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property sourceType: Data source type. DATA_CENTER_CATEGORY: import files from specified categories. DATA_CENTER_FILE: import specified files.
     */
    readonly sourceType: string | ros.IResolvable;
    /**
     * @Property structureType: Knowledge base type. unstructured: document search or audio\/video knowledge base. structured: data query or image Q&A knowledge base.
     */
    readonly structureType: string | ros.IResolvable;
    /**
     * @Property workspaceId: Workspace ID. The knowledge base will be created in this workspace.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * @Property categoryIds: Category IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_CATEGORY.
     */
    readonly categoryIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property chunkMode: Chunk strategy. If not specified, smart chunking is used. When set to regex, Separator must also be provided.
     */
    readonly chunkMode?: string | ros.IResolvable;
    /**
     * @Property chunkSize: Chunk size, the maximum number of characters per text slice. Range [1-6000]. Defaults to 500. If ChunkSize is less than 100, OverlapSize must also be set.
     */
    readonly chunkSize?: number | ros.IResolvable;
    /**
     * @Property connectId: Connection ID. Replaces the deprecated datasourceCode parameter.
     */
    readonly connectId?: string | ros.IResolvable;
    /**
     * @Property database: Database name for structured knowledge base.
     */
    readonly database?: string | ros.IResolvable;
    /**
     * @Property denseSimilarityTopK: Vector retrieval Top K. Retrieves the K most similar text slices by vector similarity. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
     */
    readonly denseSimilarityTopK?: number | ros.IResolvable;
    /**
     * @Property description: Knowledge base description. 0-1000 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property documentIds: Document IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_FILE.
     */
    readonly documentIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property embeddingModelName: Embedding model used by the knowledge base. Defaults to text-embedding-v3.
     */
    readonly embeddingModelName?: string | ros.IResolvable;
    /**
     * @Property enableHeaders: Whether to enable headers for document parsing. Defaults to false.
     */
    readonly enableHeaders?: boolean | ros.IResolvable;
    /**
     * @Property enableRewrite: Whether to enable multi-turn dialogue rewriting. Defaults to true.
     */
    readonly enableRewrite?: boolean | ros.IResolvable;
    /**
     * @Property knowledgeScene: Knowledge base scene. Must be provided together with KnowledgeType. The valid values depend on KnowledgeType.
     */
    readonly knowledgeScene?: string | ros.IResolvable;
    /**
     * @Property knowledgeType: Knowledge base type classification. Must be provided together with KnowledgeScene. If both are omitted, the system uses default based on StructureType.
     */
    readonly knowledgeType?: string | ros.IResolvable;
    /**
     * @Property metaExtractColumns: Metadata extraction configuration.
     */
    readonly metaExtractColumns?: Array<RosIndex.MetaExtractColumnsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property overlapSize: Overlap size, the number of overlapping characters between adjacent text slices. Range [0-1024]. Defaults to 100. Must be less than ChunkSize.
     */
    readonly overlapSize?: number | ros.IResolvable;
    /**
     * @Property pipelineCommercialCu: RCU count for enterprise edition. Only required when PipelineCommercialType is enterprise. Range [1-200].
     */
    readonly pipelineCommercialCu?: number | ros.IResolvable;
    /**
     * @Property pipelineCommercialType: Knowledge base specification type. standard: Standard edition. enterprise: Enterprise edition. Defaults to standard.
     */
    readonly pipelineCommercialType?: string | ros.IResolvable;
    /**
     * @Property pipelineRetrieveRateLimitStrategy: Retrieval rate limit strategy for enterprise edition. Defaults to downgrade.
     */
    readonly pipelineRetrieveRateLimitStrategy?: string | ros.IResolvable;
    /**
     * @Property rerankInstruct: Custom rerank instruction. Required when RerankMode is custom.
     */
    readonly rerankInstruct?: string | ros.IResolvable;
    /**
     * @Property rerankMinScore: Similarity threshold. Only text slices with similarity score exceeding this value will be recalled. Range [0.01-1.00]. Defaults to 0.01.
     */
    readonly rerankMinScore?: number | ros.IResolvable;
    /**
     * @Property rerankMode: Rerank mode. qa: Q&A scenario (default). similar: similarity scenario. custom: custom rerank instruction, requires RerankInstruct.
     */
    readonly rerankMode?: string | ros.IResolvable;
    /**
     * @Property rerankModelName: Rerank model used by the knowledge base. Defaults to qwen3-rerank when not specified.
     */
    readonly rerankModelName?: string | ros.IResolvable;
    /**
     * @Property separator: Separator for chunking. Only effective when ChunkMode is regex.
     */
    readonly separator?: string | ros.IResolvable;
    /**
     * @Property sinkInstanceId: Vector storage instance ID. Required when SinkType is ADB.
     */
    readonly sinkInstanceId?: string | ros.IResolvable;
    /**
     * @Property sinkRegion: Region of the vector storage instance. Required when SinkType is ADB.
     */
    readonly sinkRegion?: string | ros.IResolvable;
    /**
     * @Property sinkType: Vector storage type. BUILT_IN: managed by Bailian platform. ADB: AnalyticDB for PostgreSQL. Defaults to BUILT_IN. When set to ADB, SinkInstanceId and SinkRegion are required.
     */
    readonly sinkType?: string | ros.IResolvable;
    /**
     * @Property sparseSimilarityTopK: Keyword retrieval Top K. Retrieves text slices by exact keyword matching. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
     */
    readonly sparseSimilarityTopK?: number | ros.IResolvable;
    /**
     * @Property table: Table name for structured knowledge base.
     */
    readonly table?: string | ros.IResolvable;
    /**
     * @Property tableIds: Table IDs to import when creating the knowledge base.
     */
    readonly tableIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Bailian::Index`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Index` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-index
 */
export declare class RosIndex extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Bailian::Index";
    /**
     * @Attribute Id: The unique ID of the knowledge base index.
     */
    readonly attrId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: Knowledge base name. 1-20 characters. Supports Chinese, English, numbers, underscores (_), hyphens (-), periods (.) and colons (:).
     */
    name: string | ros.IResolvable;
    /**
     * @Property sourceType: Data source type. DATA_CENTER_CATEGORY: import files from specified categories. DATA_CENTER_FILE: import specified files.
     */
    sourceType: string | ros.IResolvable;
    /**
     * @Property structureType: Knowledge base type. unstructured: document search or audio\/video knowledge base. structured: data query or image Q&A knowledge base.
     */
    structureType: string | ros.IResolvable;
    /**
     * @Property workspaceId: Workspace ID. The knowledge base will be created in this workspace.
     */
    workspaceId: string | ros.IResolvable;
    /**
     * @Property categoryIds: Category IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_CATEGORY.
     */
    categoryIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property chunkMode: Chunk strategy. If not specified, smart chunking is used. When set to regex, Separator must also be provided.
     */
    chunkMode: string | ros.IResolvable | undefined;
    /**
     * @Property chunkSize: Chunk size, the maximum number of characters per text slice. Range [1-6000]. Defaults to 500. If ChunkSize is less than 100, OverlapSize must also be set.
     */
    chunkSize: number | ros.IResolvable | undefined;
    /**
     * @Property connectId: Connection ID. Replaces the deprecated datasourceCode parameter.
     */
    connectId: string | ros.IResolvable | undefined;
    /**
     * @Property database: Database name for structured knowledge base.
     */
    database: string | ros.IResolvable | undefined;
    /**
     * @Property denseSimilarityTopK: Vector retrieval Top K. Retrieves the K most similar text slices by vector similarity. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
     */
    denseSimilarityTopK: number | ros.IResolvable | undefined;
    /**
     * @Property description: Knowledge base description. 0-1000 characters.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property documentIds: Document IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_FILE.
     */
    documentIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property embeddingModelName: Embedding model used by the knowledge base. Defaults to text-embedding-v3.
     */
    embeddingModelName: string | ros.IResolvable | undefined;
    /**
     * @Property enableHeaders: Whether to enable headers for document parsing. Defaults to false.
     */
    enableHeaders: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableRewrite: Whether to enable multi-turn dialogue rewriting. Defaults to true.
     */
    enableRewrite: boolean | ros.IResolvable | undefined;
    /**
     * @Property knowledgeScene: Knowledge base scene. Must be provided together with KnowledgeType. The valid values depend on KnowledgeType.
     */
    knowledgeScene: string | ros.IResolvable | undefined;
    /**
     * @Property knowledgeType: Knowledge base type classification. Must be provided together with KnowledgeScene. If both are omitted, the system uses default based on StructureType.
     */
    knowledgeType: string | ros.IResolvable | undefined;
    /**
     * @Property metaExtractColumns: Metadata extraction configuration.
     */
    metaExtractColumns: Array<RosIndex.MetaExtractColumnsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property overlapSize: Overlap size, the number of overlapping characters between adjacent text slices. Range [0-1024]. Defaults to 100. Must be less than ChunkSize.
     */
    overlapSize: number | ros.IResolvable | undefined;
    /**
     * @Property pipelineCommercialCu: RCU count for enterprise edition. Only required when PipelineCommercialType is enterprise. Range [1-200].
     */
    pipelineCommercialCu: number | ros.IResolvable | undefined;
    /**
     * @Property pipelineCommercialType: Knowledge base specification type. standard: Standard edition. enterprise: Enterprise edition. Defaults to standard.
     */
    pipelineCommercialType: string | ros.IResolvable | undefined;
    /**
     * @Property pipelineRetrieveRateLimitStrategy: Retrieval rate limit strategy for enterprise edition. Defaults to downgrade.
     */
    pipelineRetrieveRateLimitStrategy: string | ros.IResolvable | undefined;
    /**
     * @Property rerankInstruct: Custom rerank instruction. Required when RerankMode is custom.
     */
    rerankInstruct: string | ros.IResolvable | undefined;
    /**
     * @Property rerankMinScore: Similarity threshold. Only text slices with similarity score exceeding this value will be recalled. Range [0.01-1.00]. Defaults to 0.01.
     */
    rerankMinScore: number | ros.IResolvable | undefined;
    /**
     * @Property rerankMode: Rerank mode. qa: Q&A scenario (default). similar: similarity scenario. custom: custom rerank instruction, requires RerankInstruct.
     */
    rerankMode: string | ros.IResolvable | undefined;
    /**
     * @Property rerankModelName: Rerank model used by the knowledge base. Defaults to qwen3-rerank when not specified.
     */
    rerankModelName: string | ros.IResolvable | undefined;
    /**
     * @Property separator: Separator for chunking. Only effective when ChunkMode is regex.
     */
    separator: string | ros.IResolvable | undefined;
    /**
     * @Property sinkInstanceId: Vector storage instance ID. Required when SinkType is ADB.
     */
    sinkInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property sinkRegion: Region of the vector storage instance. Required when SinkType is ADB.
     */
    sinkRegion: string | ros.IResolvable | undefined;
    /**
     * @Property sinkType: Vector storage type. BUILT_IN: managed by Bailian platform. ADB: AnalyticDB for PostgreSQL. Defaults to BUILT_IN. When set to ADB, SinkInstanceId and SinkRegion are required.
     */
    sinkType: string | ros.IResolvable | undefined;
    /**
     * @Property sparseSimilarityTopK: Keyword retrieval Top K. Retrieves text slices by exact keyword matching. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
     */
    sparseSimilarityTopK: number | ros.IResolvable | undefined;
    /**
     * @Property table: Table name for structured knowledge base.
     */
    table: string | ros.IResolvable | undefined;
    /**
     * @Property tableIds: Table IDs to import when creating the knowledge base.
     */
    tableIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIndexProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosIndex {
    /**
     * @stability external
     */
    interface MetaExtractColumnsProperty {
        /**
         * @Property desc: Metadata field description. 0-1000 characters.
         */
        readonly desc?: string | ros.IResolvable;
        /**
         * @Property enableLlm: Whether this metadata field participates in model reply generation.
         */
        readonly enableLlm?: boolean | ros.IResolvable;
        /**
         * @Property type: Metadata field extraction method.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property value: Metadata field value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property enableSearch: Whether this metadata field participates in knowledge base retrieval.
         */
        readonly enableSearch?: boolean | ros.IResolvable;
        /**
         * @Property key: Metadata field name. 1-50 characters, must be English or underscore.
         */
        readonly key: string | ros.IResolvable;
    }
}
