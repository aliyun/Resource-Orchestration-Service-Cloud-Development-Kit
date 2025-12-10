package com.aliyun.ros.cdk.gwlb;

/**
 * Properties for defining a <code>LoadBalancer</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-loadbalancer
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:57.522Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gwlb.$Module.class, fqn = "@alicloud/ros-cdk-gwlb.LoadBalancerProps")
@software.amazon.jsii.Jsii.Proxy(LoadBalancerProps.Jsii$Proxy.class)
public interface LoadBalancerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vpcId: The ID of the VPC which the Gateway Load Balancer instance belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property zoneMappings: The List of zones and vSwitches mapped.
     * <p>
     * You must add at least one zone and a maximum of 20 zones. If the current region supports two or more zones, we recommend that you add two or more zones.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneMappings();

    /**
     * Property addressIpVersion: The protocol version.
     * <p>
     * Value:
     * <p>
     * <ul>
     * <li>Ipv4: Ipv4 type.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressIpVersion() {
        return null;
    }

    /**
     * Property loadBalancerName: The name of the Gateway Load Balancer instance.
     * <p>
     * It must be 2 to 128 English or Chinese characters in length. It must start with a letter or a Chinese character and can contain digits, half-width periods (.), underscores (_), and dashes (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags of load balancer.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.gwlb.RosLoadBalancer.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LoadBalancerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LoadBalancerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LoadBalancerProps> {
        java.lang.Object vpcId;
        java.lang.Object zoneMappings;
        java.lang.Object addressIpVersion;
        java.lang.Object loadBalancerName;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.gwlb.RosLoadBalancer.TagsProperty> tags;

        /**
         * Sets the value of {@link LoadBalancerProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC which the Gateway Load Balancer instance belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC which the Gateway Load Balancer instance belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getZoneMappings}
         * @param zoneMappings Property zoneMappings: The List of zones and vSwitches mapped. This parameter is required.
         *                     You must add at least one zone and a maximum of 20 zones. If the current region supports two or more zones, we recommend that you add two or more zones.
         * @return {@code this}
         */
        public Builder zoneMappings(com.aliyun.ros.cdk.core.IResolvable zoneMappings) {
            this.zoneMappings = zoneMappings;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getZoneMappings}
         * @param zoneMappings Property zoneMappings: The List of zones and vSwitches mapped. This parameter is required.
         *                     You must add at least one zone and a maximum of 20 zones. If the current region supports two or more zones, we recommend that you add two or more zones.
         * @return {@code this}
         */
        public Builder zoneMappings(java.util.List<? extends java.lang.Object> zoneMappings) {
            this.zoneMappings = zoneMappings;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getAddressIpVersion}
         * @param addressIpVersion Property addressIpVersion: The protocol version.
         *                         Value:
         *                         <p>
         *                         <ul>
         *                         <li>Ipv4: Ipv4 type.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder addressIpVersion(java.lang.String addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getAddressIpVersion}
         * @param addressIpVersion Property addressIpVersion: The protocol version.
         *                         Value:
         *                         <p>
         *                         <ul>
         *                         <li>Ipv4: Ipv4 type.</li>
         *                         </ul>
         * @return {@code this}
         */
        public Builder addressIpVersion(com.aliyun.ros.cdk.core.IResolvable addressIpVersion) {
            this.addressIpVersion = addressIpVersion;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerName}
         * @param loadBalancerName Property loadBalancerName: The name of the Gateway Load Balancer instance.
         *                         It must be 2 to 128 English or Chinese characters in length. It must start with a letter or a Chinese character and can contain digits, half-width periods (.), underscores (_), and dashes (-).
         * @return {@code this}
         */
        public Builder loadBalancerName(java.lang.String loadBalancerName) {
            this.loadBalancerName = loadBalancerName;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getLoadBalancerName}
         * @param loadBalancerName Property loadBalancerName: The name of the Gateway Load Balancer instance.
         *                         It must be 2 to 128 English or Chinese characters in length. It must start with a letter or a Chinese character and can contain digits, half-width periods (.), underscores (_), and dashes (-).
         * @return {@code this}
         */
        public Builder loadBalancerName(com.aliyun.ros.cdk.core.IResolvable loadBalancerName) {
            this.loadBalancerName = loadBalancerName;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancerProps#getTags}
         * @param tags Property tags: Tags of load balancer.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.gwlb.RosLoadBalancer.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.gwlb.RosLoadBalancer.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LoadBalancerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LoadBalancerProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link LoadBalancerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LoadBalancerProps {
        private final java.lang.Object vpcId;
        private final java.lang.Object zoneMappings;
        private final java.lang.Object addressIpVersion;
        private final java.lang.Object loadBalancerName;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.gwlb.RosLoadBalancer.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneMappings = software.amazon.jsii.Kernel.get(this, "zoneMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.addressIpVersion = software.amazon.jsii.Kernel.get(this, "addressIpVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerName = software.amazon.jsii.Kernel.get(this, "loadBalancerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gwlb.RosLoadBalancer.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.zoneMappings = java.util.Objects.requireNonNull(builder.zoneMappings, "zoneMappings is required");
            this.addressIpVersion = builder.addressIpVersion;
            this.loadBalancerName = builder.loadBalancerName;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.gwlb.RosLoadBalancer.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getZoneMappings() {
            return this.zoneMappings;
        }

        @Override
        public final java.lang.Object getAddressIpVersion() {
            return this.addressIpVersion;
        }

        @Override
        public final java.lang.Object getLoadBalancerName() {
            return this.loadBalancerName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.gwlb.RosLoadBalancer.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("zoneMappings", om.valueToTree(this.getZoneMappings()));
            if (this.getAddressIpVersion() != null) {
                data.set("addressIpVersion", om.valueToTree(this.getAddressIpVersion()));
            }
            if (this.getLoadBalancerName() != null) {
                data.set("loadBalancerName", om.valueToTree(this.getLoadBalancerName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gwlb.LoadBalancerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LoadBalancerProps.Jsii$Proxy that = (LoadBalancerProps.Jsii$Proxy) o;

            if (!vpcId.equals(that.vpcId)) return false;
            if (!zoneMappings.equals(that.zoneMappings)) return false;
            if (this.addressIpVersion != null ? !this.addressIpVersion.equals(that.addressIpVersion) : that.addressIpVersion != null) return false;
            if (this.loadBalancerName != null ? !this.loadBalancerName.equals(that.loadBalancerName) : that.loadBalancerName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vpcId.hashCode();
            result = 31 * result + (this.zoneMappings.hashCode());
            result = 31 * result + (this.addressIpVersion != null ? this.addressIpVersion.hashCode() : 0);
            result = 31 * result + (this.loadBalancerName != null ? this.loadBalancerName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
