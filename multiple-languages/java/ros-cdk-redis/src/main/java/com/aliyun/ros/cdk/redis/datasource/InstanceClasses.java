package com.aliyun.ros.cdk.redis.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::REDIS::InstanceClasses</code>, which is used to query the types of ApsaraDB for Redis instances.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:13.679Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.datasource.InstanceClasses")
public class InstanceClasses extends com.aliyun.ros.cdk.core.Resource {

    protected InstanceClasses(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected InstanceClasses(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public InstanceClasses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.redis.datasource.InstanceClassesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public InstanceClasses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.redis.datasource.InstanceClassesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public InstanceClasses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute InstanceClasses: The list of instance classes.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceClasses() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceClasses", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceClassIds: The list of db instance class ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceClassIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceClassIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.datasource.InstanceClassesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.redis.datasource.InstanceClassesProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.datasource.InstanceClassesProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.redis.datasource.InstanceClasses}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.redis.datasource.InstanceClasses> {
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
        private com.aliyun.ros.cdk.redis.datasource.InstanceClassesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property acceptLanguage: The language of the return values.
         * <p>
         * Valid values:
         * zh-CN: Chinese. This is the default value.
         * en-US: English.
         * <p>
         * @return {@code this}
         * @param acceptLanguage Property acceptLanguage: The language of the return values. This parameter is required.
         */
        public Builder acceptLanguage(final java.lang.String acceptLanguage) {
            this.props().acceptLanguage(acceptLanguage);
            return this;
        }
        /**
         * Property acceptLanguage: The language of the return values.
         * <p>
         * Valid values:
         * zh-CN: Chinese. This is the default value.
         * en-US: English.
         * <p>
         * @return {@code this}
         * @param acceptLanguage Property acceptLanguage: The language of the return values. This parameter is required.
         */
        public Builder acceptLanguage(final com.aliyun.ros.cdk.core.IResolvable acceptLanguage) {
            this.props().acceptLanguage(acceptLanguage);
            return this;
        }

        /**
         * Property engine: The engine type.
         * <p>
         * Valid values:
         * Redis
         * Memcache
         * <p>
         * @return {@code this}
         * @param engine Property engine: The engine type. This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props().engine(engine);
            return this;
        }
        /**
         * Property engine: The engine type.
         * <p>
         * Valid values:
         * Redis
         * Memcache
         * <p>
         * @return {@code this}
         * @param engine Property engine: The engine type. This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
            this.props().engine(engine);
            return this;
        }

        /**
         * Property instanceChargeType: The billing method.
         * <p>
         * Valid values:
         * PrePaid: subscription
         * PostPaid: pay-as-you-go
         * Note Default value: PrePaid.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: The billing method.
         * <p>
         * Valid values:
         * PrePaid: subscription
         * PostPaid: pay-as-you-go
         * Note Default value: PrePaid.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property instanceId: The ID of the resource group.
         * <p>
         * You can call the ListResourceGroups operation to query the IDs of resource groups.
         * Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the resource group. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the resource group.
         * <p>
         * You can call the ListResourceGroups operation to query the IDs of resource groups.
         * Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the resource group. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }

        /**
         * Property nodeId: The ID of the data node for which you want to query available instance types.
         * <p>
         * You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
         * Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read/write splitting architecture.
         * <p>
         * @return {@code this}
         * @param nodeId Property nodeId: The ID of the data node for which you want to query available instance types. This parameter is required.
         */
        public Builder nodeId(final java.lang.String nodeId) {
            this.props().nodeId(nodeId);
            return this;
        }
        /**
         * Property nodeId: The ID of the data node for which you want to query available instance types.
         * <p>
         * You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.
         * Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read/write splitting architecture.
         * <p>
         * @return {@code this}
         * @param nodeId Property nodeId: The ID of the data node for which you want to query available instance types. This parameter is required.
         */
        public Builder nodeId(final com.aliyun.ros.cdk.core.IResolvable nodeId) {
            this.props().nodeId(nodeId);
            return this;
        }

        /**
         * Property orderType: The order type.
         * <p>
         * Valid values:
         * BUY: the orders that are used to purchase instances.
         * UPGRADE: the orders that are used to upgrade instances.
         * DOWNGRADE: the orders that are used to downgrade instances.
         * <p>
         * @return {@code this}
         * @param orderType Property orderType: The order type. This parameter is required.
         */
        public Builder orderType(final java.lang.String orderType) {
            this.props().orderType(orderType);
            return this;
        }
        /**
         * Property orderType: The order type.
         * <p>
         * Valid values:
         * BUY: the orders that are used to purchase instances.
         * UPGRADE: the orders that are used to upgrade instances.
         * DOWNGRADE: the orders that are used to downgrade instances.
         * <p>
         * @return {@code this}
         * @param orderType Property orderType: The order type. This parameter is required.
         */
        public Builder orderType(final com.aliyun.ros.cdk.core.IResolvable orderType) {
            this.props().orderType(orderType);
            return this;
        }

        /**
         * Property productType: The edition or series of instances.
         * <p>
         * Valid values:
         * Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
         * Tair_scm: persistent memory-optimized instances
         * Tair_essd: storage-optimized instances
         * <p>
         * @return {@code this}
         * @param productType Property productType: The edition or series of instances. This parameter is required.
         */
        public Builder productType(final java.lang.String productType) {
            this.props().productType(productType);
            return this;
        }
        /**
         * Property productType: The edition or series of instances.
         * <p>
         * Valid values:
         * Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)
         * Tair_scm: persistent memory-optimized instances
         * Tair_essd: storage-optimized instances
         * <p>
         * @return {@code this}
         * @param productType Property productType: The edition or series of instances. This parameter is required.
         */
        public Builder productType(final com.aliyun.ros.cdk.core.IResolvable productType) {
            this.props().productType(productType);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the instance.
         * <p>
         * Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the instance. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the instance.
         * <p>
         * Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the instance. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
         * <p>
         * Note You can call the DescribeRegions operation to query information about zones.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone where PolarDB resources that you want to query reside. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone where PolarDB resources that you want to query reside.
         * <p>
         * Note You can call the DescribeRegions operation to query information about zones.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone where PolarDB resources that you want to query reside. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.redis.datasource.InstanceClasses}.
         */
        @Override
        public com.aliyun.ros.cdk.redis.datasource.InstanceClasses build() {
            return new com.aliyun.ros.cdk.redis.datasource.InstanceClasses(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.redis.datasource.InstanceClassesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.redis.datasource.InstanceClassesProps.Builder();
            }
            return this.props;
        }
    }
}
