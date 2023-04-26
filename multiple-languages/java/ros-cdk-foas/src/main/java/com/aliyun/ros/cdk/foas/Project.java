package com.aliyun.ros.cdk.foas;

/**
 * A ROS resource type:  `ALIYUN::FOAS::Project`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:19.927Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.foas.$Module.class, fqn = "@alicloud/ros-cdk-foas.Project")
public class Project extends com.aliyun.ros.cdk.core.Resource {

    protected Project(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Project(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::FOAS::Project`.
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
    public Project(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.foas.ProjectProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::FOAS::Project`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Project(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.foas.ProjectProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute State: Project state.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrState() {
        return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.foas.Project}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.foas.Project> {
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
        private final com.aliyun.ros.cdk.foas.ProjectProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.foas.ProjectProps.Builder();
        }

        /**
         * Property deployType: Cluster type: Exclusive cluster: cell Shared cluster: public.
         * <p>
         * @return {@code this}
         * @param deployType Property deployType: Cluster type: Exclusive cluster: cell Shared cluster: public. This parameter is required.
         */
        public Builder deployType(final java.lang.String deployType) {
            this.props.deployType(deployType);
            return this;
        }
        /**
         * Property deployType: Cluster type: Exclusive cluster: cell Shared cluster: public.
         * <p>
         * @return {@code this}
         * @param deployType Property deployType: Cluster type: Exclusive cluster: cell Shared cluster: public. This parameter is required.
         */
        public Builder deployType(final com.aliyun.ros.cdk.core.IResolvable deployType) {
            this.props.deployType(deployType);
            return this;
        }

        /**
         * Property managerIds: Comma delimited account Id list of managers.
         * <p>
         * @return {@code this}
         * @param managerIds Property managerIds: Comma delimited account Id list of managers. This parameter is required.
         */
        public Builder managerIds(final java.lang.String managerIds) {
            this.props.managerIds(managerIds);
            return this;
        }
        /**
         * Property managerIds: Comma delimited account Id list of managers.
         * <p>
         * @return {@code this}
         * @param managerIds Property managerIds: Comma delimited account Id list of managers. This parameter is required.
         */
        public Builder managerIds(final com.aliyun.ros.cdk.core.IResolvable managerIds) {
            this.props.managerIds(managerIds);
            return this;
        }

        /**
         * Property name: Project name.
         * <p>
         * It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
         * <p>
         * @return {@code this}
         * @param name Property name: Project name. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: Project name.
         * <p>
         * It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
         * <p>
         * @return {@code this}
         * @param name Property name: Project name. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
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
         * Property description: Project description.
         * <p>
         * @return {@code this}
         * @param description Property description: Project description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Project description.
         * <p>
         * @return {@code this}
         * @param description Property description: Project description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property orderId: Order Id of Shared cluster.
         * <p>
         * @return {@code this}
         * @param orderId Property orderId: Order Id of Shared cluster. This parameter is required.
         */
        public Builder orderId(final java.lang.String orderId) {
            this.props.orderId(orderId);
            return this;
        }
        /**
         * Property orderId: Order Id of Shared cluster.
         * <p>
         * @return {@code this}
         * @param orderId Property orderId: Order Id of Shared cluster. This parameter is required.
         */
        public Builder orderId(final com.aliyun.ros.cdk.core.IResolvable orderId) {
            this.props.orderId(orderId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.foas.Project}.
         */
        @Override
        public com.aliyun.ros.cdk.foas.Project build() {
            return new com.aliyun.ros.cdk.foas.Project(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
