package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::IpamResourceDiscovery</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:55.008Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IpamResourceDiscovery")
public class IpamResourceDiscovery extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.IIpamResourceDiscovery {

    protected IpamResourceDiscovery(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected IpamResourceDiscovery(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public IpamResourceDiscovery(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamResourceDiscoveryProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public IpamResourceDiscovery(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamResourceDiscoveryProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The time when the resource discovery was created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpamResourceDiscoveryDescription: The description of the resource discovery.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamResourceDiscoveryDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamResourceDiscoveryDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpamResourceDiscoveryId: The ID of the resource discovery instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamResourceDiscoveryId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamResourceDiscoveryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpamResourceDiscoveryName: The name of the resource discovery.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamResourceDiscoveryName() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamResourceDiscoveryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OperatingRegionList: The list of regions where the resource discovery is effective.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperatingRegionList() {
        return software.amazon.jsii.Kernel.get(this, "attrOperatingRegionList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tag of the discovery instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Type: The type of resource discovery.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamResourceDiscoveryProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.IpamResourceDiscoveryProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.IpamResourceDiscovery}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.IpamResourceDiscovery> {
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
        private final com.aliyun.ros.cdk.vpc.IpamResourceDiscoveryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.IpamResourceDiscoveryProps.Builder();
        }

        /**
         * Property operatingRegionList: The list of regions where the resource discovery is effective.
         * <p>
         * @return {@code this}
         * @param operatingRegionList Property operatingRegionList: The list of regions where the resource discovery is effective. This parameter is required.
         */
        public Builder operatingRegionList(final com.aliyun.ros.cdk.core.IResolvable operatingRegionList) {
            this.props.operatingRegionList(operatingRegionList);
            return this;
        }
        /**
         * Property operatingRegionList: The list of regions where the resource discovery is effective.
         * <p>
         * @return {@code this}
         * @param operatingRegionList Property operatingRegionList: The list of regions where the resource discovery is effective. This parameter is required.
         */
        public Builder operatingRegionList(final java.util.List<? extends java.lang.Object> operatingRegionList) {
            this.props.operatingRegionList(operatingRegionList);
            return this;
        }

        /**
         * Property ipamResourceDiscoveryDescription: The description of the resource discovery.
         * <p>
         * @return {@code this}
         * @param ipamResourceDiscoveryDescription Property ipamResourceDiscoveryDescription: The description of the resource discovery. This parameter is required.
         */
        public Builder ipamResourceDiscoveryDescription(final java.lang.String ipamResourceDiscoveryDescription) {
            this.props.ipamResourceDiscoveryDescription(ipamResourceDiscoveryDescription);
            return this;
        }
        /**
         * Property ipamResourceDiscoveryDescription: The description of the resource discovery.
         * <p>
         * @return {@code this}
         * @param ipamResourceDiscoveryDescription Property ipamResourceDiscoveryDescription: The description of the resource discovery. This parameter is required.
         */
        public Builder ipamResourceDiscoveryDescription(final com.aliyun.ros.cdk.core.IResolvable ipamResourceDiscoveryDescription) {
            this.props.ipamResourceDiscoveryDescription(ipamResourceDiscoveryDescription);
            return this;
        }

        /**
         * Property ipamResourceDiscoveryName: The name of the resource discovery.
         * <p>
         * @return {@code this}
         * @param ipamResourceDiscoveryName Property ipamResourceDiscoveryName: The name of the resource discovery. This parameter is required.
         */
        public Builder ipamResourceDiscoveryName(final java.lang.String ipamResourceDiscoveryName) {
            this.props.ipamResourceDiscoveryName(ipamResourceDiscoveryName);
            return this;
        }
        /**
         * Property ipamResourceDiscoveryName: The name of the resource discovery.
         * <p>
         * @return {@code this}
         * @param ipamResourceDiscoveryName Property ipamResourceDiscoveryName: The name of the resource discovery. This parameter is required.
         */
        public Builder ipamResourceDiscoveryName(final com.aliyun.ros.cdk.core.IResolvable ipamResourceDiscoveryName) {
            this.props.ipamResourceDiscoveryName(ipamResourceDiscoveryName);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
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
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags of ipam resource discovery.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of ipam resource discovery. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.vpc.RosIpamResourceDiscovery.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.IpamResourceDiscovery}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.IpamResourceDiscovery build() {
            return new com.aliyun.ros.cdk.vpc.IpamResourceDiscovery(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
