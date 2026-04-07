package com.aliyun.ros.cdk.pai;

/**
 * Represents a <code>ModelVersion</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:28.375Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.IModelVersion")
@software.amazon.jsii.Jsii.Proxy(IModelVersion.Jsii$Proxy.class)
public interface IModelVersion extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ApprovalStatus: Admission status, with values as follows:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrApprovalStatus();

    /**
     * Attribute ExtraInfo: Other information.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtraInfo();

    /**
     * Attribute FormatType: Model format, possible values:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFormatType();

    /**
     * Attribute FrameworkType: Model framework, possible values:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFrameworkType();

    /**
     * Attribute GmtCreateTime: Create a model UTC time in the format ISO8601.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtCreateTime();

    /**
     * Attribute GmtModifiedTime: Finally, update the model UTC time in the format iso8601.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime();

    /**
     * Attribute InferenceSpec: Describes how to apply to downstream inference services, such as processors and containers of EAS.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInferenceSpec();

    /**
     * Attribute Labels: List of model version labels.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels();

    /**
     * Attribute Metrics: Model indicators.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetrics();

    /**
     * Attribute Options: Extension field.
     * <p>
     * The JsonString type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOptions();

    /**
     * Attribute OwnerId: The Alibaba Cloud account ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId();

    /**
     * Attribute SourceId: Source ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceId();

    /**
     * Attribute SourceType: Model source type, possible values:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType();

    /**
     * Attribute TrainingSpec: Training configuration.
     * <p>
     * Configuration for fine-tuning, incremental training.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrainingSpec();

    /**
     * Attribute Uri: Model version URI, that is, the location where the model is stored.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri();

    /**
     * Attribute UserId: The user ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId();

    /**
     * Attribute VersionDescription: Model version description.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionDescription();

    /**
     * Attribute VersionName: Model version.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ModelVersionProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pai.IModelVersion.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ApprovalStatus: Admission status, with values as follows:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrApprovalStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrApprovalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExtraInfo: Other information.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtraInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrExtraInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FormatType: Model format, possible values:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFormatType() {
            return software.amazon.jsii.Kernel.get(this, "attrFormatType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FrameworkType: Model framework, possible values:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFrameworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrFrameworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtCreateTime: Create a model UTC time in the format ISO8601.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModifiedTime: Finally, update the model UTC time in the format iso8601.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InferenceSpec: Describes how to apply to downstream inference services, such as processors and containers of EAS.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInferenceSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrInferenceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Labels: List of model version labels.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
            return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Metrics: Model indicators.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetrics() {
            return software.amazon.jsii.Kernel.get(this, "attrMetrics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Options: Extension field.
         * <p>
         * The JsonString type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOptions() {
            return software.amazon.jsii.Kernel.get(this, "attrOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OwnerId: The Alibaba Cloud account ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceId: Source ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceType: Model source type, possible values:.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TrainingSpec: Training configuration.
         * <p>
         * Configuration for fine-tuning, incremental training.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrainingSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrTrainingSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uri: Model version URI, that is, the location where the model is stored.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri() {
            return software.amazon.jsii.Kernel.get(this, "attrUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The user ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionDescription: Model version description.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionName: Model version.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionName() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ModelVersionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.ModelVersionProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IModelVersion}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IModelVersion, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute ApprovalStatus: Admission status, with values as follows:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrApprovalStatus() {
            return software.amazon.jsii.Kernel.get(this, "attrApprovalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ExtraInfo: Other information.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExtraInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrExtraInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FormatType: Model format, possible values:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFormatType() {
            return software.amazon.jsii.Kernel.get(this, "attrFormatType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FrameworkType: Model framework, possible values:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFrameworkType() {
            return software.amazon.jsii.Kernel.get(this, "attrFrameworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtCreateTime: Create a model UTC time in the format ISO8601.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute GmtModifiedTime: Finally, update the model UTC time in the format iso8601.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime() {
            return software.amazon.jsii.Kernel.get(this, "attrGmtModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InferenceSpec: Describes how to apply to downstream inference services, such as processors and containers of EAS.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInferenceSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrInferenceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Labels: List of model version labels.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
            return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Metrics: Model indicators.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetrics() {
            return software.amazon.jsii.Kernel.get(this, "attrMetrics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Options: Extension field.
         * <p>
         * The JsonString type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOptions() {
            return software.amazon.jsii.Kernel.get(this, "attrOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute OwnerId: The Alibaba Cloud account ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId() {
            return software.amazon.jsii.Kernel.get(this, "attrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceId: Source ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceId() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceType: Model source type, possible values:.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TrainingSpec: Training configuration.
         * <p>
         * Configuration for fine-tuning, incremental training.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTrainingSpec() {
            return software.amazon.jsii.Kernel.get(this, "attrTrainingSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Uri: Model version URI, that is, the location where the model is stored.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUri() {
            return software.amazon.jsii.Kernel.get(this, "attrUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UserId: The user ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
            return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionDescription: Model version description.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VersionName: Model version.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionName() {
            return software.amazon.jsii.Kernel.get(this, "attrVersionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ModelVersionProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.ModelVersionProps.class));
        }
    }
}
