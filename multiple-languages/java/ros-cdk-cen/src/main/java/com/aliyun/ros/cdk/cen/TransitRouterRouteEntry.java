package com.aliyun.ros.cdk.cen;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CEN::TransitRouterRouteEntry</code>, which is used to add routes to a route table of an Enterprise Edition transit router.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:27.296Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.TransitRouterRouteEntry")
public class TransitRouterRouteEntry extends com.aliyun.ros.cdk.core.Resource {

    protected TransitRouterRouteEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TransitRouterRouteEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public TransitRouterRouteEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterRouteEntryProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public TransitRouterRouteEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterRouteEntryProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TransitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteEntryDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteEntryDestinationCidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryDestinationCidrBlock", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterRouteEntryId: The first ID of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteEntryId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterRouteEntryName: TransitRouterRouteEntryName.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteEntryName() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteEntryNextHopId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryNextHopId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteEntryNextHopType() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryNextHopType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterRouteEntryType: TransitRouterRouteEntryType.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteEntryType() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteEntryType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterRouteTableId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterRouteTableId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterRouteEntryProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cen.TransitRouterRouteEntryProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.TransitRouterRouteEntryProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.TransitRouterRouteEntry}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.TransitRouterRouteEntry> {
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
        private final com.aliyun.ros.cdk.cen.TransitRouterRouteEntryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.TransitRouterRouteEntryProps.Builder();
        }

        /**
         * Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteEntryDestinationCidrBlock Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock. This parameter is required.
         */
        public Builder transitRouterRouteEntryDestinationCidrBlock(final java.lang.String transitRouterRouteEntryDestinationCidrBlock) {
            this.props.transitRouterRouteEntryDestinationCidrBlock(transitRouterRouteEntryDestinationCidrBlock);
            return this;
        }
        /**
         * Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteEntryDestinationCidrBlock Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock. This parameter is required.
         */
        public Builder transitRouterRouteEntryDestinationCidrBlock(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteEntryDestinationCidrBlock) {
            this.props.transitRouterRouteEntryDestinationCidrBlock(transitRouterRouteEntryDestinationCidrBlock);
            return this;
        }

        /**
         * Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteEntryNextHopType Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType. This parameter is required.
         */
        public Builder transitRouterRouteEntryNextHopType(final java.lang.String transitRouterRouteEntryNextHopType) {
            this.props.transitRouterRouteEntryNextHopType(transitRouterRouteEntryNextHopType);
            return this;
        }
        /**
         * Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteEntryNextHopType Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType. This parameter is required.
         */
        public Builder transitRouterRouteEntryNextHopType(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteEntryNextHopType) {
            this.props.transitRouterRouteEntryNextHopType(transitRouterRouteEntryNextHopType);
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
         * Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteEntryDescription Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription. This parameter is required.
         */
        public Builder transitRouterRouteEntryDescription(final java.lang.String transitRouterRouteEntryDescription) {
            this.props.transitRouterRouteEntryDescription(transitRouterRouteEntryDescription);
            return this;
        }
        /**
         * Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteEntryDescription Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription. This parameter is required.
         */
        public Builder transitRouterRouteEntryDescription(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteEntryDescription) {
            this.props.transitRouterRouteEntryDescription(transitRouterRouteEntryDescription);
            return this;
        }

        /**
         * Property transitRouterRouteEntryName: TransitRouterRouteEntryName.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteEntryName Property transitRouterRouteEntryName: TransitRouterRouteEntryName. This parameter is required.
         */
        public Builder transitRouterRouteEntryName(final java.lang.String transitRouterRouteEntryName) {
            this.props.transitRouterRouteEntryName(transitRouterRouteEntryName);
            return this;
        }
        /**
         * Property transitRouterRouteEntryName: TransitRouterRouteEntryName.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteEntryName Property transitRouterRouteEntryName: TransitRouterRouteEntryName. This parameter is required.
         */
        public Builder transitRouterRouteEntryName(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteEntryName) {
            this.props.transitRouterRouteEntryName(transitRouterRouteEntryName);
            return this;
        }

        /**
         * Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteEntryNextHopId Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId. This parameter is required.
         */
        public Builder transitRouterRouteEntryNextHopId(final java.lang.String transitRouterRouteEntryNextHopId) {
            this.props.transitRouterRouteEntryNextHopId(transitRouterRouteEntryNextHopId);
            return this;
        }
        /**
         * Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId.
         * <p>
         * @return {@code this}
         * @param transitRouterRouteEntryNextHopId Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId. This parameter is required.
         */
        public Builder transitRouterRouteEntryNextHopId(final com.aliyun.ros.cdk.core.IResolvable transitRouterRouteEntryNextHopId) {
            this.props.transitRouterRouteEntryNextHopId(transitRouterRouteEntryNextHopId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.TransitRouterRouteEntry}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.TransitRouterRouteEntry build() {
            return new com.aliyun.ros.cdk.cen.TransitRouterRouteEntry(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
