package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::PublicIpAddressPool</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.356Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.PublicIpAddressPool")
public class PublicIpAddressPool extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.IPublicIpAddressPool {

    protected PublicIpAddressPool(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PublicIpAddressPool(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public PublicIpAddressPool(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.PublicIpAddressPoolProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public PublicIpAddressPool(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.PublicIpAddressPoolProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public PublicIpAddressPool(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute PublicIpAddressPoolId: Example ID of the IP address pool.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIpAddressPoolId() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddressPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.PublicIpAddressPoolProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.PublicIpAddressPoolProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.PublicIpAddressPool}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.PublicIpAddressPool> {
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
        private com.aliyun.ros.cdk.vpc.PublicIpAddressPoolProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property bizType: The business type of IP address pool.Value: Cloudbox: Cloud Box.Cloud box users support to select this type. Default (default): default, indicating non -special types.
         * <p>
         * @return {@code this}
         * @param bizType Property bizType: The business type of IP address pool.Value: Cloudbox: Cloud Box.Cloud box users support to select this type. Default (default): default, indicating non -special types. This parameter is required.
         */
        public Builder bizType(final java.lang.String bizType) {
            this.props().bizType(bizType);
            return this;
        }
        /**
         * Property bizType: The business type of IP address pool.Value: Cloudbox: Cloud Box.Cloud box users support to select this type. Default (default): default, indicating non -special types.
         * <p>
         * @return {@code this}
         * @param bizType Property bizType: The business type of IP address pool.Value: Cloudbox: Cloud Box.Cloud box users support to select this type. Default (default): default, indicating non -special types. This parameter is required.
         */
        public Builder bizType(final com.aliyun.ros.cdk.core.IResolvable bizType) {
            this.props().bizType(bizType);
            return this;
        }

        /**
         * Property description: Description of the address pool instance.
         * <p>
         * The length is 0-256 characters, and you cannot start with http:// or https: //.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the address pool instance. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: Description of the address pool instance.
         * <p>
         * The length is 0-256 characters, and you cannot start with http:// or https: //.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the address pool instance. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property isp: The line type.
         * <p>
         * Valid values:
         * BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
         * BGP_PRO: BGP (Multi-ISP) Pro lines.
         * Only the following regions support BGP (Multi-ISP) Pro lines:
         * China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
         * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
         * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
         * ChinaTelecom: China Telecom
         * ChinaUnicom: China Unicom
         * ChinaMobile: China Mobile
         * ChinaTelecom_L2: China Telecom L2
         * ChinaUnicom_L2: China Unicom L2
         * ChinaMobile_L2: China Mobile L2
         * If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
         * <p>
         * @return {@code this}
         * @param isp Property isp: The line type. This parameter is required.
         */
        public Builder isp(final java.lang.String isp) {
            this.props().isp(isp);
            return this;
        }
        /**
         * Property isp: The line type.
         * <p>
         * Valid values:
         * BGP (default): BGP (Multi-ISP) lines. All regions support BGP (Multi-ISP) EIPs.
         * BGP_PRO: BGP (Multi-ISP) Pro lines.
         * Only the following regions support BGP (Multi-ISP) Pro lines:
         * China (Hong Kong), Singapore, Malaysia (Kuala Lumpur), Philippines (Manila), Indonesia (Jakarta), and Thailand (Bangkok).
         * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
         * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
         * ChinaTelecom: China Telecom
         * ChinaUnicom: China Unicom
         * ChinaMobile: China Mobile
         * ChinaTelecom_L2: China Telecom L2
         * ChinaUnicom_L2: China Unicom L2
         * ChinaMobile_L2: China Mobile L2
         * If your services are deployed in China East 1 Finance, you must set this parameter to BGP_FinanceCloud.
         * <p>
         * @return {@code this}
         * @param isp Property isp: The line type. This parameter is required.
         */
        public Builder isp(final com.aliyun.ros.cdk.core.IResolvable isp) {
            this.props().isp(isp);
            return this;
        }

        /**
         * Property name: The name of the address pool instance.
         * <p>
         * The length is 0-128 characters, and you cannot start with http: // or https: //.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the address pool instance. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props().name(name);
            return this;
        }
        /**
         * Property name: The name of the address pool instance.
         * <p>
         * The length is 0-128 characters, and you cannot start with http: // or https: //.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the address pool instance. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props().name(name);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group that the IP address pool belongs to.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group that the IP address pool belongs to. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group that the IP address pool belongs to.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group that the IP address pool belongs to. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property securityProtectionTypes: Safety protection level.
         * <p>
         * When configured as empty, the default is DDOS protection (basic version).
         * When configured as Antiddos_enhanced, it means DDOS protection (enhanced version).
         * <p>
         * @return {@code this}
         * @param securityProtectionTypes Property securityProtectionTypes: Safety protection level. This parameter is required.
         */
        public Builder securityProtectionTypes(final com.aliyun.ros.cdk.core.IResolvable securityProtectionTypes) {
            this.props().securityProtectionTypes(securityProtectionTypes);
            return this;
        }
        /**
         * Property securityProtectionTypes: Safety protection level.
         * <p>
         * When configured as empty, the default is DDOS protection (basic version).
         * When configured as Antiddos_enhanced, it means DDOS protection (enhanced version).
         * <p>
         * @return {@code this}
         * @param securityProtectionTypes Property securityProtectionTypes: Safety protection level. This parameter is required.
         */
        public Builder securityProtectionTypes(final java.util.List<? extends java.lang.Object> securityProtectionTypes) {
            this.props().securityProtectionTypes(securityProtectionTypes);
            return this;
        }

        /**
         * Property tags: The list of container group tags in the form of key/value pairs.
         * <p>
         * You can define a maximum of 20 tags for each container group.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The list of container group tags in the form of key/value pairs. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.vpc.RosPublicIpAddressPool.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property zones: The available areas of the IP address pool.
         * <p>
         * The Biztype value is Cloudbox, that is, when the type of IP address pool is a cloud box, the parameter must be filled.
         * <p>
         * @return {@code this}
         * @param zones Property zones: The available areas of the IP address pool. This parameter is required.
         */
        public Builder zones(final com.aliyun.ros.cdk.core.IResolvable zones) {
            this.props().zones(zones);
            return this;
        }
        /**
         * Property zones: The available areas of the IP address pool.
         * <p>
         * The Biztype value is Cloudbox, that is, when the type of IP address pool is a cloud box, the parameter must be filled.
         * <p>
         * @return {@code this}
         * @param zones Property zones: The available areas of the IP address pool. This parameter is required.
         */
        public Builder zones(final java.util.List<? extends java.lang.Object> zones) {
            this.props().zones(zones);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.PublicIpAddressPool}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.PublicIpAddressPool build() {
            return new com.aliyun.ros.cdk.vpc.PublicIpAddressPool(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.PublicIpAddressPoolProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.PublicIpAddressPoolProps.Builder();
            }
            return this.props;
        }
    }
}
