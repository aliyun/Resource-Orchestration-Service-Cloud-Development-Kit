package com.aliyun.ros.cdk.vpc.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::EIP::Addresses</code>, which is used to query the information about elastic IP addresses (EIPs).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:31.298Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.Addresses")
public class Addresses extends com.aliyun.ros.cdk.core.Resource {

    protected Addresses(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Addresses(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Addresses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.AddressesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Addresses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.AddressesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Addresses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute Addresses: The details about the EIP.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddresses() {
        return software.amazon.jsii.Kernel.get(this, "attrAddresses", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute AllocationIds: The list of allocation IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAllocationIds() {
        return software.amazon.jsii.Kernel.get(this, "attrAllocationIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.Addresses}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.Addresses> {
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
        private com.aliyun.ros.cdk.vpc.datasource.AddressesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property addressName: The name of the EIP.
         * <p>
         * @return {@code this}
         * @param addressName Property addressName: The name of the EIP. This parameter is required.
         */
        public Builder addressName(final java.lang.String addressName) {
            this.props().addressName(addressName);
            return this;
        }
        /**
         * Property addressName: The name of the EIP.
         * <p>
         * @return {@code this}
         * @param addressName Property addressName: The name of the EIP. This parameter is required.
         */
        public Builder addressName(final com.aliyun.ros.cdk.core.IResolvable addressName) {
            this.props().addressName(addressName);
            return this;
        }

        /**
         * Property allocationId: The ID of the EIP that you want to query.
         * <p>
         * @return {@code this}
         * @param allocationId Property allocationId: The ID of the EIP that you want to query. This parameter is required.
         */
        public Builder allocationId(final java.lang.String allocationId) {
            this.props().allocationId(allocationId);
            return this;
        }
        /**
         * Property allocationId: The ID of the EIP that you want to query.
         * <p>
         * @return {@code this}
         * @param allocationId Property allocationId: The ID of the EIP that you want to query. This parameter is required.
         */
        public Builder allocationId(final com.aliyun.ros.cdk.core.IResolvable allocationId) {
            this.props().allocationId(allocationId);
            return this;
        }

        /**
         * Property instanceId: The ID of the cloud resource.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the cloud resource. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the cloud resource.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the cloud resource. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }

        /**
         * Property instanceType: The type of the current bound instance.
         * <p>
         * <ul>
         * <li><strong>EcsInstance</strong>: an ECS instance of the VPC type.</li>
         * <li><strong>SlbInstance</strong>: an SLB instance of the VPC type.</li>
         * <li><strong>Nat</strong>:NAT gateway.</li>
         * <li><strong>HaVip</strong>: a highly available virtual IP address.</li>
         * <li><strong>NetworkInterface</strong>: Secondary ENI.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The type of the current bound instance. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props().instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The type of the current bound instance.
         * <p>
         * <ul>
         * <li><strong>EcsInstance</strong>: an ECS instance of the VPC type.</li>
         * <li><strong>SlbInstance</strong>: an SLB instance of the VPC type.</li>
         * <li><strong>Nat</strong>:NAT gateway.</li>
         * <li><strong>HaVip</strong>: a highly available virtual IP address.</li>
         * <li><strong>NetworkInterface</strong>: Secondary ENI.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The type of the current bound instance. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props().instanceType(instanceType);
            return this;
        }

        /**
         * Property ipAddress: The IP address pool to which the EIP that you want to query belongs.
         * <p>
         * @return {@code this}
         * @param ipAddress Property ipAddress: The IP address pool to which the EIP that you want to query belongs. This parameter is required.
         */
        public Builder ipAddress(final java.lang.String ipAddress) {
            this.props().ipAddress(ipAddress);
            return this;
        }
        /**
         * Property ipAddress: The IP address pool to which the EIP that you want to query belongs.
         * <p>
         * @return {@code this}
         * @param ipAddress Property ipAddress: The IP address pool to which the EIP that you want to query belongs. This parameter is required.
         */
        public Builder ipAddress(final com.aliyun.ros.cdk.core.IResolvable ipAddress) {
            this.props().ipAddress(ipAddress);
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
         * Property paymentType: The billing method of the EIP.
         * <p>
         * Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The billing method of the EIP. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props().paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: The billing method of the EIP.
         * <p>
         * Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The billing method of the EIP. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props().paymentType(paymentType);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the EIPs belong.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the EIPs belong. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the EIPs belong.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the EIPs belong. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property segmentInstanceId: The ID of the consecutive EIPs.
         * <p>
         * This parameter value is returned only if the EIP is a continuous EIP.
         * <p>
         * @return {@code this}
         * @param segmentInstanceId Property segmentInstanceId: The ID of the consecutive EIPs. This parameter is required.
         */
        public Builder segmentInstanceId(final java.lang.String segmentInstanceId) {
            this.props().segmentInstanceId(segmentInstanceId);
            return this;
        }
        /**
         * Property segmentInstanceId: The ID of the consecutive EIPs.
         * <p>
         * This parameter value is returned only if the EIP is a continuous EIP.
         * <p>
         * @return {@code this}
         * @param segmentInstanceId Property segmentInstanceId: The ID of the consecutive EIPs. This parameter is required.
         */
        public Builder segmentInstanceId(final com.aliyun.ros.cdk.core.IResolvable segmentInstanceId) {
            this.props().segmentInstanceId(segmentInstanceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.Addresses}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.Addresses build() {
            return new com.aliyun.ros.cdk.vpc.datasource.Addresses(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.datasource.AddressesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.datasource.AddressesProps.Builder();
            }
            return this.props;
        }
    }
}
