package com.aliyun.ros.cdk.ebs.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::EBS::DedicatedBlockStorageCluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:04.294Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.datasource.DedicatedBlockStorageCluster")
public class DedicatedBlockStorageCluster extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ebs.datasource.IDedicatedBlockStorageCluster {

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
    public DedicatedBlockStorageCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageClusterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DedicatedBlockStorageCluster(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageClusterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AvailableCapacity: The available capacity of the dedicated block storage cluster.
     * <p>
     * Unit: GiB.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAvailableCapacity() {
        return software.amazon.jsii.Kernel.get(this, "attrAvailableCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Category: The category of disks that can be created in the dedicated block storage cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCategory() {
        return software.amazon.jsii.Kernel.get(this, "attrCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The time when the dedicated block storage cluster was created.
     * <p>
     * The value is a UNIX timestamp. Unit: seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedBlockStorageClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedBlockStorageClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DedicatedBlockStorageClusterName: The name of the dedicated block storage cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDedicatedBlockStorageClusterName() {
        return software.amazon.jsii.Kernel.get(this, "attrDedicatedBlockStorageClusterName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DeliveryCapacity: The capacity to be delivered for the dedicated block storage cluster.
     * <p>
     * Unit: GiB.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDeliveryCapacity() {
        return software.amazon.jsii.Kernel.get(this, "attrDeliveryCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the dedicated block storage cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExpiredTime: The expiration time of the dedicated block storage cluster, in the Unix timestamp format, in seconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
        return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PerformanceLevel: The performance level of disks.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPerformanceLevel() {
        return software.amazon.jsii.Kernel.get(this, "attrPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SupportedCategory: This parameter is not supported.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportedCategory() {
        return software.amazon.jsii.Kernel.get(this, "attrSupportedCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tags of the dedicated block storage cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TotalCapacity: The total capacity of the dedicated block storage cluster.
     * <p>
     * Unit: GiB.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTotalCapacity() {
        return software.amazon.jsii.Kernel.get(this, "attrTotalCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Type: The dedicated block storage cluster performance type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UsedCapacity: The used (created disk) capacity of the current cluster, in GB.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUsedCapacity() {
        return software.amazon.jsii.Kernel.get(this, "attrUsedCapacity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneId: The zone ID of the dedicated block storage cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageClusterProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageClusterProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageCluster}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageCluster> {
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
        private final com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageClusterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageClusterProps.Builder();
        }

        /**
         * Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedBlockStorageClusterId Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster. This parameter is required.
         */
        public Builder dedicatedBlockStorageClusterId(final java.lang.String dedicatedBlockStorageClusterId) {
            this.props.dedicatedBlockStorageClusterId(dedicatedBlockStorageClusterId);
            return this;
        }
        /**
         * Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedBlockStorageClusterId Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster. This parameter is required.
         */
        public Builder dedicatedBlockStorageClusterId(final com.aliyun.ros.cdk.core.IResolvable dedicatedBlockStorageClusterId) {
            this.props.dedicatedBlockStorageClusterId(dedicatedBlockStorageClusterId);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageCluster}.
         */
        @Override
        public com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageCluster build() {
            return new com.aliyun.ros.cdk.ebs.datasource.DedicatedBlockStorageCluster(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
