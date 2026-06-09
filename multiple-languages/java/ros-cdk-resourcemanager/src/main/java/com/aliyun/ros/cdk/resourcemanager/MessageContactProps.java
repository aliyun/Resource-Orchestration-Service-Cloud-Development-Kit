package com.aliyun.ros.cdk.resourcemanager;

/**
 * Properties for defining a <code>MessageContact</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:38:07.269Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.MessageContactProps")
@software.amazon.jsii.Jsii.Proxy(MessageContactProps.Jsii$Proxy.class)
public interface MessageContactProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property emailAddress: The email address of the contact.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEmailAddress();

    /**
     * Property messageContactName: The name of the contact.
     * <p>
     * The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMessageContactName();

    /**
     * Property messageTypes: The types of messages received by the contact.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMessageTypes();

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
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTitle();

    /**
     * Property phoneNumber: The mobile phone number of the contact.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPhoneNumber() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link MessageContactProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link MessageContactProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<MessageContactProps> {
        java.lang.Object emailAddress;
        java.lang.Object messageContactName;
        java.lang.Object messageTypes;
        java.lang.Object title;
        java.lang.Object phoneNumber;

        /**
         * Sets the value of {@link MessageContactProps#getEmailAddress}
         * @param emailAddress Property emailAddress: The email address of the contact. This parameter is required.
         * @return {@code this}
         */
        public Builder emailAddress(java.lang.String emailAddress) {
            this.emailAddress = emailAddress;
            return this;
        }

        /**
         * Sets the value of {@link MessageContactProps#getEmailAddress}
         * @param emailAddress Property emailAddress: The email address of the contact. This parameter is required.
         * @return {@code this}
         */
        public Builder emailAddress(com.aliyun.ros.cdk.core.IResolvable emailAddress) {
            this.emailAddress = emailAddress;
            return this;
        }

        /**
         * Sets the value of {@link MessageContactProps#getMessageContactName}
         * @param messageContactName Property messageContactName: The name of the contact. This parameter is required.
         *                           The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
         * @return {@code this}
         */
        public Builder messageContactName(java.lang.String messageContactName) {
            this.messageContactName = messageContactName;
            return this;
        }

        /**
         * Sets the value of {@link MessageContactProps#getMessageContactName}
         * @param messageContactName Property messageContactName: The name of the contact. This parameter is required.
         *                           The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
         * @return {@code this}
         */
        public Builder messageContactName(com.aliyun.ros.cdk.core.IResolvable messageContactName) {
            this.messageContactName = messageContactName;
            return this;
        }

        /**
         * Sets the value of {@link MessageContactProps#getMessageTypes}
         * @param messageTypes Property messageTypes: The types of messages received by the contact. This parameter is required.
         * @return {@code this}
         */
        public Builder messageTypes(com.aliyun.ros.cdk.core.IResolvable messageTypes) {
            this.messageTypes = messageTypes;
            return this;
        }

        /**
         * Sets the value of {@link MessageContactProps#getMessageTypes}
         * @param messageTypes Property messageTypes: The types of messages received by the contact. This parameter is required.
         * @return {@code this}
         */
        public Builder messageTypes(java.util.List<? extends java.lang.Object> messageTypes) {
            this.messageTypes = messageTypes;
            return this;
        }

        /**
         * Sets the value of {@link MessageContactProps#getTitle}
         * @param title Property title: The job title of the contact. This parameter is required.
         *              Valid values:
         *              <p>
         *              <ul>
         *              <li>FinanceDirector.</li>
         *              <li>TechnicalDirector.</li>
         *              <li>MaintenanceDirector.</li>
         *              <li>CEO.</li>
         *              <li>ProjectDirector.</li>
         *              <li>Other.</li>
         *              </ul>
         * @return {@code this}
         */
        public Builder title(java.lang.String title) {
            this.title = title;
            return this;
        }

        /**
         * Sets the value of {@link MessageContactProps#getTitle}
         * @param title Property title: The job title of the contact. This parameter is required.
         *              Valid values:
         *              <p>
         *              <ul>
         *              <li>FinanceDirector.</li>
         *              <li>TechnicalDirector.</li>
         *              <li>MaintenanceDirector.</li>
         *              <li>CEO.</li>
         *              <li>ProjectDirector.</li>
         *              <li>Other.</li>
         *              </ul>
         * @return {@code this}
         */
        public Builder title(com.aliyun.ros.cdk.core.IResolvable title) {
            this.title = title;
            return this;
        }

        /**
         * Sets the value of {@link MessageContactProps#getPhoneNumber}
         * @param phoneNumber Property phoneNumber: The mobile phone number of the contact.
         * @return {@code this}
         */
        public Builder phoneNumber(java.lang.String phoneNumber) {
            this.phoneNumber = phoneNumber;
            return this;
        }

        /**
         * Sets the value of {@link MessageContactProps#getPhoneNumber}
         * @param phoneNumber Property phoneNumber: The mobile phone number of the contact.
         * @return {@code this}
         */
        public Builder phoneNumber(com.aliyun.ros.cdk.core.IResolvable phoneNumber) {
            this.phoneNumber = phoneNumber;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link MessageContactProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public MessageContactProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link MessageContactProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MessageContactProps {
        private final java.lang.Object emailAddress;
        private final java.lang.Object messageContactName;
        private final java.lang.Object messageTypes;
        private final java.lang.Object title;
        private final java.lang.Object phoneNumber;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.emailAddress = software.amazon.jsii.Kernel.get(this, "emailAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.messageContactName = software.amazon.jsii.Kernel.get(this, "messageContactName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.messageTypes = software.amazon.jsii.Kernel.get(this, "messageTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.title = software.amazon.jsii.Kernel.get(this, "title", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.phoneNumber = software.amazon.jsii.Kernel.get(this, "phoneNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.emailAddress = java.util.Objects.requireNonNull(builder.emailAddress, "emailAddress is required");
            this.messageContactName = java.util.Objects.requireNonNull(builder.messageContactName, "messageContactName is required");
            this.messageTypes = java.util.Objects.requireNonNull(builder.messageTypes, "messageTypes is required");
            this.title = java.util.Objects.requireNonNull(builder.title, "title is required");
            this.phoneNumber = builder.phoneNumber;
        }

        @Override
        public final java.lang.Object getEmailAddress() {
            return this.emailAddress;
        }

        @Override
        public final java.lang.Object getMessageContactName() {
            return this.messageContactName;
        }

        @Override
        public final java.lang.Object getMessageTypes() {
            return this.messageTypes;
        }

        @Override
        public final java.lang.Object getTitle() {
            return this.title;
        }

        @Override
        public final java.lang.Object getPhoneNumber() {
            return this.phoneNumber;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("emailAddress", om.valueToTree(this.getEmailAddress()));
            data.set("messageContactName", om.valueToTree(this.getMessageContactName()));
            data.set("messageTypes", om.valueToTree(this.getMessageTypes()));
            data.set("title", om.valueToTree(this.getTitle()));
            if (this.getPhoneNumber() != null) {
                data.set("phoneNumber", om.valueToTree(this.getPhoneNumber()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-resourcemanager.MessageContactProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            MessageContactProps.Jsii$Proxy that = (MessageContactProps.Jsii$Proxy) o;

            if (!emailAddress.equals(that.emailAddress)) return false;
            if (!messageContactName.equals(that.messageContactName)) return false;
            if (!messageTypes.equals(that.messageTypes)) return false;
            if (!title.equals(that.title)) return false;
            return this.phoneNumber != null ? this.phoneNumber.equals(that.phoneNumber) : that.phoneNumber == null;
        }

        @Override
        public final int hashCode() {
            int result = this.emailAddress.hashCode();
            result = 31 * result + (this.messageContactName.hashCode());
            result = 31 * result + (this.messageTypes.hashCode());
            result = 31 * result + (this.title.hashCode());
            result = 31 * result + (this.phoneNumber != null ? this.phoneNumber.hashCode() : 0);
            return result;
        }
    }
}
