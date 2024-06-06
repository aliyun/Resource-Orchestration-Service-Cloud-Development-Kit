package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>TransitRouterVpnAttachment</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpnattachment
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:12.924Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterVpnAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(TransitRouterVpnAttachmentProps.Jsii$Proxy.class)
public interface TransitRouterVpnAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vpnId: IPsec connection ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpnId();

    /**
     * Property zoneId: Availability zone ID in the current region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property autoPublishRouteEnabled: Whether to allow forwarding router instances to automatically publish route entries to IPsec connections.
     * <p>
     * Default is true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPublishRouteEnabled() {
        return null;
    }

    /**
     * Property cenId: The ID of the CEN instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCenId() {
        return null;
    }

    /**
     * Property deletionForce: Whether to forcefully delete the VPN connection.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     * Property routeTableAssociationEnabled: Whether to enable route association and forwarding relationship.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTableAssociationEnabled() {
        return null;
    }

    /**
     * Property routeTablePropagationEnabled: Whether to enable route learning relationships.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTablePropagationEnabled() {
        return null;
    }

    /**
     * Property tags: Tags to attach to TransitRouterVpnAttachment.
     * <p>
     * Max support 20 tags to add during create TransitRouterVpnAttachment. Each tag with two properties Key and Value, and Key is required.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.cen.RosTransitRouterVpnAttachment.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property transitRouterAttachmentDescription: Description of the VPN connection.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentDescription() {
        return null;
    }

    /**
     * Property transitRouterAttachmentName: The name of the VPN connection.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentName() {
        return null;
    }

    /**
     * Property transitRouterId: Forwarding router instance ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterId() {
        return null;
    }

    /**
     * Property vpnOwnerId: Alibaba Cloud account (main account) ID to which the IPsec connection belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpnOwnerId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TransitRouterVpnAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TransitRouterVpnAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TransitRouterVpnAttachmentProps> {
        java.lang.Object vpnId;
        java.lang.Object zoneId;
        java.lang.Object autoPublishRouteEnabled;
        java.lang.Object cenId;
        java.lang.Object deletionForce;
        java.lang.Object routeTableAssociationEnabled;
        java.lang.Object routeTablePropagationEnabled;
        java.util.List<com.aliyun.ros.cdk.cen.RosTransitRouterVpnAttachment.TagsProperty> tags;
        java.lang.Object transitRouterAttachmentDescription;
        java.lang.Object transitRouterAttachmentName;
        java.lang.Object transitRouterId;
        java.lang.Object vpnOwnerId;

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getVpnId}
         * @param vpnId Property vpnId: IPsec connection ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnId(java.lang.String vpnId) {
            this.vpnId = vpnId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getVpnId}
         * @param vpnId Property vpnId: IPsec connection ID. This parameter is required.
         * @return {@code this}
         */
        public Builder vpnId(com.aliyun.ros.cdk.core.IResolvable vpnId) {
            this.vpnId = vpnId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getZoneId}
         * @param zoneId Property zoneId: Availability zone ID in the current region. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getZoneId}
         * @param zoneId Property zoneId: Availability zone ID in the current region. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getAutoPublishRouteEnabled}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: Whether to allow forwarding router instances to automatically publish route entries to IPsec connections.
         *                                Default is true.
         * @return {@code this}
         */
        public Builder autoPublishRouteEnabled(java.lang.Boolean autoPublishRouteEnabled) {
            this.autoPublishRouteEnabled = autoPublishRouteEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getAutoPublishRouteEnabled}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: Whether to allow forwarding router instances to automatically publish route entries to IPsec connections.
         *                                Default is true.
         * @return {@code this}
         */
        public Builder autoPublishRouteEnabled(com.aliyun.ros.cdk.core.IResolvable autoPublishRouteEnabled) {
            this.autoPublishRouteEnabled = autoPublishRouteEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether to forcefully delete the VPN connection.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether to forcefully delete the VPN connection.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getRouteTableAssociationEnabled}
         * @param routeTableAssociationEnabled Property routeTableAssociationEnabled: Whether to enable route association and forwarding relationship.
         * @return {@code this}
         */
        public Builder routeTableAssociationEnabled(java.lang.Boolean routeTableAssociationEnabled) {
            this.routeTableAssociationEnabled = routeTableAssociationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getRouteTableAssociationEnabled}
         * @param routeTableAssociationEnabled Property routeTableAssociationEnabled: Whether to enable route association and forwarding relationship.
         * @return {@code this}
         */
        public Builder routeTableAssociationEnabled(com.aliyun.ros.cdk.core.IResolvable routeTableAssociationEnabled) {
            this.routeTableAssociationEnabled = routeTableAssociationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getRouteTablePropagationEnabled}
         * @param routeTablePropagationEnabled Property routeTablePropagationEnabled: Whether to enable route learning relationships.
         * @return {@code this}
         */
        public Builder routeTablePropagationEnabled(java.lang.Boolean routeTablePropagationEnabled) {
            this.routeTablePropagationEnabled = routeTablePropagationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getRouteTablePropagationEnabled}
         * @param routeTablePropagationEnabled Property routeTablePropagationEnabled: Whether to enable route learning relationships.
         * @return {@code this}
         */
        public Builder routeTablePropagationEnabled(com.aliyun.ros.cdk.core.IResolvable routeTablePropagationEnabled) {
            this.routeTablePropagationEnabled = routeTablePropagationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getTags}
         * @param tags Property tags: Tags to attach to TransitRouterVpnAttachment.
         *             Max support 20 tags to add during create TransitRouterVpnAttachment. Each tag with two properties Key and Value, and Key is required.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.cen.RosTransitRouterVpnAttachment.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.cen.RosTransitRouterVpnAttachment.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getTransitRouterAttachmentDescription}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: Description of the VPN connection.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentDescription(java.lang.String transitRouterAttachmentDescription) {
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getTransitRouterAttachmentDescription}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: Description of the VPN connection.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentDescription(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentDescription) {
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getTransitRouterAttachmentName}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: The name of the VPN connection.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentName(java.lang.String transitRouterAttachmentName) {
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getTransitRouterAttachmentName}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: The name of the VPN connection.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentName(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentName) {
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: Forwarding router instance ID.
         * @return {@code this}
         */
        public Builder transitRouterId(java.lang.String transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: Forwarding router instance ID.
         * @return {@code this}
         */
        public Builder transitRouterId(com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getVpnOwnerId}
         * @param vpnOwnerId Property vpnOwnerId: Alibaba Cloud account (main account) ID to which the IPsec connection belongs.
         * @return {@code this}
         */
        public Builder vpnOwnerId(java.lang.String vpnOwnerId) {
            this.vpnOwnerId = vpnOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpnAttachmentProps#getVpnOwnerId}
         * @param vpnOwnerId Property vpnOwnerId: Alibaba Cloud account (main account) ID to which the IPsec connection belongs.
         * @return {@code this}
         */
        public Builder vpnOwnerId(com.aliyun.ros.cdk.core.IResolvable vpnOwnerId) {
            this.vpnOwnerId = vpnOwnerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TransitRouterVpnAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TransitRouterVpnAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TransitRouterVpnAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TransitRouterVpnAttachmentProps {
        private final java.lang.Object vpnId;
        private final java.lang.Object zoneId;
        private final java.lang.Object autoPublishRouteEnabled;
        private final java.lang.Object cenId;
        private final java.lang.Object deletionForce;
        private final java.lang.Object routeTableAssociationEnabled;
        private final java.lang.Object routeTablePropagationEnabled;
        private final java.util.List<com.aliyun.ros.cdk.cen.RosTransitRouterVpnAttachment.TagsProperty> tags;
        private final java.lang.Object transitRouterAttachmentDescription;
        private final java.lang.Object transitRouterAttachmentName;
        private final java.lang.Object transitRouterId;
        private final java.lang.Object vpnOwnerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpnId = software.amazon.jsii.Kernel.get(this, "vpnId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPublishRouteEnabled = software.amazon.jsii.Kernel.get(this, "autoPublishRouteEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTableAssociationEnabled = software.amazon.jsii.Kernel.get(this, "routeTableAssociationEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTablePropagationEnabled = software.amazon.jsii.Kernel.get(this, "routeTablePropagationEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.RosTransitRouterVpnAttachment.TagsProperty.class)));
            this.transitRouterAttachmentDescription = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterAttachmentName = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterId = software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpnOwnerId = software.amazon.jsii.Kernel.get(this, "vpnOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpnId = java.util.Objects.requireNonNull(builder.vpnId, "vpnId is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.autoPublishRouteEnabled = builder.autoPublishRouteEnabled;
            this.cenId = builder.cenId;
            this.deletionForce = builder.deletionForce;
            this.routeTableAssociationEnabled = builder.routeTableAssociationEnabled;
            this.routeTablePropagationEnabled = builder.routeTablePropagationEnabled;
            this.tags = (java.util.List<com.aliyun.ros.cdk.cen.RosTransitRouterVpnAttachment.TagsProperty>)builder.tags;
            this.transitRouterAttachmentDescription = builder.transitRouterAttachmentDescription;
            this.transitRouterAttachmentName = builder.transitRouterAttachmentName;
            this.transitRouterId = builder.transitRouterId;
            this.vpnOwnerId = builder.vpnOwnerId;
        }

        @Override
        public final java.lang.Object getVpnId() {
            return this.vpnId;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getAutoPublishRouteEnabled() {
            return this.autoPublishRouteEnabled;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
        }

        @Override
        public final java.lang.Object getRouteTableAssociationEnabled() {
            return this.routeTableAssociationEnabled;
        }

        @Override
        public final java.lang.Object getRouteTablePropagationEnabled() {
            return this.routeTablePropagationEnabled;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.cen.RosTransitRouterVpnAttachment.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTransitRouterAttachmentDescription() {
            return this.transitRouterAttachmentDescription;
        }

        @Override
        public final java.lang.Object getTransitRouterAttachmentName() {
            return this.transitRouterAttachmentName;
        }

        @Override
        public final java.lang.Object getTransitRouterId() {
            return this.transitRouterId;
        }

        @Override
        public final java.lang.Object getVpnOwnerId() {
            return this.vpnOwnerId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vpnId", om.valueToTree(this.getVpnId()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getAutoPublishRouteEnabled() != null) {
                data.set("autoPublishRouteEnabled", om.valueToTree(this.getAutoPublishRouteEnabled()));
            }
            if (this.getCenId() != null) {
                data.set("cenId", om.valueToTree(this.getCenId()));
            }
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getRouteTableAssociationEnabled() != null) {
                data.set("routeTableAssociationEnabled", om.valueToTree(this.getRouteTableAssociationEnabled()));
            }
            if (this.getRouteTablePropagationEnabled() != null) {
                data.set("routeTablePropagationEnabled", om.valueToTree(this.getRouteTablePropagationEnabled()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTransitRouterAttachmentDescription() != null) {
                data.set("transitRouterAttachmentDescription", om.valueToTree(this.getTransitRouterAttachmentDescription()));
            }
            if (this.getTransitRouterAttachmentName() != null) {
                data.set("transitRouterAttachmentName", om.valueToTree(this.getTransitRouterAttachmentName()));
            }
            if (this.getTransitRouterId() != null) {
                data.set("transitRouterId", om.valueToTree(this.getTransitRouterId()));
            }
            if (this.getVpnOwnerId() != null) {
                data.set("vpnOwnerId", om.valueToTree(this.getVpnOwnerId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.TransitRouterVpnAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TransitRouterVpnAttachmentProps.Jsii$Proxy that = (TransitRouterVpnAttachmentProps.Jsii$Proxy) o;

            if (!vpnId.equals(that.vpnId)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.autoPublishRouteEnabled != null ? !this.autoPublishRouteEnabled.equals(that.autoPublishRouteEnabled) : that.autoPublishRouteEnabled != null) return false;
            if (this.cenId != null ? !this.cenId.equals(that.cenId) : that.cenId != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.routeTableAssociationEnabled != null ? !this.routeTableAssociationEnabled.equals(that.routeTableAssociationEnabled) : that.routeTableAssociationEnabled != null) return false;
            if (this.routeTablePropagationEnabled != null ? !this.routeTablePropagationEnabled.equals(that.routeTablePropagationEnabled) : that.routeTablePropagationEnabled != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.transitRouterAttachmentDescription != null ? !this.transitRouterAttachmentDescription.equals(that.transitRouterAttachmentDescription) : that.transitRouterAttachmentDescription != null) return false;
            if (this.transitRouterAttachmentName != null ? !this.transitRouterAttachmentName.equals(that.transitRouterAttachmentName) : that.transitRouterAttachmentName != null) return false;
            if (this.transitRouterId != null ? !this.transitRouterId.equals(that.transitRouterId) : that.transitRouterId != null) return false;
            return this.vpnOwnerId != null ? this.vpnOwnerId.equals(that.vpnOwnerId) : that.vpnOwnerId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vpnId.hashCode();
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.autoPublishRouteEnabled != null ? this.autoPublishRouteEnabled.hashCode() : 0);
            result = 31 * result + (this.cenId != null ? this.cenId.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.routeTableAssociationEnabled != null ? this.routeTableAssociationEnabled.hashCode() : 0);
            result = 31 * result + (this.routeTablePropagationEnabled != null ? this.routeTablePropagationEnabled.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.transitRouterAttachmentDescription != null ? this.transitRouterAttachmentDescription.hashCode() : 0);
            result = 31 * result + (this.transitRouterAttachmentName != null ? this.transitRouterAttachmentName.hashCode() : 0);
            result = 31 * result + (this.transitRouterId != null ? this.transitRouterId.hashCode() : 0);
            result = 31 * result + (this.vpnOwnerId != null ? this.vpnOwnerId.hashCode() : 0);
            return result;
        }
    }
}
