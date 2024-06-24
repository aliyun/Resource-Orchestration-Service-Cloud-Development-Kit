package com.aliyun.ros.cdk.polardb;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::POLARDB::AITask</code>, which is used to enable the PolarDB for AI feature.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:08.486Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosAITask")
public class RosAITask extends com.aliyun.ros.cdk.core.RosResource {

    protected RosAITask(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosAITask(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.polardb.RosAITask.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosAITask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.RosAITaskProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrDbClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDbClusterId() {
        return software.amazon.jsii.Kernel.get(this, "dbClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDbClusterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dbClusterId", java.util.Objects.requireNonNull(value, "dbClusterId is required"));
    }

    /**
     */
    public void setDbClusterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dbClusterId", java.util.Objects.requireNonNull(value, "dbClusterId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPassword() {
        return software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "password", java.util.Objects.requireNonNull(value, "password is required"));
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "password", java.util.Objects.requireNonNull(value, "password is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getUsername() {
        return software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUsername(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "username", java.util.Objects.requireNonNull(value, "username is required"));
    }

    /**
     */
    public void setUsername(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "username", java.util.Objects.requireNonNull(value, "username is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNodeType() {
        return software.amazon.jsii.Kernel.get(this, "nodeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNodeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "nodeType", value);
    }

    /**
     */
    public void setNodeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "nodeType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.RosAITask}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.RosAITask> {
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
        private final com.aliyun.ros.cdk.polardb.RosAITaskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.RosAITaskProps.Builder();
        }

        /**
         * @return {@code this}
         * @param dbClusterId This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param dbClusterId This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * @return {@code this}
         * @param username This parameter is required.
         */
        public Builder username(final java.lang.String username) {
            this.props.username(username);
            return this;
        }
        /**
         * @return {@code this}
         * @param username This parameter is required.
         */
        public Builder username(final com.aliyun.ros.cdk.core.IResolvable username) {
            this.props.username(username);
            return this;
        }

        /**
         * @return {@code this}
         * @param nodeType This parameter is required.
         */
        public Builder nodeType(final java.lang.String nodeType) {
            this.props.nodeType(nodeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param nodeType This parameter is required.
         */
        public Builder nodeType(final com.aliyun.ros.cdk.core.IResolvable nodeType) {
            this.props.nodeType(nodeType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardb.RosAITask}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.RosAITask build() {
            return new com.aliyun.ros.cdk.polardb.RosAITask(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
