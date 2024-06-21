package com.aliyun.ros.cdk.cs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CS::ClusterAddons</code>, which is used to install components in a cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:08.293Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ClusterAddons")
public class ClusterAddons extends com.aliyun.ros.cdk.core.Resource {

    protected ClusterAddons(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ClusterAddons(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ClusterAddons(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ClusterAddonsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ClusterAddons(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ClusterAddonsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute WaitUntilData: A list of values for each JsonPath in WaitUntil.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrWaitUntilData() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitUntilData", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ClusterAddonsProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.ClusterAddonsProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ClusterAddonsProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.ClusterAddons}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.ClusterAddons> {
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
        private final com.aliyun.ros.cdk.cs.ClusterAddonsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cs.ClusterAddonsProps.Builder();
        }

        /**
         * Property addons: A combination of addon plugins for Kubernetes clusters.
         * <p>
         * Network plug-in: including Flannel and Terway network plug-ins
         * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
         * Ingress: The installation of the Ingress component is enabled by default.
         * <p>
         * @return {@code this}
         * @param addons Property addons: A combination of addon plugins for Kubernetes clusters. This parameter is required.
         */
        public Builder addons(final com.aliyun.ros.cdk.core.IResolvable addons) {
            this.props.addons(addons);
            return this;
        }
        /**
         * Property addons: A combination of addon plugins for Kubernetes clusters.
         * <p>
         * Network plug-in: including Flannel and Terway network plug-ins
         * Log service: Optional. If the log service is not enabled, the cluster audit function cannot be used.
         * Ingress: The installation of the Ingress component is enabled by default.
         * <p>
         * @return {@code this}
         * @param addons Property addons: A combination of addon plugins for Kubernetes clusters. This parameter is required.
         */
        public Builder addons(final java.util.List<? extends java.lang.Object> addons) {
            this.props.addons(addons);
            return this;
        }

        /**
         * Property clusterId: Cluster ID.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: Cluster ID. This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * Property clusterId: Cluster ID.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: Cluster ID. This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * Property installedIgnore: Whether to ignore already installed addons when creating.
         * <p>
         * If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
         * Default false.
         * <p>
         * @return {@code this}
         * @param installedIgnore Property installedIgnore: Whether to ignore already installed addons when creating. This parameter is required.
         */
        public Builder installedIgnore(final java.lang.Boolean installedIgnore) {
            this.props.installedIgnore(installedIgnore);
            return this;
        }
        /**
         * Property installedIgnore: Whether to ignore already installed addons when creating.
         * <p>
         * If true, when creating, only install addons that are not yet installed. When deleting, only uninstall addons that are installed during the creation stage.
         * Default false.
         * <p>
         * @return {@code this}
         * @param installedIgnore Property installedIgnore: Whether to ignore already installed addons when creating. This parameter is required.
         */
        public Builder installedIgnore(final com.aliyun.ros.cdk.core.IResolvable installedIgnore) {
            this.props.installedIgnore(installedIgnore);
            return this;
        }

        /**
         * Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.</li>
         * <li>None: Do nothing.
         * The default value is EnsureAdminRoleAndBinding.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param rolePolicy Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. This parameter is required.
         */
        public Builder rolePolicy(final java.lang.String rolePolicy) {
            this.props.rolePolicy(rolePolicy);
            return this;
        }
        /**
         * Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>EnsureAdminRoleAndBinding: Automatically create a role named "ros:application-admin:${user-id}" with administrator permissions and bind it to the current user.</li>
         * <li>None: Do nothing.
         * The default value is EnsureAdminRoleAndBinding.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param rolePolicy Property rolePolicy: Before deploying the application, check the policies associated with the roles of the current user. This parameter is required.
         */
        public Builder rolePolicy(final com.aliyun.ros.cdk.core.IResolvable rolePolicy) {
            this.props.rolePolicy(rolePolicy);
            return this;
        }

        /**
         * Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.
         * <p>
         * <ul>
         * <li>Strict: in addition to basic validation, also validate the legality of WaitUntil.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param validationMode Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster. This parameter is required.
         */
        public Builder validationMode(final java.lang.String validationMode) {
            this.props.validationMode(validationMode);
            return this;
        }
        /**
         * Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.
         * <p>
         * <ul>
         * <li>Strict: in addition to basic validation, also validate the legality of WaitUntil.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param validationMode Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster. This parameter is required.
         */
        public Builder validationMode(final com.aliyun.ros.cdk.core.IResolvable validationMode) {
            this.props.validationMode(validationMode);
            return this;
        }

        /**
         * Property waitUntil: After starting a creation or update, wait until all conditions are met.
         * <p>
         * @return {@code this}
         * @param waitUntil Property waitUntil: After starting a creation or update, wait until all conditions are met. This parameter is required.
         */
        public Builder waitUntil(final com.aliyun.ros.cdk.core.IResolvable waitUntil) {
            this.props.waitUntil(waitUntil);
            return this;
        }
        /**
         * Property waitUntil: After starting a creation or update, wait until all conditions are met.
         * <p>
         * @return {@code this}
         * @param waitUntil Property waitUntil: After starting a creation or update, wait until all conditions are met. This parameter is required.
         */
        public Builder waitUntil(final java.util.List<? extends java.lang.Object> waitUntil) {
            this.props.waitUntil(waitUntil);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cs.ClusterAddons}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.ClusterAddons build() {
            return new com.aliyun.ros.cdk.cs.ClusterAddons(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
