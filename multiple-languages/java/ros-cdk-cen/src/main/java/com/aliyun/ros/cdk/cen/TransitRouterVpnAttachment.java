package com.aliyun.ros.cdk.cen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CEN::TransitRouterVpnAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:53.251Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterVpnAttachment")
public class TransitRouterVpnAttachment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cen.ITransitRouterVpnAttachment {

    protected TransitRouterVpnAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TransitRouterVpnAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public TransitRouterVpnAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterVpnAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public TransitRouterVpnAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterVpnAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TransitRouterAttachmentId: The ID of the VPN connection.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterVpnAttachmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterVpnAttachmentProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.TransitRouterVpnAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.TransitRouterVpnAttachment> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cen.TransitRouterVpnAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.TransitRouterVpnAttachmentProps.Builder();
        }

        /**
         * Property vpnId: IPsec connection ID.
         * <p>
         * @return {@code this}
         * @param vpnId Property vpnId: IPsec connection ID. This parameter is required.
         */
        public Builder vpnId(final java.lang.String vpnId) {
            this.props.vpnId(vpnId);
            return this;
        }
        /**
         * Property vpnId: IPsec connection ID.
         * <p>
         * @return {@code this}
         * @param vpnId Property vpnId: IPsec connection ID. This parameter is required.
         */
        public Builder vpnId(final com.aliyun.ros.cdk.core.IResolvable vpnId) {
            this.props.vpnId(vpnId);
            return this;
        }

        /**
         * Property zoneId: Availability zone ID in the current region.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Availability zone ID in the current region. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: Availability zone ID in the current region.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Availability zone ID in the current region. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property autoPublishRouteEnabled: Whether to allow forwarding router instances to automatically publish route entries to IPsec connections.
         * <p>
         * Default is true.
         * <p>
         * @return {@code this}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: Whether to allow forwarding router instances to automatically publish route entries to IPsec connections. This parameter is required.
         */
        public Builder autoPublishRouteEnabled(final java.lang.Boolean autoPublishRouteEnabled) {
            this.props.autoPublishRouteEnabled(autoPublishRouteEnabled);
            return this;
        }
        /**
         * Property autoPublishRouteEnabled: Whether to allow forwarding router instances to automatically publish route entries to IPsec connections.
         * <p>
         * Default is true.
         * <p>
         * @return {@code this}
         * @param autoPublishRouteEnabled Property autoPublishRouteEnabled: Whether to allow forwarding router instances to automatically publish route entries to IPsec connections. This parameter is required.
         */
        public Builder autoPublishRouteEnabled(final com.aliyun.ros.cdk.core.IResolvable autoPublishRouteEnabled) {
            this.props.autoPublishRouteEnabled(autoPublishRouteEnabled);
            return this;
        }

        /**
         * Property cenId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: The ID of the CEN instance.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property deletionForce: Whether to forcefully delete the VPN connection.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether to forcefully delete the VPN connection. This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * Property deletionForce: Whether to forcefully delete the VPN connection.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether to forcefully delete the VPN connection. This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * Property routeTableAssociationEnabled: Whether to enable route association and forwarding relationship.
         * <p>
         * @return {@code this}
         * @param routeTableAssociationEnabled Property routeTableAssociationEnabled: Whether to enable route association and forwarding relationship. This parameter is required.
         */
        public Builder routeTableAssociationEnabled(final java.lang.Boolean routeTableAssociationEnabled) {
            this.props.routeTableAssociationEnabled(routeTableAssociationEnabled);
            return this;
        }
        /**
         * Property routeTableAssociationEnabled: Whether to enable route association and forwarding relationship.
         * <p>
         * @return {@code this}
         * @param routeTableAssociationEnabled Property routeTableAssociationEnabled: Whether to enable route association and forwarding relationship. This parameter is required.
         */
        public Builder routeTableAssociationEnabled(final com.aliyun.ros.cdk.core.IResolvable routeTableAssociationEnabled) {
            this.props.routeTableAssociationEnabled(routeTableAssociationEnabled);
            return this;
        }

        /**
         * Property routeTablePropagationEnabled: Whether to enable route learning relationships.
         * <p>
         * @return {@code this}
         * @param routeTablePropagationEnabled Property routeTablePropagationEnabled: Whether to enable route learning relationships. This parameter is required.
         */
        public Builder routeTablePropagationEnabled(final java.lang.Boolean routeTablePropagationEnabled) {
            this.props.routeTablePropagationEnabled(routeTablePropagationEnabled);
            return this;
        }
        /**
         * Property routeTablePropagationEnabled: Whether to enable route learning relationships.
         * <p>
         * @return {@code this}
         * @param routeTablePropagationEnabled Property routeTablePropagationEnabled: Whether to enable route learning relationships. This parameter is required.
         */
        public Builder routeTablePropagationEnabled(final com.aliyun.ros.cdk.core.IResolvable routeTablePropagationEnabled) {
            this.props.routeTablePropagationEnabled(routeTablePropagationEnabled);
            return this;
        }

        /**
         * Property tags: Tags to attach to TransitRouterVpnAttachment.
         * <p>
         * Max support 20 tags to add during create TransitRouterVpnAttachment. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to TransitRouterVpnAttachment. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.cen.RosTransitRouterVpnAttachment.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property transitRouterAttachmentDescription: Description of the VPN connection.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: Description of the VPN connection. This parameter is required.
         */
        public Builder transitRouterAttachmentDescription(final java.lang.String transitRouterAttachmentDescription) {
            this.props.transitRouterAttachmentDescription(transitRouterAttachmentDescription);
            return this;
        }
        /**
         * Property transitRouterAttachmentDescription: Description of the VPN connection.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: Description of the VPN connection. This parameter is required.
         */
        public Builder transitRouterAttachmentDescription(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentDescription) {
            this.props.transitRouterAttachmentDescription(transitRouterAttachmentDescription);
            return this;
        }

        /**
         * Property transitRouterAttachmentName: The name of the VPN connection.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: The name of the VPN connection. This parameter is required.
         */
        public Builder transitRouterAttachmentName(final java.lang.String transitRouterAttachmentName) {
            this.props.transitRouterAttachmentName(transitRouterAttachmentName);
            return this;
        }
        /**
         * Property transitRouterAttachmentName: The name of the VPN connection.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: The name of the VPN connection. This parameter is required.
         */
        public Builder transitRouterAttachmentName(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentName) {
            this.props.transitRouterAttachmentName(transitRouterAttachmentName);
            return this;
        }

        /**
         * Property transitRouterId: Forwarding router instance ID.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: Forwarding router instance ID. This parameter is required.
         */
        public Builder transitRouterId(final java.lang.String transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }
        /**
         * Property transitRouterId: Forwarding router instance ID.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: Forwarding router instance ID. This parameter is required.
         */
        public Builder transitRouterId(final com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }

        /**
         * Property vpnOwnerId: Alibaba Cloud account (main account) ID to which the IPsec connection belongs.
         * <p>
         * @return {@code this}
         * @param vpnOwnerId Property vpnOwnerId: Alibaba Cloud account (main account) ID to which the IPsec connection belongs. This parameter is required.
         */
        public Builder vpnOwnerId(final java.lang.String vpnOwnerId) {
            this.props.vpnOwnerId(vpnOwnerId);
            return this;
        }
        /**
         * Property vpnOwnerId: Alibaba Cloud account (main account) ID to which the IPsec connection belongs.
         * <p>
         * @return {@code this}
         * @param vpnOwnerId Property vpnOwnerId: Alibaba Cloud account (main account) ID to which the IPsec connection belongs. This parameter is required.
         */
        public Builder vpnOwnerId(final com.aliyun.ros.cdk.core.IResolvable vpnOwnerId) {
            this.props.vpnOwnerId(vpnOwnerId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.TransitRouterVpnAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.TransitRouterVpnAttachment build() {
            return new com.aliyun.ros.cdk.cen.TransitRouterVpnAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
