// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosApiKeyProps`
 *
 * @param properties - the TypeScript properties of a `RosApiKeyProps`
 *
 * @returns the result of the validation.
 */
function RosApiKeyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('authSetModel', RosApiKey_AuthSetModelPropertyValidator)(properties.authSetModel));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    return errors.wrap('supplied properties not correct for "RosApiKeyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Bailian::ApiKey` resource
 *
 * @param properties - the TypeScript properties of a `RosApiKeyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Bailian::ApiKey` resource.
 */
// @ts-ignore TS6133
function rosApiKeyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApiKeyPropsValidator(properties).assertSuccess();
    }
    return {
      'AuthSetModel': rosApiKeyAuthSetModelPropertyToRosTemplate(properties.authSetModel),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Bailian::ApiKey`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ApiKey` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-apikey
 */
export class RosApiKey extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Bailian::ApiKey";

    /**
     * @Attribute ApiKeyId: The id of the API key.
     */
    public readonly attrApiKeyId: ros.IResolvable;

    /**
     * @Attribute Key: The value of the API key.
     */
    public readonly attrKey: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property authSetModel: The model of the authentication.
     */
    public authSetModel: RosApiKey.AuthSetModelProperty | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the API key.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApiKeyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApiKey.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApiKeyId = this.getAtt('ApiKeyId');
        this.attrKey = this.getAtt('Key');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.authSetModel = props.authSetModel;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            authSetModel: this.authSetModel,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApiKeyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosApiKey {
    /**
     * @stability external
     */
    export interface AuthSetModelProperty {
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
 * Determine whether the given properties match those of a `AuthSetModelProperty`
 *
 * @param properties - the TypeScript properties of a `AuthSetModelProperty`
 *
 * @returns the result of the validation.
 */
function RosApiKey_AuthSetModelPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accessIps', ros.listValidator(ros.validateString))(properties.accessIps));
    if(properties.authSetMode && (typeof properties.authSetMode) !== 'object') {
        errors.collect(ros.propertyValidator('authSetMode', ros.validateAllowedValues)({
          data: properties.authSetMode,
          allowedValues: ["Custom","All"],
        }));
    }
    errors.collect(ros.propertyValidator('authSetMode', ros.validateString)(properties.authSetMode));
    return errors.wrap('supplied properties not correct for "AuthSetModelProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Bailian::ApiKey.AuthSetModel` resource
 *
 * @param properties - the TypeScript properties of a `AuthSetModelProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Bailian::ApiKey.AuthSetModel` resource.
 */
// @ts-ignore TS6133
function rosApiKeyAuthSetModelPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosApiKey_AuthSetModelPropertyValidator(properties).assertSuccess();
    return {
      'AccessIps': ros.listMapper(ros.stringToRosTemplate)(properties.accessIps),
      'AuthSetMode': ros.stringToRosTemplate(properties.authSetMode),
    };
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
 * Determine whether the given properties match those of a `RosIndexProps`
 *
 * @param properties - the TypeScript properties of a `RosIndexProps`
 *
 * @returns the result of the validation.
 */
function RosIndexPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.rerankMode && (typeof properties.rerankMode) !== 'object') {
        errors.collect(ros.propertyValidator('rerankMode', ros.validateAllowedValues)({
          data: properties.rerankMode,
          allowedValues: ["qa","similar","custom"],
        }));
    }
    errors.collect(ros.propertyValidator('rerankMode', ros.validateString)(properties.rerankMode));
    errors.collect(ros.propertyValidator('sinkInstanceId', ros.validateString)(properties.sinkInstanceId));
    errors.collect(ros.propertyValidator('sourceType', ros.requiredValidator)(properties.sourceType));
    if(properties.sourceType && (typeof properties.sourceType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceType', ros.validateAllowedValues)({
          data: properties.sourceType,
          allowedValues: ["DATA_CENTER_CATEGORY","DATA_CENTER_FILE"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    if(properties.knowledgeScene && (typeof properties.knowledgeScene) !== 'object') {
        errors.collect(ros.propertyValidator('knowledgeScene', ros.validateAllowedValues)({
          data: properties.knowledgeScene,
          allowedValues: ["basic_document_qa","visual_document_qa","lite_document_qa","visual_perception_qa","basic_table_qa","image_qa","basic_multimedia_qa"],
        }));
    }
    errors.collect(ros.propertyValidator('knowledgeScene', ros.validateString)(properties.knowledgeScene));
    if(properties.sparseSimilarityTopK && (typeof properties.sparseSimilarityTopK) !== 'object') {
        errors.collect(ros.propertyValidator('sparseSimilarityTopK', ros.validateRange)({
            data: properties.sparseSimilarityTopK,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('sparseSimilarityTopK', ros.validateNumber)(properties.sparseSimilarityTopK));
    errors.collect(ros.propertyValidator('workspaceId', ros.requiredValidator)(properties.workspaceId));
    errors.collect(ros.propertyValidator('workspaceId', ros.validateString)(properties.workspaceId));
    if(properties.chunkMode && (typeof properties.chunkMode) !== 'object') {
        errors.collect(ros.propertyValidator('chunkMode', ros.validateAllowedValues)({
          data: properties.chunkMode,
          allowedValues: ["regex","length","h1","h2","page"],
        }));
    }
    errors.collect(ros.propertyValidator('chunkMode', ros.validateString)(properties.chunkMode));
    errors.collect(ros.propertyValidator('sinkRegion', ros.validateString)(properties.sinkRegion));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if(properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('tableIds', ros.listValidator(ros.validateString))(properties.tableIds));
    errors.collect(ros.propertyValidator('enableRewrite', ros.validateBoolean)(properties.enableRewrite));
    if(properties.pipelineRetrieveRateLimitStrategy && (typeof properties.pipelineRetrieveRateLimitStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('pipelineRetrieveRateLimitStrategy', ros.validateAllowedValues)({
          data: properties.pipelineRetrieveRateLimitStrategy,
          allowedValues: ["downgrade"],
        }));
    }
    errors.collect(ros.propertyValidator('pipelineRetrieveRateLimitStrategy', ros.validateString)(properties.pipelineRetrieveRateLimitStrategy));
    errors.collect(ros.propertyValidator('database', ros.validateString)(properties.database));
    if(properties.pipelineCommercialCu && (typeof properties.pipelineCommercialCu) !== 'object') {
        errors.collect(ros.propertyValidator('pipelineCommercialCu', ros.validateRange)({
            data: properties.pipelineCommercialCu,
            min: 1,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('pipelineCommercialCu', ros.validateNumber)(properties.pipelineCommercialCu));
    if(properties.knowledgeType && (typeof properties.knowledgeType) !== 'object') {
        errors.collect(ros.propertyValidator('knowledgeType', ros.validateAllowedValues)({
          data: properties.knowledgeType,
          allowedValues: ["document","table","image","multimedia"],
        }));
    }
    errors.collect(ros.propertyValidator('knowledgeType', ros.validateString)(properties.knowledgeType));
    errors.collect(ros.propertyValidator('documentIds', ros.listValidator(ros.validateString))(properties.documentIds));
    if(properties.overlapSize && (typeof properties.overlapSize) !== 'object') {
        errors.collect(ros.propertyValidator('overlapSize', ros.validateRange)({
            data: properties.overlapSize,
            min: 0,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('overlapSize', ros.validateNumber)(properties.overlapSize));
    errors.collect(ros.propertyValidator('table', ros.validateString)(properties.table));
    errors.collect(ros.propertyValidator('enableHeaders', ros.validateBoolean)(properties.enableHeaders));
    if(properties.denseSimilarityTopK && (typeof properties.denseSimilarityTopK) !== 'object') {
        errors.collect(ros.propertyValidator('denseSimilarityTopK', ros.validateRange)({
            data: properties.denseSimilarityTopK,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('denseSimilarityTopK', ros.validateNumber)(properties.denseSimilarityTopK));
    errors.collect(ros.propertyValidator('categoryIds', ros.listValidator(ros.validateString))(properties.categoryIds));
    errors.collect(ros.propertyValidator('connectId', ros.validateString)(properties.connectId));
    if(properties.rerankModelName && (typeof properties.rerankModelName) !== 'object') {
        errors.collect(ros.propertyValidator('rerankModelName', ros.validateAllowedValues)({
          data: properties.rerankModelName,
          allowedValues: ["qwen3-rerank-hybrid","qwen3-rerank","gte-rerank-hybrid","gte-rerank"],
        }));
    }
    errors.collect(ros.propertyValidator('rerankModelName', ros.validateString)(properties.rerankModelName));
    errors.collect(ros.propertyValidator('metaExtractColumns', ros.listValidator(RosIndex_MetaExtractColumnsPropertyValidator))(properties.metaExtractColumns));
    if(properties.pipelineCommercialType && (typeof properties.pipelineCommercialType) !== 'object') {
        errors.collect(ros.propertyValidator('pipelineCommercialType', ros.validateAllowedValues)({
          data: properties.pipelineCommercialType,
          allowedValues: ["standard","enterprise"],
        }));
    }
    errors.collect(ros.propertyValidator('pipelineCommercialType', ros.validateString)(properties.pipelineCommercialType));
    if(properties.chunkSize && (typeof properties.chunkSize) !== 'object') {
        errors.collect(ros.propertyValidator('chunkSize', ros.validateRange)({
            data: properties.chunkSize,
            min: 1,
            max: 6000,
          }));
    }
    errors.collect(ros.propertyValidator('chunkSize', ros.validateNumber)(properties.chunkSize));
    errors.collect(ros.propertyValidator('structureType', ros.requiredValidator)(properties.structureType));
    if(properties.structureType && (typeof properties.structureType) !== 'object') {
        errors.collect(ros.propertyValidator('structureType', ros.validateAllowedValues)({
          data: properties.structureType,
          allowedValues: ["unstructured","structured"],
        }));
    }
    errors.collect(ros.propertyValidator('structureType', ros.validateString)(properties.structureType));
    errors.collect(ros.propertyValidator('rerankInstruct', ros.validateString)(properties.rerankInstruct));
    if(properties.embeddingModelName && (typeof properties.embeddingModelName) !== 'object') {
        errors.collect(ros.propertyValidator('embeddingModelName', ros.validateAllowedValues)({
          data: properties.embeddingModelName,
          allowedValues: ["text-embedding-v4","text-embedding-v3"],
        }));
    }
    errors.collect(ros.propertyValidator('embeddingModelName', ros.validateString)(properties.embeddingModelName));
    if(properties.rerankMinScore && (typeof properties.rerankMinScore) !== 'object') {
        errors.collect(ros.propertyValidator('rerankMinScore', ros.validateRange)({
            data: properties.rerankMinScore,
            min: 0.01,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('rerankMinScore', ros.validateNumber)(properties.rerankMinScore));
    if(properties.sinkType && (typeof properties.sinkType) !== 'object') {
        errors.collect(ros.propertyValidator('sinkType', ros.validateAllowedValues)({
          data: properties.sinkType,
          allowedValues: ["BUILT_IN","ADB"],
        }));
    }
    errors.collect(ros.propertyValidator('sinkType', ros.validateString)(properties.sinkType));
    errors.collect(ros.propertyValidator('separator', ros.validateString)(properties.separator));
    return errors.wrap('supplied properties not correct for "RosIndexProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Bailian::Index` resource
 *
 * @param properties - the TypeScript properties of a `RosIndexProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Bailian::Index` resource.
 */
// @ts-ignore TS6133
function rosIndexPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIndexPropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
      'StructureType': ros.stringToRosTemplate(properties.structureType),
      'WorkspaceId': ros.stringToRosTemplate(properties.workspaceId),
      'CategoryIds': ros.listMapper(ros.stringToRosTemplate)(properties.categoryIds),
      'ChunkMode': ros.stringToRosTemplate(properties.chunkMode),
      'ChunkSize': ros.numberToRosTemplate(properties.chunkSize),
      'ConnectId': ros.stringToRosTemplate(properties.connectId),
      'Database': ros.stringToRosTemplate(properties.database),
      'DenseSimilarityTopK': ros.numberToRosTemplate(properties.denseSimilarityTopK),
      'Description': ros.stringToRosTemplate(properties.description),
      'DocumentIds': ros.listMapper(ros.stringToRosTemplate)(properties.documentIds),
      'EmbeddingModelName': ros.stringToRosTemplate(properties.embeddingModelName),
      'EnableHeaders': ros.booleanToRosTemplate(properties.enableHeaders),
      'EnableRewrite': ros.booleanToRosTemplate(properties.enableRewrite),
      'KnowledgeScene': ros.stringToRosTemplate(properties.knowledgeScene),
      'KnowledgeType': ros.stringToRosTemplate(properties.knowledgeType),
      'MetaExtractColumns': ros.listMapper(rosIndexMetaExtractColumnsPropertyToRosTemplate)(properties.metaExtractColumns),
      'OverlapSize': ros.numberToRosTemplate(properties.overlapSize),
      'PipelineCommercialCu': ros.numberToRosTemplate(properties.pipelineCommercialCu),
      'PipelineCommercialType': ros.stringToRosTemplate(properties.pipelineCommercialType),
      'PipelineRetrieveRateLimitStrategy': ros.stringToRosTemplate(properties.pipelineRetrieveRateLimitStrategy),
      'RerankInstruct': ros.stringToRosTemplate(properties.rerankInstruct),
      'RerankMinScore': ros.numberToRosTemplate(properties.rerankMinScore),
      'RerankMode': ros.stringToRosTemplate(properties.rerankMode),
      'RerankModelName': ros.stringToRosTemplate(properties.rerankModelName),
      'Separator': ros.stringToRosTemplate(properties.separator),
      'SinkInstanceId': ros.stringToRosTemplate(properties.sinkInstanceId),
      'SinkRegion': ros.stringToRosTemplate(properties.sinkRegion),
      'SinkType': ros.stringToRosTemplate(properties.sinkType),
      'SparseSimilarityTopK': ros.numberToRosTemplate(properties.sparseSimilarityTopK),
      'Table': ros.stringToRosTemplate(properties.table),
      'TableIds': ros.listMapper(ros.stringToRosTemplate)(properties.tableIds),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Bailian::Index`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Index` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-index
 */
export class RosIndex extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Bailian::Index";

    /**
     * @Attribute Id: The unique ID of the knowledge base index.
     */
    public readonly attrId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: Knowledge base name. 1-20 characters. Supports Chinese, English, numbers, underscores (_), hyphens (-), periods (.) and colons (:).
     */
    public name: string | ros.IResolvable;

    /**
     * @Property sourceType: Data source type. DATA_CENTER_CATEGORY: import files from specified categories. DATA_CENTER_FILE: import specified files.
     */
    public sourceType: string | ros.IResolvable;

    /**
     * @Property structureType: Knowledge base type. unstructured: document search or audio\/video knowledge base. structured: data query or image Q&A knowledge base.
     */
    public structureType: string | ros.IResolvable;

    /**
     * @Property workspaceId: Workspace ID. The knowledge base will be created in this workspace.
     */
    public workspaceId: string | ros.IResolvable;

    /**
     * @Property categoryIds: Category IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_CATEGORY.
     */
    public categoryIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property chunkMode: Chunk strategy. If not specified, smart chunking is used. When set to regex, Separator must also be provided.
     */
    public chunkMode: string | ros.IResolvable | undefined;

    /**
     * @Property chunkSize: Chunk size, the maximum number of characters per text slice. Range [1-6000]. Defaults to 500. If ChunkSize is less than 100, OverlapSize must also be set.
     */
    public chunkSize: number | ros.IResolvable | undefined;

    /**
     * @Property connectId: Connection ID. Replaces the deprecated datasourceCode parameter.
     */
    public connectId: string | ros.IResolvable | undefined;

    /**
     * @Property database: Database name for structured knowledge base.
     */
    public database: string | ros.IResolvable | undefined;

    /**
     * @Property denseSimilarityTopK: Vector retrieval Top K. Retrieves the K most similar text slices by vector similarity. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
     */
    public denseSimilarityTopK: number | ros.IResolvable | undefined;

    /**
     * @Property description: Knowledge base description. 0-1000 characters.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property documentIds: Document IDs to import when creating the knowledge base. Required when SourceType is DATA_CENTER_FILE.
     */
    public documentIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property embeddingModelName: Embedding model used by the knowledge base. Defaults to text-embedding-v3.
     */
    public embeddingModelName: string | ros.IResolvable | undefined;

    /**
     * @Property enableHeaders: Whether to enable headers for document parsing. Defaults to false.
     */
    public enableHeaders: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableRewrite: Whether to enable multi-turn dialogue rewriting. Defaults to true.
     */
    public enableRewrite: boolean | ros.IResolvable | undefined;

    /**
     * @Property knowledgeScene: Knowledge base scene. Must be provided together with KnowledgeType. The valid values depend on KnowledgeType.
     */
    public knowledgeScene: string | ros.IResolvable | undefined;

    /**
     * @Property knowledgeType: Knowledge base type classification. Must be provided together with KnowledgeScene. If both are omitted, the system uses default based on StructureType.
     */
    public knowledgeType: string | ros.IResolvable | undefined;

    /**
     * @Property metaExtractColumns: Metadata extraction configuration.
     */
    public metaExtractColumns: Array<RosIndex.MetaExtractColumnsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property overlapSize: Overlap size, the number of overlapping characters between adjacent text slices. Range [0-1024]. Defaults to 100. Must be less than ChunkSize.
     */
    public overlapSize: number | ros.IResolvable | undefined;

    /**
     * @Property pipelineCommercialCu: RCU count for enterprise edition. Only required when PipelineCommercialType is enterprise. Range [1-200].
     */
    public pipelineCommercialCu: number | ros.IResolvable | undefined;

    /**
     * @Property pipelineCommercialType: Knowledge base specification type. standard: Standard edition. enterprise: Enterprise edition. Defaults to standard.
     */
    public pipelineCommercialType: string | ros.IResolvable | undefined;

    /**
     * @Property pipelineRetrieveRateLimitStrategy: Retrieval rate limit strategy for enterprise edition. Defaults to downgrade.
     */
    public pipelineRetrieveRateLimitStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property rerankInstruct: Custom rerank instruction. Required when RerankMode is custom.
     */
    public rerankInstruct: string | ros.IResolvable | undefined;

    /**
     * @Property rerankMinScore: Similarity threshold. Only text slices with similarity score exceeding this value will be recalled. Range [0.01-1.00]. Defaults to 0.01.
     */
    public rerankMinScore: number | ros.IResolvable | undefined;

    /**
     * @Property rerankMode: Rerank mode. qa: Q&A scenario (default). similar: similarity scenario. custom: custom rerank instruction, requires RerankInstruct.
     */
    public rerankMode: string | ros.IResolvable | undefined;

    /**
     * @Property rerankModelName: Rerank model used by the knowledge base. Defaults to qwen3-rerank when not specified.
     */
    public rerankModelName: string | ros.IResolvable | undefined;

    /**
     * @Property separator: Separator for chunking. Only effective when ChunkMode is regex.
     */
    public separator: string | ros.IResolvable | undefined;

    /**
     * @Property sinkInstanceId: Vector storage instance ID. Required when SinkType is ADB.
     */
    public sinkInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property sinkRegion: Region of the vector storage instance. Required when SinkType is ADB.
     */
    public sinkRegion: string | ros.IResolvable | undefined;

    /**
     * @Property sinkType: Vector storage type. BUILT_IN: managed by Bailian platform. ADB: AnalyticDB for PostgreSQL. Defaults to BUILT_IN. When set to ADB, SinkInstanceId and SinkRegion are required.
     */
    public sinkType: string | ros.IResolvable | undefined;

    /**
     * @Property sparseSimilarityTopK: Keyword retrieval Top K. Retrieves text slices by exact keyword matching. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be <= 200. Only supported in UpdateIndex, not in CreateIndex.
     */
    public sparseSimilarityTopK: number | ros.IResolvable | undefined;

    /**
     * @Property table: Table name for structured knowledge base.
     */
    public table: string | ros.IResolvable | undefined;

    /**
     * @Property tableIds: Table IDs to import when creating the knowledge base.
     */
    public tableIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIndexProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIndex.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrId = this.getAtt('Id');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.sourceType = props.sourceType;
        this.structureType = props.structureType;
        this.workspaceId = props.workspaceId;
        this.categoryIds = props.categoryIds;
        this.chunkMode = props.chunkMode;
        this.chunkSize = props.chunkSize;
        this.connectId = props.connectId;
        this.database = props.database;
        this.denseSimilarityTopK = props.denseSimilarityTopK;
        this.description = props.description;
        this.documentIds = props.documentIds;
        this.embeddingModelName = props.embeddingModelName;
        this.enableHeaders = props.enableHeaders;
        this.enableRewrite = props.enableRewrite;
        this.knowledgeScene = props.knowledgeScene;
        this.knowledgeType = props.knowledgeType;
        this.metaExtractColumns = props.metaExtractColumns;
        this.overlapSize = props.overlapSize;
        this.pipelineCommercialCu = props.pipelineCommercialCu;
        this.pipelineCommercialType = props.pipelineCommercialType;
        this.pipelineRetrieveRateLimitStrategy = props.pipelineRetrieveRateLimitStrategy;
        this.rerankInstruct = props.rerankInstruct;
        this.rerankMinScore = props.rerankMinScore;
        this.rerankMode = props.rerankMode;
        this.rerankModelName = props.rerankModelName;
        this.separator = props.separator;
        this.sinkInstanceId = props.sinkInstanceId;
        this.sinkRegion = props.sinkRegion;
        this.sinkType = props.sinkType;
        this.sparseSimilarityTopK = props.sparseSimilarityTopK;
        this.table = props.table;
        this.tableIds = props.tableIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            sourceType: this.sourceType,
            structureType: this.structureType,
            workspaceId: this.workspaceId,
            categoryIds: this.categoryIds,
            chunkMode: this.chunkMode,
            chunkSize: this.chunkSize,
            connectId: this.connectId,
            database: this.database,
            denseSimilarityTopK: this.denseSimilarityTopK,
            description: this.description,
            documentIds: this.documentIds,
            embeddingModelName: this.embeddingModelName,
            enableHeaders: this.enableHeaders,
            enableRewrite: this.enableRewrite,
            knowledgeScene: this.knowledgeScene,
            knowledgeType: this.knowledgeType,
            metaExtractColumns: this.metaExtractColumns,
            overlapSize: this.overlapSize,
            pipelineCommercialCu: this.pipelineCommercialCu,
            pipelineCommercialType: this.pipelineCommercialType,
            pipelineRetrieveRateLimitStrategy: this.pipelineRetrieveRateLimitStrategy,
            rerankInstruct: this.rerankInstruct,
            rerankMinScore: this.rerankMinScore,
            rerankMode: this.rerankMode,
            rerankModelName: this.rerankModelName,
            separator: this.separator,
            sinkInstanceId: this.sinkInstanceId,
            sinkRegion: this.sinkRegion,
            sinkType: this.sinkType,
            sparseSimilarityTopK: this.sparseSimilarityTopK,
            table: this.table,
            tableIds: this.tableIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIndexPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosIndex {
    /**
     * @stability external
     */
    export interface MetaExtractColumnsProperty {
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
/**
 * Determine whether the given properties match those of a `MetaExtractColumnsProperty`
 *
 * @param properties - the TypeScript properties of a `MetaExtractColumnsProperty`
 *
 * @returns the result of the validation.
 */
function RosIndex_MetaExtractColumnsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.desc && (Array.isArray(properties.desc) || (typeof properties.desc) === 'string')) {
        errors.collect(ros.propertyValidator('desc', ros.validateLength)({
            data: properties.desc.length,
            min: undefined,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('desc', ros.validateString)(properties.desc));
    errors.collect(ros.propertyValidator('enableLlm', ros.validateBoolean)(properties.enableLlm));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["constant","variable","custom_prompt","regular","keywords"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('enableSearch', ros.validateBoolean)(properties.enableSearch));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    if(properties.key && (Array.isArray(properties.key) || (typeof properties.key) === 'string')) {
        errors.collect(ros.propertyValidator('key', ros.validateLength)({
            data: properties.key.length,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "MetaExtractColumnsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Bailian::Index.MetaExtractColumns` resource
 *
 * @param properties - the TypeScript properties of a `MetaExtractColumnsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Bailian::Index.MetaExtractColumns` resource.
 */
// @ts-ignore TS6133
function rosIndexMetaExtractColumnsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIndex_MetaExtractColumnsPropertyValidator(properties).assertSuccess();
    return {
      'Desc': ros.stringToRosTemplate(properties.desc),
      'EnableLlm': ros.booleanToRosTemplate(properties.enableLlm),
      'Type': ros.stringToRosTemplate(properties.type),
      'Value': ros.stringToRosTemplate(properties.value),
      'EnableSearch': ros.booleanToRosTemplate(properties.enableSearch),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
