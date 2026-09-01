package com.aliyun.ros.cdk.ga;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::GA::ResourceAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T09:19:27.867Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.RosResourceAttachment")
public class RosResourceAttachment extends com.aliyun.ros.cdk.core.RosResource {

    protected RosResourceAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosResourceAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ga.RosResourceAttachment.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosResourceAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.RosResourceAttachmentProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAcceleratorId() {
        return software.amazon.jsii.Kernel.get(this, "acceleratorId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAcceleratorId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "acceleratorId", java.util.Objects.requireNonNull(value, "acceleratorId is required"));
    }

    /**
     */
    public void setAcceleratorId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "acceleratorId", java.util.Objects.requireNonNull(value, "acceleratorId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAssociatedResourceId() {
        return software.amazon.jsii.Kernel.get(this, "associatedResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAssociatedResourceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "associatedResourceId", java.util.Objects.requireNonNull(value, "associatedResourceId is required"));
    }

    /**
     */
    public void setAssociatedResourceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "associatedResourceId", java.util.Objects.requireNonNull(value, "associatedResourceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAssociatedResourceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "associatedResourceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAssociatedResourceRegionId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "associatedResourceRegionId", java.util.Objects.requireNonNull(value, "associatedResourceRegionId is required"));
    }

    /**
     */
    public void setAssociatedResourceRegionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "associatedResourceRegionId", java.util.Objects.requireNonNull(value, "associatedResourceRegionId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAssociatedResourceType() {
        return software.amazon.jsii.Kernel.get(this, "associatedResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAssociatedResourceType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "associatedResourceType", java.util.Objects.requireNonNull(value, "associatedResourceType is required"));
    }

    /**
     */
    public void setAssociatedResourceType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "associatedResourceType", java.util.Objects.requireNonNull(value, "associatedResourceType is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAssociatedMode() {
        return software.amazon.jsii.Kernel.get(this, "associatedMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAssociatedMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "associatedMode", value);
    }

    /**
     */
    public void setAssociatedMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "associatedMode", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.RosResourceAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.RosResourceAttachment> {
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
        private final com.aliyun.ros.cdk.ga.RosResourceAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.RosResourceAttachmentProps.Builder();
        }

        /**
         * @return {@code this}
         * @param acceleratorId This parameter is required.
         */
        public Builder acceleratorId(final java.lang.String acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }
        /**
         * @return {@code this}
         * @param acceleratorId This parameter is required.
         */
        public Builder acceleratorId(final com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }

        /**
         * @return {@code this}
         * @param associatedResourceId This parameter is required.
         */
        public Builder associatedResourceId(final java.lang.String associatedResourceId) {
            this.props.associatedResourceId(associatedResourceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param associatedResourceId This parameter is required.
         */
        public Builder associatedResourceId(final com.aliyun.ros.cdk.core.IResolvable associatedResourceId) {
            this.props.associatedResourceId(associatedResourceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param associatedResourceRegionId This parameter is required.
         */
        public Builder associatedResourceRegionId(final java.lang.String associatedResourceRegionId) {
            this.props.associatedResourceRegionId(associatedResourceRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param associatedResourceRegionId This parameter is required.
         */
        public Builder associatedResourceRegionId(final com.aliyun.ros.cdk.core.IResolvable associatedResourceRegionId) {
            this.props.associatedResourceRegionId(associatedResourceRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param associatedResourceType This parameter is required.
         */
        public Builder associatedResourceType(final java.lang.String associatedResourceType) {
            this.props.associatedResourceType(associatedResourceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param associatedResourceType This parameter is required.
         */
        public Builder associatedResourceType(final com.aliyun.ros.cdk.core.IResolvable associatedResourceType) {
            this.props.associatedResourceType(associatedResourceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param associatedMode This parameter is required.
         */
        public Builder associatedMode(final java.lang.String associatedMode) {
            this.props.associatedMode(associatedMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param associatedMode This parameter is required.
         */
        public Builder associatedMode(final com.aliyun.ros.cdk.core.IResolvable associatedMode) {
            this.props.associatedMode(associatedMode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.RosResourceAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.RosResourceAttachment build() {
            return new com.aliyun.ros.cdk.ga.RosResourceAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
