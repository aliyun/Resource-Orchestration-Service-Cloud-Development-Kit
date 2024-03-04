package com.aliyun.ros.cdk.privatelink;

/**
 * Properties for defining a <code>VpcEndpoint</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpoint
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:53.879Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.VpcEndpointProps")
@software.amazon.jsii.Jsii.Proxy(VpcEndpointProps.Jsii$Proxy.class)
public interface VpcEndpointProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property securityGroupId: The security group associated with the endpoint network interface.
     * <p>
     * The security group can control the data communication from the VPC to the endpoint network interface.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId();

    /**
     * Property vpcId: The VPC to which the endpoint belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property endpointDescription: The description of the endpoint.
     * <p>
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointDescription() {
        return null;
    }

    /**
     * Property endpointName: The name of the endpoint.
     * <p>
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). The name must start with a letter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointName() {
        return null;
    }

    /**
     * Property endpointType: Endpoint type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEndpointType() {
        return null;
    }

    /**
     * Property protectedEnabled: Specifies whether to enable user authentication.
     * <p>
     * This parameter is available in Security Token Service (STS) mode. Valid values:
     * true: yes After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
     * false (default): no
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProtectedEnabled() {
        return null;
    }

    /**
     * Property serviceId: The endpoint service that is associated with the endpoint.
     * <p>
     * One of ServiceId and ServiceName is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceId() {
        return null;
    }

    /**
     * Property serviceName: The name of the endpoint service that is associated with the endpoint.
     * <p>
     * One of ServiceId and ServiceName is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceName() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property zone:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZone() {
        return null;
    }

    /**
     * Property zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone.
     * <p>
     * Set the value to 1.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZonePrivateIpAddressCount() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpcEndpointProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcEndpointProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcEndpointProps> {
        java.lang.Object securityGroupId;
        java.lang.Object vpcId;
        java.lang.Object endpointDescription;
        java.lang.Object endpointName;
        java.lang.Object endpointType;
        java.lang.Object protectedEnabled;
        java.lang.Object serviceId;
        java.lang.Object serviceName;
        java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.TagsProperty> tags;
        java.lang.Object zone;
        java.lang.Object zonePrivateIpAddressCount;

        /**
         * Sets the value of {@link VpcEndpointProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The security group associated with the endpoint network interface. This parameter is required.
         *                        The security group can control the data communication from the VPC to the endpoint network interface.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The security group associated with the endpoint network interface. This parameter is required.
         *                        The security group can control the data communication from the VPC to the endpoint network interface.
         * @return {@code this}
         */
        public Builder securityGroupId(java.util.List<? extends java.lang.Object> securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getVpcId}
         * @param vpcId Property vpcId: The VPC to which the endpoint belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getVpcId}
         * @param vpcId Property vpcId: The VPC to which the endpoint belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getEndpointDescription}
         * @param endpointDescription Property endpointDescription: The description of the endpoint.
         *                            The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder endpointDescription(java.lang.String endpointDescription) {
            this.endpointDescription = endpointDescription;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getEndpointDescription}
         * @param endpointDescription Property endpointDescription: The description of the endpoint.
         *                            The description must be 2 to 256 characters in length and cannot start with http:// or https://.
         * @return {@code this}
         */
        public Builder endpointDescription(com.aliyun.ros.cdk.core.IResolvable endpointDescription) {
            this.endpointDescription = endpointDescription;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getEndpointName}
         * @param endpointName Property endpointName: The name of the endpoint.
         *                     The name must be 2 to 128 characters in length and can contain digits, underscores
         *                     (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder endpointName(java.lang.String endpointName) {
            this.endpointName = endpointName;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getEndpointName}
         * @param endpointName Property endpointName: The name of the endpoint.
         *                     The name must be 2 to 128 characters in length and can contain digits, underscores
         *                     (_), and hyphens (-). The name must start with a letter.
         * @return {@code this}
         */
        public Builder endpointName(com.aliyun.ros.cdk.core.IResolvable endpointName) {
            this.endpointName = endpointName;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getEndpointType}
         * @param endpointType Property endpointType: Endpoint type.
         * @return {@code this}
         */
        public Builder endpointType(java.lang.String endpointType) {
            this.endpointType = endpointType;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getEndpointType}
         * @param endpointType Property endpointType: Endpoint type.
         * @return {@code this}
         */
        public Builder endpointType(com.aliyun.ros.cdk.core.IResolvable endpointType) {
            this.endpointType = endpointType;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getProtectedEnabled}
         * @param protectedEnabled Property protectedEnabled: Specifies whether to enable user authentication.
         *                         This parameter is available in Security Token Service (STS) mode. Valid values:
         *                         true: yes After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
         *                         false (default): no
         * @return {@code this}
         */
        public Builder protectedEnabled(java.lang.Boolean protectedEnabled) {
            this.protectedEnabled = protectedEnabled;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getProtectedEnabled}
         * @param protectedEnabled Property protectedEnabled: Specifies whether to enable user authentication.
         *                         This parameter is available in Security Token Service (STS) mode. Valid values:
         *                         true: yes After user authentication is enabled, only the user who creates the endpoint can modify or delete the endpoint in STS mode.
         *                         false (default): no
         * @return {@code this}
         */
        public Builder protectedEnabled(com.aliyun.ros.cdk.core.IResolvable protectedEnabled) {
            this.protectedEnabled = protectedEnabled;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getServiceId}
         * @param serviceId Property serviceId: The endpoint service that is associated with the endpoint.
         *                  One of ServiceId and ServiceName is required.
         * @return {@code this}
         */
        public Builder serviceId(java.lang.String serviceId) {
            this.serviceId = serviceId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getServiceId}
         * @param serviceId Property serviceId: The endpoint service that is associated with the endpoint.
         *                  One of ServiceId and ServiceName is required.
         * @return {@code this}
         */
        public Builder serviceId(com.aliyun.ros.cdk.core.IResolvable serviceId) {
            this.serviceId = serviceId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getServiceName}
         * @param serviceName Property serviceName: The name of the endpoint service that is associated with the endpoint.
         *                    One of ServiceId and ServiceName is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getServiceName}
         * @param serviceName Property serviceName: The name of the endpoint service that is associated with the endpoint.
         *                    One of ServiceId and ServiceName is required.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getZone}
         * @param zone Property zone:.
         * @return {@code this}
         */
        public Builder zone(com.aliyun.ros.cdk.core.IResolvable zone) {
            this.zone = zone;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getZone}
         * @param zone Property zone:.
         * @return {@code this}
         */
        public Builder zone(java.util.List<? extends java.lang.Object> zone) {
            this.zone = zone;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getZonePrivateIpAddressCount}
         * @param zonePrivateIpAddressCount Property zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone.
         *                                  Set the value to 1.
         * @return {@code this}
         */
        public Builder zonePrivateIpAddressCount(java.lang.Number zonePrivateIpAddressCount) {
            this.zonePrivateIpAddressCount = zonePrivateIpAddressCount;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointProps#getZonePrivateIpAddressCount}
         * @param zonePrivateIpAddressCount Property zonePrivateIpAddressCount: The number of private IP addresses that can be used by an elastic network interface (ENI) in each zone.
         *                                  Set the value to 1.
         * @return {@code this}
         */
        public Builder zonePrivateIpAddressCount(com.aliyun.ros.cdk.core.IResolvable zonePrivateIpAddressCount) {
            this.zonePrivateIpAddressCount = zonePrivateIpAddressCount;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcEndpointProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcEndpointProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpcEndpointProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcEndpointProps {
        private final java.lang.Object securityGroupId;
        private final java.lang.Object vpcId;
        private final java.lang.Object endpointDescription;
        private final java.lang.Object endpointName;
        private final java.lang.Object endpointType;
        private final java.lang.Object protectedEnabled;
        private final java.lang.Object serviceId;
        private final java.lang.Object serviceName;
        private final java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.TagsProperty> tags;
        private final java.lang.Object zone;
        private final java.lang.Object zonePrivateIpAddressCount;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointDescription = software.amazon.jsii.Kernel.get(this, "endpointDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointName = software.amazon.jsii.Kernel.get(this, "endpointName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.endpointType = software.amazon.jsii.Kernel.get(this, "endpointType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protectedEnabled = software.amazon.jsii.Kernel.get(this, "protectedEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceId = software.amazon.jsii.Kernel.get(this, "serviceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.TagsProperty.class)));
            this.zone = software.amazon.jsii.Kernel.get(this, "zone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zonePrivateIpAddressCount = software.amazon.jsii.Kernel.get(this, "zonePrivateIpAddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.securityGroupId = java.util.Objects.requireNonNull(builder.securityGroupId, "securityGroupId is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.endpointDescription = builder.endpointDescription;
            this.endpointName = builder.endpointName;
            this.endpointType = builder.endpointType;
            this.protectedEnabled = builder.protectedEnabled;
            this.serviceId = builder.serviceId;
            this.serviceName = builder.serviceName;
            this.tags = (java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.TagsProperty>)builder.tags;
            this.zone = builder.zone;
            this.zonePrivateIpAddressCount = builder.zonePrivateIpAddressCount;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getEndpointDescription() {
            return this.endpointDescription;
        }

        @Override
        public final java.lang.Object getEndpointName() {
            return this.endpointName;
        }

        @Override
        public final java.lang.Object getEndpointType() {
            return this.endpointType;
        }

        @Override
        public final java.lang.Object getProtectedEnabled() {
            return this.protectedEnabled;
        }

        @Override
        public final java.lang.Object getServiceId() {
            return this.serviceId;
        }

        @Override
        public final java.lang.Object getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpoint.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getZone() {
            return this.zone;
        }

        @Override
        public final java.lang.Object getZonePrivateIpAddressCount() {
            return this.zonePrivateIpAddressCount;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getEndpointDescription() != null) {
                data.set("endpointDescription", om.valueToTree(this.getEndpointDescription()));
            }
            if (this.getEndpointName() != null) {
                data.set("endpointName", om.valueToTree(this.getEndpointName()));
            }
            if (this.getEndpointType() != null) {
                data.set("endpointType", om.valueToTree(this.getEndpointType()));
            }
            if (this.getProtectedEnabled() != null) {
                data.set("protectedEnabled", om.valueToTree(this.getProtectedEnabled()));
            }
            if (this.getServiceId() != null) {
                data.set("serviceId", om.valueToTree(this.getServiceId()));
            }
            if (this.getServiceName() != null) {
                data.set("serviceName", om.valueToTree(this.getServiceName()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getZone() != null) {
                data.set("zone", om.valueToTree(this.getZone()));
            }
            if (this.getZonePrivateIpAddressCount() != null) {
                data.set("zonePrivateIpAddressCount", om.valueToTree(this.getZonePrivateIpAddressCount()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-privatelink.VpcEndpointProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcEndpointProps.Jsii$Proxy that = (VpcEndpointProps.Jsii$Proxy) o;

            if (!securityGroupId.equals(that.securityGroupId)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.endpointDescription != null ? !this.endpointDescription.equals(that.endpointDescription) : that.endpointDescription != null) return false;
            if (this.endpointName != null ? !this.endpointName.equals(that.endpointName) : that.endpointName != null) return false;
            if (this.endpointType != null ? !this.endpointType.equals(that.endpointType) : that.endpointType != null) return false;
            if (this.protectedEnabled != null ? !this.protectedEnabled.equals(that.protectedEnabled) : that.protectedEnabled != null) return false;
            if (this.serviceId != null ? !this.serviceId.equals(that.serviceId) : that.serviceId != null) return false;
            if (this.serviceName != null ? !this.serviceName.equals(that.serviceName) : that.serviceName != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.zone != null ? !this.zone.equals(that.zone) : that.zone != null) return false;
            return this.zonePrivateIpAddressCount != null ? this.zonePrivateIpAddressCount.equals(that.zonePrivateIpAddressCount) : that.zonePrivateIpAddressCount == null;
        }

        @Override
        public final int hashCode() {
            int result = this.securityGroupId.hashCode();
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.endpointDescription != null ? this.endpointDescription.hashCode() : 0);
            result = 31 * result + (this.endpointName != null ? this.endpointName.hashCode() : 0);
            result = 31 * result + (this.endpointType != null ? this.endpointType.hashCode() : 0);
            result = 31 * result + (this.protectedEnabled != null ? this.protectedEnabled.hashCode() : 0);
            result = 31 * result + (this.serviceId != null ? this.serviceId.hashCode() : 0);
            result = 31 * result + (this.serviceName != null ? this.serviceName.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.zone != null ? this.zone.hashCode() : 0);
            result = 31 * result + (this.zonePrivateIpAddressCount != null ? this.zonePrivateIpAddressCount.hashCode() : 0);
            return result;
        }
    }
}
