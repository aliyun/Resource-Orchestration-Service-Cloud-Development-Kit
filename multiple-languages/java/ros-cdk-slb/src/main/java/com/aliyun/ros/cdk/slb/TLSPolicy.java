package com.aliyun.ros.cdk.slb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SLB::TLSPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:10.652Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.TLSPolicy")
public class TLSPolicy extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.slb.ITLSPolicy {

    protected TLSPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TLSPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public TLSPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.TLSPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public TLSPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.TLSPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Ciphers: The supported cipher suites, which are determined by the TLS protocol version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCiphers() {
        return software.amazon.jsii.Kernel.get(this, "attrCiphers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: Creation time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The ID of the policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TLSPolicyName: The name of the TLS policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "attrTlsPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TlsVersions: The version of the TLS protocol.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsVersions() {
        return software.amazon.jsii.Kernel.get(this, "attrTlsVersions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.TLSPolicyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.TLSPolicyProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.TLSPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.TLSPolicy> {
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
        private final com.aliyun.ros.cdk.slb.TLSPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.slb.TLSPolicyProps.Builder();
        }

        /**
         * Property ciphers: The supported cipher suites, which are determined by the TLS protocol version.
         * <p>
         * You can specify at most 32 cipher suites.TLS 1.0 and TLS 1.1 support the following cipher suites:
         * ECDHE-ECDSA-AES128-SHA
         * ECDHE-ECDSA-AES256-SHA
         * ECDHE-RSA-AES128-SHA
         * ECDHE-RSA-AES256-SHA
         * AES128-SHA
         * AES256-SHA
         * DES-CBC3-SHA
         * TLS 1.2 supports the following cipher suites:
         * ECDHE-ECDSA-AES128-SHA
         * ECDHE-ECDSA-AES256-SHA
         * ECDHE-RSA-AES128-SHA
         * ECDHE-RSA-AES256-SHA
         * AES128-SHA
         * AES256-SHA
         * DES-CBC3-SHA
         * ECDHE-ECDSA-AES128-GCM-SHA256
         * ECDHE-ECDSA-AES256-GCM-SHA384
         * ECDHE-ECDSA-AES128-SHA256
         * ECDHE-ECDSA-AES256-SHA384
         * ECDHE-RSA-AES128-GCM-SHA256
         * ECDHE-RSA-AES256-GCM-SHA384
         * ECDHE-RSA-AES128-SHA256
         * ECDHE-RSA-AES256-SHA384
         * AES128-GCM-SHA256
         * AES256-GCM-SHA384
         * AES128-SHA256
         * AES256-SHA256
         * TLS 1.3 supports the following cipher suites:
         * TLS_AES_128_GCM_SHA256
         * TLS_AES_256_GCM_SHA384
         * TLS_CHACHA20_POLY1305_SHA256
         * TLS_AES_128_CCM_SHA256
         * TLS_AES_128_CCM_8_SHA256
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
         * You can specify at most 32 cipher suites.TLS 1.0 and TLS 1.1 support the following cipher suites:
         * ECDHE-ECDSA-AES128-SHA
         * ECDHE-ECDSA-AES256-SHA
         * ECDHE-RSA-AES128-SHA
         * ECDHE-RSA-AES256-SHA
         * AES128-SHA
         * AES256-SHA
         * DES-CBC3-SHA
         * TLS 1.2 supports the following cipher suites:
         * ECDHE-ECDSA-AES128-SHA
         * ECDHE-ECDSA-AES256-SHA
         * ECDHE-RSA-AES128-SHA
         * ECDHE-RSA-AES256-SHA
         * AES128-SHA
         * AES256-SHA
         * DES-CBC3-SHA
         * ECDHE-ECDSA-AES128-GCM-SHA256
         * ECDHE-ECDSA-AES256-GCM-SHA384
         * ECDHE-ECDSA-AES128-SHA256
         * ECDHE-ECDSA-AES256-SHA384
         * ECDHE-RSA-AES128-GCM-SHA256
         * ECDHE-RSA-AES256-GCM-SHA384
         * ECDHE-RSA-AES128-SHA256
         * ECDHE-RSA-AES256-SHA384
         * AES128-GCM-SHA256
         * AES256-GCM-SHA384
         * AES128-SHA256
         * AES256-SHA256
         * TLS 1.3 supports the following cipher suites:
         * TLS_AES_128_GCM_SHA256
         * TLS_AES_256_GCM_SHA384
         * TLS_CHACHA20_POLY1305_SHA256
         * TLS_AES_128_CCM_SHA256
         * TLS_AES_128_CCM_8_SHA256
         * <p>
         * @return {@code this}
         * @param ciphers Property ciphers: The supported cipher suites, which are determined by the TLS protocol version. This parameter is required.
         */
        public Builder ciphers(final java.util.List<? extends java.lang.Object> ciphers) {
            this.props.ciphers(ciphers);
            return this;
        }

        /**
         * Property tlsPolicyName: The name of the TLS policy.
         * <p>
         * The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param tlsPolicyName Property tlsPolicyName: The name of the TLS policy. This parameter is required.
         */
        public Builder tlsPolicyName(final java.lang.String tlsPolicyName) {
            this.props.tlsPolicyName(tlsPolicyName);
            return this;
        }
        /**
         * Property tlsPolicyName: The name of the TLS policy.
         * <p>
         * The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param tlsPolicyName Property tlsPolicyName: The name of the TLS policy. This parameter is required.
         */
        public Builder tlsPolicyName(final com.aliyun.ros.cdk.core.IResolvable tlsPolicyName) {
            this.props.tlsPolicyName(tlsPolicyName);
            return this;
        }

        /**
         * Property tlsVersions: The version of the TLS protocol.
         * <p>
         * @return {@code this}
         * @param tlsVersions Property tlsVersions: The version of the TLS protocol. This parameter is required.
         */
        public Builder tlsVersions(final com.aliyun.ros.cdk.core.IResolvable tlsVersions) {
            this.props.tlsVersions(tlsVersions);
            return this;
        }
        /**
         * Property tlsVersions: The version of the TLS protocol.
         * <p>
         * @return {@code this}
         * @param tlsVersions Property tlsVersions: The version of the TLS protocol. This parameter is required.
         */
        public Builder tlsVersions(final java.util.List<? extends java.lang.Object> tlsVersions) {
            this.props.tlsVersions(tlsVersions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.slb.TLSPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.TLSPolicy build() {
            return new com.aliyun.ros.cdk.slb.TLSPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
