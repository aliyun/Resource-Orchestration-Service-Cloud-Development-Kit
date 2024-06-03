package com.aliyun.ros.cdk.ecs.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ECS::Zones</code>, which is used to query zones.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:51.812Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.Zones")
public class Zones extends com.aliyun.ros.cdk.core.Resource {

    protected Zones(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Zones(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Zones(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.ZonesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Zones(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.ZonesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Zones(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ZoneIds: The list of zone IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneIds() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Zones: The list of zones.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZones() {
        return software.amazon.jsii.Kernel.get(this, "attrZones", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.ZonesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.ZonesProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.ZonesProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.Zones}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.Zones> {
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
        private com.aliyun.ros.cdk.ecs.datasource.ZonesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property dataDiskCategory: The category of the data disk.
         * <p>
         * Valid values:
         * cloud: basic disk
         * cloud_efficiency: ultra disk
         * cloud_ssd: standard SSD
         * ephemeral_ssd: local SSD
         * cloud_essd: enhanced SSD (ESSD)
         * <p>
         * @return {@code this}
         * @param dataDiskCategory Property dataDiskCategory: The category of the data disk. This parameter is required.
         */
        public Builder dataDiskCategory(final java.lang.String dataDiskCategory) {
            this.props().dataDiskCategory(dataDiskCategory);
            return this;
        }
        /**
         * Property dataDiskCategory: The category of the data disk.
         * <p>
         * Valid values:
         * cloud: basic disk
         * cloud_efficiency: ultra disk
         * cloud_ssd: standard SSD
         * ephemeral_ssd: local SSD
         * cloud_essd: enhanced SSD (ESSD)
         * <p>
         * @return {@code this}
         * @param dataDiskCategory Property dataDiskCategory: The category of the data disk. This parameter is required.
         */
        public Builder dataDiskCategory(final com.aliyun.ros.cdk.core.IResolvable dataDiskCategory) {
            this.props().dataDiskCategory(dataDiskCategory);
            return this;
        }

        /**
         * Property instanceChargeType: The billing method of the resource.
         * <p>
         * For more information, see Billing overview. Valid values:
         * PrePaid: subscription
         * PostPaid: pay-as-you-go
         * Default value: PostPaid.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the resource. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: The billing method of the resource.
         * <p>
         * For more information, see Billing overview. Valid values:
         * PrePaid: subscription
         * PostPaid: pay-as-you-go
         * Default value: PostPaid.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the resource. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props().instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property instanceType: The instance type.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props().instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The instance type.
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props().instanceType(instanceType);
            return this;
        }

        /**
         * Property ioOptimized: Specifies whether the instance is I/O optimized.
         * <p>
         * Valid values:
         * none: non-I/O optimized
         * optimized: I/O optimized
         * Default value: optimized.
         * <p>
         * @return {@code this}
         * @param ioOptimized Property ioOptimized: Specifies whether the instance is I/O optimized. This parameter is required.
         */
        public Builder ioOptimized(final java.lang.String ioOptimized) {
            this.props().ioOptimized(ioOptimized);
            return this;
        }
        /**
         * Property ioOptimized: Specifies whether the instance is I/O optimized.
         * <p>
         * Valid values:
         * none: non-I/O optimized
         * optimized: I/O optimized
         * Default value: optimized.
         * <p>
         * @return {@code this}
         * @param ioOptimized Property ioOptimized: Specifies whether the instance is I/O optimized. This parameter is required.
         */
        public Builder ioOptimized(final com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.props().ioOptimized(ioOptimized);
            return this;
        }

        /**
         * Property resourceType: The type of the resource.
         * <p>
         * Valid values:
         * instance: ECS instance
         * disk: cloud disk
         * reservedinstance: reserved instance
         * ddh: dedicated host
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The type of the resource. This parameter is required.
         */
        public Builder resourceType(final java.lang.String resourceType) {
            this.props().resourceType(resourceType);
            return this;
        }
        /**
         * Property resourceType: The type of the resource.
         * <p>
         * Valid values:
         * instance: ECS instance
         * disk: cloud disk
         * reservedinstance: reserved instance
         * ddh: dedicated host
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: The type of the resource. This parameter is required.
         */
        public Builder resourceType(final com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.props().resourceType(resourceType);
            return this;
        }

        /**
         * Property systemDiskCategory: The category of the system disk.
         * <p>
         * Valid values:
         * cloud: basic disk
         * cloud_efficiency: ultra disk
         * cloud_ssd: standard SSD
         * ephemeral_ssd: local SSD
         * cloud_essd: enhanced SSD (ESSD)
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
         * cloud: basic disk
         * cloud_efficiency: ultra disk
         * cloud_ssd: standard SSD
         * ephemeral_ssd: local SSD
         * cloud_essd: enhanced SSD (ESSD)
         * <p>
         * @return {@code this}
         * @param systemDiskCategory Property systemDiskCategory: The category of the system disk. This parameter is required.
         */
        public Builder systemDiskCategory(final com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.props().systemDiskCategory(systemDiskCategory);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.Zones}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.Zones build() {
            return new com.aliyun.ros.cdk.ecs.datasource.Zones(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.datasource.ZonesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.datasource.ZonesProps.Builder();
            }
            return this.props;
        }
    }
}
