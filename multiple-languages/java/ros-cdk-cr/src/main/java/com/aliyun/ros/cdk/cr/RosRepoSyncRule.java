package com.aliyun.ros.cdk.cr;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CR::RepoSyncRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:47.319Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.RosRepoSyncRule")
public class RosRepoSyncRule extends com.aliyun.ros.cdk.core.RosResource {

    protected RosRepoSyncRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosRepoSyncRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cr.RosRepoSyncRule.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosRepoSyncRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.RosRepoSyncRuleProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSyncRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrSyncRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceName() {
        return software.amazon.jsii.Kernel.get(this, "namespaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNamespaceName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "namespaceName", java.util.Objects.requireNonNull(value, "namespaceName is required"));
    }

    /**
     */
    public void setNamespaceName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "namespaceName", java.util.Objects.requireNonNull(value, "namespaceName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSyncRuleName() {
        return software.amazon.jsii.Kernel.get(this, "syncRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSyncRuleName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "syncRuleName", java.util.Objects.requireNonNull(value, "syncRuleName is required"));
    }

    /**
     */
    public void setSyncRuleName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "syncRuleName", java.util.Objects.requireNonNull(value, "syncRuleName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSyncScope() {
        return software.amazon.jsii.Kernel.get(this, "syncScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSyncScope(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "syncScope", java.util.Objects.requireNonNull(value, "syncScope is required"));
    }

    /**
     */
    public void setSyncScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "syncScope", java.util.Objects.requireNonNull(value, "syncScope is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSyncTrigger() {
        return software.amazon.jsii.Kernel.get(this, "syncTrigger", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSyncTrigger(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "syncTrigger", java.util.Objects.requireNonNull(value, "syncTrigger is required"));
    }

    /**
     */
    public void setSyncTrigger(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "syncTrigger", java.util.Objects.requireNonNull(value, "syncTrigger is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "targetInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetInstanceId", java.util.Objects.requireNonNull(value, "targetInstanceId is required"));
    }

    /**
     */
    public void setTargetInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetInstanceId", java.util.Objects.requireNonNull(value, "targetInstanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetNamespaceName() {
        return software.amazon.jsii.Kernel.get(this, "targetNamespaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetNamespaceName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetNamespaceName", java.util.Objects.requireNonNull(value, "targetNamespaceName is required"));
    }

    /**
     */
    public void setTargetNamespaceName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetNamespaceName", java.util.Objects.requireNonNull(value, "targetNamespaceName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTargetRegionId() {
        return software.amazon.jsii.Kernel.get(this, "targetRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetRegionId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetRegionId", java.util.Objects.requireNonNull(value, "targetRegionId is required"));
    }

    /**
     */
    public void setTargetRegionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetRegionId", java.util.Objects.requireNonNull(value, "targetRegionId is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getRepoNameFilter() {
        return software.amazon.jsii.Kernel.get(this, "repoNameFilter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRepoNameFilter(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "repoNameFilter", value);
    }

    /**
     */
    public void setRepoNameFilter(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "repoNameFilter", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTagFilter() {
        return software.amazon.jsii.Kernel.get(this, "tagFilter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTagFilter(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tagFilter", value);
    }

    /**
     */
    public void setTagFilter(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tagFilter", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTargetRepoName() {
        return software.amazon.jsii.Kernel.get(this, "targetRepoName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetRepoName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetRepoName", value);
    }

    /**
     */
    public void setTargetRepoName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetRepoName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTargetUserId() {
        return software.amazon.jsii.Kernel.get(this, "targetUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetUserId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetUserId", value);
    }

    /**
     */
    public void setTargetUserId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetUserId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cr.RosRepoSyncRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cr.RosRepoSyncRule> {
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
        private final com.aliyun.ros.cdk.cr.RosRepoSyncRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cr.RosRepoSyncRuleProps.Builder();
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
         * @param syncRuleName This parameter is required.
         */
        public Builder syncRuleName(final java.lang.String syncRuleName) {
            this.props.syncRuleName(syncRuleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param syncRuleName This parameter is required.
         */
        public Builder syncRuleName(final com.aliyun.ros.cdk.core.IResolvable syncRuleName) {
            this.props.syncRuleName(syncRuleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param syncScope This parameter is required.
         */
        public Builder syncScope(final java.lang.String syncScope) {
            this.props.syncScope(syncScope);
            return this;
        }
        /**
         * @return {@code this}
         * @param syncScope This parameter is required.
         */
        public Builder syncScope(final com.aliyun.ros.cdk.core.IResolvable syncScope) {
            this.props.syncScope(syncScope);
            return this;
        }

        /**
         * @return {@code this}
         * @param syncTrigger This parameter is required.
         */
        public Builder syncTrigger(final java.lang.String syncTrigger) {
            this.props.syncTrigger(syncTrigger);
            return this;
        }
        /**
         * @return {@code this}
         * @param syncTrigger This parameter is required.
         */
        public Builder syncTrigger(final com.aliyun.ros.cdk.core.IResolvable syncTrigger) {
            this.props.syncTrigger(syncTrigger);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetInstanceId This parameter is required.
         */
        public Builder targetInstanceId(final java.lang.String targetInstanceId) {
            this.props.targetInstanceId(targetInstanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetInstanceId This parameter is required.
         */
        public Builder targetInstanceId(final com.aliyun.ros.cdk.core.IResolvable targetInstanceId) {
            this.props.targetInstanceId(targetInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetNamespaceName This parameter is required.
         */
        public Builder targetNamespaceName(final java.lang.String targetNamespaceName) {
            this.props.targetNamespaceName(targetNamespaceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetNamespaceName This parameter is required.
         */
        public Builder targetNamespaceName(final com.aliyun.ros.cdk.core.IResolvable targetNamespaceName) {
            this.props.targetNamespaceName(targetNamespaceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetRegionId This parameter is required.
         */
        public Builder targetRegionId(final java.lang.String targetRegionId) {
            this.props.targetRegionId(targetRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetRegionId This parameter is required.
         */
        public Builder targetRegionId(final com.aliyun.ros.cdk.core.IResolvable targetRegionId) {
            this.props.targetRegionId(targetRegionId);
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
         * @param repoNameFilter This parameter is required.
         */
        public Builder repoNameFilter(final java.lang.String repoNameFilter) {
            this.props.repoNameFilter(repoNameFilter);
            return this;
        }
        /**
         * @return {@code this}
         * @param repoNameFilter This parameter is required.
         */
        public Builder repoNameFilter(final com.aliyun.ros.cdk.core.IResolvable repoNameFilter) {
            this.props.repoNameFilter(repoNameFilter);
            return this;
        }

        /**
         * @return {@code this}
         * @param tagFilter This parameter is required.
         */
        public Builder tagFilter(final java.lang.String tagFilter) {
            this.props.tagFilter(tagFilter);
            return this;
        }
        /**
         * @return {@code this}
         * @param tagFilter This parameter is required.
         */
        public Builder tagFilter(final com.aliyun.ros.cdk.core.IResolvable tagFilter) {
            this.props.tagFilter(tagFilter);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetRepoName This parameter is required.
         */
        public Builder targetRepoName(final java.lang.String targetRepoName) {
            this.props.targetRepoName(targetRepoName);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetRepoName This parameter is required.
         */
        public Builder targetRepoName(final com.aliyun.ros.cdk.core.IResolvable targetRepoName) {
            this.props.targetRepoName(targetRepoName);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetUserId This parameter is required.
         */
        public Builder targetUserId(final java.lang.String targetUserId) {
            this.props.targetUserId(targetUserId);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetUserId This parameter is required.
         */
        public Builder targetUserId(final com.aliyun.ros.cdk.core.IResolvable targetUserId) {
            this.props.targetUserId(targetUserId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cr.RosRepoSyncRule}.
         */
        @Override
        public com.aliyun.ros.cdk.cr.RosRepoSyncRule build() {
            return new com.aliyun.ros.cdk.cr.RosRepoSyncRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
