package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>DATASOURCE::ECS::RecommendInstanceTypes</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:37.276Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.RecommendInstanceTypesProps")
@software.amazon.jsii.Jsii.Proxy(RecommendInstanceTypesProps.Jsii$Proxy.class)
public interface RecommendInstanceTypesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property cores: The number of vCPUs of the instance.
     * <p>
     * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCores() {
        return null;
    }

    /**
     * Property instanceChargeType: The billing method of the instances of the instance type.
     * <p>
     * Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Default value: PostPaid.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     * Property instanceFamilyLevel: The level of the instance family.
     * <p>
     * Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceFamilyLevel() {
        return null;
    }

    /**
     * Property instanceType: The specified instance type.
     * <p>
     * For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
     * Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     * Property instanceTypeFamilies: The list of instance family to be filtered out.
     * <p>
     * You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceTypeFamilies() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIoOptimized() {
        return null;
    }

    /**
     * Property maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.
     * <p>
     * Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxPrice() {
        return null;
    }

    /**
     * Property memory: The memory size of the instance.
     * <p>
     * Unit: GiB.
     * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMemory() {
        return null;
    }

    /**
     * Property priorityStrategy: The policy for recommending instance types.
     * <p>
     * Valid values:
     * InventoryFirst: Instance types are recommended in descending order based on resource availability.
     * PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
     * NewProductFirst: The latest instance types are recommended first.
     * Default value: InventoryFirst.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPriorityStrategy() {
        return null;
    }

    /**
     * Property scene: Specifies the scenario in which the instance type is recommended.
     * <p>
     * Valid values:
     * UPGRADE: instance type upgrade or downgrade
     * CREATE: instance creation
     * Default value: CREATE.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScene() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
        return null;
    }

    /**
     * Property zoneId: The zone ID of the alternative instance types.
     * <p>
     * You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * Property zoneMatchMode: Specifies which alternative instance types are recommended.
     * <p>
     * Valid values:
     * Strict: recommends only alternative instance types in the zone specified by ZoneId.
     * Include: recommends all instance types in all the zones in the same region as the specified instance type.
     * When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneMatchMode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RecommendInstanceTypesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RecommendInstanceTypesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RecommendInstanceTypesProps> {
        java.lang.Object cores;
        java.lang.Object instanceChargeType;
        java.lang.Object instanceFamilyLevel;
        java.lang.Object instanceType;
        java.lang.Object instanceTypeFamilies;
        java.lang.Object ioOptimized;
        java.lang.Object maxPrice;
        java.lang.Object memory;
        java.lang.Object priorityStrategy;
        java.lang.Object scene;
        java.lang.Object spotStrategy;
        java.lang.Object systemDiskCategory;
        java.lang.Object zoneId;
        java.lang.Object zoneMatchMode;

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getCores}
         * @param cores Property cores: The number of vCPUs of the instance.
         *              Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
         * @return {@code this}
         */
        public Builder cores(java.lang.Number cores) {
            this.cores = cores;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getCores}
         * @param cores Property cores: The number of vCPUs of the instance.
         *              Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
         * @return {@code this}
         */
        public Builder cores(com.aliyun.ros.cdk.core.IResolvable cores) {
            this.cores = cores;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instances of the instance type.
         *                           Valid values:
         *                           PrePaid: subscription
         *                           PostPaid: pay-as-you-go
         *                           Default value: PostPaid.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instances of the instance type.
         *                           Valid values:
         *                           PrePaid: subscription
         *                           PostPaid: pay-as-you-go
         *                           Default value: PostPaid.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getInstanceFamilyLevel}
         * @param instanceFamilyLevel Property instanceFamilyLevel: The level of the instance family.
         *                            Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
         * @return {@code this}
         */
        public Builder instanceFamilyLevel(java.lang.String instanceFamilyLevel) {
            this.instanceFamilyLevel = instanceFamilyLevel;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getInstanceFamilyLevel}
         * @param instanceFamilyLevel Property instanceFamilyLevel: The level of the instance family.
         *                            Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
         * @return {@code this}
         */
        public Builder instanceFamilyLevel(com.aliyun.ros.cdk.core.IResolvable instanceFamilyLevel) {
            this.instanceFamilyLevel = instanceFamilyLevel;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getInstanceType}
         * @param instanceType Property instanceType: The specified instance type.
         *                     For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
         *                     Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getInstanceType}
         * @param instanceType Property instanceType: The specified instance type.
         *                     For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
         *                     Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getInstanceTypeFamilies}
         * @param instanceTypeFamilies Property instanceTypeFamilies: The list of instance family to be filtered out.
         *                             You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
         * @return {@code this}
         */
        public Builder instanceTypeFamilies(com.aliyun.ros.cdk.core.IResolvable instanceTypeFamilies) {
            this.instanceTypeFamilies = instanceTypeFamilies;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getInstanceTypeFamilies}
         * @param instanceTypeFamilies Property instanceTypeFamilies: The list of instance family to be filtered out.
         *                             You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
         * @return {@code this}
         */
        public Builder instanceTypeFamilies(java.util.List<? extends java.lang.Object> instanceTypeFamilies) {
            this.instanceTypeFamilies = instanceTypeFamilies;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getIoOptimized}
         * @param ioOptimized Property ioOptimized: Specifies whether to match I/O optimized instances.
         *                    The IoOptimized parameter cannot be specified when the instance is not I/O optimized. Valid values:
         *                    optimized: matches I/O optimized instances.
         *                    none: matches non-I/O optimized instances.
         *                    Default value: optimized.
         *                    If you query alternative instance types for retired instance types, this parameter is set to none by default.
         *                    Default value: none.
         * @return {@code this}
         */
        public Builder ioOptimized(java.lang.String ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getIoOptimized}
         * @param ioOptimized Property ioOptimized: Specifies whether to match I/O optimized instances.
         *                    The IoOptimized parameter cannot be specified when the instance is not I/O optimized. Valid values:
         *                    optimized: matches I/O optimized instances.
         *                    none: matches non-I/O optimized instances.
         *                    Default value: optimized.
         *                    If you query alternative instance types for retired instance types, this parameter is set to none by default.
         *                    Default value: none.
         * @return {@code this}
         */
        public Builder ioOptimized(com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getMaxPrice}
         * @param maxPrice Property maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.
         *                 Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
         * @return {@code this}
         */
        public Builder maxPrice(java.lang.Number maxPrice) {
            this.maxPrice = maxPrice;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getMaxPrice}
         * @param maxPrice Property maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.
         *                 Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
         * @return {@code this}
         */
        public Builder maxPrice(com.aliyun.ros.cdk.core.IResolvable maxPrice) {
            this.maxPrice = maxPrice;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getMemory}
         * @param memory Property memory: The memory size of the instance.
         *               Unit: GiB.
         *               Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
         * @return {@code this}
         */
        public Builder memory(java.lang.Number memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getMemory}
         * @param memory Property memory: The memory size of the instance.
         *               Unit: GiB.
         *               Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
         * @return {@code this}
         */
        public Builder memory(com.aliyun.ros.cdk.core.IResolvable memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getPriorityStrategy}
         * @param priorityStrategy Property priorityStrategy: The policy for recommending instance types.
         *                         Valid values:
         *                         InventoryFirst: Instance types are recommended in descending order based on resource availability.
         *                         PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
         *                         NewProductFirst: The latest instance types are recommended first.
         *                         Default value: InventoryFirst.
         * @return {@code this}
         */
        public Builder priorityStrategy(java.lang.String priorityStrategy) {
            this.priorityStrategy = priorityStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getPriorityStrategy}
         * @param priorityStrategy Property priorityStrategy: The policy for recommending instance types.
         *                         Valid values:
         *                         InventoryFirst: Instance types are recommended in descending order based on resource availability.
         *                         PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
         *                         NewProductFirst: The latest instance types are recommended first.
         *                         Default value: InventoryFirst.
         * @return {@code this}
         */
        public Builder priorityStrategy(com.aliyun.ros.cdk.core.IResolvable priorityStrategy) {
            this.priorityStrategy = priorityStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getScene}
         * @param scene Property scene: Specifies the scenario in which the instance type is recommended.
         *              Valid values:
         *              UPGRADE: instance type upgrade or downgrade
         *              CREATE: instance creation
         *              Default value: CREATE.
         * @return {@code this}
         */
        public Builder scene(java.lang.String scene) {
            this.scene = scene;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getScene}
         * @param scene Property scene: Specifies the scenario in which the instance type is recommended.
         *              Valid values:
         *              UPGRADE: instance type upgrade or downgrade
         *              CREATE: instance creation
         *              Default value: CREATE.
         * @return {@code this}
         */
        public Builder scene(com.aliyun.ros.cdk.core.IResolvable scene) {
            this.scene = scene;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: The bidding policy of preemptible instances.
         *                     Valid values:
         *                     NoSpot: applies to regular pay-as-you-go instances.
         *                     SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices.
         *                     SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase.
         *                     Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid.
         *                     Default value: NoSpot.
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: The bidding policy of preemptible instances.
         *                     Valid values:
         *                     NoSpot: applies to regular pay-as-you-go instances.
         *                     SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices.
         *                     SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase.
         *                     Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid.
         *                     Default value: NoSpot.
         * @return {@code this}
         */
        public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: The category of the system disk.
         *                           Valid values:
         *                           cloud_efficiency: ultra disk
         *                           cloud_ssd: standard SSD
         *                           cloud_essd: enhanced SSD (ESSD)
         *                           cloud: basic disk
         *                           For non-I/O optimized instances, the default value is cloud.
         *                           For I/O optimized instances, the default value is cloud_efficiency.
         * @return {@code this}
         */
        public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getSystemDiskCategory}
         * @param systemDiskCategory Property systemDiskCategory: The category of the system disk.
         *                           Valid values:
         *                           cloud_efficiency: ultra disk
         *                           cloud_ssd: standard SSD
         *                           cloud_essd: enhanced SSD (ESSD)
         *                           cloud: basic disk
         *                           For non-I/O optimized instances, the default value is cloud.
         *                           For I/O optimized instances, the default value is cloud_efficiency.
         * @return {@code this}
         */
        public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the alternative instance types.
         *               You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getZoneId}
         * @param zoneId Property zoneId: The zone ID of the alternative instance types.
         *               You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getZoneMatchMode}
         * @param zoneMatchMode Property zoneMatchMode: Specifies which alternative instance types are recommended.
         *                      Valid values:
         *                      Strict: recommends only alternative instance types in the zone specified by ZoneId.
         *                      Include: recommends all instance types in all the zones in the same region as the specified instance type.
         *                      When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
         * @return {@code this}
         */
        public Builder zoneMatchMode(java.lang.String zoneMatchMode) {
            this.zoneMatchMode = zoneMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link RecommendInstanceTypesProps#getZoneMatchMode}
         * @param zoneMatchMode Property zoneMatchMode: Specifies which alternative instance types are recommended.
         *                      Valid values:
         *                      Strict: recommends only alternative instance types in the zone specified by ZoneId.
         *                      Include: recommends all instance types in all the zones in the same region as the specified instance type.
         *                      When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
         * @return {@code this}
         */
        public Builder zoneMatchMode(com.aliyun.ros.cdk.core.IResolvable zoneMatchMode) {
            this.zoneMatchMode = zoneMatchMode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RecommendInstanceTypesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RecommendInstanceTypesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RecommendInstanceTypesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RecommendInstanceTypesProps {
        private final java.lang.Object cores;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object instanceFamilyLevel;
        private final java.lang.Object instanceType;
        private final java.lang.Object instanceTypeFamilies;
        private final java.lang.Object ioOptimized;
        private final java.lang.Object maxPrice;
        private final java.lang.Object memory;
        private final java.lang.Object priorityStrategy;
        private final java.lang.Object scene;
        private final java.lang.Object spotStrategy;
        private final java.lang.Object systemDiskCategory;
        private final java.lang.Object zoneId;
        private final java.lang.Object zoneMatchMode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cores = software.amazon.jsii.Kernel.get(this, "cores", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceFamilyLevel = software.amazon.jsii.Kernel.get(this, "instanceFamilyLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceTypeFamilies = software.amazon.jsii.Kernel.get(this, "instanceTypeFamilies", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioOptimized = software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxPrice = software.amazon.jsii.Kernel.get(this, "maxPrice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priorityStrategy = software.amazon.jsii.Kernel.get(this, "priorityStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scene = software.amazon.jsii.Kernel.get(this, "scene", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneMatchMode = software.amazon.jsii.Kernel.get(this, "zoneMatchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cores = builder.cores;
            this.instanceChargeType = builder.instanceChargeType;
            this.instanceFamilyLevel = builder.instanceFamilyLevel;
            this.instanceType = builder.instanceType;
            this.instanceTypeFamilies = builder.instanceTypeFamilies;
            this.ioOptimized = builder.ioOptimized;
            this.maxPrice = builder.maxPrice;
            this.memory = builder.memory;
            this.priorityStrategy = builder.priorityStrategy;
            this.scene = builder.scene;
            this.spotStrategy = builder.spotStrategy;
            this.systemDiskCategory = builder.systemDiskCategory;
            this.zoneId = builder.zoneId;
            this.zoneMatchMode = builder.zoneMatchMode;
        }

        @Override
        public final java.lang.Object getCores() {
            return this.cores;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getInstanceFamilyLevel() {
            return this.instanceFamilyLevel;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getInstanceTypeFamilies() {
            return this.instanceTypeFamilies;
        }

        @Override
        public final java.lang.Object getIoOptimized() {
            return this.ioOptimized;
        }

        @Override
        public final java.lang.Object getMaxPrice() {
            return this.maxPrice;
        }

        @Override
        public final java.lang.Object getMemory() {
            return this.memory;
        }

        @Override
        public final java.lang.Object getPriorityStrategy() {
            return this.priorityStrategy;
        }

        @Override
        public final java.lang.Object getScene() {
            return this.scene;
        }

        @Override
        public final java.lang.Object getSpotStrategy() {
            return this.spotStrategy;
        }

        @Override
        public final java.lang.Object getSystemDiskCategory() {
            return this.systemDiskCategory;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getZoneMatchMode() {
            return this.zoneMatchMode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getCores() != null) {
                data.set("cores", om.valueToTree(this.getCores()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getInstanceFamilyLevel() != null) {
                data.set("instanceFamilyLevel", om.valueToTree(this.getInstanceFamilyLevel()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getInstanceTypeFamilies() != null) {
                data.set("instanceTypeFamilies", om.valueToTree(this.getInstanceTypeFamilies()));
            }
            if (this.getIoOptimized() != null) {
                data.set("ioOptimized", om.valueToTree(this.getIoOptimized()));
            }
            if (this.getMaxPrice() != null) {
                data.set("maxPrice", om.valueToTree(this.getMaxPrice()));
            }
            if (this.getMemory() != null) {
                data.set("memory", om.valueToTree(this.getMemory()));
            }
            if (this.getPriorityStrategy() != null) {
                data.set("priorityStrategy", om.valueToTree(this.getPriorityStrategy()));
            }
            if (this.getScene() != null) {
                data.set("scene", om.valueToTree(this.getScene()));
            }
            if (this.getSpotStrategy() != null) {
                data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
            }
            if (this.getSystemDiskCategory() != null) {
                data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }
            if (this.getZoneMatchMode() != null) {
                data.set("zoneMatchMode", om.valueToTree(this.getZoneMatchMode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.RecommendInstanceTypesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RecommendInstanceTypesProps.Jsii$Proxy that = (RecommendInstanceTypesProps.Jsii$Proxy) o;

            if (this.cores != null ? !this.cores.equals(that.cores) : that.cores != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.instanceFamilyLevel != null ? !this.instanceFamilyLevel.equals(that.instanceFamilyLevel) : that.instanceFamilyLevel != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.instanceTypeFamilies != null ? !this.instanceTypeFamilies.equals(that.instanceTypeFamilies) : that.instanceTypeFamilies != null) return false;
            if (this.ioOptimized != null ? !this.ioOptimized.equals(that.ioOptimized) : that.ioOptimized != null) return false;
            if (this.maxPrice != null ? !this.maxPrice.equals(that.maxPrice) : that.maxPrice != null) return false;
            if (this.memory != null ? !this.memory.equals(that.memory) : that.memory != null) return false;
            if (this.priorityStrategy != null ? !this.priorityStrategy.equals(that.priorityStrategy) : that.priorityStrategy != null) return false;
            if (this.scene != null ? !this.scene.equals(that.scene) : that.scene != null) return false;
            if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
            if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
            if (this.zoneId != null ? !this.zoneId.equals(that.zoneId) : that.zoneId != null) return false;
            return this.zoneMatchMode != null ? this.zoneMatchMode.equals(that.zoneMatchMode) : that.zoneMatchMode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cores != null ? this.cores.hashCode() : 0;
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.instanceFamilyLevel != null ? this.instanceFamilyLevel.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.instanceTypeFamilies != null ? this.instanceTypeFamilies.hashCode() : 0);
            result = 31 * result + (this.ioOptimized != null ? this.ioOptimized.hashCode() : 0);
            result = 31 * result + (this.maxPrice != null ? this.maxPrice.hashCode() : 0);
            result = 31 * result + (this.memory != null ? this.memory.hashCode() : 0);
            result = 31 * result + (this.priorityStrategy != null ? this.priorityStrategy.hashCode() : 0);
            result = 31 * result + (this.scene != null ? this.scene.hashCode() : 0);
            result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
            result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            result = 31 * result + (this.zoneMatchMode != null ? this.zoneMatchMode.hashCode() : 0);
            return result;
        }
    }
}
