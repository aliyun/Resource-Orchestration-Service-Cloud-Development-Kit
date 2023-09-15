package com.aliyun.ros.cdk.cs;

/**
 * A ROS resource type:  <code>ALIYUN::CS::ClusterApplication</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:47.123Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ClusterApplication")
public class ClusterApplication extends com.aliyun.ros.cdk.core.Resource {

    protected ClusterApplication(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ClusterApplication(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::CS::ClusterApplication</code>.
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
    public ClusterApplication(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ClusterApplicationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::CS::ClusterApplication</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
