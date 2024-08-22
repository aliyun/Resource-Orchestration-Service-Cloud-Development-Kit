package com.aliyun.ros.cdk.oos.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::OOS::GitCodeRepo</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:22.716Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.datasource.GitCodeRepo")
public class GitCodeRepo extends com.aliyun.ros.cdk.core.Resource {

    protected GitCodeRepo(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected GitCodeRepo(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public GitCodeRepo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.datasource.GitCodeRepoProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public GitCodeRepo(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.datasource.GitCodeRepoProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AuthorizedUrl: Authorized url.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAuthorizedUrl() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthorizedUrl", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.datasource.GitCodeRepoProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.datasource.GitCodeRepoProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.datasource.GitCodeRepoProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.oos.datasource.GitCodeRepo}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oos.datasource.GitCodeRepo> {
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
        private final com.aliyun.ros.cdk.oos.datasource.GitCodeRepoProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oos.datasource.GitCodeRepoProps.Builder();
        }

        /**
         * Property owner: Git account.
         * <p>
         * @return {@code this}
         * @param owner Property owner: Git account. This parameter is required.
         */
        public Builder owner(final java.lang.String owner) {
            this.props.owner(owner);
            return this;
        }
        /**
         * Property owner: Git account.
         * <p>
         * @return {@code this}
         * @param owner Property owner: Git account. This parameter is required.
         */
        public Builder owner(final com.aliyun.ros.cdk.core.IResolvable owner) {
            this.props.owner(owner);
            return this;
        }

        /**
         * Property platform: Git platform.
         * <p>
         * @return {@code this}
         * @param platform Property platform: Git platform. This parameter is required.
         */
        public Builder platform(final java.lang.String platform) {
            this.props.platform(platform);
            return this;
        }
        /**
         * Property platform: Git platform.
         * <p>
         * @return {@code this}
         * @param platform Property platform: Git platform. This parameter is required.
         */
        public Builder platform(final com.aliyun.ros.cdk.core.IResolvable platform) {
            this.props.platform(platform);
            return this;
        }

        /**
         * Property repository: Git repository.
         * <p>
         * @return {@code this}
         * @param repository Property repository: Git repository. This parameter is required.
         */
        public Builder repository(final java.lang.String repository) {
            this.props.repository(repository);
            return this;
        }
        /**
         * Property repository: Git repository.
         * <p>
         * @return {@code this}
         * @param repository Property repository: Git repository. This parameter is required.
         */
        public Builder repository(final com.aliyun.ros.cdk.core.IResolvable repository) {
            this.props.repository(repository);
            return this;
        }

        /**
         * Property commitId: Git commit id.
         * <p>
         * @return {@code this}
         * @param commitId Property commitId: Git commit id. This parameter is required.
         */
        public Builder commitId(final java.lang.String commitId) {
            this.props.commitId(commitId);
            return this;
        }
        /**
         * Property commitId: Git commit id.
         * <p>
         * @return {@code this}
         * @param commitId Property commitId: Git commit id. This parameter is required.
         */
        public Builder commitId(final com.aliyun.ros.cdk.core.IResolvable commitId) {
            this.props.commitId(commitId);
            return this;
        }

        /**
         * Property organization: Git organization.
         * <p>
         * @return {@code this}
         * @param organization Property organization: Git organization. This parameter is required.
         */
        public Builder organization(final java.lang.String organization) {
            this.props.organization(organization);
            return this;
        }
        /**
         * Property organization: Git organization.
         * <p>
         * @return {@code this}
         * @param organization Property organization: Git organization. This parameter is required.
         */
        public Builder organization(final com.aliyun.ros.cdk.core.IResolvable organization) {
            this.props.organization(organization);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oos.datasource.GitCodeRepo}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.datasource.GitCodeRepo build() {
            return new com.aliyun.ros.cdk.oos.datasource.GitCodeRepo(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
