package com.aliyun.ros.cdk.alb;

/**
 * A ROS resource type:  `ALIYUN::ALB::SecurityPolicy`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:40.972Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.SecurityPolicy")
public class SecurityPolicy extends com.aliyun.ros.cdk.core.Resource {

    protected SecurityPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SecurityPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ALB::SecurityPolicy`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public SecurityPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.SecurityPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ALB::SecurityPolicy`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public SecurityPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.alb.SecurityPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SecurityPolicyId: The ID of the security policy.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityPolicyId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.alb.SecurityPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.alb.SecurityPolicy> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.alb.SecurityPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.alb.SecurityPolicyProps.Builder();
        }

        /**
         * Property ciphers: The supported cipher suites, which are determined by the TLS protocol version.
         * <p>
         * The specified cipher suites must be supported by at least one TLS protocol version that you specify.
         * Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
         * <p>
         * @return {@code this}
         * @param ciphers Property ciphers: The supported cipher suites, which are determined by the TLS protocol version. This parameter is required.
         */
        public Builder ciphers(final com.aliyun.ros.cdk.core.IResolvable ciphers) {
            this.props.ciphers(ciphers);
            return this;
        }
        /**
         * Property ciphers: The supported cipher suites, which are determined by the TLS protocol version.
         * <p>
         * The specified cipher suites must be supported by at least one TLS protocol version that you specify.
         * Note For example, if you set the TLSVersions parameter to TLSv1.3, you must specify cipher suites that are supported by TLS 1.3.
         * <p>
         * @return {@code this}
         * @param ciphers Property ciphers: The supported cipher suites, which are determined by the TLS protocol version. This parameter is required.
         */
        public Builder ciphers(final java.util.List<? extends java.lang.Object> ciphers) {
            this.props.ciphers(ciphers);
            return this;
        }

        /**
         * Property securityPolicyName: The name of the security policy.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         * (.), underscores (_), and hyphens (-). The name must start with a letter.
         * <p>
         * @return {@code this}
         * @param securityPolicyName Property securityPolicyName: The name of the security policy. This parameter is required.
         */
        public Builder securityPolicyName(final java.lang.String securityPolicyName) {
            this.props.securityPolicyName(securityPolicyName);
            return this;
        }
        /**
         * Property securityPolicyName: The name of the security policy.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         * (.), underscores (_), and hyphens (-). The name must start with a letter.
         * <p>
         * @return {@code this}
         * @param securityPolicyName Property securityPolicyName: The name of the security policy. This parameter is required.
         */
        public Builder securityPolicyName(final com.aliyun.ros.cdk.core.IResolvable securityPolicyName) {
            this.props.securityPolicyName(securityPolicyName);
            return this;
        }

        /**
         * Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol.
         * <p>
         * Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
         * <p>
         * @return {@code this}
         * @param tlsVersions Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. This parameter is required.
         */
        public Builder tlsVersions(final com.aliyun.ros.cdk.core.IResolvable tlsVersions) {
            this.props.tlsVersions(tlsVersions);
            return this;
        }
        /**
         * Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol.
         * <p>
         * Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3 and so on.
         * <p>
         * @return {@code this}
         * @param tlsVersions Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol. This parameter is required.
         */
        public Builder tlsVersions(final java.util.List<? extends java.lang.Object> tlsVersions) {
            this.props.tlsVersions(tlsVersions);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.alb.SecurityPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.alb.SecurityPolicy build() {
            return new com.aliyun.ros.cdk.alb.SecurityPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
