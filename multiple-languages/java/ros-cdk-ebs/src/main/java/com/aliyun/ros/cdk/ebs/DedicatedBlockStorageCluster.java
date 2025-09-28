package com.aliyun.ros.cdk.ebs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::EBS::DedicatedBlockStorageCluster</code>, which is used to create a dedicated block storage cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:23.669Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.DedicatedBlockStorageCluster")
public class DedicatedBlockStorageCluster extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ebs.IDedicatedBlockStorageCluster {

    protected DedicatedBlockStorageCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DedicatedBlockStorageCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DedicatedBlockStorageCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.DedicatedBlockStorageClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DedicatedBlockStorageCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.DedicatedBlockStorageClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedBlockStorageClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedBlockStorageClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.DedicatedBlockStorageClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ebs.DedicatedBlockStorageClusterProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ebs.DedicatedBlockStorageCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ebs.DedicatedBlockStorageCluster> {
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
        private final com.aliyun.ros.cdk.ebs.DedicatedBlockStorageClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ebs.DedicatedBlockStorageClusterProps.Builder();
        }

        /**
         * Property azone: The ID of the zone in which to create the dedicated block storage cluster.
         * <p>
         * @return {@code this}
         * @param azone Property azone: The ID of the zone in which to create the dedicated block storage cluster. This parameter is required.
         */
        public Builder azone(final java.lang.String azone) {
            this.props.azone(azone);
            return this;
        }
        /**
         * Property azone: The ID of the zone in which to create the dedicated block storage cluster.
         * <p>
         * @return {@code this}
         * @param azone Property azone: The ID of the zone in which to create the dedicated block storage cluster. This parameter is required.
         */
        public Builder azone(final com.aliyun.ros.cdk.core.IResolvable azone) {
            this.props.azone(azone);
            return this;
        }

        /**
         * Property capacity: The capacity of the dedicated block storage cluster.
         * <p>
         * Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
         * <p>
         * @return {@code this}
         * @param capacity Property capacity: The capacity of the dedicated block storage cluster. This parameter is required.
         */
        public Builder capacity(final java.lang.Number capacity) {
            this.props.capacity(capacity);
            return this;
        }
        /**
         * Property capacity: The capacity of the dedicated block storage cluster.
         * <p>
         * Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
         * <p>
         * @return {@code this}
         * @param capacity Property capacity: The capacity of the dedicated block storage cluster. This parameter is required.
         */
        public Builder capacity(final com.aliyun.ros.cdk.core.IResolvable capacity) {
            this.props.capacity(capacity);
            return this;
        }

        /**
         * Property dbscName: The name of the dedicated block storage cluster.
         * <p>
         * @return {@code this}
         * @param dbscName Property dbscName: The name of the dedicated block storage cluster. This parameter is required.
         */
        public Builder dbscName(final java.lang.String dbscName) {
            this.props.dbscName(dbscName);
            return this;
        }
        /**
         * Property dbscName: The name of the dedicated block storage cluster.
         * <p>
         * @return {@code this}
         * @param dbscName Property dbscName: The name of the dedicated block storage cluster. This parameter is required.
         */
        public Builder dbscName(final com.aliyun.ros.cdk.core.IResolvable dbscName) {
            this.props.dbscName(dbscName);
            return this;
        }

        /**
         * Property period: The subscription duration of the dedicated block storage cluster.
         * <p>
         * Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription duration of the dedicated block storage cluster. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription duration of the dedicated block storage cluster.
         * <p>
         * Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription duration of the dedicated block storage cluster. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The unit of the subscription duration specified by Period.
         * <p>
         * Set the value to Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration specified by Period. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of the subscription duration specified by Period.
         * <p>
         * Set the value to Month.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription duration specified by Period. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property type: The type of the dedicated block storage cluster.
         * <p>
         * Valid values:
         * Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
         * Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
         * Default value: Premium.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the dedicated block storage cluster. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of the dedicated block storage cluster.
         * <p>
         * Valid values:
         * Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
         * Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
         * Default value: Premium.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the dedicated block storage cluster. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which to assign the dedicated block storage cluster.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the dedicated block storage cluster. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which to assign the dedicated block storage cluster.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which to assign the dedicated block storage cluster. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tag: Tags of dedicated block storage cluster.
         * <p>
         * @return {@code this}
         * @param tag Property tag: Tags of dedicated block storage cluster. This parameter is required.
         */
        public Builder tag(final com.aliyun.ros.cdk.core.IResolvable tag) {
            this.props.tag(tag);
            return this;
        }
        /**
         * Property tag: Tags of dedicated block storage cluster.
         * <p>
         * @return {@code this}
         * @param tag Property tag: Tags of dedicated block storage cluster. This parameter is required.
         */
        public Builder tag(final java.util.List<? extends java.lang.Object> tag) {
            this.props.tag(tag);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ebs.DedicatedBlockStorageCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.ebs.DedicatedBlockStorageCluster build() {
            return new com.aliyun.ros.cdk.ebs.DedicatedBlockStorageCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
