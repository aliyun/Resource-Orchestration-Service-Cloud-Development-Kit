package com.aliyun.ros.cdk.ga;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::GA::ResourceAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T09:19:27.807Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ga.$Module.class, fqn = "@alicloud/ros-cdk-ga.ResourceAttachment")
public class ResourceAttachment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ga.IResourceAttachment {

    protected ResourceAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ResourceAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ResourceAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.ResourceAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ResourceAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.ResourceAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ga.ResourceAttachmentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ga.ResourceAttachmentProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ga.ResourceAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ga.ResourceAttachment> {
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
        private final com.aliyun.ros.cdk.ga.ResourceAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ga.ResourceAttachmentProps.Builder();
        }

        /**
         * Property acceleratorId: The ID of the GA instance.
         * <p>
         * @return {@code this}
         * @param acceleratorId Property acceleratorId: The ID of the GA instance. This parameter is required.
         */
        public Builder acceleratorId(final java.lang.String acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }
        /**
         * Property acceleratorId: The ID of the GA instance.
         * <p>
         * @return {@code this}
         * @param acceleratorId Property acceleratorId: The ID of the GA instance. This parameter is required.
         */
        public Builder acceleratorId(final com.aliyun.ros.cdk.core.IResolvable acceleratorId) {
            this.props.acceleratorId(acceleratorId);
            return this;
        }

        /**
         * Property associatedResourceId: The ID of the associated resource.
         * <p>
         * @return {@code this}
         * @param associatedResourceId Property associatedResourceId: The ID of the associated resource. This parameter is required.
         */
        public Builder associatedResourceId(final java.lang.String associatedResourceId) {
            this.props.associatedResourceId(associatedResourceId);
            return this;
        }
        /**
         * Property associatedResourceId: The ID of the associated resource.
         * <p>
         * @return {@code this}
         * @param associatedResourceId Property associatedResourceId: The ID of the associated resource. This parameter is required.
         */
        public Builder associatedResourceId(final com.aliyun.ros.cdk.core.IResolvable associatedResourceId) {
            this.props.associatedResourceId(associatedResourceId);
            return this;
        }

        /**
         * Property associatedResourceRegionId: The region ID of the associated resource.
         * <p>
         * @return {@code this}
         * @param associatedResourceRegionId Property associatedResourceRegionId: The region ID of the associated resource. This parameter is required.
         */
        public Builder associatedResourceRegionId(final java.lang.String associatedResourceRegionId) {
            this.props.associatedResourceRegionId(associatedResourceRegionId);
            return this;
        }
        /**
         * Property associatedResourceRegionId: The region ID of the associated resource.
         * <p>
         * @return {@code this}
         * @param associatedResourceRegionId Property associatedResourceRegionId: The region ID of the associated resource. This parameter is required.
         */
        public Builder associatedResourceRegionId(final com.aliyun.ros.cdk.core.IResolvable associatedResourceRegionId) {
            this.props.associatedResourceRegionId(associatedResourceRegionId);
            return this;
        }

        /**
         * Property associatedResourceType: The type of the associated resource.
         * <p>
         * @return {@code this}
         * @param associatedResourceType Property associatedResourceType: The type of the associated resource. This parameter is required.
         */
        public Builder associatedResourceType(final java.lang.String associatedResourceType) {
            this.props.associatedResourceType(associatedResourceType);
            return this;
        }
        /**
         * Property associatedResourceType: The type of the associated resource.
         * <p>
         * @return {@code this}
         * @param associatedResourceType Property associatedResourceType: The type of the associated resource. This parameter is required.
         */
        public Builder associatedResourceType(final com.aliyun.ros.cdk.core.IResolvable associatedResourceType) {
            this.props.associatedResourceType(associatedResourceType);
            return this;
        }

        /**
         * Property associatedMode: The mode of the association.
         * <p>
         * @return {@code this}
         * @param associatedMode Property associatedMode: The mode of the association. This parameter is required.
         */
        public Builder associatedMode(final java.lang.String associatedMode) {
            this.props.associatedMode(associatedMode);
            return this;
        }
        /**
         * Property associatedMode: The mode of the association.
         * <p>
         * @return {@code this}
         * @param associatedMode Property associatedMode: The mode of the association. This parameter is required.
         */
        public Builder associatedMode(final com.aliyun.ros.cdk.core.IResolvable associatedMode) {
            this.props.associatedMode(associatedMode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ga.ResourceAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.ga.ResourceAttachment build() {
            return new com.aliyun.ros.cdk.ga.ResourceAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
