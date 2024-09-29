package com.aliyun.ros.cdk.cloudfw;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CLOUDFW::Instance</code>, which is used to create a Cloud Firewall instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:36.886Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudfw.$Module.class, fqn = "@alicloud/ros-cdk-cloudfw.RosInstance")
public class RosInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cloudfw.RosInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudfw.RosInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPayType() {
        return software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "payType", java.util.Objects.requireNonNull(value, "payType is required"));
    }

    /**
     */
    public void setPayType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "payType", java.util.Objects.requireNonNull(value, "payType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAccountNum() {
        return software.amazon.jsii.Kernel.get(this, "accountNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAccountNum(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "accountNum", value);
    }

    /**
     */
    public void setAccountNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "accountNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAclExtension() {
        return software.amazon.jsii.Kernel.get(this, "aclExtension", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAclExtension(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "aclExtension", value);
    }

    /**
     */
    public void setAclExtension(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aclExtension", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoPay(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoPay", value);
    }

    /**
     */
    public void setAutoPay(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoPay", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public void setAutoRenew(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoRenew", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBandwidth(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "bandwidth", value);
    }

    /**
     */
    public void setBandwidth(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bandwidth", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIgnoreExisting() {
        return software.amazon.jsii.Kernel.get(this, "ignoreExisting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIgnoreExisting(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "ignoreExisting", value);
    }

    /**
     */
    public void setIgnoreExisting(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ignoreExisting", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpNum() {
        return software.amazon.jsii.Kernel.get(this, "ipNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpNum(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ipNum", value);
    }

    /**
     */
    public void setIpNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogAnalysis() {
        return software.amazon.jsii.Kernel.get(this, "logAnalysis", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogAnalysis(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "logAnalysis", value);
    }

    /**
     */
    public void setLogAnalysis(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logAnalysis", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogStorage() {
        return software.amazon.jsii.Kernel.get(this, "logStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogStorage(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "logStorage", value);
    }

    /**
     */
    public void setLogStorage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logStorage", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMultiAccountManagement() {
        return software.amazon.jsii.Kernel.get(this, "multiAccountManagement", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMultiAccountManagement(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "multiAccountManagement", value);
    }

    /**
     */
    public void setMultiAccountManagement(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "multiAccountManagement", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNatBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "natBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNatBandwidth(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "natBandwidth", value);
    }

    /**
     */
    public void setNatBandwidth(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "natBandwidth", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNatFirewallNum() {
        return software.amazon.jsii.Kernel.get(this, "natFirewallNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNatFirewallNum(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "natFirewallNum", value);
    }

    /**
     */
    public void setNatFirewallNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "natFirewallNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public void setPeriodUnit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "periodUnit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpec() {
        return software.amazon.jsii.Kernel.get(this, "spec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpec(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spec", value);
    }

    /**
     */
    public void setSpec(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spec", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVpcBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "vpcBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcBandwidth(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "vpcBandwidth", value);
    }

    /**
     */
    public void setVpcBandwidth(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcBandwidth", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVpcFirewallNum() {
        return software.amazon.jsii.Kernel.get(this, "vpcFirewallNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcFirewallNum(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "vpcFirewallNum", value);
    }

    /**
     */
    public void setVpcFirewallNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcFirewallNum", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudfw.RosInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudfw.RosInstance> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cloudfw.RosInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudfw.RosInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param payType This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * @return {@code this}
         * @param payType This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * @return {@code this}
         * @param accountNum This parameter is required.
         */
        public Builder accountNum(final java.lang.Number accountNum) {
            this.props.accountNum(accountNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param accountNum This parameter is required.
         */
        public Builder accountNum(final com.aliyun.ros.cdk.core.IResolvable accountNum) {
            this.props.accountNum(accountNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param aclExtension This parameter is required.
         */
        public Builder aclExtension(final java.lang.Number aclExtension) {
            this.props.aclExtension(aclExtension);
            return this;
        }
        /**
         * @return {@code this}
         * @param aclExtension This parameter is required.
         */
        public Builder aclExtension(final com.aliyun.ros.cdk.core.IResolvable aclExtension) {
            this.props.aclExtension(aclExtension);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoPay This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoPay This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoRenew This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * @return {@code this}
         * @param bandwidth This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * @return {@code this}
         * @param bandwidth This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param ignoreExisting This parameter is required.
         */
        public Builder ignoreExisting(final java.lang.Boolean ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }
        /**
         * @return {@code this}
         * @param ignoreExisting This parameter is required.
         */
        public Builder ignoreExisting(final com.aliyun.ros.cdk.core.IResolvable ignoreExisting) {
            this.props.ignoreExisting(ignoreExisting);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipNum This parameter is required.
         */
        public Builder ipNum(final java.lang.Number ipNum) {
            this.props.ipNum(ipNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipNum This parameter is required.
         */
        public Builder ipNum(final com.aliyun.ros.cdk.core.IResolvable ipNum) {
            this.props.ipNum(ipNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param logAnalysis This parameter is required.
         */
        public Builder logAnalysis(final java.lang.Boolean logAnalysis) {
            this.props.logAnalysis(logAnalysis);
            return this;
        }
        /**
         * @return {@code this}
         * @param logAnalysis This parameter is required.
         */
        public Builder logAnalysis(final com.aliyun.ros.cdk.core.IResolvable logAnalysis) {
            this.props.logAnalysis(logAnalysis);
            return this;
        }

        /**
         * @return {@code this}
         * @param logStorage This parameter is required.
         */
        public Builder logStorage(final java.lang.Number logStorage) {
            this.props.logStorage(logStorage);
            return this;
        }
        /**
         * @return {@code this}
         * @param logStorage This parameter is required.
         */
        public Builder logStorage(final com.aliyun.ros.cdk.core.IResolvable logStorage) {
            this.props.logStorage(logStorage);
            return this;
        }

        /**
         * @return {@code this}
         * @param multiAccountManagement This parameter is required.
         */
        public Builder multiAccountManagement(final java.lang.Boolean multiAccountManagement) {
            this.props.multiAccountManagement(multiAccountManagement);
            return this;
        }
        /**
         * @return {@code this}
         * @param multiAccountManagement This parameter is required.
         */
        public Builder multiAccountManagement(final com.aliyun.ros.cdk.core.IResolvable multiAccountManagement) {
            this.props.multiAccountManagement(multiAccountManagement);
            return this;
        }

        /**
         * @return {@code this}
         * @param natBandwidth This parameter is required.
         */
        public Builder natBandwidth(final java.lang.Number natBandwidth) {
            this.props.natBandwidth(natBandwidth);
            return this;
        }
        /**
         * @return {@code this}
         * @param natBandwidth This parameter is required.
         */
        public Builder natBandwidth(final com.aliyun.ros.cdk.core.IResolvable natBandwidth) {
            this.props.natBandwidth(natBandwidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param natFirewallNum This parameter is required.
         */
        public Builder natFirewallNum(final java.lang.Number natFirewallNum) {
            this.props.natFirewallNum(natFirewallNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param natFirewallNum This parameter is required.
         */
        public Builder natFirewallNum(final com.aliyun.ros.cdk.core.IResolvable natFirewallNum) {
            this.props.natFirewallNum(natFirewallNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param periodUnit This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param spec This parameter is required.
         */
        public Builder spec(final java.lang.String spec) {
            this.props.spec(spec);
            return this;
        }
        /**
         * @return {@code this}
         * @param spec This parameter is required.
         */
        public Builder spec(final com.aliyun.ros.cdk.core.IResolvable spec) {
            this.props.spec(spec);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcBandwidth This parameter is required.
         */
        public Builder vpcBandwidth(final java.lang.Number vpcBandwidth) {
            this.props.vpcBandwidth(vpcBandwidth);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcBandwidth This parameter is required.
         */
        public Builder vpcBandwidth(final com.aliyun.ros.cdk.core.IResolvable vpcBandwidth) {
            this.props.vpcBandwidth(vpcBandwidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcFirewallNum This parameter is required.
         */
        public Builder vpcFirewallNum(final java.lang.Number vpcFirewallNum) {
            this.props.vpcFirewallNum(vpcFirewallNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcFirewallNum This parameter is required.
         */
        public Builder vpcFirewallNum(final com.aliyun.ros.cdk.core.IResolvable vpcFirewallNum) {
            this.props.vpcFirewallNum(vpcFirewallNum);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudfw.RosInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudfw.RosInstance build() {
            return new com.aliyun.ros.cdk.cloudfw.RosInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
