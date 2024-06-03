package com.aliyun.ros.cdk.alb.datasource;

/**
 * Properties for defining a <code>LoadBalancers</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-alb-loadbalancers
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:49.561Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.alb.$Module.class, fqn = "@alicloud/ros-cdk-alb.datasource.LoadBalancersProps")
@software.amazon.jsii.Jsii.Proxy(LoadBalancersProps.Jsii$Proxy.class)
public interface LoadBalancersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property addressType: The address type of the load balancing instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAddressType() {
        return null;
    }

    /**
     * Property loadBalancerBussinessStatus: Service status of application load balancing.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerBussinessStatus() {
        return null;
    }

    /**
     * Property loadBalancerIds: IDs of the load balancer instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerIds() {
        return null;
    }

    /**
     * Property loadBalancerNames: Names of the load balancing instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerNames() {
        return null;
    }

    /**
     * Property loadBalancerStatus: The status of SLB.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerStatus() {
        return null;
    }

    /**
     * Property payType: Load balancing instance payment type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property tags: Tags of Alb.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.alb.datasource.RosLoadBalancers.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property vpcIds: VPC IDs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcIds() {
        return null;
    }

    /**
     * Property zoneId: ID of the ready-to-use zone of the load balancing instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link LoadBalancersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link LoadBalancersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<LoadBalancersProps> {
        java.lang.Object addressType;
        java.lang.Object loadBalancerBussinessStatus;
        java.lang.Object loadBalancerIds;
        java.lang.Object loadBalancerNames;
        java.lang.Object loadBalancerStatus;
        java.lang.Object payType;
        java.lang.Object resourceGroupId;
        java.util.List<com.aliyun.ros.cdk.alb.datasource.RosLoadBalancers.TagsProperty> tags;
        java.lang.Object vpcIds;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link LoadBalancersProps#getAddressType}
         * @param addressType Property addressType: The address type of the load balancing instance.
         * @return {@code this}
         */
        public Builder addressType(java.lang.String addressType) {
            this.addressType = addressType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getAddressType}
         * @param addressType Property addressType: The address type of the load balancing instance.
         * @return {@code this}
         */
        public Builder addressType(com.aliyun.ros.cdk.core.IResolvable addressType) {
            this.addressType = addressType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getLoadBalancerBussinessStatus}
         * @param loadBalancerBussinessStatus Property loadBalancerBussinessStatus: Service status of application load balancing.
         * @return {@code this}
         */
        public Builder loadBalancerBussinessStatus(java.lang.String loadBalancerBussinessStatus) {
            this.loadBalancerBussinessStatus = loadBalancerBussinessStatus;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getLoadBalancerBussinessStatus}
         * @param loadBalancerBussinessStatus Property loadBalancerBussinessStatus: Service status of application load balancing.
         * @return {@code this}
         */
        public Builder loadBalancerBussinessStatus(com.aliyun.ros.cdk.core.IResolvable loadBalancerBussinessStatus) {
            this.loadBalancerBussinessStatus = loadBalancerBussinessStatus;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getLoadBalancerIds}
         * @param loadBalancerIds Property loadBalancerIds: IDs of the load balancer instance.
         * @return {@code this}
         */
        public Builder loadBalancerIds(com.aliyun.ros.cdk.core.IResolvable loadBalancerIds) {
            this.loadBalancerIds = loadBalancerIds;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getLoadBalancerIds}
         * @param loadBalancerIds Property loadBalancerIds: IDs of the load balancer instance.
         * @return {@code this}
         */
        public Builder loadBalancerIds(java.util.List<? extends java.lang.Object> loadBalancerIds) {
            this.loadBalancerIds = loadBalancerIds;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getLoadBalancerNames}
         * @param loadBalancerNames Property loadBalancerNames: Names of the load balancing instance.
         * @return {@code this}
         */
        public Builder loadBalancerNames(com.aliyun.ros.cdk.core.IResolvable loadBalancerNames) {
            this.loadBalancerNames = loadBalancerNames;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getLoadBalancerNames}
         * @param loadBalancerNames Property loadBalancerNames: Names of the load balancing instance.
         * @return {@code this}
         */
        public Builder loadBalancerNames(java.util.List<? extends java.lang.Object> loadBalancerNames) {
            this.loadBalancerNames = loadBalancerNames;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getLoadBalancerStatus}
         * @param loadBalancerStatus Property loadBalancerStatus: The status of SLB.
         * @return {@code this}
         */
        public Builder loadBalancerStatus(java.lang.String loadBalancerStatus) {
            this.loadBalancerStatus = loadBalancerStatus;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getLoadBalancerStatus}
         * @param loadBalancerStatus Property loadBalancerStatus: The status of SLB.
         * @return {@code this}
         */
        public Builder loadBalancerStatus(com.aliyun.ros.cdk.core.IResolvable loadBalancerStatus) {
            this.loadBalancerStatus = loadBalancerStatus;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getPayType}
         * @param payType Property payType: Load balancing instance payment type.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getPayType}
         * @param payType Property payType: Load balancing instance payment type.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getTags}
         * @param tags Property tags: Tags of Alb.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.alb.datasource.RosLoadBalancers.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.alb.datasource.RosLoadBalancers.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getVpcIds}
         * @param vpcIds Property vpcIds: VPC IDs.
         * @return {@code this}
         */
        public Builder vpcIds(com.aliyun.ros.cdk.core.IResolvable vpcIds) {
            this.vpcIds = vpcIds;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getVpcIds}
         * @param vpcIds Property vpcIds: VPC IDs.
         * @return {@code this}
         */
        public Builder vpcIds(java.util.List<? extends java.lang.Object> vpcIds) {
            this.vpcIds = vpcIds;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getZoneId}
         * @param zoneId Property zoneId: ID of the ready-to-use zone of the load balancing instance.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link LoadBalancersProps#getZoneId}
         * @param zoneId Property zoneId: ID of the ready-to-use zone of the load balancing instance.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link LoadBalancersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public LoadBalancersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link LoadBalancersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LoadBalancersProps {
        private final java.lang.Object addressType;
        private final java.lang.Object loadBalancerBussinessStatus;
        private final java.lang.Object loadBalancerIds;
        private final java.lang.Object loadBalancerNames;
        private final java.lang.Object loadBalancerStatus;
        private final java.lang.Object payType;
        private final java.lang.Object resourceGroupId;
        private final java.util.List<com.aliyun.ros.cdk.alb.datasource.RosLoadBalancers.TagsProperty> tags;
        private final java.lang.Object vpcIds;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.addressType = software.amazon.jsii.Kernel.get(this, "addressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerBussinessStatus = software.amazon.jsii.Kernel.get(this, "loadBalancerBussinessStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerIds = software.amazon.jsii.Kernel.get(this, "loadBalancerIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerNames = software.amazon.jsii.Kernel.get(this, "loadBalancerNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerStatus = software.amazon.jsii.Kernel.get(this, "loadBalancerStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.alb.datasource.RosLoadBalancers.TagsProperty.class)));
            this.vpcIds = software.amazon.jsii.Kernel.get(this, "vpcIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.addressType = builder.addressType;
            this.loadBalancerBussinessStatus = builder.loadBalancerBussinessStatus;
            this.loadBalancerIds = builder.loadBalancerIds;
            this.loadBalancerNames = builder.loadBalancerNames;
            this.loadBalancerStatus = builder.loadBalancerStatus;
            this.payType = builder.payType;
            this.resourceGroupId = builder.resourceGroupId;
            this.tags = (java.util.List<com.aliyun.ros.cdk.alb.datasource.RosLoadBalancers.TagsProperty>)builder.tags;
            this.vpcIds = builder.vpcIds;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getAddressType() {
            return this.addressType;
        }

        @Override
        public final java.lang.Object getLoadBalancerBussinessStatus() {
            return this.loadBalancerBussinessStatus;
        }

        @Override
        public final java.lang.Object getLoadBalancerIds() {
            return this.loadBalancerIds;
        }

        @Override
        public final java.lang.Object getLoadBalancerNames() {
            return this.loadBalancerNames;
        }

        @Override
        public final java.lang.Object getLoadBalancerStatus() {
            return this.loadBalancerStatus;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.alb.datasource.RosLoadBalancers.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVpcIds() {
            return this.vpcIds;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAddressType() != null) {
                data.set("addressType", om.valueToTree(this.getAddressType()));
            }
            if (this.getLoadBalancerBussinessStatus() != null) {
                data.set("loadBalancerBussinessStatus", om.valueToTree(this.getLoadBalancerBussinessStatus()));
            }
            if (this.getLoadBalancerIds() != null) {
                data.set("loadBalancerIds", om.valueToTree(this.getLoadBalancerIds()));
            }
            if (this.getLoadBalancerNames() != null) {
                data.set("loadBalancerNames", om.valueToTree(this.getLoadBalancerNames()));
            }
            if (this.getLoadBalancerStatus() != null) {
                data.set("loadBalancerStatus", om.valueToTree(this.getLoadBalancerStatus()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVpcIds() != null) {
                data.set("vpcIds", om.valueToTree(this.getVpcIds()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-alb.datasource.LoadBalancersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            LoadBalancersProps.Jsii$Proxy that = (LoadBalancersProps.Jsii$Proxy) o;

            if (this.addressType != null ? !this.addressType.equals(that.addressType) : that.addressType != null) return false;
            if (this.loadBalancerBussinessStatus != null ? !this.loadBalancerBussinessStatus.equals(that.loadBalancerBussinessStatus) : that.loadBalancerBussinessStatus != null) return false;
            if (this.loadBalancerIds != null ? !this.loadBalancerIds.equals(that.loadBalancerIds) : that.loadBalancerIds != null) return false;
            if (this.loadBalancerNames != null ? !this.loadBalancerNames.equals(that.loadBalancerNames) : that.loadBalancerNames != null) return false;
            if (this.loadBalancerStatus != null ? !this.loadBalancerStatus.equals(that.loadBalancerStatus) : that.loadBalancerStatus != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vpcIds != null ? !this.vpcIds.equals(that.vpcIds) : that.vpcIds != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.addressType != null ? this.addressType.hashCode() : 0;
            result = 31 * result + (this.loadBalancerBussinessStatus != null ? this.loadBalancerBussinessStatus.hashCode() : 0);
            result = 31 * result + (this.loadBalancerIds != null ? this.loadBalancerIds.hashCode() : 0);
            result = 31 * result + (this.loadBalancerNames != null ? this.loadBalancerNames.hashCode() : 0);
            result = 31 * result + (this.loadBalancerStatus != null ? this.loadBalancerStatus.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vpcIds != null ? this.vpcIds.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
