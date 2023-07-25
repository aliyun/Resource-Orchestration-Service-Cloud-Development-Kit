package com.aliyun.ros.cdk.apigateway.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::ApiGateway::Apps</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:55:58.158Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.datasource.Apps")
public class Apps extends com.aliyun.ros.cdk.core.Resource {

    protected Apps(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Apps(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::ApiGateway::Apps</code>.
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
    public Apps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.apigateway.datasource.AppsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::ApiGateway::Apps</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Apps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.apigateway.datasource.AppsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::ApiGateway::Apps</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Apps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute AppIds: The list of The ApiGateway app ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAppIds() {
        return software.amazon.jsii.Kernel.get(this, "attrAppIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Apps: The information about ApiGateway apps.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrApps() {
        return software.amazon.jsii.Kernel.get(this, "attrApps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.datasource.Apps}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.datasource.Apps> {
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
        private com.aliyun.ros.cdk.apigateway.datasource.AppsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property appId: Unique ID of the app.
         * <p>
         * @return {@code this}
         * @param appId Property appId: Unique ID of the app. This parameter is required.
         */
        public Builder appId(final java.lang.String appId) {
            this.props().appId(appId);
            return this;
        }
        /**
         * Property appId: Unique ID of the app.
         * <p>
         * @return {@code this}
         * @param appId Property appId: Unique ID of the app. This parameter is required.
         */
        public Builder appId(final com.aliyun.ros.cdk.core.IResolvable appId) {
            this.props().appId(appId);
            return this;
        }

        /**
         * Property appOwner: Alibaba Cloud account ID of the app owner.
         * <p>
         * @return {@code this}
         * @param appOwner Property appOwner: Alibaba Cloud account ID of the app owner. This parameter is required.
         */
        public Builder appOwner(final java.lang.String appOwner) {
            this.props().appOwner(appOwner);
            return this;
        }
        /**
         * Property appOwner: Alibaba Cloud account ID of the app owner.
         * <p>
         * @return {@code this}
         * @param appOwner Property appOwner: Alibaba Cloud account ID of the app owner. This parameter is required.
         */
        public Builder appOwner(final com.aliyun.ros.cdk.core.IResolvable appOwner) {
            this.props().appOwner(appOwner);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apigateway.datasource.Apps}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.datasource.Apps build() {
            return new com.aliyun.ros.cdk.apigateway.datasource.Apps(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.apigateway.datasource.AppsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.apigateway.datasource.AppsProps.Builder();
            }
            return this.props;
        }
    }
}
