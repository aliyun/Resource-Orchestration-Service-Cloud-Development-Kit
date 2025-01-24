package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::Ipam</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-01-23T09:30:45.008Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.Ipam")
public class Ipam extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.IIpam {

    protected Ipam(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Ipam(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Ipam(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Ipam(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The creation time of the IPAM.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DefaultResourceDiscoveryAssociationId: After an IPAM is created, the association between the resource discovery created by the system by default and the IPAM.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultResourceDiscoveryAssociationId() {
        return software.amazon.jsii.Kernel.get(this, "attrDefaultResourceDiscoveryAssociationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DefaultResourceDiscoveryId: After IPAM is created, the system creates resource discovery by default.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefaultResourceDiscoveryId() {
        return software.amazon.jsii.Kernel.get(this, "attrDefaultResourceDiscoveryId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpamDescription: The description of IPAM.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpamId: The first ID of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IpamName: The name of the IPAM.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamName() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OperatingRegionList: List of IPAM effective regions.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOperatingRegionList() {
        return software.amazon.jsii.Kernel.get(this, "attrOperatingRegionList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PrivateDefaultScopeId: After an IPAM is created, the scope of the private network IPAM created by the system by default.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateDefaultScopeId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateDefaultScopeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PublicDefaultScopeId: After an IPAM is created, the public network IPAM is created by default.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicDefaultScopeId() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicDefaultScopeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceDiscoveryAssociationCount: The number of resource discovery objects associated with IPAM.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceDiscoveryAssociationCount() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceDiscoveryAssociationCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tag of the IPAM.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.IpamProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.Ipam}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.Ipam> {
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
        private final com.aliyun.ros.cdk.vpc.IpamProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.IpamProps.Builder();
        }

        /**
         * Property operatingRegionList: List of IPAM effective regions.
         * <p>
         * @return {@code this}
         * @param operatingRegionList Property operatingRegionList: List of IPAM effective regions. This parameter is required.
         */
        public Builder operatingRegionList(final com.aliyun.ros.cdk.core.IResolvable operatingRegionList) {
            this.props.operatingRegionList(operatingRegionList);
            return this;
        }
        /**
         * Property operatingRegionList: List of IPAM effective regions.
         * <p>
         * @return {@code this}
         * @param operatingRegionList Property operatingRegionList: List of IPAM effective regions. This parameter is required.
         */
        public Builder operatingRegionList(final java.util.List<? extends java.lang.Object> operatingRegionList) {
            this.props.operatingRegionList(operatingRegionList);
            return this;
        }

        /**
         * Property ipamDescription: The description of IPAM.
         * <p>
         * It must be 2 to 256 characters in length and must start with an uppercase letter or a Chinese character, but cannot start with 'http:// 'or 'https. If the description is not filled in, it is blank. The default value is blank.
         * <p>
         * @return {@code this}
         * @param ipamDescription Property ipamDescription: The description of IPAM. This parameter is required.
         */
        public Builder ipamDescription(final java.lang.String ipamDescription) {
            this.props.ipamDescription(ipamDescription);
            return this;
        }
        /**
         * Property ipamDescription: The description of IPAM.
         * <p>
         * It must be 2 to 256 characters in length and must start with an uppercase letter or a Chinese character, but cannot start with 'http:// 'or 'https. If the description is not filled in, it is blank. The default value is blank.
         * <p>
         * @return {@code this}
         * @param ipamDescription Property ipamDescription: The description of IPAM. This parameter is required.
         */
        public Builder ipamDescription(final com.aliyun.ros.cdk.core.IResolvable ipamDescription) {
            this.props.ipamDescription(ipamDescription);
            return this;
        }

        /**
         * Property ipamName: The name of the IPAM.
         * <p>
         * @return {@code this}
         * @param ipamName Property ipamName: The name of the IPAM. This parameter is required.
         */
        public Builder ipamName(final java.lang.String ipamName) {
            this.props.ipamName(ipamName);
            return this;
        }
        /**
         * Property ipamName: The name of the IPAM.
         * <p>
         * @return {@code this}
         * @param ipamName Property ipamName: The name of the IPAM. This parameter is required.
         */
        public Builder ipamName(final com.aliyun.ros.cdk.core.IResolvable ipamName) {
            this.props.ipamName(ipamName);
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
         * Property tags: Tags of ipam.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of ipam. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.vpc.RosIpam.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.Ipam}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.Ipam build() {
            return new com.aliyun.ros.cdk.vpc.Ipam(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
