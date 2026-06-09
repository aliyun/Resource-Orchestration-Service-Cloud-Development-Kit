package com.aliyun.ros.cdk.cen;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CEN::InterRegionTrafficQosPolicy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:45:17.355Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosInterRegionTrafficQosPolicy")
public class RosInterRegionTrafficQosPolicy extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInterRegionTrafficQosPolicy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInterRegionTrafficQosPolicy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cen.RosInterRegionTrafficQosPolicy.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInterRegionTrafficQosPolicy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cen.RosInterRegionTrafficQosPolicyProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBandwidthGuaranteeMode() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidthGuaranteeMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInterRegionTrafficQosPolicyDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosPolicyDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInterRegionTrafficQosPolicyId() {
        return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosPolicyId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInterRegionTrafficQosPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "attrInterRegionTrafficQosPolicyName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterAttachmentId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTransitRouterId() {
        return software.amazon.jsii.Kernel.get(this, "attrTransitRouterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterAttachmentId() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterAttachmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterAttachmentId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterAttachmentId", java.util.Objects.requireNonNull(value, "transitRouterAttachmentId is required"));
    }

    /**
     */
    public void setTransitRouterAttachmentId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterAttachmentId", java.util.Objects.requireNonNull(value, "transitRouterAttachmentId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTransitRouterId() {
        return software.amazon.jsii.Kernel.get(this, "transitRouterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTransitRouterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterId", java.util.Objects.requireNonNull(value, "transitRouterId is required"));
    }

    /**
     */
    public void setTransitRouterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "transitRouterId", java.util.Objects.requireNonNull(value, "transitRouterId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBandwidthGuaranteeMode() {
        return software.amazon.jsii.Kernel.get(this, "bandwidthGuaranteeMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBandwidthGuaranteeMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bandwidthGuaranteeMode", value);
    }

    /**
     */
    public void setBandwidthGuaranteeMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bandwidthGuaranteeMode", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInterRegionTrafficQosPolicyDescription() {
        return software.amazon.jsii.Kernel.get(this, "interRegionTrafficQosPolicyDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInterRegionTrafficQosPolicyDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "interRegionTrafficQosPolicyDescription", value);
    }

    /**
     */
    public void setInterRegionTrafficQosPolicyDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "interRegionTrafficQosPolicyDescription", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInterRegionTrafficQosPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "interRegionTrafficQosPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInterRegionTrafficQosPolicyName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "interRegionTrafficQosPolicyName", value);
    }

    /**
     */
    public void setInterRegionTrafficQosPolicyName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "interRegionTrafficQosPolicyName", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cen.RosInterRegionTrafficQosPolicy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cen.RosInterRegionTrafficQosPolicy> {
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
        private final com.aliyun.ros.cdk.cen.RosInterRegionTrafficQosPolicyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cen.RosInterRegionTrafficQosPolicyProps.Builder();
        }

        /**
         * @return {@code this}
         * @param transitRouterAttachmentId This parameter is required.
         */
        public Builder transitRouterAttachmentId(final java.lang.String transitRouterAttachmentId) {
            this.props.transitRouterAttachmentId(transitRouterAttachmentId);
            return this;
        }
        /**
         * @return {@code this}
         * @param transitRouterAttachmentId This parameter is required.
         */
        public Builder transitRouterAttachmentId(final com.aliyun.ros.cdk.core.IResolvable transitRouterAttachmentId) {
            this.props.transitRouterAttachmentId(transitRouterAttachmentId);
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
         * @param bandwidthGuaranteeMode This parameter is required.
         */
        public Builder bandwidthGuaranteeMode(final java.lang.String bandwidthGuaranteeMode) {
            this.props.bandwidthGuaranteeMode(bandwidthGuaranteeMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param bandwidthGuaranteeMode This parameter is required.
         */
        public Builder bandwidthGuaranteeMode(final com.aliyun.ros.cdk.core.IResolvable bandwidthGuaranteeMode) {
            this.props.bandwidthGuaranteeMode(bandwidthGuaranteeMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param interRegionTrafficQosPolicyDescription This parameter is required.
         */
        public Builder interRegionTrafficQosPolicyDescription(final java.lang.String interRegionTrafficQosPolicyDescription) {
            this.props.interRegionTrafficQosPolicyDescription(interRegionTrafficQosPolicyDescription);
            return this;
        }
        /**
         * @return {@code this}
         * @param interRegionTrafficQosPolicyDescription This parameter is required.
         */
        public Builder interRegionTrafficQosPolicyDescription(final com.aliyun.ros.cdk.core.IResolvable interRegionTrafficQosPolicyDescription) {
            this.props.interRegionTrafficQosPolicyDescription(interRegionTrafficQosPolicyDescription);
            return this;
        }

        /**
         * @return {@code this}
         * @param interRegionTrafficQosPolicyName This parameter is required.
         */
        public Builder interRegionTrafficQosPolicyName(final java.lang.String interRegionTrafficQosPolicyName) {
            this.props.interRegionTrafficQosPolicyName(interRegionTrafficQosPolicyName);
            return this;
        }
        /**
         * @return {@code this}
         * @param interRegionTrafficQosPolicyName This parameter is required.
         */
        public Builder interRegionTrafficQosPolicyName(final com.aliyun.ros.cdk.core.IResolvable interRegionTrafficQosPolicyName) {
            this.props.interRegionTrafficQosPolicyName(interRegionTrafficQosPolicyName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cen.RosInterRegionTrafficQosPolicy}.
         */
        @Override
        public com.aliyun.ros.cdk.cen.RosInterRegionTrafficQosPolicy build() {
            return new com.aliyun.ros.cdk.cen.RosInterRegionTrafficQosPolicy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
