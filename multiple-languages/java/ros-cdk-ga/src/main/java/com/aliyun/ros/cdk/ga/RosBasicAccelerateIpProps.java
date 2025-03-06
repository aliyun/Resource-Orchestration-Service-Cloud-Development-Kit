package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>RosBasicAccelerateIp</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicaccelerateip
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:07.161Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosBasicAccelerateIpProps")
@software.amazon.jsii.Jsii.Proxy(RosBasicAccelerateIpProps.Jsii$Proxy.class)
public interface RosBasicAccelerateIpProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getIpSetId();

    /**
     * @return a {@link Builder} of {@link RosBasicAccelerateIpProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBasicAccelerateIpProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBasicAccelerateIpProps> {
        java.lang.Object acceleratorId;
        java.lang.Object ipSetId;

        /**
         * Sets the value of {@link RosBasicAccelerateIpProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAccelerateIpProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAccelerateIpProps#getIpSetId}
         * @param ipSetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipSetId(java.lang.String ipSetId) {
            this.ipSetId = ipSetId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAccelerateIpProps#getIpSetId}
         * @param ipSetId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ipSetId(com.aliyun.ros.cdk.core.IResolvable ipSetId) {
            this.ipSetId = ipSetId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBasicAccelerateIpProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBasicAccelerateIpProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBasicAccelerateIpProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBasicAccelerateIpProps {
        private final java.lang.Object acceleratorId;
        private final java.lang.Object ipSetId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipSetId = software.amazon.jsii.Kernel.get(this, "ipSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.acceleratorId = java.util.Objects.requireNonNull(builder.acceleratorId, "acceleratorId is required");
            this.ipSetId = java.util.Objects.requireNonNull(builder.ipSetId, "ipSetId is required");
        }

        @Override
        public final java.lang.Object getAcceleratorId() {
            return this.acceleratorId;
        }

        @Override
        public final java.lang.Object getIpSetId() {
            return this.ipSetId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("acceleratorId", om.valueToTree(this.getAcceleratorId()));
            data.set("ipSetId", om.valueToTree(this.getIpSetId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosBasicAccelerateIpProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBasicAccelerateIpProps.Jsii$Proxy that = (RosBasicAccelerateIpProps.Jsii$Proxy) o;

            if (!acceleratorId.equals(that.acceleratorId)) return false;
            return this.ipSetId.equals(that.ipSetId);
        }

        @Override
        public final int hashCode() {
            int result = this.acceleratorId.hashCode();
            result = 31 * result + (this.ipSetId.hashCode());
            return result;
        }
    }
}
