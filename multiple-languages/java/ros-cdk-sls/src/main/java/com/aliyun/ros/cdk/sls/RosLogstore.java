package com.aliyun.ros.cdk.sls;

/**
 * A ROS template type:  `ALIYUN::SLS::Logstore`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:43.123Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.RosLogstore")
public class RosLogstore extends com.aliyun.ros.cdk.core.RosResource {

    protected RosLogstore(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosLogstore(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.sls.RosLogstore.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::SLS::Logstore`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosLogstore(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.RosLogstoreProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLogstoreName() {
        return software.amazon.jsii.Kernel.get(this, "attrLogstoreName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLogstoreName() {
        return software.amazon.jsii.Kernel.get(this, "logstoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogstoreName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "logstoreName", java.util.Objects.requireNonNull(value, "logstoreName is required"));
    }

    /**
     */
    public void setLogstoreName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logstoreName", java.util.Objects.requireNonNull(value, "logstoreName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProjectName() {
        return software.amazon.jsii.Kernel.get(this, "projectName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProjectName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "projectName", java.util.Objects.requireNonNull(value, "projectName is required"));
    }

    /**
     */
    public void setProjectName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "projectName", java.util.Objects.requireNonNull(value, "projectName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAppendMeta() {
        return software.amazon.jsii.Kernel.get(this, "appendMeta", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppendMeta(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "appendMeta", value);
    }

    /**
     */
    public void setAppendMeta(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appendMeta", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoSplit() {
        return software.amazon.jsii.Kernel.get(this, "autoSplit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoSplit(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoSplit", value);
    }

    /**
     */
    public void setAutoSplit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoSplit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableTracking() {
        return software.amazon.jsii.Kernel.get(this, "enableTracking", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableTracking(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableTracking", value);
    }

    /**
     */
    public void setEnableTracking(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableTracking", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMaxSplitShard() {
        return software.amazon.jsii.Kernel.get(this, "maxSplitShard", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMaxSplitShard(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "maxSplitShard", value);
    }

    /**
     */
    public void setMaxSplitShard(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "maxSplitShard", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPreserveStorage() {
        return software.amazon.jsii.Kernel.get(this, "preserveStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPreserveStorage(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "preserveStorage", value);
    }

    /**
     */
    public void setPreserveStorage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "preserveStorage", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getShardCount() {
        return software.amazon.jsii.Kernel.get(this, "shardCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setShardCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "shardCount", value);
    }

    /**
     */
    public void setShardCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "shardCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTtl() {
        return software.amazon.jsii.Kernel.get(this, "ttl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTtl(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ttl", value);
    }

    /**
     */
    public void setTtl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ttl", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.RosLogstore}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.RosLogstore> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.sls.RosLogstoreProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.RosLogstoreProps.Builder();
        }

        /**
         * @return {@code this}
         * @param logstoreName This parameter is required.
         */
        public Builder logstoreName(final java.lang.String logstoreName) {
            this.props.logstoreName(logstoreName);
            return this;
        }
        /**
         * @return {@code this}
         * @param logstoreName This parameter is required.
         */
        public Builder logstoreName(final com.aliyun.ros.cdk.core.IResolvable logstoreName) {
            this.props.logstoreName(logstoreName);
            return this;
        }

        /**
         * @return {@code this}
         * @param projectName This parameter is required.
         */
        public Builder projectName(final java.lang.String projectName) {
            this.props.projectName(projectName);
            return this;
        }
        /**
         * @return {@code this}
         * @param projectName This parameter is required.
         */
        public Builder projectName(final com.aliyun.ros.cdk.core.IResolvable projectName) {
            this.props.projectName(projectName);
            return this;
        }

        /**
         * @return {@code this}
         * @param appendMeta This parameter is required.
         */
        public Builder appendMeta(final java.lang.Boolean appendMeta) {
            this.props.appendMeta(appendMeta);
            return this;
        }
        /**
         * @return {@code this}
         * @param appendMeta This parameter is required.
         */
        public Builder appendMeta(final com.aliyun.ros.cdk.core.IResolvable appendMeta) {
            this.props.appendMeta(appendMeta);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoSplit This parameter is required.
         */
        public Builder autoSplit(final java.lang.Boolean autoSplit) {
            this.props.autoSplit(autoSplit);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoSplit This parameter is required.
         */
        public Builder autoSplit(final com.aliyun.ros.cdk.core.IResolvable autoSplit) {
            this.props.autoSplit(autoSplit);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableTracking This parameter is required.
         */
        public Builder enableTracking(final java.lang.Boolean enableTracking) {
            this.props.enableTracking(enableTracking);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableTracking This parameter is required.
         */
        public Builder enableTracking(final com.aliyun.ros.cdk.core.IResolvable enableTracking) {
            this.props.enableTracking(enableTracking);
            return this;
        }

        /**
         * @return {@code this}
         * @param maxSplitShard This parameter is required.
         */
        public Builder maxSplitShard(final java.lang.Number maxSplitShard) {
            this.props.maxSplitShard(maxSplitShard);
            return this;
        }
        /**
         * @return {@code this}
         * @param maxSplitShard This parameter is required.
         */
        public Builder maxSplitShard(final com.aliyun.ros.cdk.core.IResolvable maxSplitShard) {
            this.props.maxSplitShard(maxSplitShard);
            return this;
        }

        /**
         * @return {@code this}
         * @param preserveStorage This parameter is required.
         */
        public Builder preserveStorage(final java.lang.Boolean preserveStorage) {
            this.props.preserveStorage(preserveStorage);
            return this;
        }
        /**
         * @return {@code this}
         * @param preserveStorage This parameter is required.
         */
        public Builder preserveStorage(final com.aliyun.ros.cdk.core.IResolvable preserveStorage) {
            this.props.preserveStorage(preserveStorage);
            return this;
        }

        /**
         * @return {@code this}
         * @param shardCount This parameter is required.
         */
        public Builder shardCount(final java.lang.Number shardCount) {
            this.props.shardCount(shardCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param shardCount This parameter is required.
         */
        public Builder shardCount(final com.aliyun.ros.cdk.core.IResolvable shardCount) {
            this.props.shardCount(shardCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param ttl This parameter is required.
         */
        public Builder ttl(final java.lang.Number ttl) {
            this.props.ttl(ttl);
            return this;
        }
        /**
         * @return {@code this}
         * @param ttl This parameter is required.
         */
        public Builder ttl(final com.aliyun.ros.cdk.core.IResolvable ttl) {
            this.props.ttl(ttl);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sls.RosLogstore}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.RosLogstore build() {
            return new com.aliyun.ros.cdk.sls.RosLogstore(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
