package com.aliyun.ros.cdk.rds.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::RDS::Zones</code>, which is used to query the zones that are available to an ApsaraDB RDS instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:57.105Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.datasource.Zones")
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
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Zones(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.datasource.ZonesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Zones(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.datasource.ZonesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ZoneIds: The list of zone IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrZoneIds() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Zones: The list of The Zones.
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.datasource.ZonesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rds.datasource.ZonesProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.datasource.ZonesProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.datasource.Zones}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.datasource.Zones> {
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
        private final com.aliyun.ros.cdk.rds.datasource.ZonesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.datasource.ZonesProps.Builder();
        }

        /**
         * Property engine: The database engine that is run by the instance.
         * <p>
         * @return {@code this}
         * @param engine Property engine: The database engine that is run by the instance. This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props.engine(engine);
            return this;
        }
        /**
         * Property engine: The database engine that is run by the instance.
         * <p>
         * @return {@code this}
         * @param engine Property engine: The database engine that is run by the instance. This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
            this.props.engine(engine);
            return this;
        }

        /**
         * Property category: The RDS edition of the instance.
         * <p>
         * Valid values:
         * Basic: RDS Basic Edition
         * HighAvailability: RDS High-availability Edition
         * AlwaysOn: RDS Cluster Edition
         * Finance: RDS Enterprise Edition
         * <p>
         * @return {@code this}
         * @param category Property category: The RDS edition of the instance. This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props.category(category);
            return this;
        }
        /**
         * Property category: The RDS edition of the instance.
         * <p>
         * Valid values:
         * Basic: RDS Basic Edition
         * HighAvailability: RDS High-availability Edition
         * AlwaysOn: RDS Cluster Edition
         * Finance: RDS Enterprise Edition
         * <p>
         * @return {@code this}
         * @param category Property category: The RDS edition of the instance. This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props.category(category);
            return this;
        }

        /**
         * Property commodityCode: The commodity code of the instance.
         * <p>
         * @return {@code this}
         * @param commodityCode Property commodityCode: The commodity code of the instance. This parameter is required.
         */
        public Builder commodityCode(final java.lang.String commodityCode) {
            this.props.commodityCode(commodityCode);
            return this;
        }
        /**
         * Property commodityCode: The commodity code of the instance.
         * <p>
         * @return {@code this}
         * @param commodityCode Property commodityCode: The commodity code of the instance. This parameter is required.
         */
        public Builder commodityCode(final com.aliyun.ros.cdk.core.IResolvable commodityCode) {
            this.props.commodityCode(commodityCode);
            return this;
        }

        /**
         * Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported.
         * <p>
         * Valid values:
         * 1: returns the zones.
         * 0: does not return the zones.
         * Default value: 0.
         * <p>
         * @return {@code this}
         * @param dispenseMode Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. This parameter is required.
         */
        public Builder dispenseMode(final java.lang.String dispenseMode) {
            this.props.dispenseMode(dispenseMode);
            return this;
        }
        /**
         * Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported.
         * <p>
         * Valid values:
         * 1: returns the zones.
         * 0: does not return the zones.
         * Default value: 0.
         * <p>
         * @return {@code this}
         * @param dispenseMode Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. This parameter is required.
         */
        public Builder dispenseMode(final com.aliyun.ros.cdk.core.IResolvable dispenseMode) {
            this.props.dispenseMode(dispenseMode);
            return this;
        }

        /**
         * Property engineVersion: The version of the database engine that is run by the instance.
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: The version of the database engine that is run by the instance. This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }
        /**
         * Property engineVersion: The version of the database engine that is run by the instance.
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: The version of the database engine that is run by the instance. This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone in which the instance is located.
         * <p>
         * If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone in which the instance is located. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone in which the instance is located.
         * <p>
         * If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone in which the instance is located. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rds.datasource.Zones}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.datasource.Zones build() {
            return new com.aliyun.ros.cdk.rds.datasource.Zones(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
