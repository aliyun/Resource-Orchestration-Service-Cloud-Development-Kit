package com.aliyun.ros.cdk.arms;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ARMS::AlertContact</code>, which is used to create an alert contact.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:43.981Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.RosAlertContact")
public class RosAlertContact extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAlertContact(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAlertContact(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.arms.RosAlertContact.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAlertContact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.RosAlertContactProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContactId() {
        return software.amazon.jsii.Kernel.get(this, "attrContactId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getContactName() {
        return software.amazon.jsii.Kernel.get(this, "contactName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContactName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "contactName", java.util.Objects.requireNonNull(value, "contactName is required"));
    }

    /**
     */
    public void setContactName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "contactName", java.util.Objects.requireNonNull(value, "contactName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDingRobotWebhookUrl() {
        return software.amazon.jsii.Kernel.get(this, "dingRobotWebhookUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDingRobotWebhookUrl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dingRobotWebhookUrl", value);
    }

    /**
     */
    public void setDingRobotWebhookUrl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dingRobotWebhookUrl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEmail() {
        return software.amazon.jsii.Kernel.get(this, "email", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEmail(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "email", value);
    }

    /**
     */
    public void setEmail(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "email", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPhoneNum() {
        return software.amazon.jsii.Kernel.get(this, "phoneNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPhoneNum(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "phoneNum", value);
    }

    /**
     */
    public void setPhoneNum(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "phoneNum", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProxyUserId() {
        return software.amazon.jsii.Kernel.get(this, "proxyUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProxyUserId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "proxyUserId", value);
    }

    /**
     */
    public void setProxyUserId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "proxyUserId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRegionId() {
        return software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRegionId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "regionId", value);
    }

    /**
     */
    public void setRegionId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "regionId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSystemNoc() {
        return software.amazon.jsii.Kernel.get(this, "systemNoc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSystemNoc(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "systemNoc", value);
    }

    /**
     */
    public void setSystemNoc(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "systemNoc", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.RosAlertContact}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.RosAlertContact> {
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
        private final com.aliyun.ros.cdk.arms.RosAlertContactProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.arms.RosAlertContactProps.Builder();
        }

        /**
         * @return {@code this}
         * @param contactName This parameter is required.
         */
        public Builder contactName(final java.lang.String contactName) {
            this.props.contactName(contactName);
            return this;
        }
        /**
         * @return {@code this}
         * @param contactName This parameter is required.
         */
        public Builder contactName(final com.aliyun.ros.cdk.core.IResolvable contactName) {
            this.props.contactName(contactName);
            return this;
        }

        /**
         * @return {@code this}
         * @param dingRobotWebhookUrl This parameter is required.
         */
        public Builder dingRobotWebhookUrl(final java.lang.String dingRobotWebhookUrl) {
            this.props.dingRobotWebhookUrl(dingRobotWebhookUrl);
            return this;
        }
        /**
         * @return {@code this}
         * @param dingRobotWebhookUrl This parameter is required.
         */
        public Builder dingRobotWebhookUrl(final com.aliyun.ros.cdk.core.IResolvable dingRobotWebhookUrl) {
            this.props.dingRobotWebhookUrl(dingRobotWebhookUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param email This parameter is required.
         */
        public Builder email(final java.lang.String email) {
            this.props.email(email);
            return this;
        }
        /**
         * @return {@code this}
         * @param email This parameter is required.
         */
        public Builder email(final com.aliyun.ros.cdk.core.IResolvable email) {
            this.props.email(email);
            return this;
        }

        /**
         * @return {@code this}
         * @param phoneNum This parameter is required.
         */
        public Builder phoneNum(final java.lang.String phoneNum) {
            this.props.phoneNum(phoneNum);
            return this;
        }
        /**
         * @return {@code this}
         * @param phoneNum This parameter is required.
         */
        public Builder phoneNum(final com.aliyun.ros.cdk.core.IResolvable phoneNum) {
            this.props.phoneNum(phoneNum);
            return this;
        }

        /**
         * @return {@code this}
         * @param proxyUserId This parameter is required.
         */
        public Builder proxyUserId(final java.lang.String proxyUserId) {
            this.props.proxyUserId(proxyUserId);
            return this;
        }
        /**
         * @return {@code this}
         * @param proxyUserId This parameter is required.
         */
        public Builder proxyUserId(final com.aliyun.ros.cdk.core.IResolvable proxyUserId) {
            this.props.proxyUserId(proxyUserId);
            return this;
        }

        /**
         * @return {@code this}
         * @param regionId This parameter is required.
         */
        public Builder regionId(final java.lang.String regionId) {
            this.props.regionId(regionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param regionId This parameter is required.
         */
        public Builder regionId(final com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.props.regionId(regionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param systemNoc This parameter is required.
         */
        public Builder systemNoc(final java.lang.Boolean systemNoc) {
            this.props.systemNoc(systemNoc);
            return this;
        }
        /**
         * @return {@code this}
         * @param systemNoc This parameter is required.
         */
        public Builder systemNoc(final com.aliyun.ros.cdk.core.IResolvable systemNoc) {
            this.props.systemNoc(systemNoc);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.RosAlertContact}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.RosAlertContact build() {
            return new com.aliyun.ros.cdk.arms.RosAlertContact(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
