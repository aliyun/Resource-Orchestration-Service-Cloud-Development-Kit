package com.aliyun.ros.cdk.fc.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::FC::Services</code>, which is used to query services.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:12.313Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.datasource.Services")
public class Services extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.fc.datasource.IServices {

    protected Services(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Services(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Services(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.datasource.ServicesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Services(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.fc.datasource.ServicesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Services(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute ServiceNames: The list of service names.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceNames() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Services: The list of services.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServices() {
        return software.amazon.jsii.Kernel.get(this, "attrServices", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc.datasource.ServicesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc.datasource.ServicesProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.fc.datasource.Services}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc.datasource.Services> {
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
        private com.aliyun.ros.cdk.fc.datasource.ServicesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property prefix: Qualified returned service names must be prefixed with Prefix.
         * <p>
         * For example, if the Prefix is "a", the returned service names should be started with "a".
         * <p>
         * @return {@code this}
         * @param prefix Property prefix: Qualified returned service names must be prefixed with Prefix. This parameter is required.
         */
        public Builder prefix(final java.lang.String prefix) {
            this.props().prefix(prefix);
            return this;
        }
        /**
         * Property prefix: Qualified returned service names must be prefixed with Prefix.
         * <p>
         * For example, if the Prefix is "a", the returned service names should be started with "a".
         * <p>
         * @return {@code this}
         * @param prefix Property prefix: Qualified returned service names must be prefixed with Prefix. This parameter is required.
         */
        public Builder prefix(final com.aliyun.ros.cdk.core.IResolvable prefix) {
            this.props().prefix(prefix);
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
            this.props().refreshOptions(refreshOptions);
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
            this.props().refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc.datasource.Services}.
         */
        @Override
        public com.aliyun.ros.cdk.fc.datasource.Services build() {
            return new com.aliyun.ros.cdk.fc.datasource.Services(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.fc.datasource.ServicesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.fc.datasource.ServicesProps.Builder();
            }
            return this.props;
        }
    }
}
