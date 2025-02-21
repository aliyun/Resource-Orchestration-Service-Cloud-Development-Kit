package com.aliyun.ros.cdk.sls;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::SLS::MetricStore</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:21.019Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.MetricStore")
public class MetricStore extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.sls.IMetricStore {

    protected MetricStore(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MetricStore(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public MetricStore(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.MetricStoreProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public MetricStore(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.MetricStoreProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute LogstoreName: Metric store name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogstoreName() {
        return software.amazon.jsii.Kernel.get(this, "attrLogstoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.MetricStoreProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.sls.MetricStoreProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.MetricStore}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.MetricStore> {
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
        private final com.aliyun.ros.cdk.sls.MetricStoreProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.MetricStoreProps.Builder();
        }

        /**
         * Property logstoreName: Metric store name: 1.
         * <p>
         * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         * 2. Must start and end with lowercase letters and numbers.
         * 3. The name length is 3-63 characters.
         * <p>
         * @return {@code this}
         * @param logstoreName Property logstoreName: Metric store name: 1. This parameter is required.
         */
        public Builder logstoreName(final java.lang.String logstoreName) {
            this.props.logstoreName(logstoreName);
            return this;
        }
        /**
         * Property logstoreName: Metric store name: 1.
         * <p>
         * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         * 2. Must start and end with lowercase letters and numbers.
         * 3. The name length is 3-63 characters.
         * <p>
         * @return {@code this}
         * @param logstoreName Property logstoreName: Metric store name: 1. This parameter is required.
         */
        public Builder logstoreName(final com.aliyun.ros.cdk.core.IResolvable logstoreName) {
            this.props.logstoreName(logstoreName);
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
         * Property preserveStorage: Whether to keep the log permanently.
         * <p>
         * If set to true, TTL will be ignored.
         * Default to false.
         * <p>
         * @return {@code this}
         * @param preserveStorage Property preserveStorage: Whether to keep the log permanently. This parameter is required.
         */
        public Builder preserveStorage(final java.lang.Boolean preserveStorage) {
            this.props.preserveStorage(preserveStorage);
            return this;
        }
        /**
         * Property preserveStorage: Whether to keep the log permanently.
         * <p>
         * If set to true, TTL will be ignored.
         * Default to false.
         * <p>
         * @return {@code this}
         * @param preserveStorage Property preserveStorage: Whether to keep the log permanently. This parameter is required.
         */
        public Builder preserveStorage(final com.aliyun.ros.cdk.core.IResolvable preserveStorage) {
            this.props.preserveStorage(preserveStorage);
            return this;
        }

        /**
         * Property shardCount: The number of Shards.
         * <p>
         * Allowed Values: 1-10, default to 2.
         * <p>
         * @return {@code this}
         * @param shardCount Property shardCount: The number of Shards. This parameter is required.
         */
        public Builder shardCount(final java.lang.Number shardCount) {
            this.props.shardCount(shardCount);
            return this;
        }
        /**
         * Property shardCount: The number of Shards.
         * <p>
         * Allowed Values: 1-10, default to 2.
         * <p>
         * @return {@code this}
         * @param shardCount Property shardCount: The number of Shards. This parameter is required.
         */
        public Builder shardCount(final com.aliyun.ros.cdk.core.IResolvable shardCount) {
            this.props.shardCount(shardCount);
            return this;
        }

        /**
         * Property ttl: The lifecycle of log in the metrice store in days.
         * <p>
         * Allowed Values: 1-3000, default to 30.
         * <p>
         * @return {@code this}
         * @param ttl Property ttl: The lifecycle of log in the metrice store in days. This parameter is required.
         */
        public Builder ttl(final java.lang.Number ttl) {
            this.props.ttl(ttl);
            return this;
        }
        /**
         * Property ttl: The lifecycle of log in the metrice store in days.
         * <p>
         * Allowed Values: 1-3000, default to 30.
         * <p>
         * @return {@code this}
         * @param ttl Property ttl: The lifecycle of log in the metrice store in days. This parameter is required.
         */
        public Builder ttl(final com.aliyun.ros.cdk.core.IResolvable ttl) {
            this.props.ttl(ttl);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sls.MetricStore}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.MetricStore build() {
            return new com.aliyun.ros.cdk.sls.MetricStore(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
