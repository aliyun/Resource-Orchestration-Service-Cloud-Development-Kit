package com.aliyun.ros.cdk.cr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CR::RepoSyncRule</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:23.310Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.RepoSyncRule")
public class RepoSyncRule extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cr.IRepoSyncRule {

    protected RepoSyncRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RepoSyncRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public RepoSyncRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.RepoSyncRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public RepoSyncRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.RepoSyncRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SyncRuleId: The ID of the synchronization rule.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSyncRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrSyncRuleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.RepoSyncRuleProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cr.RepoSyncRuleProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cr.RepoSyncRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cr.RepoSyncRule> {
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
        private final com.aliyun.ros.cdk.cr.RepoSyncRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cr.RepoSyncRuleProps.Builder();
        }

        /**
         * Property instanceId: The ID of the CR instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the CR instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the CR instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the CR instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property namespaceName: The name of the CR namespace.
         * <p>
         * @return {@code this}
         * @param namespaceName Property namespaceName: The name of the CR namespace. This parameter is required.
         */
        public Builder namespaceName(final java.lang.String namespaceName) {
            this.props.namespaceName(namespaceName);
            return this;
        }
        /**
         * Property namespaceName: The name of the CR namespace.
         * <p>
         * @return {@code this}
         * @param namespaceName Property namespaceName: The name of the CR namespace. This parameter is required.
         */
        public Builder namespaceName(final com.aliyun.ros.cdk.core.IResolvable namespaceName) {
            this.props.namespaceName(namespaceName);
            return this;
        }

        /**
         * Property syncRuleName: The name of the image sync rule.
         * <p>
         * @return {@code this}
         * @param syncRuleName Property syncRuleName: The name of the image sync rule. This parameter is required.
         */
        public Builder syncRuleName(final java.lang.String syncRuleName) {
            this.props.syncRuleName(syncRuleName);
            return this;
        }
        /**
         * Property syncRuleName: The name of the image sync rule.
         * <p>
         * @return {@code this}
         * @param syncRuleName Property syncRuleName: The name of the image sync rule. This parameter is required.
         */
        public Builder syncRuleName(final com.aliyun.ros.cdk.core.IResolvable syncRuleName) {
            this.props.syncRuleName(syncRuleName);
            return this;
        }

        /**
         * Property syncScope: The synchronization scope.
         * <p>
         * Valid values: REPO, NAMESPACE
         * <p>
         * @return {@code this}
         * @param syncScope Property syncScope: The synchronization scope. This parameter is required.
         */
        public Builder syncScope(final java.lang.String syncScope) {
            this.props.syncScope(syncScope);
            return this;
        }
        /**
         * Property syncScope: The synchronization scope.
         * <p>
         * Valid values: REPO, NAMESPACE
         * <p>
         * @return {@code this}
         * @param syncScope Property syncScope: The synchronization scope. This parameter is required.
         */
        public Builder syncScope(final com.aliyun.ros.cdk.core.IResolvable syncScope) {
            this.props.syncScope(syncScope);
            return this;
        }

        /**
         * Property syncTrigger: The mode of triggering the synchronization rule.
         * <p>
         * Valid values: INITIATIVE, PASSIVE
         * <p>
         * @return {@code this}
         * @param syncTrigger Property syncTrigger: The mode of triggering the synchronization rule. This parameter is required.
         */
        public Builder syncTrigger(final java.lang.String syncTrigger) {
            this.props.syncTrigger(syncTrigger);
            return this;
        }
        /**
         * Property syncTrigger: The mode of triggering the synchronization rule.
         * <p>
         * Valid values: INITIATIVE, PASSIVE
         * <p>
         * @return {@code this}
         * @param syncTrigger Property syncTrigger: The mode of triggering the synchronization rule. This parameter is required.
         */
        public Builder syncTrigger(final com.aliyun.ros.cdk.core.IResolvable syncTrigger) {
            this.props.syncTrigger(syncTrigger);
            return this;
        }

        /**
         * Property targetInstanceId: The ID of the destination instance.
         * <p>
         * @return {@code this}
         * @param targetInstanceId Property targetInstanceId: The ID of the destination instance. This parameter is required.
         */
        public Builder targetInstanceId(final java.lang.String targetInstanceId) {
            this.props.targetInstanceId(targetInstanceId);
            return this;
        }
        /**
         * Property targetInstanceId: The ID of the destination instance.
         * <p>
         * @return {@code this}
         * @param targetInstanceId Property targetInstanceId: The ID of the destination instance. This parameter is required.
         */
        public Builder targetInstanceId(final com.aliyun.ros.cdk.core.IResolvable targetInstanceId) {
            this.props.targetInstanceId(targetInstanceId);
            return this;
        }

        /**
         * Property targetNamespaceName: The name of the destination namespace.
         * <p>
         * @return {@code this}
         * @param targetNamespaceName Property targetNamespaceName: The name of the destination namespace. This parameter is required.
         */
        public Builder targetNamespaceName(final java.lang.String targetNamespaceName) {
            this.props.targetNamespaceName(targetNamespaceName);
            return this;
        }
        /**
         * Property targetNamespaceName: The name of the destination namespace.
         * <p>
         * @return {@code this}
         * @param targetNamespaceName Property targetNamespaceName: The name of the destination namespace. This parameter is required.
         */
        public Builder targetNamespaceName(final com.aliyun.ros.cdk.core.IResolvable targetNamespaceName) {
            this.props.targetNamespaceName(targetNamespaceName);
            return this;
        }

