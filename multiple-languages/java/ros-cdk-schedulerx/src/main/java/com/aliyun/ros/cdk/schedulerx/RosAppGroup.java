package com.aliyun.ros.cdk.schedulerx;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::SchedulerX::AppGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.053Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.schedulerx.$Module.class, fqn = "@alicloud/ros-cdk-schedulerx.RosAppGroup")
public class RosAppGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAppGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAppGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.schedulerx.RosAppGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAppGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.schedulerx.RosAppGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAppName() {
        return software.amazon.jsii.Kernel.get(this, "appName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appName", java.util.Objects.requireNonNull(value, "appName is required"));
    }

    /**
     */
    public void setAppName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appName", java.util.Objects.requireNonNull(value, "appName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getGroupId() {
        return software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "groupId", java.util.Objects.requireNonNull(value, "groupId is required"));
    }

    /**
     */
    public void setGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "groupId", java.util.Objects.requireNonNull(value, "groupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNamespace() {
        return software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNamespace(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "namespace", java.util.Objects.requireNonNull(value, "namespace is required"));
    }

    /**
     */
    public void setNamespace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "namespace", java.util.Objects.requireNonNull(value, "namespace is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAppKey() {
        return software.amazon.jsii.Kernel.get(this, "appKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppKey(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appKey", value);
    }

    /**
     */
    public void setAppKey(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appKey", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAppType() {
        return software.amazon.jsii.Kernel.get(this, "appType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppType(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "appType", value);
    }

    /**
     */
    public void setAppType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAppVersion() {
        return software.amazon.jsii.Kernel.get(this, "appVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppVersion(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "appVersion", value);
    }

    /**
     */
    public void setAppVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appVersion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableLog() {
        return software.amazon.jsii.Kernel.get(this, "enableLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableLog(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableLog", value);
    }

    /**
     */
    public void setEnableLog(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableLog", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxJobs() {
        return software.amazon.jsii.Kernel.get(this, "maxJobs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxJobs(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxJobs", value);
    }

    /**
     */
    public void setMaxJobs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxJobs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMonitorConfig() {
        return software.amazon.jsii.Kernel.get(this, "monitorConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMonitorConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "monitorConfig", value);
    }

    /**
     */
    public void setMonitorConfig(final @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            if (!(value.keySet().toArray()[0] instanceof String)) {
                throw new IllegalArgumentException(
                    new java.lang.StringBuilder("Expected ")
                        .append("value").append(".keySet()")
                        .append(" to contain class String; received ")
                        .append(value.keySet().toArray()[0].getClass()).toString());
            }
            for (final java.util.Map.Entry<String, java.lang.Object> __item_ac66f0: value.entrySet()) {
                final java.lang.Object __val_ac66f0 = __item_ac66f0.getValue();
            }
        }
        software.amazon.jsii.Kernel.set(this, "monitorConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMonitorContacts() {
        return software.amazon.jsii.Kernel.get(this, "monitorContacts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMonitorContacts(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
            }
        }
        software.amazon.jsii.Kernel.set(this, "monitorContacts", value);
    }

    /**
     */
    public void setMonitorContacts(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "monitorContacts", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceSource() {
        return software.amazon.jsii.Kernel.get(this, "namespaceSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNamespaceSource(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "namespaceSource", value);
    }

    /**
     */
    public void setNamespaceSource(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "namespaceSource", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNotificationPolicyName() {
        return software.amazon.jsii.Kernel.get(this, "notificationPolicyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNotificationPolicyName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "notificationPolicyName", value);
    }

    /**
     */
    public void setNotificationPolicyName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "notificationPolicyName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScheduleBusyWorkers() {
        return software.amazon.jsii.Kernel.get(this, "scheduleBusyWorkers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScheduleBusyWorkers(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "scheduleBusyWorkers", value);
    }

    /**
     */
    public void setScheduleBusyWorkers(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scheduleBusyWorkers", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.schedulerx.RosAppGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.schedulerx.RosAppGroup> {
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
        private final com.aliyun.ros.cdk.schedulerx.RosAppGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.schedulerx.RosAppGroupProps.Builder();
        }

        /**
         * @return {@code this}
         * @param appName This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }
        /**
         * @return {@code this}
         * @param appName This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props.appName(appName);
            return this;
        }

        /**
         * @return {@code this}
         * @param groupId This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param groupId This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param namespace This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * @return {@code this}
         * @param namespace This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * @return {@code this}
         * @param appKey This parameter is required.
         */
        public Builder appKey(final java.lang.String appKey) {
            this.props.appKey(appKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param appKey This parameter is required.
         */
        public Builder appKey(final com.aliyun.ros.cdk.core.IResolvable appKey) {
            this.props.appKey(appKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param appType This parameter is required.
         */
        public Builder appType(final java.lang.Number appType) {
            this.props.appType(appType);
            return this;
        }
        /**
         * @return {@code this}
         * @param appType This parameter is required.
         */
        public Builder appType(final com.aliyun.ros.cdk.core.IResolvable appType) {
            this.props.appType(appType);
            return this;
        }

        /**
         * @return {@code this}
         * @param appVersion This parameter is required.
         */
        public Builder appVersion(final java.lang.Number appVersion) {
            this.props.appVersion(appVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param appVersion This parameter is required.
         */
        public Builder appVersion(final com.aliyun.ros.cdk.core.IResolvable appVersion) {
            this.props.appVersion(appVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableLog This parameter is required.
         */
        public Builder enableLog(final java.lang.Boolean enableLog) {
            this.props.enableLog(enableLog);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableLog This parameter is required.
         */
        public Builder enableLog(final com.aliyun.ros.cdk.core.IResolvable enableLog) {
            this.props.enableLog(enableLog);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxJobs This parameter is required.
         */
        public Builder maxJobs(final java.lang.Number maxJobs) {
            this.props.maxJobs(maxJobs);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxJobs This parameter is required.
         */
        public Builder maxJobs(final com.aliyun.ros.cdk.core.IResolvable maxJobs) {
            this.props.maxJobs(maxJobs);
            return this;
        }

        /**
         * @return {@code this}
         * @param monitorConfig This parameter is required.
         */
        public Builder monitorConfig(final com.aliyun.ros.cdk.core.IResolvable monitorConfig) {
            this.props.monitorConfig(monitorConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param monitorConfig This parameter is required.
         */
        public Builder monitorConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> monitorConfig) {
            this.props.monitorConfig(monitorConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param monitorContacts This parameter is required.
         */
        public Builder monitorContacts(final java.util.List<? extends java.lang.Object> monitorContacts) {
            this.props.monitorContacts(monitorContacts);
            return this;
        }
        /**
         * @return {@code this}
         * @param monitorContacts This parameter is required.
         */
        public Builder monitorContacts(final com.aliyun.ros.cdk.core.IResolvable monitorContacts) {
            this.props.monitorContacts(monitorContacts);
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
         * @param namespaceSource This parameter is required.
         */
        public Builder namespaceSource(final java.lang.String namespaceSource) {
            this.props.namespaceSource(namespaceSource);
            return this;
        }
        /**
         * @return {@code this}
         * @param namespaceSource This parameter is required.
         */
        public Builder namespaceSource(final com.aliyun.ros.cdk.core.IResolvable namespaceSource) {
            this.props.namespaceSource(namespaceSource);
            return this;
        }

        /**
         * @return {@code this}
         * @param notificationPolicyName This parameter is required.
         */
        public Builder notificationPolicyName(final java.lang.String notificationPolicyName) {
            this.props.notificationPolicyName(notificationPolicyName);
            return this;
        }
        /**
         * @return {@code this}
         * @param notificationPolicyName This parameter is required.
         */
        public Builder notificationPolicyName(final com.aliyun.ros.cdk.core.IResolvable notificationPolicyName) {
            this.props.notificationPolicyName(notificationPolicyName);
            return this;
        }

        /**
         * @return {@code this}
         * @param scheduleBusyWorkers This parameter is required.
         */
        public Builder scheduleBusyWorkers(final java.lang.Boolean scheduleBusyWorkers) {
            this.props.scheduleBusyWorkers(scheduleBusyWorkers);
            return this;
        }
        /**
         * @return {@code this}
         * @param scheduleBusyWorkers This parameter is required.
         */
        public Builder scheduleBusyWorkers(final com.aliyun.ros.cdk.core.IResolvable scheduleBusyWorkers) {
            this.props.scheduleBusyWorkers(scheduleBusyWorkers);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.schedulerx.RosAppGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.schedulerx.RosAppGroup build() {
            return new com.aliyun.ros.cdk.schedulerx.RosAppGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
