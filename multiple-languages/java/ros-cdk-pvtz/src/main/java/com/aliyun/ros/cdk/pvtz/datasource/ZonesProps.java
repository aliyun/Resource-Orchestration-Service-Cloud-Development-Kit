package com.aliyun.ros.cdk.pvtz.datasource;

/**
 * Properties for defining a <code>Zones</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zones
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:17.382Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.datasource.ZonesProps")
@software.amazon.jsii.Jsii.Proxy(ZonesProps.Jsii$Proxy.class)
public interface ZonesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property resourceGroupId: ResourceGroupId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ZonesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ZonesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ZonesProps> {
        java.lang.Object resourceGroupId;

        /**
         * Sets the value of {@link ZonesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: ResourceGroupId.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link ZonesProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: ResourceGroupId.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ZonesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ZonesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ZonesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ZonesProps {
        private final java.lang.Object resourceGroupId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.resourceGroupId = builder.resourceGroupId;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pvtz.datasource.ZonesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ZonesProps.Jsii$Proxy that = (ZonesProps.Jsii$Proxy) o;

            return this.resourceGroupId != null ? this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0;
            return result;
        }
    }
}
