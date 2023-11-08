package com.aliyun.ros.cdk.dts;

/**
 * A ROS resource type:  <code>ALIYUN::DTS::SubscriptionInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:34.555Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.SubscriptionInstance")
public class SubscriptionInstance extends com.aliyun.ros.cdk.core.Resource {

    protected SubscriptionInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SubscriptionInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::DTS::SubscriptionInstance</code>.
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
     * Create a new <code>ALIYUN::DTS::SubscriptionInstance</code>.
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
     * Create a new <code>ALIYUN::DTS::SubscriptionInstance</code>.
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
     * Attribute SubscribeTopic: The topic of the change tracking instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSubscribeTopic() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscribeTopic", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * Property payType: Payment type.
         * <p>
         * Valid value:
         * PostPaid: Pay-as-you-go, which is default value.
         * PrePaid: subscription.
         * <p>
         * @return {@code this}
         * @param payType Property payType: Payment type. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props().payType(payType);
            return this;
        }
        /**
         * Property payType: Payment type.
         * <p>
         * Valid value:
         * PostPaid: Pay-as-you-go, which is default value.
         * PrePaid: subscription.
         * <p>
         * @return {@code this}
         * @param payType Property payType: Payment type. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props().payType(payType);
            return this;
        }

        /**
         * Property period: The unit of the subscription length.
         * <p>
         * Valid values: Year and Month.
         * Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
         * <p>
         * @return {@code this}
         * @param period Property period: The unit of the subscription length. This parameter is required.
         */
        public Builder period(final java.lang.String period) {
            this.props().period(period);
            return this;
        }
        /**
         * Property period: The unit of the subscription length.
         * <p>
         * Valid values: Year and Month.
         * Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
         * <p>
         * @return {@code this}
         * @param period Property period: The unit of the subscription length. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props().period(period);
            return this;
        }

        /**
         * Property sourceEndpointInstanceType: Data subscription instance type, value is:MySQL: ApsaraDB RDS for MySQL instance or self-managed MySQL database.
         * <p>
         * PolarDB: PolarDB for MySQL cluster.
         * polardb_o: PolarDB O Edition cluster.
         * polardb_pg: PolarDB for PostgreSQL cluster.
         * DRDS: PolarDB-X instance V1.0 or V2.0.
         * PostgreSQL: self-managed PostgreSQL database.
         * Oracle: self-managed Oracle database.
         * <p>
         * @return {@code this}
         * @param sourceEndpointInstanceType Property sourceEndpointInstanceType: Data subscription instance type, value is:MySQL: ApsaraDB RDS for MySQL instance or self-managed MySQL database. This parameter is required.
         */
        public Builder sourceEndpointInstanceType(final java.lang.String sourceEndpointInstanceType) {
            this.props().sourceEndpointInstanceType(sourceEndpointInstanceType);
            return this;
        }
        /**
         * Property sourceEndpointInstanceType: Data subscription instance type, value is:MySQL: ApsaraDB RDS for MySQL instance or self-managed MySQL database.
         * <p>
         * PolarDB: PolarDB for MySQL cluster.
         * polardb_o: PolarDB O Edition cluster.
         * polardb_pg: PolarDB for PostgreSQL cluster.
         * DRDS: PolarDB-X instance V1.0 or V2.0.
         * PostgreSQL: self-managed PostgreSQL database.
         * Oracle: self-managed Oracle database.
         * <p>
         * @return {@code this}
         * @param sourceEndpointInstanceType Property sourceEndpointInstanceType: Data subscription instance type, value is:MySQL: ApsaraDB RDS for MySQL instance or self-managed MySQL database. This parameter is required.
         */
        public Builder sourceEndpointInstanceType(final com.aliyun.ros.cdk.core.IResolvable sourceEndpointInstanceType) {
            this.props().sourceEndpointInstanceType(sourceEndpointInstanceType);
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
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.dts.RosSubscriptionInstance.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property usedTime: The subscription length.
         * <p>
         * Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
         * You can set the Period parameter to specify the unit of the subscription length.
         * <p>
         * @return {@code this}
         * @param usedTime Property usedTime: The subscription length. This parameter is required.
         */
        public Builder usedTime(final java.lang.Number usedTime) {
            this.props().usedTime(usedTime);
            return this;
        }
        /**
         * Property usedTime: The subscription length.
         * <p>
         * Note: You must specify this parameter only if you set the PayType parameter to PrePaid.
         * You can set the Period parameter to specify the unit of the subscription length.
         * <p>
         * @return {@code this}
         * @param usedTime Property usedTime: The subscription length. This parameter is required.
         */
        public Builder usedTime(final com.aliyun.ros.cdk.core.IResolvable usedTime) {
            this.props().usedTime(usedTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dts.SubscriptionInstance}.
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
