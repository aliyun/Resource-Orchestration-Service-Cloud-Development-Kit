package com.aliyun.ros.cdk.apigateway;

/**
 * Properties for defining a <code>TrafficControlBinding</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrolbinding
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:13.929Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.TrafficControlBindingProps")
@software.amazon.jsii.Jsii.Proxy(TrafficControlBindingProps.Jsii$Proxy.class)
public interface TrafficControlBindingProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property apiIds: APIs to bind with the traffic control.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApiIds();

    /**
     * Property groupId: The id of group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     * Property stageName: Bind traffic in this stage.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStageName();

    /**
     * Property trafficControlId: The id of traffic control.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTrafficControlId();

    /**
     * @return a {@link Builder} of {@link TrafficControlBindingProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TrafficControlBindingProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TrafficControlBindingProps> {
        java.lang.Object apiIds;
        java.lang.Object groupId;
        java.lang.Object stageName;
        java.lang.Object trafficControlId;

        /**
         * Sets the value of {@link TrafficControlBindingProps#getApiIds}
         * @param apiIds Property apiIds: APIs to bind with the traffic control. This parameter is required.
         * @return {@code this}
         */
        public Builder apiIds(java.util.List<? extends java.lang.Object> apiIds) {
            this.apiIds = apiIds;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlBindingProps#getApiIds}
         * @param apiIds Property apiIds: APIs to bind with the traffic control. This parameter is required.
         * @return {@code this}
         */
        public Builder apiIds(com.aliyun.ros.cdk.core.IResolvable apiIds) {
            this.apiIds = apiIds;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlBindingProps#getGroupId}
         * @param groupId Property groupId: The id of group. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlBindingProps#getGroupId}
         * @param groupId Property groupId: The id of group. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlBindingProps#getStageName}
         * @param stageName Property stageName: Bind traffic in this stage. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(java.lang.String stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlBindingProps#getStageName}
         * @param stageName Property stageName: Bind traffic in this stage. This parameter is required.
         * @return {@code this}
         */
        public Builder stageName(com.aliyun.ros.cdk.core.IResolvable stageName) {
            this.stageName = stageName;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlBindingProps#getTrafficControlId}
         * @param trafficControlId Property trafficControlId: The id of traffic control. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficControlId(java.lang.String trafficControlId) {
            this.trafficControlId = trafficControlId;
            return this;
        }

        /**
         * Sets the value of {@link TrafficControlBindingProps#getTrafficControlId}
         * @param trafficControlId Property trafficControlId: The id of traffic control. This parameter is required.
         * @return {@code this}
         */
        public Builder trafficControlId(com.aliyun.ros.cdk.core.IResolvable trafficControlId) {
            this.trafficControlId = trafficControlId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TrafficControlBindingProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TrafficControlBindingProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TrafficControlBindingProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TrafficControlBindingProps {
        private final java.lang.Object apiIds;
        private final java.lang.Object groupId;
        private final java.lang.Object stageName;
        private final java.lang.Object trafficControlId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.apiIds = software.amazon.jsii.Kernel.get(this, "apiIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.stageName = software.amazon.jsii.Kernel.get(this, "stageName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.trafficControlId = software.amazon.jsii.Kernel.get(this, "trafficControlId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.apiIds = java.util.Objects.requireNonNull(builder.apiIds, "apiIds is required");
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.stageName = java.util.Objects.requireNonNull(builder.stageName, "stageName is required");
            this.trafficControlId = java.util.Objects.requireNonNull(builder.trafficControlId, "trafficControlId is required");
        }

        @Override
        public final java.lang.Object getApiIds() {
            return this.apiIds;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getStageName() {
            return this.stageName;
        }

        @Override
        public final java.lang.Object getTrafficControlId() {
            return this.trafficControlId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("apiIds", om.valueToTree(this.getApiIds()));
            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("stageName", om.valueToTree(this.getStageName()));
            data.set("trafficControlId", om.valueToTree(this.getTrafficControlId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.TrafficControlBindingProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TrafficControlBindingProps.Jsii$Proxy that = (TrafficControlBindingProps.Jsii$Proxy) o;

            if (!apiIds.equals(that.apiIds)) return false;
            if (!groupId.equals(that.groupId)) return false;
            if (!stageName.equals(that.stageName)) return false;
            return this.trafficControlId.equals(that.trafficControlId);
        }

        @Override
        public final int hashCode() {
            int result = this.apiIds.hashCode();
            result = 31 * result + (this.groupId.hashCode());
            result = 31 * result + (this.stageName.hashCode());
            result = 31 * result + (this.trafficControlId.hashCode());
            return result;
        }
    }
}
