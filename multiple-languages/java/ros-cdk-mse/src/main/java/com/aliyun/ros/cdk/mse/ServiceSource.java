package com.aliyun.ros.cdk.mse;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MSE::ServiceSource</code>, which is used to create a Nacos service source.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:29.684Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.ServiceSource")
public class ServiceSource extends com.aliyun.ros.cdk.core.Resource {

    protected ServiceSource(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ServiceSource(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ServiceSource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.ServiceSourceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ServiceSource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.ServiceSourceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Address: Registration Address.
     * <p>
     * If not specified, it will be automatically generated based on the selected instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute GatewayUniqueId: The unique ID of the gateway.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGatewayUniqueId() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayUniqueId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Id: The ID of service source.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrId() {
        return software.amazon.jsii.Kernel.get(this, "attrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Name: The name.
     * <p>
     * If Type is set to K8S, this parameter specifies the name of the ACK cluster.
     * If Type is set to NACOS, this parameter specifies the ID of the Nacos instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mse.ServiceSource}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mse.ServiceSource> {
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
        private final com.aliyun.ros.cdk.mse.ServiceSourceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mse.ServiceSourceProps.Builder();
        }

        /**
         * Property gatewayUniqueId: The unique ID of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayUniqueId Property gatewayUniqueId: The unique ID of the gateway. This parameter is required.
         */
        public Builder gatewayUniqueId(final java.lang.String gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
            return this;
        }
        /**
         * Property gatewayUniqueId: The unique ID of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayUniqueId Property gatewayUniqueId: The unique ID of the gateway. This parameter is required.
         */
        public Builder gatewayUniqueId(final com.aliyun.ros.cdk.core.IResolvable gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
            return this;
        }

        /**
         * Property name: The name.
         * <p>
         * If Source=K8S, this parameter specifies the name of the ACK cluster.
         * If Source=MSE, this parameter specifies the ID of the Nacos instance.
         * If Source=MSE_ZK, this parameter specifies the ID of the ZooKeeper instance.
         * If Source=EDAS, this parameter specifies the ID of the EDAS namespace.
         * If Source=SAE, this parameter specifies the ID of the SAE namespace.
         * <p>
         * @return {@code this}
         * @param name Property name: The name. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name.
         * <p>
         * If Source=K8S, this parameter specifies the name of the ACK cluster.
         * If Source=MSE, this parameter specifies the ID of the Nacos instance.
         * If Source=MSE_ZK, this parameter specifies the ID of the ZooKeeper instance.
         * If Source=EDAS, this parameter specifies the ID of the EDAS namespace.
         * If Source=SAE, this parameter specifies the ID of the SAE namespace.
         * <p>
         * @return {@code this}
         * @param name Property name: The name. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property source: The service source.
         * <p>
         * Valid values:
         * K8S: ACK cluster
         * MSE: MSE Nacos instance
         * <p>
         * @return {@code this}
         * @param source Property source: The service source. This parameter is required.
         */
        public Builder source(final java.lang.String source) {
            this.props.source(source);
            return this;
        }
        /**
         * Property source: The service source.
         * <p>
         * Valid values:
         * K8S: ACK cluster
         * MSE: MSE Nacos instance
         * <p>
         * @return {@code this}
         * @param source Property source: The service source. This parameter is required.
         */
        public Builder source(final com.aliyun.ros.cdk.core.IResolvable source) {
            this.props.source(source);
            return this;
        }

        /**
         * Property address: Registration Address.
         * <p>
         * If not specified, it will be automatically generated based on the selected instance.
         * <p>
         * @return {@code this}
         * @param address Property address: Registration Address. This parameter is required.
         */
        public Builder address(final java.lang.String address) {
            this.props.address(address);
            return this;
        }
        /**
         * Property address: Registration Address.
         * <p>
         * If not specified, it will be automatically generated based on the selected instance.
         * <p>
         * @return {@code this}
         * @param address Property address: Registration Address. This parameter is required.
         */
        public Builder address(final com.aliyun.ros.cdk.core.IResolvable address) {
            this.props.address(address);
            return this;
        }

        /**
         * Property groupList: The list of service groups.
         * <p>
         * This is required when Source=EDAS.
         * <p>
         * @return {@code this}
         * @param groupList Property groupList: The list of service groups. This parameter is required.
         */
        public Builder groupList(final java.util.List<? extends java.lang.Object> groupList) {
            this.props.groupList(groupList);
            return this;
        }
        /**
         * Property groupList: The list of service groups.
         * <p>
         * This is required when Source=EDAS.
         * <p>
         * @return {@code this}
         * @param groupList Property groupList: The list of service groups. This parameter is required.
         */
        public Builder groupList(final com.aliyun.ros.cdk.core.IResolvable groupList) {
            this.props.groupList(groupList);
            return this;
        }

        /**
         * Property ingressOptions: The Ingress configuration.
         * <p>
         * @return {@code this}
         * @param ingressOptions Property ingressOptions: The Ingress configuration. This parameter is required.
         */
        public Builder ingressOptions(final com.aliyun.ros.cdk.core.IResolvable ingressOptions) {
            this.props.ingressOptions(ingressOptions);
            return this;
        }
        /**
         * Property ingressOptions: The Ingress configuration.
         * <p>
         * @return {@code this}
         * @param ingressOptions Property ingressOptions: The Ingress configuration. This parameter is required.
         */
        public Builder ingressOptions(final com.aliyun.ros.cdk.mse.RosServiceSource.IngressOptionsProperty ingressOptions) {
            this.props.ingressOptions(ingressOptions);
            return this;
        }

        /**
         * Property pathList: An array of service root paths.
         * <p>
         * @return {@code this}
         * @param pathList Property pathList: An array of service root paths. This parameter is required.
         */
        public Builder pathList(final java.util.List<? extends java.lang.Object> pathList) {
            this.props.pathList(pathList);
            return this;
        }
        /**
         * Property pathList: An array of service root paths.
         * <p>
         * @return {@code this}
         * @param pathList Property pathList: An array of service root paths. This parameter is required.
         */
        public Builder pathList(final com.aliyun.ros.cdk.core.IResolvable pathList) {
            this.props.pathList(pathList);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mse.ServiceSource}.
         */
        @Override
        public com.aliyun.ros.cdk.mse.ServiceSource build() {
            return new com.aliyun.ros.cdk.mse.ServiceSource(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
