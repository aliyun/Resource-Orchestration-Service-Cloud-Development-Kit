package com.aliyun.ros.cdk.ram;

/**
 * Properties for defining a <code>AppSecret</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-appsecret
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:10.787Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.AppSecretProps")
@software.amazon.jsii.Jsii.Proxy(AppSecretProps.Jsii$Proxy.class)
public interface AppSecretProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property appId: The ID of the application.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAppId();

    /**
     * @return a {@link Builder} of {@link AppSecretProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link AppSecretProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<AppSecretProps> {
        java.lang.Object appId;

        /**
         * Sets the value of {@link AppSecretProps#getAppId}
         * @param appId Property appId: The ID of the application. This parameter is required.
         * @return {@code this}
         */
        public Builder appId(java.lang.String appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link AppSecretProps#getAppId}
         * @param appId Property appId: The ID of the application. This parameter is required.
         * @return {@code this}
         */
        public Builder appId(com.aliyun.ros.cdk.core.IResolvable appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link AppSecretProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public AppSecretProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link AppSecretProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AppSecretProps {
        private final java.lang.Object appId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appId = software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appId = java.util.Objects.requireNonNull(builder.appId, "appId is required");
        }

        @Override
        public final java.lang.Object getAppId() {
            return this.appId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("appId", om.valueToTree(this.getAppId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ram.AppSecretProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            AppSecretProps.Jsii$Proxy that = (AppSecretProps.Jsii$Proxy) o;

            return this.appId.equals(that.appId);
        }

        @Override
        public final int hashCode() {
            int result = this.appId.hashCode();
            return result;
        }
    }
}
