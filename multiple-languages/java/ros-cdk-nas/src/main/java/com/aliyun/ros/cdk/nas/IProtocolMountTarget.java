package com.aliyun.ros.cdk.nas;

/**
 * Represents a <code>ProtocolMountTarget</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.215Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.IProtocolMountTarget")
@software.amazon.jsii.Jsii.Proxy(IProtocolMountTarget.Jsii$Proxy.class)
public interface IProtocolMountTarget extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute ExportId: The protocol service exports directory ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrExportId();

    /**
     * Attribute FileSystemId: File system ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileSystemId();

    /**
     * Attribute ProtocolMountTargetDomain: The protocol mount target domain.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocolMountTargetDomain();

    /**
     * Attribute ProtocolServiceId: Protocol service ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocolServiceId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.ProtocolMountTargetProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.nas.IProtocolMountTarget.Jsii$Default {
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
         * Attribute ExportId: The protocol service exports directory ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrExportId() {
            return software.amazon.jsii.Kernel.get(this, "attrExportId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FileSystemId: File system ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileSystemId() {
            return software.amazon.jsii.Kernel.get(this, "attrFileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProtocolMountTargetDomain: The protocol mount target domain.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocolMountTargetDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrProtocolMountTargetDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProtocolServiceId: Protocol service ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocolServiceId() {
            return software.amazon.jsii.Kernel.get(this, "attrProtocolServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.ProtocolMountTargetProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nas.ProtocolMountTargetProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IProtocolMountTarget}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IProtocolMountTarget, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute ExportId: The protocol service exports directory ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrExportId() {
            return software.amazon.jsii.Kernel.get(this, "attrExportId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FileSystemId: File system ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileSystemId() {
            return software.amazon.jsii.Kernel.get(this, "attrFileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProtocolMountTargetDomain: The protocol mount target domain.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocolMountTargetDomain() {
            return software.amazon.jsii.Kernel.get(this, "attrProtocolMountTargetDomain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProtocolServiceId: Protocol service ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocolServiceId() {
            return software.amazon.jsii.Kernel.get(this, "attrProtocolServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.ProtocolMountTargetProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nas.ProtocolMountTargetProps.class));
        }
    }
}
