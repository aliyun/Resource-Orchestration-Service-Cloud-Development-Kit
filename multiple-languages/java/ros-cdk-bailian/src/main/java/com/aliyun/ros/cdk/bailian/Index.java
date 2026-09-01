package com.aliyun.ros.cdk.bailian;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Bailian::Index</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T07:16:16.807Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bailian.$Module.class, fqn = "@alicloud/ros-cdk-bailian.Index")
public class Index extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.bailian.IIndex {

    protected Index(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Index(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Index(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bailian.IndexProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Index(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bailian.IndexProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Id: The unique ID of the knowledge base index.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bailian.IndexProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.bailian.IndexProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.bailian.Index}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.bailian.Index> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.bailian.IndexProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.bailian.IndexProps.Builder();
        }

        /**
         * Property name: Knowledge base name.
         * <p>
         * 1-20 characters. Supports Chinese, English, numbers, underscores (_), hyphens (-), periods (.) and colons (:).
         * <p>
         * @return {@code this}
         * @param name Property name: Knowledge base name. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: Knowledge base name.
         * <p>
         * 1-20 characters. Supports Chinese, English, numbers, underscores (_), hyphens (-), periods (.) and colons (:).
         * <p>
         * @return {@code this}
         * @param name Property name: Knowledge base name. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property sourceType: Data source type.
         * <p>
         * DATA_CENTER_CATEGORY: import files from specified categories. DATA_CENTER_FILE: import specified files.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Data source type. This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * Property sourceType: Data source type.
         * <p>
         * DATA_CENTER_CATEGORY: import files from specified categories. DATA_CENTER_FILE: import specified files.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Data source type. This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * Property structureType: Knowledge base type.
         * <p>
         * unstructured: document search or audio/video knowledge base. structured: data query or image Q&amp;A knowledge base.
         * <p>
         * @return {@code this}
         * @param structureType Property structureType: Knowledge base type. This parameter is required.
         */
        public Builder structureType(final java.lang.String structureType) {
            this.props.structureType(structureType);
            return this;
        }
        /**
         * Property structureType: Knowledge base type.
         * <p>
         * unstructured: document search or audio/video knowledge base. structured: data query or image Q&amp;A knowledge base.
         * <p>
         * @return {@code this}
         * @param structureType Property structureType: Knowledge base type. This parameter is required.
         */
        public Builder structureType(final com.aliyun.ros.cdk.core.IResolvable structureType) {
            this.props.structureType(structureType);
            return this;
        }

        /**
         * Property workspaceId: Workspace ID.
         * <p>
         * The knowledge base will be created in this workspace.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: Workspace ID. This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * Property workspaceId: Workspace ID.
         * <p>
         * The knowledge base will be created in this workspace.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: Workspace ID. This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * Property categoryIds: Category IDs to import when creating the knowledge base.
         * <p>
         * Required when SourceType is DATA_CENTER_CATEGORY.
         * <p>
         * @return {@code this}
         * @param categoryIds Property categoryIds: Category IDs to import when creating the knowledge base. This parameter is required.
         */
        public Builder categoryIds(final com.aliyun.ros.cdk.core.IResolvable categoryIds) {
            this.props.categoryIds(categoryIds);
            return this;
        }
        /**
         * Property categoryIds: Category IDs to import when creating the knowledge base.
         * <p>
         * Required when SourceType is DATA_CENTER_CATEGORY.
         * <p>
         * @return {@code this}
         * @param categoryIds Property categoryIds: Category IDs to import when creating the knowledge base. This parameter is required.
         */
        public Builder categoryIds(final java.util.List<? extends java.lang.Object> categoryIds) {
            this.props.categoryIds(categoryIds);
            return this;
        }

        /**
         * Property chunkMode: Chunk strategy.
         * <p>
         * If not specified, smart chunking is used. When set to regex, Separator must also be provided.
         * <p>
         * @return {@code this}
         * @param chunkMode Property chunkMode: Chunk strategy. This parameter is required.
         */
        public Builder chunkMode(final java.lang.String chunkMode) {
            this.props.chunkMode(chunkMode);
            return this;
        }
        /**
         * Property chunkMode: Chunk strategy.
         * <p>
         * If not specified, smart chunking is used. When set to regex, Separator must also be provided.
         * <p>
         * @return {@code this}
         * @param chunkMode Property chunkMode: Chunk strategy. This parameter is required.
         */
        public Builder chunkMode(final com.aliyun.ros.cdk.core.IResolvable chunkMode) {
            this.props.chunkMode(chunkMode);
            return this;
        }

        /**
         * Property chunkSize: Chunk size, the maximum number of characters per text slice.
         * <p>
         * Range [1-6000]. Defaults to 500. If ChunkSize is less than 100, OverlapSize must also be set.
         * <p>
         * @return {@code this}
         * @param chunkSize Property chunkSize: Chunk size, the maximum number of characters per text slice. This parameter is required.
         */
        public Builder chunkSize(final java.lang.Number chunkSize) {
            this.props.chunkSize(chunkSize);
            return this;
        }
        /**
         * Property chunkSize: Chunk size, the maximum number of characters per text slice.
         * <p>
         * Range [1-6000]. Defaults to 500. If ChunkSize is less than 100, OverlapSize must also be set.
         * <p>
         * @return {@code this}
         * @param chunkSize Property chunkSize: Chunk size, the maximum number of characters per text slice. This parameter is required.
         */
        public Builder chunkSize(final com.aliyun.ros.cdk.core.IResolvable chunkSize) {
            this.props.chunkSize(chunkSize);
            return this;
        }

        /**
         * Property connectId: Connection ID.
         * <p>
         * Replaces the deprecated datasourceCode parameter.
         * <p>
         * @return {@code this}
         * @param connectId Property connectId: Connection ID. This parameter is required.
         */
        public Builder connectId(final java.lang.String connectId) {
            this.props.connectId(connectId);
            return this;
        }
        /**
         * Property connectId: Connection ID.
         * <p>
         * Replaces the deprecated datasourceCode parameter.
         * <p>
         * @return {@code this}
         * @param connectId Property connectId: Connection ID. This parameter is required.
         */
        public Builder connectId(final com.aliyun.ros.cdk.core.IResolvable connectId) {
            this.props.connectId(connectId);
            return this;
        }

        /**
         * Property database: Database name for structured knowledge base.
         * <p>
         * @return {@code this}
         * @param database Property database: Database name for structured knowledge base. This parameter is required.
         */
        public Builder database(final java.lang.String database) {
            this.props.database(database);
            return this;
        }
        /**
         * Property database: Database name for structured knowledge base.
         * <p>
         * @return {@code this}
         * @param database Property database: Database name for structured knowledge base. This parameter is required.
         */
        public Builder database(final com.aliyun.ros.cdk.core.IResolvable database) {
            this.props.database(database);
            return this;
        }

        /**
         * Property denseSimilarityTopK: Vector retrieval Top K.
         * <p>
         * Retrieves the K most similar text slices by vector similarity. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be &lt;= 200. Only supported in UpdateIndex, not in CreateIndex.
         * <p>
         * @return {@code this}
         * @param denseSimilarityTopK Property denseSimilarityTopK: Vector retrieval Top K. This parameter is required.
         */
        public Builder denseSimilarityTopK(final java.lang.Number denseSimilarityTopK) {
            this.props.denseSimilarityTopK(denseSimilarityTopK);
            return this;
        }
        /**
         * Property denseSimilarityTopK: Vector retrieval Top K.
         * <p>
         * Retrieves the K most similar text slices by vector similarity. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be &lt;= 200. Only supported in UpdateIndex, not in CreateIndex.
         * <p>
         * @return {@code this}
         * @param denseSimilarityTopK Property denseSimilarityTopK: Vector retrieval Top K. This parameter is required.
         */
        public Builder denseSimilarityTopK(final com.aliyun.ros.cdk.core.IResolvable denseSimilarityTopK) {
            this.props.denseSimilarityTopK(denseSimilarityTopK);
            return this;
        }

        /**
         * Property description: Knowledge base description.
         * <p>
         * 0-1000 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Knowledge base description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Knowledge base description.
         * <p>
         * 0-1000 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Knowledge base description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property documentIds: Document IDs to import when creating the knowledge base.
         * <p>
         * Required when SourceType is DATA_CENTER_FILE.
         * <p>
         * @return {@code this}
         * @param documentIds Property documentIds: Document IDs to import when creating the knowledge base. This parameter is required.
         */
        public Builder documentIds(final com.aliyun.ros.cdk.core.IResolvable documentIds) {
            this.props.documentIds(documentIds);
            return this;
        }
        /**
         * Property documentIds: Document IDs to import when creating the knowledge base.
         * <p>
         * Required when SourceType is DATA_CENTER_FILE.
         * <p>
         * @return {@code this}
         * @param documentIds Property documentIds: Document IDs to import when creating the knowledge base. This parameter is required.
         */
        public Builder documentIds(final java.util.List<? extends java.lang.Object> documentIds) {
            this.props.documentIds(documentIds);
            return this;
        }

        /**
         * Property embeddingModelName: Embedding model used by the knowledge base.
         * <p>
         * Defaults to text-embedding-v3.
         * <p>
         * @return {@code this}
         * @param embeddingModelName Property embeddingModelName: Embedding model used by the knowledge base. This parameter is required.
         */
        public Builder embeddingModelName(final java.lang.String embeddingModelName) {
            this.props.embeddingModelName(embeddingModelName);
            return this;
        }
        /**
         * Property embeddingModelName: Embedding model used by the knowledge base.
         * <p>
         * Defaults to text-embedding-v3.
         * <p>
         * @return {@code this}
         * @param embeddingModelName Property embeddingModelName: Embedding model used by the knowledge base. This parameter is required.
         */
        public Builder embeddingModelName(final com.aliyun.ros.cdk.core.IResolvable embeddingModelName) {
            this.props.embeddingModelName(embeddingModelName);
            return this;
        }

        /**
         * Property enableHeaders: Whether to enable headers for document parsing.
         * <p>
         * Defaults to false.
         * <p>
         * @return {@code this}
         * @param enableHeaders Property enableHeaders: Whether to enable headers for document parsing. This parameter is required.
         */
        public Builder enableHeaders(final java.lang.Boolean enableHeaders) {
            this.props.enableHeaders(enableHeaders);
            return this;
        }
        /**
         * Property enableHeaders: Whether to enable headers for document parsing.
         * <p>
         * Defaults to false.
         * <p>
         * @return {@code this}
         * @param enableHeaders Property enableHeaders: Whether to enable headers for document parsing. This parameter is required.
         */
        public Builder enableHeaders(final com.aliyun.ros.cdk.core.IResolvable enableHeaders) {
            this.props.enableHeaders(enableHeaders);
            return this;
        }

        /**
         * Property enableRewrite: Whether to enable multi-turn dialogue rewriting.
         * <p>
         * Defaults to true.
         * <p>
         * @return {@code this}
         * @param enableRewrite Property enableRewrite: Whether to enable multi-turn dialogue rewriting. This parameter is required.
         */
        public Builder enableRewrite(final java.lang.Boolean enableRewrite) {
            this.props.enableRewrite(enableRewrite);
            return this;
        }
        /**
         * Property enableRewrite: Whether to enable multi-turn dialogue rewriting.
         * <p>
         * Defaults to true.
         * <p>
         * @return {@code this}
         * @param enableRewrite Property enableRewrite: Whether to enable multi-turn dialogue rewriting. This parameter is required.
         */
        public Builder enableRewrite(final com.aliyun.ros.cdk.core.IResolvable enableRewrite) {
            this.props.enableRewrite(enableRewrite);
            return this;
        }

        /**
         * Property knowledgeScene: Knowledge base scene.
         * <p>
         * Must be provided together with KnowledgeType. The valid values depend on KnowledgeType.
         * <p>
         * @return {@code this}
         * @param knowledgeScene Property knowledgeScene: Knowledge base scene. This parameter is required.
         */
        public Builder knowledgeScene(final java.lang.String knowledgeScene) {
            this.props.knowledgeScene(knowledgeScene);
            return this;
        }
        /**
         * Property knowledgeScene: Knowledge base scene.
         * <p>
         * Must be provided together with KnowledgeType. The valid values depend on KnowledgeType.
         * <p>
         * @return {@code this}
         * @param knowledgeScene Property knowledgeScene: Knowledge base scene. This parameter is required.
         */
        public Builder knowledgeScene(final com.aliyun.ros.cdk.core.IResolvable knowledgeScene) {
            this.props.knowledgeScene(knowledgeScene);
            return this;
        }

        /**
         * Property knowledgeType: Knowledge base type classification.
         * <p>
         * Must be provided together with KnowledgeScene. If both are omitted, the system uses default based on StructureType.
         * <p>
         * @return {@code this}
         * @param knowledgeType Property knowledgeType: Knowledge base type classification. This parameter is required.
         */
        public Builder knowledgeType(final java.lang.String knowledgeType) {
            this.props.knowledgeType(knowledgeType);
            return this;
        }
        /**
         * Property knowledgeType: Knowledge base type classification.
         * <p>
         * Must be provided together with KnowledgeScene. If both are omitted, the system uses default based on StructureType.
         * <p>
         * @return {@code this}
         * @param knowledgeType Property knowledgeType: Knowledge base type classification. This parameter is required.
         */
        public Builder knowledgeType(final com.aliyun.ros.cdk.core.IResolvable knowledgeType) {
            this.props.knowledgeType(knowledgeType);
            return this;
        }

        /**
         * Property metaExtractColumns: Metadata extraction configuration.
         * <p>
         * @return {@code this}
         * @param metaExtractColumns Property metaExtractColumns: Metadata extraction configuration. This parameter is required.
         */
        public Builder metaExtractColumns(final com.aliyun.ros.cdk.core.IResolvable metaExtractColumns) {
            this.props.metaExtractColumns(metaExtractColumns);
            return this;
        }
        /**
         * Property metaExtractColumns: Metadata extraction configuration.
         * <p>
         * @return {@code this}
         * @param metaExtractColumns Property metaExtractColumns: Metadata extraction configuration. This parameter is required.
         */
        public Builder metaExtractColumns(final java.util.List<? extends java.lang.Object> metaExtractColumns) {
            this.props.metaExtractColumns(metaExtractColumns);
            return this;
        }

        /**
         * Property overlapSize: Overlap size, the number of overlapping characters between adjacent text slices.
         * <p>
         * Range [0-1024]. Defaults to 100. Must be less than ChunkSize.
         * <p>
         * @return {@code this}
         * @param overlapSize Property overlapSize: Overlap size, the number of overlapping characters between adjacent text slices. This parameter is required.
         */
        public Builder overlapSize(final java.lang.Number overlapSize) {
            this.props.overlapSize(overlapSize);
            return this;
        }
        /**
         * Property overlapSize: Overlap size, the number of overlapping characters between adjacent text slices.
         * <p>
         * Range [0-1024]. Defaults to 100. Must be less than ChunkSize.
         * <p>
         * @return {@code this}
         * @param overlapSize Property overlapSize: Overlap size, the number of overlapping characters between adjacent text slices. This parameter is required.
         */
        public Builder overlapSize(final com.aliyun.ros.cdk.core.IResolvable overlapSize) {
            this.props.overlapSize(overlapSize);
            return this;
        }

        /**
         * Property pipelineCommercialCu: RCU count for enterprise edition.
         * <p>
         * Only required when PipelineCommercialType is enterprise. Range [1-200].
         * <p>
         * @return {@code this}
         * @param pipelineCommercialCu Property pipelineCommercialCu: RCU count for enterprise edition. This parameter is required.
         */
        public Builder pipelineCommercialCu(final java.lang.Number pipelineCommercialCu) {
            this.props.pipelineCommercialCu(pipelineCommercialCu);
            return this;
        }
        /**
         * Property pipelineCommercialCu: RCU count for enterprise edition.
         * <p>
         * Only required when PipelineCommercialType is enterprise. Range [1-200].
         * <p>
         * @return {@code this}
         * @param pipelineCommercialCu Property pipelineCommercialCu: RCU count for enterprise edition. This parameter is required.
         */
        public Builder pipelineCommercialCu(final com.aliyun.ros.cdk.core.IResolvable pipelineCommercialCu) {
            this.props.pipelineCommercialCu(pipelineCommercialCu);
            return this;
        }

        /**
         * Property pipelineCommercialType: Knowledge base specification type.
         * <p>
         * standard: Standard edition. enterprise: Enterprise edition. Defaults to standard.
         * <p>
         * @return {@code this}
         * @param pipelineCommercialType Property pipelineCommercialType: Knowledge base specification type. This parameter is required.
         */
        public Builder pipelineCommercialType(final java.lang.String pipelineCommercialType) {
            this.props.pipelineCommercialType(pipelineCommercialType);
            return this;
        }
        /**
         * Property pipelineCommercialType: Knowledge base specification type.
         * <p>
         * standard: Standard edition. enterprise: Enterprise edition. Defaults to standard.
         * <p>
         * @return {@code this}
         * @param pipelineCommercialType Property pipelineCommercialType: Knowledge base specification type. This parameter is required.
         */
        public Builder pipelineCommercialType(final com.aliyun.ros.cdk.core.IResolvable pipelineCommercialType) {
            this.props.pipelineCommercialType(pipelineCommercialType);
            return this;
        }

        /**
         * Property pipelineRetrieveRateLimitStrategy: Retrieval rate limit strategy for enterprise edition.
         * <p>
         * Defaults to downgrade.
         * <p>
         * @return {@code this}
         * @param pipelineRetrieveRateLimitStrategy Property pipelineRetrieveRateLimitStrategy: Retrieval rate limit strategy for enterprise edition. This parameter is required.
         */
        public Builder pipelineRetrieveRateLimitStrategy(final java.lang.String pipelineRetrieveRateLimitStrategy) {
            this.props.pipelineRetrieveRateLimitStrategy(pipelineRetrieveRateLimitStrategy);
            return this;
        }
        /**
         * Property pipelineRetrieveRateLimitStrategy: Retrieval rate limit strategy for enterprise edition.
         * <p>
         * Defaults to downgrade.
         * <p>
         * @return {@code this}
         * @param pipelineRetrieveRateLimitStrategy Property pipelineRetrieveRateLimitStrategy: Retrieval rate limit strategy for enterprise edition. This parameter is required.
         */
        public Builder pipelineRetrieveRateLimitStrategy(final com.aliyun.ros.cdk.core.IResolvable pipelineRetrieveRateLimitStrategy) {
            this.props.pipelineRetrieveRateLimitStrategy(pipelineRetrieveRateLimitStrategy);
            return this;
        }

        /**
         * Property rerankInstruct: Custom rerank instruction.
         * <p>
         * Required when RerankMode is custom.
         * <p>
         * @return {@code this}
         * @param rerankInstruct Property rerankInstruct: Custom rerank instruction. This parameter is required.
         */
        public Builder rerankInstruct(final java.lang.String rerankInstruct) {
            this.props.rerankInstruct(rerankInstruct);
            return this;
        }
        /**
         * Property rerankInstruct: Custom rerank instruction.
         * <p>
         * Required when RerankMode is custom.
         * <p>
         * @return {@code this}
         * @param rerankInstruct Property rerankInstruct: Custom rerank instruction. This parameter is required.
         */
        public Builder rerankInstruct(final com.aliyun.ros.cdk.core.IResolvable rerankInstruct) {
            this.props.rerankInstruct(rerankInstruct);
            return this;
        }

        /**
         * Property rerankMinScore: Similarity threshold.
         * <p>
         * Only text slices with similarity score exceeding this value will be recalled. Range [0.01-1.00]. Defaults to 0.01.
         * <p>
         * @return {@code this}
         * @param rerankMinScore Property rerankMinScore: Similarity threshold. This parameter is required.
         */
        public Builder rerankMinScore(final java.lang.Number rerankMinScore) {
            this.props.rerankMinScore(rerankMinScore);
            return this;
        }
        /**
         * Property rerankMinScore: Similarity threshold.
         * <p>
         * Only text slices with similarity score exceeding this value will be recalled. Range [0.01-1.00]. Defaults to 0.01.
         * <p>
         * @return {@code this}
         * @param rerankMinScore Property rerankMinScore: Similarity threshold. This parameter is required.
         */
        public Builder rerankMinScore(final com.aliyun.ros.cdk.core.IResolvable rerankMinScore) {
            this.props.rerankMinScore(rerankMinScore);
            return this;
        }

        /**
         * Property rerankMode: Rerank mode.
         * <p>
         * qa: Q&amp;A scenario (default). similar: similarity scenario. custom: custom rerank instruction, requires RerankInstruct.
         * <p>
         * @return {@code this}
         * @param rerankMode Property rerankMode: Rerank mode. This parameter is required.
         */
        public Builder rerankMode(final java.lang.String rerankMode) {
            this.props.rerankMode(rerankMode);
            return this;
        }
        /**
         * Property rerankMode: Rerank mode.
         * <p>
         * qa: Q&amp;A scenario (default). similar: similarity scenario. custom: custom rerank instruction, requires RerankInstruct.
         * <p>
         * @return {@code this}
         * @param rerankMode Property rerankMode: Rerank mode. This parameter is required.
         */
        public Builder rerankMode(final com.aliyun.ros.cdk.core.IResolvable rerankMode) {
            this.props.rerankMode(rerankMode);
            return this;
        }

        /**
         * Property rerankModelName: Rerank model used by the knowledge base.
         * <p>
         * Defaults to qwen3-rerank when not specified.
         * <p>
         * @return {@code this}
         * @param rerankModelName Property rerankModelName: Rerank model used by the knowledge base. This parameter is required.
         */
        public Builder rerankModelName(final java.lang.String rerankModelName) {
            this.props.rerankModelName(rerankModelName);
            return this;
        }
        /**
         * Property rerankModelName: Rerank model used by the knowledge base.
         * <p>
         * Defaults to qwen3-rerank when not specified.
         * <p>
         * @return {@code this}
         * @param rerankModelName Property rerankModelName: Rerank model used by the knowledge base. This parameter is required.
         */
        public Builder rerankModelName(final com.aliyun.ros.cdk.core.IResolvable rerankModelName) {
            this.props.rerankModelName(rerankModelName);
            return this;
        }

        /**
         * Property separator: Separator for chunking.
         * <p>
         * Only effective when ChunkMode is regex.
         * <p>
         * @return {@code this}
         * @param separator Property separator: Separator for chunking. This parameter is required.
         */
        public Builder separator(final java.lang.String separator) {
            this.props.separator(separator);
            return this;
        }
        /**
         * Property separator: Separator for chunking.
         * <p>
         * Only effective when ChunkMode is regex.
         * <p>
         * @return {@code this}
         * @param separator Property separator: Separator for chunking. This parameter is required.
         */
        public Builder separator(final com.aliyun.ros.cdk.core.IResolvable separator) {
            this.props.separator(separator);
            return this;
        }

        /**
         * Property sinkInstanceId: Vector storage instance ID.
         * <p>
         * Required when SinkType is ADB.
         * <p>
         * @return {@code this}
         * @param sinkInstanceId Property sinkInstanceId: Vector storage instance ID. This parameter is required.
         */
        public Builder sinkInstanceId(final java.lang.String sinkInstanceId) {
            this.props.sinkInstanceId(sinkInstanceId);
            return this;
        }
        /**
         * Property sinkInstanceId: Vector storage instance ID.
         * <p>
         * Required when SinkType is ADB.
         * <p>
         * @return {@code this}
         * @param sinkInstanceId Property sinkInstanceId: Vector storage instance ID. This parameter is required.
         */
        public Builder sinkInstanceId(final com.aliyun.ros.cdk.core.IResolvable sinkInstanceId) {
            this.props.sinkInstanceId(sinkInstanceId);
            return this;
        }

        /**
         * Property sinkRegion: Region of the vector storage instance.
         * <p>
         * Required when SinkType is ADB.
         * <p>
         * @return {@code this}
         * @param sinkRegion Property sinkRegion: Region of the vector storage instance. This parameter is required.
         */
        public Builder sinkRegion(final java.lang.String sinkRegion) {
            this.props.sinkRegion(sinkRegion);
            return this;
        }
        /**
         * Property sinkRegion: Region of the vector storage instance.
         * <p>
         * Required when SinkType is ADB.
         * <p>
         * @return {@code this}
         * @param sinkRegion Property sinkRegion: Region of the vector storage instance. This parameter is required.
         */
        public Builder sinkRegion(final com.aliyun.ros.cdk.core.IResolvable sinkRegion) {
            this.props.sinkRegion(sinkRegion);
            return this;
        }

        /**
         * Property sinkType: Vector storage type.
         * <p>
         * BUILT_IN: managed by Bailian platform. ADB: AnalyticDB for PostgreSQL. Defaults to BUILT_IN. When set to ADB, SinkInstanceId and SinkRegion are required.
         * <p>
         * @return {@code this}
         * @param sinkType Property sinkType: Vector storage type. This parameter is required.
         */
        public Builder sinkType(final java.lang.String sinkType) {
            this.props.sinkType(sinkType);
            return this;
        }
        /**
         * Property sinkType: Vector storage type.
         * <p>
         * BUILT_IN: managed by Bailian platform. ADB: AnalyticDB for PostgreSQL. Defaults to BUILT_IN. When set to ADB, SinkInstanceId and SinkRegion are required.
         * <p>
         * @return {@code this}
         * @param sinkType Property sinkType: Vector storage type. This parameter is required.
         */
        public Builder sinkType(final com.aliyun.ros.cdk.core.IResolvable sinkType) {
            this.props.sinkType(sinkType);
            return this;
        }

        /**
         * Property sparseSimilarityTopK: Keyword retrieval Top K.
         * <p>
         * Retrieves text slices by exact keyword matching. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be &lt;= 200. Only supported in UpdateIndex, not in CreateIndex.
         * <p>
         * @return {@code this}
         * @param sparseSimilarityTopK Property sparseSimilarityTopK: Keyword retrieval Top K. This parameter is required.
         */
        public Builder sparseSimilarityTopK(final java.lang.Number sparseSimilarityTopK) {
            this.props.sparseSimilarityTopK(sparseSimilarityTopK);
            return this;
        }
        /**
         * Property sparseSimilarityTopK: Keyword retrieval Top K.
         * <p>
         * Retrieves text slices by exact keyword matching. Range [0-100]. Defaults to 100. DenseSimilarityTopK + SparseSimilarityTopK must be &lt;= 200. Only supported in UpdateIndex, not in CreateIndex.
         * <p>
         * @return {@code this}
         * @param sparseSimilarityTopK Property sparseSimilarityTopK: Keyword retrieval Top K. This parameter is required.
         */
        public Builder sparseSimilarityTopK(final com.aliyun.ros.cdk.core.IResolvable sparseSimilarityTopK) {
            this.props.sparseSimilarityTopK(sparseSimilarityTopK);
            return this;
        }

        /**
         * Property table: Table name for structured knowledge base.
         * <p>
         * @return {@code this}
         * @param table Property table: Table name for structured knowledge base. This parameter is required.
         */
        public Builder table(final java.lang.String table) {
            this.props.table(table);
            return this;
        }
        /**
         * Property table: Table name for structured knowledge base.
         * <p>
         * @return {@code this}
         * @param table Property table: Table name for structured knowledge base. This parameter is required.
         */
        public Builder table(final com.aliyun.ros.cdk.core.IResolvable table) {
            this.props.table(table);
            return this;
        }

        /**
         * Property tableIds: Table IDs to import when creating the knowledge base.
         * <p>
         * @return {@code this}
         * @param tableIds Property tableIds: Table IDs to import when creating the knowledge base. This parameter is required.
         */
        public Builder tableIds(final com.aliyun.ros.cdk.core.IResolvable tableIds) {
            this.props.tableIds(tableIds);
            return this;
        }
        /**
         * Property tableIds: Table IDs to import when creating the knowledge base.
         * <p>
         * @return {@code this}
         * @param tableIds Property tableIds: Table IDs to import when creating the knowledge base. This parameter is required.
         */
        public Builder tableIds(final java.util.List<? extends java.lang.Object> tableIds) {
            this.props.tableIds(tableIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.bailian.Index}.
         */
        @Override
        public com.aliyun.ros.cdk.bailian.Index build() {
            return new com.aliyun.ros.cdk.bailian.Index(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
