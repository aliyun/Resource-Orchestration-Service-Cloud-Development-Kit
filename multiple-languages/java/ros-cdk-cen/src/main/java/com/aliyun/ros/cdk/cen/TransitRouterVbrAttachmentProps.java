package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a `ALIYUN::CEN::TransitRouterVbrAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.30.0 (build adae23f)", date = "2021-06-21T09:47:42.545Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterVbrAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(TransitRouterVbrAttachmentProps.Jsii$Proxy.class)
public interface TransitRouterVbrAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vbrId: VbrId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVbrId();

    /**
     * Property autoPublishRouteEnabled: AutoPublishRouteEnabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPublishRouteEnabled() {
        return null;
    }

    /**
     * Property cenId: CenId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCenId() {
        return null;
    }

    /**
     * Property resourceType: ResourceType.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceType() {
        return null;
    }

    /**
     * Property routeTableAssociationEnabled:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTableAssociationEnabled() {
        return null;
    }

    /**
     * Property routeTablePropagationEnabled:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTablePropagationEnabled() {
        return null;
    }

    /**
     * Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentDescription() {
        return null;
    }

    /**
     * Property transitRouterAttachmentName: TransitRouterAttachmentName.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentName() {
        return null;
    }

    /**
     * Property transitRouterId: TransitRouterId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterId() {
        return null;
    }

    /**
     * Property vbrOwnerId: VbrOwnerId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVbrOwnerId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TransitRouterVbrAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TransitRouterVbrAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TransitRouterVbrAttachmentProps> {
        private java.lang.Object vbrId;
        private java.lang.Object autoPublishRouteEnabled;
        private java.lang.Object cenId;
        private java.lang.Object resourceType;
        private java.lang.Object routeTableAssociationEnabled;
        private java.lang.Object routeTablePropagationEnabled;
        private java.lang.Object transitRouterAttachmentDescription;
        private java.lang.Object transitRouterAttachmentName;
        private java.lang.Object transitRouterId;
        private java.lang.Object vbrOwnerId;

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getVbrId}
         * @param vbrId Property vbrId: VbrId. This parameter is required.
         * @return {@code this}
         */
        public Builder vbrId(java.lang.String vbrId) {
            this.vbrId = vbrId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getVbrId}
         * @param vbrId Property vbrId: VbrId. This parameter is required.
         * @return {@code this}
         */
        public Builder vbrId(com.aliyun.ros.cdk.core.IResolvable vbrId) {
            this.vbrId = vbrId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getAutoPublishRouteEnabled}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: AutoPublishRouteEnabled.
         * @return {@code this}
         */
        public Builder autoPublishRouteEnabled(java.lang.Boolean autoPublishRouteEnabled) {
            this.autoPublishRouteEnabled = autoPublishRouteEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getAutoPublishRouteEnabled}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: AutoPublishRouteEnabled.
         * @return {@code this}
         */
        public Builder autoPublishRouteEnabled(com.aliyun.ros.cdk.core.IResolvable autoPublishRouteEnabled) {
            this.autoPublishRouteEnabled = autoPublishRouteEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getCenId}
         * @param cenId Property cenId: CenId.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getCenId}
         * @param cenId Property cenId: CenId.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getResourceType}
         * @param resourceType Property resourceType: ResourceType.
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getResourceType}
         * @param resourceType Property resourceType: ResourceType.
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getRouteTableAssociationEnabled}
         * @param routeTableAssociationEnabled Property routeTableAssociationEnabled:.
         * @return {@code this}
         */
        public Builder routeTableAssociationEnabled(java.lang.String routeTableAssociationEnabled) {
            this.routeTableAssociationEnabled = routeTableAssociationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getRouteTableAssociationEnabled}
         * @param routeTableAssociationEnabled Property routeTableAssociationEnabled:.
         * @return {@code this}
         */
        public Builder routeTableAssociationEnabled(com.aliyun.ros.cdk.core.IResolvable routeTableAssociationEnabled) {
            this.routeTableAssociationEnabled = routeTableAssociationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getRouteTablePropagationEnabled}
         * @param routeTablePropagationEnabled Property routeTablePropagationEnabled:.
         * @return {@code this}
         */
        public Builder routeTablePropagationEnabled(java.lang.String routeTablePropagationEnabled) {
            this.routeTablePropagationEnabled = routeTablePropagationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getRouteTablePropagationEnabled}
         * @param routeTablePropagationEnabled Property routeTablePropagationEnabled:.
         * @return {@code this}
         */
        public Builder routeTablePropagationEnabled(com.aliyun.ros.cdk.core.IResolvable routeTablePropagationEnabled) {
            this.routeTablePropagationEnabled = routeTablePropagationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getTransitRouterAttachmentDescription}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentDescription(java.lang.String transitRouterAttachmentDescription) {
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getTransitRouterAttachmentDescription}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentDescription(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentDescription) {
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getTransitRouterAttachmentName}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: TransitRouterAttachmentName.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentName(java.lang.String transitRouterAttachmentName) {
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getTransitRouterAttachmentName}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: TransitRouterAttachmentName.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentName(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentName) {
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: TransitRouterId.
         * @return {@code this}
         */
        public Builder transitRouterId(java.lang.String transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: TransitRouterId.
         * @return {@code this}
         */
        public Builder transitRouterId(com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getVbrOwnerId}
         * @param vbrOwnerId Property vbrOwnerId: VbrOwnerId.
         * @return {@code this}
         */
        public Builder vbrOwnerId(java.lang.Number vbrOwnerId) {
            this.vbrOwnerId = vbrOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVbrAttachmentProps#getVbrOwnerId}
         * @param vbrOwnerId Property vbrOwnerId: VbrOwnerId.
         * @return {@code this}
         */
        public Builder vbrOwnerId(com.aliyun.ros.cdk.core.IResolvable vbrOwnerId) {
            this.vbrOwnerId = vbrOwnerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TransitRouterVbrAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TransitRouterVbrAttachmentProps build() {
            return new Jsii$Proxy(vbrId, autoPublishRouteEnabled, cenId, resourceType, routeTableAssociationEnabled, routeTablePropagationEnabled, transitRouterAttachmentDescription, transitRouterAttachmentName, transitRouterId, vbrOwnerId);
        }
    }

    /**
     * An implementation for {@link TransitRouterVbrAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TransitRouterVbrAttachmentProps {
        private final java.lang.Object vbrId;
        private final java.lang.Object autoPublishRouteEnabled;
        private final java.lang.Object cenId;
        private final java.lang.Object resourceType;
        private final java.lang.Object routeTableAssociationEnabled;
        private final java.lang.Object routeTablePropagationEnabled;
        private final java.lang.Object transitRouterAttachmentDescription;
        private final java.lang.Object transitRouterAttachmentName;
        private final java.lang.Object transitRouterId;
        private final java.lang.Object vbrOwnerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vbrId = software.amazon.jsii.Kernel.get(this, "vbrId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPublishRouteEnabled = software.amazon.jsii.Kernel.get(this, "autoPublishRouteEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTableAssociationEnabled = software.amazon.jsii.Kernel.get(this, "routeTableAssociationEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTablePropagationEnabled = software.amazon.jsii.Kernel.get(this, "routeTablePropagationEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterAttachmentDescription = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterAttachmentName = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterId = software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vbrOwnerId = software.amazon.jsii.Kernel.get(this, "vbrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Object vbrId, final java.lang.Object autoPublishRouteEnabled, final java.lang.Object cenId, final java.lang.Object resourceType, final java.lang.Object routeTableAssociationEnabled, final java.lang.Object routeTablePropagationEnabled, final java.lang.Object transitRouterAttachmentDescription, final java.lang.Object transitRouterAttachmentName, final java.lang.Object transitRouterId, final java.lang.Object vbrOwnerId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vbrId = java.util.Objects.requireNonNull(vbrId, "vbrId is required");
            this.autoPublishRouteEnabled = autoPublishRouteEnabled;
            this.cenId = cenId;
            this.resourceType = resourceType;
            this.routeTableAssociationEnabled = routeTableAssociationEnabled;
            this.routeTablePropagationEnabled = routeTablePropagationEnabled;
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            this.transitRouterId = transitRouterId;
            this.vbrOwnerId = vbrOwnerId;
        }

        @Override
        public final java.lang.Object getVbrId() {
            return this.vbrId;
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
        public final java.lang.Object getResourceType() {
            return this.resourceType;
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
        public final java.lang.Object getVbrOwnerId() {
            return this.vbrOwnerId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vbrId", om.valueToTree(this.getVbrId()));
            if (this.getAutoPublishRouteEnabled() != null) {
                data.set("autoPublishRouteEnabled", om.valueToTree(this.getAutoPublishRouteEnabled()));
            }
            if (this.getCenId() != null) {
                data.set("cenId", om.valueToTree(this.getCenId()));
            }
            if (this.getResourceType() != null) {
                data.set("resourceType", om.valueToTree(this.getResourceType()));
            }
            if (this.getRouteTableAssociationEnabled() != null) {
                data.set("routeTableAssociationEnabled", om.valueToTree(this.getRouteTableAssociationEnabled()));
            }
            if (this.getRouteTablePropagationEnabled() != null) {
                data.set("routeTablePropagationEnabled", om.valueToTree(this.getRouteTablePropagationEnabled()));
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
            if (this.getVbrOwnerId() != null) {
                data.set("vbrOwnerId", om.valueToTree(this.getVbrOwnerId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.TransitRouterVbrAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TransitRouterVbrAttachmentProps.Jsii$Proxy that = (TransitRouterVbrAttachmentProps.Jsii$Proxy) o;

            if (!vbrId.equals(that.vbrId)) return false;
            if (this.autoPublishRouteEnabled != null ? !this.autoPublishRouteEnabled.equals(that.autoPublishRouteEnabled) : that.autoPublishRouteEnabled != null) return false;
            if (this.cenId != null ? !this.cenId.equals(that.cenId) : that.cenId != null) return false;
            if (this.resourceType != null ? !this.resourceType.equals(that.resourceType) : that.resourceType != null) return false;
            if (this.routeTableAssociationEnabled != null ? !this.routeTableAssociationEnabled.equals(that.routeTableAssociationEnabled) : that.routeTableAssociationEnabled != null) return false;
            if (this.routeTablePropagationEnabled != null ? !this.routeTablePropagationEnabled.equals(that.routeTablePropagationEnabled) : that.routeTablePropagationEnabled != null) return false;
            if (this.transitRouterAttachmentDescription != null ? !this.transitRouterAttachmentDescription.equals(that.transitRouterAttachmentDescription) : that.transitRouterAttachmentDescription != null) return false;
            if (this.transitRouterAttachmentName != null ? !this.transitRouterAttachmentName.equals(that.transitRouterAttachmentName) : that.transitRouterAttachmentName != null) return false;
            if (this.transitRouterId != null ? !this.transitRouterId.equals(that.transitRouterId) : that.transitRouterId != null) return false;
            return this.vbrOwnerId != null ? this.vbrOwnerId.equals(that.vbrOwnerId) : that.vbrOwnerId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vbrId.hashCode();
            result = 31 * result + (this.autoPublishRouteEnabled != null ? this.autoPublishRouteEnabled.hashCode() : 0);
            result = 31 * result + (this.cenId != null ? this.cenId.hashCode() : 0);
            result = 31 * result + (this.resourceType != null ? this.resourceType.hashCode() : 0);
            result = 31 * result + (this.routeTableAssociationEnabled != null ? this.routeTableAssociationEnabled.hashCode() : 0);
            result = 31 * result + (this.routeTablePropagationEnabled != null ? this.routeTablePropagationEnabled.hashCode() : 0);
            result = 31 * result + (this.transitRouterAttachmentDescription != null ? this.transitRouterAttachmentDescription.hashCode() : 0);
            result = 31 * result + (this.transitRouterAttachmentName != null ? this.transitRouterAttachmentName.hashCode() : 0);
            result = 31 * result + (this.transitRouterId != null ? this.transitRouterId.hashCode() : 0);
            result = 31 * result + (this.vbrOwnerId != null ? this.vbrOwnerId.hashCode() : 0);
            return result;
        }
    }
}
