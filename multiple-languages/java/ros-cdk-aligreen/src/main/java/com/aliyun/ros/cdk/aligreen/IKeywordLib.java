package com.aliyun.ros.cdk.aligreen;

/**
 * Represents a <code>KeywordLib</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.380Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.IKeywordLib")
@software.amazon.jsii.Jsii.Proxy(IKeywordLib.Jsii$Proxy.class)
public interface IKeywordLib extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BizTypes: The business scenario.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizTypes();

    /**
     * Attribute Category: The category of the text library.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory();

    /**
     * Attribute Enable: Specifies whether to enable text library.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnable();

    /**
     * Attribute KeywordLibId: The ID of the primary key of the keyword library.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeywordLibId();

    /**
     * Attribute KeywordLibName: The name of the keyword library defined by the customer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeywordLibName();

    /**
     * Attribute Language: Language used by the text Library.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLanguage();

    /**
     * Attribute LibType: The category of the text library in each moderation scenario.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLibType();

    /**
     * Attribute MatchMode: The matching method.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMatchMode();

    /**
     * Attribute ResourceType: The moderation scenario to which the text library applies.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.KeywordLibProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.aligreen.IKeywordLib.Jsii$Default {
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
         * Attribute BizTypes: The business scenario.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrBizTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: The category of the text library.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Enable: Specifies whether to enable text library.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeywordLibId: The ID of the primary key of the keyword library.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeywordLibId() {
            return software.amazon.jsii.Kernel.get(this, "attrKeywordLibId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeywordLibName: The name of the keyword library defined by the customer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeywordLibName() {
            return software.amazon.jsii.Kernel.get(this, "attrKeywordLibName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Language: Language used by the text Library.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLanguage() {
            return software.amazon.jsii.Kernel.get(this, "attrLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LibType: The category of the text library in each moderation scenario.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLibType() {
            return software.amazon.jsii.Kernel.get(this, "attrLibType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MatchMode: The matching method.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMatchMode() {
            return software.amazon.jsii.Kernel.get(this, "attrMatchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceType: The moderation scenario to which the text library applies.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.KeywordLibProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.aligreen.KeywordLibProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IKeywordLib}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IKeywordLib, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute BizTypes: The business scenario.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizTypes() {
            return software.amazon.jsii.Kernel.get(this, "attrBizTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Category: The category of the text library.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
            return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Enable: Specifies whether to enable text library.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnable() {
            return software.amazon.jsii.Kernel.get(this, "attrEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeywordLibId: The ID of the primary key of the keyword library.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeywordLibId() {
            return software.amazon.jsii.Kernel.get(this, "attrKeywordLibId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KeywordLibName: The name of the keyword library defined by the customer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKeywordLibName() {
            return software.amazon.jsii.Kernel.get(this, "attrKeywordLibName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Language: Language used by the text Library.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLanguage() {
            return software.amazon.jsii.Kernel.get(this, "attrLanguage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LibType: The category of the text library in each moderation scenario.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLibType() {
            return software.amazon.jsii.Kernel.get(this, "attrLibType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MatchMode: The matching method.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMatchMode() {
            return software.amazon.jsii.Kernel.get(this, "attrMatchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceType: The moderation scenario to which the text library applies.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.KeywordLibProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.aligreen.KeywordLibProps.class));
        }
    }
}
