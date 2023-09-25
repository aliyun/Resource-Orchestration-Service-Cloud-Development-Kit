package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>ALIYUN::CEN::TransitRouterVpcAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:44.639Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterVpcAttachmentProps")
@software.amazon.jsii.Jsii.Proxy(TransitRouterVpcAttachmentProps.Jsii$Proxy.class)
public interface TransitRouterVpcAttachmentProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vpcId: VpcId.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property zoneMappings: ZoneMappingss.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneMappings();

    /**
     * Property autoCreateVpcRoute: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoCreateVpcRoute() {
        return null;
    }

    /**
     * Property cenId: CenId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCenId() {
        return null;
    }

    /**
     * Property chargeType:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return null;
    }

    /**
     * Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     * Property routeTableAssociationEnabled: undefined.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRouteTableAssociationEnabled() {
        return null;
    }

    /**
     * Property routeTablePropagationEnabled: undefined.
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
     * Property vpcOwnerId: VpcOwnerId.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcOwnerId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TransitRouterVpcAttachmentProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TransitRouterVpcAttachmentProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TransitRouterVpcAttachmentProps> {
        java.lang.Object vpcId;
        java.lang.Object zoneMappings;
        java.lang.Object autoCreateVpcRoute;
        java.lang.Object cenId;
        java.lang.Object chargeType;
        java.lang.Object deletionForce;
        java.lang.Object routeTableAssociationEnabled;
        java.lang.Object routeTablePropagationEnabled;
        java.lang.Object transitRouterAttachmentDescription;
        java.lang.Object transitRouterAttachmentName;
        java.lang.Object transitRouterId;
        java.lang.Object vpcOwnerId;

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getVpcId}
         * @param vpcId Property vpcId: VpcId. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getVpcId}
         * @param vpcId Property vpcId: VpcId. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getZoneMappings}
         * @param zoneMappings Property zoneMappings: ZoneMappingss. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneMappings(com.aliyun.ros.cdk.core.IResolvable zoneMappings) {
            this.zoneMappings = zoneMappings;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getZoneMappings}
         * @param zoneMappings Property zoneMappings: ZoneMappingss. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneMappings(java.util.List<? extends java.lang.Object> zoneMappings) {
            this.zoneMappings = zoneMappings;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getAutoCreateVpcRoute}
         * @param autoCreateVpcRoute Property autoCreateVpcRoute: undefined.
         * @return {@code this}
         */
        public Builder autoCreateVpcRoute(java.lang.Boolean autoCreateVpcRoute) {
            this.autoCreateVpcRoute = autoCreateVpcRoute;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getAutoCreateVpcRoute}
         * @param autoCreateVpcRoute Property autoCreateVpcRoute: undefined.
         * @return {@code this}
         */
        public Builder autoCreateVpcRoute(com.aliyun.ros.cdk.core.IResolvable autoCreateVpcRoute) {
            this.autoCreateVpcRoute = autoCreateVpcRoute;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getCenId}
         * @param cenId Property cenId: CenId.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getCenId}
         * @param cenId Property cenId: CenId.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getChargeType}
         * @param chargeType Property chargeType:.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getChargeType}
         * @param chargeType Property chargeType:.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getRouteTableAssociationEnabled}
         * @param routeTableAssociationEnabled Property routeTableAssociationEnabled: undefined.
         * @return {@code this}
         */
        public Builder routeTableAssociationEnabled(java.lang.Boolean routeTableAssociationEnabled) {
            this.routeTableAssociationEnabled = routeTableAssociationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getRouteTableAssociationEnabled}
         * @param routeTableAssociationEnabled Property routeTableAssociationEnabled: undefined.
         * @return {@code this}
         */
        public Builder routeTableAssociationEnabled(com.aliyun.ros.cdk.core.IResolvable routeTableAssociationEnabled) {
            this.routeTableAssociationEnabled = routeTableAssociationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getRouteTablePropagationEnabled}
         * @param routeTablePropagationEnabled Property routeTablePropagationEnabled: undefined.
         * @return {@code this}
         */
        public Builder routeTablePropagationEnabled(java.lang.Boolean routeTablePropagationEnabled) {
            this.routeTablePropagationEnabled = routeTablePropagationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getRouteTablePropagationEnabled}
         * @param routeTablePropagationEnabled Property routeTablePropagationEnabled: undefined.
         * @return {@code this}
         */
        public Builder routeTablePropagationEnabled(com.aliyun.ros.cdk.core.IResolvable routeTablePropagationEnabled) {
            this.routeTablePropagationEnabled = routeTablePropagationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getTransitRouterAttachmentDescription}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentDescription(java.lang.String transitRouterAttachmentDescription) {
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getTransitRouterAttachmentDescription}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentDescription(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentDescription) {
            this.transitRouterAttachmentDescription = transitRouterAttachmentDescription;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getTransitRouterAttachmentName}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: TransitRouterAttachmentName.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentName(java.lang.String transitRouterAttachmentName) {
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getTransitRouterAttachmentName}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: TransitRouterAttachmentName.
         * @return {@code this}
         */
        public Builder transitRouterAttachmentName(com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentName) {
            this.transitRouterAttachmentName = transitRouterAttachmentName;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: TransitRouterId.
         * @return {@code this}
         */
        public Builder transitRouterId(java.lang.String transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getTransitRouterId}
         * @param transitRouterId Property transitRouterId: TransitRouterId.
         * @return {@code this}
         */
        public Builder transitRouterId(com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.transitRouterId = transitRouterId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getVpcOwnerId}
         * @param vpcOwnerId Property vpcOwnerId: VpcOwnerId.
         * @return {@code this}
         */
        public Builder vpcOwnerId(java.lang.Number vpcOwnerId) {
            this.vpcOwnerId = vpcOwnerId;
            return this;
        }

        /**
         * Sets the value of {@link TransitRouterVpcAttachmentProps#getVpcOwnerId}
         * @param vpcOwnerId Property vpcOwnerId: VpcOwnerId.
         * @return {@code this}
         */
        public Builder vpcOwnerId(com.aliyun.ros.cdk.core.IResolvable vpcOwnerId) {
            this.vpcOwnerId = vpcOwnerId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TransitRouterVpcAttachmentProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TransitRouterVpcAttachmentProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TransitRouterVpcAttachmentProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TransitRouterVpcAttachmentProps {
        private final java.lang.Object vpcId;
        private final java.lang.Object zoneMappings;
        private final java.lang.Object autoCreateVpcRoute;
        private final java.lang.Object cenId;
        private final java.lang.Object chargeType;
        private final java.lang.Object deletionForce;
        private final java.lang.Object routeTableAssociationEnabled;
        private final java.lang.Object routeTablePropagationEnabled;
        private final java.lang.Object transitRouterAttachmentDescription;
        private final java.lang.Object transitRouterAttachmentName;
        private final java.lang.Object transitRouterId;
        private final java.lang.Object vpcOwnerId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneMappings = software.amazon.jsii.Kernel.get(this, "zoneMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoCreateVpcRoute = software.amazon.jsii.Kernel.get(this, "autoCreateVpcRoute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTableAssociationEnabled = software.amazon.jsii.Kernel.get(this, "routeTableAssociationEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.routeTablePropagationEnabled = software.amazon.jsii.Kernel.get(this, "routeTablePropagationEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterAttachmentDescription = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterAttachmentName = software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.transitRouterId = software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcOwnerId = software.amazon.jsii.Kernel.get(this, "vpcOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.zoneMappings = java.util.Objects.requireNonNull(builder.zoneMappings, "zoneMappings is required");
            this.autoCreateVpcRoute = builder.autoCreateVpcRoute;
            this.cenId = builder.cenId;
            this.chargeType = builder.chargeType;
            this.deletionForce = builder.deletionForce;
            this.routeTableAssociationEnabled = builder.routeTableAssociationEnabled;
            this.routeTablePropagationEnabled = builder.routeTablePropagationEnabled;
            this.transitRouterAttachmentDescription = builder.transitRouterAttachmentDescription;
            this.transitRouterAttachmentName = builder.transitRouterAttachmentName;
            this.transitRouterId = builder.transitRouterId;
            this.vpcOwnerId = builder.vpcOwnerId;
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
        public final java.lang.Object getAutoCreateVpcRoute() {
            return this.autoCreateVpcRoute;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
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
        public final java.lang.Object getVpcOwnerId() {
            return this.vpcOwnerId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vpcId", om.valueToTree(this.getVpcId()));
            data.set("zoneMappings", om.valueToTree(this.getZoneMappings()));
            if (this.getAutoCreateVpcRoute() != null) {
                data.set("autoCreateVpcRoute", om.valueToTree(this.getAutoCreateVpcRoute()));
            }
            if (this.getCenId() != null) {
                data.set("cenId", om.valueToTree(this.getCenId()));
            }
            if (this.getChargeType() != null) {
                data.set("chargeType", om.valueToTree(this.getChargeType()));
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
            if (this.getTransitRouterAttachmentDescription() != null) {
                data.set("transitRouterAttachmentDescription", om.valueToTree(this.getTransitRouterAttachmentDescription()));
            }
            if (this.getTransitRouterAttachmentName() != null) {
                data.set("transitRouterAttachmentName", om.valueToTree(this.getTransitRouterAttachmentName()));
            }
            if (this.getTransitRouterId() != null) {
                data.set("transitRouterId", om.valueToTree(this.getTransitRouterId()));
            }
            if (this.getVpcOwnerId() != null) {
                data.set("vpcOwnerId", om.valueToTree(this.getVpcOwnerId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.TransitRouterVpcAttachmentProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TransitRouterVpcAttachmentProps.Jsii$Proxy that = (TransitRouterVpcAttachmentProps.Jsii$Proxy) o;

            if (!vpcId.equals(that.vpcId)) return false;
            if (!zoneMappings.equals(that.zoneMappings)) return false;
            if (this.autoCreateVpcRoute != null ? !this.autoCreateVpcRoute.equals(that.autoCreateVpcRoute) : that.autoCreateVpcRoute != null) return false;
            if (this.cenId != null ? !this.cenId.equals(that.cenId) : that.cenId != null) return false;
            if (this.chargeType != null ? !this.chargeType.equals(that.chargeType) : that.chargeType != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.routeTableAssociationEnabled != null ? !this.routeTableAssociationEnabled.equals(that.routeTableAssociationEnabled) : that.routeTableAssociationEnabled != null) return false;
            if (this.routeTablePropagationEnabled != null ? !this.routeTablePropagationEnabled.equals(that.routeTablePropagationEnabled) : that.routeTablePropagationEnabled != null) return false;
            if (this.transitRouterAttachmentDescription != null ? !this.transitRouterAttachmentDescription.equals(that.transitRouterAttachmentDescription) : that.transitRouterAttachmentDescription != null) return false;
            if (this.transitRouterAttachmentName != null ? !this.transitRouterAttachmentName.equals(that.transitRouterAttachmentName) : that.transitRouterAttachmentName != null) return false;
            if (this.transitRouterId != null ? !this.transitRouterId.equals(that.transitRouterId) : that.transitRouterId != null) return false;
            return this.vpcOwnerId != null ? this.vpcOwnerId.equals(that.vpcOwnerId) : that.vpcOwnerId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.vpcId.hashCode();
            result = 31 * result + (this.zoneMappings.hashCode());
            result = 31 * result + (this.autoCreateVpcRoute != null ? this.autoCreateVpcRoute.hashCode() : 0);
            result = 31 * result + (this.cenId != null ? this.cenId.hashCode() : 0);
            result = 31 * result + (this.chargeType != null ? this.chargeType.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.routeTableAssociationEnabled != null ? this.routeTableAssociationEnabled.hashCode() : 0);
            result = 31 * result + (this.routeTablePropagationEnabled != null ? this.routeTablePropagationEnabled.hashCode() : 0);
            result = 31 * result + (this.transitRouterAttachmentDescription != null ? this.transitRouterAttachmentDescription.hashCode() : 0);
            result = 31 * result + (this.transitRouterAttachmentName != null ? this.transitRouterAttachmentName.hashCode() : 0);
            result = 31 * result + (this.transitRouterId != null ? this.transitRouterId.hashCode() : 0);
            result = 31 * result + (this.vpcOwnerId != null ? this.vpcOwnerId.hashCode() : 0);
            return result;
        }
    }
}
