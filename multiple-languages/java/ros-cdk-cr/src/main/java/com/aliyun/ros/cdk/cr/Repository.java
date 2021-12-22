package com.aliyun.ros.cdk.cr;

/**
 * A ROS resource type:  `ALIYUN::CR::Repository`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.49.0 (build e322d87)", date = "2021-12-21T15:12:57.212Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.Repository")
public class Repository extends com.aliyun.ros.cdk.core.Resource {

    protected Repository(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Repository(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CR::Repository`.
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
    public Repository(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.RepositoryProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CR::Repository`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Repository(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.RepositoryProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute RepoId: The repo id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRepoId() {
        return software.amazon.jsii.Kernel.get(this, "attrRepoId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cr.Repository}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cr.Repository> {
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
        private final com.aliyun.ros.cdk.cr.RepositoryProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cr.RepositoryProps.Builder();
        }

        /**
         * Property repoName: the name of the repo.
         * <p>
         * @return {@code this}
         * @param repoName Property repoName: the name of the repo. This parameter is required.
         */
        public Builder repoName(final java.lang.String repoName) {
            this.props.repoName(repoName);
            return this;
        }
        /**
         * Property repoName: the name of the repo.
         * <p>
         * @return {@code this}
         * @param repoName Property repoName: the name of the repo. This parameter is required.
         */
        public Builder repoName(final com.aliyun.ros.cdk.core.IResolvable repoName) {
            this.props.repoName(repoName);
            return this;
        }

        /**
         * Property repoNamespace: the namespace the repo belongs to.
         * <p>
         * @return {@code this}
         * @param repoNamespace Property repoNamespace: the namespace the repo belongs to. This parameter is required.
         */
        public Builder repoNamespace(final java.lang.String repoNamespace) {
            this.props.repoNamespace(repoNamespace);
            return this;
        }
        /**
         * Property repoNamespace: the namespace the repo belongs to.
         * <p>
         * @return {@code this}
         * @param repoNamespace Property repoNamespace: the namespace the repo belongs to. This parameter is required.
         */
        public Builder repoNamespace(final com.aliyun.ros.cdk.core.IResolvable repoNamespace) {
            this.props.repoNamespace(repoNamespace);
            return this;
        }

        /**
         * Property repoType: repository visibility, public or private.
         * <p>
         * @return {@code this}
         * @param repoType Property repoType: repository visibility, public or private. This parameter is required.
         */
        public Builder repoType(final java.lang.String repoType) {
            this.props.repoType(repoType);
            return this;
        }
        /**
         * Property repoType: repository visibility, public or private.
         * <p>
         * @return {@code this}
         * @param repoType Property repoType: repository visibility, public or private. This parameter is required.
         */
        public Builder repoType(final com.aliyun.ros.cdk.core.IResolvable repoType) {
            this.props.repoType(repoType);
            return this;
        }

        /**
         * Property summary: description or something alike.
         * <p>
         * @return {@code this}
         * @param summary Property summary: description or something alike. This parameter is required.
         */
        public Builder summary(final java.lang.String summary) {
            this.props.summary(summary);
            return this;
        }
        /**
         * Property summary: description or something alike.
         * <p>
         * @return {@code this}
         * @param summary Property summary: description or something alike. This parameter is required.
         */
        public Builder summary(final com.aliyun.ros.cdk.core.IResolvable summary) {
            this.props.summary(summary);
            return this;
        }

        /**
         * Property detail: detailed configuration in markdown format.
         * <p>
         * @return {@code this}
         * @param detail Property detail: detailed configuration in markdown format. This parameter is required.
         */
        public Builder detail(final java.lang.String detail) {
            this.props.detail(detail);
            return this;
        }
        /**
         * Property detail: detailed configuration in markdown format.
         * <p>
         * @return {@code this}
         * @param detail Property detail: detailed configuration in markdown format. This parameter is required.
         */
        public Builder detail(final com.aliyun.ros.cdk.core.IResolvable detail) {
            this.props.detail(detail);
            return this;
        }

        /**
         * Property repoSource: Code Source message.
         * <p>
         * @return {@code this}
         * @param repoSource Property repoSource: Code Source message. This parameter is required.
         */
        public Builder repoSource(final com.aliyun.ros.cdk.core.IResolvable repoSource) {
            this.props.repoSource(repoSource);
            return this;
        }
        /**
         * Property repoSource: Code Source message.
         * <p>
         * @return {@code this}
         * @param repoSource Property repoSource: Code Source message. This parameter is required.
         */
        public Builder repoSource(final com.aliyun.ros.cdk.cr.RosRepository.RepoSourceProperty repoSource) {
            this.props.repoSource(repoSource);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cr.Repository}.
         */
        @Override
        public com.aliyun.ros.cdk.cr.Repository build() {
            return new com.aliyun.ros.cdk.cr.Repository(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
