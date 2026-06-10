package com.aliyun.ros.cdk.cr;

/**
 * Properties for defining a <code>RepoSyncRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-reposyncrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:03:09.622Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.RepoSyncRuleProps")
@software.amazon.jsii.Jsii.Proxy(RepoSyncRuleProps.Jsii$Proxy.class)
public interface RepoSyncRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: The ID of the CR instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property namespaceName: The name of the CR namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespaceName();

    /**
     * Property syncRuleName: The name of the image sync rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSyncRuleName();

    /**
     * Property syncScope: The synchronization scope.
     * <p>
     * Valid values: REPO, NAMESPACE
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSyncScope();

    /**
     * Property syncTrigger: The mode of triggering the synchronization rule.
     * <p>
     * Valid values: INITIATIVE, PASSIVE
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSyncTrigger();

    /**
     * Property targetInstanceId: The ID of the destination instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetInstanceId();

    /**
     * Property targetNamespaceName: The name of the destination namespace.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetNamespaceName();

    /**
     * Property targetRegionId: The ID of the destination region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetRegionId();

    /**
     * Property repoName: The name of the repository.
     * <p>
     * This parameter is required when SyncScope is REPO.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRepoName() {
        return null;
    }

    /**
     * Property repoNameFilter: The regular expression that is used to filter repositories.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRepoNameFilter() {
        return null;
    }

    /**
     * Property tagFilter: The tag filter.
     * <p>
     * Default value: .*
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTagFilter() {
        return null;
    }

    /**
     * Property targetRepoName: The name of the destination image repository.
     * <p>
     * This parameter is optional.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetRepoName() {
        return null;
    }

    /**
     * Property targetUserId: The user ID (UID) of the account to which the destination instance belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetUserId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RepoSyncRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RepoSyncRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RepoSyncRuleProps> {
        java.lang.Object instanceId;
        java.lang.Object namespaceName;
        java.lang.Object syncRuleName;
        java.lang.Object syncScope;
        java.lang.Object syncTrigger;
        java.lang.Object targetInstanceId;
        java.lang.Object targetNamespaceName;
        java.lang.Object targetRegionId;
        java.lang.Object repoName;
        java.lang.Object repoNameFilter;
        java.lang.Object tagFilter;
        java.lang.Object targetRepoName;
        java.lang.Object targetUserId;

        /**
         * Sets the value of {@link RepoSyncRuleProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the CR instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the CR instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getNamespaceName}
         * @param namespaceName Property namespaceName: The name of the CR namespace. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceName(java.lang.String namespaceName) {
            this.namespaceName = namespaceName;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getNamespaceName}
         * @param namespaceName Property namespaceName: The name of the CR namespace. This parameter is required.
         * @return {@code this}
         */
        public Builder namespaceName(com.aliyun.ros.cdk.core.IResolvable namespaceName) {
            this.namespaceName = namespaceName;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getSyncRuleName}
         * @param syncRuleName Property syncRuleName: The name of the image sync rule. This parameter is required.
         * @return {@code this}
         */
        public Builder syncRuleName(java.lang.String syncRuleName) {
            this.syncRuleName = syncRuleName;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getSyncRuleName}
         * @param syncRuleName Property syncRuleName: The name of the image sync rule. This parameter is required.
         * @return {@code this}
         */
        public Builder syncRuleName(com.aliyun.ros.cdk.core.IResolvable syncRuleName) {
            this.syncRuleName = syncRuleName;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getSyncScope}
         * @param syncScope Property syncScope: The synchronization scope. This parameter is required.
         *                  Valid values: REPO, NAMESPACE
         * @return {@code this}
         */
        public Builder syncScope(java.lang.String syncScope) {
            this.syncScope = syncScope;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getSyncScope}
         * @param syncScope Property syncScope: The synchronization scope. This parameter is required.
         *                  Valid values: REPO, NAMESPACE
         * @return {@code this}
         */
        public Builder syncScope(com.aliyun.ros.cdk.core.IResolvable syncScope) {
            this.syncScope = syncScope;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getSyncTrigger}
         * @param syncTrigger Property syncTrigger: The mode of triggering the synchronization rule. This parameter is required.
         *                    Valid values: INITIATIVE, PASSIVE
         * @return {@code this}
         */
        public Builder syncTrigger(java.lang.String syncTrigger) {
            this.syncTrigger = syncTrigger;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getSyncTrigger}
         * @param syncTrigger Property syncTrigger: The mode of triggering the synchronization rule. This parameter is required.
         *                    Valid values: INITIATIVE, PASSIVE
         * @return {@code this}
         */
        public Builder syncTrigger(com.aliyun.ros.cdk.core.IResolvable syncTrigger) {
            this.syncTrigger = syncTrigger;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getTargetInstanceId}
         * @param targetInstanceId Property targetInstanceId: The ID of the destination instance. This parameter is required.
         * @return {@code this}
         */
        public Builder targetInstanceId(java.lang.String targetInstanceId) {
            this.targetInstanceId = targetInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getTargetInstanceId}
         * @param targetInstanceId Property targetInstanceId: The ID of the destination instance. This parameter is required.
         * @return {@code this}
         */
        public Builder targetInstanceId(com.aliyun.ros.cdk.core.IResolvable targetInstanceId) {
            this.targetInstanceId = targetInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getTargetNamespaceName}
         * @param targetNamespaceName Property targetNamespaceName: The name of the destination namespace. This parameter is required.
         * @return {@code this}
         */
        public Builder targetNamespaceName(java.lang.String targetNamespaceName) {
            this.targetNamespaceName = targetNamespaceName;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getTargetNamespaceName}
         * @param targetNamespaceName Property targetNamespaceName: The name of the destination namespace. This parameter is required.
         * @return {@code this}
         */
        public Builder targetNamespaceName(com.aliyun.ros.cdk.core.IResolvable targetNamespaceName) {
            this.targetNamespaceName = targetNamespaceName;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getTargetRegionId}
         * @param targetRegionId Property targetRegionId: The ID of the destination region. This parameter is required.
         * @return {@code this}
         */
        public Builder targetRegionId(java.lang.String targetRegionId) {
            this.targetRegionId = targetRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getTargetRegionId}
         * @param targetRegionId Property targetRegionId: The ID of the destination region. This parameter is required.
         * @return {@code this}
         */
        public Builder targetRegionId(com.aliyun.ros.cdk.core.IResolvable targetRegionId) {
            this.targetRegionId = targetRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getRepoName}
         * @param repoName Property repoName: The name of the repository.
         *                 This parameter is required when SyncScope is REPO.
         * @return {@code this}
         */
        public Builder repoName(java.lang.String repoName) {
            this.repoName = repoName;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getRepoName}
         * @param repoName Property repoName: The name of the repository.
         *                 This parameter is required when SyncScope is REPO.
         * @return {@code this}
         */
        public Builder repoName(com.aliyun.ros.cdk.core.IResolvable repoName) {
            this.repoName = repoName;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getRepoNameFilter}
         * @param repoNameFilter Property repoNameFilter: The regular expression that is used to filter repositories.
         * @return {@code this}
         */
        public Builder repoNameFilter(java.lang.String repoNameFilter) {
            this.repoNameFilter = repoNameFilter;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getRepoNameFilter}
         * @param repoNameFilter Property repoNameFilter: The regular expression that is used to filter repositories.
         * @return {@code this}
         */
        public Builder repoNameFilter(com.aliyun.ros.cdk.core.IResolvable repoNameFilter) {
            this.repoNameFilter = repoNameFilter;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getTagFilter}
         * @param tagFilter Property tagFilter: The tag filter.
         *                  Default value: .*
         * @return {@code this}
         */
        public Builder tagFilter(java.lang.String tagFilter) {
            this.tagFilter = tagFilter;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getTagFilter}
         * @param tagFilter Property tagFilter: The tag filter.
         *                  Default value: .*
         * @return {@code this}
         */
        public Builder tagFilter(com.aliyun.ros.cdk.core.IResolvable tagFilter) {
            this.tagFilter = tagFilter;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getTargetRepoName}
         * @param targetRepoName Property targetRepoName: The name of the destination image repository.
         *                       This parameter is optional.
         * @return {@code this}
         */
        public Builder targetRepoName(java.lang.String targetRepoName) {
            this.targetRepoName = targetRepoName;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getTargetRepoName}
         * @param targetRepoName Property targetRepoName: The name of the destination image repository.
         *                       This parameter is optional.
         * @return {@code this}
         */
        public Builder targetRepoName(com.aliyun.ros.cdk.core.IResolvable targetRepoName) {
            this.targetRepoName = targetRepoName;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getTargetUserId}
         * @param targetUserId Property targetUserId: The user ID (UID) of the account to which the destination instance belongs.
         * @return {@code this}
         */
        public Builder targetUserId(java.lang.String targetUserId) {
            this.targetUserId = targetUserId;
            return this;
        }

        /**
         * Sets the value of {@link RepoSyncRuleProps#getTargetUserId}
         * @param targetUserId Property targetUserId: The user ID (UID) of the account to which the destination instance belongs.
         * @return {@code this}
         */
        public Builder targetUserId(com.aliyun.ros.cdk.core.IResolvable targetUserId) {
            this.targetUserId = targetUserId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RepoSyncRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RepoSyncRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RepoSyncRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RepoSyncRuleProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object namespaceName;
        private final java.lang.Object syncRuleName;
        private final java.lang.Object syncScope;
        private final java.lang.Object syncTrigger;
        private final java.lang.Object targetInstanceId;
        private final java.lang.Object targetNamespaceName;
        private final java.lang.Object targetRegionId;
        private final java.lang.Object repoName;
        private final java.lang.Object repoNameFilter;
        private final java.lang.Object tagFilter;
        private final java.lang.Object targetRepoName;
        private final java.lang.Object targetUserId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceName = software.amazon.jsii.Kernel.get(this, "namespaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.syncRuleName = software.amazon.jsii.Kernel.get(this, "syncRuleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.syncScope = software.amazon.jsii.Kernel.get(this, "syncScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.syncTrigger = software.amazon.jsii.Kernel.get(this, "syncTrigger", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetInstanceId = software.amazon.jsii.Kernel.get(this, "targetInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetNamespaceName = software.amazon.jsii.Kernel.get(this, "targetNamespaceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetRegionId = software.amazon.jsii.Kernel.get(this, "targetRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repoName = software.amazon.jsii.Kernel.get(this, "repoName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repoNameFilter = software.amazon.jsii.Kernel.get(this, "repoNameFilter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tagFilter = software.amazon.jsii.Kernel.get(this, "tagFilter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetRepoName = software.amazon.jsii.Kernel.get(this, "targetRepoName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetUserId = software.amazon.jsii.Kernel.get(this, "targetUserId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.namespaceName = java.util.Objects.requireNonNull(builder.namespaceName, "namespaceName is required");
            this.syncRuleName = java.util.Objects.requireNonNull(builder.syncRuleName, "syncRuleName is required");
            this.syncScope = java.util.Objects.requireNonNull(builder.syncScope, "syncScope is required");
            this.syncTrigger = java.util.Objects.requireNonNull(builder.syncTrigger, "syncTrigger is required");
            this.targetInstanceId = java.util.Objects.requireNonNull(builder.targetInstanceId, "targetInstanceId is required");
            this.targetNamespaceName = java.util.Objects.requireNonNull(builder.targetNamespaceName, "targetNamespaceName is required");
            this.targetRegionId = java.util.Objects.requireNonNull(builder.targetRegionId, "targetRegionId is required");
            this.repoName = builder.repoName;
            this.repoNameFilter = builder.repoNameFilter;
            this.tagFilter = builder.tagFilter;
            this.targetRepoName = builder.targetRepoName;
            this.targetUserId = builder.targetUserId;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getNamespaceName() {
            return this.namespaceName;
        }

        @Override
        public final java.lang.Object getSyncRuleName() {
            return this.syncRuleName;
        }

        @Override
        public final java.lang.Object getSyncScope() {
            return this.syncScope;
        }

        @Override
        public final java.lang.Object getSyncTrigger() {
            return this.syncTrigger;
        }

        @Override
        public final java.lang.Object getTargetInstanceId() {
            return this.targetInstanceId;
        }

        @Override
        public final java.lang.Object getTargetNamespaceName() {
            return this.targetNamespaceName;
        }

        @Override
        public final java.lang.Object getTargetRegionId() {
            return this.targetRegionId;
        }

        @Override
        public final java.lang.Object getRepoName() {
            return this.repoName;
        }

        @Override
        public final java.lang.Object getRepoNameFilter() {
            return this.repoNameFilter;
        }

        @Override
        public final java.lang.Object getTagFilter() {
            return this.tagFilter;
        }

        @Override
        public final java.lang.Object getTargetRepoName() {
            return this.targetRepoName;
        }

        @Override
        public final java.lang.Object getTargetUserId() {
            return this.targetUserId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("namespaceName", om.valueToTree(this.getNamespaceName()));
            data.set("syncRuleName", om.valueToTree(this.getSyncRuleName()));
            data.set("syncScope", om.valueToTree(this.getSyncScope()));
            data.set("syncTrigger", om.valueToTree(this.getSyncTrigger()));
            data.set("targetInstanceId", om.valueToTree(this.getTargetInstanceId()));
            data.set("targetNamespaceName", om.valueToTree(this.getTargetNamespaceName()));
            data.set("targetRegionId", om.valueToTree(this.getTargetRegionId()));
            if (this.getRepoName() != null) {
                data.set("repoName", om.valueToTree(this.getRepoName()));
            }
            if (this.getRepoNameFilter() != null) {
                data.set("repoNameFilter", om.valueToTree(this.getRepoNameFilter()));
            }
            if (this.getTagFilter() != null) {
                data.set("tagFilter", om.valueToTree(this.getTagFilter()));
            }
            if (this.getTargetRepoName() != null) {
                data.set("targetRepoName", om.valueToTree(this.getTargetRepoName()));
            }
            if (this.getTargetUserId() != null) {
                data.set("targetUserId", om.valueToTree(this.getTargetUserId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cr.RepoSyncRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RepoSyncRuleProps.Jsii$Proxy that = (RepoSyncRuleProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!namespaceName.equals(that.namespaceName)) return false;
            if (!syncRuleName.equals(that.syncRuleName)) return false;
            if (!syncScope.equals(that.syncScope)) return false;
            if (!syncTrigger.equals(that.syncTrigger)) return false;
            if (!targetInstanceId.equals(that.targetInstanceId)) return false;
            if (!targetNamespaceName.equals(that.targetNamespaceName)) return false;
            if (!targetRegionId.equals(that.targetRegionId)) return false;
            if (this.repoName != null ? !this.repoName.equals(that.repoName) : that.repoName != null) return false;
            if (this.repoNameFilter != null ? !this.repoNameFilter.equals(that.repoNameFilter) : that.repoNameFilter != null) return false;
            if (this.tagFilter != null ? !this.tagFilter.equals(that.tagFilter) : that.tagFilter != null) return false;
            if (this.targetRepoName != null ? !this.targetRepoName.equals(that.targetRepoName) : that.targetRepoName != null) return false;
            return this.targetUserId != null ? this.targetUserId.equals(that.targetUserId) : that.targetUserId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.namespaceName.hashCode());
            result = 31 * result + (this.syncRuleName.hashCode());
            result = 31 * result + (this.syncScope.hashCode());
            result = 31 * result + (this.syncTrigger.hashCode());
            result = 31 * result + (this.targetInstanceId.hashCode());
            result = 31 * result + (this.targetNamespaceName.hashCode());
            result = 31 * result + (this.targetRegionId.hashCode());
            result = 31 * result + (this.repoName != null ? this.repoName.hashCode() : 0);
            result = 31 * result + (this.repoNameFilter != null ? this.repoNameFilter.hashCode() : 0);
            result = 31 * result + (this.tagFilter != null ? this.tagFilter.hashCode() : 0);
            result = 31 * result + (this.targetRepoName != null ? this.targetRepoName.hashCode() : 0);
            result = 31 * result + (this.targetUserId != null ? this.targetUserId.hashCode() : 0);
            return result;
        }
    }
}
