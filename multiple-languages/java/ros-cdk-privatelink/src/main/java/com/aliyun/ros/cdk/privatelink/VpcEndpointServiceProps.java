package com.aliyun.ros.cdk.privatelink;

/**
 * Properties for defining a <code>VpcEndpointService</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-privatelink-vpcendpointservice
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:08.585Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.privatelink.$Module.class, fqn = "@alicloud/ros-cdk-privatelink.VpcEndpointServiceProps")
@software.amazon.jsii.Jsii.Proxy(VpcEndpointServiceProps.Jsii$Proxy.class)
public interface VpcEndpointServiceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests.
     * <p>
     * Valid values:
     * true: automatically accepts endpoint connection requests.
     * false: does not automatically accept endpoint connection requests.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoAcceptEnabled() {
        return null;
    }

    /**
     * Property connectBandwidth: The default maximum bandwidth of the endpoint connection.
     * <p>
     * Valid values: 100 to 1024. Unit: Mbit/s.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectBandwidth() {
        return null;
    }

    /**
     * Property deletionForce: Specifies whether to delete the endpoint service even if it has endpoint connections.
     * <p>
     * <ul>
     * <li>True</li>
     * <li>False (default)</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     * Property payer: The payer of the endpoint service.
     * <p>
     * Valid values:
     * Endpoint: the service consumer.
     * EndpointService: the service provider.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayer() {
        return null;
    }

    /**
     * Property resource:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResource() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property serviceDescription: The description for the endpoint service.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceDescription() {
        return null;
    }

    /**
     * Property serviceResourceType: Service resource type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServiceResourceType() {
        return null;
    }

    /**
     * Property tags: Tags to attach to instance.
     * <p>
     * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property user: Account IDs to the whitelist of an endpoint service.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUser() {
        return null;
    }

    /**
     * Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
     * <p>
     * true: yes.
     * false (default): no
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneAffinityEnabled() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VpcEndpointServiceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VpcEndpointServiceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VpcEndpointServiceProps> {
        java.lang.Object autoAcceptEnabled;
        java.lang.Object connectBandwidth;
        java.lang.Object deletionForce;
        java.lang.Object payer;
        java.lang.Object resource;
        java.lang.Object resourceGroupId;
        java.lang.Object serviceDescription;
        java.lang.Object serviceResourceType;
        java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty> tags;
        java.lang.Object user;
        java.lang.Object zoneAffinityEnabled;

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getAutoAcceptEnabled}
         * @param autoAcceptEnabled Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests.
         *                          Valid values:
         *                          true: automatically accepts endpoint connection requests.
         *                          false: does not automatically accept endpoint connection requests.
         * @return {@code this}
         */
        public Builder autoAcceptEnabled(java.lang.Boolean autoAcceptEnabled) {
            this.autoAcceptEnabled = autoAcceptEnabled;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getAutoAcceptEnabled}
         * @param autoAcceptEnabled Property autoAcceptEnabled: Specifies whether to automatically accept endpoint connection requests.
         *                          Valid values:
         *                          true: automatically accepts endpoint connection requests.
         *                          false: does not automatically accept endpoint connection requests.
         * @return {@code this}
         */
        public Builder autoAcceptEnabled(com.aliyun.ros.cdk.core.IResolvable autoAcceptEnabled) {
            this.autoAcceptEnabled = autoAcceptEnabled;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getConnectBandwidth}
         * @param connectBandwidth Property connectBandwidth: The default maximum bandwidth of the endpoint connection.
         *                         Valid values: 100 to 1024. Unit: Mbit/s.
         * @return {@code this}
         */
        public Builder connectBandwidth(java.lang.Number connectBandwidth) {
            this.connectBandwidth = connectBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getConnectBandwidth}
         * @param connectBandwidth Property connectBandwidth: The default maximum bandwidth of the endpoint connection.
         *                         Valid values: 100 to 1024. Unit: Mbit/s.
         * @return {@code this}
         */
        public Builder connectBandwidth(com.aliyun.ros.cdk.core.IResolvable connectBandwidth) {
            this.connectBandwidth = connectBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Specifies whether to delete the endpoint service even if it has endpoint connections.
         *                      <ul>
         *                      <li>True</li>
         *                      <li>False (default)</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Specifies whether to delete the endpoint service even if it has endpoint connections.
         *                      <ul>
         *                      <li>True</li>
         *                      <li>False (default)</li>
         *                      </ul>
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getPayer}
         * @param payer Property payer: The payer of the endpoint service.
         *              Valid values:
         *              Endpoint: the service consumer.
         *              EndpointService: the service provider.
         * @return {@code this}
         */
        public Builder payer(java.lang.String payer) {
            this.payer = payer;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getPayer}
         * @param payer Property payer: The payer of the endpoint service.
         *              Valid values:
         *              Endpoint: the service consumer.
         *              EndpointService: the service provider.
         * @return {@code this}
         */
        public Builder payer(com.aliyun.ros.cdk.core.IResolvable payer) {
            this.payer = payer;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getResource}
         * @param resource Property resource:.
         * @return {@code this}
         */
        public Builder resource(com.aliyun.ros.cdk.core.IResolvable resource) {
            this.resource = resource;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getResource}
         * @param resource Property resource:.
         * @return {@code this}
         */
        public Builder resource(java.util.List<? extends java.lang.Object> resource) {
            this.resource = resource;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getServiceDescription}
         * @param serviceDescription Property serviceDescription: The description for the endpoint service.
         * @return {@code this}
         */
        public Builder serviceDescription(java.lang.String serviceDescription) {
            this.serviceDescription = serviceDescription;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getServiceDescription}
         * @param serviceDescription Property serviceDescription: The description for the endpoint service.
         * @return {@code this}
         */
        public Builder serviceDescription(com.aliyun.ros.cdk.core.IResolvable serviceDescription) {
            this.serviceDescription = serviceDescription;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getServiceResourceType}
         * @param serviceResourceType Property serviceResourceType: Service resource type.
         * @return {@code this}
         */
        public Builder serviceResourceType(java.lang.String serviceResourceType) {
            this.serviceResourceType = serviceResourceType;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getServiceResourceType}
         * @param serviceResourceType Property serviceResourceType: Service resource type.
         * @return {@code this}
         */
        public Builder serviceResourceType(com.aliyun.ros.cdk.core.IResolvable serviceResourceType) {
            this.serviceResourceType = serviceResourceType;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getTags}
         * @param tags Property tags: Tags to attach to instance.
         *             Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getUser}
         * @param user Property user: Account IDs to the whitelist of an endpoint service.
         * @return {@code this}
         */
        public Builder user(com.aliyun.ros.cdk.core.IResolvable user) {
            this.user = user;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getUser}
         * @param user Property user: Account IDs to the whitelist of an endpoint service.
         * @return {@code this}
         */
        public Builder user(java.util.List<? extends java.lang.Object> user) {
            this.user = user;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getZoneAffinityEnabled}
         * @param zoneAffinityEnabled Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
         *                            true: yes.
         *                            false (default): no
         * @return {@code this}
         */
        public Builder zoneAffinityEnabled(java.lang.Boolean zoneAffinityEnabled) {
            this.zoneAffinityEnabled = zoneAffinityEnabled;
            return this;
        }

        /**
         * Sets the value of {@link VpcEndpointServiceProps#getZoneAffinityEnabled}
         * @param zoneAffinityEnabled Property zoneAffinityEnabled: Specifies whether to resolve domain names to IP addresses in the nearest zone.
         *                            true: yes.
         *                            false (default): no
         * @return {@code this}
         */
        public Builder zoneAffinityEnabled(com.aliyun.ros.cdk.core.IResolvable zoneAffinityEnabled) {
            this.zoneAffinityEnabled = zoneAffinityEnabled;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VpcEndpointServiceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VpcEndpointServiceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VpcEndpointServiceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VpcEndpointServiceProps {
        private final java.lang.Object autoAcceptEnabled;
        private final java.lang.Object connectBandwidth;
        private final java.lang.Object deletionForce;
        private final java.lang.Object payer;
        private final java.lang.Object resource;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object serviceDescription;
        private final java.lang.Object serviceResourceType;
        private final java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty> tags;
        private final java.lang.Object user;
        private final java.lang.Object zoneAffinityEnabled;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.autoAcceptEnabled = software.amazon.jsii.Kernel.get(this, "autoAcceptEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectBandwidth = software.amazon.jsii.Kernel.get(this, "connectBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payer = software.amazon.jsii.Kernel.get(this, "payer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resource = software.amazon.jsii.Kernel.get(this, "resource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceDescription = software.amazon.jsii.Kernel.get(this, "serviceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceResourceType = software.amazon.jsii.Kernel.get(this, "serviceResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty.class)));
            this.user = software.amazon.jsii.Kernel.get(this, "user", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneAffinityEnabled = software.amazon.jsii.Kernel.get(this, "zoneAffinityEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.autoAcceptEnabled = builder.autoAcceptEnabled;
            this.connectBandwidth = builder.connectBandwidth;
            this.deletionForce = builder.deletionForce;
            this.payer = builder.payer;
            this.resource = builder.resource;
            this.resourceGroupId = builder.resourceGroupId;
            this.serviceDescription = builder.serviceDescription;
            this.serviceResourceType = builder.serviceResourceType;
            this.tags = (java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty>)builder.tags;
            this.user = builder.user;
            this.zoneAffinityEnabled = builder.zoneAffinityEnabled;
        }

        @Override
        public final java.lang.Object getAutoAcceptEnabled() {
            return this.autoAcceptEnabled;
        }

        @Override
        public final java.lang.Object getConnectBandwidth() {
            return this.connectBandwidth;
        }

        @Override
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
        }

        @Override
        public final java.lang.Object getPayer() {
            return this.payer;
        }

        @Override
        public final java.lang.Object getResource() {
            return this.resource;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getServiceDescription() {
            return this.serviceDescription;
        }

        @Override
        public final java.lang.Object getServiceResourceType() {
            return this.serviceResourceType;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.privatelink.RosVpcEndpointService.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getUser() {
            return this.user;
        }

        @Override
        public final java.lang.Object getZoneAffinityEnabled() {
            return this.zoneAffinityEnabled;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getAutoAcceptEnabled() != null) {
                data.set("autoAcceptEnabled", om.valueToTree(this.getAutoAcceptEnabled()));
            }
            if (this.getConnectBandwidth() != null) {
                data.set("connectBandwidth", om.valueToTree(this.getConnectBandwidth()));
            }
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getPayer() != null) {
                data.set("payer", om.valueToTree(this.getPayer()));
            }
            if (this.getResource() != null) {
                data.set("resource", om.valueToTree(this.getResource()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getServiceDescription() != null) {
                data.set("serviceDescription", om.valueToTree(this.getServiceDescription()));
            }
            if (this.getServiceResourceType() != null) {
                data.set("serviceResourceType", om.valueToTree(this.getServiceResourceType()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUser() != null) {
                data.set("user", om.valueToTree(this.getUser()));
            }
            if (this.getZoneAffinityEnabled() != null) {
                data.set("zoneAffinityEnabled", om.valueToTree(this.getZoneAffinityEnabled()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-privatelink.VpcEndpointServiceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VpcEndpointServiceProps.Jsii$Proxy that = (VpcEndpointServiceProps.Jsii$Proxy) o;

            if (this.autoAcceptEnabled != null ? !this.autoAcceptEnabled.equals(that.autoAcceptEnabled) : that.autoAcceptEnabled != null) return false;
            if (this.connectBandwidth != null ? !this.connectBandwidth.equals(that.connectBandwidth) : that.connectBandwidth != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.payer != null ? !this.payer.equals(that.payer) : that.payer != null) return false;
            if (this.resource != null ? !this.resource.equals(that.resource) : that.resource != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.serviceDescription != null ? !this.serviceDescription.equals(that.serviceDescription) : that.serviceDescription != null) return false;
            if (this.serviceResourceType != null ? !this.serviceResourceType.equals(that.serviceResourceType) : that.serviceResourceType != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.user != null ? !this.user.equals(that.user) : that.user != null) return false;
            return this.zoneAffinityEnabled != null ? this.zoneAffinityEnabled.equals(that.zoneAffinityEnabled) : that.zoneAffinityEnabled == null;
        }

        @Override
        public final int hashCode() {
            int result = this.autoAcceptEnabled != null ? this.autoAcceptEnabled.hashCode() : 0;
            result = 31 * result + (this.connectBandwidth != null ? this.connectBandwidth.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.payer != null ? this.payer.hashCode() : 0);
            result = 31 * result + (this.resource != null ? this.resource.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.serviceDescription != null ? this.serviceDescription.hashCode() : 0);
            result = 31 * result + (this.serviceResourceType != null ? this.serviceResourceType.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.user != null ? this.user.hashCode() : 0);
            result = 31 * result + (this.zoneAffinityEnabled != null ? this.zoneAffinityEnabled.hashCode() : 0);
            return result;
        }
    }
}
