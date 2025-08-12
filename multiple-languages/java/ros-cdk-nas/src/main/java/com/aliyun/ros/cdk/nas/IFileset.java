package com.aliyun.ros.cdk.nas;

/**
 * Represents a <code>Fileset</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.743Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.IFileset")
@software.amazon.jsii.Jsii.Proxy(IFileset.Jsii$Proxy.class)
public interface IFileset extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute FileSystemId: File system ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileSystemId();

    /**
     * Attribute FileSystemPath: File system path.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileSystemPath();

    /**
     * Attribute FsetId: Fileset ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrFsetId();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.FilesetProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.nas.IFileset.Jsii$Default {
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
         * Attribute FileSystemId: File system ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileSystemId() {
            return software.amazon.jsii.Kernel.get(this, "attrFileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FileSystemPath: File system path.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileSystemPath() {
            return software.amazon.jsii.Kernel.get(this, "attrFileSystemPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FsetId: Fileset ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrFsetId() {
            return software.amazon.jsii.Kernel.get(this, "attrFsetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.FilesetProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nas.FilesetProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IFileset}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IFileset, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute FileSystemId: File system ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileSystemId() {
            return software.amazon.jsii.Kernel.get(this, "attrFileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FileSystemPath: File system path.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileSystemPath() {
            return software.amazon.jsii.Kernel.get(this, "attrFileSystemPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute FsetId: Fileset ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrFsetId() {
            return software.amazon.jsii.Kernel.get(this, "attrFsetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.FilesetProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nas.FilesetProps.class));
        }
    }
}
