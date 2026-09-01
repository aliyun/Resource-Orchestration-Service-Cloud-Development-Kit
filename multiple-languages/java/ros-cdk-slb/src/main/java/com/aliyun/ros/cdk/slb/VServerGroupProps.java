package com.aliyun.ros.cdk.slb;

/**
 * Properties for defining a <code>VServerGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T11:44:47.166Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.VServerGroupProps")
@software.amazon.jsii.Jsii.Proxy(VServerGroupProps.Jsii$Proxy.class)
public interface VServerGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property loadBalancerId: The id of load balancer.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId();

    /**
     * Property vServerGroupName: The name of the vServer group.
     * <p>
     * The name must be 1 to 80 characters in length, and can contain letters, digits,
     * hyphens (-), forward slashes (/), periods (.),and underscores (_).
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVServerGroupName();

    /**
     * Property backendServers: The backend servers that you want to add.
     * <p>
     * Configure the following parameters:
     * <p>
     * <ul>
     * <li>ServerId: required. The ID of the backend server. Specify the ID in a string.
     * You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic
     * network interface (ENI), or an elastic container instance. If you set ServerId to
     * the ID of an ENI or an elastic container instance, you must configure the Type
     * parameter.</li>
     * <li>Weight: the weight of the backend server. Valid values: 0 to 100. Default
     * value: 100. If you set the weight of a backend server to 0, no requests are
     * forwarded to the backend server.</li>
     * <li>Description: optional. The description of the backend server. Specify the
     * description in a string. The description must be 1 to 80 characters in length,
     * and can contain letters, digits, hyphens (-), forward slashes (/), periods (.),
     * and underscores (_).</li>
     * <li>Type: the type of the backend server. Valid values:</li>
     * <li>ecs (default): ECS instance</li>
     * <li>eni: ENI.</li>
     * <li>eni: elastic container instance.</li>
     * </ul>
     * <p>
     * <blockquote>
     * <p>
     * You can specify ENIs and elastic container instances as backend servers only
     * for high-performance SLB instances.
     * <p>
     * </blockquote>
     * <p>
     * <ul>
     * <li>ServerIp: The IP address of the ECS instance or ENI.</li>
     * <li>Port: the backend port.
     * Examples:</li>
     * <li>Add an ECS instance:
     * <code>[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]</code></li>
     * <li>Add an ENI:
     * <code>[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168..", "Port":"80","Description":"test-112" }]</code></li>
     * <li>Add an ENI with multiple IP addresses:
     * <code>[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168..", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166..", "Port":"80","Description":"test-113" }]</code></li>
     * <li>Add an elastic container instance:
     * <code>[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "192.168..", "Port":"80","Description":"test-114" }]</code></li>
     * </ul>
     * <p>
     * <blockquote>
     * <p>
     * You can add only running backend servers to SLB instances. You can specify at
     * most 20 backend servers.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackendServers() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.slb.RosVServerGroup.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VServerGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VServerGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VServerGroupProps> {
        java.lang.Object loadBalancerId;
        java.lang.Object vServerGroupName;
        java.lang.Object backendServers;
        java.util.List<com.aliyun.ros.cdk.slb.RosVServerGroup.TagsProperty> tags;

        /**
         * Sets the value of {@link VServerGroupProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The id of load balancer. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(java.lang.String loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupProps#getLoadBalancerId}
         * @param loadBalancerId Property loadBalancerId: The id of load balancer. This parameter is required.
         * @return {@code this}
         */
        public Builder loadBalancerId(com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.loadBalancerId = loadBalancerId;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupProps#getVServerGroupName}
         * @param vServerGroupName Property vServerGroupName: The name of the vServer group. This parameter is required.
         *                         The name must be 1 to 80 characters in length, and can contain letters, digits,
         *                         hyphens (-), forward slashes (/), periods (.),and underscores (_).
         * @return {@code this}
         */
        public Builder vServerGroupName(java.lang.String vServerGroupName) {
            this.vServerGroupName = vServerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupProps#getVServerGroupName}
         * @param vServerGroupName Property vServerGroupName: The name of the vServer group. This parameter is required.
         *                         The name must be 1 to 80 characters in length, and can contain letters, digits,
         *                         hyphens (-), forward slashes (/), periods (.),and underscores (_).
         * @return {@code this}
         */
        public Builder vServerGroupName(com.aliyun.ros.cdk.core.IResolvable vServerGroupName) {
            this.vServerGroupName = vServerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupProps#getBackendServers}
         * @param backendServers Property backendServers: The backend servers that you want to add.
         *                       Configure the following parameters:
         *                       <p>
         *                       <ul>
         *                       <li>ServerId: required. The ID of the backend server. Specify the ID in a string.
         *                       You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic
         *                       network interface (ENI), or an elastic container instance. If you set ServerId to
         *                       the ID of an ENI or an elastic container instance, you must configure the Type
         *                       parameter.</li>
         *                       <li>Weight: the weight of the backend server. Valid values: 0 to 100. Default
         *                       value: 100. If you set the weight of a backend server to 0, no requests are
         *                       forwarded to the backend server.</li>
         *                       <li>Description: optional. The description of the backend server. Specify the
         *                       description in a string. The description must be 1 to 80 characters in length,
         *                       and can contain letters, digits, hyphens (-), forward slashes (/), periods (.),
         *                       and underscores (_).</li>
         *                       <li>Type: the type of the backend server. Valid values:</li>
         *                       <li>ecs (default): ECS instance</li>
         *                       <li>eni: ENI.</li>
         *                       <li>eni: elastic container instance.</li>
         *                       </ul>
         *                       <p>
         *                       <blockquote>
         *                       <p>
         *                       You can specify ENIs and elastic container instances as backend servers only
         *                       for high-performance SLB instances.
         *                       <p>
         *                       </blockquote>
         *                       <p>
         *                       <ul>
         *                       <li>ServerIp: The IP address of the ECS instance or ENI.</li>
         *                       <li>Port: the backend port.
         *                       Examples:</li>
         *                       <li>Add an ECS instance:
         *                       <code>[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]</code></li>
         *                       <li>Add an ENI:
         *                       <code>[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168..", "Port":"80","Description":"test-112" }]</code></li>
         *                       <li>Add an ENI with multiple IP addresses:
         *                       <code>[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168..", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166..", "Port":"80","Description":"test-113" }]</code></li>
         *                       <li>Add an elastic container instance:
         *                       <code>[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "192.168..", "Port":"80","Description":"test-114" }]</code></li>
         *                       </ul>
         *                       <p>
         *                       <blockquote>
         *                       <p>
         *                       You can add only running backend servers to SLB instances. You can specify at
         *                       most 20 backend servers.
         *                       <p>
         *                       </blockquote>
         * @return {@code this}
         */
        public Builder backendServers(com.aliyun.ros.cdk.core.IResolvable backendServers) {
            this.backendServers = backendServers;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupProps#getBackendServers}
         * @param backendServers Property backendServers: The backend servers that you want to add.
         *                       Configure the following parameters:
         *                       <p>
         *                       <ul>
         *                       <li>ServerId: required. The ID of the backend server. Specify the ID in a string.
         *                       You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic
         *                       network interface (ENI), or an elastic container instance. If you set ServerId to
         *                       the ID of an ENI or an elastic container instance, you must configure the Type
         *                       parameter.</li>
         *                       <li>Weight: the weight of the backend server. Valid values: 0 to 100. Default
         *                       value: 100. If you set the weight of a backend server to 0, no requests are
         *                       forwarded to the backend server.</li>
         *                       <li>Description: optional. The description of the backend server. Specify the
         *                       description in a string. The description must be 1 to 80 characters in length,
         *                       and can contain letters, digits, hyphens (-), forward slashes (/), periods (.),
         *                       and underscores (_).</li>
         *                       <li>Type: the type of the backend server. Valid values:</li>
         *                       <li>ecs (default): ECS instance</li>
         *                       <li>eni: ENI.</li>
         *                       <li>eni: elastic container instance.</li>
         *                       </ul>
         *                       <p>
         *                       <blockquote>
         *                       <p>
         *                       You can specify ENIs and elastic container instances as backend servers only
         *                       for high-performance SLB instances.
         *                       <p>
         *                       </blockquote>
         *                       <p>
         *                       <ul>
         *                       <li>ServerIp: The IP address of the ECS instance or ENI.</li>
         *                       <li>Port: the backend port.
         *                       Examples:</li>
         *                       <li>Add an ECS instance:
         *                       <code>[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]</code></li>
         *                       <li>Add an ENI:
         *                       <code>[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168..", "Port":"80","Description":"test-112" }]</code></li>
         *                       <li>Add an ENI with multiple IP addresses:
         *                       <code>[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168..", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166..", "Port":"80","Description":"test-113" }]</code></li>
         *                       <li>Add an elastic container instance:
         *                       <code>[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "192.168..", "Port":"80","Description":"test-114" }]</code></li>
         *                       </ul>
         *                       <p>
         *                       <blockquote>
         *                       <p>
         *                       You can add only running backend servers to SLB instances. You can specify at
         *                       most 20 backend servers.
         *                       <p>
         *                       </blockquote>
         * @return {@code this}
         */
        public Builder backendServers(java.util.List<? extends java.lang.Object> backendServers) {
            this.backendServers = backendServers;
            return this;
        }

        /**
         * Sets the value of {@link VServerGroupProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.slb.RosVServerGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.slb.RosVServerGroup.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VServerGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VServerGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VServerGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VServerGroupProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.VServerGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VServerGroupProps.Jsii$Proxy that = (VServerGroupProps.Jsii$Proxy) o;

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
