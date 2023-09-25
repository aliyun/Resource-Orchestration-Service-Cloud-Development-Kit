package com.aliyun.ros.cdk.cr;

/**
 * A ROS resource type:  <code>ALIYUN::CR::Namespace</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:24.141Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.Namespace")
public class Namespace extends com.aliyun.ros.cdk.core.Resource {

    protected Namespace(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Namespace(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::CR::Namespace</code>.
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
     * Create a new <code>ALIYUN::CR::Namespace</code>.
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
     * Attribute InstanceId: The ID of the enterprise edition instance which namespace belongs to.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Namespace: The namespace.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNamespace() {
        return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute NamespaceId: The namespace ID.
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
         * Property namespace: The name of the namespace.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The name of the namespace. This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * Property namespace: The name of the namespace.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The name of the namespace. This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * Property autoCreate: Specifies whether to automatically create an image repository.
         * <p>
         * @return {@code this}
         * @param autoCreate Property autoCreate: Specifies whether to automatically create an image repository. This parameter is required.
         */
        public Builder autoCreate(final java.lang.Boolean autoCreate) {
            this.props.autoCreate(autoCreate);
            return this;
        }
        /**
         * Property autoCreate: Specifies whether to automatically create an image repository.
         * <p>
         * @return {@code this}
         * @param autoCreate Property autoCreate: Specifies whether to automatically create an image repository. This parameter is required.
         */
        public Builder autoCreate(final com.aliyun.ros.cdk.core.IResolvable autoCreate) {
            this.props.autoCreate(autoCreate);
            return this;
        }

        /**
         * Property defaultVisibility: The default type of the repository that is automatically created.
         * <p>
         * Valid values: PUBLIC, PRIVATE.
         * <p>
         * @return {@code this}
         * @param defaultVisibility Property defaultVisibility: The default type of the repository that is automatically created. This parameter is required.
         */
        public Builder defaultVisibility(final java.lang.String defaultVisibility) {
            this.props.defaultVisibility(defaultVisibility);
            return this;
        }
        /**
         * Property defaultVisibility: The default type of the repository that is automatically created.
         * <p>
         * Valid values: PUBLIC, PRIVATE.
         * <p>
         * @return {@code this}
         * @param defaultVisibility Property defaultVisibility: The default type of the repository that is automatically created. This parameter is required.
         */
        public Builder defaultVisibility(final com.aliyun.ros.cdk.core.IResolvable defaultVisibility) {
            this.props.defaultVisibility(defaultVisibility);
            return this;
        }

        /**
         * Property instanceId: The ID of the enterprise edition instance which namespace belongs to.
         * <p>
         * If not provided, will use personal edition instance as default.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the enterprise edition instance which namespace belongs to. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the enterprise edition instance which namespace belongs to.
         * <p>
         * If not provided, will use personal edition instance as default.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the enterprise edition instance which namespace belongs to. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cr.Namespace}.
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
