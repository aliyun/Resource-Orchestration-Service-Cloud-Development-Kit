package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a <code>RosVServerGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:10.649Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosVServerGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosVServerGroupProps.Jsii$Proxy.class)
public interface RosVServerGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVServerGroupName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackendServers() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.slb.RosVServerGroup.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosVServerGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosVServerGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosVServerGroupProps> {
        java.lang.Object loadBalancerId;
        java.lang.Object vServerGroupName;
        java.lang.Object backendServers;
        java.util.List<com.aliyun.ros.cdk.slb.RosVServerGroup.TagsProperty> tags;

        /**
         * Sets the value of {@link RosVServerGroupProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosVServerGroupProps#getLoadBalancerId}
         * @param loadBalancerId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link RosVServerGroupProps#getVServerGroupName}
         * @param vServerGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vServerGroupName(java.lang.String vServerGroupName) {
            this.vServerGroupName = vServerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosVServerGroupProps#getVServerGroupName}
         * @param vServerGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vServerGroupName(com.aliyun.ros.cdk.core.IResolvable vServerGroupName) {
            this.vServerGroupName = vServerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosVServerGroupProps#getBackendServers}
         * @param backendServers the value to be set.
         * @return {@code this}
         */
        public Builder backendServers(com.aliyun.ros.cdk.core.IResolvable backendServers) {
            this.backendServers = backendServers;
            return this;
        }

        /**
         * Sets the value of {@link RosVServerGroupProps#getBackendServers}
         * @param backendServers the value to be set.
         * @return {@code this}
         */
        public Builder backendServers(java.util.List<? extends java.lang.Object> backendServers) {
            this.backendServers = backendServers;
            return this;
        }

        /**
         * Sets the value of {@link RosVServerGroupProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.slb.RosVServerGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.slb.RosVServerGroup.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosVServerGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosVServerGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosVServerGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosVServerGroupProps {
        private final java.lang.Object loadBalancerId;
        private final java.lang.Object vServerGroupName;
        private final java.lang.Object backendServers;
        private final java.util.List<com.aliyun.ros.cdk.slb.RosVServerGroup.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.loadBalancerId = software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vServerGroupName = software.amazon.jsii.Kernel.get(this, "vServerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backendServers = software.amazon.jsii.Kernel.get(this, "backendServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.RosVServerGroup.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.loadBalancerId = java.util.Objects.requireNonNull(builder.loadBalancerId, "loadBalancerId is required");
            this.vServerGroupName = java.util.Objects.requireNonNull(builder.vServerGroupName, "vServerGroupName is required");
            this.backendServers = builder.backendServers;
            this.tags = (java.util.List<com.aliyun.ros.cdk.slb.RosVServerGroup.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getLoadBalancerId() {
            return this.loadBalancerId;
        }

        @Override
        public final java.lang.Object getVServerGroupName() {
            return this.vServerGroupName;
        }

        @Override
        public final java.lang.Object getBackendServers() {
            return this.backendServers;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.slb.RosVServerGroup.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("loadBalancerId", om.valueToTree(this.getLoadBalancerId()));
            data.set("vServerGroupName", om.valueToTree(this.getVServerGroupName()));
            if (this.getBackendServers() != null) {
                data.set("backendServers", om.valueToTree(this.getBackendServers()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosVServerGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosVServerGroupProps.Jsii$Proxy that = (RosVServerGroupProps.Jsii$Proxy) o;

            if (!loadBalancerId.equals(that.loadBalancerId)) return false;
            if (!vServerGroupName.equals(that.vServerGroupName)) return false;
            if (this.backendServers != null ? !this.backendServers.equals(that.backendServers) : that.backendServers != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.loadBalancerId.hashCode();
            result = 31 * result + (this.vServerGroupName.hashCode());
            result = 31 * result + (this.backendServers != null ? this.backendServers.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
