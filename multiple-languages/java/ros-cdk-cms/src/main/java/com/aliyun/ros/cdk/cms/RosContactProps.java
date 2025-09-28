package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a <code>RosContact</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contact
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:22.494Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.RosContactProps")
@software.amazon.jsii.Jsii.Proxy(RosContactProps.Jsii$Proxy.class)
public interface RosContactProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChannels();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContactName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDescribe();

    /**
     * @return a {@link Builder} of {@link RosContactProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosContactProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosContactProps> {
        java.lang.Object channels;
        java.lang.Object contactName;
        java.lang.Object describe;

        /**
         * Sets the value of {@link RosContactProps#getChannels}
         * @param channels the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder channels(com.aliyun.ros.cdk.core.IResolvable channels) {
            this.channels = channels;
            return this;
        }

        /**
         * Sets the value of {@link RosContactProps#getChannels}
         * @param channels the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder channels(com.aliyun.ros.cdk.cms.RosContact.ChannelsProperty channels) {
            this.channels = channels;
            return this;
        }

        /**
         * Sets the value of {@link RosContactProps#getContactName}
         * @param contactName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactName(java.lang.String contactName) {
            this.contactName = contactName;
            return this;
        }

        /**
         * Sets the value of {@link RosContactProps#getContactName}
         * @param contactName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder contactName(com.aliyun.ros.cdk.core.IResolvable contactName) {
            this.contactName = contactName;
            return this;
        }

        /**
         * Sets the value of {@link RosContactProps#getDescribe}
         * @param describe the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder describe(java.lang.String describe) {
            this.describe = describe;
            return this;
        }

        /**
         * Sets the value of {@link RosContactProps#getDescribe}
         * @param describe the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder describe(com.aliyun.ros.cdk.core.IResolvable describe) {
            this.describe = describe;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosContactProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosContactProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosContactProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosContactProps {
        private final java.lang.Object channels;
        private final java.lang.Object contactName;
        private final java.lang.Object describe;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.channels = software.amazon.jsii.Kernel.get(this, "channels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.contactName = software.amazon.jsii.Kernel.get(this, "contactName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.describe = software.amazon.jsii.Kernel.get(this, "describe", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.channels = java.util.Objects.requireNonNull(builder.channels, "channels is required");
            this.contactName = java.util.Objects.requireNonNull(builder.contactName, "contactName is required");
            this.describe = java.util.Objects.requireNonNull(builder.describe, "describe is required");
        }

        @Override
        public final java.lang.Object getChannels() {
            return this.channels;
        }

        @Override
        public final java.lang.Object getContactName() {
            return this.contactName;
        }

        @Override
        public final java.lang.Object getDescribe() {
            return this.describe;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("channels", om.valueToTree(this.getChannels()));
            data.set("contactName", om.valueToTree(this.getContactName()));
            data.set("describe", om.valueToTree(this.getDescribe()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.RosContactProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosContactProps.Jsii$Proxy that = (RosContactProps.Jsii$Proxy) o;

            if (!channels.equals(that.channels)) return false;
            if (!contactName.equals(that.contactName)) return false;
            return this.describe.equals(that.describe);
        }

        @Override
        public final int hashCode() {
            int result = this.channels.hashCode();
            result = 31 * result + (this.contactName.hashCode());
            result = 31 * result + (this.describe.hashCode());
            return result;
        }
    }
}
