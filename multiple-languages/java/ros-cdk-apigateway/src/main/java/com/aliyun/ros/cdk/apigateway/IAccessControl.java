package com.aliyun.ros.cdk.apigateway;

/**
 * Represents a <code>AccessControl</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:45.634Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.IAccessControl")
@software.amazon.jsii.Jsii.Proxy(IAccessControl.Jsii$Proxy.class)
public interface IAccessControl extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AccessControlListName: The name of the ACL.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessControlListName();

    /**
     * Attribute AclEntrys: Information list of access control policies.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclEntrys();

    /**
     * Attribute AclId: The ID of the access control list (ACL).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId();

    /**
     * Attribute AddressIpVersion: The IP version.
     * <p>
     * Valid values: ipv4 and ipv6.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.AccessControlProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.apigateway.IAccessControl.Jsii$Default {
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
         * Attribute AccessControlListName: The name of the ACL.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessControlListName() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessControlListName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclEntrys: Information list of access control policies.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclEntrys() {
            return software.amazon.jsii.Kernel.get(this, "attrAclEntrys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclId: The ID of the access control list (ACL).
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
            return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AddressIpVersion: The IP version.
         * <p>
         * Valid values: ipv4 and ipv6.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.AccessControlProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.AccessControlProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IAccessControl}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IAccessControl, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AccessControlListName: The name of the ACL.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessControlListName() {
            return software.amazon.jsii.Kernel.get(this, "attrAccessControlListName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclEntrys: Information list of access control policies.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclEntrys() {
            return software.amazon.jsii.Kernel.get(this, "attrAclEntrys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AclId: The ID of the access control list (ACL).
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
            return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AddressIpVersion: The IP version.
         * <p>
         * Valid values: ipv4 and ipv6.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddressIpVersion() {
            return software.amazon.jsii.Kernel.get(this, "attrAddressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.AccessControlProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.AccessControlProps.class));
        }
    }
}
