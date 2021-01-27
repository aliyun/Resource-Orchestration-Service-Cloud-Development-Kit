package com.aliyun.ros.cdk.sls;

/**
 * A ROS resource type:  `ALIYUN::SLS::Logstore`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.597Z")
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
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Logstore(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.LogstoreProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SLS::Logstore`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public Logstore(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.LogstoreProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogstoreName() {
        return software.amazon.jsii.Kernel.get(this, "attrLogstoreName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.Logstore}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.Logstore> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
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
         * @return {@code this}
         * @param logstoreName This parameter is required.
         */
        public Builder logstoreName(final java.lang.String logstoreName) {
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
         * @param ttl This parameter is required.
         */
        public Builder ttl(final java.lang.Number ttl) {
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
