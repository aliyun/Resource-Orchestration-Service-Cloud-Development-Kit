package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a `ALIYUN::RAM::AccessKey`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-17T08:21:16.114Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.RosAccessKeyProps")
@software.amazon.jsii.Jsii.Proxy(RosAccessKeyProps.Jsii$Proxy.class)
public interface RosAccessKeyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUserName();

    /**
     * @return a {@link Builder} of {@link RosAccessKeyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAccessKeyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAccessKeyProps> {
        java.lang.Object userName;

        /**
         * Sets the value of {@link RosAccessKeyProps#getUserName}
         * @param userName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder userName(java.lang.String userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Sets the value of {@link RosAccessKeyProps#getUserName}
         * @param userName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
            this.userName = userName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAccessKeyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAccessKeyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAccessKeyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAccessKeyProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.RosAccessKeyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAccessKeyProps.Jsii$Proxy that = (RosAccessKeyProps.Jsii$Proxy) o;

            return this.userName.equals(that.userName);
        }

        @Override
        public final int hashCode() {
            int result = this.userName.hashCode();
            return result;
        }
    }
}
