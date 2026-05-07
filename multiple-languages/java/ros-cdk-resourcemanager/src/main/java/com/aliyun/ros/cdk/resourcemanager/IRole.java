package com.aliyun.ros.cdk.resourcemanager;

/**
 * Represents a <code>Role</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:53.537Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.IRole")
@software.amazon.jsii.Jsii.Proxy(IRole.Jsii$Proxy.class)
public interface IRole extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute Arn: The resource descriptor of the role.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn();

    /**
     * Attribute AssumeRolePolicyDocument: The content of the permissions strategy that plays a role.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssumeRolePolicyDocument();

    /**
     * Attribute CreateTime: Role creation time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Description: The description of the Resource Manager role.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription();

    /**
     * Attribute MaxSessionDuration: Role maximum session time.
     * <p>
     * Valid values: [3600-43200].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxSessionDuration();

    /**
     * Attribute RoleId: This ID of Resource Manager role.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleId();

    /**
     * Attribute RoleName: Role Name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleName();

    /**
     * Attribute UpdateDate: Role update time.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateDate();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.RoleProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.resourcemanager.IRole.Jsii$Default {
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
         * Attribute Arn: The resource descriptor of the role.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AssumeRolePolicyDocument: The content of the permissions strategy that plays a role.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssumeRolePolicyDocument() {
            return software.amazon.jsii.Kernel.get(this, "attrAssumeRolePolicyDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Role creation time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the Resource Manager role.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxSessionDuration: Role maximum session time.
         * <p>
         * Valid values: [3600-43200].
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxSessionDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxSessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoleId: This ID of Resource Manager role.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleId() {
            return software.amazon.jsii.Kernel.get(this, "attrRoleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoleName: Role Name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateDate: Role update time.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateDate() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.RoleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.RoleProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IRole}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IRole, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute Arn: The resource descriptor of the role.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
            return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AssumeRolePolicyDocument: The content of the permissions strategy that plays a role.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAssumeRolePolicyDocument() {
            return software.amazon.jsii.Kernel.get(this, "attrAssumeRolePolicyDocument", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: Role creation time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Description: The description of the Resource Manager role.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
            return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute MaxSessionDuration: Role maximum session time.
         * <p>
         * Valid values: [3600-43200].
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaxSessionDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrMaxSessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoleId: This ID of Resource Manager role.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleId() {
            return software.amazon.jsii.Kernel.get(this, "attrRoleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RoleName: Role Name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRoleName() {
            return software.amazon.jsii.Kernel.get(this, "attrRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateDate: Role update time.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateDate() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.RoleProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.RoleProps.class));
        }
    }
}
