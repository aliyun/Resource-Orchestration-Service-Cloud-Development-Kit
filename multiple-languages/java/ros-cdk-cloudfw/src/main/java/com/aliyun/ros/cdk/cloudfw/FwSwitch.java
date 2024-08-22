package com.aliyun.ros.cdk.cloudfw;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CLOUDFW::FwSwitch</code>, which is used to enable a firewall.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:18.373Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.FwSwitch")
public class FwSwitch extends com.aliyun.ros.cdk.core.Resource {

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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.FwSwitchProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudfw.FwSwitchProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.FwSwitchProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
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
         * Property resourceTypeList: The asset type list.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>BastionHostIP: Bastion machine exit IP.</li>
         * <li>BastionHostIngressIP: The entrance IP of the fortress machine.</li>
         * <li>EcsEIP: ECS EIP.</li>
         * <li>EcsPublicIP: ECS public network IP.</li>
         * <li>EIP: Elastic Public IP.</li>
         * <li>EniEIP: Elastic Network card EIP.</li>
         * <li>NatEIP: NAT EIP.</li>
         * <li>SlbEIP: SLB EIP.</li>
         * <li>SlbPublicIP: SLB public network IP.</li>
         * <li>NatPublicIP: NAT public IP</li>
         * <li>HAVIP: High Availability Virtual IP.
         * <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param resourceTypeList Property resourceTypeList: The asset type list. This parameter is required.
         */
        public Builder resourceTypeList(final java.util.List<? extends java.lang.Object> resourceTypeList) {
            this.props().resourceTypeList(resourceTypeList);
            return this;
        }
        /**
         * Property resourceTypeList: The asset type list.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>BastionHostIP: Bastion machine exit IP.</li>
         * <li>BastionHostIngressIP: The entrance IP of the fortress machine.</li>
         * <li>EcsEIP: ECS EIP.</li>
         * <li>EcsPublicIP: ECS public network IP.</li>
         * <li>EIP: Elastic Public IP.</li>
         * <li>EniEIP: Elastic Network card EIP.</li>
         * <li>NatEIP: NAT EIP.</li>
         * <li>SlbEIP: SLB EIP.</li>
         * <li>SlbPublicIP: SLB public network IP.</li>
         * <li>NatPublicIP: NAT public IP</li>
         * <li>HAVIP: High Availability Virtual IP.
         * <strong>Note</strong>: The IpaddrList, RegionList, and ResourceTypeList arguments are not allowed to be empty at the same time. A value must be set for one of the three arguments.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param resourceTypeList Property resourceTypeList: The asset type list. This parameter is required.
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
