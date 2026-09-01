package com.aliyun.ros.cdk.bailian;

/**
 * Properties for defining a <code>RosIndex</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bailian-index
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T07:16:16.839Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bailian.$Module.class, fqn = "@alicloud/ros-cdk-bailian.RosIndexProps")
@software.amazon.jsii.Jsii.Proxy(RosIndexProps.Jsii$Proxy.class)
public interface RosIndexProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStructureType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategoryIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChunkMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChunkSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDatabase() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDenseSimilarityTopK() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDocumentIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEmbeddingModelName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableHeaders() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableRewrite() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKnowledgeScene() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKnowledgeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMetaExtractColumns() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOverlapSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPipelineCommercialCu() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPipelineCommercialType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPipelineRetrieveRateLimitStrategy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRerankInstruct() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRerankMinScore() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRerankMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRerankModelName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSeparator() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSinkInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSinkRegion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSinkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSparseSimilarityTopK() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTableIds() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosIndexProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosIndexProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosIndexProps> {
        java.lang.Object name;
        java.lang.Object sourceType;
        java.lang.Object structureType;
        java.lang.Object workspaceId;
        java.lang.Object categoryIds;
        java.lang.Object chunkMode;
        java.lang.Object chunkSize;
        java.lang.Object connectId;
        java.lang.Object database;
        java.lang.Object denseSimilarityTopK;
        java.lang.Object description;
        java.lang.Object documentIds;
        java.lang.Object embeddingModelName;
        java.lang.Object enableHeaders;
        java.lang.Object enableRewrite;
        java.lang.Object knowledgeScene;
        java.lang.Object knowledgeType;
        java.lang.Object metaExtractColumns;
        java.lang.Object overlapSize;
        java.lang.Object pipelineCommercialCu;
        java.lang.Object pipelineCommercialType;
        java.lang.Object pipelineRetrieveRateLimitStrategy;
        java.lang.Object rerankInstruct;
        java.lang.Object rerankMinScore;
        java.lang.Object rerankMode;
        java.lang.Object rerankModelName;
        java.lang.Object separator;
        java.lang.Object sinkInstanceId;
        java.lang.Object sinkRegion;
        java.lang.Object sinkType;
        java.lang.Object sparseSimilarityTopK;
        java.lang.Object table;
        java.lang.Object tableIds;

        /**
         * Sets the value of {@link RosIndexProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getSourceType}
         * @param sourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceType(java.lang.String sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getSourceType}
         * @param sourceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceType(com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.sourceType = sourceType;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getStructureType}
         * @param structureType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder structureType(java.lang.String structureType) {
            this.structureType = structureType;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getStructureType}
         * @param structureType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder structureType(com.aliyun.ros.cdk.core.IResolvable structureType) {
            this.structureType = structureType;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getWorkspaceId}
         * @param workspaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(java.lang.String workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getWorkspaceId}
         * @param workspaceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workspaceId(com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.workspaceId = workspaceId;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getCategoryIds}
         * @param categoryIds the value to be set.
         * @return {@code this}
         */
        public Builder categoryIds(com.aliyun.ros.cdk.core.IResolvable categoryIds) {
            this.categoryIds = categoryIds;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getCategoryIds}
         * @param categoryIds the value to be set.
         * @return {@code this}
         */
        public Builder categoryIds(java.util.List<? extends java.lang.Object> categoryIds) {
            this.categoryIds = categoryIds;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getChunkMode}
         * @param chunkMode the value to be set.
         * @return {@code this}
         */
        public Builder chunkMode(java.lang.String chunkMode) {
            this.chunkMode = chunkMode;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getChunkMode}
         * @param chunkMode the value to be set.
         * @return {@code this}
         */
        public Builder chunkMode(com.aliyun.ros.cdk.core.IResolvable chunkMode) {
            this.chunkMode = chunkMode;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getChunkSize}
         * @param chunkSize the value to be set.
         * @return {@code this}
         */
        public Builder chunkSize(java.lang.Number chunkSize) {
            this.chunkSize = chunkSize;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getChunkSize}
         * @param chunkSize the value to be set.
         * @return {@code this}
         */
        public Builder chunkSize(com.aliyun.ros.cdk.core.IResolvable chunkSize) {
            this.chunkSize = chunkSize;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getConnectId}
         * @param connectId the value to be set.
         * @return {@code this}
         */
        public Builder connectId(java.lang.String connectId) {
            this.connectId = connectId;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getConnectId}
         * @param connectId the value to be set.
         * @return {@code this}
         */
        public Builder connectId(com.aliyun.ros.cdk.core.IResolvable connectId) {
            this.connectId = connectId;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getDatabase}
         * @param database the value to be set.
         * @return {@code this}
         */
        public Builder database(java.lang.String database) {
            this.database = database;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getDatabase}
         * @param database the value to be set.
         * @return {@code this}
         */
        public Builder database(com.aliyun.ros.cdk.core.IResolvable database) {
            this.database = database;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getDenseSimilarityTopK}
         * @param denseSimilarityTopK the value to be set.
         * @return {@code this}
         */
        public Builder denseSimilarityTopK(java.lang.Number denseSimilarityTopK) {
            this.denseSimilarityTopK = denseSimilarityTopK;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getDenseSimilarityTopK}
         * @param denseSimilarityTopK the value to be set.
         * @return {@code this}
         */
        public Builder denseSimilarityTopK(com.aliyun.ros.cdk.core.IResolvable denseSimilarityTopK) {
            this.denseSimilarityTopK = denseSimilarityTopK;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getDocumentIds}
         * @param documentIds the value to be set.
         * @return {@code this}
         */
        public Builder documentIds(com.aliyun.ros.cdk.core.IResolvable documentIds) {
            this.documentIds = documentIds;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getDocumentIds}
         * @param documentIds the value to be set.
         * @return {@code this}
         */
        public Builder documentIds(java.util.List<? extends java.lang.Object> documentIds) {
            this.documentIds = documentIds;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getEmbeddingModelName}
         * @param embeddingModelName the value to be set.
         * @return {@code this}
         */
        public Builder embeddingModelName(java.lang.String embeddingModelName) {
            this.embeddingModelName = embeddingModelName;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getEmbeddingModelName}
         * @param embeddingModelName the value to be set.
         * @return {@code this}
         */
        public Builder embeddingModelName(com.aliyun.ros.cdk.core.IResolvable embeddingModelName) {
            this.embeddingModelName = embeddingModelName;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getEnableHeaders}
         * @param enableHeaders the value to be set.
         * @return {@code this}
         */
        public Builder enableHeaders(java.lang.Boolean enableHeaders) {
            this.enableHeaders = enableHeaders;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getEnableHeaders}
         * @param enableHeaders the value to be set.
         * @return {@code this}
         */
        public Builder enableHeaders(com.aliyun.ros.cdk.core.IResolvable enableHeaders) {
            this.enableHeaders = enableHeaders;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getEnableRewrite}
         * @param enableRewrite the value to be set.
         * @return {@code this}
         */
        public Builder enableRewrite(java.lang.Boolean enableRewrite) {
            this.enableRewrite = enableRewrite;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getEnableRewrite}
         * @param enableRewrite the value to be set.
         * @return {@code this}
         */
        public Builder enableRewrite(com.aliyun.ros.cdk.core.IResolvable enableRewrite) {
            this.enableRewrite = enableRewrite;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getKnowledgeScene}
         * @param knowledgeScene the value to be set.
         * @return {@code this}
         */
        public Builder knowledgeScene(java.lang.String knowledgeScene) {
            this.knowledgeScene = knowledgeScene;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getKnowledgeScene}
         * @param knowledgeScene the value to be set.
         * @return {@code this}
         */
        public Builder knowledgeScene(com.aliyun.ros.cdk.core.IResolvable knowledgeScene) {
            this.knowledgeScene = knowledgeScene;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getKnowledgeType}
         * @param knowledgeType the value to be set.
         * @return {@code this}
         */
        public Builder knowledgeType(java.lang.String knowledgeType) {
            this.knowledgeType = knowledgeType;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getKnowledgeType}
         * @param knowledgeType the value to be set.
         * @return {@code this}
         */
        public Builder knowledgeType(com.aliyun.ros.cdk.core.IResolvable knowledgeType) {
            this.knowledgeType = knowledgeType;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getMetaExtractColumns}
         * @param metaExtractColumns the value to be set.
         * @return {@code this}
         */
        public Builder metaExtractColumns(com.aliyun.ros.cdk.core.IResolvable metaExtractColumns) {
            this.metaExtractColumns = metaExtractColumns;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getMetaExtractColumns}
         * @param metaExtractColumns the value to be set.
         * @return {@code this}
         */
        public Builder metaExtractColumns(java.util.List<? extends java.lang.Object> metaExtractColumns) {
            this.metaExtractColumns = metaExtractColumns;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getOverlapSize}
         * @param overlapSize the value to be set.
         * @return {@code this}
         */
        public Builder overlapSize(java.lang.Number overlapSize) {
            this.overlapSize = overlapSize;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getOverlapSize}
         * @param overlapSize the value to be set.
         * @return {@code this}
         */
        public Builder overlapSize(com.aliyun.ros.cdk.core.IResolvable overlapSize) {
            this.overlapSize = overlapSize;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getPipelineCommercialCu}
         * @param pipelineCommercialCu the value to be set.
         * @return {@code this}
         */
        public Builder pipelineCommercialCu(java.lang.Number pipelineCommercialCu) {
            this.pipelineCommercialCu = pipelineCommercialCu;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getPipelineCommercialCu}
         * @param pipelineCommercialCu the value to be set.
         * @return {@code this}
         */
        public Builder pipelineCommercialCu(com.aliyun.ros.cdk.core.IResolvable pipelineCommercialCu) {
            this.pipelineCommercialCu = pipelineCommercialCu;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getPipelineCommercialType}
         * @param pipelineCommercialType the value to be set.
         * @return {@code this}
         */
        public Builder pipelineCommercialType(java.lang.String pipelineCommercialType) {
            this.pipelineCommercialType = pipelineCommercialType;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getPipelineCommercialType}
         * @param pipelineCommercialType the value to be set.
         * @return {@code this}
         */
        public Builder pipelineCommercialType(com.aliyun.ros.cdk.core.IResolvable pipelineCommercialType) {
            this.pipelineCommercialType = pipelineCommercialType;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getPipelineRetrieveRateLimitStrategy}
         * @param pipelineRetrieveRateLimitStrategy the value to be set.
         * @return {@code this}
         */
        public Builder pipelineRetrieveRateLimitStrategy(java.lang.String pipelineRetrieveRateLimitStrategy) {
            this.pipelineRetrieveRateLimitStrategy = pipelineRetrieveRateLimitStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getPipelineRetrieveRateLimitStrategy}
         * @param pipelineRetrieveRateLimitStrategy the value to be set.
         * @return {@code this}
         */
        public Builder pipelineRetrieveRateLimitStrategy(com.aliyun.ros.cdk.core.IResolvable pipelineRetrieveRateLimitStrategy) {
            this.pipelineRetrieveRateLimitStrategy = pipelineRetrieveRateLimitStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getRerankInstruct}
         * @param rerankInstruct the value to be set.
         * @return {@code this}
         */
        public Builder rerankInstruct(java.lang.String rerankInstruct) {
            this.rerankInstruct = rerankInstruct;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getRerankInstruct}
         * @param rerankInstruct the value to be set.
         * @return {@code this}
         */
        public Builder rerankInstruct(com.aliyun.ros.cdk.core.IResolvable rerankInstruct) {
            this.rerankInstruct = rerankInstruct;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getRerankMinScore}
         * @param rerankMinScore the value to be set.
         * @return {@code this}
         */
        public Builder rerankMinScore(java.lang.Number rerankMinScore) {
            this.rerankMinScore = rerankMinScore;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getRerankMinScore}
         * @param rerankMinScore the value to be set.
         * @return {@code this}
         */
        public Builder rerankMinScore(com.aliyun.ros.cdk.core.IResolvable rerankMinScore) {
            this.rerankMinScore = rerankMinScore;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getRerankMode}
         * @param rerankMode the value to be set.
         * @return {@code this}
         */
        public Builder rerankMode(java.lang.String rerankMode) {
            this.rerankMode = rerankMode;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getRerankMode}
         * @param rerankMode the value to be set.
         * @return {@code this}
         */
        public Builder rerankMode(com.aliyun.ros.cdk.core.IResolvable rerankMode) {
            this.rerankMode = rerankMode;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getRerankModelName}
         * @param rerankModelName the value to be set.
         * @return {@code this}
         */
        public Builder rerankModelName(java.lang.String rerankModelName) {
            this.rerankModelName = rerankModelName;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getRerankModelName}
         * @param rerankModelName the value to be set.
         * @return {@code this}
         */
        public Builder rerankModelName(com.aliyun.ros.cdk.core.IResolvable rerankModelName) {
            this.rerankModelName = rerankModelName;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getSeparator}
         * @param separator the value to be set.
         * @return {@code this}
         */
        public Builder separator(java.lang.String separator) {
            this.separator = separator;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getSeparator}
         * @param separator the value to be set.
         * @return {@code this}
         */
        public Builder separator(com.aliyun.ros.cdk.core.IResolvable separator) {
            this.separator = separator;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getSinkInstanceId}
         * @param sinkInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder sinkInstanceId(java.lang.String sinkInstanceId) {
            this.sinkInstanceId = sinkInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getSinkInstanceId}
         * @param sinkInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder sinkInstanceId(com.aliyun.ros.cdk.core.IResolvable sinkInstanceId) {
            this.sinkInstanceId = sinkInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getSinkRegion}
         * @param sinkRegion the value to be set.
         * @return {@code this}
         */
        public Builder sinkRegion(java.lang.String sinkRegion) {
            this.sinkRegion = sinkRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getSinkRegion}
         * @param sinkRegion the value to be set.
         * @return {@code this}
         */
        public Builder sinkRegion(com.aliyun.ros.cdk.core.IResolvable sinkRegion) {
            this.sinkRegion = sinkRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getSinkType}
         * @param sinkType the value to be set.
         * @return {@code this}
         */
        public Builder sinkType(java.lang.String sinkType) {
            this.sinkType = sinkType;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getSinkType}
         * @param sinkType the value to be set.
         * @return {@code this}
         */
        public Builder sinkType(com.aliyun.ros.cdk.core.IResolvable sinkType) {
            this.sinkType = sinkType;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getSparseSimilarityTopK}
         * @param sparseSimilarityTopK the value to be set.
         * @return {@code this}
         */
        public Builder sparseSimilarityTopK(java.lang.Number sparseSimilarityTopK) {
            this.sparseSimilarityTopK = sparseSimilarityTopK;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getSparseSimilarityTopK}
         * @param sparseSimilarityTopK the value to be set.
         * @return {@code this}
         */
        public Builder sparseSimilarityTopK(com.aliyun.ros.cdk.core.IResolvable sparseSimilarityTopK) {
            this.sparseSimilarityTopK = sparseSimilarityTopK;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getTable}
         * @param table the value to be set.
         * @return {@code this}
         */
        public Builder table(java.lang.String table) {
            this.table = table;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getTable}
         * @param table the value to be set.
         * @return {@code this}
         */
        public Builder table(com.aliyun.ros.cdk.core.IResolvable table) {
            this.table = table;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getTableIds}
         * @param tableIds the value to be set.
         * @return {@code this}
         */
        public Builder tableIds(com.aliyun.ros.cdk.core.IResolvable tableIds) {
            this.tableIds = tableIds;
            return this;
        }

        /**
         * Sets the value of {@link RosIndexProps#getTableIds}
         * @param tableIds the value to be set.
         * @return {@code this}
         */
        public Builder tableIds(java.util.List<? extends java.lang.Object> tableIds) {
            this.tableIds = tableIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosIndexProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosIndexProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosIndexProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosIndexProps {
        private final java.lang.Object name;
        private final java.lang.Object sourceType;
        private final java.lang.Object structureType;
        private final java.lang.Object workspaceId;
        private final java.lang.Object categoryIds;
        private final java.lang.Object chunkMode;
        private final java.lang.Object chunkSize;
        private final java.lang.Object connectId;
        private final java.lang.Object database;
        private final java.lang.Object denseSimilarityTopK;
        private final java.lang.Object description;
        private final java.lang.Object documentIds;
        private final java.lang.Object embeddingModelName;
        private final java.lang.Object enableHeaders;
        private final java.lang.Object enableRewrite;
        private final java.lang.Object knowledgeScene;
        private final java.lang.Object knowledgeType;
        private final java.lang.Object metaExtractColumns;
        private final java.lang.Object overlapSize;
        private final java.lang.Object pipelineCommercialCu;
        private final java.lang.Object pipelineCommercialType;
        private final java.lang.Object pipelineRetrieveRateLimitStrategy;
        private final java.lang.Object rerankInstruct;
        private final java.lang.Object rerankMinScore;
        private final java.lang.Object rerankMode;
        private final java.lang.Object rerankModelName;
        private final java.lang.Object separator;
        private final java.lang.Object sinkInstanceId;
        private final java.lang.Object sinkRegion;
        private final java.lang.Object sinkType;
        private final java.lang.Object sparseSimilarityTopK;
        private final java.lang.Object table;
        private final java.lang.Object tableIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceType = software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.structureType = software.amazon.jsii.Kernel.get(this, "structureType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workspaceId = software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.categoryIds = software.amazon.jsii.Kernel.get(this, "categoryIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chunkMode = software.amazon.jsii.Kernel.get(this, "chunkMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chunkSize = software.amazon.jsii.Kernel.get(this, "chunkSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectId = software.amazon.jsii.Kernel.get(this, "connectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.database = software.amazon.jsii.Kernel.get(this, "database", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.denseSimilarityTopK = software.amazon.jsii.Kernel.get(this, "denseSimilarityTopK", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.documentIds = software.amazon.jsii.Kernel.get(this, "documentIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.embeddingModelName = software.amazon.jsii.Kernel.get(this, "embeddingModelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableHeaders = software.amazon.jsii.Kernel.get(this, "enableHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableRewrite = software.amazon.jsii.Kernel.get(this, "enableRewrite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.knowledgeScene = software.amazon.jsii.Kernel.get(this, "knowledgeScene", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.knowledgeType = software.amazon.jsii.Kernel.get(this, "knowledgeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.metaExtractColumns = software.amazon.jsii.Kernel.get(this, "metaExtractColumns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.overlapSize = software.amazon.jsii.Kernel.get(this, "overlapSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pipelineCommercialCu = software.amazon.jsii.Kernel.get(this, "pipelineCommercialCu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pipelineCommercialType = software.amazon.jsii.Kernel.get(this, "pipelineCommercialType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pipelineRetrieveRateLimitStrategy = software.amazon.jsii.Kernel.get(this, "pipelineRetrieveRateLimitStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rerankInstruct = software.amazon.jsii.Kernel.get(this, "rerankInstruct", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rerankMinScore = software.amazon.jsii.Kernel.get(this, "rerankMinScore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rerankMode = software.amazon.jsii.Kernel.get(this, "rerankMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rerankModelName = software.amazon.jsii.Kernel.get(this, "rerankModelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.separator = software.amazon.jsii.Kernel.get(this, "separator", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sinkInstanceId = software.amazon.jsii.Kernel.get(this, "sinkInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sinkRegion = software.amazon.jsii.Kernel.get(this, "sinkRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sinkType = software.amazon.jsii.Kernel.get(this, "sinkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sparseSimilarityTopK = software.amazon.jsii.Kernel.get(this, "sparseSimilarityTopK", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.table = software.amazon.jsii.Kernel.get(this, "table", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tableIds = software.amazon.jsii.Kernel.get(this, "tableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.sourceType = java.util.Objects.requireNonNull(builder.sourceType, "sourceType is required");
            this.structureType = java.util.Objects.requireNonNull(builder.structureType, "structureType is required");
            this.workspaceId = java.util.Objects.requireNonNull(builder.workspaceId, "workspaceId is required");
            this.categoryIds = builder.categoryIds;
            this.chunkMode = builder.chunkMode;
            this.chunkSize = builder.chunkSize;
            this.connectId = builder.connectId;
            this.database = builder.database;
            this.denseSimilarityTopK = builder.denseSimilarityTopK;
            this.description = builder.description;
            this.documentIds = builder.documentIds;
            this.embeddingModelName = builder.embeddingModelName;
            this.enableHeaders = builder.enableHeaders;
            this.enableRewrite = builder.enableRewrite;
            this.knowledgeScene = builder.knowledgeScene;
            this.knowledgeType = builder.knowledgeType;
            this.metaExtractColumns = builder.metaExtractColumns;
            this.overlapSize = builder.overlapSize;
            this.pipelineCommercialCu = builder.pipelineCommercialCu;
            this.pipelineCommercialType = builder.pipelineCommercialType;
            this.pipelineRetrieveRateLimitStrategy = builder.pipelineRetrieveRateLimitStrategy;
            this.rerankInstruct = builder.rerankInstruct;
            this.rerankMinScore = builder.rerankMinScore;
            this.rerankMode = builder.rerankMode;
            this.rerankModelName = builder.rerankModelName;
            this.separator = builder.separator;
            this.sinkInstanceId = builder.sinkInstanceId;
            this.sinkRegion = builder.sinkRegion;
            this.sinkType = builder.sinkType;
            this.sparseSimilarityTopK = builder.sparseSimilarityTopK;
            this.table = builder.table;
            this.tableIds = builder.tableIds;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getSourceType() {
            return this.sourceType;
        }

        @Override
        public final java.lang.Object getStructureType() {
            return this.structureType;
        }

        @Override
        public final java.lang.Object getWorkspaceId() {
            return this.workspaceId;
        }

        @Override
        public final java.lang.Object getCategoryIds() {
            return this.categoryIds;
        }

        @Override
        public final java.lang.Object getChunkMode() {
            return this.chunkMode;
        }

        @Override
        public final java.lang.Object getChunkSize() {
            return this.chunkSize;
        }

        @Override
        public final java.lang.Object getConnectId() {
            return this.connectId;
        }

        @Override
        public final java.lang.Object getDatabase() {
            return this.database;
        }

        @Override
        public final java.lang.Object getDenseSimilarityTopK() {
            return this.denseSimilarityTopK;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDocumentIds() {
            return this.documentIds;
        }

        @Override
        public final java.lang.Object getEmbeddingModelName() {
            return this.embeddingModelName;
        }

        @Override
        public final java.lang.Object getEnableHeaders() {
            return this.enableHeaders;
        }

        @Override
        public final java.lang.Object getEnableRewrite() {
            return this.enableRewrite;
        }

        @Override
        public final java.lang.Object getKnowledgeScene() {
            return this.knowledgeScene;
        }

        @Override
        public final java.lang.Object getKnowledgeType() {
            return this.knowledgeType;
        }

        @Override
        public final java.lang.Object getMetaExtractColumns() {
            return this.metaExtractColumns;
        }

        @Override
        public final java.lang.Object getOverlapSize() {
            return this.overlapSize;
        }

        @Override
        public final java.lang.Object getPipelineCommercialCu() {
            return this.pipelineCommercialCu;
        }

        @Override
        public final java.lang.Object getPipelineCommercialType() {
            return this.pipelineCommercialType;
        }

        @Override
        public final java.lang.Object getPipelineRetrieveRateLimitStrategy() {
            return this.pipelineRetrieveRateLimitStrategy;
        }

        @Override
        public final java.lang.Object getRerankInstruct() {
            return this.rerankInstruct;
        }

        @Override
        public final java.lang.Object getRerankMinScore() {
            return this.rerankMinScore;
        }

        @Override
        public final java.lang.Object getRerankMode() {
            return this.rerankMode;
        }

        @Override
        public final java.lang.Object getRerankModelName() {
            return this.rerankModelName;
        }

        @Override
        public final java.lang.Object getSeparator() {
            return this.separator;
        }

        @Override
        public final java.lang.Object getSinkInstanceId() {
            return this.sinkInstanceId;
        }

        @Override
        public final java.lang.Object getSinkRegion() {
            return this.sinkRegion;
        }

        @Override
        public final java.lang.Object getSinkType() {
            return this.sinkType;
        }

        @Override
        public final java.lang.Object getSparseSimilarityTopK() {
            return this.sparseSimilarityTopK;
        }

        @Override
        public final java.lang.Object getTable() {
            return this.table;
        }

        @Override
        public final java.lang.Object getTableIds() {
            return this.tableIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("name", om.valueToTree(this.getName()));
            data.set("sourceType", om.valueToTree(this.getSourceType()));
            data.set("structureType", om.valueToTree(this.getStructureType()));
            data.set("workspaceId", om.valueToTree(this.getWorkspaceId()));
            if (this.getCategoryIds() != null) {
                data.set("categoryIds", om.valueToTree(this.getCategoryIds()));
            }
            if (this.getChunkMode() != null) {
                data.set("chunkMode", om.valueToTree(this.getChunkMode()));
            }
            if (this.getChunkSize() != null) {
                data.set("chunkSize", om.valueToTree(this.getChunkSize()));
            }
            if (this.getConnectId() != null) {
                data.set("connectId", om.valueToTree(this.getConnectId()));
            }
            if (this.getDatabase() != null) {
                data.set("database", om.valueToTree(this.getDatabase()));
            }
            if (this.getDenseSimilarityTopK() != null) {
                data.set("denseSimilarityTopK", om.valueToTree(this.getDenseSimilarityTopK()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDocumentIds() != null) {
                data.set("documentIds", om.valueToTree(this.getDocumentIds()));
            }
            if (this.getEmbeddingModelName() != null) {
                data.set("embeddingModelName", om.valueToTree(this.getEmbeddingModelName()));
            }
            if (this.getEnableHeaders() != null) {
                data.set("enableHeaders", om.valueToTree(this.getEnableHeaders()));
            }
            if (this.getEnableRewrite() != null) {
                data.set("enableRewrite", om.valueToTree(this.getEnableRewrite()));
            }
            if (this.getKnowledgeScene() != null) {
                data.set("knowledgeScene", om.valueToTree(this.getKnowledgeScene()));
            }
            if (this.getKnowledgeType() != null) {
                data.set("knowledgeType", om.valueToTree(this.getKnowledgeType()));
            }
            if (this.getMetaExtractColumns() != null) {
                data.set("metaExtractColumns", om.valueToTree(this.getMetaExtractColumns()));
            }
            if (this.getOverlapSize() != null) {
                data.set("overlapSize", om.valueToTree(this.getOverlapSize()));
            }
            if (this.getPipelineCommercialCu() != null) {
                data.set("pipelineCommercialCu", om.valueToTree(this.getPipelineCommercialCu()));
            }
            if (this.getPipelineCommercialType() != null) {
                data.set("pipelineCommercialType", om.valueToTree(this.getPipelineCommercialType()));
            }
            if (this.getPipelineRetrieveRateLimitStrategy() != null) {
                data.set("pipelineRetrieveRateLimitStrategy", om.valueToTree(this.getPipelineRetrieveRateLimitStrategy()));
            }
            if (this.getRerankInstruct() != null) {
                data.set("rerankInstruct", om.valueToTree(this.getRerankInstruct()));
            }
            if (this.getRerankMinScore() != null) {
                data.set("rerankMinScore", om.valueToTree(this.getRerankMinScore()));
            }
            if (this.getRerankMode() != null) {
                data.set("rerankMode", om.valueToTree(this.getRerankMode()));
            }
            if (this.getRerankModelName() != null) {
                data.set("rerankModelName", om.valueToTree(this.getRerankModelName()));
            }
            if (this.getSeparator() != null) {
                data.set("separator", om.valueToTree(this.getSeparator()));
            }
            if (this.getSinkInstanceId() != null) {
                data.set("sinkInstanceId", om.valueToTree(this.getSinkInstanceId()));
            }
            if (this.getSinkRegion() != null) {
                data.set("sinkRegion", om.valueToTree(this.getSinkRegion()));
            }
            if (this.getSinkType() != null) {
                data.set("sinkType", om.valueToTree(this.getSinkType()));
            }
            if (this.getSparseSimilarityTopK() != null) {
                data.set("sparseSimilarityTopK", om.valueToTree(this.getSparseSimilarityTopK()));
            }
            if (this.getTable() != null) {
                data.set("table", om.valueToTree(this.getTable()));
            }
            if (this.getTableIds() != null) {
                data.set("tableIds", om.valueToTree(this.getTableIds()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-bailian.RosIndexProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosIndexProps.Jsii$Proxy that = (RosIndexProps.Jsii$Proxy) o;

            if (!name.equals(that.name)) return false;
            if (!sourceType.equals(that.sourceType)) return false;
            if (!structureType.equals(that.structureType)) return false;
            if (!workspaceId.equals(that.workspaceId)) return false;
            if (this.categoryIds != null ? !this.categoryIds.equals(that.categoryIds) : that.categoryIds != null) return false;
            if (this.chunkMode != null ? !this.chunkMode.equals(that.chunkMode) : that.chunkMode != null) return false;
            if (this.chunkSize != null ? !this.chunkSize.equals(that.chunkSize) : that.chunkSize != null) return false;
            if (this.connectId != null ? !this.connectId.equals(that.connectId) : that.connectId != null) return false;
            if (this.database != null ? !this.database.equals(that.database) : that.database != null) return false;
            if (this.denseSimilarityTopK != null ? !this.denseSimilarityTopK.equals(that.denseSimilarityTopK) : that.denseSimilarityTopK != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.documentIds != null ? !this.documentIds.equals(that.documentIds) : that.documentIds != null) return false;
            if (this.embeddingModelName != null ? !this.embeddingModelName.equals(that.embeddingModelName) : that.embeddingModelName != null) return false;
            if (this.enableHeaders != null ? !this.enableHeaders.equals(that.enableHeaders) : that.enableHeaders != null) return false;
            if (this.enableRewrite != null ? !this.enableRewrite.equals(that.enableRewrite) : that.enableRewrite != null) return false;
            if (this.knowledgeScene != null ? !this.knowledgeScene.equals(that.knowledgeScene) : that.knowledgeScene != null) return false;
            if (this.knowledgeType != null ? !this.knowledgeType.equals(that.knowledgeType) : that.knowledgeType != null) return false;
            if (this.metaExtractColumns != null ? !this.metaExtractColumns.equals(that.metaExtractColumns) : that.metaExtractColumns != null) return false;
            if (this.overlapSize != null ? !this.overlapSize.equals(that.overlapSize) : that.overlapSize != null) return false;
            if (this.pipelineCommercialCu != null ? !this.pipelineCommercialCu.equals(that.pipelineCommercialCu) : that.pipelineCommercialCu != null) return false;
            if (this.pipelineCommercialType != null ? !this.pipelineCommercialType.equals(that.pipelineCommercialType) : that.pipelineCommercialType != null) return false;
            if (this.pipelineRetrieveRateLimitStrategy != null ? !this.pipelineRetrieveRateLimitStrategy.equals(that.pipelineRetrieveRateLimitStrategy) : that.pipelineRetrieveRateLimitStrategy != null) return false;
            if (this.rerankInstruct != null ? !this.rerankInstruct.equals(that.rerankInstruct) : that.rerankInstruct != null) return false;
            if (this.rerankMinScore != null ? !this.rerankMinScore.equals(that.rerankMinScore) : that.rerankMinScore != null) return false;
            if (this.rerankMode != null ? !this.rerankMode.equals(that.rerankMode) : that.rerankMode != null) return false;
            if (this.rerankModelName != null ? !this.rerankModelName.equals(that.rerankModelName) : that.rerankModelName != null) return false;
            if (this.separator != null ? !this.separator.equals(that.separator) : that.separator != null) return false;
            if (this.sinkInstanceId != null ? !this.sinkInstanceId.equals(that.sinkInstanceId) : that.sinkInstanceId != null) return false;
            if (this.sinkRegion != null ? !this.sinkRegion.equals(that.sinkRegion) : that.sinkRegion != null) return false;
            if (this.sinkType != null ? !this.sinkType.equals(that.sinkType) : that.sinkType != null) return false;
            if (this.sparseSimilarityTopK != null ? !this.sparseSimilarityTopK.equals(that.sparseSimilarityTopK) : that.sparseSimilarityTopK != null) return false;
            if (this.table != null ? !this.table.equals(that.table) : that.table != null) return false;
            return this.tableIds != null ? this.tableIds.equals(that.tableIds) : that.tableIds == null;
        }

        @Override
        public final int hashCode() {
            int result = this.name.hashCode();
            result = 31 * result + (this.sourceType.hashCode());
            result = 31 * result + (this.structureType.hashCode());
            result = 31 * result + (this.workspaceId.hashCode());
            result = 31 * result + (this.categoryIds != null ? this.categoryIds.hashCode() : 0);
            result = 31 * result + (this.chunkMode != null ? this.chunkMode.hashCode() : 0);
            result = 31 * result + (this.chunkSize != null ? this.chunkSize.hashCode() : 0);
            result = 31 * result + (this.connectId != null ? this.connectId.hashCode() : 0);
            result = 31 * result + (this.database != null ? this.database.hashCode() : 0);
            result = 31 * result + (this.denseSimilarityTopK != null ? this.denseSimilarityTopK.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.documentIds != null ? this.documentIds.hashCode() : 0);
            result = 31 * result + (this.embeddingModelName != null ? this.embeddingModelName.hashCode() : 0);
            result = 31 * result + (this.enableHeaders != null ? this.enableHeaders.hashCode() : 0);
            result = 31 * result + (this.enableRewrite != null ? this.enableRewrite.hashCode() : 0);
            result = 31 * result + (this.knowledgeScene != null ? this.knowledgeScene.hashCode() : 0);
            result = 31 * result + (this.knowledgeType != null ? this.knowledgeType.hashCode() : 0);
            result = 31 * result + (this.metaExtractColumns != null ? this.metaExtractColumns.hashCode() : 0);
            result = 31 * result + (this.overlapSize != null ? this.overlapSize.hashCode() : 0);
            result = 31 * result + (this.pipelineCommercialCu != null ? this.pipelineCommercialCu.hashCode() : 0);
            result = 31 * result + (this.pipelineCommercialType != null ? this.pipelineCommercialType.hashCode() : 0);
            result = 31 * result + (this.pipelineRetrieveRateLimitStrategy != null ? this.pipelineRetrieveRateLimitStrategy.hashCode() : 0);
            result = 31 * result + (this.rerankInstruct != null ? this.rerankInstruct.hashCode() : 0);
            result = 31 * result + (this.rerankMinScore != null ? this.rerankMinScore.hashCode() : 0);
            result = 31 * result + (this.rerankMode != null ? this.rerankMode.hashCode() : 0);
            result = 31 * result + (this.rerankModelName != null ? this.rerankModelName.hashCode() : 0);
            result = 31 * result + (this.separator != null ? this.separator.hashCode() : 0);
            result = 31 * result + (this.sinkInstanceId != null ? this.sinkInstanceId.hashCode() : 0);
            result = 31 * result + (this.sinkRegion != null ? this.sinkRegion.hashCode() : 0);
            result = 31 * result + (this.sinkType != null ? this.sinkType.hashCode() : 0);
            result = 31 * result + (this.sparseSimilarityTopK != null ? this.sparseSimilarityTopK.hashCode() : 0);
            result = 31 * result + (this.table != null ? this.table.hashCode() : 0);
            result = 31 * result + (this.tableIds != null ? this.tableIds.hashCode() : 0);
            return result;
        }
    }
}
