package com.aliyun.ros.cdk.ga.datasource;

/**
 * Represents a <code>Acls</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.228Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.datasource.IAcls")
@software.amazon.jsii.Jsii.Proxy(IAcls.Jsii$Proxy.class)
public interface IAcls extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AclIds: The list of acl IDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclIds();

    /**
     * Attribute Acls: The list of acls.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcls();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.datasource.AclsProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ga.datasource.IAcls.Jsii$Default {
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
         * Attribute AclIds: The list of acl IDs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclIds() {
            return software.amazon.jsii.Kernel.get(this, "attrAclIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Acls: The list of acls.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcls() {
            return software.amazon.jsii.Kernel.get(this, "attrAcls", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.datasource.AclsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.datasource.AclsProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAcls}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAcls, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AclIds: The list of acl IDs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclIds() {
            return software.amazon.jsii.Kernel.get(this, "attrAclIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Acls: The list of acls.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAcls() {
            return software.amazon.jsii.Kernel.get(this, "attrAcls", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.datasource.AclsProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.datasource.AclsProps.class));
        }
    }
}
