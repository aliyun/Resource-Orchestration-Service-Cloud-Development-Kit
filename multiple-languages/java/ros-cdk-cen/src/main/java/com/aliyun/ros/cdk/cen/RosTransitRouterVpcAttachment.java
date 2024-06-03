package com.aliyun.ros.cdk.cen;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CEN::TransitRouterVpcAttachment</code>, which is used to connect a virtual private cloud (​VPC) to an Enterprise Edition transit router.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:49.996Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment")
public class RosTransitRouterVpcAttachment extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTransitRouterVpcAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTransitRouterVpcAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cen.RosTransitRouterVpcAttachment.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTransitRouterVpcAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.RosTransitRouterVpcAttachmentProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCenId() {
        return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClientToken() {
        return software.amazon.jsii.Kernel.get(this, "attrClientToken", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterAttachmentDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterAttachmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterAttachmentName() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcOwnerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVpcId() {
        return software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public void setVpcId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcId", java.util.Objects.requireNonNull(value, "vpcId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getZoneMappings() {
        return software.amazon.jsii.Kernel.get(this, "zoneMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setZoneMappings(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "zoneMappings", java.util.Objects.requireNonNull(value, "zoneMappings is required"));
    }

    /**
     */
    public void setZoneMappings(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.cen.RosTransitRouterVpcAttachment.ZoneMappingsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.cen.RosTransitRouterVpcAttachment.ZoneMappingsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "zoneMappings", java.util.Objects.requireNonNull(value, "zoneMappings is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoCreateVpcRoute() {
        return software.amazon.jsii.Kernel.get(this, "autoCreateVpcRoute", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoCreateVpcRoute(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoCreateVpcRoute", value);
    }

    /**
     */
    public void setAutoCreateVpcRoute(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoCreateVpcRoute", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCenId() {
        return software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cenId", value);
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cenId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getChargeType() {
        return software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", value);
    }

    /**
     */
    public void setChargeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "chargeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public void setDeletionForce(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deletionForce", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRouteTableAssociationEnabled() {
        return software.amazon.jsii.Kernel.get(this, "routeTableAssociationEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRouteTableAssociationEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "routeTableAssociationEnabled", value);
    }

    /**
     */
    public void setRouteTableAssociationEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routeTableAssociationEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRouteTablePropagationEnabled() {
        return software.amazon.jsii.Kernel.get(this, "routeTablePropagationEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRouteTablePropagationEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "routeTablePropagationEnabled", value);
    }

    /**
     */
    public void setRouteTablePropagationEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "routeTablePropagationEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentDescription() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterAttachmentDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterAttachmentDescription", value);
    }

    /**
     */
    public void setTransitRouterAttachmentDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterAttachmentDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterAttachmentName() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterAttachmentName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterAttachmentName", value);
    }

    /**
     */
    public void setTransitRouterAttachmentName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterAttachmentName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterId() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterId", value);
    }

    /**
     */
    public void setTransitRouterId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVpcOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "vpcOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVpcOwnerId(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "vpcOwnerId", value);
    }

    /**
     */
    public void setVpcOwnerId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vpcOwnerId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment.ZoneMappingsProperty")
    @software.amazon.jsii.Jsii.Proxy(ZoneMappingsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ZoneMappingsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

        /**
         * @return a {@link Builder} of {@link ZoneMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ZoneMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ZoneMappingsProperty> {
            java.lang.Object vSwitchId;
            java.lang.Object zoneId;

            /**
             * Sets the value of {@link ZoneMappingsProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link ZoneMappingsProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link ZoneMappingsProperty#getZoneId}
             * @param zoneId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(java.lang.String zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Sets the value of {@link ZoneMappingsProperty#getZoneId}
             * @param zoneId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
                this.zoneId = zoneId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ZoneMappingsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ZoneMappingsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ZoneMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ZoneMappingsProperty {
            private final java.lang.Object vSwitchId;
            private final java.lang.Object zoneId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
                this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            }

            @Override
            public final java.lang.Object getVSwitchId() {
                return this.vSwitchId;
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

                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
                data.set("zoneId", om.valueToTree(this.getZoneId()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RosTransitRouterVpcAttachment.ZoneMappingsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ZoneMappingsProperty.Jsii$Proxy that = (ZoneMappingsProperty.Jsii$Proxy) o;

                if (!vSwitchId.equals(that.vSwitchId)) return false;
                return this.zoneId.equals(that.zoneId);
            }

            @Override
            public final int hashCode() {
                int result = this.vSwitchId.hashCode();
                result = 31 * result + (this.zoneId.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.RosTransitRouterVpcAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.RosTransitRouterVpcAttachment> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cen.RosTransitRouterVpcAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.RosTransitRouterVpcAttachmentProps.Builder();
        }

        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcId This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneMappings This parameter is required.
         */
        public Builder zoneMappings(final com.aliyun.ros.cdk.core.IResolvable zoneMappings) {
            this.props.zoneMappings(zoneMappings);
            return this;
        }
        /**
         * @return {@code this}
         * @param zoneMappings This parameter is required.
         */
        public Builder zoneMappings(final java.util.List<? extends java.lang.Object> zoneMappings) {
            this.props.zoneMappings(zoneMappings);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoCreateVpcRoute This parameter is required.
         */
        public Builder autoCreateVpcRoute(final java.lang.Boolean autoCreateVpcRoute) {
            this.props.autoCreateVpcRoute(autoCreateVpcRoute);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoCreateVpcRoute This parameter is required.
         */
        public Builder autoCreateVpcRoute(final com.aliyun.ros.cdk.core.IResolvable autoCreateVpcRoute) {
            this.props.autoCreateVpcRoute(autoCreateVpcRoute);
            return this;
        }

        /**
         * @return {@code this}
         * @param cenId This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * @return {@code this}
         * @param cenId This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param chargeType This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * @return {@code this}
         * @param deletionForce This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * @return {@code this}
         * @param routeTableAssociationEnabled This parameter is required.
         */
        public Builder routeTableAssociationEnabled(final java.lang.Boolean routeTableAssociationEnabled) {
            this.props.routeTableAssociationEnabled(routeTableAssociationEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param routeTableAssociationEnabled This parameter is required.
         */
        public Builder routeTableAssociationEnabled(final com.aliyun.ros.cdk.core.IResolvable routeTableAssociationEnabled) {
            this.props.routeTableAssociationEnabled(routeTableAssociationEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param routeTablePropagationEnabled This parameter is required.
         */
        public Builder routeTablePropagationEnabled(final java.lang.Boolean routeTablePropagationEnabled) {
            this.props.routeTablePropagationEnabled(routeTablePropagationEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param routeTablePropagationEnabled This parameter is required.
         */
        public Builder routeTablePropagationEnabled(final com.aliyun.ros.cdk.core.IResolvable routeTablePropagationEnabled) {
            this.props.routeTablePropagationEnabled(routeTablePropagationEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterAttachmentDescription This parameter is required.
         */
        public Builder transitRouterAttachmentDescription(final java.lang.String transitRouterAttachmentDescription) {
            this.props.transitRouterAttachmentDescription(transitRouterAttachmentDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterAttachmentDescription This parameter is required.
         */
        public Builder transitRouterAttachmentDescription(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentDescription) {
            this.props.transitRouterAttachmentDescription(transitRouterAttachmentDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterAttachmentName This parameter is required.
         */
        public Builder transitRouterAttachmentName(final java.lang.String transitRouterAttachmentName) {
            this.props.transitRouterAttachmentName(transitRouterAttachmentName);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterAttachmentName This parameter is required.
         */
        public Builder transitRouterAttachmentName(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentName) {
            this.props.transitRouterAttachmentName(transitRouterAttachmentName);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterId This parameter is required.
         */
        public Builder transitRouterId(final java.lang.String transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterId This parameter is required.
         */
        public Builder transitRouterId(final com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vpcOwnerId This parameter is required.
         */
        public Builder vpcOwnerId(final java.lang.Number vpcOwnerId) {
            this.props.vpcOwnerId(vpcOwnerId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vpcOwnerId This parameter is required.
         */
        public Builder vpcOwnerId(final com.aliyun.ros.cdk.core.IResolvable vpcOwnerId) {
            this.props.vpcOwnerId(vpcOwnerId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.RosTransitRouterVpcAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.RosTransitRouterVpcAttachment build() {
            return new com.aliyun.ros.cdk.cen.RosTransitRouterVpcAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
