package com.aliyun.ros.cdk.sls;

/**
 * A ROS resource type:  `ALIYUN::SLS::Index`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:30.451Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sls.$Module.class, fqn = "@alicloud/ros-cdk-sls.Index")
public class Index extends com.aliyun.ros.cdk.core.Resource {

    protected Index(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Index(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SLS::Index`.
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
    public Index(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.IndexProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SLS::Index`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Index(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sls.IndexProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sls.Index}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sls.Index> {
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
        private final com.aliyun.ros.cdk.sls.IndexProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sls.IndexProps.Builder();
        }

        /**
         * Property fullTextIndex: Full-text indexing configuration.
         * <p>
         * Full-text indexing and key indexing must have at least one enabled.
         * <p>
         * @return {@code this}
         * @param fullTextIndex Property fullTextIndex: Full-text indexing configuration. This parameter is required.
         */
        public Builder fullTextIndex(final com.aliyun.ros.cdk.core.IResolvable fullTextIndex) {
            this.props.fullTextIndex(fullTextIndex);
            return this;
        }
        /**
         * Property fullTextIndex: Full-text indexing configuration.
         * <p>
         * Full-text indexing and key indexing must have at least one enabled.
         * <p>
         * @return {@code this}
         * @param fullTextIndex Property fullTextIndex: Full-text indexing configuration. This parameter is required.
         */
        public Builder fullTextIndex(final com.aliyun.ros.cdk.sls.RosIndex.FullTextIndexProperty fullTextIndex) {
            this.props.fullTextIndex(fullTextIndex);
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
         * Property keyIndices: Key index configurations.
         * <p>
         * Full-text indexing and key indexing must have at least one enabled.
         * <p>
         * @return {@code this}
         * @param keyIndices Property keyIndices: Key index configurations. This parameter is required.
         */
        public Builder keyIndices(final com.aliyun.ros.cdk.core.IResolvable keyIndices) {
            this.props.keyIndices(keyIndices);
            return this;
        }
        /**
         * Property keyIndices: Key index configurations.
         * <p>
         * Full-text indexing and key indexing must have at least one enabled.
         * <p>
         * @return {@code this}
         * @param keyIndices Property keyIndices: Key index configurations. This parameter is required.
         */
        public Builder keyIndices(final java.util.List<? extends java.lang.Object> keyIndices) {
            this.props.keyIndices(keyIndices);
            return this;
        }

        /**
         * Property logReduce: Whether to enable log reduce.
         * <p>
         * Default to false.
         * <p>
         * @return {@code this}
         * @param logReduce Property logReduce: Whether to enable log reduce. This parameter is required.
         */
        public Builder logReduce(final java.lang.Boolean logReduce) {
            this.props.logReduce(logReduce);
            return this;
        }
        /**
         * Property logReduce: Whether to enable log reduce.
         * <p>
         * Default to false.
         * <p>
         * @return {@code this}
         * @param logReduce Property logReduce: Whether to enable log reduce. This parameter is required.
         */
        public Builder logReduce(final com.aliyun.ros.cdk.core.IResolvable logReduce) {
            this.props.logReduce(logReduce);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sls.Index}.
         */
        @Override
        public com.aliyun.ros.cdk.sls.Index build() {
            return new com.aliyun.ros.cdk.sls.Index(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
