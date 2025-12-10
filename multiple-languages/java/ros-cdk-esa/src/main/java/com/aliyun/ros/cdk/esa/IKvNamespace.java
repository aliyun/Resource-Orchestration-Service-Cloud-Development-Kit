package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>KvNamespace</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.543Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IKvNamespace")
@software.amazon.jsii.Jsii.Proxy(IKvNamespace.Jsii$Proxy.class)
public interface IKvNamespace extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Description: The description of the namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute KvCapacity: The available capacity of the namespace.
     * <p>
     * Unit: bytes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKvCapacity();

    /**
     * Attribute KvCapacityString: The available capacity of the namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKvCapacityString();

    /**
     * Attribute KvCapacityUsed: The used capacity of the namespace.
     * <p>
     * Unit: bytes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKvCapacityUsed();

    /**
     * Attribute KvCapacityUsedString: The used capacity of the namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKvCapacityUsedString();

    /**
     * Attribute KvNamespace: The name of the namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrKvNamespace();

    /**
     * Attribute NamespaceId: The ID of the namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaceId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.KvNamespaceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IKvNamespace.Jsii$Default {
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
         * Attribute Description: The description of the namespace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KvCapacity: The available capacity of the namespace.
         * <p>
         * Unit: bytes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKvCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrKvCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KvCapacityString: The available capacity of the namespace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKvCapacityString() {
            return software.amazon.jsii.Kernel.get(this, "attrKvCapacityString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KvCapacityUsed: The used capacity of the namespace.
         * <p>
         * Unit: bytes.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKvCapacityUsed() {
            return software.amazon.jsii.Kernel.get(this, "attrKvCapacityUsed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KvCapacityUsedString: The used capacity of the namespace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKvCapacityUsedString() {
            return software.amazon.jsii.Kernel.get(this, "attrKvCapacityUsedString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KvNamespace: The name of the namespace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrKvNamespace() {
            return software.amazon.jsii.Kernel.get(this, "attrKvNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NamespaceId: The ID of the namespace.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.KvNamespaceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.KvNamespaceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IKvNamespace}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IKvNamespace, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Description: The description of the namespace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KvCapacity: The available capacity of the namespace.
         * <p>
         * Unit: bytes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKvCapacity() {
            return software.amazon.jsii.Kernel.get(this, "attrKvCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KvCapacityString: The available capacity of the namespace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKvCapacityString() {
            return software.amazon.jsii.Kernel.get(this, "attrKvCapacityString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KvCapacityUsed: The used capacity of the namespace.
         * <p>
         * Unit: bytes.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKvCapacityUsed() {
            return software.amazon.jsii.Kernel.get(this, "attrKvCapacityUsed", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KvCapacityUsedString: The used capacity of the namespace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKvCapacityUsedString() {
            return software.amazon.jsii.Kernel.get(this, "attrKvCapacityUsedString", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute KvNamespace: The name of the namespace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrKvNamespace() {
            return software.amazon.jsii.Kernel.get(this, "attrKvNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute NamespaceId: The ID of the namespace.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaceId() {
            return software.amazon.jsii.Kernel.get(this, "attrNamespaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.KvNamespaceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.KvNamespaceProps.class));
        }
    }
}
