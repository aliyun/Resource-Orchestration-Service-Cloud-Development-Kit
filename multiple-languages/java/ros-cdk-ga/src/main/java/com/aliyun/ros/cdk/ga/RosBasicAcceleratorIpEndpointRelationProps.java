package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>RosBasicAcceleratorIpEndpointRelation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicacceleratoripendpointrelation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:17.154Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosBasicAcceleratorIpEndpointRelationProps")
@software.amazon.jsii.Jsii.Proxy(RosBasicAcceleratorIpEndpointRelationProps.Jsii$Proxy.class)
public interface RosBasicAcceleratorIpEndpointRelationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccelerateIpId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpointId();

    /**
     * @return a {@link Builder} of {@link RosBasicAcceleratorIpEndpointRelationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosBasicAcceleratorIpEndpointRelationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosBasicAcceleratorIpEndpointRelationProps> {
        java.lang.Object accelerateIpId;
        java.lang.Object acceleratorId;
        java.lang.Object endpointId;

        /**
         * Sets the value of {@link RosBasicAcceleratorIpEndpointRelationProps#getAccelerateIpId}
         * @param accelerateIpId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accelerateIpId(java.lang.String accelerateIpId) {
            this.accelerateIpId = accelerateIpId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorIpEndpointRelationProps#getAccelerateIpId}
         * @param accelerateIpId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accelerateIpId(com.aliyun.ros.cdk.core.IResolvable accelerateIpId) {
            this.accelerateIpId = accelerateIpId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorIpEndpointRelationProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorIpEndpointRelationProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorIpEndpointRelationProps#getEndpointId}
         * @param endpointId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointId(java.lang.String endpointId) {
            this.endpointId = endpointId;
            return this;
        }

        /**
         * Sets the value of {@link RosBasicAcceleratorIpEndpointRelationProps#getEndpointId}
         * @param endpointId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder endpointId(com.aliyun.ros.cdk.core.IResolvable endpointId) {
            this.endpointId = endpointId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosBasicAcceleratorIpEndpointRelationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosBasicAcceleratorIpEndpointRelationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosBasicAcceleratorIpEndpointRelationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosBasicAcceleratorIpEndpointRelationProps {
        private final java.lang.Object accelerateIpId;
        private final java.lang.Object acceleratorId;
        private final java.lang.Object endpointId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accelerateIpId = software.amazon.jsii.Kernel.get(this, "accelerateIpId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointId = software.amazon.jsii.Kernel.get(this, "endpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accelerateIpId = java.util.Objects.requireNonNull(builder.accelerateIpId, "accelerateIpId is required");
            this.acceleratorId = java.util.Objects.requireNonNull(builder.acceleratorId, "acceleratorId is required");
            this.endpointId = java.util.Objects.requireNonNull(builder.endpointId, "endpointId is required");
        }

        @Override
        public final java.lang.Object getAccelerateIpId() {
            return this.accelerateIpId;
        }

        @Override
        public final java.lang.Object getAcceleratorId() {
            return this.acceleratorId;
        }

        @Override
        public final java.lang.Object getEndpointId() {
            return this.endpointId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accelerateIpId", om.valueToTree(this.getAccelerateIpId()));
            data.set("acceleratorId", om.valueToTree(this.getAcceleratorId()));
            data.set("endpointId", om.valueToTree(this.getEndpointId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosBasicAcceleratorIpEndpointRelationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosBasicAcceleratorIpEndpointRelationProps.Jsii$Proxy that = (RosBasicAcceleratorIpEndpointRelationProps.Jsii$Proxy) o;

            if (!accelerateIpId.equals(that.accelerateIpId)) return false;
            if (!acceleratorId.equals(that.acceleratorId)) return false;
            return this.endpointId.equals(that.endpointId);
        }

        @Override
        public final int hashCode() {
            int result = this.accelerateIpId.hashCode();
            result = 31 * result + (this.acceleratorId.hashCode());
            result = 31 * result + (this.endpointId.hashCode());
            return result;
        }
    }
}
