package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosHaVip</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:11.825Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosHaVipProps")
@software.amazon.jsii.Jsii.Proxy(RosHaVipProps.Jsii$Proxy.class)
public interface RosHaVipProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHaVipId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshOptions() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosHaVipProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosHaVipProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosHaVipProps> {
        java.lang.Object haVipId;
        java.lang.Object refreshOptions;

        /**
         * Sets the value of {@link RosHaVipProps#getHaVipId}
         * @param haVipId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder haVipId(java.lang.String haVipId) {
            this.haVipId = haVipId;
            return this;
        }

        /**
         * Sets the value of {@link RosHaVipProps#getHaVipId}
         * @param haVipId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder haVipId(com.aliyun.ros.cdk.core.IResolvable haVipId) {
            this.haVipId = haVipId;
            return this;
        }

        /**
         * Sets the value of {@link RosHaVipProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(java.lang.String refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosHaVipProps#getRefreshOptions}
         * @param refreshOptions the value to be set.
         * @return {@code this}
         */
        public Builder refreshOptions(com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.refreshOptions = refreshOptions;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosHaVipProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosHaVipProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosHaVipProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosHaVipProps {
        private final java.lang.Object haVipId;
        private final java.lang.Object refreshOptions;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.haVipId = software.amazon.jsii.Kernel.get(this, "haVipId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.refreshOptions = software.amazon.jsii.Kernel.get(this, "refreshOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.haVipId = java.util.Objects.requireNonNull(builder.haVipId, "haVipId is required");
            this.refreshOptions = builder.refreshOptions;
        }

        @Override
        public final java.lang.Object getHaVipId() {
            return this.haVipId;
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

            data.set("haVipId", om.valueToTree(this.getHaVipId()));
            if (this.getRefreshOptions() != null) {
                data.set("refreshOptions", om.valueToTree(this.getRefreshOptions()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosHaVipProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosHaVipProps.Jsii$Proxy that = (RosHaVipProps.Jsii$Proxy) o;

            if (!haVipId.equals(that.haVipId)) return false;
            return this.refreshOptions != null ? this.refreshOptions.equals(that.refreshOptions) : that.refreshOptions == null;
        }

        @Override
        public final int hashCode() {
            int result = this.haVipId.hashCode();
            result = 31 * result + (this.refreshOptions != null ? this.refreshOptions.hashCode() : 0);
            return result;
        }
    }
}
