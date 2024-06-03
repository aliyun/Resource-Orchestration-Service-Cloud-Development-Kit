package com.aliyun.ros.cdk.vpc.datasource;

/**
 * Properties for defining a <code>RosTrafficMirrorFilter</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:55.101Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.RosTrafficMirrorFilterProps")
@software.amazon.jsii.Jsii.Proxy(RosTrafficMirrorFilterProps.Jsii$Proxy.class)
public interface RosTrafficMirrorFilterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTrafficMirrorFilterId();

    /**
     * @return a {@link Builder} of {@link RosTrafficMirrorFilterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTrafficMirrorFilterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTrafficMirrorFilterProps> {
        java.lang.Object trafficMirrorFilterId;

        /**
         * Sets the value of {@link RosTrafficMirrorFilterProps#getTrafficMirrorFilterId}
         * @param trafficMirrorFilterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficMirrorFilterId(java.lang.String trafficMirrorFilterId) {
            this.trafficMirrorFilterId = trafficMirrorFilterId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorFilterProps#getTrafficMirrorFilterId}
         * @param trafficMirrorFilterId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficMirrorFilterId(com.aliyun.ros.cdk.core.IResolvable trafficMirrorFilterId) {
            this.trafficMirrorFilterId = trafficMirrorFilterId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTrafficMirrorFilterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTrafficMirrorFilterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTrafficMirrorFilterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTrafficMirrorFilterProps {
        private final java.lang.Object trafficMirrorFilterId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.trafficMirrorFilterId = software.amazon.jsii.Kernel.get(this, "trafficMirrorFilterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.trafficMirrorFilterId = java.util.Objects.requireNonNull(builder.trafficMirrorFilterId, "trafficMirrorFilterId is required");
        }

        @Override
        public final java.lang.Object getTrafficMirrorFilterId() {
            return this.trafficMirrorFilterId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("trafficMirrorFilterId", om.valueToTree(this.getTrafficMirrorFilterId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.datasource.RosTrafficMirrorFilterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTrafficMirrorFilterProps.Jsii$Proxy that = (RosTrafficMirrorFilterProps.Jsii$Proxy) o;

            return this.trafficMirrorFilterId.equals(that.trafficMirrorFilterId);
        }

        @Override
        public final int hashCode() {
            int result = this.trafficMirrorFilterId.hashCode();
            return result;
        }
    }
}
