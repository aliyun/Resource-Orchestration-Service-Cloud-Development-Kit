package com.aliyun.ros.cdk.devops;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DEVOPS::PipelineRelations</code>, which is used to associate resources with a pipeline.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:53.802Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.devops.$Module.class, fqn = "@alicloud/ros-cdk-devops.RosPipelineRelations")
public class RosPipelineRelations extends com.aliyun.ros.cdk.core.RosResource {

    protected RosPipelineRelations(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosPipelineRelations(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.devops.RosPipelineRelations.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosPipelineRelations(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.devops.RosPipelineRelationsProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getOrganizationId() {
        return software.amazon.jsii.Kernel.get(this, "organizationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOrganizationId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "organizationId", java.util.Objects.requireNonNull(value, "organizationId is required"));
    }

    /**
     */
    public void setOrganizationId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "organizationId", java.util.Objects.requireNonNull(value, "organizationId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPipelineId() {
        return software.amazon.jsii.Kernel.get(this, "pipelineId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPipelineId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "pipelineId", java.util.Objects.requireNonNull(value, "pipelineId is required"));
    }

    /**
     */
    public void setPipelineId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "pipelineId", java.util.Objects.requireNonNull(value, "pipelineId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRelObjectIds() {
        return software.amazon.jsii.Kernel.get(this, "relObjectIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRelObjectIds(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "relObjectIds", java.util.Objects.requireNonNull(value, "relObjectIds is required"));
    }

    /**
     */
    public void setRelObjectIds(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.Number)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.Number, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "relObjectIds", java.util.Objects.requireNonNull(value, "relObjectIds is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRelObjectType() {
        return software.amazon.jsii.Kernel.get(this, "relObjectType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRelObjectType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "relObjectType", java.util.Objects.requireNonNull(value, "relObjectType is required"));
    }

    /**
     */
    public void setRelObjectType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "relObjectType", java.util.Objects.requireNonNull(value, "relObjectType is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.devops.RosPipelineRelations}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.devops.RosPipelineRelations> {
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
        private final com.aliyun.ros.cdk.devops.RosPipelineRelationsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.devops.RosPipelineRelationsProps.Builder();
        }

        /**
         * @return {@code this}
         * @param organizationId This parameter is required.
         */
        public Builder organizationId(final java.lang.String organizationId) {
            this.props.organizationId(organizationId);
            return this;
        }
        /**
         * @return {@code this}
         * @param organizationId This parameter is required.
         */
        public Builder organizationId(final com.aliyun.ros.cdk.core.IResolvable organizationId) {
            this.props.organizationId(organizationId);
            return this;
        }

        /**
         * @return {@code this}
         * @param pipelineId This parameter is required.
         */
        public Builder pipelineId(final java.lang.Number pipelineId) {
            this.props.pipelineId(pipelineId);
            return this;
        }
        /**
         * @return {@code this}
         * @param pipelineId This parameter is required.
         */
        public Builder pipelineId(final com.aliyun.ros.cdk.core.IResolvable pipelineId) {
            this.props.pipelineId(pipelineId);
            return this;
        }

        /**
         * @return {@code this}
         * @param relObjectIds This parameter is required.
         */
        public Builder relObjectIds(final com.aliyun.ros.cdk.core.IResolvable relObjectIds) {
            this.props.relObjectIds(relObjectIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param relObjectIds This parameter is required.
         */
        public Builder relObjectIds(final java.util.List<? extends java.lang.Object> relObjectIds) {
            this.props.relObjectIds(relObjectIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param relObjectType This parameter is required.
         */
        public Builder relObjectType(final java.lang.String relObjectType) {
            this.props.relObjectType(relObjectType);
            return this;
        }
        /**
         * @return {@code this}
         * @param relObjectType This parameter is required.
         */
        public Builder relObjectType(final com.aliyun.ros.cdk.core.IResolvable relObjectType) {
            this.props.relObjectType(relObjectType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.devops.RosPipelineRelations}.
         */
        @Override
        public com.aliyun.ros.cdk.devops.RosPipelineRelations build() {
            return new com.aliyun.ros.cdk.devops.RosPipelineRelations(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
