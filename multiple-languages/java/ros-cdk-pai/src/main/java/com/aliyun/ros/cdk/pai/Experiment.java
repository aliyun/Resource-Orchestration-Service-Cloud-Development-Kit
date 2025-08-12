package com.aliyun.ros.cdk.pai;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PAI::Experiment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:49.087Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.Experiment")
public class Experiment extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.pai.IExperiment {

    protected Experiment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Experiment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Experiment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ExperimentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Experiment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ExperimentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Accessibility: Experimental Visibility.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAccessibility() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessibility", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ArtifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArtifactUri() {
        return software.amazon.jsii.Kernel.get(this, "attrArtifactUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: GmtCreateTime is time when this entity is created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExperimentId: ExperimentId is globally unique identifier of the experiment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExperimentId() {
        return software.amazon.jsii.Kernel.get(this, "attrExperimentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExperimentName: Name is the name of the experiment, unique in a namespace.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExperimentName() {
        return software.amazon.jsii.Kernel.get(this, "attrExperimentName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GmtModifiedTime: GmtModifiedTime is time when this entity is modified.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModifiedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrGmtModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Labels: Labels are tags of the experiment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLabels() {
        return software.amazon.jsii.Kernel.get(this, "attrLabels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OwnerId: OwnerId is the user account id which this entity belongs to.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "attrOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TensorboardLogUri: TensorboardLogUri is the default OSS storage path of tensorboard log of trials in the experiment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTensorboardLogUri() {
        return software.amazon.jsii.Kernel.get(this, "attrTensorboardLogUri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserId: UserId is the user account id which created this entity.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WorkspaceId: WorkspaceId is the workspace id which contains the experiment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWorkspaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrWorkspaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pai.ExperimentProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pai.ExperimentProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.Experiment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.Experiment> {
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
        private final com.aliyun.ros.cdk.pai.ExperimentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pai.ExperimentProps.Builder();
        }

        /**
         * Property artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
         * <p>
         * @return {@code this}
         * @param artifactUri Property artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment. This parameter is required.
         */
        public Builder artifactUri(final java.lang.String artifactUri) {
            this.props.artifactUri(artifactUri);
            return this;
        }
        /**
         * Property artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
         * <p>
         * @return {@code this}
         * @param artifactUri Property artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment. This parameter is required.
         */
        public Builder artifactUri(final com.aliyun.ros.cdk.core.IResolvable artifactUri) {
            this.props.artifactUri(artifactUri);
            return this;
        }

        /**
         * Property experimentName: Name is the name of the experiment, unique in a namespace.
         * <p>
         * @return {@code this}
         * @param experimentName Property experimentName: Name is the name of the experiment, unique in a namespace. This parameter is required.
         */
        public Builder experimentName(final java.lang.String experimentName) {
            this.props.experimentName(experimentName);
            return this;
        }
        /**
         * Property experimentName: Name is the name of the experiment, unique in a namespace.
         * <p>
         * @return {@code this}
         * @param experimentName Property experimentName: Name is the name of the experiment, unique in a namespace. This parameter is required.
         */
        public Builder experimentName(final com.aliyun.ros.cdk.core.IResolvable experimentName) {
            this.props.experimentName(experimentName);
            return this;
        }

        /**
         * Property workspaceId: WorkspaceId is the workspace id which contains the experiment.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: WorkspaceId is the workspace id which contains the experiment. This parameter is required.
         */
        public Builder workspaceId(final java.lang.String workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }
        /**
         * Property workspaceId: WorkspaceId is the workspace id which contains the experiment.
         * <p>
         * @return {@code this}
         * @param workspaceId Property workspaceId: WorkspaceId is the workspace id which contains the experiment. This parameter is required.
         */
        public Builder workspaceId(final com.aliyun.ros.cdk.core.IResolvable workspaceId) {
            this.props.workspaceId(workspaceId);
            return this;
        }

        /**
         * Property accessibility: Experimental Visibility.
         * <p>
         * @return {@code this}
         * @param accessibility Property accessibility: Experimental Visibility. This parameter is required.
         */
        public Builder accessibility(final java.lang.String accessibility) {
            this.props.accessibility(accessibility);
            return this;
        }
        /**
         * Property accessibility: Experimental Visibility.
         * <p>
         * @return {@code this}
         * @param accessibility Property accessibility: Experimental Visibility. This parameter is required.
         */
        public Builder accessibility(final com.aliyun.ros.cdk.core.IResolvable accessibility) {
            this.props.accessibility(accessibility);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.Experiment}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.Experiment build() {
            return new com.aliyun.ros.cdk.pai.Experiment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
