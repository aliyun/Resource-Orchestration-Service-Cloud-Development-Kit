package com.aliyun.ros.cdk.apigateway.datasource;

/**
 * Properties for defining a <code>DATASOURCE::ApiGateway::Apps</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:33.471Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.datasource.RosAppsProps")
@software.amazon.jsii.Jsii.Proxy(RosAppsProps.Jsii$Proxy.class)
public interface RosAppsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAppOwner() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosAppsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosAppsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosAppsProps> {
        java.lang.Object appId;
        java.lang.Object appOwner;

        /**
         * Sets the value of {@link RosAppsProps#getAppId}
         * @param appId the value to be set.
         * @return {@code this}
         */
        public Builder appId(java.lang.String appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link RosAppsProps#getAppId}
         * @param appId the value to be set.
         * @return {@code this}
         */
        public Builder appId(com.aliyun.ros.cdk.core.IResolvable appId) {
            this.appId = appId;
            return this;
        }

        /**
         * Sets the value of {@link RosAppsProps#getAppOwner}
         * @param appOwner the value to be set.
         * @return {@code this}
         */
        public Builder appOwner(java.lang.String appOwner) {
            this.appOwner = appOwner;
            return this;
        }

        /**
         * Sets the value of {@link RosAppsProps#getAppOwner}
         * @param appOwner the value to be set.
         * @return {@code this}
         */
        public Builder appOwner(com.aliyun.ros.cdk.core.IResolvable appOwner) {
            this.appOwner = appOwner;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosAppsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosAppsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosAppsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosAppsProps {
        private final java.lang.Object appId;
        private final java.lang.Object appOwner;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.appId = software.amazon.jsii.Kernel.get(this, "appId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.appOwner = software.amazon.jsii.Kernel.get(this, "appOwner", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.appId = builder.appId;
            this.appOwner = builder.appOwner;
        }

        @Override
        public final java.lang.Object getAppId() {
            return this.appId;
        }

        @Override
        public final java.lang.Object getAppOwner() {
            return this.appOwner;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAppId() != null) {
                data.set("appId", om.valueToTree(this.getAppId()));
            }
            if (this.getAppOwner() != null) {
                data.set("appOwner", om.valueToTree(this.getAppOwner()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.datasource.RosAppsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosAppsProps.Jsii$Proxy that = (RosAppsProps.Jsii$Proxy) o;

            if (this.appId != null ? !this.appId.equals(that.appId) : that.appId != null) return false;
            return this.appOwner != null ? this.appOwner.equals(that.appOwner) : that.appOwner == null;
        }

        @Override
        public final int hashCode() {
            int result = this.appId != null ? this.appId.hashCode() : 0;
            result = 31 * result + (this.appOwner != null ? this.appOwner.hashCode() : 0);
            return result;
        }
    }
}
