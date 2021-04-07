package com.aliyun.ros.cdk.cr;

/**
 * A ROS resource type:  `ALIYUN::CR::Namespace`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:41.965Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.Namespace")
public class Namespace extends com.aliyun.ros.cdk.core.Resource {

    protected Namespace(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Namespace(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CR::Namespace`.
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
    public Namespace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.NamespaceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CR::Namespace`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Namespace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cr.NamespaceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute NamespaceId: The namespace id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNamespaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrNamespaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cr.Namespace}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cr.Namespace> {
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
        private final com.aliyun.ros.cdk.cr.NamespaceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cr.NamespaceProps.Builder();
        }

        /**
         * Property namespace: domain name.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: domain name. This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * Property namespace: domain name.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: domain name. This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * Property autoCreate: whether auto create repository.
         * <p>
         * @return {@code this}
         * @param autoCreate Property autoCreate: whether auto create repository. This parameter is required.
         */
        public Builder autoCreate(final java.lang.Boolean autoCreate) {
            this.props.autoCreate(autoCreate);
            return this;
        }
        /**
         * Property autoCreate: whether auto create repository.
         * <p>
         * @return {@code this}
         * @param autoCreate Property autoCreate: whether auto create repository. This parameter is required.
         */
        public Builder autoCreate(final com.aliyun.ros.cdk.core.IResolvable autoCreate) {
            this.props.autoCreate(autoCreate);
            return this;
        }

        /**
         * Property defaultVisibility: repository default visibility, public or private.
         * <p>
         * @return {@code this}
         * @param defaultVisibility Property defaultVisibility: repository default visibility, public or private. This parameter is required.
         */
        public Builder defaultVisibility(final java.lang.String defaultVisibility) {
            this.props.defaultVisibility(defaultVisibility);
            return this;
        }
        /**
         * Property defaultVisibility: repository default visibility, public or private.
         * <p>
         * @return {@code this}
         * @param defaultVisibility Property defaultVisibility: repository default visibility, public or private. This parameter is required.
         */
        public Builder defaultVisibility(final com.aliyun.ros.cdk.core.IResolvable defaultVisibility) {
            this.props.defaultVisibility(defaultVisibility);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cr.Namespace}.
         */
        @Override
        public com.aliyun.ros.cdk.cr.Namespace build() {
            return new com.aliyun.ros.cdk.cr.Namespace(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
