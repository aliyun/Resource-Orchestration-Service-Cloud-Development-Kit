package com.aliyun.ros.cdk.slb.datasource;

/**
 * Properties for defining a <code>RosTLSPolicies</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-tlspolicies
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:10.761Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.datasource.RosTLSPoliciesProps")
@software.amazon.jsii.Jsii.Proxy(RosTLSPoliciesProps.Jsii$Proxy.class)
public interface RosTLSPoliciesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTlsPolicyName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTLSPoliciesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTLSPoliciesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTLSPoliciesProps> {
        java.lang.Object instanceId;
        java.lang.Object refreshOptions;
        java.lang.Object tlsPolicyName;

        /**
         * Sets the value of {@link RosTLSPoliciesProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosTLSPoliciesProps#getInstanceId}
         * @param instanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosTLSPoliciesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosTLSPoliciesProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosTLSPoliciesProps#getTlsPolicyName}
         * @param tlsPolicyName the value to be set.
         * @return {@code this}
         */
        public Builder tlsPolicyName(java.lang.String tlsPolicyName) {
            this.tlsPolicyName = tlsPolicyName;
            return this;
        }

        /**
         * Sets the value of {@link RosTLSPoliciesProps#getTlsPolicyName}
         * @param tlsPolicyName the value to be set.
         * @return {@code this}
         */
        public Builder tlsPolicyName(com.aliyun.ros.cdk.core.IResolvable tlsPolicyName) {
            this.tlsPolicyName = tlsPolicyName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTLSPoliciesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTLSPoliciesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTLSPoliciesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTLSPoliciesProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object refreshOptions;
        private final java.lang.Object tlsPolicyName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tlsPolicyName = software.amazon.jsii.Kernel.get(this, "tlsPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.refreshOptions = builder.refreshOptions;
            this.tlsPolicyName = builder.tlsPolicyName;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
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
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }
            if (this.getTlsPolicyName() != null) {
                data.set("tlsPolicyName", om.valueToTree(this.getTlsPolicyName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.datasource.RosTLSPoliciesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTLSPoliciesProps.Jsii$Proxy that = (RosTLSPoliciesProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (this.refreshOptions != null ? !this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions != null) return false;
            return this.tlsPolicyName != null ? this.tlsPolicyName.equals(that.tlsPolicyName) : that.tlsPolicyName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            result = 31 * result + (this.tlsPolicyName != null ? this.tlsPolicyName.hashCode() : 0);
            return result;
        }
    }
}
