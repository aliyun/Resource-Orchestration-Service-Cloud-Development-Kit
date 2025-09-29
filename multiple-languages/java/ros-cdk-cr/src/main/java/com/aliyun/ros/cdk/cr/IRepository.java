package com.aliyun.ros.cdk.cr;

/**
 * Represents a <code>Repository</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:22.721Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.IRepository")
@software.amazon.jsii.Jsii.Proxy(IRepository.Jsii$Proxy.class)
public interface IRepository extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId();

    /**
     * Attribute RepoId: The repository ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoId();

    /**
     * Attribute RepoName: The name of the repository.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoName();

    /**
     * Attribute RepoNamespace: The name of the namespace to which the repository belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoNamespace();

    /**
     * Attribute RepoType: The type of the repository.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.RepositoryProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.cr.IRepository.Jsii$Default {
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
         * Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepoId: The repository ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoId() {
            return software.amazon.jsii.Kernel.get(this, "attrRepoId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepoName: The name of the repository.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoName() {
            return software.amazon.jsii.Kernel.get(this, "attrRepoName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepoNamespace: The name of the namespace to which the repository belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoNamespace() {
            return software.amazon.jsii.Kernel.get(this, "attrRepoNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepoType: The type of the repository.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoType() {
            return software.amazon.jsii.Kernel.get(this, "attrRepoType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.RepositoryProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cr.RepositoryProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IRepository}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IRepository, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
            return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepoId: The repository ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoId() {
            return software.amazon.jsii.Kernel.get(this, "attrRepoId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepoName: The name of the repository.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoName() {
            return software.amazon.jsii.Kernel.get(this, "attrRepoName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepoNamespace: The name of the namespace to which the repository belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoNamespace() {
            return software.amazon.jsii.Kernel.get(this, "attrRepoNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RepoType: The type of the repository.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoType() {
            return software.amazon.jsii.Kernel.get(this, "attrRepoType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.RepositoryProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cr.RepositoryProps.class));
        }
    }
}
