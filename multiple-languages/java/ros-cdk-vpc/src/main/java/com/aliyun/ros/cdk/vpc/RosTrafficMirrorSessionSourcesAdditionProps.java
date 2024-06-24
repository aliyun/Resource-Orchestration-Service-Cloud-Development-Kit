package com.aliyun.ros.cdk.vpc;

/**
 * Properties for defining a <code>RosTrafficMirrorSessionSourcesAddition</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsessionsourcesaddition
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:09.758Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosTrafficMirrorSessionSourcesAdditionProps")
@software.amazon.jsii.Jsii.Proxy(RosTrafficMirrorSessionSourcesAdditionProps.Jsii$Proxy.class)
public interface RosTrafficMirrorSessionSourcesAdditionProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTrafficMirrorSessionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTrafficMirrorSourceIds();

    /**
     * @return a {@link Builder} of {@link RosTrafficMirrorSessionSourcesAdditionProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTrafficMirrorSessionSourcesAdditionProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTrafficMirrorSessionSourcesAdditionProps> {
        java.lang.Object trafficMirrorSessionId;
        java.lang.Object trafficMirrorSourceIds;

        /**
         * Sets the value of {@link RosTrafficMirrorSessionSourcesAdditionProps#getTrafficMirrorSessionId}
         * @param trafficMirrorSessionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficMirrorSessionId(java.lang.String trafficMirrorSessionId) {
            this.trafficMirrorSessionId = trafficMirrorSessionId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionSourcesAdditionProps#getTrafficMirrorSessionId}
         * @param trafficMirrorSessionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficMirrorSessionId(com.aliyun.ros.cdk.core.IResolvable trafficMirrorSessionId) {
            this.trafficMirrorSessionId = trafficMirrorSessionId;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionSourcesAdditionProps#getTrafficMirrorSourceIds}
         * @param trafficMirrorSourceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficMirrorSourceIds(com.aliyun.ros.cdk.core.IResolvable trafficMirrorSourceIds) {
            this.trafficMirrorSourceIds = trafficMirrorSourceIds;
            return this;
        }

        /**
         * Sets the value of {@link RosTrafficMirrorSessionSourcesAdditionProps#getTrafficMirrorSourceIds}
         * @param trafficMirrorSourceIds the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficMirrorSourceIds(java.util.List<? extends java.lang.Object> trafficMirrorSourceIds) {
            this.trafficMirrorSourceIds = trafficMirrorSourceIds;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTrafficMirrorSessionSourcesAdditionProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTrafficMirrorSessionSourcesAdditionProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTrafficMirrorSessionSourcesAdditionProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTrafficMirrorSessionSourcesAdditionProps {
        private final java.lang.Object trafficMirrorSessionId;
        private final java.lang.Object trafficMirrorSourceIds;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.trafficMirrorSessionId = software.amazon.jsii.Kernel.get(this, "trafficMirrorSessionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficMirrorSourceIds = software.amazon.jsii.Kernel.get(this, "trafficMirrorSourceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.trafficMirrorSessionId = java.util.Objects.requireNonNull(builder.trafficMirrorSessionId, "trafficMirrorSessionId is required");
            this.trafficMirrorSourceIds = java.util.Objects.requireNonNull(builder.trafficMirrorSourceIds, "trafficMirrorSourceIds is required");
        }

        @Override
        public final java.lang.Object getTrafficMirrorSessionId() {
            return this.trafficMirrorSessionId;
        }

        @Override
        public final java.lang.Object getTrafficMirrorSourceIds() {
            return this.trafficMirrorSourceIds;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("trafficMirrorSessionId", om.valueToTree(this.getTrafficMirrorSessionId()));
            data.set("trafficMirrorSourceIds", om.valueToTree(this.getTrafficMirrorSourceIds()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-vpc.RosTrafficMirrorSessionSourcesAdditionProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTrafficMirrorSessionSourcesAdditionProps.Jsii$Proxy that = (RosTrafficMirrorSessionSourcesAdditionProps.Jsii$Proxy) o;

            if (!trafficMirrorSessionId.equals(that.trafficMirrorSessionId)) return false;
            return this.trafficMirrorSourceIds.equals(that.trafficMirrorSourceIds);
        }

        @Override
        public final int hashCode() {
            int result = this.trafficMirrorSessionId.hashCode();
            result = 31 * result + (this.trafficMirrorSourceIds.hashCode());
            return result;
        }
    }
}
