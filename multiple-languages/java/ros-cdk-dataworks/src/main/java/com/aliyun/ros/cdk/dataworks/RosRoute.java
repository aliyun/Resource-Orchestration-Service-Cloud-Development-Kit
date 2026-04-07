package com.aliyun.ros.cdk.dataworks;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DataWorks::Route</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:23.625Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dataworks.$Module.class, fqn = "@alicloud/ros-cdk-dataworks.RosRoute")
public class RosRoute extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRoute(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRoute(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dataworks.RosRoute.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRoute(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dataworks.RosRouteProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationCidr() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationCidr", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDwResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrDwResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkId() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDestinationCidr() {
        return software.amazon.jsii.Kernel.get(this, "destinationCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDestinationCidr(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "destinationCidr", java.util.Objects.requireNonNull(value, "destinationCidr is required"));
    }

    /**
     */
    public void setDestinationCidr(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "destinationCidr", java.util.Objects.requireNonNull(value, "destinationCidr is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNetworkId() {
        return software.amazon.jsii.Kernel.get(this, "networkId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetworkId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "networkId", java.util.Objects.requireNonNull(value, "networkId is required"));
    }

    /**
     */
    public void setNetworkId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "networkId", java.util.Objects.requireNonNull(value, "networkId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDwResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "dwResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDwResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dwResourceGroupId", value);
    }

    /**
     */
    public void setDwResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dwResourceGroupId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dataworks.RosRoute}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dataworks.RosRoute> {
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
        private final com.aliyun.ros.cdk.dataworks.RosRouteProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dataworks.RosRouteProps.Builder();
        }

        /**
         * @return {@code this}
         * @param destinationCidr This parameter is required.
         */
        public Builder destinationCidr(final java.lang.String destinationCidr) {
            this.props.destinationCidr(destinationCidr);
            return this;
        }
        /**
         * @return {@code this}
         * @param destinationCidr This parameter is required.
         */
        public Builder destinationCidr(final com.aliyun.ros.cdk.core.IResolvable destinationCidr) {
            this.props.destinationCidr(destinationCidr);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkId This parameter is required.
         */
        public Builder networkId(final java.lang.Number networkId) {
            this.props.networkId(networkId);
            return this;
        }
        /**
         * @return {@code this}
         * @param networkId This parameter is required.
         */
        public Builder networkId(final com.aliyun.ros.cdk.core.IResolvable networkId) {
            this.props.networkId(networkId);
            return this;
        }

        /**
         * @return {@code this}
         * @param dwResourceGroupId This parameter is required.
         */
        public Builder dwResourceGroupId(final java.lang.String dwResourceGroupId) {
            this.props.dwResourceGroupId(dwResourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dwResourceGroupId This parameter is required.
         */
        public Builder dwResourceGroupId(final com.aliyun.ros.cdk.core.IResolvable dwResourceGroupId) {
            this.props.dwResourceGroupId(dwResourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dataworks.RosRoute}.
         */
        @Override
        public com.aliyun.ros.cdk.dataworks.RosRoute build() {
            return new com.aliyun.ros.cdk.dataworks.RosRoute(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
