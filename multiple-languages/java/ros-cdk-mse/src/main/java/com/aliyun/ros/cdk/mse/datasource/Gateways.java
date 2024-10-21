package com.aliyun.ros.cdk.mse.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::MSE::Gateways</code>, which is used to query gateways.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:31.722Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.datasource.Gateways")
public class Gateways extends com.aliyun.ros.cdk.core.Resource {

    protected Gateways(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Gateways(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Gateways(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mse.datasource.GatewaysProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Gateways(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mse.datasource.GatewaysProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Gateways(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute GatewayIds: The list of gateway IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGatewayIds() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Gateways: The list of gateways.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGateways() {
        return software.amazon.jsii.Kernel.get(this, "attrGateways", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.datasource.GatewaysProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mse.datasource.GatewaysProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.datasource.GatewaysProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mse.datasource.Gateways}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mse.datasource.Gateways> {
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
        private com.aliyun.ros.cdk.mse.datasource.GatewaysProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property gatewayId: The ID of gateway.
         * <p>
         * @return {@code this}
         * @param gatewayId Property gatewayId: The ID of gateway. This parameter is required.
         */
        public Builder gatewayId(final java.lang.String gatewayId) {
            this.props().gatewayId(gatewayId);
            return this;
        }
        /**
         * Property gatewayId: The ID of gateway.
         * <p>
         * @return {@code this}
         * @param gatewayId Property gatewayId: The ID of gateway. This parameter is required.
         */
        public Builder gatewayId(final com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.props().gatewayId(gatewayId);
            return this;
        }

        /**
         * Property gatewayType: The type of gateway.
         * <p>
         * @return {@code this}
         * @param gatewayType Property gatewayType: The type of gateway. This parameter is required.
         */
        public Builder gatewayType(final java.lang.String gatewayType) {
            this.props().gatewayType(gatewayType);
            return this;
        }
        /**
         * Property gatewayType: The type of gateway.
         * <p>
         * @return {@code this}
         * @param gatewayType Property gatewayType: The type of gateway. This parameter is required.
         */
        public Builder gatewayType(final com.aliyun.ros.cdk.core.IResolvable gatewayType) {
            this.props().gatewayType(gatewayType);
            return this;
        }

        /**
         * Property instanceId: The instance ID of gateway.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The instance ID of gateway. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The instance ID of gateway.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The instance ID of gateway. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }

        /**
         * Property name: The name of gateway.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of gateway. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props().name(name);
            return this;
        }
        /**
         * Property name: The name of gateway.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of gateway. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props().name(name);
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
         * Property vpc: The vpc ID of gateway.
         * <p>
         * @return {@code this}
         * @param vpc Property vpc: The vpc ID of gateway. This parameter is required.
         */
        public Builder vpc(final java.lang.String vpc) {
            this.props().vpc(vpc);
            return this;
        }
        /**
         * Property vpc: The vpc ID of gateway.
         * <p>
         * @return {@code this}
         * @param vpc Property vpc: The vpc ID of gateway. This parameter is required.
         */
        public Builder vpc(final com.aliyun.ros.cdk.core.IResolvable vpc) {
            this.props().vpc(vpc);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mse.datasource.Gateways}.
         */
        @Override
        public com.aliyun.ros.cdk.mse.datasource.Gateways build() {
            return new com.aliyun.ros.cdk.mse.datasource.Gateways(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.mse.datasource.GatewaysProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.mse.datasource.GatewaysProps.Builder();
            }
            return this.props;
        }
    }
}
