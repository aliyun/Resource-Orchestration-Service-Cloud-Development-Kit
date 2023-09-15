package com.aliyun.ros.cdk.sae.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::SAE::Applications</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-15T09:57:28.175Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.sae.$Module.class, fqn = "@alicloud/ros-cdk-sae.datasource.Applications")
public class Applications extends com.aliyun.ros.cdk.core.Resource {

    protected Applications(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Applications(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::SAE::Applications</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Applications(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.sae.datasource.ApplicationsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::SAE::Applications</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Applications(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.sae.datasource.ApplicationsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::SAE::Applications</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Applications(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ApplicationIds: The list of application IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApplicationIds() {
        return software.amazon.jsii.Kernel.get(this, "attrApplicationIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Applications: The list of applications.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApplications() {
        return software.amazon.jsii.Kernel.get(this, "attrApplications", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.sae.datasource.Applications}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.sae.datasource.Applications> {
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
        private com.aliyun.ros.cdk.sae.datasource.ApplicationsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property appName: The name of application.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The name of application. This parameter is required.
         */
        public Builder appName(final java.lang.String appName) {
            this.props().appName(appName);
            return this;
        }
        /**
         * Property appName: The name of application.
         * <p>
         * @return {@code this}
         * @param appName Property appName: The name of application. This parameter is required.
         */
        public Builder appName(final com.aliyun.ros.cdk.core.IResolvable appName) {
            this.props().appName(appName);
            return this;
        }

        /**
         * Property fieldType: Set the dimension of the filter application.
         * <p>
         * Valid values:
         * appName: The application name.
         * appIds: App IDs.
         * slbIps: SLB IP address.
         * instanceIps: Instance IP address.
         * <p>
         * @return {@code this}
         * @param fieldType Property fieldType: Set the dimension of the filter application. This parameter is required.
         */
        public Builder fieldType(final java.lang.String fieldType) {
            this.props().fieldType(fieldType);
            return this;
        }
        /**
         * Property fieldType: Set the dimension of the filter application.
         * <p>
         * Valid values:
         * appName: The application name.
         * appIds: App IDs.
         * slbIps: SLB IP address.
         * instanceIps: Instance IP address.
         * <p>
         * @return {@code this}
         * @param fieldType Property fieldType: Set the dimension of the filter application. This parameter is required.
         */
        public Builder fieldType(final com.aliyun.ros.cdk.core.IResolvable fieldType) {
            this.props().fieldType(fieldType);
            return this;
        }

        /**
         * Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
         * <p>
         * @return {@code this}
         * @param fieldValue Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application. This parameter is required.
         */
        public Builder fieldValue(final java.lang.String fieldValue) {
            this.props().fieldValue(fieldValue);
            return this;
        }
        /**
         * Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
         * <p>
         * @return {@code this}
         * @param fieldValue Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application. This parameter is required.
         */
        public Builder fieldValue(final com.aliyun.ros.cdk.core.IResolvable fieldValue) {
            this.props().fieldValue(fieldValue);
            return this;
        }

        /**
         * Property namespaceId: The ID of namespace.
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: The ID of namespace. This parameter is required.
         */
        public Builder namespaceId(final java.lang.String namespaceId) {
            this.props().namespaceId(namespaceId);
            return this;
        }
        /**
         * Property namespaceId: The ID of namespace.
         * <p>
         * @return {@code this}
         * @param namespaceId Property namespaceId: The ID of namespace. This parameter is required.
         */
        public Builder namespaceId(final com.aliyun.ros.cdk.core.IResolvable namespaceId) {
            this.props().namespaceId(namespaceId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.sae.datasource.Applications}.
         */
        @Override
        public com.aliyun.ros.cdk.sae.datasource.Applications build() {
            return new com.aliyun.ros.cdk.sae.datasource.Applications(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.sae.datasource.ApplicationsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.sae.datasource.ApplicationsProps.Builder();
            }
            return this.props;
        }
    }
}
