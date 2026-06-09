package com.aliyun.ros.cdk.agentrun;

/**
 * Represents a <code>Template</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:20:40.740Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.agentrun.$Module.class, fqn = "@alicloud/ros-cdk-agentrun.ITemplate")
@software.amazon.jsii.Jsii.Proxy(ITemplate.Jsii$Proxy.class)
public interface ITemplate extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute TemplateArn: The ARN of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateArn();

    /**
     * Attribute TemplateId: The ID of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateId();

    /**
     * Attribute TemplateName: The name of the template.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateName();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.agentrun.TemplateProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.agentrun.ITemplate.Jsii$Default {
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
         * Attribute TemplateArn: The ARN of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateArn() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateId: The ID of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateId() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateName: The name of the template.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateName() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.agentrun.TemplateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.agentrun.TemplateProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ITemplate}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ITemplate, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute TemplateArn: The ARN of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateArn() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateId: The ID of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateId() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute TemplateName: The name of the template.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTemplateName() {
            return software.amazon.jsii.Kernel.get(this, "attrTemplateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.agentrun.TemplateProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.agentrun.TemplateProps.class));
        }
    }
}
