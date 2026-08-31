package com.aliyun.ros.cdk.bailian;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::Bailian::Index</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T07:16:16.827Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bailian.$Module.class, fqn = "@alicloud/ros-cdk-bailian.RosIndex")
public class RosIndex extends com.aliyun.ros.cdk.core.RosResource {

    protected RosIndex(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosIndex(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.bailian.RosIndex.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosIndex(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bailian.RosIndexProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceType() {
        return software.amazon.jsii.Kernel.get(this, "sourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceType", java.util.Objects.requireNonNull(value, "sourceType is required"));
    }

    /**
     */
    public void setSourceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceType", java.util.Objects.requireNonNull(value, "sourceType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getStructureType() {
        return software.amazon.jsii.Kernel.get(this, "structureType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStructureType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "structureType", java.util.Objects.requireNonNull(value, "structureType is required"));
    }

    /**
     */
    public void setStructureType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "structureType", java.util.Objects.requireNonNull(value, "structureType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "workspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkspaceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workspaceId", java.util.Objects.requireNonNull(value, "workspaceId is required"));
    }

    /**
     */
    public void setWorkspaceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workspaceId", java.util.Objects.requireNonNull(value, "workspaceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCategoryIds() {
        return software.amazon.jsii.Kernel.get(this, "categoryIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCategoryIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "categoryIds", value);
    }

    /**
     */
    public void setCategoryIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "categoryIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getChunkMode() {
        return software.amazon.jsii.Kernel.get(this, "chunkMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChunkMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "chunkMode", value);
    }

    /**
     */
    public void setChunkMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chunkMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getChunkSize() {
        return software.amazon.jsii.Kernel.get(this, "chunkSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChunkSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "chunkSize", value);
    }

    /**
     */
    public void setChunkSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chunkSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnectId() {
        return software.amazon.jsii.Kernel.get(this, "connectId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "connectId", value);
    }

    /**
     */
    public void setConnectId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDatabase() {
        return software.amazon.jsii.Kernel.get(this, "database", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDatabase(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "database", value);
    }

    /**
     */
    public void setDatabase(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "database", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDenseSimilarityTopK() {
        return software.amazon.jsii.Kernel.get(this, "denseSimilarityTopK", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDenseSimilarityTopK(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "denseSimilarityTopK", value);
    }

    /**
     */
    public void setDenseSimilarityTopK(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "denseSimilarityTopK", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDocumentIds() {
        return software.amazon.jsii.Kernel.get(this, "documentIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDocumentIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "documentIds", value);
    }

    /**
     */
    public void setDocumentIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "documentIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEmbeddingModelName() {
        return software.amazon.jsii.Kernel.get(this, "embeddingModelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEmbeddingModelName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "embeddingModelName", value);
    }

    /**
     */
    public void setEmbeddingModelName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "embeddingModelName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableHeaders() {
        return software.amazon.jsii.Kernel.get(this, "enableHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableHeaders(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableHeaders", value);
    }

    /**
     */
    public void setEnableHeaders(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableHeaders", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableRewrite() {
        return software.amazon.jsii.Kernel.get(this, "enableRewrite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableRewrite(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableRewrite", value);
    }

    /**
     */
    public void setEnableRewrite(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableRewrite", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKnowledgeScene() {
        return software.amazon.jsii.Kernel.get(this, "knowledgeScene", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKnowledgeScene(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "knowledgeScene", value);
    }

    /**
     */
    public void setKnowledgeScene(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "knowledgeScene", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKnowledgeType() {
        return software.amazon.jsii.Kernel.get(this, "knowledgeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKnowledgeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "knowledgeType", value);
    }

    /**
     */
    public void setKnowledgeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "knowledgeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMetaExtractColumns() {
        return software.amazon.jsii.Kernel.get(this, "metaExtractColumns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMetaExtractColumns(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "metaExtractColumns", value);
    }

    /**
     */
    public void setMetaExtractColumns(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.bailian.RosIndex.MetaExtractColumnsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.bailian.RosIndex.MetaExtractColumnsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "metaExtractColumns", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOverlapSize() {
        return software.amazon.jsii.Kernel.get(this, "overlapSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOverlapSize(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "overlapSize", value);
    }

    /**
     */
    public void setOverlapSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "overlapSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPipelineCommercialCu() {
        return software.amazon.jsii.Kernel.get(this, "pipelineCommercialCu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPipelineCommercialCu(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "pipelineCommercialCu", value);
    }

    /**
     */
    public void setPipelineCommercialCu(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pipelineCommercialCu", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPipelineCommercialType() {
        return software.amazon.jsii.Kernel.get(this, "pipelineCommercialType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPipelineCommercialType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pipelineCommercialType", value);
    }

    /**
     */
    public void setPipelineCommercialType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pipelineCommercialType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPipelineRetrieveRateLimitStrategy() {
        return software.amazon.jsii.Kernel.get(this, "pipelineRetrieveRateLimitStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPipelineRetrieveRateLimitStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "pipelineRetrieveRateLimitStrategy", value);
    }

    /**
     */
    public void setPipelineRetrieveRateLimitStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pipelineRetrieveRateLimitStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRerankInstruct() {
        return software.amazon.jsii.Kernel.get(this, "rerankInstruct", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRerankInstruct(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rerankInstruct", value);
    }

    /**
     */
    public void setRerankInstruct(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rerankInstruct", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRerankMinScore() {
        return software.amazon.jsii.Kernel.get(this, "rerankMinScore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRerankMinScore(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "rerankMinScore", value);
    }

    /**
     */
    public void setRerankMinScore(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rerankMinScore", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRerankMode() {
        return software.amazon.jsii.Kernel.get(this, "rerankMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRerankMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rerankMode", value);
    }

    /**
     */
    public void setRerankMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rerankMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRerankModelName() {
        return software.amazon.jsii.Kernel.get(this, "rerankModelName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRerankModelName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rerankModelName", value);
    }

    /**
     */
    public void setRerankModelName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rerankModelName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSeparator() {
        return software.amazon.jsii.Kernel.get(this, "separator", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSeparator(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "separator", value);
    }

    /**
     */
    public void setSeparator(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "separator", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSinkInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "sinkInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSinkInstanceId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sinkInstanceId", value);
    }

    /**
     */
    public void setSinkInstanceId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sinkInstanceId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSinkRegion() {
        return software.amazon.jsii.Kernel.get(this, "sinkRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSinkRegion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sinkRegion", value);
    }

    /**
     */
    public void setSinkRegion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sinkRegion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSinkType() {
        return software.amazon.jsii.Kernel.get(this, "sinkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSinkType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sinkType", value);
    }

    /**
     */
    public void setSinkType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sinkType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSparseSimilarityTopK() {
        return software.amazon.jsii.Kernel.get(this, "sparseSimilarityTopK", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSparseSimilarityTopK(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "sparseSimilarityTopK", value);
    }

    /**
     */
    public void setSparseSimilarityTopK(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sparseSimilarityTopK", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTable() {
        return software.amazon.jsii.Kernel.get(this, "table", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTable(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "table", value);
    }

    /**
     */
    public void setTable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "table", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTableIds() {
        return software.amazon.jsii.Kernel.get(this, "tableIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTableIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tableIds", value);
    }

    /**
     */
    public void setTableIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "tableIds", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bailian.$Module.class, fqn = "@alicloud/ros-cdk-bailian.RosIndex.MetaExtractColumnsProperty")
    @software.amazon.jsii.Jsii.Proxy(MetaExtractColumnsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MetaExtractColumnsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDesc() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableLlm() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnableSearch() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MetaExtractColumnsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MetaExtractColumnsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MetaExtractColumnsProperty> {
            java.lang.Object key;
            java.lang.Object type;
            java.lang.Object desc;
            java.lang.Object enableLlm;
            java.lang.Object enableSearch;
            java.lang.Object value;

            /**
             * Sets the value of {@link MetaExtractColumnsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link MetaExtractColumnsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link MetaExtractColumnsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link MetaExtractColumnsProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link MetaExtractColumnsProperty#getDesc}
             * @param desc the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder desc(java.lang.String desc) {
                this.desc = desc;
                return this;
            }

            /**
             * Sets the value of {@link MetaExtractColumnsProperty#getDesc}
             * @param desc the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder desc(com.aliyun.ros.cdk.core.IResolvable desc) {
                this.desc = desc;
                return this;
            }

            /**
             * Sets the value of {@link MetaExtractColumnsProperty#getEnableLlm}
             * @param enableLlm the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableLlm(java.lang.Boolean enableLlm) {
                this.enableLlm = enableLlm;
                return this;
            }

            /**
             * Sets the value of {@link MetaExtractColumnsProperty#getEnableLlm}
             * @param enableLlm the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableLlm(com.aliyun.ros.cdk.core.IResolvable enableLlm) {
                this.enableLlm = enableLlm;
                return this;
            }

            /**
             * Sets the value of {@link MetaExtractColumnsProperty#getEnableSearch}
             * @param enableSearch the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableSearch(java.lang.Boolean enableSearch) {
                this.enableSearch = enableSearch;
                return this;
            }

            /**
             * Sets the value of {@link MetaExtractColumnsProperty#getEnableSearch}
             * @param enableSearch the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enableSearch(com.aliyun.ros.cdk.core.IResolvable enableSearch) {
                this.enableSearch = enableSearch;
                return this;
            }

            /**
             * Sets the value of {@link MetaExtractColumnsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link MetaExtractColumnsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MetaExtractColumnsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MetaExtractColumnsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MetaExtractColumnsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MetaExtractColumnsProperty {
            private final java.lang.Object key;
            private final java.lang.Object type;
            private final java.lang.Object desc;
            private final java.lang.Object enableLlm;
            private final java.lang.Object enableSearch;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.desc = software.amazon.jsii.Kernel.get(this, "desc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableLlm = software.amazon.jsii.Kernel.get(this, "enableLlm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.enableSearch = software.amazon.jsii.Kernel.get(this, "enableSearch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.desc = builder.desc;
                this.enableLlm = builder.enableLlm;
                this.enableSearch = builder.enableSearch;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getDesc() {
                return this.desc;
            }

            @Override
            public final java.lang.Object getEnableLlm() {
                return this.enableLlm;
            }

            @Override
            public final java.lang.Object getEnableSearch() {
                return this.enableSearch;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                data.set("type", om.valueToTree(this.getType()));
                if (this.getDesc() != null) {
                    data.set("desc", om.valueToTree(this.getDesc()));
                }
                if (this.getEnableLlm() != null) {
                    data.set("enableLlm", om.valueToTree(this.getEnableLlm()));
                }
                if (this.getEnableSearch() != null) {
                    data.set("enableSearch", om.valueToTree(this.getEnableSearch()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-bailian.RosIndex.MetaExtractColumnsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MetaExtractColumnsProperty.Jsii$Proxy that = (MetaExtractColumnsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                if (!type.equals(that.type)) return false;
                if (this.desc != null ? !this.desc.equals(that.desc) : that.desc != null) return false;
                if (this.enableLlm != null ? !this.enableLlm.equals(that.enableLlm) : that.enableLlm != null) return false;
                if (this.enableSearch != null ? !this.enableSearch.equals(that.enableSearch) : that.enableSearch != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.type.hashCode());
                result = 31 * result + (this.desc != null ? this.desc.hashCode() : 0);
                result = 31 * result + (this.enableLlm != null ? this.enableLlm.hashCode() : 0);
                result = 31 * result + (this.enableSearch != null ? this.enableSearch.hashCode() : 0);
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.bailian.RosIndex}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.bailian.RosIndex> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.bailian.RosIndexProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.bailian.RosIndexProps.Builder();
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceType This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceType This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param structureType This parameter is required.
         */
        public Builder structureType(final java.lang.String structureType) {
            this.props.structureType(structureType);
            return this;
        }
        /**
         * @return {@code this}
         * @param structureType This parameter is required.
         */
        public Builder structureType(final com.aliyun.ros.cdk.core.IResolvable structureType) {
            this.props.structureType(structureType);
            return this;
        }

        /**
         * @return {@code this}
         * @param workspaceId This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param workspaceId This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param categoryIds This parameter is required.
         */
        public Builder categoryIds(final com.aliyun.ros.cdk.core.IResolvable categoryIds) {
            this.props.categoryIds(categoryIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param categoryIds This parameter is required.
         */
        public Builder categoryIds(final java.util.List<? extends java.lang.Object> categoryIds) {
            this.props.categoryIds(categoryIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param chunkMode This parameter is required.
         */
        public Builder chunkMode(final java.lang.String chunkMode) {
            this.props.chunkMode(chunkMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param chunkMode This parameter is required.
         */
        public Builder chunkMode(final com.aliyun.ros.cdk.core.IResolvable chunkMode) {
            this.props.chunkMode(chunkMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param chunkSize This parameter is required.
         */
        public Builder chunkSize(final java.lang.Number chunkSize) {
            this.props.chunkSize(chunkSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param chunkSize This parameter is required.
         */
        public Builder chunkSize(final com.aliyun.ros.cdk.core.IResolvable chunkSize) {
            this.props.chunkSize(chunkSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param connectId This parameter is required.
         */
        public Builder connectId(final java.lang.String connectId) {
            this.props.connectId(connectId);
            return this;
        }
        /**
         * @return {@code this}
         * @param connectId This parameter is required.
         */
        public Builder connectId(final com.aliyun.ros.cdk.core.IResolvable connectId) {
            this.props.connectId(connectId);
            return this;
        }

        /**
         * @return {@code this}
         * @param database This parameter is required.
         */
        public Builder database(final java.lang.String database) {
            this.props.database(database);
            return this;
        }
        /**
         * @return {@code this}
         * @param database This parameter is required.
         */
        public Builder database(final com.aliyun.ros.cdk.core.IResolvable database) {
            this.props.database(database);
            return this;
        }

        /**
         * @return {@code this}
         * @param denseSimilarityTopK This parameter is required.
         */
        public Builder denseSimilarityTopK(final java.lang.Number denseSimilarityTopK) {
            this.props.denseSimilarityTopK(denseSimilarityTopK);
            return this;
        }
        /**
         * @return {@code this}
         * @param denseSimilarityTopK This parameter is required.
         */
        public Builder denseSimilarityTopK(final com.aliyun.ros.cdk.core.IResolvable denseSimilarityTopK) {
            this.props.denseSimilarityTopK(denseSimilarityTopK);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param documentIds This parameter is required.
         */
        public Builder documentIds(final com.aliyun.ros.cdk.core.IResolvable documentIds) {
            this.props.documentIds(documentIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param documentIds This parameter is required.
         */
        public Builder documentIds(final java.util.List<? extends java.lang.Object> documentIds) {
            this.props.documentIds(documentIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param embeddingModelName This parameter is required.
         */
        public Builder embeddingModelName(final java.lang.String embeddingModelName) {
            this.props.embeddingModelName(embeddingModelName);
            return this;
        }
        /**
         * @return {@code this}
         * @param embeddingModelName This parameter is required.
         */
        public Builder embeddingModelName(final com.aliyun.ros.cdk.core.IResolvable embeddingModelName) {
            this.props.embeddingModelName(embeddingModelName);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableHeaders This parameter is required.
         */
        public Builder enableHeaders(final java.lang.Boolean enableHeaders) {
            this.props.enableHeaders(enableHeaders);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableHeaders This parameter is required.
         */
        public Builder enableHeaders(final com.aliyun.ros.cdk.core.IResolvable enableHeaders) {
            this.props.enableHeaders(enableHeaders);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableRewrite This parameter is required.
         */
        public Builder enableRewrite(final java.lang.Boolean enableRewrite) {
            this.props.enableRewrite(enableRewrite);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableRewrite This parameter is required.
         */
        public Builder enableRewrite(final com.aliyun.ros.cdk.core.IResolvable enableRewrite) {
            this.props.enableRewrite(enableRewrite);
            return this;
        }

        /**
         * @return {@code this}
         * @param knowledgeScene This parameter is required.
         */
        public Builder knowledgeScene(final java.lang.String knowledgeScene) {
            this.props.knowledgeScene(knowledgeScene);
            return this;
        }
        /**
         * @return {@code this}
         * @param knowledgeScene This parameter is required.
         */
        public Builder knowledgeScene(final com.aliyun.ros.cdk.core.IResolvable knowledgeScene) {
            this.props.knowledgeScene(knowledgeScene);
            return this;
        }

        /**
         * @return {@code this}
         * @param knowledgeType This parameter is required.
         */
        public Builder knowledgeType(final java.lang.String knowledgeType) {
            this.props.knowledgeType(knowledgeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param knowledgeType This parameter is required.
         */
        public Builder knowledgeType(final com.aliyun.ros.cdk.core.IResolvable knowledgeType) {
            this.props.knowledgeType(knowledgeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param metaExtractColumns This parameter is required.
         */
        public Builder metaExtractColumns(final com.aliyun.ros.cdk.core.IResolvable metaExtractColumns) {
            this.props.metaExtractColumns(metaExtractColumns);
            return this;
        }
        /**
         * @return {@code this}
         * @param metaExtractColumns This parameter is required.
         */
        public Builder metaExtractColumns(final java.util.List<? extends java.lang.Object> metaExtractColumns) {
            this.props.metaExtractColumns(metaExtractColumns);
            return this;
        }

        /**
         * @return {@code this}
         * @param overlapSize This parameter is required.
         */
        public Builder overlapSize(final java.lang.Number overlapSize) {
            this.props.overlapSize(overlapSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param overlapSize This parameter is required.
         */
        public Builder overlapSize(final com.aliyun.ros.cdk.core.IResolvable overlapSize) {
            this.props.overlapSize(overlapSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param pipelineCommercialCu This parameter is required.
         */
        public Builder pipelineCommercialCu(final java.lang.Number pipelineCommercialCu) {
            this.props.pipelineCommercialCu(pipelineCommercialCu);
            return this;
        }
        /**
         * @return {@code this}
         * @param pipelineCommercialCu This parameter is required.
         */
        public Builder pipelineCommercialCu(final com.aliyun.ros.cdk.core.IResolvable pipelineCommercialCu) {
            this.props.pipelineCommercialCu(pipelineCommercialCu);
            return this;
        }

        /**
         * @return {@code this}
         * @param pipelineCommercialType This parameter is required.
         */
        public Builder pipelineCommercialType(final java.lang.String pipelineCommercialType) {
            this.props.pipelineCommercialType(pipelineCommercialType);
            return this;
        }
        /**
         * @return {@code this}
         * @param pipelineCommercialType This parameter is required.
         */
        public Builder pipelineCommercialType(final com.aliyun.ros.cdk.core.IResolvable pipelineCommercialType) {
            this.props.pipelineCommercialType(pipelineCommercialType);
            return this;
        }

        /**
         * @return {@code this}
         * @param pipelineRetrieveRateLimitStrategy This parameter is required.
         */
        public Builder pipelineRetrieveRateLimitStrategy(final java.lang.String pipelineRetrieveRateLimitStrategy) {
            this.props.pipelineRetrieveRateLimitStrategy(pipelineRetrieveRateLimitStrategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param pipelineRetrieveRateLimitStrategy This parameter is required.
         */
        public Builder pipelineRetrieveRateLimitStrategy(final com.aliyun.ros.cdk.core.IResolvable pipelineRetrieveRateLimitStrategy) {
            this.props.pipelineRetrieveRateLimitStrategy(pipelineRetrieveRateLimitStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param rerankInstruct This parameter is required.
         */
        public Builder rerankInstruct(final java.lang.String rerankInstruct) {
            this.props.rerankInstruct(rerankInstruct);
            return this;
        }
        /**
         * @return {@code this}
         * @param rerankInstruct This parameter is required.
         */
        public Builder rerankInstruct(final com.aliyun.ros.cdk.core.IResolvable rerankInstruct) {
            this.props.rerankInstruct(rerankInstruct);
            return this;
        }

        /**
         * @return {@code this}
         * @param rerankMinScore This parameter is required.
         */
        public Builder rerankMinScore(final java.lang.Number rerankMinScore) {
            this.props.rerankMinScore(rerankMinScore);
            return this;
        }
        /**
         * @return {@code this}
         * @param rerankMinScore This parameter is required.
         */
        public Builder rerankMinScore(final com.aliyun.ros.cdk.core.IResolvable rerankMinScore) {
            this.props.rerankMinScore(rerankMinScore);
            return this;
        }

        /**
         * @return {@code this}
         * @param rerankMode This parameter is required.
         */
        public Builder rerankMode(final java.lang.String rerankMode) {
            this.props.rerankMode(rerankMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param rerankMode This parameter is required.
         */
        public Builder rerankMode(final com.aliyun.ros.cdk.core.IResolvable rerankMode) {
            this.props.rerankMode(rerankMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param rerankModelName This parameter is required.
         */
        public Builder rerankModelName(final java.lang.String rerankModelName) {
            this.props.rerankModelName(rerankModelName);
            return this;
        }
        /**
         * @return {@code this}
         * @param rerankModelName This parameter is required.
         */
        public Builder rerankModelName(final com.aliyun.ros.cdk.core.IResolvable rerankModelName) {
            this.props.rerankModelName(rerankModelName);
            return this;
        }

        /**
         * @return {@code this}
         * @param separator This parameter is required.
         */
        public Builder separator(final java.lang.String separator) {
            this.props.separator(separator);
            return this;
        }
        /**
         * @return {@code this}
         * @param separator This parameter is required.
         */
        public Builder separator(final com.aliyun.ros.cdk.core.IResolvable separator) {
            this.props.separator(separator);
            return this;
        }

        /**
         * @return {@code this}
         * @param sinkInstanceId This parameter is required.
         */
        public Builder sinkInstanceId(final java.lang.String sinkInstanceId) {
            this.props.sinkInstanceId(sinkInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param sinkInstanceId This parameter is required.
         */
        public Builder sinkInstanceId(final com.aliyun.ros.cdk.core.IResolvable sinkInstanceId) {
            this.props.sinkInstanceId(sinkInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param sinkRegion This parameter is required.
         */
        public Builder sinkRegion(final java.lang.String sinkRegion) {
            this.props.sinkRegion(sinkRegion);
            return this;
        }
        /**
         * @return {@code this}
         * @param sinkRegion This parameter is required.
         */
        public Builder sinkRegion(final com.aliyun.ros.cdk.core.IResolvable sinkRegion) {
            this.props.sinkRegion(sinkRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param sinkType This parameter is required.
         */
        public Builder sinkType(final java.lang.String sinkType) {
            this.props.sinkType(sinkType);
            return this;
        }
        /**
         * @return {@code this}
         * @param sinkType This parameter is required.
         */
        public Builder sinkType(final com.aliyun.ros.cdk.core.IResolvable sinkType) {
            this.props.sinkType(sinkType);
            return this;
        }

        /**
         * @return {@code this}
         * @param sparseSimilarityTopK This parameter is required.
         */
        public Builder sparseSimilarityTopK(final java.lang.Number sparseSimilarityTopK) {
            this.props.sparseSimilarityTopK(sparseSimilarityTopK);
            return this;
        }
        /**
         * @return {@code this}
         * @param sparseSimilarityTopK This parameter is required.
         */
        public Builder sparseSimilarityTopK(final com.aliyun.ros.cdk.core.IResolvable sparseSimilarityTopK) {
            this.props.sparseSimilarityTopK(sparseSimilarityTopK);
            return this;
        }

        /**
         * @return {@code this}
         * @param table This parameter is required.
         */
        public Builder table(final java.lang.String table) {
            this.props.table(table);
            return this;
        }
        /**
         * @return {@code this}
         * @param table This parameter is required.
         */
        public Builder table(final com.aliyun.ros.cdk.core.IResolvable table) {
            this.props.table(table);
            return this;
        }

        /**
         * @return {@code this}
         * @param tableIds This parameter is required.
         */
        public Builder tableIds(final com.aliyun.ros.cdk.core.IResolvable tableIds) {
            this.props.tableIds(tableIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param tableIds This parameter is required.
         */
        public Builder tableIds(final java.util.List<? extends java.lang.Object> tableIds) {
            this.props.tableIds(tableIds);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.bailian.RosIndex}.
         */
        @Override
        public com.aliyun.ros.cdk.bailian.RosIndex build() {
            return new com.aliyun.ros.cdk.bailian.RosIndex(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
