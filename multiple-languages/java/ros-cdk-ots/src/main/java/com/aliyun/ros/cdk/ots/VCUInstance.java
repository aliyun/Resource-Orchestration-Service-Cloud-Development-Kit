package com.aliyun.ros.cdk.ots;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::OTS::VCUInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.663Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ots.$Module.class, fqn = "@alicloud/ros-cdk-ots.VCUInstance")
public class VCUInstance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ots.IVCUInstance {

    protected VCUInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VCUInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public VCUInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.VCUInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public VCUInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.VCUInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceName: Name of the tablestore VCU instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ots.VCUInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ots.VCUInstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ots.VCUInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ots.VCUInstance> {
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
        private final com.aliyun.ros.cdk.ots.VCUInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ots.VCUInstanceProps.Builder();
        }

        /**
         * Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type. This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }
        /**
         * Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: Cluster type (i.e. instance specification). Enumeration values: SSD: High performance. HYBRID: Capacity type. This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * Property periodInMonth: Purchase duration.
         * <p>
         * Unit: month. Value range: 1~24.
         * <p>
         * @return {@code this}
         * @param periodInMonth Property periodInMonth: Purchase duration. This parameter is required.
         */
        public Builder periodInMonth(final java.lang.Number periodInMonth) {
            this.props.periodInMonth(periodInMonth);
            return this;
        }
        /**
         * Property periodInMonth: Purchase duration.
         * <p>
         * Unit: month. Value range: 1~24.
         * <p>
         * @return {@code this}
         * @param periodInMonth Property periodInMonth: Purchase duration. This parameter is required.
         */
        public Builder periodInMonth(final com.aliyun.ros.cdk.core.IResolvable periodInMonth) {
            this.props.periodInMonth(periodInMonth);
            return this;
        }

        /**
         * Property vcu: Number of VCU units.
         * <p>
         * Value range: 0~2000.
         * <p>
         * @return {@code this}
         * @param vcu Property vcu: Number of VCU units. This parameter is required.
         */
        public Builder vcu(final java.lang.Number vcu) {
            this.props.vcu(vcu);
            return this;
        }
        /**
         * Property vcu: Number of VCU units.
         * <p>
         * Value range: 0~2000.
         * <p>
         * @return {@code this}
         * @param vcu Property vcu: Number of VCU units. This parameter is required.
         */
        public Builder vcu(final com.aliyun.ros.cdk.core.IResolvable vcu) {
            this.props.vcu(vcu);
            return this;
        }

        /**
         * Property aliasName: Instance alias name.
         * <p>
         * @return {@code this}
         * @param aliasName Property aliasName: Instance alias name. This parameter is required.
         */
        public Builder aliasName(final java.lang.String aliasName) {
            this.props.aliasName(aliasName);
            return this;
        }
        /**
         * Property aliasName: Instance alias name.
         * <p>
         * @return {@code this}
         * @param aliasName Property aliasName: Instance alias name. This parameter is required.
         */
        public Builder aliasName(final com.aliyun.ros.cdk.core.IResolvable aliasName) {
            this.props.aliasName(aliasName);
            return this;
        }

        /**
         * Property autoRenewPeriodInMonth: Automatic renewal cycle.
         * <p>
         * When automatic renewal is enabled, it is required. Value range: 1~24.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriodInMonth Property autoRenewPeriodInMonth: Automatic renewal cycle. This parameter is required.
         */
        public Builder autoRenewPeriodInMonth(final java.lang.Number autoRenewPeriodInMonth) {
            this.props.autoRenewPeriodInMonth(autoRenewPeriodInMonth);
            return this;
        }
        /**
         * Property autoRenewPeriodInMonth: Automatic renewal cycle.
         * <p>
         * When automatic renewal is enabled, it is required. Value range: 1~24.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriodInMonth Property autoRenewPeriodInMonth: Automatic renewal cycle. This parameter is required.
         */
        public Builder autoRenewPeriodInMonth(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriodInMonth) {
            this.props.autoRenewPeriodInMonth(autoRenewPeriodInMonth);
            return this;
        }

        /**
         * Property enableAutoRenew: Whether to enable automatic renewal.
         * <p>
         * @return {@code this}
         * @param enableAutoRenew Property enableAutoRenew: Whether to enable automatic renewal. This parameter is required.
         */
        public Builder enableAutoRenew(final java.lang.Boolean enableAutoRenew) {
            this.props.enableAutoRenew(enableAutoRenew);
            return this;
        }
        /**
         * Property enableAutoRenew: Whether to enable automatic renewal.
         * <p>
         * @return {@code this}
         * @param enableAutoRenew Property enableAutoRenew: Whether to enable automatic renewal. This parameter is required.
         */
        public Builder enableAutoRenew(final com.aliyun.ros.cdk.core.IResolvable enableAutoRenew) {
            this.props.enableAutoRenew(enableAutoRenew);
            return this;
        }

        /**
         * Property enableElasticVcu: Whether to enable instance elasticity.
         * <p>
         * If elasticity is enabled, the peak VCU usage of the instance can exceed the purchased VCU amount, but there will be additional charges.
         * <p>
         * @return {@code this}
         * @param enableElasticVcu Property enableElasticVcu: Whether to enable instance elasticity. This parameter is required.
         */
        public Builder enableElasticVcu(final java.lang.Boolean enableElasticVcu) {
            this.props.enableElasticVcu(enableElasticVcu);
            return this;
        }
        /**
         * Property enableElasticVcu: Whether to enable instance elasticity.
         * <p>
         * If elasticity is enabled, the peak VCU usage of the instance can exceed the purchased VCU amount, but there will be additional charges.
         * <p>
         * @return {@code this}
         * @param enableElasticVcu Property enableElasticVcu: Whether to enable instance elasticity. This parameter is required.
         */
        public Builder enableElasticVcu(final com.aliyun.ros.cdk.core.IResolvable enableElasticVcu) {
            this.props.enableElasticVcu(enableElasticVcu);
            return this;
        }

        /**
         * Property instanceDescription: Instance description.
         * <p>
         * @return {@code this}
         * @param instanceDescription Property instanceDescription: Instance description. This parameter is required.
         */
        public Builder instanceDescription(final java.lang.String instanceDescription) {
            this.props.instanceDescription(instanceDescription);
            return this;
        }
        /**
         * Property instanceDescription: Instance description.
         * <p>
         * @return {@code this}
         * @param instanceDescription Property instanceDescription: Instance description. This parameter is required.
         */
        public Builder instanceDescription(final com.aliyun.ros.cdk.core.IResolvable instanceDescription) {
            this.props.instanceDescription(instanceDescription);
            return this;
        }

        /**
         * Property resourceGroupId: Resource Group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource Group ID. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource Group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource Group ID. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: The list of instance tags in the form of key/value pairs.
         * <p>
         * You can define a maximum of 20 tags for instance.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The list of instance tags in the form of key/value pairs. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ots.RosVCUInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ots.VCUInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.ots.VCUInstance build() {
            return new com.aliyun.ros.cdk.ots.VCUInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
