package com.aliyun.ros.cdk.tsdb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::TSDB::HiTSDBInstance</code>, which is used to create a Time Series Database (TSDB) instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:35.510Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.tsdb.$Module.class, fqn = "@alicloud/ros-cdk-tsdb.HiTSDBInstance")
public class HiTSDBInstance extends com.aliyun.ros.cdk.core.Resource {

    protected HiTSDBInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected HiTSDBInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public HiTSDBInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.tsdb.HiTSDBInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public HiTSDBInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.tsdb.HiTSDBInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConnectionString: Connection string of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EngineType: Engine type of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEngineType() {
        return software.amazon.jsii.Kernel.get(this, "attrEngineType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: Order id of created instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PublicConnectionString: Public connection string of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicConnectionString() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicConnectionString", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ReverseVpcIp: Reverse vpc ip of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReverseVpcIp() {
        return software.amazon.jsii.Kernel.get(this, "attrReverseVpcIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ReverseVpcPort: Reverse vpc port of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReverseVpcPort() {
        return software.amazon.jsii.Kernel.get(this, "attrReverseVpcPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.tsdb.HiTSDBInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.tsdb.HiTSDBInstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.tsdb.HiTSDBInstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.tsdb.HiTSDBInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.tsdb.HiTSDBInstance> {
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
        private final com.aliyun.ros.cdk.tsdb.HiTSDBInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.tsdb.HiTSDBInstanceProps.Builder();
        }

        /**
         * Property instanceClass: The type of the instance.
         * <p>
         * @return {@code this}
         * @param instanceClass Property instanceClass: The type of the instance. This parameter is required.
         */
        public Builder instanceClass(final java.lang.String instanceClass) {
            this.props.instanceClass(instanceClass);
            return this;
        }
        /**
         * Property instanceClass: The type of the instance.
         * <p>
         * @return {@code this}
         * @param instanceClass Property instanceClass: The type of the instance. This parameter is required.
         */
        public Builder instanceClass(final com.aliyun.ros.cdk.core.IResolvable instanceClass) {
            this.props.instanceClass(instanceClass);
            return this;
        }

        /**
         * Property instanceStorage: The storage capacity of the instance.
         * <p>
         * Unit: GB. For example, the value 50 indicates 50 GB.
         * <p>
         * @return {@code this}
         * @param instanceStorage Property instanceStorage: The storage capacity of the instance. This parameter is required.
         */
        public Builder instanceStorage(final java.lang.Number instanceStorage) {
            this.props.instanceStorage(instanceStorage);
            return this;
        }
        /**
         * Property instanceStorage: The storage capacity of the instance.
         * <p>
         * Unit: GB. For example, the value 50 indicates 50 GB.
         * <p>
         * @return {@code this}
         * @param instanceStorage Property instanceStorage: The storage capacity of the instance. This parameter is required.
         */
        public Builder instanceStorage(final com.aliyun.ros.cdk.core.IResolvable instanceStorage) {
            this.props.instanceStorage(instanceStorage);
            return this;
        }

        /**
         * Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the VSwitch in the specified VPC.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch in the specified VPC. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the VSwitch in the specified VPC.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch in the specified VPC. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The zone ID of the instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the instance. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone ID of the instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the instance. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property diskCategory: The category of disk.
         * <p>
         * @return {@code this}
         * @param diskCategory Property diskCategory: The category of disk. This parameter is required.
         */
        public Builder diskCategory(final java.lang.String diskCategory) {
            this.props.diskCategory(diskCategory);
            return this;
        }
        /**
         * Property diskCategory: The category of disk.
         * <p>
         * @return {@code this}
         * @param diskCategory Property diskCategory: The category of disk. This parameter is required.
         */
        public Builder diskCategory(final com.aliyun.ros.cdk.core.IResolvable diskCategory) {
            this.props.diskCategory(diskCategory);
            return this;
        }

        /**
         * Property duration: The validity period of the instance.
         * <p>
         * This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The validity period of the instance. This parameter is required.
         */
        public Builder duration(final java.lang.Number duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * Property duration: The validity period of the instance.
         * <p>
         * This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The validity period of the instance. This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
            return this;
        }

        /**
         * Property instanceAlias: The alias of the instance.
         * <p>
         * @return {@code this}
         * @param instanceAlias Property instanceAlias: The alias of the instance. This parameter is required.
         */
        public Builder instanceAlias(final java.lang.String instanceAlias) {
            this.props.instanceAlias(instanceAlias);
            return this;
        }
        /**
         * Property instanceAlias: The alias of the instance.
         * <p>
         * @return {@code this}
         * @param instanceAlias Property instanceAlias: The alias of the instance. This parameter is required.
         */
        public Builder instanceAlias(final com.aliyun.ros.cdk.core.IResolvable instanceAlias) {
            this.props.instanceAlias(instanceAlias);
            return this;
        }

        /**
         * Property payType: The billing method.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>prepay</strong>: The prepay value indicates the subscription method.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: The billing method.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>prepay</strong>: The prepay value indicates the subscription method.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property pricingCycle: The unit of the validity period.
         * <p>
         * This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The unit of the validity period. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: The unit of the validity period.
         * <p>
         * This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The unit of the validity period. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }

        /**
         * Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"].
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"]. This parameter is required.
         */
        public Builder securityIpList(final com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"].
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"]. This parameter is required.
         */
        public Builder securityIpList(final java.util.List<? extends java.lang.Object> securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.tsdb.HiTSDBInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.tsdb.HiTSDBInstance build() {
            return new com.aliyun.ros.cdk.tsdb.HiTSDBInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
