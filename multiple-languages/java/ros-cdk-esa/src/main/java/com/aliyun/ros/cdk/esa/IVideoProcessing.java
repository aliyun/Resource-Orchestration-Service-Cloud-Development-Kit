package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>VideoProcessing</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:50.037Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IVideoProcessing")
@software.amazon.jsii.Jsii.Proxy(IVideoProcessing.Jsii$Proxy.class)
public interface IVideoProcessing extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ConfigId: Config Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId();

    /**
     * Attribute ConfigType: The configuration type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType();

    /**
     * Attribute FlvSeekEnd: Custom FLV end parameters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlvSeekEnd();

    /**
     * Attribute FlvSeekStart: Custom FLV start parameters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlvSeekStart();

    /**
     * Attribute FlvVideoSeekMode: FLV drag mode.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlvVideoSeekMode();

    /**
     * Attribute Mp4SeekEnd: Custom mp4 end parameters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMp4SeekEnd();

    /**
     * Attribute Mp4SeekStart: Custom mp4 start parameters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMp4SeekStart();

    /**
     * Attribute Rule: Rule content, using conditional expressions to match user requests.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule();

    /**
     * Attribute RuleEnable: Rule switch.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleEnable();

    /**
     * Attribute RuleName: Rule name.
     * <p>
     * When adding global configuration, this parameter does not need to be set.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName();

    /**
     * Attribute Sequence: The rule execution order prioritizes lower numerical values.
     * <p>
     * It is only applicable when setting or modifying the order of individual rule configurations.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence();

    /**
     * Attribute SiteVersion: The version number of the site configuration.
     * <p>
     * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion();

    /**
     * Attribute VideoSeekEnable: Drag and drop the play function switch.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoSeekEnable();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.VideoProcessingProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IVideoProcessing.Jsii$Default {
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
         * Attribute ConfigId: Config Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigType: The configuration type.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlvSeekEnd: Custom FLV end parameters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlvSeekEnd() {
            return software.amazon.jsii.Kernel.get(this, "attrFlvSeekEnd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlvSeekStart: Custom FLV start parameters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlvSeekStart() {
            return software.amazon.jsii.Kernel.get(this, "attrFlvSeekStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlvVideoSeekMode: FLV drag mode.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlvVideoSeekMode() {
            return software.amazon.jsii.Kernel.get(this, "attrFlvVideoSeekMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Mp4SeekEnd: Custom mp4 end parameters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMp4SeekEnd() {
            return software.amazon.jsii.Kernel.get(this, "attrMp4SeekEnd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Mp4SeekStart: Custom mp4 start parameters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMp4SeekStart() {
            return software.amazon.jsii.Kernel.get(this, "attrMp4SeekStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Rule: Rule content, using conditional expressions to match user requests.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule() {
            return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleEnable: Rule switch.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Sequence: The rule execution order prioritizes lower numerical values.
         * <p>
         * It is only applicable when setting or modifying the order of individual rule configurations.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
            return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteVersion: The version number of the site configuration.
         * <p>
         * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoSeekEnable: Drag and drop the play function switch.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoSeekEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoSeekEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.VideoProcessingProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.VideoProcessingProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IVideoProcessing}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IVideoProcessing, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ConfigId: Config Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ConfigType: The configuration type.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigType() {
            return software.amazon.jsii.Kernel.get(this, "attrConfigType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlvSeekEnd: Custom FLV end parameters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlvSeekEnd() {
            return software.amazon.jsii.Kernel.get(this, "attrFlvSeekEnd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlvSeekStart: Custom FLV start parameters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlvSeekStart() {
            return software.amazon.jsii.Kernel.get(this, "attrFlvSeekStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FlvVideoSeekMode: FLV drag mode.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlvVideoSeekMode() {
            return software.amazon.jsii.Kernel.get(this, "attrFlvVideoSeekMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Mp4SeekEnd: Custom mp4 end parameters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMp4SeekEnd() {
            return software.amazon.jsii.Kernel.get(this, "attrMp4SeekEnd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Mp4SeekStart: Custom mp4 start parameters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMp4SeekStart() {
            return software.amazon.jsii.Kernel.get(this, "attrMp4SeekStart", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Rule: Rule content, using conditional expressions to match user requests.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRule() {
            return software.amazon.jsii.Kernel.get(this, "attrRule", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleEnable: Rule switch.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RuleName: Rule name.
         * <p>
         * When adding global configuration, this parameter does not need to be set.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRuleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Sequence: The rule execution order prioritizes lower numerical values.
         * <p>
         * It is only applicable when setting or modifying the order of individual rule configurations.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSequence() {
            return software.amazon.jsii.Kernel.get(this, "attrSequence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteVersion: The version number of the site configuration.
         * <p>
         * For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute VideoSeekEnable: Drag and drop the play function switch.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrVideoSeekEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrVideoSeekEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.VideoProcessingProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.VideoProcessingProps.class));
        }
    }
}
