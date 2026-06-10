package com.aliyun.ros.cdk.apig;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::APIG::ConsumerAuthorizationRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:26:59.537Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.ConsumerAuthorizationRule")
public class ConsumerAuthorizationRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.apig.IConsumerAuthorizationRule {

    protected ConsumerAuthorizationRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ConsumerAuthorizationRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ConsumerAuthorizationRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.ConsumerAuthorizationRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ConsumerAuthorizationRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.ConsumerAuthorizationRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConsumerAuthorizationRuleId: The ID of the consumer authorization rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConsumerAuthorizationRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrConsumerAuthorizationRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.ConsumerAuthorizationRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.ConsumerAuthorizationRuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.ConsumerAuthorizationRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.ConsumerAuthorizationRule> {
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
        private final com.aliyun.ros.cdk.apig.ConsumerAuthorizationRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.ConsumerAuthorizationRuleProps.Builder();
        }

        /**
         * Property consumerId: The consumer ID.
         * <p>
         * @return {@code this}
         * @param consumerId Property consumerId: The consumer ID. This parameter is required.
         */
        public Builder consumerId(final java.lang.String consumerId) {
            this.props.consumerId(consumerId);
            return this;
        }
        /**
         * Property consumerId: The consumer ID.
         * <p>
         * @return {@code this}
         * @param consumerId Property consumerId: The consumer ID. This parameter is required.
         */
        public Builder consumerId(final com.aliyun.ros.cdk.core.IResolvable consumerId) {
            this.props.consumerId(consumerId);
            return this;
        }

        /**
         * Property resourceIdentifier: Resource identifier for non-standard code sources.
         * <p>
         * @return {@code this}
         * @param resourceIdentifier Property resourceIdentifier: Resource identifier for non-standard code sources. This parameter is required.
         */
        public Builder resourceIdentifier(final com.aliyun.ros.cdk.core.IResolvable resourceIdentifier) {
            this.props.resourceIdentifier(resourceIdentifier);
            return this;
        }
        /**
         * Property resourceIdentifier: Resource identifier for non-standard code sources.
         * <p>
         * @return {@code this}
         * @param resourceIdentifier Property resourceIdentifier: Resource identifier for non-standard code sources. This parameter is required.
         */
        public Builder resourceIdentifier(final com.aliyun.ros.cdk.apig.RosConsumerAuthorizationRule.ResourceIdentifierProperty resourceIdentifier) {
            this.props.resourceIdentifier(resourceIdentifier);
            return this;
        }

        /**
         * Property resourceType: The resource type.
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The resource type. This parameter is required.
         */
        public Builder resourceType(final java.lang.String resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }
        /**
         * Property resourceType: The resource type.
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The resource type. This parameter is required.
         */
        public Builder resourceType(final com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }

        /**
         * Property expireMode: The expire mode.
         * <p>
         * Valid values: LongTerm, ShortTerm.
         * <p>
         * @return {@code this}
         * @param expireMode Property expireMode: The expire mode. This parameter is required.
         */
        public Builder expireMode(final java.lang.String expireMode) {
            this.props.expireMode(expireMode);
            return this;
        }
        /**
         * Property expireMode: The expire mode.
         * <p>
         * Valid values: LongTerm, ShortTerm.
         * <p>
         * @return {@code this}
         * @param expireMode Property expireMode: The expire mode. This parameter is required.
         */
        public Builder expireMode(final com.aliyun.ros.cdk.core.IResolvable expireMode) {
            this.props.expireMode(expireMode);
            return this;
        }

        /**
         * Property expireTimestamp: The expire timestamp in milliseconds.
         * <p>
         * @return {@code this}
         * @param expireTimestamp Property expireTimestamp: The expire timestamp in milliseconds. This parameter is required.
         */
        public Builder expireTimestamp(final java.lang.Number expireTimestamp) {
            this.props.expireTimestamp(expireTimestamp);
            return this;
        }
        /**
         * Property expireTimestamp: The expire timestamp in milliseconds.
         * <p>
         * @return {@code this}
         * @param expireTimestamp Property expireTimestamp: The expire timestamp in milliseconds. This parameter is required.
         */
        public Builder expireTimestamp(final com.aliyun.ros.cdk.core.IResolvable expireTimestamp) {
            this.props.expireTimestamp(expireTimestamp);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.ConsumerAuthorizationRule}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.ConsumerAuthorizationRule build() {
            return new com.aliyun.ros.cdk.apig.ConsumerAuthorizationRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
