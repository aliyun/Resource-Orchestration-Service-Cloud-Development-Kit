package com.aliyun.ros.cdk.cs.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::CS::ClusterApplicationResources</code>, which is used to query the details of specified types of resources in a Container Service for Kubernetes (ACK) cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-04T02:47:53.644Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cs.$Module.class, fqn = "@alicloud/ros-cdk-cs.datasource.ClusterApplicationResources")
public class ClusterApplicationResources extends com.aliyun.ros.cdk.core.Resource {

    protected ClusterApplicationResources(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ClusterApplicationResources(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ClusterApplicationResources(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.datasource.ClusterApplicationResourcesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ClusterApplicationResources(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.datasource.ClusterApplicationResourcesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Response: Query result of kubernetes resource(s).
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResponse() {
        return software.amazon.jsii.Kernel.get(this, "attrResponse", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.datasource.ClusterApplicationResourcesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cs.datasource.ClusterApplicationResourcesProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cs.datasource.ClusterApplicationResourcesProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cs.datasource.ClusterApplicationResources}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cs.datasource.ClusterApplicationResources> {
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
        private final com.aliyun.ros.cdk.cs.datasource.ClusterApplicationResourcesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cs.datasource.ClusterApplicationResourcesProps.Builder();
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
         * Property kind: The kind of kubernetes resources to query.
         * <p>
         * @return {@code this}
         * @param kind Property kind: The kind of kubernetes resources to query. This parameter is required.
         */
        public Builder kind(final java.lang.String kind) {
            this.props.kind(kind);
            return this;
        }
        /**
         * Property kind: The kind of kubernetes resources to query.
         * <p>
         * @return {@code this}
         * @param kind Property kind: The kind of kubernetes resources to query. This parameter is required.
         */
        public Builder kind(final com.aliyun.ros.cdk.core.IResolvable kind) {
            this.props.kind(kind);
            return this;
        }

        /**
         * Property firstMatch: Only the first matching result in jsonpath's filtered results is returned.
         * <p>
         * Default False
         * <p>
         * @return {@code this}
         * @param firstMatch Property firstMatch: Only the first matching result in jsonpath's filtered results is returned. This parameter is required.
         */
        public Builder firstMatch(final java.lang.Boolean firstMatch) {
            this.props.firstMatch(firstMatch);
            return this;
        }
        /**
         * Property firstMatch: Only the first matching result in jsonpath's filtered results is returned.
         * <p>
         * Default False
         * <p>
         * @return {@code this}
         * @param firstMatch Property firstMatch: Only the first matching result in jsonpath's filtered results is returned. This parameter is required.
         */
        public Builder firstMatch(final com.aliyun.ros.cdk.core.IResolvable firstMatch) {
            this.props.firstMatch(firstMatch);
            return this;
        }

        /**
         * Property jsonPath: Json path expression to filter the output.
         * <p>
         * @return {@code this}
         * @param jsonPath Property jsonPath: Json path expression to filter the output. This parameter is required.
         */
        public Builder jsonPath(final java.lang.String jsonPath) {
            this.props.jsonPath(jsonPath);
            return this;
        }
        /**
         * Property jsonPath: Json path expression to filter the output.
         * <p>
         * @return {@code this}
         * @param jsonPath Property jsonPath: Json path expression to filter the output. This parameter is required.
         */
        public Builder jsonPath(final com.aliyun.ros.cdk.core.IResolvable jsonPath) {
            this.props.jsonPath(jsonPath);
            return this;
        }

        /**
         * Property name: The name of the kubernetes resource to query.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the kubernetes resource to query. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the kubernetes resource to query.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the kubernetes resource to query. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property namespace: The namespace of kubernetes containing the resource.
         * <p>
         * Default value is default
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The namespace of kubernetes containing the resource. This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * Property namespace: The namespace of kubernetes containing the resource.
         * <p>
         * Default value is default
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The namespace of kubernetes containing the resource. This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cs.datasource.ClusterApplicationResources}.
         */
        @Override
        public com.aliyun.ros.cdk.cs.datasource.ClusterApplicationResources build() {
            return new com.aliyun.ros.cdk.cs.datasource.ClusterApplicationResources(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
