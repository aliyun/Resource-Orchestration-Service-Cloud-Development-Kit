package com.aliyun.ros.cdk.ga;

/**
 * Properties for defining a <code>RosIpSets</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-ipsets
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:40.141Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosIpSetsProps")
@software.amazon.jsii.Jsii.Proxy(RosIpSetsProps.Jsii$Proxy.class)
public interface RosIpSetsProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAccelerateRegion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId();

    /**
     * @return a {@link Builder} of {@link RosIpSetsProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosIpSetsProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosIpSetsProps> {
        java.lang.Object accelerateRegion;
        java.lang.Object acceleratorId;

        /**
         * Sets the value of {@link RosIpSetsProps#getAccelerateRegion}
         * @param accelerateRegion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accelerateRegion(com.aliyun.ros.cdk.core.IResolvable accelerateRegion) {
            this.accelerateRegion = accelerateRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosIpSetsProps#getAccelerateRegion}
         * @param accelerateRegion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder accelerateRegion(java.util.List<? extends java.lang.Object> accelerateRegion) {
            this.accelerateRegion = accelerateRegion;
            return this;
        }

        /**
         * Sets the value of {@link RosIpSetsProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(java.lang.String acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Sets the value of {@link RosIpSetsProps#getAcceleratorId}
         * @param acceleratorId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder acceleratorId(com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.acceleratorId = acceleratorId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosIpSetsProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosIpSetsProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosIpSetsProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosIpSetsProps {
        private final java.lang.Object accelerateRegion;
        private final java.lang.Object acceleratorId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.accelerateRegion = software.amazon.jsii.Kernel.get(this, "accelerateRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.acceleratorId = software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.accelerateRegion = java.util.Objects.requireNonNull(builder.accelerateRegion, "accelerateRegion is required");
            this.acceleratorId = java.util.Objects.requireNonNull(builder.acceleratorId, "acceleratorId is required");
        }

        @Override
        public final java.lang.Object getAccelerateRegion() {
            return this.accelerateRegion;
        }

        @Override
        public final java.lang.Object getAcceleratorId() {
            return this.acceleratorId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("accelerateRegion", om.valueToTree(this.getAccelerateRegion()));
            data.set("acceleratorId", om.valueToTree(this.getAcceleratorId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ga.RosIpSetsProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosIpSetsProps.Jsii$Proxy that = (RosIpSetsProps.Jsii$Proxy) o;

            if (!accelerateRegion.equals(that.accelerateRegion)) return false;
            return this.acceleratorId.equals(that.acceleratorId);
        }

        @Override
        public final int hashCode() {
            int result = this.accelerateRegion.hashCode();
            result = 31 * result + (this.acceleratorId.hashCode());
            return result;
        }
    }
}
