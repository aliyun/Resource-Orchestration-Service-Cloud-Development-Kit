package com.aliyun.ros.cdk.vpc.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::VPC::PublicIpAddressPools</code>, which is used to query available IP address pools.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:12.914Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.PublicIpAddressPools")
public class PublicIpAddressPools extends com.aliyun.ros.cdk.core.Resource {

    protected PublicIpAddressPools(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PublicIpAddressPools(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public PublicIpAddressPools(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.PublicIpAddressPoolsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public PublicIpAddressPools(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.PublicIpAddressPoolsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public PublicIpAddressPools(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute PublicIpAddressPoolIds: The list of public ip address pool IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicIpAddressPoolIds() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddressPoolIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PublicIpAddressPools: The list of public ip address pools.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicIpAddressPools() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIpAddressPools", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.PublicIpAddressPoolsProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.PublicIpAddressPoolsProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.PublicIpAddressPoolsProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.PublicIpAddressPools}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.PublicIpAddressPools> {
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
        private com.aliyun.ros.cdk.vpc.datasource.PublicIpAddressPoolsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property isp: The line type.
         * <p>
         * Valid values:
         * BGP (default): BGP (Multi-ISP) lines
         * BGP_PRO: BGP (Multi-ISP) Pro lines
         * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
         * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
         * ChinaTelecom: China Telecom
         * ChinaUnicom: China Unicom
         * ChinaMobile: China Mobile
         * ChinaTelecom_L2: China Telecom L2
         * ChinaUnicom_L2: China Unicom L2
         * ChinaMobile_L2: China Mobile L2
         * If your services are deployed in China East 1 Finance,
         * this parameter is required and you must set the value to BGP_FinanceCloud.
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
         * BGP (default): BGP (Multi-ISP) lines
         * BGP_PRO: BGP (Multi-ISP) Pro lines
         * For more information about BGP (Multi-ISP) and BGP (Multi-ISP) Pro, see EIP line types.
         * If you are allowed to use single-ISP bandwidth, you can also choose one of the following values:
         * ChinaTelecom: China Telecom
         * ChinaUnicom: China Unicom
         * ChinaMobile: China Mobile
         * ChinaTelecom_L2: China Telecom L2
         * ChinaUnicom_L2: China Unicom L2
         * ChinaMobile_L2: China Mobile L2
         * If your services are deployed in China East 1 Finance,
         * this parameter is required and you must set the value to BGP_FinanceCloud.
         * <p>
         * @return {@code this}
         * @param isp Property isp: The line type. This parameter is required.
         */
        public Builder isp(final com.aliyun.ros.cdk.core.IResolvable isp) {
            this.props().isp(isp);
            return this;
        }

        /**
         * Property publicIpAddressPoolName: The name of the IP address pool.
         * <p>
         * This parameter is optional. The name must be 1 to 128 characters in length,
         * and can contain digits, periods (.), underscores (_), and hyphens (-).
         * The name must start with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param publicIpAddressPoolName Property publicIpAddressPoolName: The name of the IP address pool. This parameter is required.
         */
        public Builder publicIpAddressPoolName(final java.lang.String publicIpAddressPoolName) {
            this.props().publicIpAddressPoolName(publicIpAddressPoolName);
            return this;
        }
        /**
         * Property publicIpAddressPoolName: The name of the IP address pool.
         * <p>
         * This parameter is optional. The name must be 1 to 128 characters in length,
         * and can contain digits, periods (.), underscores (_), and hyphens (-).
         * The name must start with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param publicIpAddressPoolName Property publicIpAddressPoolName: The name of the IP address pool. This parameter is required.
         */
        public Builder publicIpAddressPoolName(final com.aliyun.ros.cdk.core.IResolvable publicIpAddressPoolName) {
            this.props().publicIpAddressPoolName(publicIpAddressPoolName);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the IP address pool belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the IP address pool belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the IP address pool belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.PublicIpAddressPools}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.PublicIpAddressPools build() {
            return new com.aliyun.ros.cdk.vpc.datasource.PublicIpAddressPools(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.datasource.PublicIpAddressPoolsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.datasource.PublicIpAddressPoolsProps.Builder();
            }
            return this.props;
        }
    }
}
