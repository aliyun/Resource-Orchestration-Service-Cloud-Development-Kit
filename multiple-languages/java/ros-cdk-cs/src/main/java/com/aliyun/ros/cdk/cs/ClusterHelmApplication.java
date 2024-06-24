package com.aliyun.ros.cdk.cs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CS::ClusterHelmApplication</code>, which is used to deploy an application by using Helm.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:05.358Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ClusterHelmApplication")
public class ClusterHelmApplication extends com.aliyun.ros.cdk.core.Resource {

    protected ClusterHelmApplication(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ClusterHelmApplication(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ClusterHelmApplication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ClusterHelmApplicationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ClusterHelmApplication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ClusterHelmApplicationProps props) {
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ClusterHelmApplicationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.ClusterHelmApplicationProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ClusterHelmApplicationProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.ClusterHelmApplication}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.ClusterHelmApplication> {
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
        private final com.aliyun.ros.cdk.cs.ClusterHelmApplicationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cs.ClusterHelmApplicationProps.Builder();
        }

        /**
         * Property chartUrl: The URL of chart.
         * <p>
         * Supports HTTP or HTTPS.
         * <p>
         * @return {@code this}
         * @param chartUrl Property chartUrl: The URL of chart. This parameter is required.
         */
        public Builder chartUrl(final java.lang.String chartUrl) {
            this.props.chartUrl(chartUrl);
            return this;
        }
        /**
         * Property chartUrl: The URL of chart.
         * <p>
         * Supports HTTP or HTTPS.
         * <p>
         * @return {@code this}
         * @param chartUrl Property chartUrl: The URL of chart. This parameter is required.
         */
        public Builder chartUrl(final com.aliyun.ros.cdk.core.IResolvable chartUrl) {
            this.props.chartUrl(chartUrl);
            return this;
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
         * Property name: The name for helm release.
         * <p>
         * @return {@code this}
         * @param name Property name: The name for helm release. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name for helm release.
         * <p>
         * @return {@code this}
         * @param name Property name: The name for helm release. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property chartValues: Chart custom values.
         * <p>
         * @return {@code this}
         * @param chartValues Property chartValues: Chart custom values. This parameter is required.
         */
        public Builder chartValues(final com.aliyun.ros.cdk.core.IResolvable chartValues) {
            this.props.chartValues(chartValues);
            return this;
        }
        /**
         * Property chartValues: Chart custom values.
         * <p>
         * @return {@code this}
         * @param chartValues Property chartValues: Chart custom values. This parameter is required.
         */
        public Builder chartValues(final java.util.Map<java.lang.String, ? extends java.lang.Object> chartValues) {
            this.props.chartValues(chartValues);
            return this;
        }

        /**
         * Property credential: The credential of ACR repo.
         * <p>
         * Only take effects when ChartUrl is the address of ACR repo.
         * <p>
         * @return {@code this}
         * @param credential Property credential: The credential of ACR repo. This parameter is required.
         */
        public Builder credential(final com.aliyun.ros.cdk.core.IResolvable credential) {
            this.props.credential(credential);
            return this;
        }
        /**
         * Property credential: The credential of ACR repo.
         * <p>
         * Only take effects when ChartUrl is the address of ACR repo.
         * <p>
         * @return {@code this}
         * @param credential Property credential: The credential of ACR repo. This parameter is required.
         */
        public Builder credential(final com.aliyun.ros.cdk.cs.RosClusterHelmApplication.CredentialProperty credential) {
            this.props.credential(credential);
            return this;
        }

        /**
         * Property namespace: Namespace to use with helm.
         * <p>
         * Default is default.
         * If the Namespace does not exist, ROS will automatically create it and delete it during the deletion phase.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: Namespace to use with helm. This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * Property namespace: Namespace to use with helm.
         * <p>
         * Default is default.
         * If the Namespace does not exist, ROS will automatically create it and delete it during the deletion phase.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: Namespace to use with helm. This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cs.ClusterHelmApplication}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.ClusterHelmApplication build() {
            return new com.aliyun.ros.cdk.cs.ClusterHelmApplication(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
