package com.aliyun.ros.cdk.pai.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::PAI::Services</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-15T07:33:49.623Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pai.$Module.class, fqn = "@alicloud/ros-cdk-pai.datasource.Services")
public class Services extends com.aliyun.ros.cdk.core.Resource {

    protected Services(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Services(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::PAI::Services</code>.
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
    public Services(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.pai.datasource.ServicesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::PAI::Services</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Services(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.pai.datasource.ServicesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::PAI::Services</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServiceNames() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceNames", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Services: The list of services.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrServices() {
        return software.amazon.jsii.Kernel.get(this, "attrServices", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.pai.datasource.Services}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pai.datasource.Services> {
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
        private com.aliyun.ros.cdk.pai.datasource.ServicesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property labels: Service Tag.
         * <p>
         * @return {@code this}
         * @param labels Property labels: Service Tag. This parameter is required.
         */
        public Builder labels(final com.aliyun.ros.cdk.core.IResolvable labels) {
            this.props().labels(labels);
            return this;
        }
        /**
         * Property labels: Service Tag.
         * <p>
         * @return {@code this}
         * @param labels Property labels: Service Tag. This parameter is required.
         */
        public Builder labels(final java.util.Map<java.lang.String, ? extends java.lang.Object> labels) {
            this.props().labels(labels);
            return this;
        }

        /**
         * Property serviceName: Service Name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Service Name. This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props().serviceName(serviceName);
            return this;
        }
        /**
         * Property serviceName: Service Name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Service Name. This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props().serviceName(serviceName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pai.datasource.Services}.
         */
        @Override
        public com.aliyun.ros.cdk.pai.datasource.Services build() {
            return new com.aliyun.ros.cdk.pai.datasource.Services(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.pai.datasource.ServicesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.pai.datasource.ServicesProps.Builder();
            }
            return this.props;
        }
    }
}
