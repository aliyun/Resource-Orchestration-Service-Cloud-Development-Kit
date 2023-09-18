package com.aliyun.ros.cdk.sls;

/**
 * A ROS resource type:  <code>ALIYUN::SLS::Dashboard</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:28.427Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.Dashboard")
public class Dashboard extends com.aliyun.ros.cdk.core.Resource {

    protected Dashboard(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Dashboard(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::SLS::Dashboard</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Dashboard(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.DashboardProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::SLS::Dashboard</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Dashboard(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.DashboardProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DashboardName: Dashboard name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDashboardName() {
        return software.amazon.jsii.Kernel.get(this, "attrDashboardName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DisplayName: Display name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDisplayName() {
        return software.amazon.jsii.Kernel.get(this, "attrDisplayName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.Dashboard}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.Dashboard> {
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
        private final com.aliyun.ros.cdk.sls.DashboardProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.DashboardProps.Builder();
        }

        /**
         * Property charts: Chart list.
         * <p>
         * @return {@code this}
         * @param charts Property charts: Chart list. This parameter is required.
         */
        public Builder charts(final com.aliyun.ros.cdk.core.IResolvable charts) {
            this.props.charts(charts);
            return this;
        }
        /**
         * Property charts: Chart list.
         * <p>
         * @return {@code this}
         * @param charts Property charts: Chart list. This parameter is required.
         */
        public Builder charts(final java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> charts) {
            this.props.charts(charts);
            return this;
        }

        /**
         * Property dashboardName: Dashboard name.
         * <p>
         * @return {@code this}
         * @param dashboardName Property dashboardName: Dashboard name. This parameter is required.
         */
        public Builder dashboardName(final java.lang.String dashboardName) {
            this.props.dashboardName(dashboardName);
            return this;
        }
        /**
         * Property dashboardName: Dashboard name.
         * <p>
         * @return {@code this}
         * @param dashboardName Property dashboardName: Dashboard name. This parameter is required.
         */
        public Builder dashboardName(final com.aliyun.ros.cdk.core.IResolvable dashboardName) {
            this.props.dashboardName(dashboardName);
            return this;
        }

        /**
         * Property projectName: Project name: 1.
         * <p>
         * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         * 2. Must start and end with lowercase letters and numbers.
         * 3. The name length is 3-63 characters.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: Project name: 1. This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * Property projectName: Project name: 1.
         * <p>
         * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         * 2. Must start and end with lowercase letters and numbers.
         * 3. The name length is 3-63 characters.
         * <p>
         * @return {@code this}
         * @param projectName Property projectName: Project name: 1. This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * Property description: Dashboard description.
         * <p>
         * @return {@code this}
         * @param description Property description: Dashboard description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Dashboard description.
         * <p>
         * @return {@code this}
         * @param description Property description: Dashboard description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property displayName: Dashboard display name.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: Dashboard display name. This parameter is required.
         */
        public Builder displayName(final java.lang.String displayName) {
            this.props.displayName(displayName);
            return this;
        }
        /**
         * Property displayName: Dashboard display name.
         * <p>
         * @return {@code this}
         * @param displayName Property displayName: Dashboard display name. This parameter is required.
         */
        public Builder displayName(final com.aliyun.ros.cdk.core.IResolvable displayName) {
            this.props.displayName(displayName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sls.Dashboard}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.Dashboard build() {
            return new com.aliyun.ros.cdk.sls.Dashboard(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
