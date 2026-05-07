package com.aliyun.ros.cdk.cr;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CR::ArtifactLifecycleRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:47.312Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.RosArtifactLifecycleRule")
public class RosArtifactLifecycleRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosArtifactLifecycleRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosArtifactLifecycleRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cr.RosArtifactLifecycleRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosArtifactLifecycleRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.RosArtifactLifecycleRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrArtifactLifecycleRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrArtifactLifecycleRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAuto() {
        return software.amazon.jsii.Kernel.get(this, "attrAuto", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrModifiedTime() {
        return software.amazon.jsii.Kernel.get(this, "attrModifiedTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNamespaceName() {
        return software.amazon.jsii.Kernel.get(this, "attrNamespaceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRepoName() {
        return software.amazon.jsii.Kernel.get(this, "attrRepoName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRetentionTagCount() {
        return software.amazon.jsii.Kernel.get(this, "attrRetentionTagCount", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScheduleTime() {
        return software.amazon.jsii.Kernel.get(this, "attrScheduleTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScope() {
        return software.amazon.jsii.Kernel.get(this, "attrScope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTagRegexp() {
        return software.amazon.jsii.Kernel.get(this, "attrTagRegexp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAuto() {
        return software.amazon.jsii.Kernel.get(this, "auto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuto(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "auto", java.util.Objects.requireNonNull(value, "auto is required"));
    }

    /**
     */
    public void setAuto(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "auto", java.util.Objects.requireNonNull(value, "auto is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceName() {
        return software.amazon.jsii.Kernel.get(this, "namespaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNamespaceName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "namespaceName", value);
    }

    /**
     */
    public void setNamespaceName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "namespaceName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRepoName() {
        return software.amazon.jsii.Kernel.get(this, "repoName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRepoName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "repoName", value);
    }

    /**
     */
    public void setRepoName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "repoName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRetentionTagCount() {
        return software.amazon.jsii.Kernel.get(this, "retentionTagCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRetentionTagCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "retentionTagCount", value);
    }

    /**
     */
    public void setRetentionTagCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "retentionTagCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScheduleTime() {
        return software.amazon.jsii.Kernel.get(this, "scheduleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScheduleTime(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scheduleTime", value);
    }

    /**
     */
    public void setScheduleTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scheduleTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScope(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scope", value);
    }

    /**
     */
    public void setScope(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scope", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTagRegexp() {
        return software.amazon.jsii.Kernel.get(this, "tagRegexp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTagRegexp(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tagRegexp", value);
    }

    /**
     */
    public void setTagRegexp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tagRegexp", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cr.RosArtifactLifecycleRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cr.RosArtifactLifecycleRule> {
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
        private final com.aliyun.ros.cdk.cr.RosArtifactLifecycleRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cr.RosArtifactLifecycleRuleProps.Builder();
        }

        /**
         * @return {@code this}
         * @param auto This parameter is required.
         */
        public Builder auto(final java.lang.Boolean auto) {
            this.props.auto(auto);
            return this;
        }
        /**
         * @return {@code this}
         * @param auto This parameter is required.
         */
        public Builder auto(final com.aliyun.ros.cdk.core.IResolvable auto) {
            this.props.auto(auto);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param namespaceName This parameter is required.
         */
        public Builder namespaceName(final java.lang.String namespaceName) {
            this.props.namespaceName(namespaceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param namespaceName This parameter is required.
         */
        public Builder namespaceName(final com.aliyun.ros.cdk.core.IResolvable namespaceName) {
            this.props.namespaceName(namespaceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param repoName This parameter is required.
         */
        public Builder repoName(final java.lang.String repoName) {
            this.props.repoName(repoName);
            return this;
        }
        /**
         * @return {@code this}
         * @param repoName This parameter is required.
         */
        public Builder repoName(final com.aliyun.ros.cdk.core.IResolvable repoName) {
            this.props.repoName(repoName);
            return this;
        }

        /**
         * @return {@code this}
         * @param retentionTagCount This parameter is required.
         */
        public Builder retentionTagCount(final java.lang.Number retentionTagCount) {
            this.props.retentionTagCount(retentionTagCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param retentionTagCount This parameter is required.
         */
        public Builder retentionTagCount(final com.aliyun.ros.cdk.core.IResolvable retentionTagCount) {
            this.props.retentionTagCount(retentionTagCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param scheduleTime This parameter is required.
         */
        public Builder scheduleTime(final java.lang.String scheduleTime) {
            this.props.scheduleTime(scheduleTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param scheduleTime This parameter is required.
         */
        public Builder scheduleTime(final com.aliyun.ros.cdk.core.IResolvable scheduleTime) {
            this.props.scheduleTime(scheduleTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param scope This parameter is required.
         */
        public Builder scope(final java.lang.String scope) {
            this.props.scope(scope);
            return this;
        }
        /**
         * @return {@code this}
         * @param scope This parameter is required.
         */
        public Builder scope(final com.aliyun.ros.cdk.core.IResolvable scope) {
            this.props.scope(scope);
            return this;
        }

        /**
         * @return {@code this}
         * @param tagRegexp This parameter is required.
         */
        public Builder tagRegexp(final java.lang.String tagRegexp) {
            this.props.tagRegexp(tagRegexp);
            return this;
        }
        /**
         * @return {@code this}
         * @param tagRegexp This parameter is required.
         */
        public Builder tagRegexp(final com.aliyun.ros.cdk.core.IResolvable tagRegexp) {
            this.props.tagRegexp(tagRegexp);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cr.RosArtifactLifecycleRule}.
         */
        @Override
        public com.aliyun.ros.cdk.cr.RosArtifactLifecycleRule build() {
            return new com.aliyun.ros.cdk.cr.RosArtifactLifecycleRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
