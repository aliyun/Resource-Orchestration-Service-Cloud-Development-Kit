package com.aliyun.ros.cdk.cs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CS::ClusterApplication</code>, which is used to deploy an application in a Container Service for Kubernetes (ACK) cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:45.136Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ClusterApplication")
public class ClusterApplication extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cs.IClusterApplication {

    protected ClusterApplication(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ClusterApplication(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ClusterApplication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ClusterApplicationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ClusterApplication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ClusterApplicationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WaitUntilData: A list of values for each JsonPath in WaitUntil.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWaitUntilData() {
        return software.amazon.jsii.Kernel.get(this, "attrWaitUntilData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ClusterApplicationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.ClusterApplicationProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.ClusterApplication}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.ClusterApplication> {
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
        private final com.aliyun.ros.cdk.cs.ClusterApplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cs.ClusterApplicationProps.Builder();
        }

        /**
         * Property clusterId: The ID of the kubernetes cluster.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The ID of the kubernetes cluster. This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * Property clusterId: The ID of the kubernetes cluster.
         * <p>
         * @return {@code this}
         * @param clusterId Property clusterId: The ID of the kubernetes cluster. This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * Property yamlContent: The yaml content of application.
         * <p>
         * @return {@code this}
         * @param yamlContent Property yamlContent: The yaml content of application. This parameter is required.
         */
        public Builder yamlContent(final java.lang.String yamlContent) {
            this.props.yamlContent(yamlContent);
            return this;
        }
        /**
         * Property yamlContent: The yaml content of application.
         * <p>
         * @return {@code this}
         * @param yamlContent Property yamlContent: The yaml content of application. This parameter is required.
         */
        public Builder yamlContent(final com.aliyun.ros.cdk.core.IResolvable yamlContent) {
            this.props.yamlContent(yamlContent);
            return this;
        }

        /**
         * Property defaultNamespace: The default namespace for the application, default value is default.
         * <p>
         * If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
         * If the DefaultNamespace does not exist, ROS will create it automatically and keep it by default during the delete phase.
         * <p>
         * @return {@code this}
         * @param defaultNamespace Property defaultNamespace: The default namespace for the application, default value is default. This parameter is required.
         */
        public Builder defaultNamespace(final java.lang.String defaultNamespace) {
            this.props.defaultNamespace(defaultNamespace);
            return this;
        }
        /**
         * Property defaultNamespace: The default namespace for the application, default value is default.
         * <p>
         * If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
         * If the DefaultNamespace does not exist, ROS will create it automatically and keep it by default during the delete phase.
         * <p>
         * @return {@code this}
         * @param defaultNamespace Property defaultNamespace: The default namespace for the application, default value is default. This parameter is required.
         */
        public Builder defaultNamespace(final com.aliyun.ros.cdk.core.IResolvable defaultNamespace) {
            this.props.defaultNamespace(defaultNamespace);
            return this;
        }

        /**
         * Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace.
         * <p>
         * If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
         * <p>
         * @return {@code this}
         * @param defaultNamespaceDeletion Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace. This parameter is required.
         */
        public Builder defaultNamespaceDeletion(final java.lang.Boolean defaultNamespaceDeletion) {
            this.props.defaultNamespaceDeletion(defaultNamespaceDeletion);
            return this;
        }
        /**
         * Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace.
         * <p>
         * If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
         * <p>
         * @return {@code this}
         * @param defaultNamespaceDeletion Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace. This parameter is required.
         */
        public Builder defaultNamespaceDeletion(final com.aliyun.ros.cdk.core.IResolvable defaultNamespaceDeletion) {
            this.props.defaultNamespaceDeletion(defaultNamespaceDeletion);
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
         * Property stage: At what stage to run.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>All: all stages, including create, update, and delete.</li>
         * <li>Delete: the delete stage. This means that only in the deletion stage of this resource will apply yaml to the cluster.
         * The default is All.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param stage Property stage: At what stage to run. This parameter is required.
         */
        public Builder stage(final java.lang.String stage) {
            this.props.stage(stage);
            return this;
        }
        /**
         * Property stage: At what stage to run.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>All: all stages, including create, update, and delete.</li>
         * <li>Delete: the delete stage. This means that only in the deletion stage of this resource will apply yaml to the cluster.
         * The default is All.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param stage Property stage: At what stage to run. This parameter is required.
         */
        public Builder stage(final com.aliyun.ros.cdk.core.IResolvable stage) {
            this.props.stage(stage);
            return this;
        }

        /**
         * Property validationMode: Validation modes include: - Basic: basic validation, such as verifying the existence of a cluster.
         * <p>
         * <ul>
         * <li>Strict: in addition to basic validation, also validate the legality of YamlContent and WaitUntil.</li>
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
         * <li>Strict: in addition to basic validation, also validate the legality of YamlContent and WaitUntil.</li>
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cs.ClusterApplication}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.ClusterApplication build() {
            return new com.aliyun.ros.cdk.cs.ClusterApplication(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
