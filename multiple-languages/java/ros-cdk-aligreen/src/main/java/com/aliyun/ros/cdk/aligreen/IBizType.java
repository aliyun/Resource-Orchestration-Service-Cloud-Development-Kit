package com.aliyun.ros.cdk.aligreen;

/**
 * Represents a <code>BizType</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:34.314Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.aligreen.$Module.class, fqn = "@alicloud/ros-cdk-aligreen.IBizType")
@software.amazon.jsii.Jsii.Proxy(IBizType.Jsii$Proxy.class)
public interface IBizType extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BizTypeName: The name of the business scenario defined by the customer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizTypeName();

    /**
     * Attribute CiteTemplate: Specifies whether to import the configuration of an industry template.
     * <p>
     * Default value: false.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiteTemplate();

    /**
     * Attribute Description: The description of the business scenario defined by the customer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute IndustryInfo: The industry classification.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndustryInfo();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.BizTypeProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.aligreen.IBizType.Jsii$Default {
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute BizTypeName: The name of the business scenario defined by the customer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizTypeName() {
            return software.amazon.jsii.Kernel.get(this, "attrBizTypeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CiteTemplate: Specifies whether to import the configuration of an industry template.
         * <p>
         * Default value: false.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiteTemplate() {
            return software.amazon.jsii.Kernel.get(this, "attrCiteTemplate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the business scenario defined by the customer.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IndustryInfo: The industry classification.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndustryInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrIndustryInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.BizTypeProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.aligreen.BizTypeProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IBizType}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IBizType, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute BizTypeName: The name of the business scenario defined by the customer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizTypeName() {
            return software.amazon.jsii.Kernel.get(this, "attrBizTypeName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CiteTemplate: Specifies whether to import the configuration of an industry template.
         * <p>
         * Default value: false.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiteTemplate() {
            return software.amazon.jsii.Kernel.get(this, "attrCiteTemplate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the business scenario defined by the customer.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IndustryInfo: The industry classification.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIndustryInfo() {
            return software.amazon.jsii.Kernel.get(this, "attrIndustryInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.aligreen.BizTypeProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.aligreen.BizTypeProps.class));
        }
    }
}
