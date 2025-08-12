package com.aliyun.ros.cdk.drds.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::DRDS::DrdsInstance</code>, which is used to query the information about a PolarDB-X 1.0 instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.690Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.drds.$Module.class, fqn = "@alicloud/ros-cdk-drds.datasource.DrdsInstance")
public class DrdsInstance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.drds.datasource.IDrdsInstance {

    protected DrdsInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DrdsInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DrdsInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.datasource.DrdsInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DrdsInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.datasource.DrdsInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CommodityCode: The commodity code of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommodityCode() {
        return software.amazon.jsii.Kernel.get(this, "attrCommodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The timestamp that indicates when the instance is created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DrdsInstanceId: The ID of the Drds instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDrdsInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrDrdsInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExpireDate: The timestamp that indicates when the instance expires.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireDate() {
        return software.amazon.jsii.Kernel.get(this, "attrExpireDate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceSeries: The edition of the instance.
     * <p>
     * Valid values:
     * starter: Starter Edition
     * enterprise: Enterprise Edition
     * standard: Standard Edition
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSeries() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceSeries", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceSpec: The specification of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstRole: The role of the instance.
     * <p>
     * Valid values:
     * MASTER: The instance is a primary instance.
     * SLAVE: The instance is a read-only instance to analyze complex queries.
     * SLAVE_FLOW: The instance is a read-only instance for high-concurrency scenarios.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstRole() {
        return software.amazon.jsii.Kernel.get(this, "attrInstRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Label: The tag of the instance.
     * <p>
     * Valid values:
     * NORMAL: The instance is a standard instance.
     * HA: The instance is a high-availability (HA) instance.
     * VPC: The instance is a VPC-based instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabel() {
        return software.amazon.jsii.Kernel.get(this, "attrLabel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MachineType: The machine type of the instance.
     * <p>
     * Valid value: ecs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMachineType() {
        return software.amazon.jsii.Kernel.get(this, "attrMachineType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MasterInstanceId: The ID of the primary instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMasterInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrMasterInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MysqlVersion: Engine version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMysqlVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrMysqlVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NetworkType: The network type of the instance.
     * <p>
     * Valid values:
     * CLASSIC
     * VPC
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNetworkType() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrderInstanceId: The ID of the purchased instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ReadOnlyDBInstanceIds: The IDs of read-only instances that are associated with the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrReadOnlyDbInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrReadOnlyDbInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute StorageType: The storage type of the Drds database.
     * <p>
     * Valid values:
     * RDS
     * PolarDB
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrStorageType() {
        return software.amazon.jsii.Kernel.get(this, "attrStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Type: The type of the instance.
     * <p>
     * Valid values:
     * PUBLIC: The returned instance is a shared instance.
     * PRIVATE: The returned instance is a dedicated instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Version: The version of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VersionAction: Indicates whether the version of the instance can be upgraded.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersionAction() {
        return software.amazon.jsii.Kernel.get(this, "attrVersionAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Vips: The list of returned virtual IP addresses (VIPs).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVips() {
        return software.amazon.jsii.Kernel.get(this, "attrVips", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcCloudInstanceId: The ID of the instance that is deployed in the VPC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcCloudInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcCloudInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneId: The ID of the zone in which the resource is located.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.drds.datasource.DrdsInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.drds.datasource.DrdsInstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.drds.datasource.DrdsInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.drds.datasource.DrdsInstance> {
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
        private final com.aliyun.ros.cdk.drds.datasource.DrdsInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.drds.datasource.DrdsInstanceProps.Builder();
        }

        /**
         * Property drdsInstanceId: The ID of the Drds instance.
         * <p>
         * @return {@code this}
         * @param drdsInstanceId Property drdsInstanceId: The ID of the Drds instance. This parameter is required.
         */
        public Builder drdsInstanceId(final java.lang.String drdsInstanceId) {
            this.props.drdsInstanceId(drdsInstanceId);
            return this;
        }
        /**
         * Property drdsInstanceId: The ID of the Drds instance.
         * <p>
         * @return {@code this}
         * @param drdsInstanceId Property drdsInstanceId: The ID of the Drds instance. This parameter is required.
         */
        public Builder drdsInstanceId(final com.aliyun.ros.cdk.core.IResolvable drdsInstanceId) {
            this.props.drdsInstanceId(drdsInstanceId);
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
            this.props.refreshOptions(refreshOptions);
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
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.drds.datasource.DrdsInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.drds.datasource.DrdsInstance build() {
            return new com.aliyun.ros.cdk.drds.datasource.DrdsInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
