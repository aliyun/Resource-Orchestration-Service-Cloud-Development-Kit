package com.aliyun.ros.cdk.cs;

/**
 * A ROS resource type:  `ALIYUN::CS::ClusterAddons`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:49.840Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.ClusterAddons")
public class ClusterAddons extends com.aliyun.ros.cdk.core.Resource {

    protected ClusterAddons(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ClusterAddons(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CS::ClusterAddons`.
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
    public ClusterAddons(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.ClusterAddonsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CS::ClusterAddons`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
     * Attribute ClusterId: Cluster ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cs.ClusterAddons}.
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
