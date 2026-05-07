package com.aliyun.ros.cdk.schedulerx;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SchedulerX::AppGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.024Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.schedulerx.$Module.class, fqn = "@alicloud/ros-cdk-schedulerx.AppGroup")
public class AppGroup extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.schedulerx.IAppGroup {

    protected AppGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AppGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public AppGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.schedulerx.AppGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public AppGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.schedulerx.AppGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AppGroupId: The group ID of the application group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAppGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrAppGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.schedulerx.AppGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.schedulerx.AppGroupProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.schedulerx.AppGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.schedulerx.AppGroup> {
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
        private final com.aliyun.ros.cdk.schedulerx.AppGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.schedulerx.AppGroupProps.Builder();
        }

        /**
         * Property appName: The application name.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The application name. This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props.appName(appName);
            return this;
        }
        /**
         * Property appName: The application name.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The application name. This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props.appName(appName);
            return this;
        }

        /**
         * Property groupId: The group ID of the application group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The group ID of the application group. This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The group ID of the application group.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The group ID of the application group. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property namespace: The namespace of the application group.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The namespace of the application group. This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * Property namespace: The namespace of the application group.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The namespace of the application group. This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * Property appKey: The application key.
         * <p>
         * @return {@code this}
         * @param appKey Property appKey: The application key. This parameter is required.
         */
        public Builder appKey(final java.lang.String appKey) {
            this.props.appKey(appKey);
            return this;
        }
        /**
         * Property appKey: The application key.
         * <p>
         * @return {@code this}
         * @param appKey Property appKey: The application key. This parameter is required.
         */
        public Builder appKey(final com.aliyun.ros.cdk.core.IResolvable appKey) {
            this.props.appKey(appKey);
            return this;
        }

        /**
         * Property appType: The type of the application.
         * <p>
         * @return {@code this}
         * @param appType Property appType: The type of the application. This parameter is required.
         */
        public Builder appType(final java.lang.Number appType) {
            this.props.appType(appType);
            return this;
        }
        /**
         * Property appType: The type of the application.
         * <p>
         * @return {@code this}
         * @param appType Property appType: The type of the application. This parameter is required.
         */
        public Builder appType(final com.aliyun.ros.cdk.core.IResolvable appType) {
            this.props.appType(appType);
            return this;
        }

        /**
         * Property appVersion: The version of the application.
         * <p>
         * @return {@code this}
         * @param appVersion Property appVersion: The version of the application. This parameter is required.
         */
        public Builder appVersion(final java.lang.Number appVersion) {
            this.props.appVersion(appVersion);
            return this;
        }
        /**
         * Property appVersion: The version of the application.
         * <p>
         * @return {@code this}
         * @param appVersion Property appVersion: The version of the application. This parameter is required.
         */
        public Builder appVersion(final com.aliyun.ros.cdk.core.IResolvable appVersion) {
            this.props.appVersion(appVersion);
            return this;
        }

        /**
         * Property description: The description of the application group.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the application group. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the application group.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the application group. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property enableLog: Whether to enable log.
         * <p>
         * @return {@code this}
         * @param enableLog Property enableLog: Whether to enable log. This parameter is required.
         */
        public Builder enableLog(final java.lang.Boolean enableLog) {
            this.props.enableLog(enableLog);
            return this;
        }
        /**
         * Property enableLog: Whether to enable log.
         * <p>
         * @return {@code this}
         * @param enableLog Property enableLog: Whether to enable log. This parameter is required.
         */
        public Builder enableLog(final com.aliyun.ros.cdk.core.IResolvable enableLog) {
            this.props.enableLog(enableLog);
            return this;
        }

        /**
         * Property maxJobs: The maximum number of jobs.
         * <p>
         * @return {@code this}
         * @param maxJobs Property maxJobs: The maximum number of jobs. This parameter is required.
         */
        public Builder maxJobs(final java.lang.Number maxJobs) {
            this.props.maxJobs(maxJobs);
            return this;
        }
        /**
         * Property maxJobs: The maximum number of jobs.
         * <p>
         * @return {@code this}
         * @param maxJobs Property maxJobs: The maximum number of jobs. This parameter is required.
         */
        public Builder maxJobs(final com.aliyun.ros.cdk.core.IResolvable maxJobs) {
            this.props.maxJobs(maxJobs);
            return this;
        }

