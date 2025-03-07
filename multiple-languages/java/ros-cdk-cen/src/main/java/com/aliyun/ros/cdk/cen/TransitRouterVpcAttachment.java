package com.aliyun.ros.cdk.cen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CEN::TransitRouterVpcAttachment</code>, which is used to create a virtual private cloud (VPC) connection on an Enterprise Edition transit router.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:02.518Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterVpcAttachment")
public class TransitRouterVpcAttachment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cen.ITransitRouterVpcAttachment {

    protected TransitRouterVpcAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TransitRouterVpcAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public TransitRouterVpcAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterVpcAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public TransitRouterVpcAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterVpcAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CenId: CenId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCenId() {
        return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClientToken: ClientToken.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientToken() {
        return software.amazon.jsii.Kernel.get(this, "attrClientToken", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceType: ResourceType.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TransitRouterAttachmentId: The first ID of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TransitRouterAttachmentName: TransitRouterAttachmentName.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterAttachmentName() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TransitRouterId: TransitRouterId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTransitRouterId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: VpcId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcOwnerId: VpcOwnerId.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterVpcAttachmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterVpcAttachmentProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.TransitRouterVpcAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.TransitRouterVpcAttachment> {
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
        private final com.aliyun.ros.cdk.cen.TransitRouterVpcAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.TransitRouterVpcAttachmentProps.Builder();
        }

        /**
         * Property vpcId: VpcId.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VpcId. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: VpcId.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: VpcId. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property zoneMappings: ZoneMappingss.
         * <p>
         * @return {@code this}
         * @param zoneMappings Property zoneMappings: ZoneMappingss. This parameter is required.
         */
        public Builder zoneMappings(final com.aliyun.ros.cdk.core.IResolvable zoneMappings) {
            this.props.zoneMappings(zoneMappings);
            return this;
        }
        /**
         * Property zoneMappings: ZoneMappingss.
         * <p>
         * @return {@code this}
         * @param zoneMappings Property zoneMappings: ZoneMappingss. This parameter is required.
         */
        public Builder zoneMappings(final java.util.List<? extends java.lang.Object> zoneMappings) {
            this.props.zoneMappings(zoneMappings);
            return this;
        }

        /**
         * Property autoCreateVpcRoute: undefined.
         * <p>
         * @return {@code this}
         * @param autoCreateVpcRoute Property autoCreateVpcRoute: undefined. This parameter is required.
         */
        public Builder autoCreateVpcRoute(final java.lang.Boolean autoCreateVpcRoute) {
            this.props.autoCreateVpcRoute(autoCreateVpcRoute);
            return this;
        }
        /**
         * Property autoCreateVpcRoute: undefined.
         * <p>
         * @return {@code this}
         * @param autoCreateVpcRoute Property autoCreateVpcRoute: undefined. This parameter is required.
         */
        public Builder autoCreateVpcRoute(final com.aliyun.ros.cdk.core.IResolvable autoCreateVpcRoute) {
            this.props.autoCreateVpcRoute(autoCreateVpcRoute);
            return this;
        }

        /**
         * Property cenId: CenId.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: CenId. This parameter is required.
         */
        public Builder cenId(final java.lang.String cenId) {
            this.props.cenId(cenId);
            return this;
        }
        /**
         * Property cenId: CenId.
         * <p>
         * @return {@code this}
         * @param cenId Property cenId: CenId. This parameter is required.
         */
        public Builder cenId(final com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.props.cenId(cenId);
            return this;
        }

        /**
         * Property chargeType:.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType:. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType:.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType:. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation. This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether force delete related resources, like vpc route entry, route table association, route propagation. This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * Property routeTableAssociationEnabled: undefined.
         * <p>
         * @return {@code this}
         * @param routeTableAssociationEnabled Property routeTableAssociationEnabled: undefined. This parameter is required.
         */
        public Builder routeTableAssociationEnabled(final java.lang.Boolean routeTableAssociationEnabled) {
            this.props.routeTableAssociationEnabled(routeTableAssociationEnabled);
            return this;
        }
        /**
         * Property routeTableAssociationEnabled: undefined.
         * <p>
         * @return {@code this}
         * @param routeTableAssociationEnabled Property routeTableAssociationEnabled: undefined. This parameter is required.
         */
        public Builder routeTableAssociationEnabled(final com.aliyun.ros.cdk.core.IResolvable routeTableAssociationEnabled) {
            this.props.routeTableAssociationEnabled(routeTableAssociationEnabled);
            return this;
        }

        /**
         * Property routeTablePropagationEnabled: undefined.
         * <p>
         * @return {@code this}
         * @param routeTablePropagationEnabled Property routeTablePropagationEnabled: undefined. This parameter is required.
         */
        public Builder routeTablePropagationEnabled(final java.lang.Boolean routeTablePropagationEnabled) {
            this.props.routeTablePropagationEnabled(routeTablePropagationEnabled);
            return this;
        }
        /**
         * Property routeTablePropagationEnabled: undefined.
         * <p>
         * @return {@code this}
         * @param routeTablePropagationEnabled Property routeTablePropagationEnabled: undefined. This parameter is required.
         */
        public Builder routeTablePropagationEnabled(final com.aliyun.ros.cdk.core.IResolvable routeTablePropagationEnabled) {
            this.props.routeTablePropagationEnabled(routeTablePropagationEnabled);
            return this;
        }

        /**
         * Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription. This parameter is required.
         */
        public Builder transitRouterAttachmentDescription(final java.lang.String transitRouterAttachmentDescription) {
            this.props.transitRouterAttachmentDescription(transitRouterAttachmentDescription);
            return this;
        }
        /**
         * Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentDescription Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription. This parameter is required.
         */
        public Builder transitRouterAttachmentDescription(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentDescription) {
            this.props.transitRouterAttachmentDescription(transitRouterAttachmentDescription);
            return this;
        }

        /**
         * Property transitRouterAttachmentName: TransitRouterAttachmentName.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: TransitRouterAttachmentName. This parameter is required.
         */
        public Builder transitRouterAttachmentName(final java.lang.String transitRouterAttachmentName) {
            this.props.transitRouterAttachmentName(transitRouterAttachmentName);
            return this;
        }
        /**
         * Property transitRouterAttachmentName: TransitRouterAttachmentName.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentName Property transitRouterAttachmentName: TransitRouterAttachmentName. This parameter is required.
         */
        public Builder transitRouterAttachmentName(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentName) {
            this.props.transitRouterAttachmentName(transitRouterAttachmentName);
            return this;
        }

        /**
         * Property transitRouterId: TransitRouterId.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: TransitRouterId. This parameter is required.
         */
        public Builder transitRouterId(final java.lang.String transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }
        /**
         * Property transitRouterId: TransitRouterId.
         * <p>
         * @return {@code this}
         * @param transitRouterId Property transitRouterId: TransitRouterId. This parameter is required.
         */
        public Builder transitRouterId(final com.aliyun.ros.cdk.core.IResolvable transitRouterId) {
            this.props.transitRouterId(transitRouterId);
            return this;
        }

        /**
         * Property vpcOwnerId: VpcOwnerId.
         * <p>
         * @return {@code this}
         * @param vpcOwnerId Property vpcOwnerId: VpcOwnerId. This parameter is required.
         */
        public Builder vpcOwnerId(final java.lang.Number vpcOwnerId) {
            this.props.vpcOwnerId(vpcOwnerId);
            return this;
        }
        /**
         * Property vpcOwnerId: VpcOwnerId.
         * <p>
         * @return {@code this}
         * @param vpcOwnerId Property vpcOwnerId: VpcOwnerId. This parameter is required.
         */
        public Builder vpcOwnerId(final com.aliyun.ros.cdk.core.IResolvable vpcOwnerId) {
            this.props.vpcOwnerId(vpcOwnerId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.TransitRouterVpcAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.TransitRouterVpcAttachment build() {
            return new com.aliyun.ros.cdk.cen.TransitRouterVpcAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
