package com.aliyun.ros.cdk.cen;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CEN::TransitRouterRouteEntry</code>, which is used to add a route to a route table of an Enterprise Edition transit router.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:04.762Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosTransitRouterRouteEntry")
public class RosTransitRouterRouteEntry extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTransitRouterRouteEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTransitRouterRouteEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cen.RosTransitRouterRouteEntry.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTransitRouterRouteEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.RosTransitRouterRouteEntryProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteEntryDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteEntryDestinationCidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryDestinationCidrBlock", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteEntryId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteEntryName() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteEntryNextHopId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryNextHopId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteEntryNextHopType() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryNextHopType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteEntryType() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteTableId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterRouteEntryDestinationCidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterRouteEntryDestinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterRouteEntryDestinationCidrBlock(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteEntryDestinationCidrBlock", java.util.Objects.requireNonNull(value, "transitRouterRouteEntryDestinationCidrBlock is required"));
    }

    /**
     */
    public void setTransitRouterRouteEntryDestinationCidrBlock(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteEntryDestinationCidrBlock", java.util.Objects.requireNonNull(value, "transitRouterRouteEntryDestinationCidrBlock is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterRouteEntryNextHopType() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterRouteEntryNextHopType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterRouteEntryNextHopType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteEntryNextHopType", java.util.Objects.requireNonNull(value, "transitRouterRouteEntryNextHopType is required"));
    }

    /**
     */
    public void setTransitRouterRouteEntryNextHopType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteEntryNextHopType", java.util.Objects.requireNonNull(value, "transitRouterRouteEntryNextHopType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterRouteTableId() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterRouteTableId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteTableId", java.util.Objects.requireNonNull(value, "transitRouterRouteTableId is required"));
    }

    /**
     */
    public void setTransitRouterRouteTableId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteTableId", java.util.Objects.requireNonNull(value, "transitRouterRouteTableId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteEntryDescription() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterRouteEntryDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterRouteEntryDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteEntryDescription", value);
    }

    /**
     */
    public void setTransitRouterRouteEntryDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteEntryDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteEntryName() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterRouteEntryName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterRouteEntryName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteEntryName", value);
    }

    /**
     */
    public void setTransitRouterRouteEntryName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteEntryName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTransitRouterRouteEntryNextHopId() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterRouteEntryNextHopId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterRouteEntryNextHopId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteEntryNextHopId", value);
    }

    /**
     */
    public void setTransitRouterRouteEntryNextHopId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterRouteEntryNextHopId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.RosTransitRouterRouteEntry}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.RosTransitRouterRouteEntry> {
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
        private final com.aliyun.ros.cdk.cen.RosTransitRouterRouteEntryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.RosTransitRouterRouteEntryProps.Builder();
        }

        /**
         * @return {@code this}
         * @param transitRouterRouteEntryDestinationCidrBlock This parameter is required.
         */
        public Builder transitRouterRouteEntryDestinationCidrBlock(final java.lang.String transitRouterRouteEntryDestinationCidrBlock) {
            this.props.transitRouterRouteEntryDestinationCidrBlock(transitRouterRouteEntryDestinationCidrBlock);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterRouteEntryDestinationCidrBlock This parameter is required.
         */
        public Builder transitRouterRouteEntryDestinationCidrBlock(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteEntryDestinationCidrBlock) {
            this.props.transitRouterRouteEntryDestinationCidrBlock(transitRouterRouteEntryDestinationCidrBlock);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterRouteEntryNextHopType This parameter is required.
         */
        public Builder transitRouterRouteEntryNextHopType(final java.lang.String transitRouterRouteEntryNextHopType) {
            this.props.transitRouterRouteEntryNextHopType(transitRouterRouteEntryNextHopType);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterRouteEntryNextHopType This parameter is required.
         */
        public Builder transitRouterRouteEntryNextHopType(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteEntryNextHopType) {
            this.props.transitRouterRouteEntryNextHopType(transitRouterRouteEntryNextHopType);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterRouteTableId This parameter is required.
         */
        public Builder transitRouterRouteTableId(final java.lang.String transitRouterRouteTableId) {
            this.props.transitRouterRouteTableId(transitRouterRouteTableId);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterRouteTableId This parameter is required.
         */
        public Builder transitRouterRouteTableId(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteTableId) {
            this.props.transitRouterRouteTableId(transitRouterRouteTableId);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterRouteEntryDescription This parameter is required.
         */
        public Builder transitRouterRouteEntryDescription(final java.lang.String transitRouterRouteEntryDescription) {
            this.props.transitRouterRouteEntryDescription(transitRouterRouteEntryDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterRouteEntryDescription This parameter is required.
         */
        public Builder transitRouterRouteEntryDescription(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteEntryDescription) {
            this.props.transitRouterRouteEntryDescription(transitRouterRouteEntryDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterRouteEntryName This parameter is required.
         */
        public Builder transitRouterRouteEntryName(final java.lang.String transitRouterRouteEntryName) {
            this.props.transitRouterRouteEntryName(transitRouterRouteEntryName);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterRouteEntryName This parameter is required.
         */
        public Builder transitRouterRouteEntryName(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteEntryName) {
            this.props.transitRouterRouteEntryName(transitRouterRouteEntryName);
            return this;
        }

        /**
         * @return {@code this}
         * @param transitRouterRouteEntryNextHopId This parameter is required.
         */
        public Builder transitRouterRouteEntryNextHopId(final java.lang.String transitRouterRouteEntryNextHopId) {
            this.props.transitRouterRouteEntryNextHopId(transitRouterRouteEntryNextHopId);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterRouteEntryNextHopId This parameter is required.
         */
        public Builder transitRouterRouteEntryNextHopId(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteEntryNextHopId) {
            this.props.transitRouterRouteEntryNextHopId(transitRouterRouteEntryNextHopId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.RosTransitRouterRouteEntry}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.RosTransitRouterRouteEntry build() {
            return new com.aliyun.ros.cdk.cen.RosTransitRouterRouteEntry(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
