package com.aliyun.ros.cdk.pai;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAI::Run</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:27.580Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.Run")
public class Run extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.pai.IRun {

    protected Run(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Run(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Run(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.RunProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Run(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.RunProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Accessibility: Resource attribute fields representing visibility.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The creation time of the Run.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExperimentId: Resource attribute field of the experiment ID to which Run belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExperimentId() {
        return software.amazon.jsii.Kernel.get(this, "attrExperimentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GmtModifiedTime: Resource attribute fields representing edit time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrGmtModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Labels: Run attribute field representing the run tag.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
        return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Metrics: Resource attribute field representing the run metric.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMetrics() {
        return software.amazon.jsii.Kernel.get(this, "attrMetrics", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OwnerId: Resource attribute field representing owner.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "attrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Params: Resource attribute field representing the run parameter.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrParams() {
        return software.amazon.jsii.Kernel.get(this, "attrParams", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RunId: The ID of the Run.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunId() {
        return software.amazon.jsii.Kernel.get(this, "attrRunId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RunName: The name of the Run.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunName() {
        return software.amazon.jsii.Kernel.get(this, "attrRunName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceId: Attribute Resource field representing the source task ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceType: Run attribute fields representing the source type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserId: Run attribute field representing creator ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WorkspaceId: Resource attribute field of the workspace ID to which Run belongs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.RunProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.RunProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.Run}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.Run> {
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
        private final com.aliyun.ros.cdk.pai.RunProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.RunProps.Builder();
        }

        /**
         * Property experimentId: Resource attribute field of the experiment ID to which Run belongs.
         * <p>
         * @return {@code this}
         * @param experimentId Property experimentId: Resource attribute field of the experiment ID to which Run belongs. This parameter is required.
         */
        public Builder experimentId(final java.lang.String experimentId) {
            this.props.experimentId(experimentId);
            return this;
        }
        /**
         * Property experimentId: Resource attribute field of the experiment ID to which Run belongs.
         * <p>
         * @return {@code this}
         * @param experimentId Property experimentId: Resource attribute field of the experiment ID to which Run belongs. This parameter is required.
         */
        public Builder experimentId(final com.aliyun.ros.cdk.core.IResolvable experimentId) {
            this.props.experimentId(experimentId);
            return this;
        }

        /**
         * Property runName: The name of the Run.
         * <p>
         * @return {@code this}
         * @param runName Property runName: The name of the Run. This parameter is required.
         */
        public Builder runName(final java.lang.String runName) {
            this.props.runName(runName);
            return this;
        }
        /**
         * Property runName: The name of the Run.
         * <p>
         * @return {@code this}
         * @param runName Property runName: The name of the Run. This parameter is required.
         */
        public Builder runName(final com.aliyun.ros.cdk.core.IResolvable runName) {
            this.props.runName(runName);
            return this;
        }

        /**
         * Property sourceId: Attribute Resource field representing the source task ID.
         * <p>
         * @return {@code this}
         * @param sourceId Property sourceId: Attribute Resource field representing the source task ID. This parameter is required.
         */
        public Builder sourceId(final java.lang.String sourceId) {
            this.props.sourceId(sourceId);
            return this;
        }
        /**
         * Property sourceId: Attribute Resource field representing the source task ID.
         * <p>
         * @return {@code this}
         * @param sourceId Property sourceId: Attribute Resource field representing the source task ID. This parameter is required.
         */
        public Builder sourceId(final com.aliyun.ros.cdk.core.IResolvable sourceId) {
            this.props.sourceId(sourceId);
            return this;
        }

        /**
         * Property sourceType: Resource attribute fields representing the source type.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Resource attribute fields representing the source type. This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * Property sourceType: Resource attribute fields representing the source type.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: Resource attribute fields representing the source type. This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.Run}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.Run build() {
            return new com.aliyun.ros.cdk.pai.Run(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
