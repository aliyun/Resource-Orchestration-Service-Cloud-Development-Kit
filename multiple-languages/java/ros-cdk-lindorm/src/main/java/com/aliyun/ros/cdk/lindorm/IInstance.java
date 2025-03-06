package com.aliyun.ros.cdk.lindorm;

/**
 * Represents a <code>Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.852Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.lindorm.$Module.class, fqn = "@alicloud/ros-cdk-lindorm.IInstance")
@software.amazon.jsii.Jsii.Proxy(IInstance.Jsii$Proxy.class)
public interface IInstance extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AuthInfos: The list of the Lindorm instance auth infos.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthInfos();

    /**
     * Attribute InstanceId: The ID of the Lindorm instance that is created.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute JdbcUrlList: The list of the jdbc connection address.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrJdbcUrlList();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.lindorm.InstanceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.lindorm.IInstance.Jsii$Default {
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
         * Attribute AuthInfos: The list of the Lindorm instance auth infos.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthInfos() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the Lindorm instance that is created.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JdbcUrlList: The list of the jdbc connection address.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrJdbcUrlList() {
            return software.amazon.jsii.Kernel.get(this, "attrJdbcUrlList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.lindorm.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.lindorm.InstanceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IInstance}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IInstance, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AuthInfos: The list of the Lindorm instance auth infos.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthInfos() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute InstanceId: The ID of the Lindorm instance that is created.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute JdbcUrlList: The list of the jdbc connection address.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrJdbcUrlList() {
            return software.amazon.jsii.Kernel.get(this, "attrJdbcUrlList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.lindorm.InstanceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.lindorm.InstanceProps.class));
        }
    }
}
