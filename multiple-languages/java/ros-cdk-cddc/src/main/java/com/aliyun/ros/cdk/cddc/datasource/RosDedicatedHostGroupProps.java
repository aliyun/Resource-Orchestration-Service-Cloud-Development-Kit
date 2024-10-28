package com.aliyun.ros.cdk.cddc.datasource;

/**
 * Properties for defining a <code>RosDedicatedHostGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:27.151Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cddc.$Module.class, fqn = "@alicloud/ros-cdk-cddc.datasource.RosDedicatedHostGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosDedicatedHostGroupProps.Jsii$Proxy.class)
public interface RosDedicatedHostGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDedicatedHostGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDedicatedHostGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDedicatedHostGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDedicatedHostGroupProps> {
        java.lang.Object dedicatedHostGroupId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(java.lang.String dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosDedicatedHostGroupProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDedicatedHostGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDedicatedHostGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDedicatedHostGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDedicatedHostGroupProps {
        private final java.lang.Object dedicatedHostGroupId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dedicatedHostGroupId = software.amazon.jsii.Kernel.get(this, "dedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dedicatedHostGroupId = java.util.Objects.requireNonNull(builder.dedicatedHostGroupId, "dedicatedHostGroupId is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getDedicatedHostGroupId() {
            return this.dedicatedHostGroupId;
        }

        @Override
        public final java.lang.Object getRefreshOptions() {
            return this.refreshOptions;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("dedicatedHostGroupId", om.valueToTree(this.getDedicatedHostGroupId()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cddc.datasource.RosDedicatedHostGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDedicatedHostGroupProps.Jsii$Proxy that = (RosDedicatedHostGroupProps.Jsii$Proxy) o;

            if (!dedicatedHostGroupId.equals(that.dedicatedHostGroupId)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dedicatedHostGroupId.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}