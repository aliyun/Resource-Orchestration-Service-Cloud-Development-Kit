package com.aliyun.ros.cdk.cms;

/**
 * Represents a <code>Namespace</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.698Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.INamespace")
@software.amazon.jsii.Jsii.Proxy(INamespace.Jsii$Proxy.class)
public interface INamespace extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute CreateTime: The timestamp that was generated when the namespace was created.
     * <p>
     * Unit: milliseconds.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The description of the namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute ModifyTime: The timestamp that was generated when the namespace was last modified.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime();

    /**
     * Attribute Namespace: The namespace for the Alibaba Cloud service.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace();

    /**
     * Attribute Specification: The data retention period of the namespace.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>cms.s1.large: Data storage duration is 15 days.</li>
     * <li>cms.s1.xlarge: Data storage duration is 32 days.</li>
     * <li>cms.s1.2xlarge: Data storage duration 63 days.</li>
     * <li>cms.s1.3xlarge: Data storage duration 93 days.</li>
     * <li>cms.s1.6xlarge: Data storage duration 185 days.</li>
     * <li>cms.s1.12xlarge: Data storage duration 376 days.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpecification();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.NamespaceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cms.INamespace.Jsii$Default {
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
         * Attribute CreateTime: The timestamp that was generated when the namespace was created.
         * <p>
         * Unit: milliseconds.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the namespace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifyTime: The timestamp that was generated when the namespace was last modified.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Namespace: The namespace for the Alibaba Cloud service.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Specification: The data retention period of the namespace.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>cms.s1.large: Data storage duration is 15 days.</li>
         * <li>cms.s1.xlarge: Data storage duration is 32 days.</li>
         * <li>cms.s1.2xlarge: Data storage duration 63 days.</li>
         * <li>cms.s1.3xlarge: Data storage duration 93 days.</li>
         * <li>cms.s1.6xlarge: Data storage duration 185 days.</li>
         * <li>cms.s1.12xlarge: Data storage duration 376 days.</li>
         * </ul>
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpecification() {
            return software.amazon.jsii.Kernel.get(this, "attrSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.NamespaceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.NamespaceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link INamespace}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends INamespace, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute CreateTime: The timestamp that was generated when the namespace was created.
         * <p>
         * Unit: milliseconds.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the namespace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifyTime: The timestamp that was generated when the namespace was last modified.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Namespace: The namespace for the Alibaba Cloud service.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Specification: The data retention period of the namespace.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>cms.s1.large: Data storage duration is 15 days.</li>
         * <li>cms.s1.xlarge: Data storage duration is 32 days.</li>
         * <li>cms.s1.2xlarge: Data storage duration 63 days.</li>
         * <li>cms.s1.3xlarge: Data storage duration 93 days.</li>
         * <li>cms.s1.6xlarge: Data storage duration 185 days.</li>
         * <li>cms.s1.12xlarge: Data storage duration 376 days.</li>
         * </ul>
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpecification() {
            return software.amazon.jsii.Kernel.get(this, "attrSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.NamespaceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.NamespaceProps.class));
        }
    }
}
