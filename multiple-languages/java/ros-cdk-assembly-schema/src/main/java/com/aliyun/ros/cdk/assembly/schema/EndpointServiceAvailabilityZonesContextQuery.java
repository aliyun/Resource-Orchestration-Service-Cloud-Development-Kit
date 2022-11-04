package com.aliyun.ros.cdk.assembly.schema;

/**
 * Query to endpoint service context provider.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:40.731Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.assembly.schema.$Module.class, fqn = "@alicloud/ros-cdk-assembly-schema.EndpointServiceAvailabilityZonesContextQuery")
@software.amazon.jsii.Jsii.Proxy(EndpointServiceAvailabilityZonesContextQuery.Jsii$Proxy.class)
public interface EndpointServiceAvailabilityZonesContextQuery extends software.amazon.jsii.JsiiSerializable {

    /**
     * Query account.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getAccount();

    /**
     * Query region.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRegion();

    /**
     * Query service name.
     */
    @org.jetbrains.annotations.NotNull java.lang.String getServiceName();

    /**
     * @return a {@link Builder} of {@link EndpointServiceAvailabilityZonesContextQuery}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EndpointServiceAvailabilityZonesContextQuery}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EndpointServiceAvailabilityZonesContextQuery> {
        java.lang.String account;
        java.lang.String region;
        java.lang.String serviceName;

        /**
         * Sets the value of {@link EndpointServiceAvailabilityZonesContextQuery#getAccount}
         * @param account Query account. This parameter is required.
         * @return {@code this}
         */
        public Builder account(java.lang.String account) {
            this.account = account;
            return this;
        }

        /**
         * Sets the value of {@link EndpointServiceAvailabilityZonesContextQuery#getRegion}
         * @param region Query region. This parameter is required.
         * @return {@code this}
         */
        public Builder region(java.lang.String region) {
            this.region = region;
            return this;
        }

        /**
         * Sets the value of {@link EndpointServiceAvailabilityZonesContextQuery#getServiceName}
         * @param serviceName Query service name. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EndpointServiceAvailabilityZonesContextQuery}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EndpointServiceAvailabilityZonesContextQuery build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EndpointServiceAvailabilityZonesContextQuery}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EndpointServiceAvailabilityZonesContextQuery {
        private final java.lang.String account;
        private final java.lang.String region;
        private final java.lang.String serviceName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.account = software.amazon.jsii.Kernel.get(this, "account", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.region = software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.account = java.util.Objects.requireNonNull(builder.account, "account is required");
            this.region = java.util.Objects.requireNonNull(builder.region, "region is required");
            this.serviceName = java.util.Objects.requireNonNull(builder.serviceName, "serviceName is required");
        }

        @Override
        public final java.lang.String getAccount() {
            return this.account;
        }

        @Override
        public final java.lang.String getRegion() {
            return this.region;
        }

        @Override
        public final java.lang.String getServiceName() {
            return this.serviceName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("account", om.valueToTree(this.getAccount()));
            data.set("region", om.valueToTree(this.getRegion()));
            data.set("serviceName", om.valueToTree(this.getServiceName()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-assembly-schema.EndpointServiceAvailabilityZonesContextQuery"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EndpointServiceAvailabilityZonesContextQuery.Jsii$Proxy that = (EndpointServiceAvailabilityZonesContextQuery.Jsii$Proxy) o;

            if (!account.equals(that.account)) return false;
            if (!region.equals(that.region)) return false;
            return this.serviceName.equals(that.serviceName);
        }

        @Override
        public final int hashCode() {
            int result = this.account.hashCode();
            result = 31 * result + (this.region.hashCode());
            result = 31 * result + (this.serviceName.hashCode());
            return result;
        }
    }
}
