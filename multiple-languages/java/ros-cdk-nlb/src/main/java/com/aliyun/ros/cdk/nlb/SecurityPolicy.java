package com.aliyun.ros.cdk.nlb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::NLB::SecurityPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:48.871Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nlb.$Module.class, fqn = "@alicloud/ros-cdk-nlb.SecurityPolicy")
public class SecurityPolicy extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.nlb.ISecurityPolicy {

    protected SecurityPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SecurityPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SecurityPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.SecurityPolicyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SecurityPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.SecurityPolicyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArn() {
        return software.amazon.jsii.Kernel.get(this, "attrArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityPolicyId: The ID of the security policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nlb.SecurityPolicyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nlb.SecurityPolicyProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.nlb.SecurityPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nlb.SecurityPolicy> {
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
        private final com.aliyun.ros.cdk.nlb.SecurityPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nlb.SecurityPolicyProps.Builder();
        }

        /**
         * Property ciphers: TThe supported cipher suites, which are determined by the TLS protocol version.
         * <p>
         * You can specify at most 32 cipher suites.
         * <p>
         * @return {@code this}
         * @param ciphers Property ciphers: TThe supported cipher suites, which are determined by the TLS protocol version. This parameter is required.
         */
        public Builder ciphers(final com.aliyun.ros.cdk.core.IResolvable ciphers) {
            this.props.ciphers(ciphers);
            return this;
        }
        /**
         * Property ciphers: TThe supported cipher suites, which are determined by the TLS protocol version.
         * <p>
         * You can specify at most 32 cipher suites.
         * <p>
         * @return {@code this}
         * @param ciphers Property ciphers: TThe supported cipher suites, which are determined by the TLS protocol version. This parameter is required.
         */
        public Builder ciphers(final java.util.List<? extends java.lang.Object> ciphers) {
            this.props.ciphers(ciphers);
            return this;
        }

        /**
         * Property tlsVersions: The supported versions of the Transport Layer Security (TLS) protocol.
         * <p>
         * Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3.
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
         * Valid values: TLSv1.0, TLSv1.1, TLSv1.2, and TLSv1.3.
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
         * Property securityPolicyName: The name of the security policy.
         * <p>
         * The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
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
         * The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param securityPolicyName Property securityPolicyName: The name of the security policy. This parameter is required.
         */
        public Builder securityPolicyName(final com.aliyun.ros.cdk.core.IResolvable securityPolicyName) {
            this.props.securityPolicyName(securityPolicyName);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.nlb.RosSecurityPolicy.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nlb.SecurityPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.nlb.SecurityPolicy build() {
            return new com.aliyun.ros.cdk.nlb.SecurityPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
