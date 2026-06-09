package com.aliyun.ros.cdk.cr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CR::ArtifactLifecycleRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:03:09.568Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.ArtifactLifecycleRule")
public class ArtifactLifecycleRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cr.IArtifactLifecycleRule {

    protected ArtifactLifecycleRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ArtifactLifecycleRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ArtifactLifecycleRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.ArtifactLifecycleRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ArtifactLifecycleRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.ArtifactLifecycleRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ArtifactLifecycleRuleId: The ID of the lifecycle management rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArtifactLifecycleRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrArtifactLifecycleRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Auto: Specify whether to automatically execute the lifecycle management rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuto() {
        return software.amazon.jsii.Kernel.get(this, "attrAuto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: Creation time of the lifecycle management rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: ACR Instance ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ModifiedTime: Change time of the lifecycle management rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifiedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NamespaceName: The name of the namespace.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespaceName() {
        return software.amazon.jsii.Kernel.get(this, "attrNamespaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RepoName: The name of the image repository.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRepoName() {
        return software.amazon.jsii.Kernel.get(this, "attrRepoName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RetentionTagCount: The number of images that you want to retain.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRetentionTagCount() {
        return software.amazon.jsii.Kernel.get(this, "attrRetentionTagCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ScheduleTime: The execution cycle of the lifecycle management rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScheduleTime() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Scope: The deletion scope.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrScope() {
        return software.amazon.jsii.Kernel.get(this, "attrScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TagRegexp: The regular expression that is used to indicate which image tags are retained.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTagRegexp() {
        return software.amazon.jsii.Kernel.get(this, "attrTagRegexp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.ArtifactLifecycleRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cr.ArtifactLifecycleRuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cr.ArtifactLifecycleRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cr.ArtifactLifecycleRule> {
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
        private final com.aliyun.ros.cdk.cr.ArtifactLifecycleRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cr.ArtifactLifecycleRuleProps.Builder();
        }

        /**
         * Property auto: Specify whether to automatically execute the lifecycle management rule.
         * <p>
         * @return {@code this}
         * @param auto Property auto: Specify whether to automatically execute the lifecycle management rule. This parameter is required.
         */
        public Builder auto(final java.lang.Boolean auto) {
            this.props.auto(auto);
            return this;
        }
        /**
         * Property auto: Specify whether to automatically execute the lifecycle management rule.
         * <p>
         * @return {@code this}
         * @param auto Property auto: Specify whether to automatically execute the lifecycle management rule. This parameter is required.
         */
        public Builder auto(final com.aliyun.ros.cdk.core.IResolvable auto) {
            this.props.auto(auto);
            return this;
        }

        /**
         * Property instanceId: ACR Instance ID.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: ACR Instance ID. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: ACR Instance ID.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: ACR Instance ID. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property namespaceName: The name of the namespace.
         * <p>
         * @return {@code this}
         * @param namespaceName Property namespaceName: The name of the namespace. This parameter is required.
         */
        public Builder namespaceName(final java.lang.String namespaceName) {
            this.props.namespaceName(namespaceName);
            return this;
        }
        /**
         * Property namespaceName: The name of the namespace.
         * <p>
         * @return {@code this}
         * @param namespaceName Property namespaceName: The name of the namespace. This parameter is required.
         */
        public Builder namespaceName(final com.aliyun.ros.cdk.core.IResolvable namespaceName) {
            this.props.namespaceName(namespaceName);
            return this;
        }

        /**
         * Property repoName: The name of the image repository.
         * <p>
         * @return {@code this}
         * @param repoName Property repoName: The name of the image repository. This parameter is required.
         */
        public Builder repoName(final java.lang.String repoName) {
            this.props.repoName(repoName);
            return this;
        }
        /**
         * Property repoName: The name of the image repository.
         * <p>
         * @return {@code this}
         * @param repoName Property repoName: The name of the image repository. This parameter is required.
         */
        public Builder repoName(final com.aliyun.ros.cdk.core.IResolvable repoName) {
            this.props.repoName(repoName);
            return this;
        }

        /**
         * Property retentionTagCount: The number of images that you want to retain.
         * <p>
         * @return {@code this}
         * @param retentionTagCount Property retentionTagCount: The number of images that you want to retain. This parameter is required.
         */
        public Builder retentionTagCount(final java.lang.Number retentionTagCount) {
            this.props.retentionTagCount(retentionTagCount);
            return this;
        }
        /**
         * Property retentionTagCount: The number of images that you want to retain.
         * <p>
         * @return {@code this}
         * @param retentionTagCount Property retentionTagCount: The number of images that you want to retain. This parameter is required.
         */
        public Builder retentionTagCount(final com.aliyun.ros.cdk.core.IResolvable retentionTagCount) {
            this.props.retentionTagCount(retentionTagCount);
            return this;
        }

        /**
         * Property scheduleTime: The execution cycle of the lifecycle management rule.
         * <p>
         * @return {@code this}
         * @param scheduleTime Property scheduleTime: The execution cycle of the lifecycle management rule. This parameter is required.
         */
        public Builder scheduleTime(final java.lang.String scheduleTime) {
            this.props.scheduleTime(scheduleTime);
            return this;
        }
        /**
         * Property scheduleTime: The execution cycle of the lifecycle management rule.
         * <p>
         * @return {@code this}
         * @param scheduleTime Property scheduleTime: The execution cycle of the lifecycle management rule. This parameter is required.
         */
        public Builder scheduleTime(final com.aliyun.ros.cdk.core.IResolvable scheduleTime) {
            this.props.scheduleTime(scheduleTime);
            return this;
        }

        /**
         * Property scope: The deletion scope.
         * <p>
         * @return {@code this}
         * @param scope Property scope: The deletion scope. This parameter is required.
         */
        public Builder scope(final java.lang.String scope) {
            this.props.scope(scope);
            return this;
        }
        /**
         * Property scope: The deletion scope.
         * <p>
         * @return {@code this}
         * @param scope Property scope: The deletion scope. This parameter is required.
         */
        public Builder scope(final com.aliyun.ros.cdk.core.IResolvable scope) {
            this.props.scope(scope);
            return this;
        }

        /**
         * Property tagRegexp: The regular expression that is used to indicate which image tags are retained.
         * <p>
         * @return {@code this}
         * @param tagRegexp Property tagRegexp: The regular expression that is used to indicate which image tags are retained. This parameter is required.
         */
        public Builder tagRegexp(final java.lang.String tagRegexp) {
            this.props.tagRegexp(tagRegexp);
            return this;
        }
        /**
         * Property tagRegexp: The regular expression that is used to indicate which image tags are retained.
         * <p>
         * @return {@code this}
         * @param tagRegexp Property tagRegexp: The regular expression that is used to indicate which image tags are retained. This parameter is required.
         */
        public Builder tagRegexp(final com.aliyun.ros.cdk.core.IResolvable tagRegexp) {
            this.props.tagRegexp(tagRegexp);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cr.ArtifactLifecycleRule}.
         */
        @Override
        public com.aliyun.ros.cdk.cr.ArtifactLifecycleRule build() {
            return new com.aliyun.ros.cdk.cr.ArtifactLifecycleRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
