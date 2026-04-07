package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::IpamPool</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.910Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.IpamPool")
public class IpamPool extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.IIpamPool {

    protected IpamPool(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected IpamPool(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public IpamPool(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamPoolProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public IpamPool(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamPoolProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute IpamPoolId: The ID of the IPAM pool.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIpamPoolId() {
        return software.amazon.jsii.Kernel.get(this, "attrIpamPoolId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.IpamPoolProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.IpamPoolProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.IpamPool}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.IpamPool> {
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
        private final com.aliyun.ros.cdk.vpc.IpamPoolProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.IpamPoolProps.Builder();
        }

        /**
         * Property ipamScopeId: The ID of the IPAM scope.
         * <p>
         * This parameter is required.
         * <p>
         * @return {@code this}
         * @param ipamScopeId Property ipamScopeId: The ID of the IPAM scope. This parameter is required.
         */
        public Builder ipamScopeId(final java.lang.String ipamScopeId) {
            this.props.ipamScopeId(ipamScopeId);
            return this;
        }
        /**
         * Property ipamScopeId: The ID of the IPAM scope.
         * <p>
         * This parameter is required.
         * <p>
         * @return {@code this}
         * @param ipamScopeId Property ipamScopeId: The ID of the IPAM scope. This parameter is required.
         */
        public Builder ipamScopeId(final com.aliyun.ros.cdk.core.IResolvable ipamScopeId) {
            this.props.ipamScopeId(ipamScopeId);
            return this;
        }

        /**
         * Property allocationDefaultCidrMask: The default CIDR mask for allocation.
         * <p>
         * @return {@code this}
         * @param allocationDefaultCidrMask Property allocationDefaultCidrMask: The default CIDR mask for allocation. This parameter is required.
         */
        public Builder allocationDefaultCidrMask(final java.lang.Number allocationDefaultCidrMask) {
            this.props.allocationDefaultCidrMask(allocationDefaultCidrMask);
            return this;
        }
        /**
         * Property allocationDefaultCidrMask: The default CIDR mask for allocation.
         * <p>
         * @return {@code this}
         * @param allocationDefaultCidrMask Property allocationDefaultCidrMask: The default CIDR mask for allocation. This parameter is required.
         */
        public Builder allocationDefaultCidrMask(final com.aliyun.ros.cdk.core.IResolvable allocationDefaultCidrMask) {
            this.props.allocationDefaultCidrMask(allocationDefaultCidrMask);
            return this;
        }

        /**
         * Property allocationMaxCidrMask: The maximum CIDR mask for allocation.
         * <p>
         * @return {@code this}
         * @param allocationMaxCidrMask Property allocationMaxCidrMask: The maximum CIDR mask for allocation. This parameter is required.
         */
        public Builder allocationMaxCidrMask(final java.lang.Number allocationMaxCidrMask) {
            this.props.allocationMaxCidrMask(allocationMaxCidrMask);
            return this;
        }
        /**
         * Property allocationMaxCidrMask: The maximum CIDR mask for allocation.
         * <p>
         * @return {@code this}
         * @param allocationMaxCidrMask Property allocationMaxCidrMask: The maximum CIDR mask for allocation. This parameter is required.
         */
        public Builder allocationMaxCidrMask(final com.aliyun.ros.cdk.core.IResolvable allocationMaxCidrMask) {
            this.props.allocationMaxCidrMask(allocationMaxCidrMask);
            return this;
        }

        /**
         * Property allocationMinCidrMask: The minimum CIDR mask for allocation.
         * <p>
         * @return {@code this}
         * @param allocationMinCidrMask Property allocationMinCidrMask: The minimum CIDR mask for allocation. This parameter is required.
         */
        public Builder allocationMinCidrMask(final java.lang.Number allocationMinCidrMask) {
            this.props.allocationMinCidrMask(allocationMinCidrMask);
            return this;
        }
        /**
         * Property allocationMinCidrMask: The minimum CIDR mask for allocation.
         * <p>
         * @return {@code this}
         * @param allocationMinCidrMask Property allocationMinCidrMask: The minimum CIDR mask for allocation. This parameter is required.
         */
        public Builder allocationMinCidrMask(final com.aliyun.ros.cdk.core.IResolvable allocationMinCidrMask) {
            this.props.allocationMinCidrMask(allocationMinCidrMask);
            return this;
        }

        /**
         * Property autoImport: Whether to automatically import the IPAM pool.
         * <p>
         * @return {@code this}
         * @param autoImport Property autoImport: Whether to automatically import the IPAM pool. This parameter is required.
         */
        public Builder autoImport(final java.lang.Boolean autoImport) {
            this.props.autoImport(autoImport);
            return this;
        }
        /**
         * Property autoImport: Whether to automatically import the IPAM pool.
         * <p>
         * @return {@code this}
         * @param autoImport Property autoImport: Whether to automatically import the IPAM pool. This parameter is required.
         */
        public Builder autoImport(final com.aliyun.ros.cdk.core.IResolvable autoImport) {
            this.props.autoImport(autoImport);
            return this;
        }

        /**
         * Property ipamPoolDescription: The description of the IPAM pool.
         * <p>
         * @return {@code this}
         * @param ipamPoolDescription Property ipamPoolDescription: The description of the IPAM pool. This parameter is required.
         */
        public Builder ipamPoolDescription(final java.lang.String ipamPoolDescription) {
            this.props.ipamPoolDescription(ipamPoolDescription);
            return this;
        }
        /**
         * Property ipamPoolDescription: The description of the IPAM pool.
         * <p>
         * @return {@code this}
         * @param ipamPoolDescription Property ipamPoolDescription: The description of the IPAM pool. This parameter is required.
         */
        public Builder ipamPoolDescription(final com.aliyun.ros.cdk.core.IResolvable ipamPoolDescription) {
            this.props.ipamPoolDescription(ipamPoolDescription);
            return this;
        }

        /**
         * Property ipamPoolName: The name of the IPAM pool.
         * <p>
         * @return {@code this}
         * @param ipamPoolName Property ipamPoolName: The name of the IPAM pool. This parameter is required.
         */
        public Builder ipamPoolName(final java.lang.String ipamPoolName) {
            this.props.ipamPoolName(ipamPoolName);
            return this;
        }
        /**
         * Property ipamPoolName: The name of the IPAM pool.
         * <p>
         * @return {@code this}
         * @param ipamPoolName Property ipamPoolName: The name of the IPAM pool. This parameter is required.
         */
        public Builder ipamPoolName(final com.aliyun.ros.cdk.core.IResolvable ipamPoolName) {
            this.props.ipamPoolName(ipamPoolName);
            return this;
        }

        /**
         * Property ipv6Isp: The IPv6 ISP for the IPAM pool.
         * <p>
         * @return {@code this}
         * @param ipv6Isp Property ipv6Isp: The IPv6 ISP for the IPAM pool. This parameter is required.
         */
        public Builder ipv6Isp(final java.lang.String ipv6Isp) {
            this.props.ipv6Isp(ipv6Isp);
            return this;
        }
        /**
         * Property ipv6Isp: The IPv6 ISP for the IPAM pool.
         * <p>
         * @return {@code this}
         * @param ipv6Isp Property ipv6Isp: The IPv6 ISP for the IPAM pool. This parameter is required.
         */
        public Builder ipv6Isp(final com.aliyun.ros.cdk.core.IResolvable ipv6Isp) {
            this.props.ipv6Isp(ipv6Isp);
            return this;
        }

        /**
         * Property ipVersion: The IP version of the IPAM pool.
         * <p>
         * Valid values: IPv4, IPv6.
         * <p>
         * @return {@code this}
         * @param ipVersion Property ipVersion: The IP version of the IPAM pool. This parameter is required.
         */
        public Builder ipVersion(final java.lang.String ipVersion) {
            this.props.ipVersion(ipVersion);
            return this;
        }
        /**
         * Property ipVersion: The IP version of the IPAM pool.
         * <p>
         * Valid values: IPv4, IPv6.
         * <p>
         * @return {@code this}
         * @param ipVersion Property ipVersion: The IP version of the IPAM pool. This parameter is required.
         */
        public Builder ipVersion(final com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.props.ipVersion(ipVersion);
            return this;
        }

        /**
         * Property poolRegionId: The ID of the region where the IPAM pool is located.
         * <p>
         * @return {@code this}
         * @param poolRegionId Property poolRegionId: The ID of the region where the IPAM pool is located. This parameter is required.
         */
        public Builder poolRegionId(final java.lang.String poolRegionId) {
            this.props.poolRegionId(poolRegionId);
            return this;
        }
        /**
         * Property poolRegionId: The ID of the region where the IPAM pool is located.
         * <p>
         * @return {@code this}
         * @param poolRegionId Property poolRegionId: The ID of the region where the IPAM pool is located. This parameter is required.
         */
        public Builder poolRegionId(final com.aliyun.ros.cdk.core.IResolvable poolRegionId) {
            this.props.poolRegionId(poolRegionId);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the IPAM pool belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the IPAM pool belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the IPAM pool belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the IPAM pool belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property sourceIpamPoolId: The ID of the source IPAM pool.
         * <p>
         * @return {@code this}
         * @param sourceIpamPoolId Property sourceIpamPoolId: The ID of the source IPAM pool. This parameter is required.
         */
        public Builder sourceIpamPoolId(final java.lang.String sourceIpamPoolId) {
            this.props.sourceIpamPoolId(sourceIpamPoolId);
            return this;
        }
        /**
         * Property sourceIpamPoolId: The ID of the source IPAM pool.
         * <p>
         * @return {@code this}
         * @param sourceIpamPoolId Property sourceIpamPoolId: The ID of the source IPAM pool. This parameter is required.
         */
        public Builder sourceIpamPoolId(final com.aliyun.ros.cdk.core.IResolvable sourceIpamPoolId) {
            this.props.sourceIpamPoolId(sourceIpamPoolId);
            return this;
        }

        /**
         * Property tags: The tags of the IPAM pool.
         * <p>
         * The maximum length is 21.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The tags of the IPAM pool. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.vpc.RosIpamPool.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.IpamPool}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.IpamPool build() {
            return new com.aliyun.ros.cdk.vpc.IpamPool(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
