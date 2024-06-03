package com.aliyun.ros.cdk.slb.datasource;

/**
 * Properties for defining a <code>TLSPolicies</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicies
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:54.545Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.datasource.TLSPoliciesProps")
@software.amazon.jsii.Jsii.Proxy(TLSPoliciesProps.Jsii$Proxy.class)
public interface TLSPoliciesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The ID of the TLS policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property tlsPolicyName: The name of the TLS policy.
     * <p>
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTlsPolicyName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TLSPoliciesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TLSPoliciesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TLSPoliciesProps> {
        java.lang.Object instanceId;
        java.lang.Object tlsPolicyName;

        /**
         * Sets the value of {@link TLSPoliciesProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the TLS policy. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link TLSPoliciesProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the TLS policy. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link TLSPoliciesProps#getTlsPolicyName}
         * @param tlsPolicyName Property tlsPolicyName: The name of the TLS policy.
         *                      The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder tlsPolicyName(java.lang.String tlsPolicyName) {
            this.tlsPolicyName = tlsPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link TLSPoliciesProps#getTlsPolicyName}
         * @param tlsPolicyName Property tlsPolicyName: The name of the TLS policy.
         *                      The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder tlsPolicyName(com.aliyun.ros.cdk.core.IResolvable tlsPolicyName) {
            this.tlsPolicyName = tlsPolicyName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TLSPoliciesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TLSPoliciesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TLSPoliciesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TLSPoliciesProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object tlsPolicyName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tlsPolicyName = software.amazon.jsii.Kernel.get(this, "tlsPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.tlsPolicyName = builder.tlsPolicyName;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getTlsPolicyName() {
            return this.tlsPolicyName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            if (this.getTlsPolicyName() != null) {
                data.set("tlsPolicyName", om.valueToTree(this.getTlsPolicyName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.datasource.TLSPoliciesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TLSPoliciesProps.Jsii$Proxy that = (TLSPoliciesProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            return this.tlsPolicyName != null ? this.tlsPolicyName.equals(that.tlsPolicyName) : that.tlsPolicyName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.tlsPolicyName != null ? this.tlsPolicyName.hashCode() : 0);
            return result;
        }
    }
}
