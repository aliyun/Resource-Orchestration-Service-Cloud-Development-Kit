package com.aliyun.ros.cdk.sae;

/**
 * A ROS resource type:  `ALIYUN::SAE::Namespace`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:15.909Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.Namespace")
public class Namespace extends com.aliyun.ros.cdk.core.Resource {

    protected Namespace(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Namespace(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::SAE::Namespace`.
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
    public Namespace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.NamespaceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::SAE::Namespace`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Namespace(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.sae.NamespaceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute NamespaceId: Namespace ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNamespaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrNamespaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sae.Namespace}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sae.Namespace> {
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
        private final com.aliyun.ros.cdk.sae.NamespaceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.sae.NamespaceProps.Builder();
        }

        /**
         * Property namespaceId: Namespace ID.
         * <p>
         * Format: "regionId:logicalId" or "logicalId"
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: Namespace ID. This parameter is required.
         */
        public Builder namespaceId(final java.lang.String namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }
        /**
         * Property namespaceId: Namespace ID.
         * <p>
         * Format: "regionId:logicalId" or "logicalId"
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: Namespace ID. This parameter is required.
         */
        public Builder namespaceId(final com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.props.namespaceId(namespaceId);
            return this;
        }

        /**
         * Property namespaceName: Namespace name.
         * <p>
         * @return {@code this}
         * @param namespaceName Property namespaceName: Namespace name. This parameter is required.
         */
        public Builder namespaceName(final java.lang.String namespaceName) {
            this.props.namespaceName(namespaceName);
            return this;
        }
        /**
         * Property namespaceName: Namespace name.
         * <p>
         * @return {@code this}
         * @param namespaceName Property namespaceName: Namespace name. This parameter is required.
         */
        public Builder namespaceName(final com.aliyun.ros.cdk.core.IResolvable namespaceName) {
            this.props.namespaceName(namespaceName);
            return this;
        }

        /**
         * Property namespaceDescription: Namespace description.
         * <p>
         * @return {@code this}
         * @param namespaceDescription Property namespaceDescription: Namespace description. This parameter is required.
         */
        public Builder namespaceDescription(final java.lang.String namespaceDescription) {
            this.props.namespaceDescription(namespaceDescription);
            return this;
        }
        /**
         * Property namespaceDescription: Namespace description.
         * <p>
         * @return {@code this}
         * @param namespaceDescription Property namespaceDescription: Namespace description. This parameter is required.
         */
        public Builder namespaceDescription(final com.aliyun.ros.cdk.core.IResolvable namespaceDescription) {
            this.props.namespaceDescription(namespaceDescription);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.sae.Namespace}.
         */
        @Override
        public com.aliyun.ros.cdk.sae.Namespace build() {
            return new com.aliyun.ros.cdk.sae.Namespace(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
