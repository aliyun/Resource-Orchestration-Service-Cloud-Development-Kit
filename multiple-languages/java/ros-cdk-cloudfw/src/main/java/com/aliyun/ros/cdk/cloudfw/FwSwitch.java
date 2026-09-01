package com.aliyun.ros.cdk.cloudfw;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CLOUDFW::FwSwitch</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T07:36:02.119Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.FwSwitch")
public class FwSwitch extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cloudfw.IFwSwitch {

    protected FwSwitch(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FwSwitch(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public FwSwitch(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cloudfw.FwSwitchProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public FwSwitch(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cloudfw.FwSwitchProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public FwSwitch(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.FwSwitchProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudfw.FwSwitchProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.FwSwitch}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.FwSwitch> {
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
        private com.aliyun.ros.cdk.cloudfw.FwSwitchProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property ipaddrList: The IP address list.
         * <p>
         * <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
         * <p>
         * @return {@code this}
         * @param ipaddrList Property ipaddrList: The IP address list. This parameter is required.
         */
        public Builder ipaddrList(final java.util.List<? extends java.lang.Object> ipaddrList) {
            this.props().ipaddrList(ipaddrList);
            return this;
        }
        /**
         * Property ipaddrList: The IP address list.
         * <p>
         * <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
         * <p>
         * @return {@code this}
         * @param ipaddrList Property ipaddrList: The IP address list. This parameter is required.
         */
        public Builder ipaddrList(final com.aliyun.ros.cdk.core.IResolvable ipaddrList) {
            this.props().ipaddrList(ipaddrList);
            return this;
        }

        /**
         * Property ipVersion: The IP version number.
         * <p>
         * @return {@code this}
         * @param ipVersion Property ipVersion: The IP version number. This parameter is required.
         */
        public Builder ipVersion(final java.lang.String ipVersion) {
            this.props().ipVersion(ipVersion);
            return this;
        }
        /**
         * Property ipVersion: The IP version number.
         * <p>
         * @return {@code this}
         * @param ipVersion Property ipVersion: The IP version number. This parameter is required.
         */
        public Builder ipVersion(final com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.props().ipVersion(ipVersion);
            return this;
        }

        /**
         * Property memberUid: The member unique identifier.
         * <p>
         * @return {@code this}
         * @param memberUid Property memberUid: The member unique identifier. This parameter is required.
         */
        public Builder memberUid(final java.lang.String memberUid) {
            this.props().memberUid(memberUid);
            return this;
        }
        /**
         * Property memberUid: The member unique identifier.
         * <p>
         * @return {@code this}
         * @param memberUid Property memberUid: The member unique identifier. This parameter is required.
         */
        public Builder memberUid(final com.aliyun.ros.cdk.core.IResolvable memberUid) {
            this.props().memberUid(memberUid);
            return this;
        }

        /**
         * Property regionList: The region list.
         * <p>
         * <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
         * <p>
         * @return {@code this}
         * @param regionList Property regionList: The region list. This parameter is required.
         */
        public Builder regionList(final java.util.List<? extends java.lang.Object> regionList) {
            this.props().regionList(regionList);
            return this;
        }
        /**
         * Property regionList: The region list.
         * <p>
         * <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.
         * <p>
         * @return {@code this}
         * @param regionList Property regionList: The region list. This parameter is required.
         */
        public Builder regionList(final com.aliyun.ros.cdk.core.IResolvable regionList) {
            this.props().regionList(regionList);
            return this;
        }

        /**
         * Property resourceTypeList: The list of asset types.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>BastionHostEgressIP: the egress IP address of a bastion host.</li>
         * <li>BastionHostIngressIP: the ingress IP address of a bastion host.</li>
         * <li>EcsEIP: the EIP of an ECS instance.</li>
         * <li>EcsPublicIP: the public IP address of an ECS instance.</li>
         * <li>EIP: an EIP.</li>
         * <li>EniEIP: the EIP of an ENI.</li>
         * <li>NatEIP: the EIP of a NAT gateway.</li>
         * <li>SlbEIP: the EIP of an SLB instance or a CLB instance.</li>
         * <li>SlbPublicIP: the public IP address of an SLB instance or a CLB instance.</li>
         * <li>NatPublicIP: the public IP address of a NAT gateway.</li>
         * <li>HAVIP: an HAVIP.</li>
         * <li>NlbEIP: the EIP of an NLB instance.</li>
         * <li>ApiGatewayEIP: the public IP address of an API gateway.</li>
         * <li>AlbEIP: the EIP of an ALB instance.</li>
         * <li>AiGatewayEIP: the public IP address of an AI gateway.</li>
         * <li>GaEIP: the EIP of a GA instance.</li>
         * <li>SwasEIP: the public IP address of a Simple Application Server instance.</li>
         * <li>EcdEIP: the public IP address of an Elastic Desktop Service instance.</li>
         * <li>BastionHostIP: the IP address of a bastion host.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * You must specify at least one of the <code>IpaddrList</code>, <code>RegionList</code>, and
         * <code>ResourceTypeList</code> parameters.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param resourceTypeList Property resourceTypeList: The list of asset types. This parameter is required.
         */
        public Builder resourceTypeList(final java.util.List<? extends java.lang.Object> resourceTypeList) {
            this.props().resourceTypeList(resourceTypeList);
            return this;
        }
        /**
         * Property resourceTypeList: The list of asset types.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>BastionHostEgressIP: the egress IP address of a bastion host.</li>
         * <li>BastionHostIngressIP: the ingress IP address of a bastion host.</li>
         * <li>EcsEIP: the EIP of an ECS instance.</li>
         * <li>EcsPublicIP: the public IP address of an ECS instance.</li>
         * <li>EIP: an EIP.</li>
         * <li>EniEIP: the EIP of an ENI.</li>
         * <li>NatEIP: the EIP of a NAT gateway.</li>
         * <li>SlbEIP: the EIP of an SLB instance or a CLB instance.</li>
         * <li>SlbPublicIP: the public IP address of an SLB instance or a CLB instance.</li>
         * <li>NatPublicIP: the public IP address of a NAT gateway.</li>
         * <li>HAVIP: an HAVIP.</li>
         * <li>NlbEIP: the EIP of an NLB instance.</li>
         * <li>ApiGatewayEIP: the public IP address of an API gateway.</li>
         * <li>AlbEIP: the EIP of an ALB instance.</li>
         * <li>AiGatewayEIP: the public IP address of an AI gateway.</li>
         * <li>GaEIP: the EIP of a GA instance.</li>
         * <li>SwasEIP: the public IP address of a Simple Application Server instance.</li>
         * <li>EcdEIP: the public IP address of an Elastic Desktop Service instance.</li>
         * <li>BastionHostIP: the IP address of a bastion host.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * You must specify at least one of the <code>IpaddrList</code>, <code>RegionList</code>, and
         * <code>ResourceTypeList</code> parameters.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param resourceTypeList Property resourceTypeList: The list of asset types. This parameter is required.
         */
        public Builder resourceTypeList(final com.aliyun.ros.cdk.core.IResolvable resourceTypeList) {
            this.props().resourceTypeList(resourceTypeList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.FwSwitch}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.FwSwitch build() {
            return new com.aliyun.ros.cdk.cloudfw.FwSwitch(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.cloudfw.FwSwitchProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.cloudfw.FwSwitchProps.Builder();
            }
            return this.props;
        }
    }
}
