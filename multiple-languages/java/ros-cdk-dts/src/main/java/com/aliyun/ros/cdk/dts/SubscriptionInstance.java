package com.aliyun.ros.cdk.dts;

/**
 * A ROS resource type:  `ALIYUN::DTS::SubscriptionInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.124Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.SubscriptionInstance")
public class SubscriptionInstance extends com.aliyun.ros.cdk.core.Resource {

    protected SubscriptionInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SubscriptionInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::DTS::SubscriptionInstance`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public SubscriptionInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.dts.SubscriptionInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::DTS::SubscriptionInstance`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public SubscriptionInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.dts.SubscriptionInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new `ALIYUN::DTS::SubscriptionInstance`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public SubscriptionInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute PrivateHost: Private host.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivateHost() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateHost", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PublicHost: Public host.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicHost() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicHost", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SubscriptionInstanceId: The ID of Data subscription instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSubscriptionInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscriptionInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VPCHost: VPC host.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcHost() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcHost", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dts.SubscriptionInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dts.SubscriptionInstance> {
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
        private com.aliyun.ros.cdk.dts.SubscriptionInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property configuration: Subscription configuration.
         * <p>
         * @return {@code this}
         * @param configuration Property configuration: Subscription configuration. This parameter is required.
         */
        public Builder configuration(final com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.props().configuration(configuration);
            return this;
        }
        /**
         * Property configuration: Subscription configuration.
         * <p>
         * @return {@code this}
         * @param configuration Property configuration: Subscription configuration. This parameter is required.
         */
        public Builder configuration(final com.aliyun.ros.cdk.dts.RosSubscriptionInstance.ConfigurationProperty configuration) {
            this.props().configuration(configuration);
            return this;
        }

        /**
         * Property sourceEndpointInstanceType: Data subscription instance type, value is: MySQL, PolarDB, DRDS, Oracle.
         * <p>
         * Default: MySQL.
         * <p>
         * @return {@code this}
         * @param sourceEndpointInstanceType Property sourceEndpointInstanceType: Data subscription instance type, value is: MySQL, PolarDB, DRDS, Oracle. This parameter is required.
         */
        public Builder sourceEndpointInstanceType(final java.lang.String sourceEndpointInstanceType) {
            this.props().sourceEndpointInstanceType(sourceEndpointInstanceType);
            return this;
        }
        /**
         * Property sourceEndpointInstanceType: Data subscription instance type, value is: MySQL, PolarDB, DRDS, Oracle.
         * <p>
         * Default: MySQL.
         * <p>
         * @return {@code this}
         * @param sourceEndpointInstanceType Property sourceEndpointInstanceType: Data subscription instance type, value is: MySQL, PolarDB, DRDS, Oracle. This parameter is required.
         */
        public Builder sourceEndpointInstanceType(final com.aliyun.ros.cdk.core.IResolvable sourceEndpointInstanceType) {
            this.props().sourceEndpointInstanceType(sourceEndpointInstanceType);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.dts.SubscriptionInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.dts.SubscriptionInstance build() {
            return new com.aliyun.ros.cdk.dts.SubscriptionInstance(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.dts.SubscriptionInstanceProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.dts.SubscriptionInstanceProps.Builder();
            }
            return this.props;
        }
    }
}
