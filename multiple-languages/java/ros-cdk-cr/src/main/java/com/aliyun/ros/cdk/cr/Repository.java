package com.aliyun.ros.cdk.cr;

/**
 * A ROS resource type:  `ALIYUN::CR::Repository`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:09.515Z")
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
     * Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RepoId: The repository ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRepoId() {
        return software.amazon.jsii.Kernel.get(this, "attrRepoId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RepoName: The name of the repository.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRepoName() {
        return software.amazon.jsii.Kernel.get(this, "attrRepoName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RepoNamespace: The name of the namespace to which the repository belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRepoNamespace() {
        return software.amazon.jsii.Kernel.get(this, "attrRepoNamespace", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RepoType: The type of the repository.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRepoType() {
        return software.amazon.jsii.Kernel.get(this, "attrRepoType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
         * Property repoName: The name of the repository.
         * <p>
         * @return {@code this}
         * @param repoName Property repoName: The name of the repository. This parameter is required.
         */
        public Builder repoName(final java.lang.String repoName) {
            this.props.repoName(repoName);
            return this;
        }
        /**
         * Property repoName: The name of the repository.
         * <p>
         * @return {@code this}
         * @param repoName Property repoName: The name of the repository. This parameter is required.
         */
        public Builder repoName(final com.aliyun.ros.cdk.core.IResolvable repoName) {
            this.props.repoName(repoName);
            return this;
        }

        /**
         * Property repoNamespace: The name of the namespace to which the repository belongs.
         * <p>
         * @return {@code this}
         * @param repoNamespace Property repoNamespace: The name of the namespace to which the repository belongs. This parameter is required.
         */
        public Builder repoNamespace(final java.lang.String repoNamespace) {
            this.props.repoNamespace(repoNamespace);
            return this;
        }
        /**
         * Property repoNamespace: The name of the namespace to which the repository belongs.
         * <p>
         * @return {@code this}
         * @param repoNamespace Property repoNamespace: The name of the namespace to which the repository belongs. This parameter is required.
         */
        public Builder repoNamespace(final com.aliyun.ros.cdk.core.IResolvable repoNamespace) {
            this.props.repoNamespace(repoNamespace);
            return this;
        }

        /**
         * Property repoType: The type of the repository.
         * <p>
         * Valid values: PUBLIC, PRIVATE.
         * <p>
         * @return {@code this}
         * @param repoType Property repoType: The type of the repository. This parameter is required.
         */
        public Builder repoType(final java.lang.String repoType) {
            this.props.repoType(repoType);
            return this;
        }
        /**
         * Property repoType: The type of the repository.
         * <p>
         * Valid values: PUBLIC, PRIVATE.
         * <p>
         * @return {@code this}
         * @param repoType Property repoType: The type of the repository. This parameter is required.
         */
        public Builder repoType(final com.aliyun.ros.cdk.core.IResolvable repoType) {
            this.props.repoType(repoType);
            return this;
        }

        /**
         * Property summary: The summary of the repository.
         * <p>
         * @return {@code this}
         * @param summary Property summary: The summary of the repository. This parameter is required.
         */
        public Builder summary(final java.lang.String summary) {
            this.props.summary(summary);
            return this;
        }
        /**
         * Property summary: The summary of the repository.
         * <p>
         * @return {@code this}
         * @param summary Property summary: The summary of the repository. This parameter is required.
         */
        public Builder summary(final com.aliyun.ros.cdk.core.IResolvable summary) {
            this.props.summary(summary);
            return this;
        }

        /**
         * Property detail: The description of the repository.
         * <p>
         * @return {@code this}
         * @param detail Property detail: The description of the repository. This parameter is required.
         */
        public Builder detail(final java.lang.String detail) {
            this.props.detail(detail);
            return this;
        }
        /**
         * Property detail: The description of the repository.
         * <p>
         * @return {@code this}
         * @param detail Property detail: The description of the repository. This parameter is required.
         */
        public Builder detail(final com.aliyun.ros.cdk.core.IResolvable detail) {
            this.props.detail(detail);
            return this;
        }

        /**
         * Property instanceId: The ID of the enterprise edition instance which repository belongs to.
         * <p>
         * If not provided, will use personal edition instance as default.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the enterprise edition instance which repository belongs to. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the enterprise edition instance which repository belongs to.
         * <p>
         * If not provided, will use personal edition instance as default.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the enterprise edition instance which repository belongs to. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
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
         * Property tagImmutability: Specifies whether the repository is immutable.
         * <p>
         * Only takes effect when InstanceId is specified.
         * <p>
         * @return {@code this}
         * @param tagImmutability Property tagImmutability: Specifies whether the repository is immutable. This parameter is required.
         */
        public Builder tagImmutability(final java.lang.Boolean tagImmutability) {
            this.props.tagImmutability(tagImmutability);
            return this;
        }
        /**
         * Property tagImmutability: Specifies whether the repository is immutable.
         * <p>
         * Only takes effect when InstanceId is specified.
         * <p>
         * @return {@code this}
         * @param tagImmutability Property tagImmutability: Specifies whether the repository is immutable. This parameter is required.
         */
        public Builder tagImmutability(final com.aliyun.ros.cdk.core.IResolvable tagImmutability) {
            this.props.tagImmutability(tagImmutability);
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
