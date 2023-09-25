package com.aliyun.ros.cdk.arms;

/**
 * A ROS resource type:  <code>ALIYUN::ARMS::AlertContact</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:23.495Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.arms.$Module.class, fqn = "@alicloud/ros-cdk-arms.AlertContact")
public class AlertContact extends com.aliyun.ros.cdk.core.Resource {

    protected AlertContact(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AlertContact(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ARMS::AlertContact</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public AlertContact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.AlertContactProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ARMS::AlertContact</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public AlertContact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.arms.AlertContactProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ContactId: The ID of the alert contact that you created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrContactId() {
        return software.amazon.jsii.Kernel.get(this, "attrContactId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.arms.AlertContact}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.arms.AlertContact> {
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
        private final com.aliyun.ros.cdk.arms.AlertContactProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.arms.AlertContactProps.Builder();
        }

        /**
         * Property contactName: The name of the alert contact that you want to create.
         * <p>
         * @return {@code this}
         * @param contactName Property contactName: The name of the alert contact that you want to create. This parameter is required.
         */
        public Builder contactName(final java.lang.String contactName) {
            this.props.contactName(contactName);
            return this;
        }
        /**
         * Property contactName: The name of the alert contact that you want to create.
         * <p>
         * @return {@code this}
         * @param contactName Property contactName: The name of the alert contact that you want to create. This parameter is required.
         */
        public Builder contactName(final com.aliyun.ros.cdk.core.IResolvable contactName) {
            this.props.contactName(contactName);
            return this;
        }

        /**
         * Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
         * <p>
         * @return {@code this}
         * @param dingRobotWebhookUrl Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact. This parameter is required.
         */
        public Builder dingRobotWebhookUrl(final java.lang.String dingRobotWebhookUrl) {
            this.props.dingRobotWebhookUrl(dingRobotWebhookUrl);
            return this;
        }
        /**
         * Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
         * <p>
         * @return {@code this}
         * @param dingRobotWebhookUrl Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact. This parameter is required.
         */
        public Builder dingRobotWebhookUrl(final com.aliyun.ros.cdk.core.IResolvable dingRobotWebhookUrl) {
            this.props.dingRobotWebhookUrl(dingRobotWebhookUrl);
            return this;
        }

        /**
         * Property email: The email address of the contact.
         * <p>
         * @return {@code this}
         * @param email Property email: The email address of the contact. This parameter is required.
         */
        public Builder email(final java.lang.String email) {
            this.props.email(email);
            return this;
        }
        /**
         * Property email: The email address of the contact.
         * <p>
         * @return {@code this}
         * @param email Property email: The email address of the contact. This parameter is required.
         */
        public Builder email(final com.aliyun.ros.cdk.core.IResolvable email) {
            this.props.email(email);
            return this;
        }

        /**
         * Property phoneNum: The phone number of the contact.
         * <p>
         * @return {@code this}
         * @param phoneNum Property phoneNum: The phone number of the contact. This parameter is required.
         */
        public Builder phoneNum(final java.lang.String phoneNum) {
            this.props.phoneNum(phoneNum);
            return this;
        }
        /**
         * Property phoneNum: The phone number of the contact.
         * <p>
         * @return {@code this}
         * @param phoneNum Property phoneNum: The phone number of the contact. This parameter is required.
         */
        public Builder phoneNum(final com.aliyun.ros.cdk.core.IResolvable phoneNum) {
            this.props.phoneNum(phoneNum);
            return this;
        }

        /**
         * Property proxyUserId: Internal parameters.
         * <p>
         * @return {@code this}
         * @param proxyUserId Property proxyUserId: Internal parameters. This parameter is required.
         */
        public Builder proxyUserId(final java.lang.String proxyUserId) {
            this.props.proxyUserId(proxyUserId);
            return this;
        }
        /**
         * Property proxyUserId: Internal parameters.
         * <p>
         * @return {@code this}
         * @param proxyUserId Property proxyUserId: Internal parameters. This parameter is required.
         */
        public Builder proxyUserId(final com.aliyun.ros.cdk.core.IResolvable proxyUserId) {
            this.props.proxyUserId(proxyUserId);
            return this;
        }

        /**
         * Property regionId: Region ID.
         * <p>
         * Default to region of stack.
         * <p>
         * @return {@code this}
         * @param regionId Property regionId: Region ID. This parameter is required.
         */
        public Builder regionId(final java.lang.String regionId) {
            this.props.regionId(regionId);
            return this;
        }
        /**
         * Property regionId: Region ID.
         * <p>
         * Default to region of stack.
         * <p>
         * @return {@code this}
         * @param regionId Property regionId: Region ID. This parameter is required.
         */
        public Builder regionId(final com.aliyun.ros.cdk.core.IResolvable regionId) {
            this.props.regionId(regionId);
            return this;
        }

        /**
         * Property systemNoc: Specifies whether to receive system alerts.
         * <p>
         * @return {@code this}
         * @param systemNoc Property systemNoc: Specifies whether to receive system alerts. This parameter is required.
         */
        public Builder systemNoc(final java.lang.Boolean systemNoc) {
            this.props.systemNoc(systemNoc);
            return this;
        }
        /**
         * Property systemNoc: Specifies whether to receive system alerts.
         * <p>
         * @return {@code this}
         * @param systemNoc Property systemNoc: Specifies whether to receive system alerts. This parameter is required.
         */
        public Builder systemNoc(final com.aliyun.ros.cdk.core.IResolvable systemNoc) {
            this.props.systemNoc(systemNoc);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.arms.AlertContact}.
         */
        @Override
        public com.aliyun.ros.cdk.arms.AlertContact build() {
            return new com.aliyun.ros.cdk.arms.AlertContact(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
