package com.aliyun.ros.cdk.hbase;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::HBase::MultiZoneCluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.385Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbase.$Module.class, fqn = "@alicloud/ros-cdk-hbase.MultiZoneCluster")
public class MultiZoneCluster extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.hbase.IMultiZoneCluster {

    protected MultiZoneCluster(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MultiZoneCluster(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public MultiZoneCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbase.MultiZoneClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public MultiZoneCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbase.MultiZoneClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: The ID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceConnAddrs: LIST of ServiceConnAddr.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceConnAddrs() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceConnAddrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SlbConnAddrs: LIST of SlbConnAddr.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlbConnAddrs() {
        return software.amazon.jsii.Kernel.get(this, "attrSlbConnAddrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ThriftConn: Thrift Connection address list.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrThriftConn() {
        return software.amazon.jsii.Kernel.get(this, "attrThriftConn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UiProxyConnAddrInfo: WebUI connection information list.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUiProxyConnAddrInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrUiProxyConnAddrInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZkConnAddrs: List of ZkConnAddr.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZkConnAddrs() {
        return software.amazon.jsii.Kernel.get(this, "attrZkConnAddrs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbase.MultiZoneClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbase.MultiZoneClusterProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.hbase.MultiZoneCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbase.MultiZoneCluster> {
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
        private final com.aliyun.ros.cdk.hbase.MultiZoneClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbase.MultiZoneClusterProps.Builder();
        }

        /**
         * Property arbiterVSwitchId: Arbitration virtual switch ID.
         * <p>
         * The switch must be in the availability zone corresponding to ArbiterZoneId.
         * <p>
         * @return {@code this}
         * @param arbiterVSwitchId Property arbiterVSwitchId: Arbitration virtual switch ID. This parameter is required.
         */
        public Builder arbiterVSwitchId(final java.lang.String arbiterVSwitchId) {
            this.props.arbiterVSwitchId(arbiterVSwitchId);
            return this;
        }
        /**
         * Property arbiterVSwitchId: Arbitration virtual switch ID.
         * <p>
         * The switch must be in the availability zone corresponding to ArbiterZoneId.
         * <p>
         * @return {@code this}
         * @param arbiterVSwitchId Property arbiterVSwitchId: Arbitration virtual switch ID. This parameter is required.
         */
        public Builder arbiterVSwitchId(final com.aliyun.ros.cdk.core.IResolvable arbiterVSwitchId) {
            this.props.arbiterVSwitchId(arbiterVSwitchId);
            return this;
        }

        /**
         * Property arbiterZoneId: Arbiter zond id.
         * <p>
         * @return {@code this}
         * @param arbiterZoneId Property arbiterZoneId: Arbiter zond id. This parameter is required.
         */
        public Builder arbiterZoneId(final java.lang.String arbiterZoneId) {
            this.props.arbiterZoneId(arbiterZoneId);
            return this;
        }
        /**
         * Property arbiterZoneId: Arbiter zond id.
         * <p>
         * @return {@code this}
         * @param arbiterZoneId Property arbiterZoneId: Arbiter zond id. This parameter is required.
         */
        public Builder arbiterZoneId(final com.aliyun.ros.cdk.core.IResolvable arbiterZoneId) {
            this.props.arbiterZoneId(arbiterZoneId);
            return this;
        }

        /**
         * Property archVersion: Version of the deployment architecture.
         * <p>
         * Currently, only the hbaseue engine type is supported. The value can be 2.0.
         * <p>
         * @return {@code this}
         * @param archVersion Property archVersion: Version of the deployment architecture. This parameter is required.
         */
        public Builder archVersion(final java.lang.String archVersion) {
            this.props.archVersion(archVersion);
            return this;
        }
        /**
         * Property archVersion: Version of the deployment architecture.
         * <p>
         * Currently, only the hbaseue engine type is supported. The value can be 2.0.
         * <p>
         * @return {@code this}
         * @param archVersion Property archVersion: Version of the deployment architecture. This parameter is required.
         */
        public Builder archVersion(final com.aliyun.ros.cdk.core.IResolvable archVersion) {
            this.props.archVersion(archVersion);
            return this;
        }

        /**
         * Property coreDiskSize: The value ranges from 400 GB to 64,000 GB.
         * <p>
         * The step size is 40 GB.
         * <p>
         * @return {@code this}
         * @param coreDiskSize Property coreDiskSize: The value ranges from 400 GB to 64,000 GB. This parameter is required.
         */
        public Builder coreDiskSize(final java.lang.Number coreDiskSize) {
            this.props.coreDiskSize(coreDiskSize);
            return this;
        }
        /**
         * Property coreDiskSize: The value ranges from 400 GB to 64,000 GB.
         * <p>
         * The step size is 40 GB.
         * <p>
         * @return {@code this}
         * @param coreDiskSize Property coreDiskSize: The value ranges from 400 GB to 64,000 GB. This parameter is required.
         */
        public Builder coreDiskSize(final com.aliyun.ros.cdk.core.IResolvable coreDiskSize) {
            this.props.coreDiskSize(coreDiskSize);
            return this;
        }

        /**
         * Property coreDiskType: Core node disk type.
         * <p>
         * Valid values:
         * cloud_efficiency
         * cloud_ssd
         * local_hdd_pro
         * local_ssd_pro
         * <p>
         * @return {@code this}
         * @param coreDiskType Property coreDiskType: Core node disk type. This parameter is required.
         */
        public Builder coreDiskType(final java.lang.String coreDiskType) {
            this.props.coreDiskType(coreDiskType);
            return this;
        }
        /**
         * Property coreDiskType: Core node disk type.
         * <p>
         * Valid values:
         * cloud_efficiency
         * cloud_ssd
         * local_hdd_pro
         * local_ssd_pro
         * <p>
         * @return {@code this}
         * @param coreDiskType Property coreDiskType: Core node disk type. This parameter is required.
         */
        public Builder coreDiskType(final com.aliyun.ros.cdk.core.IResolvable coreDiskType) {
            this.props.coreDiskType(coreDiskType);
            return this;
        }

        /**
         * Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
         * <p>
         * @return {@code this}
         * @param coreInstanceType Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter. This parameter is required.
         */
        public Builder coreInstanceType(final java.lang.String coreInstanceType) {
            this.props.coreInstanceType(coreInstanceType);
            return this;
        }
        /**
         * Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
         * <p>
         * @return {@code this}
         * @param coreInstanceType Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter. This parameter is required.
         */
        public Builder coreInstanceType(final com.aliyun.ros.cdk.core.IResolvable coreInstanceType) {
            this.props.coreInstanceType(coreInstanceType);
            return this;
        }

        /**
         * Property coreNodeCount: Number of Core nodes.
         * <p>
         * The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
         * <p>
         * @return {@code this}
         * @param coreNodeCount Property coreNodeCount: Number of Core nodes. This parameter is required.
         */
        public Builder coreNodeCount(final java.lang.Number coreNodeCount) {
            this.props.coreNodeCount(coreNodeCount);
            return this;
        }
        /**
         * Property coreNodeCount: Number of Core nodes.
         * <p>
         * The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
         * <p>
         * @return {@code this}
         * @param coreNodeCount Property coreNodeCount: Number of Core nodes. This parameter is required.
         */
        public Builder coreNodeCount(final com.aliyun.ros.cdk.core.IResolvable coreNodeCount) {
            this.props.coreNodeCount(coreNodeCount);
            return this;
        }

        /**
         * Property engine: Service type.
         * <p>
         * Currently, only HBase enhanced version is supported. The value can be hbaseue.
         * <p>
         * @return {@code this}
         * @param engine Property engine: Service type. This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props.engine(engine);
            return this;
        }
        /**
         * Property engine: Service type.
         * <p>
         * Currently, only HBase enhanced version is supported. The value can be hbaseue.
         * <p>
         * @return {@code this}
         * @param engine Property engine: Service type. This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
            this.props.engine(engine);
            return this;
        }

        /**
         * Property engineVersion: The version of the engine.
         * <p>
         * Valid values:
         * hbaseue:2.0
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: The version of the engine. This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }
        /**
         * Property engineVersion: The version of the engine.
         * <p>
         * Valid values:
         * hbaseue:2.0
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: The version of the engine. This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props.engineVersion(engineVersion);
            return this;
        }

        /**
         * Property logDiskSize: log disk size.
         * <p>
         * The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
         * <p>
         * @return {@code this}
         * @param logDiskSize Property logDiskSize: log disk size. This parameter is required.
         */
        public Builder logDiskSize(final java.lang.Number logDiskSize) {
            this.props.logDiskSize(logDiskSize);
            return this;
        }
        /**
         * Property logDiskSize: log disk size.
         * <p>
         * The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
         * <p>
         * @return {@code this}
         * @param logDiskSize Property logDiskSize: log disk size. This parameter is required.
         */
        public Builder logDiskSize(final com.aliyun.ros.cdk.core.IResolvable logDiskSize) {
            this.props.logDiskSize(logDiskSize);
            return this;
        }

        /**
         * Property logDiskType: Log node disk type.
         * <p>
         * Valid values:
         * cloud_efficiency
         * cloud_ssd
         * local_hdd_pro
         * local_ssd_pro
         * <p>
         * @return {@code this}
         * @param logDiskType Property logDiskType: Log node disk type. This parameter is required.
         */
        public Builder logDiskType(final java.lang.String logDiskType) {
            this.props.logDiskType(logDiskType);
            return this;
        }
        /**
         * Property logDiskType: Log node disk type.
         * <p>
         * Valid values:
         * cloud_efficiency
         * cloud_ssd
         * local_hdd_pro
         * local_ssd_pro
         * <p>
         * @return {@code this}
         * @param logDiskType Property logDiskType: Log node disk type. This parameter is required.
         */
        public Builder logDiskType(final com.aliyun.ros.cdk.core.IResolvable logDiskType) {
            this.props.logDiskType(logDiskType);
            return this;
        }

        /**
         * Property logInstanceType: Log instance type.
         * <p>
         * @return {@code this}
         * @param logInstanceType Property logInstanceType: Log instance type. This parameter is required.
         */
        public Builder logInstanceType(final java.lang.String logInstanceType) {
            this.props.logInstanceType(logInstanceType);
            return this;
        }
        /**
         * Property logInstanceType: Log instance type.
         * <p>
         * @return {@code this}
         * @param logInstanceType Property logInstanceType: Log instance type. This parameter is required.
         */
        public Builder logInstanceType(final com.aliyun.ros.cdk.core.IResolvable logInstanceType) {
            this.props.logInstanceType(logInstanceType);
            return this;
        }

        /**
         * Property logNodeCount: Log number of nodes.
         * <p>
         * The value of log nodes ranges from 4 to 400 and is a multiple of 4.
         * <p>
         * @return {@code this}
         * @param logNodeCount Property logNodeCount: Log number of nodes. This parameter is required.
         */
        public Builder logNodeCount(final java.lang.Number logNodeCount) {
            this.props.logNodeCount(logNodeCount);
            return this;
        }
        /**
         * Property logNodeCount: Log number of nodes.
         * <p>
         * The value of log nodes ranges from 4 to 400 and is a multiple of 4.
         * <p>
         * @return {@code this}
         * @param logNodeCount Property logNodeCount: Log number of nodes. This parameter is required.
         */
        public Builder logNodeCount(final com.aliyun.ros.cdk.core.IResolvable logNodeCount) {
            this.props.logNodeCount(logNodeCount);
            return this;
        }

        /**
         * Property multiZoneCombination: Availability zone combination.
         * <p>
         * @return {@code this}
         * @param multiZoneCombination Property multiZoneCombination: Availability zone combination. This parameter is required.
         */
        public Builder multiZoneCombination(final java.lang.String multiZoneCombination) {
            this.props.multiZoneCombination(multiZoneCombination);
            return this;
        }
        /**
         * Property multiZoneCombination: Availability zone combination.
         * <p>
         * @return {@code this}
         * @param multiZoneCombination Property multiZoneCombination: Availability zone combination. This parameter is required.
         */
        public Builder multiZoneCombination(final com.aliyun.ros.cdk.core.IResolvable multiZoneCombination) {
            this.props.multiZoneCombination(multiZoneCombination);
            return this;
        }

        /**
         * Property payType: The billing method.
         * <p>
         * Prepaid: The subscription billing method is used.
         * Postpaid: The pay-as-you-go billing method is used.
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: The billing method.
         * <p>
         * Prepaid: The subscription billing method is used.
         * Postpaid: The pay-as-you-go billing method is used.
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.
         * <p>
         * @return {@code this}
         * @param primaryVSwitchId Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId. This parameter is required.
         */
        public Builder primaryVSwitchId(final java.lang.String primaryVSwitchId) {
            this.props.primaryVSwitchId(primaryVSwitchId);
            return this;
        }
        /**
         * Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.
         * <p>
         * @return {@code this}
         * @param primaryVSwitchId Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId. This parameter is required.
         */
        public Builder primaryVSwitchId(final com.aliyun.ros.cdk.core.IResolvable primaryVSwitchId) {
            this.props.primaryVSwitchId(primaryVSwitchId);
            return this;
        }

        /**
         * Property primaryZoneId: Availability zone ID of the primary availability zone instance.
         * <p>
         * @return {@code this}
         * @param primaryZoneId Property primaryZoneId: Availability zone ID of the primary availability zone instance. This parameter is required.
         */
        public Builder primaryZoneId(final java.lang.String primaryZoneId) {
            this.props.primaryZoneId(primaryZoneId);
            return this;
        }
        /**
         * Property primaryZoneId: Availability zone ID of the primary availability zone instance.
         * <p>
         * @return {@code this}
         * @param primaryZoneId Property primaryZoneId: Availability zone ID of the primary availability zone instance. This parameter is required.
         */
        public Builder primaryZoneId(final com.aliyun.ros.cdk.core.IResolvable primaryZoneId) {
            this.props.primaryZoneId(primaryZoneId);
            return this;
        }

        /**
         * Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.
         * <p>
         * @return {@code this}
         * @param standbyVSwitchId Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId. This parameter is required.
         */
        public Builder standbyVSwitchId(final java.lang.String standbyVSwitchId) {
            this.props.standbyVSwitchId(standbyVSwitchId);
            return this;
        }
        /**
         * Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.
         * <p>
         * @return {@code this}
         * @param standbyVSwitchId Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId. This parameter is required.
         */
        public Builder standbyVSwitchId(final com.aliyun.ros.cdk.core.IResolvable standbyVSwitchId) {
            this.props.standbyVSwitchId(standbyVSwitchId);
            return this;
        }

        /**
         * Property standbyZoneId: Standby zone id.
         * <p>
         * @return {@code this}
         * @param standbyZoneId Property standbyZoneId: Standby zone id. This parameter is required.
         */
        public Builder standbyZoneId(final java.lang.String standbyZoneId) {
            this.props.standbyZoneId(standbyZoneId);
            return this;
        }
        /**
         * Property standbyZoneId: Standby zone id.
         * <p>
         * @return {@code this}
         * @param standbyZoneId Property standbyZoneId: Standby zone id. This parameter is required.
         */
        public Builder standbyZoneId(final com.aliyun.ros.cdk.core.IResolvable standbyZoneId) {
            this.props.standbyZoneId(standbyZoneId);
            return this;
        }

        /**
         * Property autoRenewPeriod: The auto-renewal period.
         * <p>
         * Unit: month.
         * The default value of this parameter is 0. This value indicates that auto-renewal is
         * disabled.
         * If this parameter is set to 2, the instance is automatically renewed for a two-month
         * subscription after the instance expires.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The auto-renewal period. This parameter is required.
         */
        public Builder autoRenewPeriod(final java.lang.Number autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }
        /**
         * Property autoRenewPeriod: The auto-renewal period.
         * <p>
         * Unit: month.
         * The default value of this parameter is 0. This value indicates that auto-renewal is
         * disabled.
         * If this parameter is set to 2, the instance is automatically renewed for a two-month
         * subscription after the instance expires.
         * <p>
         * @return {@code this}
         * @param autoRenewPeriod Property autoRenewPeriod: The auto-renewal period. This parameter is required.
         */
        public Builder autoRenewPeriod(final com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.props.autoRenewPeriod(autoRenewPeriod);
            return this;
        }

        /**
         * Property clusterName: The name of the instance.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         * (.), underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: The name of the instance. This parameter is required.
         */
        public Builder clusterName(final java.lang.String clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }
        /**
         * Property clusterName: The name of the instance.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
         * (.), underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param clusterName Property clusterName: The name of the instance. This parameter is required.
         */
        public Builder clusterName(final com.aliyun.ros.cdk.core.IResolvable clusterName) {
            this.props.clusterName(clusterName);
            return this;
        }

        /**
         * Property deletionProtection: Specifies whether to enable the release protection feature for the cluster.
         * <p>
         * Default is false.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable the release protection feature for the cluster. This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }
        /**
         * Property deletionProtection: Specifies whether to enable the release protection feature for the cluster.
         * <p>
         * Default is false.
         * <p>
         * @return {@code this}
         * @param deletionProtection Property deletionProtection: Specifies whether to enable the release protection feature for the cluster. This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }

        /**
         * Property masterInstanceType: The instance type of the master node.
         * <p>
         * You can call the DescribeAvailableResource operation to obtain the value of this parameter.
         * <p>
         * @return {@code this}
         * @param masterInstanceType Property masterInstanceType: The instance type of the master node. This parameter is required.
         */
        public Builder masterInstanceType(final java.lang.String masterInstanceType) {
            this.props.masterInstanceType(masterInstanceType);
            return this;
        }
        /**
         * Property masterInstanceType: The instance type of the master node.
         * <p>
         * You can call the DescribeAvailableResource operation to obtain the value of this parameter.
         * <p>
         * @return {@code this}
         * @param masterInstanceType Property masterInstanceType: The instance type of the master node. This parameter is required.
         */
        public Builder masterInstanceType(final com.aliyun.ros.cdk.core.IResolvable masterInstanceType) {
            this.props.masterInstanceType(masterInstanceType);
            return this;
        }

        /**
         * Property period: The subscription period.
         * <p>
         * This parameter only takes effect when the PayType parameter is set to Prepaid.
         * When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
         * from 1 to 5.
         * When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
         * from 1 to 9.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription period.
         * <p>
         * This parameter only takes effect when the PayType parameter is set to Prepaid.
         * When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
         * from 1 to 5.
         * When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
         * from 1 to 9.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The unit of the subscription period.
         * <p>
         * Valid values:
         * year
         * month
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription period. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of the subscription period.
         * <p>
         * Valid values:
         * year
         * month
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the subscription period. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * You can query the group ID in the resource group console.
         * If you leave this parameter empty, the instance is allocated to the default resource
         * group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * You can query the group ID in the resource group console.
         * If you leave this parameter empty, the instance is allocated to the default resource
         * group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property securityIpList: The IP addresses in the whitelist.
         * <p>
         * Example: 192.168.<em>.</em>/24. The 0.0.0.0/0 value cannot
         * be added to the whitelist. Separate multiple IP addresses with commas (,).
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The IP addresses in the whitelist. This parameter is required.
         */
        public Builder securityIpList(final java.lang.String securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * Property securityIpList: The IP addresses in the whitelist.
         * <p>
         * Example: 192.168.<em>.</em>/24. The 0.0.0.0/0 value cannot
         * be added to the whitelist. Separate multiple IP addresses with commas (,).
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The IP addresses in the whitelist. This parameter is required.
         */
        public Builder securityIpList(final com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }

        /**
         * Property vpcId: The ID of the virtual private cloud (VPC).
         * <p>
         * If you leave this parameter and the VSwitchId
         * parameter empty, the classic network type is used. The VPC network type is preferred.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the virtual private cloud (VPC).
         * <p>
         * If you leave this parameter and the VSwitchId
         * parameter empty, the classic network type is used. The VPC network type is preferred.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hbase.MultiZoneCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.hbase.MultiZoneCluster build() {
            return new com.aliyun.ros.cdk.hbase.MultiZoneCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
