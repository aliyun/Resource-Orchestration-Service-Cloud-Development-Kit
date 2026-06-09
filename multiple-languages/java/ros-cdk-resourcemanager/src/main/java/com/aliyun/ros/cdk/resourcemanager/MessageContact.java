package com.aliyun.ros.cdk.resourcemanager;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ResourceManager::MessageContact</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:38:07.267Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.MessageContact")
public class MessageContact extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.resourcemanager.IMessageContact {

    protected MessageContact(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MessageContact(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public MessageContact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.MessageContactProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public MessageContact(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.MessageContactProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: Creation time of Message Contact.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EmailAddress: The email address of the contact.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEmailAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrEmailAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MessageContactId: The ID of Message Contact.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessageContactId() {
        return software.amazon.jsii.Kernel.get(this, "attrMessageContactId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MessageContactName: The name of the contact.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessageContactName() {
        return software.amazon.jsii.Kernel.get(this, "attrMessageContactName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MessageTypes: The types of messages received by the contact.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMessageTypes() {
        return software.amazon.jsii.Kernel.get(this, "attrMessageTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PhoneNumber: The mobile phone number of the contact.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPhoneNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrPhoneNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Title: The job title of the contact.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTitle() {
        return software.amazon.jsii.Kernel.get(this, "attrTitle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.MessageContactProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.MessageContactProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.resourcemanager.MessageContact}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.resourcemanager.MessageContact> {
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
        private final com.aliyun.ros.cdk.resourcemanager.MessageContactProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.resourcemanager.MessageContactProps.Builder();
        }

        /**
         * Property emailAddress: The email address of the contact.
         * <p>
         * @return {@code this}
         * @param emailAddress Property emailAddress: The email address of the contact. This parameter is required.
         */
        public Builder emailAddress(final java.lang.String emailAddress) {
            this.props.emailAddress(emailAddress);
            return this;
        }
        /**
         * Property emailAddress: The email address of the contact.
         * <p>
         * @return {@code this}
         * @param emailAddress Property emailAddress: The email address of the contact. This parameter is required.
         */
        public Builder emailAddress(final com.aliyun.ros.cdk.core.IResolvable emailAddress) {
            this.props.emailAddress(emailAddress);
            return this;
        }

        /**
         * Property messageContactName: The name of the contact.
         * <p>
         * The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
         * <p>
         * @return {@code this}
         * @param messageContactName Property messageContactName: The name of the contact. This parameter is required.
         */
        public Builder messageContactName(final java.lang.String messageContactName) {
            this.props.messageContactName(messageContactName);
            return this;
        }
        /**
         * Property messageContactName: The name of the contact.
         * <p>
         * The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
         * <p>
         * @return {@code this}
         * @param messageContactName Property messageContactName: The name of the contact. This parameter is required.
         */
        public Builder messageContactName(final com.aliyun.ros.cdk.core.IResolvable messageContactName) {
            this.props.messageContactName(messageContactName);
            return this;
        }

        /**
         * Property messageTypes: The types of messages received by the contact.
         * <p>
         * @return {@code this}
         * @param messageTypes Property messageTypes: The types of messages received by the contact. This parameter is required.
         */
        public Builder messageTypes(final com.aliyun.ros.cdk.core.IResolvable messageTypes) {
            this.props.messageTypes(messageTypes);
            return this;
        }
        /**
         * Property messageTypes: The types of messages received by the contact.
         * <p>
         * @return {@code this}
         * @param messageTypes Property messageTypes: The types of messages received by the contact. This parameter is required.
         */
        public Builder messageTypes(final java.util.List<? extends java.lang.Object> messageTypes) {
            this.props.messageTypes(messageTypes);
            return this;
        }

        /**
         * Property title: The job title of the contact.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>FinanceDirector.</li>
         * <li>TechnicalDirector.</li>
         * <li>MaintenanceDirector.</li>
         * <li>CEO.</li>
         * <li>ProjectDirector.</li>
         * <li>Other.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param title Property title: The job title of the contact. This parameter is required.
         */
        public Builder title(final java.lang.String title) {
            this.props.title(title);
            return this;
        }
        /**
         * Property title: The job title of the contact.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>FinanceDirector.</li>
         * <li>TechnicalDirector.</li>
         * <li>MaintenanceDirector.</li>
         * <li>CEO.</li>
         * <li>ProjectDirector.</li>
         * <li>Other.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param title Property title: The job title of the contact. This parameter is required.
         */
        public Builder title(final com.aliyun.ros.cdk.core.IResolvable title) {
            this.props.title(title);
            return this;
        }

        /**
         * Property phoneNumber: The mobile phone number of the contact.
         * <p>
         * @return {@code this}
         * @param phoneNumber Property phoneNumber: The mobile phone number of the contact. This parameter is required.
         */
        public Builder phoneNumber(final java.lang.String phoneNumber) {
            this.props.phoneNumber(phoneNumber);
            return this;
        }
        /**
         * Property phoneNumber: The mobile phone number of the contact.
         * <p>
         * @return {@code this}
         * @param phoneNumber Property phoneNumber: The mobile phone number of the contact. This parameter is required.
         */
        public Builder phoneNumber(final com.aliyun.ros.cdk.core.IResolvable phoneNumber) {
            this.props.phoneNumber(phoneNumber);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.resourcemanager.MessageContact}.
         */
        @Override
        public com.aliyun.ros.cdk.resourcemanager.MessageContact build() {
            return new com.aliyun.ros.cdk.resourcemanager.MessageContact(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
