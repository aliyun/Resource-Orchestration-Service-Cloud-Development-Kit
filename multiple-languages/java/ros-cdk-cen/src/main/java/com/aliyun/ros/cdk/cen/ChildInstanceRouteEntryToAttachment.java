package com.aliyun.ros.cdk.cen;

/**
 * A ROS resource type:  <code>ALIYUN::CEN::ChildInstanceRouteEntryToAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:46.637Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.ChildInstanceRouteEntryToAttachment")
public class ChildInstanceRouteEntryToAttachment extends com.aliyun.ros.cdk.core.Resource {

    protected ChildInstanceRouteEntryToAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ChildInstanceRouteEntryToAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::CEN::ChildInstanceRouteEntryToAttachment</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ChildInstanceRouteEntryToAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.ChildInstanceRouteEntryToAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::CEN::ChildInstanceRouteEntryToAttachment</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ChildInstanceRouteEntryToAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.ChildInstanceRouteEntryToAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CenId: The ID of the CEN instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCenId() {
        return software.amazon.jsii.Kernel.get(this, "attrCenId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DestinationCidrBlock: The destination CIDR block of the route.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationCidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationCidrBlock", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RouteTableId: The ID of the route table configured on the network instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteTableId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteTableId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterAttachmentId: The ID of the network instance connection.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterAttachmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.ChildInstanceRouteEntryToAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.ChildInstanceRouteEntryToAttachment> {
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
        private final com.aliyun.ros.cdk.cen.ChildInstanceRouteEntryToAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.ChildInstanceRouteEntryToAttachmentProps.Builder();
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
         * Property destinationCidrBlock: The destination CIDR block of the route.
         * <p>
         * @return {@code this}
         * @param destinationCidrBlock Property destinationCidrBlock: The destination CIDR block of the route. This parameter is required.
         */
        public Builder destinationCidrBlock(final java.lang.String destinationCidrBlock) {
            this.props.destinationCidrBlock(destinationCidrBlock);
            return this;
        }
        /**
         * Property destinationCidrBlock: The destination CIDR block of the route.
         * <p>
         * @return {@code this}
         * @param destinationCidrBlock Property destinationCidrBlock: The destination CIDR block of the route. This parameter is required.
         */
        public Builder destinationCidrBlock(final com.aliyun.ros.cdk.core.IResolvable destinationCidrBlock) {
            this.props.destinationCidrBlock(destinationCidrBlock);
            return this;
        }

        /**
         * Property routeTableId: The ID of the route table configured on the network instance.
         * <p>
         * @return {@code this}
         * @param routeTableId Property routeTableId: The ID of the route table configured on the network instance. This parameter is required.
         */
        public Builder routeTableId(final java.lang.String routeTableId) {
            this.props.routeTableId(routeTableId);
            return this;
        }
        /**
         * Property routeTableId: The ID of the route table configured on the network instance.
         * <p>
         * @return {@code this}
         * @param routeTableId Property routeTableId: The ID of the route table configured on the network instance. This parameter is required.
         */
        public Builder routeTableId(final com.aliyun.ros.cdk.core.IResolvable routeTableId) {
            this.props.routeTableId(routeTableId);
            return this;
        }

        /**
         * Property transitRouterAttachmentId: The ID of the network instance connection.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentId Property transitRouterAttachmentId: The ID of the network instance connection. This parameter is required.
         */
        public Builder transitRouterAttachmentId(final java.lang.String transitRouterAttachmentId) {
            this.props.transitRouterAttachmentId(transitRouterAttachmentId);
            return this;
        }
        /**
         * Property transitRouterAttachmentId: The ID of the network instance connection.
         * <p>
         * @return {@code this}
         * @param transitRouterAttachmentId Property transitRouterAttachmentId: The ID of the network instance connection. This parameter is required.
         */
        public Builder transitRouterAttachmentId(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentId) {
            this.props.transitRouterAttachmentId(transitRouterAttachmentId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.ChildInstanceRouteEntryToAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.ChildInstanceRouteEntryToAttachment build() {
            return new com.aliyun.ros.cdk.cen.ChildInstanceRouteEntryToAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
