package com.aliyun.ros.cdk.ram;

/**
 * A ROS template type:  `ALIYUN::RAM::SecurityPreference`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-13T09:24:21.604Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosSecurityPreference")
public class RosSecurityPreference extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSecurityPreference(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSecurityPreference(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ram.RosSecurityPreference.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::RAM::SecurityPreference`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSecurityPreference(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.RosSecurityPreferenceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAllowUserToChangePassword() {
        return software.amazon.jsii.Kernel.get(this, "attrAllowUserToChangePassword", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAllowUserToManageAccessKeys() {
        return software.amazon.jsii.Kernel.get(this, "attrAllowUserToManageAccessKeys", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAllowUserToManageMfaDevices() {
        return software.amazon.jsii.Kernel.get(this, "attrAllowUserToManageMfaDevices", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAllowUserToManagePublicKeys() {
        return software.amazon.jsii.Kernel.get(this, "attrAllowUserToManagePublicKeys", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEnableSaveMfaTicket() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableSaveMfaTicket", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoginNetworkMasks() {
        return software.amazon.jsii.Kernel.get(this, "attrLoginNetworkMasks", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoginSessionDuration() {
        return software.amazon.jsii.Kernel.get(this, "attrLoginSessionDuration", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getAllowUserToChangePassword() {
        return software.amazon.jsii.Kernel.get(this, "allowUserToChangePassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAllowUserToChangePassword(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "allowUserToChangePassword", value);
    }

    /**
     */
    public void setAllowUserToChangePassword(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "allowUserToChangePassword", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAllowUserToManageAccessKeys() {
        return software.amazon.jsii.Kernel.get(this, "allowUserToManageAccessKeys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAllowUserToManageAccessKeys(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "allowUserToManageAccessKeys", value);
    }

    /**
     */
    public void setAllowUserToManageAccessKeys(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "allowUserToManageAccessKeys", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAllowUserToManageMfaDevices() {
        return software.amazon.jsii.Kernel.get(this, "allowUserToManageMfaDevices", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAllowUserToManageMfaDevices(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "allowUserToManageMfaDevices", value);
    }

    /**
     */
    public void setAllowUserToManageMfaDevices(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "allowUserToManageMfaDevices", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAllowUserToManagePublicKeys() {
        return software.amazon.jsii.Kernel.get(this, "allowUserToManagePublicKeys", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAllowUserToManagePublicKeys(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "allowUserToManagePublicKeys", value);
    }

    /**
     */
    public void setAllowUserToManagePublicKeys(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "allowUserToManagePublicKeys", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableSaveMfaTicket() {
        return software.amazon.jsii.Kernel.get(this, "enableSaveMfaTicket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableSaveMfaTicket(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableSaveMfaTicket", value);
    }

    /**
     */
    public void setEnableSaveMfaTicket(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableSaveMfaTicket", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoginNetworkMasks() {
        return software.amazon.jsii.Kernel.get(this, "loginNetworkMasks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoginNetworkMasks(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "loginNetworkMasks", value);
    }

    /**
     */
    public void setLoginNetworkMasks(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loginNetworkMasks", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoginSessionDuration() {
        return software.amazon.jsii.Kernel.get(this, "loginSessionDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoginSessionDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "loginSessionDuration", value);
    }

    /**
     */
    public void setLoginSessionDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loginSessionDuration", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.RosSecurityPreference}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.RosSecurityPreference> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ram.RosSecurityPreferenceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.RosSecurityPreferenceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param allowUserToChangePassword This parameter is required.
         */
        public Builder allowUserToChangePassword(final java.lang.Boolean allowUserToChangePassword) {
            this.props.allowUserToChangePassword(allowUserToChangePassword);
            return this;
        }
        /**
         * @return {@code this}
         * @param allowUserToChangePassword This parameter is required.
         */
        public Builder allowUserToChangePassword(final com.aliyun.ros.cdk.core.IResolvable allowUserToChangePassword) {
            this.props.allowUserToChangePassword(allowUserToChangePassword);
            return this;
        }

        /**
         * @return {@code this}
         * @param allowUserToManageAccessKeys This parameter is required.
         */
        public Builder allowUserToManageAccessKeys(final java.lang.Boolean allowUserToManageAccessKeys) {
            this.props.allowUserToManageAccessKeys(allowUserToManageAccessKeys);
            return this;
        }
        /**
         * @return {@code this}
         * @param allowUserToManageAccessKeys This parameter is required.
         */
        public Builder allowUserToManageAccessKeys(final com.aliyun.ros.cdk.core.IResolvable allowUserToManageAccessKeys) {
            this.props.allowUserToManageAccessKeys(allowUserToManageAccessKeys);
            return this;
        }

        /**
         * @return {@code this}
         * @param allowUserToManageMfaDevices This parameter is required.
         */
        public Builder allowUserToManageMfaDevices(final java.lang.Boolean allowUserToManageMfaDevices) {
            this.props.allowUserToManageMfaDevices(allowUserToManageMfaDevices);
            return this;
        }
        /**
         * @return {@code this}
         * @param allowUserToManageMfaDevices This parameter is required.
         */
        public Builder allowUserToManageMfaDevices(final com.aliyun.ros.cdk.core.IResolvable allowUserToManageMfaDevices) {
            this.props.allowUserToManageMfaDevices(allowUserToManageMfaDevices);
            return this;
        }

        /**
         * @return {@code this}
         * @param allowUserToManagePublicKeys This parameter is required.
         */
        public Builder allowUserToManagePublicKeys(final java.lang.Boolean allowUserToManagePublicKeys) {
            this.props.allowUserToManagePublicKeys(allowUserToManagePublicKeys);
            return this;
        }
        /**
         * @return {@code this}
         * @param allowUserToManagePublicKeys This parameter is required.
         */
        public Builder allowUserToManagePublicKeys(final com.aliyun.ros.cdk.core.IResolvable allowUserToManagePublicKeys) {
            this.props.allowUserToManagePublicKeys(allowUserToManagePublicKeys);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableSaveMfaTicket This parameter is required.
         */
        public Builder enableSaveMfaTicket(final java.lang.Boolean enableSaveMfaTicket) {
            this.props.enableSaveMfaTicket(enableSaveMfaTicket);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableSaveMfaTicket This parameter is required.
         */
        public Builder enableSaveMfaTicket(final com.aliyun.ros.cdk.core.IResolvable enableSaveMfaTicket) {
            this.props.enableSaveMfaTicket(enableSaveMfaTicket);
            return this;
        }

        /**
         * @return {@code this}
         * @param loginNetworkMasks This parameter is required.
         */
        public Builder loginNetworkMasks(final java.lang.String loginNetworkMasks) {
            this.props.loginNetworkMasks(loginNetworkMasks);
            return this;
        }
        /**
         * @return {@code this}
         * @param loginNetworkMasks This parameter is required.
         */
        public Builder loginNetworkMasks(final com.aliyun.ros.cdk.core.IResolvable loginNetworkMasks) {
            this.props.loginNetworkMasks(loginNetworkMasks);
            return this;
        }

        /**
         * @return {@code this}
         * @param loginSessionDuration This parameter is required.
         */
        public Builder loginSessionDuration(final java.lang.Number loginSessionDuration) {
            this.props.loginSessionDuration(loginSessionDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param loginSessionDuration This parameter is required.
         */
        public Builder loginSessionDuration(final com.aliyun.ros.cdk.core.IResolvable loginSessionDuration) {
            this.props.loginSessionDuration(loginSessionDuration);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ram.RosSecurityPreference}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.RosSecurityPreference build() {
            return new com.aliyun.ros.cdk.ram.RosSecurityPreference(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
