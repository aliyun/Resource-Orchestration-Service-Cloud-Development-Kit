package com.aliyun.ros.cdk.oos;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::OOS::DeployRevision</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:27.288Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.DeployRevision")
public class DeployRevision extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.oos.IDeployRevision {

    protected DeployRevision(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DeployRevision(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DeployRevision(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.DeployRevisionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DeployRevision(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.DeployRevisionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute RevisionId: The ID of the revision.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRevisionId() {
        return software.amazon.jsii.Kernel.get(this, "attrRevisionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.oos.DeployRevisionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.DeployRevisionProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.oos.DeployRevision}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.oos.DeployRevision> {
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
        private final com.aliyun.ros.cdk.oos.DeployRevisionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.oos.DeployRevisionProps.Builder();
        }

        /**
         * Property applicationName: The name of the application.
         * <p>
         * @return {@code this}
         * @param applicationName Property applicationName: The name of the application. This parameter is required.
         */
        public Builder applicationName(final java.lang.String applicationName) {
            this.props.applicationName(applicationName);
            return this;
        }
        /**
         * Property applicationName: The name of the application.
         * <p>
         * @return {@code this}
         * @param applicationName Property applicationName: The name of the application. This parameter is required.
         */
        public Builder applicationName(final com.aliyun.ros.cdk.core.IResolvable applicationName) {
            this.props.applicationName(applicationName);
            return this;
        }

        /**
         * Property description: The description of the revision.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the revision. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the revision.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the revision. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property hooks: The hook of the code to be deployed.
         * <p>
         * @return {@code this}
         * @param hooks Property hooks: The hook of the code to be deployed. This parameter is required.
         */
        public Builder hooks(final com.aliyun.ros.cdk.core.IResolvable hooks) {
            this.props.hooks(hooks);
            return this;
        }
        /**
         * Property hooks: The hook of the code to be deployed.
         * <p>
         * @return {@code this}
         * @param hooks Property hooks: The hook of the code to be deployed. This parameter is required.
         */
        public Builder hooks(final java.util.Map<java.lang.String, ? extends java.lang.Object> hooks) {
            this.props.hooks(hooks);
            return this;
        }

        /**
         * Property location: The location of the code to be deployed.
         * <p>
         * @return {@code this}
         * @param location Property location: The location of the code to be deployed. This parameter is required.
         */
        public Builder location(final com.aliyun.ros.cdk.core.IResolvable location) {
            this.props.location(location);
            return this;
        }
        /**
         * Property location: The location of the code to be deployed.
         * <p>
         * @return {@code this}
         * @param location Property location: The location of the code to be deployed. This parameter is required.
         */
        public Builder location(final java.util.Map<java.lang.String, ? extends java.lang.Object> location) {
            this.props.location(location);
            return this;
        }

        /**
         * Property revisionType: The type of the revision.
         * <p>
         * @return {@code this}
         * @param revisionType Property revisionType: The type of the revision. This parameter is required.
         */
        public Builder revisionType(final java.lang.String revisionType) {
            this.props.revisionType(revisionType);
            return this;
        }
        /**
         * Property revisionType: The type of the revision.
         * <p>
         * @return {@code this}
         * @param revisionType Property revisionType: The type of the revision. This parameter is required.
         */
        public Builder revisionType(final com.aliyun.ros.cdk.core.IResolvable revisionType) {
            this.props.revisionType(revisionType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.oos.DeployRevision}.
         */
        @Override
        public com.aliyun.ros.cdk.oos.DeployRevision build() {
            return new com.aliyun.ros.cdk.oos.DeployRevision(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
