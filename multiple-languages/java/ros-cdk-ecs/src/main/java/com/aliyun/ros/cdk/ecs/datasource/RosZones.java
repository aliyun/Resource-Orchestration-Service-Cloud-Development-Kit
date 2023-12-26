package com.aliyun.ros.cdk.ecs.datasource;

/**
 * This class is a base encapsulation around the ROS resource type <code>DATASOURCE::ECS::Zones</code>, which is used to query zones.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:15.704Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.RosZones")
public class RosZones extends com.aliyun.ros.cdk.core.RosResource {

    protected RosZones(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosZones(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.datasource.RosZones.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosZones(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.RosZonesProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneIds() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZones() {
        return software.amazon.jsii.Kernel.get(this, "attrZones", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataDiskCategory() {
        return software.amazon.jsii.Kernel.get(this, "dataDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataDiskCategory(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dataDiskCategory", value);
    }

    /**
     */
    public void setDataDiskCategory(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataDiskCategory", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceType() {
        return software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceType", value);
    }

    /**
     */
    public void setResourceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceType", value);
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.RosZones}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.RosZones> {
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
        private final com.aliyun.ros.cdk.ecs.datasource.RosZonesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.datasource.RosZonesProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dataDiskCategory This parameter is required.
         */
        public Builder dataDiskCategory(final java.lang.String dataDiskCategory) {
            this.props.dataDiskCategory(dataDiskCategory);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataDiskCategory This parameter is required.
         */
        public Builder dataDiskCategory(final com.aliyun.ros.cdk.core.IResolvable dataDiskCategory) {
            this.props.dataDiskCategory(dataDiskCategory);
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
         * @param resourceType This parameter is required.
         */
        public Builder resourceType(final java.lang.String resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceType This parameter is required.
         */
        public Builder resourceType(final com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.props.resourceType(resourceType);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.RosZones}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.RosZones build() {
            return new com.aliyun.ros.cdk.ecs.datasource.RosZones(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
