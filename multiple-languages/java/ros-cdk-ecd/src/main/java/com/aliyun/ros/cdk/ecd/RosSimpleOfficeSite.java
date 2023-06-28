package com.aliyun.ros.cdk.ecd;

/**
 * A ROS template type:  <code>ALIYUN::ECD::SimpleOfficeSite</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:27.919Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecd.$Module.class, fqn = "@alicloud/ros-cdk-ecd.RosSimpleOfficeSite")
public class RosSimpleOfficeSite extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSimpleOfficeSite(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSimpleOfficeSite(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecd.RosSimpleOfficeSite.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::ECD::SimpleOfficeSite</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSimpleOfficeSite(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecd.RosSimpleOfficeSiteProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOfficeSiteId() {
        return software.amazon.jsii.Kernel.get(this, "attrOfficeSiteId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getCenId() {
        return software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cenId", value);
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cenId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCenOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "cenOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCenOwnerId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cenOwnerId", value);
    }

    /**
     */
    public void setCenOwnerId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cenOwnerId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "cidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCidrBlock(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cidrBlock", value);
    }

    /**
     */
    public void setCidrBlock(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cidrBlock", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCloudBoxOfficeSite() {
        return software.amazon.jsii.Kernel.get(this, "cloudBoxOfficeSite", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCloudBoxOfficeSite(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "cloudBoxOfficeSite", value);
    }

    /**
     */
    public void setCloudBoxOfficeSite(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cloudBoxOfficeSite", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDesktopAccessType() {
        return software.amazon.jsii.Kernel.get(this, "desktopAccessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDesktopAccessType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "desktopAccessType", value);
    }

    /**
     */
    public void setDesktopAccessType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "desktopAccessType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableAdminAccess() {
        return software.amazon.jsii.Kernel.get(this, "enableAdminAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableAdminAccess(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableAdminAccess", value);
    }

    /**
     */
    public void setEnableAdminAccess(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableAdminAccess", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableInternetAccess() {
        return software.amazon.jsii.Kernel.get(this, "enableInternetAccess", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableInternetAccess(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableInternetAccess", value);
    }

    /**
     */
    public void setEnableInternetAccess(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableInternetAccess", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNeedVerifyZeroDevice() {
        return software.amazon.jsii.Kernel.get(this, "needVerifyZeroDevice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNeedVerifyZeroDevice(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "needVerifyZeroDevice", value);
    }

    /**
     */
    public void setNeedVerifyZeroDevice(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "needVerifyZeroDevice", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getOfficeSiteName() {
        return software.amazon.jsii.Kernel.get(this, "officeSiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOfficeSiteName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "officeSiteName", value);
    }

    /**
     */
    public void setOfficeSiteName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "officeSiteName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVerifyCode() {
        return software.amazon.jsii.Kernel.get(this, "verifyCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVerifyCode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "verifyCode", value);
    }

    /**
     */
    public void setVerifyCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "verifyCode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecd.RosSimpleOfficeSite}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecd.RosSimpleOfficeSite> {
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
        private final com.aliyun.ros.cdk.ecd.RosSimpleOfficeSiteProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecd.RosSimpleOfficeSiteProps.Builder();
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
         * @param cenId This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * @return {@code this}
         * @param cenId This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * @return {@code this}
         * @param cenOwnerId This parameter is required.
         */
        public Builder cenOwnerId(final java.lang.Number cenOwnerId) {
            this.props.cenOwnerId(cenOwnerId);
            return this;
        }
        /**
         * @return {@code this}
         * @param cenOwnerId This parameter is required.
         */
        public Builder cenOwnerId(final com.aliyun.ros.cdk.core.IResolvable cenOwnerId) {
            this.props.cenOwnerId(cenOwnerId);
            return this;
        }

        /**
         * @return {@code this}
         * @param cidrBlock This parameter is required.
         */
        public Builder cidrBlock(final java.lang.String cidrBlock) {
            this.props.cidrBlock(cidrBlock);
            return this;
        }
        /**
         * @return {@code this}
         * @param cidrBlock This parameter is required.
         */
        public Builder cidrBlock(final com.aliyun.ros.cdk.core.IResolvable cidrBlock) {
            this.props.cidrBlock(cidrBlock);
            return this;
        }

        /**
         * @return {@code this}
         * @param cloudBoxOfficeSite This parameter is required.
         */
        public Builder cloudBoxOfficeSite(final java.lang.Boolean cloudBoxOfficeSite) {
            this.props.cloudBoxOfficeSite(cloudBoxOfficeSite);
            return this;
        }
        /**
         * @return {@code this}
         * @param cloudBoxOfficeSite This parameter is required.
         */
        public Builder cloudBoxOfficeSite(final com.aliyun.ros.cdk.core.IResolvable cloudBoxOfficeSite) {
            this.props.cloudBoxOfficeSite(cloudBoxOfficeSite);
            return this;
        }

        /**
         * @return {@code this}
         * @param desktopAccessType This parameter is required.
         */
        public Builder desktopAccessType(final java.lang.String desktopAccessType) {
            this.props.desktopAccessType(desktopAccessType);
            return this;
        }
        /**
         * @return {@code this}
         * @param desktopAccessType This parameter is required.
         */
        public Builder desktopAccessType(final com.aliyun.ros.cdk.core.IResolvable desktopAccessType) {
            this.props.desktopAccessType(desktopAccessType);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableAdminAccess This parameter is required.
         */
        public Builder enableAdminAccess(final java.lang.Boolean enableAdminAccess) {
            this.props.enableAdminAccess(enableAdminAccess);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableAdminAccess This parameter is required.
         */
        public Builder enableAdminAccess(final com.aliyun.ros.cdk.core.IResolvable enableAdminAccess) {
            this.props.enableAdminAccess(enableAdminAccess);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableInternetAccess This parameter is required.
         */
        public Builder enableInternetAccess(final java.lang.Boolean enableInternetAccess) {
            this.props.enableInternetAccess(enableInternetAccess);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableInternetAccess This parameter is required.
         */
        public Builder enableInternetAccess(final com.aliyun.ros.cdk.core.IResolvable enableInternetAccess) {
            this.props.enableInternetAccess(enableInternetAccess);
            return this;
        }

        /**
         * @return {@code this}
         * @param needVerifyZeroDevice This parameter is required.
         */
        public Builder needVerifyZeroDevice(final java.lang.Boolean needVerifyZeroDevice) {
            this.props.needVerifyZeroDevice(needVerifyZeroDevice);
            return this;
        }
        /**
         * @return {@code this}
         * @param needVerifyZeroDevice This parameter is required.
         */
        public Builder needVerifyZeroDevice(final com.aliyun.ros.cdk.core.IResolvable needVerifyZeroDevice) {
            this.props.needVerifyZeroDevice(needVerifyZeroDevice);
            return this;
        }

        /**
         * @return {@code this}
         * @param officeSiteName This parameter is required.
         */
        public Builder officeSiteName(final java.lang.String officeSiteName) {
            this.props.officeSiteName(officeSiteName);
            return this;
        }
        /**
         * @return {@code this}
         * @param officeSiteName This parameter is required.
         */
        public Builder officeSiteName(final com.aliyun.ros.cdk.core.IResolvable officeSiteName) {
            this.props.officeSiteName(officeSiteName);
            return this;
        }

        /**
         * @return {@code this}
         * @param verifyCode This parameter is required.
         */
        public Builder verifyCode(final java.lang.String verifyCode) {
            this.props.verifyCode(verifyCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param verifyCode This parameter is required.
         */
        public Builder verifyCode(final com.aliyun.ros.cdk.core.IResolvable verifyCode) {
            this.props.verifyCode(verifyCode);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecd.RosSimpleOfficeSite}.
         */
        @Override
        public com.aliyun.ros.cdk.ecd.RosSimpleOfficeSite build() {
            return new com.aliyun.ros.cdk.ecd.RosSimpleOfficeSite(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
