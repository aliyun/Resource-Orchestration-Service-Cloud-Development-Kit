package com.aliyun.ros.cdk.cr;

/**
 * Properties for defining a `ALIYUN::CR::UserInfo`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:24.245Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.RosUserInfoProps")
@software.amazon.jsii.Jsii.Proxy(RosUserInfoProps.Jsii$Proxy.class)
public interface RosUserInfoProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUser();

    /**
     * @return a {@link Builder} of {@link RosUserInfoProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosUserInfoProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosUserInfoProps> {
        java.lang.Object user;

        /**
         * Sets the value of {@link RosUserInfoProps#getUser}
         * @param user the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder user(com.aliyun.ros.cdk.core.IResolvable user) {
            this.user = user;
            return this;
        }

        /**
         * Sets the value of {@link RosUserInfoProps#getUser}
         * @param user the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder user(com.aliyun.ros.cdk.cr.RosUserInfo.UserProperty user) {
            this.user = user;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosUserInfoProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosUserInfoProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosUserInfoProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosUserInfoProps {
        private final java.lang.Object user;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.user = software.amazon.jsii.Kernel.get(this, "user", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.user = java.util.Objects.requireNonNull(builder.user, "user is required");
        }

        @Override
        public final java.lang.Object getUser() {
            return this.user;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("user", om.valueToTree(this.getUser()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cr.RosUserInfoProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosUserInfoProps.Jsii$Proxy that = (RosUserInfoProps.Jsii$Proxy) o;

            return this.user.equals(that.user);
        }

        @Override
        public final int hashCode() {
            int result = this.user.hashCode();
            return result;
        }
    }
}
