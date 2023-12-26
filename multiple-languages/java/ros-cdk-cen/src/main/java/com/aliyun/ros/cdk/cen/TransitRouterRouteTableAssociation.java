package com.aliyun.ros.cdk.cen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CEN::TransitRouterRouteTableAssociation</code>, which is used to create an associated forwarding correlation.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:14.196Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterRouteTableAssociation")
public class TransitRouterRouteTableAssociation extends com.aliyun.ros.cdk.core.Resource {

    protected TransitRouterRouteTableAssociation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TransitRouterRouteTableAssociation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public TransitRouterRouteTableAssociation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterRouteTableAssociationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public TransitRouterRouteTableAssociation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterRouteTableAssociationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ResourceId: ResourceId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceType: ResourceType.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterAttachmentId: TransitRouterAttachmentId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterAttachmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteTableId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.TransitRouterRouteTableAssociation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.TransitRouterRouteTableAssociation> {
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
        private final com.aliyun.ros.cdk.cen.TransitRouterRouteTableAssociationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.TransitRouterRouteTableAssociationProps.Builder();
        }

        /**
         * Property transitRouterAttachmentId: TransitRouterAttachmentId.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentId Property transitRouterAttachmentId: TransitRouterAttachmentId. This parameter is required.
         */
        public Builder transitRouterAttachmentId(final java.lang.String transitRouterAttachmentId) {
            this.props.transitRouterAttachmentId(transitRouterAttachmentId);
            return this;
        }
        /**
         * Property transitRouterAttachmentId: TransitRouterAttachmentId.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentId Property transitRouterAttachmentId: TransitRouterAttachmentId. This parameter is required.
         */
        public Builder transitRouterAttachmentId(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentId) {
            this.props.transitRouterAttachmentId(transitRouterAttachmentId);
            return this;
        }

        /**
         * Property transitRouterRouteTableId: TransitRouterRouteTableId.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableId Property transitRouterRouteTableId: TransitRouterRouteTableId. This parameter is required.
         */
        public Builder transitRouterRouteTableId(final java.lang.String transitRouterRouteTableId) {
            this.props.transitRouterRouteTableId(transitRouterRouteTableId);
            return this;
        }
        /**
         * Property transitRouterRouteTableId: TransitRouterRouteTableId.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteTableId Property transitRouterRouteTableId: TransitRouterRouteTableId. This parameter is required.
         */
        public Builder transitRouterRouteTableId(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableId) {
            this.props.transitRouterRouteTableId(transitRouterRouteTableId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.TransitRouterRouteTableAssociation}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.TransitRouterRouteTableAssociation build() {
            return new com.aliyun.ros.cdk.cen.TransitRouterRouteTableAssociation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
