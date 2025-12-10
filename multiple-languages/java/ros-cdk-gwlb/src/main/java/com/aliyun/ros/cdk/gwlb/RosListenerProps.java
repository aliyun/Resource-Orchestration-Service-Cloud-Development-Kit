package com.aliyun.ros.cdk.gwlb;

/**
 * Properties for defining a <code>RosListener</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-listener
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.524Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gwlb.$Module.class, fqn = "@alicloud/ros-cdk-gwlb.RosListenerProps")
@software.amazon.jsii.Jsii.Proxy(RosListenerProps.Jsii$Proxy.class)
public interface RosListenerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServerGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getListenerDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.gwlb.RosListener.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosListenerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosListenerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosListenerProps> {
        java.lang.Object loadBalancerId;
        java.lang.Object serverGroupId;
        java.lang.Object listenerDescription;
        java.util.List<com.aliyun.ros.cdk.gwlb.RosListener.TagsProperty> tags;

        /**
         * Sets the value of {@link RosListenerProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getServerGroupId}
         * @param serverGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serverGroupId(java.lang.String serverGroupId) {
            this.serverGroupId = serverGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getServerGroupId}
         * @param serverGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serverGroupId(com.aliyun.ros.cdk.core.IResolvable serverGroupId) {
            this.serverGroupId = serverGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getListenerDescription}
         * @param listenerDescription the value to be set.
         * @return {@code this}
         */
        public Builder listenerDescription(java.lang.String listenerDescription) {
            this.listenerDescription = listenerDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getListenerDescription}
         * @param listenerDescription the value to be set.
         * @return {@code this}
         */
        public Builder listenerDescription(com.aliyun.ros.cdk.core.IResolvable listenerDescription) {
            this.listenerDescription = listenerDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosListenerProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.gwlb.RosListener.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.gwlb.RosListener.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosListenerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosListenerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosListenerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosListenerProps {
        private final java.lang.Object loadBalancerId;
        private final java.lang.Object serverGroupId;
        private final java.lang.Object listenerDescription;
        private final java.util.List<com.aliyun.ros.cdk.gwlb.RosListener.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverGroupId = software.amazon.jsii.Kernel.get(this, "serverGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.listenerDescription = software.amazon.jsii.Kernel.get(this, "listenerDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gwlb.RosListener.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.loadBalancerId = java.util.Objects.requireNonNull(builder.loadBalancerId, "loadBalancerId is required");
            this.serverGroupId = java.util.Objects.requireNonNull(builder.serverGroupId, "serverGroupId is required");
            this.listenerDescription = builder.listenerDescription;
            this.tags = (java.util.List<com.aliyun.ros.cdk.gwlb.RosListener.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.Object getServerGroupId() {
            return this.serverGroupId;
        }

        @Override
        public final java.lang.Object getListenerDescription() {
            return this.listenerDescription;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.gwlb.RosListener.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            data.set("serverGroupId", om.valueToTree(this.getServerGroupId()));
            if (this.getListenerDescription() != null) {
                data.set("listenerDescription", om.valueToTree(this.getListenerDescription()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gwlb.RosListenerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosListenerProps.Jsii$Proxy that = (RosListenerProps.Jsii$Proxy) o;

            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            if (!serverGroupId.equals(that.serverGroupId)) return false;
            if (this.listenerDescription != null ? !this.listenerDescription.equals(that.listenerDescription) : that.listenerDescription != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.loadBalancerId.hashCode();
            result = 31 * result + (this.serverGroupId.hashCode());
            result = 31 * result + (this.listenerDescription != null ? this.listenerDescription.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
