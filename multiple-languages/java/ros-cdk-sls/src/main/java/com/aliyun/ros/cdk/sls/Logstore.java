package com.aliyun.ros.cdk.sls;

/**
 * A ROS resource type:  `ALIYUN::SLS::Logstore`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:03.642Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.Logstore")
public class Logstore extends com.aliyun.ros.cdk.core.Resource {

    protected Logstore(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Logstore(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SLS::Logstore`.
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
    public Logstore(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.LogstoreProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SLS::Logstore`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Logstore(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.LogstoreProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute LogstoreName: Logstore name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLogstoreName() {
        return software.amazon.jsii.Kernel.get(this, "attrLogstoreName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.Logstore}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.Logstore> {
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
        private final com.aliyun.ros.cdk.sls.LogstoreProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.LogstoreProps.Builder();
        }

        /**
         * Property logstoreName: Logstore name: 1.
         * <p>
         * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         * 2. Must start and end with lowercase letters and numbers.
         * 3. The name length is 3-63 characters.
         * <p>
         * @return {@code this}
         * @param logstoreName Property logstoreName: Logstore name: 1. This parameter is required.
         */
        public Builder logstoreName(final java.lang.String logstoreName) {
            this.props.logstoreName(logstoreName);
            return this;
        }
        /**
         * Property logstoreName: Logstore name: 1.
         * <p>
         * Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
         * 2. Must start and end with lowercase letters and numbers.
         * 3. The name length is 3-63 characters.
         * <p>
         * @return {@code this}
         * @param logstoreName Property logstoreName: Logstore name: 1. This parameter is required.
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
         * Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
         * <p>
         * Default to false.
         * <p>
         * @return {@code this}
         * @param appendMeta Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log. This parameter is required.
         */
        public Builder appendMeta(final java.lang.Boolean appendMeta) {
            this.props.appendMeta(appendMeta);
            return this;
        }
        /**
         * Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
         * <p>
         * Default to false.
         * <p>
         * @return {@code this}
         * @param appendMeta Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log. This parameter is required.
         */
        public Builder appendMeta(final com.aliyun.ros.cdk.core.IResolvable appendMeta) {
            this.props.appendMeta(appendMeta);
            return this;
        }

        /**
         * Property autoSplit: Whether to automatically split the shard.
         * <p>
         * Default to false.
         * <p>
         * @return {@code this}
         * @param autoSplit Property autoSplit: Whether to automatically split the shard. This parameter is required.
         */
        public Builder autoSplit(final java.lang.Boolean autoSplit) {
            this.props.autoSplit(autoSplit);
            return this;
        }
        /**
         * Property autoSplit: Whether to automatically split the shard.
         * <p>
         * Default to false.
         * <p>
         * @return {@code this}
         * @param autoSplit Property autoSplit: Whether to automatically split the shard. This parameter is required.
         */
        public Builder autoSplit(final com.aliyun.ros.cdk.core.IResolvable autoSplit) {
            this.props.autoSplit(autoSplit);
            return this;
        }

        /**
         * Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
         * <p>
         * Default to false.
         * <p>
         * @return {@code this}
         * @param enableTracking Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information. This parameter is required.
         */
        public Builder enableTracking(final java.lang.Boolean enableTracking) {
            this.props.enableTracking(enableTracking);
            return this;
        }
        /**
         * Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
         * <p>
         * Default to false.
         * <p>
         * @return {@code this}
         * @param enableTracking Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information. This parameter is required.
         */
        public Builder enableTracking(final com.aliyun.ros.cdk.core.IResolvable enableTracking) {
            this.props.enableTracking(enableTracking);
            return this;
        }

        /**
         * Property encryptConf: Data encryption config.
         * <p>
         * @return {@code this}
         * @param encryptConf Property encryptConf: Data encryption config. This parameter is required.
         */
        public Builder encryptConf(final com.aliyun.ros.cdk.core.IResolvable encryptConf) {
            this.props.encryptConf(encryptConf);
            return this;
        }
        /**
         * Property encryptConf: Data encryption config.
         * <p>
         * @return {@code this}
         * @param encryptConf Property encryptConf: Data encryption config. This parameter is required.
         */
        public Builder encryptConf(final com.aliyun.ros.cdk.sls.RosLogstore.EncryptConfProperty encryptConf) {
            this.props.encryptConf(encryptConf);
            return this;
        }

        /**
         * Property maxSplitShard: The maximum number of shards when splitting automatically.
         * <p>
         * Must be specified if AutoSplit is set to true.
         * Allowed Values: 1-64.
         * <p>
         * @return {@code this}
         * @param maxSplitShard Property maxSplitShard: The maximum number of shards when splitting automatically. This parameter is required.
         */
        public Builder maxSplitShard(final java.lang.Number maxSplitShard) {
            this.props.maxSplitShard(maxSplitShard);
            return this;
        }
        /**
         * Property maxSplitShard: The maximum number of shards when splitting automatically.
         * <p>
         * Must be specified if AutoSplit is set to true.
         * Allowed Values: 1-64.
         * <p>
         * @return {@code this}
         * @param maxSplitShard Property maxSplitShard: The maximum number of shards when splitting automatically. This parameter is required.
         */
        public Builder maxSplitShard(final com.aliyun.ros.cdk.core.IResolvable maxSplitShard) {
            this.props.maxSplitShard(maxSplitShard);
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
         * Allowed Values: 1-100, default to 2.
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
         * Allowed Values: 1-100, default to 2.
         * <p>
         * @return {@code this}
         * @param shardCount Property shardCount: The number of Shards. This parameter is required.
         */
        public Builder shardCount(final com.aliyun.ros.cdk.core.IResolvable shardCount) {
            this.props.shardCount(shardCount);
            return this;
        }

        /**
         * Property ttl: The lifecycle of log in the logstore in days.
         * <p>
         * Allowed Values: 1-3600, default to 30.
         * <p>
         * @return {@code this}
         * @param ttl Property ttl: The lifecycle of log in the logstore in days. This parameter is required.
         */
        public Builder ttl(final java.lang.Number ttl) {
            this.props.ttl(ttl);
            return this;
        }
        /**
         * Property ttl: The lifecycle of log in the logstore in days.
         * <p>
         * Allowed Values: 1-3600, default to 30.
         * <p>
         * @return {@code this}
         * @param ttl Property ttl: The lifecycle of log in the logstore in days. This parameter is required.
         */
        public Builder ttl(final com.aliyun.ros.cdk.core.IResolvable ttl) {
            this.props.ttl(ttl);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sls.Logstore}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.Logstore build() {
            return new com.aliyun.ros.cdk.sls.Logstore(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