        /**
         * Property monitorConfig: The monitor configuration in JSON format.
         * <p>
         * @return {@code this}
         * @param monitorConfig Property monitorConfig: The monitor configuration in JSON format. This parameter is required.
         */
        public Builder monitorConfig(final com.aliyun.ros.cdk.core.IResolvable monitorConfig) {
            this.props.monitorConfig(monitorConfig);
            return this;
        }
        /**
         * Property monitorConfig: The monitor configuration in JSON format.
         * <p>
         * @return {@code this}
         * @param monitorConfig Property monitorConfig: The monitor configuration in JSON format. This parameter is required.
         */
        public Builder monitorConfig(final java.util.Map<java.lang.String, ? extends java.lang.Object> monitorConfig) {
            this.props.monitorConfig(monitorConfig);
            return this;
        }

        /**
         * Property monitorContacts: The monitor contacts in JSON format.
         * <p>
         * @return {@code this}
         * @param monitorContacts Property monitorContacts: The monitor contacts in JSON format. This parameter is required.
         */
        public Builder monitorContacts(final java.util.List<? extends java.lang.Object> monitorContacts) {
            this.props.monitorContacts(monitorContacts);
            return this;
        }
        /**
         * Property monitorContacts: The monitor contacts in JSON format.
         * <p>
         * @return {@code this}
         * @param monitorContacts Property monitorContacts: The monitor contacts in JSON format. This parameter is required.
         */
        public Builder monitorContacts(final com.aliyun.ros.cdk.core.IResolvable monitorContacts) {
            this.props.monitorContacts(monitorContacts);
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
         * Property namespaceSource: The namespace source of the job.
         * <p>
         * @return {@code this}
         * @param namespaceSource Property namespaceSource: The namespace source of the job. This parameter is required.
         */
        public Builder namespaceSource(final java.lang.String namespaceSource) {
            this.props.namespaceSource(namespaceSource);
            return this;
        }
        /**
         * Property namespaceSource: The namespace source of the job.
         * <p>
         * @return {@code this}
         * @param namespaceSource Property namespaceSource: The namespace source of the job. This parameter is required.
         */
        public Builder namespaceSource(final com.aliyun.ros.cdk.core.IResolvable namespaceSource) {
            this.props.namespaceSource(namespaceSource);
            return this;
        }

        /**
         * Property notificationPolicyName: The notification policy name.
         * <p>
         * @return {@code this}
         * @param notificationPolicyName Property notificationPolicyName: The notification policy name. This parameter is required.
         */
        public Builder notificationPolicyName(final java.lang.String notificationPolicyName) {
            this.props.notificationPolicyName(notificationPolicyName);
            return this;
        }
        /**
         * Property notificationPolicyName: The notification policy name.
         * <p>
         * @return {@code this}
         * @param notificationPolicyName Property notificationPolicyName: The notification policy name. This parameter is required.
         */
        public Builder notificationPolicyName(final com.aliyun.ros.cdk.core.IResolvable notificationPolicyName) {
            this.props.notificationPolicyName(notificationPolicyName);
            return this;
        }

        /**
         * Property scheduleBusyWorkers: Whether to schedule busy workers.
         * <p>
         * @return {@code this}
         * @param scheduleBusyWorkers Property scheduleBusyWorkers: Whether to schedule busy workers. This parameter is required.
         */
        public Builder scheduleBusyWorkers(final java.lang.Boolean scheduleBusyWorkers) {
            this.props.scheduleBusyWorkers(scheduleBusyWorkers);
            return this;
        }
        /**
         * Property scheduleBusyWorkers: Whether to schedule busy workers.
         * <p>
         * @return {@code this}
         * @param scheduleBusyWorkers Property scheduleBusyWorkers: Whether to schedule busy workers. This parameter is required.
         */
        public Builder scheduleBusyWorkers(final com.aliyun.ros.cdk.core.IResolvable scheduleBusyWorkers) {
            this.props.scheduleBusyWorkers(scheduleBusyWorkers);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.schedulerx.AppGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.schedulerx.AppGroup build() {
            return new com.aliyun.ros.cdk.schedulerx.AppGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
