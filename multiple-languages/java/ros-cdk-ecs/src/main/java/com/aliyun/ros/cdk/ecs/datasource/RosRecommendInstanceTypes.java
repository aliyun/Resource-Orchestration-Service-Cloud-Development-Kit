package com.aliyun.ros.cdk.ecs.datasource;

/**
 * This class is a base encapsulation around the ROS resource type <code>DATASOURCE::ECS::RecommendInstanceTypes</code>, which is used to query the recommended Elastic Compute Service (ECS) instance types.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:55.091Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.RosRecommendInstanceTypes")
public class RosRecommendInstanceTypes extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRecommendInstanceTypes(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRecommendInstanceTypes(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.datasource.RosRecommendInstanceTypes.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRecommendInstanceTypes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.RosRecommendInstanceTypesProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceTypeIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceTypeIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceTypes() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceTypes", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCores() {
        return software.amazon.jsii.Kernel.get(this, "cores", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCores(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cores", value);
    }

    /**
     */
    public void setCores(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cores", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceChargeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceChargeType", value);
    }

    /**
     */
    public void setInstanceChargeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceChargeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceFamilyLevel() {
        return software.amazon.jsii.Kernel.get(this, "instanceFamilyLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceFamilyLevel(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceFamilyLevel", value);
    }

    /**
     */
    public void setInstanceFamilyLevel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceFamilyLevel", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceType", value);
    }

    /**
     */
    public void setInstanceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceTypeFamilies() {
        return software.amazon.jsii.Kernel.get(this, "instanceTypeFamilies", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceTypeFamilies(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceTypeFamilies", value);
    }

    /**
     */
    public void setInstanceTypeFamilies(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "instanceTypeFamilies", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIoOptimized() {
        return software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIoOptimized(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ioOptimized", value);
    }

    /**
     */
    public void setIoOptimized(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ioOptimized", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxPrice() {
        return software.amazon.jsii.Kernel.get(this, "maxPrice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxPrice(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxPrice", value);
    }

    /**
     */
    public void setMaxPrice(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxPrice", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMemory() {
        return software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMemory(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "memory", value);
    }

    /**
     */
    public void setMemory(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "memory", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPriorityStrategy() {
        return software.amazon.jsii.Kernel.get(this, "priorityStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPriorityStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "priorityStrategy", value);
    }

    /**
     */
    public void setPriorityStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "priorityStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScene() {
        return software.amazon.jsii.Kernel.get(this, "scene", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScene(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scene", value);
    }

    /**
     */
    public void setScene(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scene", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
        return software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpotStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spotStrategy", value);
    }

    /**
     */
    public void setSpotStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spotStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
        return software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemDiskCategory(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskCategory", value);
    }

    /**
     */
    public void setSystemDiskCategory(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemDiskCategory", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getZoneMatchMode() {
        return software.amazon.jsii.Kernel.get(this, "zoneMatchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneMatchMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneMatchMode", value);
    }

    /**
     */
    public void setZoneMatchMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneMatchMode", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.RosRecommendInstanceTypes}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.RosRecommendInstanceTypes> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ecs.datasource.RosRecommendInstanceTypesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.datasource.RosRecommendInstanceTypesProps.Builder();
        }

        /**
         * @return {@code this}
         * @param cores This parameter is required.
         */
        public Builder cores(final java.lang.Number cores) {
            this.props.cores(cores);
            return this;
        }
        /**
         * @return {@code this}
         * @param cores This parameter is required.
         */
        public Builder cores(final com.aliyun.ros.cdk.core.IResolvable cores) {
            this.props.cores(cores);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceChargeType This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceChargeType This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceFamilyLevel This parameter is required.
         */
        public Builder instanceFamilyLevel(final java.lang.String instanceFamilyLevel) {
            this.props.instanceFamilyLevel(instanceFamilyLevel);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceFamilyLevel This parameter is required.
         */
        public Builder instanceFamilyLevel(final com.aliyun.ros.cdk.core.IResolvable instanceFamilyLevel) {
            this.props.instanceFamilyLevel(instanceFamilyLevel);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceType This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceType This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props.instanceType(instanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceTypeFamilies This parameter is required.
         */
        public Builder instanceTypeFamilies(final com.aliyun.ros.cdk.core.IResolvable instanceTypeFamilies) {
            this.props.instanceTypeFamilies(instanceTypeFamilies);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceTypeFamilies This parameter is required.
         */
        public Builder instanceTypeFamilies(final java.util.List<? extends java.lang.Object> instanceTypeFamilies) {
            this.props.instanceTypeFamilies(instanceTypeFamilies);
            return this;
        }

        /**
         * @return {@code this}
         * @param ioOptimized This parameter is required.
         */
        public Builder ioOptimized(final java.lang.String ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }
        /**
         * @return {@code this}
         * @param ioOptimized This parameter is required.
         */
        public Builder ioOptimized(final com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.props.ioOptimized(ioOptimized);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxPrice This parameter is required.
         */
        public Builder maxPrice(final java.lang.Number maxPrice) {
            this.props.maxPrice(maxPrice);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxPrice This parameter is required.
         */
        public Builder maxPrice(final com.aliyun.ros.cdk.core.IResolvable maxPrice) {
            this.props.maxPrice(maxPrice);
            return this;
        }

        /**
         * @return {@code this}
         * @param memory This parameter is required.
         */
        public Builder memory(final java.lang.Number memory) {
            this.props.memory(memory);
            return this;
        }
        /**
         * @return {@code this}
         * @param memory This parameter is required.
         */
        public Builder memory(final com.aliyun.ros.cdk.core.IResolvable memory) {
            this.props.memory(memory);
            return this;
        }

        /**
         * @return {@code this}
         * @param priorityStrategy This parameter is required.
         */
        public Builder priorityStrategy(final java.lang.String priorityStrategy) {
            this.props.priorityStrategy(priorityStrategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param priorityStrategy This parameter is required.
         */
        public Builder priorityStrategy(final com.aliyun.ros.cdk.core.IResolvable priorityStrategy) {
            this.props.priorityStrategy(priorityStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param scene This parameter is required.
         */
        public Builder scene(final java.lang.String scene) {
            this.props.scene(scene);
            return this;
        }
        /**
         * @return {@code this}
         * @param scene This parameter is required.
         */
        public Builder scene(final com.aliyun.ros.cdk.core.IResolvable scene) {
            this.props.scene(scene);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotStrategy This parameter is required.
         */
        public Builder spotStrategy(final java.lang.String spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param spotStrategy This parameter is required.
         */
        public Builder spotStrategy(final com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemDiskCategory This parameter is required.
         */
        public Builder systemDiskCategory(final java.lang.String systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemDiskCategory This parameter is required.
         */
        public Builder systemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.props.systemDiskCategory(systemDiskCategory);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneMatchMode This parameter is required.
         */
        public Builder zoneMatchMode(final java.lang.String zoneMatchMode) {
            this.props.zoneMatchMode(zoneMatchMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneMatchMode This parameter is required.
         */
        public Builder zoneMatchMode(final com.aliyun.ros.cdk.core.IResolvable zoneMatchMode) {
            this.props.zoneMatchMode(zoneMatchMode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.RosRecommendInstanceTypes}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.RosRecommendInstanceTypes build() {
            return new com.aliyun.ros.cdk.ecs.datasource.RosRecommendInstanceTypes(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
