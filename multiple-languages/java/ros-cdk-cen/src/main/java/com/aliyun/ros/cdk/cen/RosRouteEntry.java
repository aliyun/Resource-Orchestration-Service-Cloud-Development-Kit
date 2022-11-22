package com.aliyun.ros.cdk.cen;

/**
 * A ROS template type:  `ALIYUN::CEN::RouteEntry`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:27.766Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosRouteEntry")
public class RosRouteEntry extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRouteEntry(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRouteEntry(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cen.RosRouteEntry.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::CEN::RouteEntry`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRouteEntry(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.RosRouteEntryProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCenId() {
        return software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cenId", java.util.Objects.requireNonNull(value, "cenId is required"));
    }

    /**
     */
    public void setCenId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cenId", java.util.Objects.requireNonNull(value, "cenId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getChildInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "childInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChildInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "childInstanceId", java.util.Objects.requireNonNull(value, "childInstanceId is required"));
    }

    /**
     */
    public void setChildInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "childInstanceId", java.util.Objects.requireNonNull(value, "childInstanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getChildInstanceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "childInstanceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChildInstanceRegionId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "childInstanceRegionId", java.util.Objects.requireNonNull(value, "childInstanceRegionId is required"));
    }

    /**
     */
    public void setChildInstanceRegionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "childInstanceRegionId", java.util.Objects.requireNonNull(value, "childInstanceRegionId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getChildInstanceRouteTableId() {
        return software.amazon.jsii.Kernel.get(this, "childInstanceRouteTableId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChildInstanceRouteTableId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "childInstanceRouteTableId", java.util.Objects.requireNonNull(value, "childInstanceRouteTableId is required"));
    }

    /**
     */
    public void setChildInstanceRouteTableId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "childInstanceRouteTableId", java.util.Objects.requireNonNull(value, "childInstanceRouteTableId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getChildInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "childInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setChildInstanceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "childInstanceType", java.util.Objects.requireNonNull(value, "childInstanceType is required"));
    }

    /**
     */
    public void setChildInstanceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "childInstanceType", java.util.Objects.requireNonNull(value, "childInstanceType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDestinationCidrBlock() {
        return software.amazon.jsii.Kernel.get(this, "destinationCidrBlock", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationCidrBlock(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationCidrBlock", java.util.Objects.requireNonNull(value, "destinationCidrBlock is required"));
    }

    /**
     */
    public void setDestinationCidrBlock(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationCidrBlock", java.util.Objects.requireNonNull(value, "destinationCidrBlock is required"));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    /**
     * A factory method that creates a new instance of this class from an object containing the properties of this ROS resource.
     */
    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.RosRouteEntry}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.RosRouteEntry> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cen.RosRouteEntryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.RosRouteEntryProps.Builder();
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
         * @param childInstanceId This parameter is required.
         */
        public Builder childInstanceId(final java.lang.String childInstanceId) {
            this.props.childInstanceId(childInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param childInstanceId This parameter is required.
         */
        public Builder childInstanceId(final com.aliyun.ros.cdk.core.IResolvable childInstanceId) {
            this.props.childInstanceId(childInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param childInstanceRegionId This parameter is required.
         */
        public Builder childInstanceRegionId(final java.lang.String childInstanceRegionId) {
            this.props.childInstanceRegionId(childInstanceRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param childInstanceRegionId This parameter is required.
         */
        public Builder childInstanceRegionId(final com.aliyun.ros.cdk.core.IResolvable childInstanceRegionId) {
            this.props.childInstanceRegionId(childInstanceRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param childInstanceRouteTableId This parameter is required.
         */
        public Builder childInstanceRouteTableId(final java.lang.String childInstanceRouteTableId) {
            this.props.childInstanceRouteTableId(childInstanceRouteTableId);
            return this;
        }
        /**
         * @return {@code this}
         * @param childInstanceRouteTableId This parameter is required.
         */
        public Builder childInstanceRouteTableId(final com.aliyun.ros.cdk.core.IResolvable childInstanceRouteTableId) {
            this.props.childInstanceRouteTableId(childInstanceRouteTableId);
            return this;
        }

        /**
         * @return {@code this}
         * @param childInstanceType This parameter is required.
         */
        public Builder childInstanceType(final java.lang.String childInstanceType) {
            this.props.childInstanceType(childInstanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param childInstanceType This parameter is required.
         */
        public Builder childInstanceType(final com.aliyun.ros.cdk.core.IResolvable childInstanceType) {
            this.props.childInstanceType(childInstanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param destinationCidrBlock This parameter is required.
         */
        public Builder destinationCidrBlock(final java.lang.String destinationCidrBlock) {
            this.props.destinationCidrBlock(destinationCidrBlock);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationCidrBlock This parameter is required.
         */
        public Builder destinationCidrBlock(final com.aliyun.ros.cdk.core.IResolvable destinationCidrBlock) {
            this.props.destinationCidrBlock(destinationCidrBlock);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cen.RosRouteEntry}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.RosRouteEntry build() {
            return new com.aliyun.ros.cdk.cen.RosRouteEntry(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
