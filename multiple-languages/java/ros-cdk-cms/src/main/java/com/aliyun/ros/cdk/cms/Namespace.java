package com.aliyun.ros.cdk.cms;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CMS::Namespace</code>, which is used to create a namespace.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:13.195Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.Namespace")
public class Namespace extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cms.INamespace {

    protected Namespace(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Namespace(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Namespace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.NamespaceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Namespace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.NamespaceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreateTime: The timestamp that was generated when the namespace was created.
     * <p>
     * Unit: milliseconds.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Description: The description of the namespace.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ModifyTime: The timestamp that was generated when the namespace was last modified.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime() {
        return software.amazon.jsii.Kernel.get(this, "attrModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Namespace: The namespace for the Alibaba Cloud service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace() {
        return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Specification: The data retention period of the namespace.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>cms.s1.large: Data storage duration is 15 days.</li>
     * <li>cms.s1.xlarge: Data storage duration is 32 days.</li>
     * <li>cms.s1.2xlarge: Data storage duration 63 days.</li>
     * <li>cms.s1.3xlarge: Data storage duration 93 days.</li>
     * <li>cms.s1.6xlarge: Data storage duration 185 days.</li>
     * <li>cms.s1.12xlarge: Data storage duration 376 days.</li>
     * </ul>
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSpecification() {
        return software.amazon.jsii.Kernel.get(this, "attrSpecification", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.NamespaceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cms.NamespaceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.Namespace}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.Namespace> {
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
        private final com.aliyun.ros.cdk.cms.NamespaceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.NamespaceProps.Builder();
        }

        /**
         * Property namespace: The name of the namespace.
         * <p>
         * The name can contain lowercase letters, digits, and hyphens (-).
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
         * The name can contain lowercase letters, digits, and hyphens (-).
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The name of the namespace. This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * Property description: The description of the namespace.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the namespace. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the namespace.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the namespace. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property specification: The data retention period of the namespace.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>cms.s1.large: Data storage duration is 15 days.</li>
         * <li>cms.s1.xlarge: Data storage duration is 32 days.</li>
         * <li>cms.s1.2xlarge: Data storage duration 63 days.</li>
         * <li>cms.s1.3xlarge: Data storage duration 93 days.</li>
         * <li>cms.s1.6xlarge: Data storage duration 185 days.</li>
         * <li>cms.s1.12xlarge: Data storage duration 376 days.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param specification Property specification: The data retention period of the namespace. This parameter is required.
         */
        public Builder specification(final java.lang.String specification) {
            this.props.specification(specification);
            return this;
        }
        /**
         * Property specification: The data retention period of the namespace.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>cms.s1.large: Data storage duration is 15 days.</li>
         * <li>cms.s1.xlarge: Data storage duration is 32 days.</li>
         * <li>cms.s1.2xlarge: Data storage duration 63 days.</li>
         * <li>cms.s1.3xlarge: Data storage duration 93 days.</li>
         * <li>cms.s1.6xlarge: Data storage duration 185 days.</li>
         * <li>cms.s1.12xlarge: Data storage duration 376 days.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param specification Property specification: The data retention period of the namespace. This parameter is required.
         */
        public Builder specification(final com.aliyun.ros.cdk.core.IResolvable specification) {
            this.props.specification(specification);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cms.Namespace}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.Namespace build() {
            return new com.aliyun.ros.cdk.cms.Namespace(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
