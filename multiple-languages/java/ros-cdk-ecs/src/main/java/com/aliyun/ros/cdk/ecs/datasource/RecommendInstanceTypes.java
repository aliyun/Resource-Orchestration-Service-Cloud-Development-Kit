package com.aliyun.ros.cdk.ecs.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ECS::RecommendInstanceTypes</code>, which is used to query the recommended Elastic Compute Service (ECS) instance types.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:32.511Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.RecommendInstanceTypes")
public class RecommendInstanceTypes extends com.aliyun.ros.cdk.core.Resource {

    protected RecommendInstanceTypes(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RecommendInstanceTypes(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public RecommendInstanceTypes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.RecommendInstanceTypesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public RecommendInstanceTypes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.RecommendInstanceTypesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public RecommendInstanceTypes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute InstanceTypeIds: The list of instance type ids.
     * <p>
     * Note that instance type ids are not unique.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceTypeIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceTypeIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceTypes: The list of instance types, including information such as cores and memory.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceTypes() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceTypes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.RecommendInstanceTypesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.RecommendInstanceTypesProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.RecommendInstanceTypesProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.RecommendInstanceTypes}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.RecommendInstanceTypes> {
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
        private com.aliyun.ros.cdk.ecs.datasource.RecommendInstanceTypesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property cores: The number of vCPUs of the instance.
         * <p>
         * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
         * <p>
         * @return {@code this}
         * @param cores Property cores: The number of vCPUs of the instance. This parameter is required.
         */
        public Builder cores(final java.lang.Number cores) {
            this.props().cores(cores);
            return this;
        }
        /**
         * Property cores: The number of vCPUs of the instance.
         * <p>
         * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
         * <p>
         * @return {@code this}
         * @param cores Property cores: The number of vCPUs of the instance. This parameter is required.
         */
        public Builder cores(final com.aliyun.ros.cdk.core.IResolvable cores) {
            this.props().cores(cores);
            return this;
        }

        /**
         * Property instanceChargeType: The billing method of the instances of the instance type.
         * <p>
         * Valid values:
         * PrePaid: subscription
         * PostPaid: pay-as-you-go
         * Default value: PostPaid.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instances of the instance type. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: The billing method of the instances of the instance type.
         * <p>
         * Valid values:
         * PrePaid: subscription
         * PostPaid: pay-as-you-go
         * Default value: PostPaid.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instances of the instance type. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property instanceFamilyLevel: The level of the instance family.
         * <p>
         * Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
         * <p>
         * @return {@code this}
         * @param instanceFamilyLevel Property instanceFamilyLevel: The level of the instance family. This parameter is required.
         */
        public Builder instanceFamilyLevel(final java.lang.String instanceFamilyLevel) {
            this.props().instanceFamilyLevel(instanceFamilyLevel);
            return this;
        }
        /**
         * Property instanceFamilyLevel: The level of the instance family.
         * <p>
         * Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
         * <p>
         * @return {@code this}
         * @param instanceFamilyLevel Property instanceFamilyLevel: The level of the instance family. This parameter is required.
         */
        public Builder instanceFamilyLevel(final com.aliyun.ros.cdk.core.IResolvable instanceFamilyLevel) {
            this.props().instanceFamilyLevel(instanceFamilyLevel);
            return this;
        }

        /**
         * Property instanceType: The specified instance type.
         * <p>
         * For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
         * Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The specified instance type. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props().instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The specified instance type.
         * <p>
         * For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
         * Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The specified instance type. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props().instanceType(instanceType);
            return this;
        }

        /**
         * Property instanceTypeFamilies: The list of instance family to be filtered out.
         * <p>
         * You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
         * <p>
         * @return {@code this}
         * @param instanceTypeFamilies Property instanceTypeFamilies: The list of instance family to be filtered out. This parameter is required.
         */
        public Builder instanceTypeFamilies(final com.aliyun.ros.cdk.core.IResolvable instanceTypeFamilies) {
            this.props().instanceTypeFamilies(instanceTypeFamilies);
            return this;
        }
        /**
         * Property instanceTypeFamilies: The list of instance family to be filtered out.
         * <p>
         * You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
         * <p>
         * @return {@code this}
         * @param instanceTypeFamilies Property instanceTypeFamilies: The list of instance family to be filtered out. This parameter is required.
         */
        public Builder instanceTypeFamilies(final java.util.List<? extends java.lang.Object> instanceTypeFamilies) {
            this.props().instanceTypeFamilies(instanceTypeFamilies);
            return this;
        }

        /**
         * Property ioOptimized: Specifies whether to match I/O optimized instances.
         * <p>
         * The IoOptimized parameter cannot be specified when the instance is not I/O optimized. Valid values:
         * optimized: matches I/O optimized instances.
         * none: matches non-I/O optimized instances.
         * Default value: optimized.
         * If you query alternative instance types for retired instance types, this parameter is set to none by default.
         * Default value: none.
         * <p>
         * @return {@code this}
         * @param ioOptimized Property ioOptimized: Specifies whether to match I/O optimized instances. This parameter is required.
         */
        public Builder ioOptimized(final java.lang.String ioOptimized) {
            this.props().ioOptimized(ioOptimized);
            return this;
        }
        /**
         * Property ioOptimized: Specifies whether to match I/O optimized instances.
         * <p>
         * The IoOptimized parameter cannot be specified when the instance is not I/O optimized. Valid values:
         * optimized: matches I/O optimized instances.
         * none: matches non-I/O optimized instances.
         * Default value: optimized.
         * If you query alternative instance types for retired instance types, this parameter is set to none by default.
         * Default value: none.
         * <p>
         * @return {@code this}
         * @param ioOptimized Property ioOptimized: Specifies whether to match I/O optimized instances. This parameter is required.
         */
        public Builder ioOptimized(final com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.props().ioOptimized(ioOptimized);
            return this;
        }

        /**
         * Property maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.
         * <p>
         * Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
         * <p>
         * @return {@code this}
         * @param maxPrice Property maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances. This parameter is required.
         */
        public Builder maxPrice(final java.lang.Number maxPrice) {
            this.props().maxPrice(maxPrice);
            return this;
        }
        /**
         * Property maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.
         * <p>
         * Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
         * <p>
         * @return {@code this}
         * @param maxPrice Property maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances. This parameter is required.
         */
        public Builder maxPrice(final com.aliyun.ros.cdk.core.IResolvable maxPrice) {
            this.props().maxPrice(maxPrice);
            return this;
        }

        /**
         * Property memory: The memory size of the instance.
         * <p>
         * Unit: GiB.
         * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
         * <p>
         * @return {@code this}
         * @param memory Property memory: The memory size of the instance. This parameter is required.
         */
        public Builder memory(final java.lang.Number memory) {
            this.props().memory(memory);
            return this;
        }
        /**
         * Property memory: The memory size of the instance.
         * <p>
         * Unit: GiB.
         * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
         * <p>
         * @return {@code this}
         * @param memory Property memory: The memory size of the instance. This parameter is required.
         */
        public Builder memory(final com.aliyun.ros.cdk.core.IResolvable memory) {
            this.props().memory(memory);
            return this;
        }

        /**
         * Property priorityStrategy: The policy for recommending instance types.
         * <p>
         * Valid values:
         * InventoryFirst: Instance types are recommended in descending order based on resource availability.
         * PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
         * NewProductFirst: The latest instance types are recommended first.
         * Default value: InventoryFirst.
         * <p>
         * @return {@code this}
         * @param priorityStrategy Property priorityStrategy: The policy for recommending instance types. This parameter is required.
         */
        public Builder priorityStrategy(final java.lang.String priorityStrategy) {
            this.props().priorityStrategy(priorityStrategy);
            return this;
        }
        /**
         * Property priorityStrategy: The policy for recommending instance types.
         * <p>
         * Valid values:
         * InventoryFirst: Instance types are recommended in descending order based on resource availability.
         * PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
         * NewProductFirst: The latest instance types are recommended first.
         * Default value: InventoryFirst.
         * <p>
         * @return {@code this}
         * @param priorityStrategy Property priorityStrategy: The policy for recommending instance types. This parameter is required.
         */
        public Builder priorityStrategy(final com.aliyun.ros.cdk.core.IResolvable priorityStrategy) {
            this.props().priorityStrategy(priorityStrategy);
            return this;
        }

        /**
         * Property scene: Specifies the scenario in which the instance type is recommended.
         * <p>
         * Valid values:
         * UPGRADE: instance type upgrade or downgrade
         * CREATE: instance creation
         * Default value: CREATE.
         * <p>
         * @return {@code this}
         * @param scene Property scene: Specifies the scenario in which the instance type is recommended. This parameter is required.
         */
        public Builder scene(final java.lang.String scene) {
            this.props().scene(scene);
            return this;
        }
        /**
         * Property scene: Specifies the scenario in which the instance type is recommended.
         * <p>
         * Valid values:
         * UPGRADE: instance type upgrade or downgrade
         * CREATE: instance creation
         * Default value: CREATE.
         * <p>
         * @return {@code this}
         * @param scene Property scene: Specifies the scenario in which the instance type is recommended. This parameter is required.
         */
        public Builder scene(final com.aliyun.ros.cdk.core.IResolvable scene) {
            this.props().scene(scene);
            return this;
        }

        /**
         * Property spotStrategy: The bidding policy of preemptible instances.
         * <p>
         * Valid values:
         * NoSpot: applies to regular pay-as-you-go instances.
         * SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices.
         * SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase.
         * Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid.
         * Default value: NoSpot.
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: The bidding policy of preemptible instances. This parameter is required.
         */
        public Builder spotStrategy(final java.lang.String spotStrategy) {
            this.props().spotStrategy(spotStrategy);
            return this;
        }
        /**
         * Property spotStrategy: The bidding policy of preemptible instances.
         * <p>
         * Valid values:
         * NoSpot: applies to regular pay-as-you-go instances.
         * SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices.
         * SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase.
         * Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid.
         * Default value: NoSpot.
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: The bidding policy of preemptible instances. This parameter is required.
         */
        public Builder spotStrategy(final com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.props().spotStrategy(spotStrategy);
            return this;
        }

        /**
         * Property systemDiskCategory: The category of the system disk.
         * <p>
         * Valid values:
         * cloud_efficiency: ultra disk
         * cloud_ssd: standard SSD
         * cloud_essd: enhanced SSD (ESSD)
         * cloud: basic disk
         * For non-I/O optimized instances, the default value is cloud.
         * For I/O optimized instances, the default value is cloud_efficiency.
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: The category of the system disk. This parameter is required.
         */
        public Builder systemDiskCategory(final java.lang.String systemDiskCategory) {
            this.props().systemDiskCategory(systemDiskCategory);
            return this;
        }
        /**
         * Property systemDiskCategory: The category of the system disk.
         * <p>
         * Valid values:
         * cloud_efficiency: ultra disk
         * cloud_ssd: standard SSD
         * cloud_essd: enhanced SSD (ESSD)
         * cloud: basic disk
         * For non-I/O optimized instances, the default value is cloud.
         * For I/O optimized instances, the default value is cloud_efficiency.
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: The category of the system disk. This parameter is required.
         */
        public Builder systemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.props().systemDiskCategory(systemDiskCategory);
            return this;
        }

        /**
         * Property zoneId: The zone ID of the alternative instance types.
         * <p>
         * You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the alternative instance types. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone ID of the alternative instance types.
         * <p>
         * You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the alternative instance types. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }

        /**
         * Property zoneMatchMode: Specifies which alternative instance types are recommended.
         * <p>
         * Valid values:
         * Strict: recommends only alternative instance types in the zone specified by ZoneId.
         * Include: recommends all instance types in all the zones in the same region as the specified instance type.
         * When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
         * <p>
         * @return {@code this}
         * @param zoneMatchMode Property zoneMatchMode: Specifies which alternative instance types are recommended. This parameter is required.
         */
        public Builder zoneMatchMode(final java.lang.String zoneMatchMode) {
            this.props().zoneMatchMode(zoneMatchMode);
            return this;
        }
        /**
         * Property zoneMatchMode: Specifies which alternative instance types are recommended.
         * <p>
         * Valid values:
         * Strict: recommends only alternative instance types in the zone specified by ZoneId.
         * Include: recommends all instance types in all the zones in the same region as the specified instance type.
         * When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
         * <p>
         * @return {@code this}
         * @param zoneMatchMode Property zoneMatchMode: Specifies which alternative instance types are recommended. This parameter is required.
         */
        public Builder zoneMatchMode(final com.aliyun.ros.cdk.core.IResolvable zoneMatchMode) {
            this.props().zoneMatchMode(zoneMatchMode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.RecommendInstanceTypes}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.RecommendInstanceTypes build() {
            return new com.aliyun.ros.cdk.ecs.datasource.RecommendInstanceTypes(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.datasource.RecommendInstanceTypesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.datasource.RecommendInstanceTypesProps.Builder();
            }
            return this.props;
        }
    }
}
