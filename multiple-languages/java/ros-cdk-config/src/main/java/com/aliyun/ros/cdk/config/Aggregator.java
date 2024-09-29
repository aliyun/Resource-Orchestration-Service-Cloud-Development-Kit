package com.aliyun.ros.cdk.config;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Config::Aggregator</code>, which is used to create an account group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:37.223Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.config.$Module.class, fqn = "@alicloud/ros-cdk-config.Aggregator")
public class Aggregator extends com.aliyun.ros.cdk.core.Resource {

    protected Aggregator(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Aggregator(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Aggregator(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.AggregatorProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Aggregator(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.AggregatorProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AggregatorId: The ID of the aggregator.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAggregatorId() {
        return software.amazon.jsii.Kernel.get(this, "attrAggregatorId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.AggregatorProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.config.AggregatorProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.config.AggregatorProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.config.Aggregator}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.config.Aggregator> {
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
        private final com.aliyun.ros.cdk.config.AggregatorProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.config.AggregatorProps.Builder();
        }

        /**
         * Property aggregatorName: The name of aggregator.
         * <p>
         * @return {@code this}
         * @param aggregatorName Property aggregatorName: The name of aggregator. This parameter is required.
         */
        public Builder aggregatorName(final java.lang.String aggregatorName) {
            this.props.aggregatorName(aggregatorName);
            return this;
        }
        /**
         * Property aggregatorName: The name of aggregator.
         * <p>
         * @return {@code this}
         * @param aggregatorName Property aggregatorName: The name of aggregator. This parameter is required.
         */
        public Builder aggregatorName(final com.aliyun.ros.cdk.core.IResolvable aggregatorName) {
            this.props.aggregatorName(aggregatorName);
            return this;
        }

        /**
         * Property description: The description of aggregator.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of aggregator. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of aggregator.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of aggregator. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property aggregatorAccounts: The member account in aggregator.When the AggregatorType is RD, this parameter can be empty, which means that all accounts in the resource directory will be added to the global account group.
         * <p>
         * @return {@code this}
         * @param aggregatorAccounts Property aggregatorAccounts: The member account in aggregator.When the AggregatorType is RD, this parameter can be empty, which means that all accounts in the resource directory will be added to the global account group. This parameter is required.
         */
        public Builder aggregatorAccounts(final com.aliyun.ros.cdk.core.IResolvable aggregatorAccounts) {
            this.props.aggregatorAccounts(aggregatorAccounts);
            return this;
        }
        /**
         * Property aggregatorAccounts: The member account in aggregator.When the AggregatorType is RD, this parameter can be empty, which means that all accounts in the resource directory will be added to the global account group.
         * <p>
         * @return {@code this}
         * @param aggregatorAccounts Property aggregatorAccounts: The member account in aggregator.When the AggregatorType is RD, this parameter can be empty, which means that all accounts in the resource directory will be added to the global account group. This parameter is required.
         */
        public Builder aggregatorAccounts(final java.util.List<? extends java.lang.Object> aggregatorAccounts) {
            this.props.aggregatorAccounts(aggregatorAccounts);
            return this;
        }

        /**
         * Property aggregatorType: Account group type.
         * <p>
         * Value:
         * RD: Global account group.CUSTOM: Custom account group (default value).
         * <p>
         * @return {@code this}
         * @param aggregatorType Property aggregatorType: Account group type. This parameter is required.
         */
        public Builder aggregatorType(final java.lang.String aggregatorType) {
            this.props.aggregatorType(aggregatorType);
            return this;
        }
        /**
         * Property aggregatorType: Account group type.
         * <p>
         * Value:
         * RD: Global account group.CUSTOM: Custom account group (default value).
         * <p>
         * @return {@code this}
         * @param aggregatorType Property aggregatorType: Account group type. This parameter is required.
         */
        public Builder aggregatorType(final com.aliyun.ros.cdk.core.IResolvable aggregatorType) {
            this.props.aggregatorType(aggregatorType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.config.Aggregator}.
         */
        @Override
        public com.aliyun.ros.cdk.config.Aggregator build() {
            return new com.aliyun.ros.cdk.config.Aggregator(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