        /**
         * Property targetRegionId: The ID of the destination region.
         * <p>
         * @return {@code this}
         * @param targetRegionId Property targetRegionId: The ID of the destination region. This parameter is required.
         */
        public Builder targetRegionId(final java.lang.String targetRegionId) {
            this.props.targetRegionId(targetRegionId);
            return this;
        }
        /**
         * Property targetRegionId: The ID of the destination region.
         * <p>
         * @return {@code this}
         * @param targetRegionId Property targetRegionId: The ID of the destination region. This parameter is required.
         */
        public Builder targetRegionId(final com.aliyun.ros.cdk.core.IResolvable targetRegionId) {
            this.props.targetRegionId(targetRegionId);
            return this;
        }

        /**
         * Property repoName: The name of the repository.
         * <p>
         * This parameter is required when SyncScope is REPO.
         * <p>
         * @return {@code this}
         * @param repoName Property repoName: The name of the repository. This parameter is required.
         */
        public Builder repoName(final java.lang.String repoName) {
            this.props.repoName(repoName);
            return this;
        }
        /**
         * Property repoName: The name of the repository.
         * <p>
         * This parameter is required when SyncScope is REPO.
         * <p>
         * @return {@code this}
         * @param repoName Property repoName: The name of the repository. This parameter is required.
         */
        public Builder repoName(final com.aliyun.ros.cdk.core.IResolvable repoName) {
            this.props.repoName(repoName);
            return this;
        }

        /**
         * Property repoNameFilter: The regular expression that is used to filter repositories.
         * <p>
         * @return {@code this}
         * @param repoNameFilter Property repoNameFilter: The regular expression that is used to filter repositories. This parameter is required.
         */
        public Builder repoNameFilter(final java.lang.String repoNameFilter) {
            this.props.repoNameFilter(repoNameFilter);
            return this;
        }
        /**
         * Property repoNameFilter: The regular expression that is used to filter repositories.
         * <p>
         * @return {@code this}
         * @param repoNameFilter Property repoNameFilter: The regular expression that is used to filter repositories. This parameter is required.
         */
        public Builder repoNameFilter(final com.aliyun.ros.cdk.core.IResolvable repoNameFilter) {
            this.props.repoNameFilter(repoNameFilter);
            return this;
        }

        /**
         * Property tagFilter: The tag filter.
         * <p>
         * Default value: .*
         * <p>
         * @return {@code this}
         * @param tagFilter Property tagFilter: The tag filter. This parameter is required.
         */
        public Builder tagFilter(final java.lang.String tagFilter) {
            this.props.tagFilter(tagFilter);
            return this;
        }
        /**
         * Property tagFilter: The tag filter.
         * <p>
         * Default value: .*
         * <p>
         * @return {@code this}
         * @param tagFilter Property tagFilter: The tag filter. This parameter is required.
         */
        public Builder tagFilter(final com.aliyun.ros.cdk.core.IResolvable tagFilter) {
            this.props.tagFilter(tagFilter);
            return this;
        }

        /**
         * Property targetRepoName: The name of the destination image repository.
         * <p>
         * This parameter is optional.
         * <p>
         * @return {@code this}
         * @param targetRepoName Property targetRepoName: The name of the destination image repository. This parameter is required.
         */
        public Builder targetRepoName(final java.lang.String targetRepoName) {
            this.props.targetRepoName(targetRepoName);
            return this;
        }
        /**
         * Property targetRepoName: The name of the destination image repository.
         * <p>
         * This parameter is optional.
         * <p>
         * @return {@code this}
         * @param targetRepoName Property targetRepoName: The name of the destination image repository. This parameter is required.
         */
        public Builder targetRepoName(final com.aliyun.ros.cdk.core.IResolvable targetRepoName) {
            this.props.targetRepoName(targetRepoName);
            return this;
        }

        /**
         * Property targetUserId: The user ID (UID) of the account to which the destination instance belongs.
         * <p>
         * @return {@code this}
         * @param targetUserId Property targetUserId: The user ID (UID) of the account to which the destination instance belongs. This parameter is required.
         */
        public Builder targetUserId(final java.lang.String targetUserId) {
            this.props.targetUserId(targetUserId);
            return this;
        }
        /**
         * Property targetUserId: The user ID (UID) of the account to which the destination instance belongs.
         * <p>
         * @return {@code this}
         * @param targetUserId Property targetUserId: The user ID (UID) of the account to which the destination instance belongs. This parameter is required.
         */
        public Builder targetUserId(final com.aliyun.ros.cdk.core.IResolvable targetUserId) {
            this.props.targetUserId(targetUserId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cr.RepoSyncRule}.
         */
        @Override
        public com.aliyun.ros.cdk.cr.RepoSyncRule build() {
            return new com.aliyun.ros.cdk.cr.RepoSyncRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
