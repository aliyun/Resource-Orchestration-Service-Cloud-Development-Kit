package com.aliyun.ros.cdk.ram;

/**
 * Represents a logical RAM principal.
 * <p>
 * An IPrincipal describes a logical entity that can perform ACS API calls
 * against sets of resources, optionally under certain conditions.
 * <p>
 * Examples of principals are RAM objects that you create, such
 * as Users, Roles or Groups.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:59.293Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.IPrincipal")
@software.amazon.jsii.Jsii.Proxy(IPrincipal.Jsii$Proxy.class)
public interface IPrincipal extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.ram.IGrantable {

    /**
     * The principal to grant permissions to.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPrincipalName();

    /**
     * The principal type, such as 'Group', 'Role', 'User'.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getPrincipalType();

    /**
     * Add to the policy of this principal.
     * <p>
     * @param policyDocument This parameter is required.
     */
    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicy addToPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RosManagedPolicy.PolicyDocumentProperty policyDocument);

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.ram.IPrincipal.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The principal to grant permissions to.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.IPrincipal getGrantPrincipal() {
            return software.amazon.jsii.Kernel.get(this, "grantPrincipal", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.IPrincipal.class));
        }

        /**
         * The principal to grant permissions to.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getPrincipalName() {
            return software.amazon.jsii.Kernel.get(this, "principalName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * The principal type, such as 'Group', 'Role', 'User'.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.String getPrincipalType() {
            return software.amazon.jsii.Kernel.get(this, "principalType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Add to the policy of this principal.
         * <p>
         * @param policyDocument This parameter is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicy addToPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RosManagedPolicy.PolicyDocumentProperty policyDocument) {
            return software.amazon.jsii.Kernel.call(this, "addToPolicy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.ManagedPolicy.class), new Object[] { java.util.Objects.requireNonNull(policyDocument, "policyDocument is required") });
        }
    }

    /**
     * Internal default implementation for {@link IPrincipal}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IPrincipal, com.aliyun.ros.cdk.ram.IGrantable.Jsii$Default {

        /**
         * The principal to grant permissions to.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.IPrincipal getGrantPrincipal() {
            return software.amazon.jsii.Kernel.get(this, "grantPrincipal", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.IPrincipal.class));
        }

        /**
         * The principal to grant permissions to.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getPrincipalName() {
            return software.amazon.jsii.Kernel.get(this, "principalName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * The principal type, such as 'Group', 'Role', 'User'.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.String getPrincipalType() {
            return software.amazon.jsii.Kernel.get(this, "principalType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Add to the policy of this principal.
         * <p>
         * @param policyDocument This parameter is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.ManagedPolicy addToPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RosManagedPolicy.PolicyDocumentProperty policyDocument) {
            return software.amazon.jsii.Kernel.call(this, "addToPolicy", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.ManagedPolicy.class), new Object[] { java.util.Objects.requireNonNull(policyDocument, "policyDocument is required") });
        }
    }
}
