package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>AccessKey</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-accesskey
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:34.593Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.AccessKeyProps")
@software.amazon.jsii.Jsii.Proxy(AccessKeyProps.Jsii$Proxy.class)
public interface AccessKeyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property userName: Specifies the user name, containing up to 64 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserName();

    /**
     * @return a {@link Builder} of {@link AccessKeyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AccessKeyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AccessKeyProps> {
        java.lang.Object userName;

        /**
         * Sets the value of {@link AccessKeyProps#getUserName}
         * @param userName Property userName: Specifies the user name, containing up to 64 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link AccessKeyProps#getUserName}
         * @param userName Property userName: Specifies the user name, containing up to 64 characters. This parameter is required.
         * @return {@code this}
         */
        public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AccessKeyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AccessKeyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AccessKeyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AccessKeyProps {
        private final java.lang.Object userName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.userName = java.util.Objects.requireNonNull(builder.userName, "userName is required");
        }

        @Override
        public final java.lang.Object getUserName() {
            return this.userName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("userName", om.valueToTree(this.getUserName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.AccessKeyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AccessKeyProps.Jsii$Proxy that = (AccessKeyProps.Jsii$Proxy) o;

            return this.userName.equals(that.userName);
        }

        @Override
        public final int hashCode() {
            int result = this.userName.hashCode();
            return result;
        }
    }
}
