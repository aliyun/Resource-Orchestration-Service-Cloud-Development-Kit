package com.aliyun.ros.cdk.ram;

/**
 * Represents a <code>SecurityPreference</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:28.387Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.ISecurityPreference")
@software.amazon.jsii.Jsii.Proxy(ISecurityPreference.Jsii$Proxy.class)
public interface ISecurityPreference extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AllowUserToChangePassword: Specifies whether RAM users can change their passwords.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToChangePassword();

    /**
     * Attribute AllowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToManageAccessKeys();

    /**
     * Attribute AllowUserToManageMFADevices: Specifies whether RAM users can manage their MFA devices.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToManageMfaDevices();

    /**
     * Attribute AllowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToManagePublicKeys();

    /**
     * Attribute EnableSaveMFATicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableSaveMfaTicket();

    /**
     * Attribute LoginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoginNetworkMasks();

    /**
     * Attribute LoginSessionDuration: The validity period of the logon session of the RAM user.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoginSessionDuration();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.SecurityPreferenceProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ram.ISecurityPreference.Jsii$Default {
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
         * Attribute AllowUserToChangePassword: Specifies whether RAM users can change their passwords.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToChangePassword() {
            return software.amazon.jsii.Kernel.get(this, "attrAllowUserToChangePassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AllowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToManageAccessKeys() {
            return software.amazon.jsii.Kernel.get(this, "attrAllowUserToManageAccessKeys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AllowUserToManageMFADevices: Specifies whether RAM users can manage their MFA devices.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToManageMfaDevices() {
            return software.amazon.jsii.Kernel.get(this, "attrAllowUserToManageMfaDevices", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AllowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToManagePublicKeys() {
            return software.amazon.jsii.Kernel.get(this, "attrAllowUserToManagePublicKeys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableSaveMFATicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableSaveMfaTicket() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableSaveMfaTicket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoginNetworkMasks() {
            return software.amazon.jsii.Kernel.get(this, "attrLoginNetworkMasks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoginSessionDuration: The validity period of the logon session of the RAM user.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoginSessionDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrLoginSessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.SecurityPreferenceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.SecurityPreferenceProps.class));
        }
    }

    /**
     * Internal default implementation for {@link ISecurityPreference}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends ISecurityPreference, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
         * Attribute AllowUserToChangePassword: Specifies whether RAM users can change their passwords.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToChangePassword() {
            return software.amazon.jsii.Kernel.get(this, "attrAllowUserToChangePassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AllowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToManageAccessKeys() {
            return software.amazon.jsii.Kernel.get(this, "attrAllowUserToManageAccessKeys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AllowUserToManageMFADevices: Specifies whether RAM users can manage their MFA devices.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToManageMfaDevices() {
            return software.amazon.jsii.Kernel.get(this, "attrAllowUserToManageMfaDevices", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute AllowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAllowUserToManagePublicKeys() {
            return software.amazon.jsii.Kernel.get(this, "attrAllowUserToManagePublicKeys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute EnableSaveMFATicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableSaveMfaTicket() {
            return software.amazon.jsii.Kernel.get(this, "attrEnableSaveMfaTicket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoginNetworkMasks() {
            return software.amazon.jsii.Kernel.get(this, "attrLoginNetworkMasks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute LoginSessionDuration: The validity period of the logon session of the RAM user.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoginSessionDuration() {
            return software.amazon.jsii.Kernel.get(this, "attrLoginSessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.SecurityPreferenceProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.SecurityPreferenceProps.class));
        }
    }
}
