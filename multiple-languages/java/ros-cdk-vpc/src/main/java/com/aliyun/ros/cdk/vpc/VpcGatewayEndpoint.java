package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::VpcGatewayEndpoint</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:30.699Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpcGatewayEndpoint")
public class VpcGatewayEndpoint extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.vpc.IVpcGatewayEndpoint {

    protected VpcGatewayEndpoint(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpcGatewayEndpoint(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public VpcGatewayEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpcGatewayEndpointProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public VpcGatewayEndpoint(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpcGatewayEndpointProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute EndpointId: Gateway endpoint instance ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEndpointId() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpcGatewayEndpointProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.VpcGatewayEndpointProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.VpcGatewayEndpoint}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.VpcGatewayEndpoint> {
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
        private final com.aliyun.ros.cdk.vpc.VpcGatewayEndpointProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.VpcGatewayEndpointProps.Builder();
        }

        /**
         * Property serviceName: Terminal service name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Terminal service name. This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }
        /**
         * Property serviceName: Terminal service name.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: Terminal service name. This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * Property vpcId: The VPC ID of the gateway endpoint is to be created.
         * <p>
         * The VPC must be in the same region as the gateway endpoint.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC ID of the gateway endpoint is to be created. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC ID of the gateway endpoint is to be created.
         * <p>
         * The VPC must be in the same region as the gateway endpoint.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC ID of the gateway endpoint is to be created. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property endpointDescription: Description information of the gateway endpoint.
         * <p>
         * The length of the description information is between 1 and 255 characters.
         * <p>
         * @return {@code this}
         * @param endpointDescription Property endpointDescription: Description information of the gateway endpoint. This parameter is required.
         */
        public Builder endpointDescription(final java.lang.String endpointDescription) {
            this.props.endpointDescription(endpointDescription);
            return this;
        }
        /**
         * Property endpointDescription: Description information of the gateway endpoint.
         * <p>
         * The length of the description information is between 1 and 255 characters.
         * <p>
         * @return {@code this}
         * @param endpointDescription Property endpointDescription: Description information of the gateway endpoint. This parameter is required.
         */
        public Builder endpointDescription(final com.aliyun.ros.cdk.core.IResolvable endpointDescription) {
            this.props.endpointDescription(endpointDescription);
            return this;
        }

        /**
         * Property endpointName: The name of the gateway endpoint.
         * <p>
         * The length of the name is between 1 and 128 characters.
         * <p>
         * @return {@code this}
         * @param endpointName Property endpointName: The name of the gateway endpoint. This parameter is required.
         */
        public Builder endpointName(final java.lang.String endpointName) {
            this.props.endpointName(endpointName);
            return this;
        }
        /**
         * Property endpointName: The name of the gateway endpoint.
         * <p>
         * The length of the name is between 1 and 128 characters.
         * <p>
         * @return {@code this}
         * @param endpointName Property endpointName: The name of the gateway endpoint. This parameter is required.
         */
        public Builder endpointName(final com.aliyun.ros.cdk.core.IResolvable endpointName) {
            this.props.endpointName(endpointName);
            return this;
        }

        /**
         * Property policyDocument: Access policies for cloud services.
         * <p>
         * For the syntax and structure of access policies, see Permission Policy Syntax and Structure.
         * illustrate
         * This field is required when the selected endpoint service supports setting access policies;
         * This field must be empty when the selected endpoint service does not support setting access policies.
         * Whether the terminal node service supports setting access policies can be obtained through the ListVpcEndpointServicesByEndUser interface. SupportPolicy is true to indicate support, otherwise it is not supported.
         * <p>
         * @return {@code this}
         * @param policyDocument Property policyDocument: Access policies for cloud services. This parameter is required.
         */
        public Builder policyDocument(final java.lang.String policyDocument) {
            this.props.policyDocument(policyDocument);
            return this;
        }
        /**
         * Property policyDocument: Access policies for cloud services.
         * <p>
         * For the syntax and structure of access policies, see Permission Policy Syntax and Structure.
         * illustrate
         * This field is required when the selected endpoint service supports setting access policies;
         * This field must be empty when the selected endpoint service does not support setting access policies.
         * Whether the terminal node service supports setting access policies can be obtained through the ListVpcEndpointServicesByEndUser interface. SupportPolicy is true to indicate support, otherwise it is not supported.
         * <p>
         * @return {@code this}
         * @param policyDocument Property policyDocument: Access policies for cloud services. This parameter is required.
         */
        public Builder policyDocument(final com.aliyun.ros.cdk.core.IResolvable policyDocument) {
            this.props.policyDocument(policyDocument);
            return this;
        }

        /**
         * Property resourceGroupId: The resource group ID to which the gateway endpoint belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group ID to which the gateway endpoint belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The resource group ID to which the gateway endpoint belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group ID to which the gateway endpoint belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: The list of tags in the form of key/value pairs.
         * <p>
         * You can define a maximum of 20 tags.
         * <p>
         * @return {@code this}
         * @param tags Property tags: The list of tags in the form of key/value pairs. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.vpc.RosVpcGatewayEndpoint.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.VpcGatewayEndpoint}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.VpcGatewayEndpoint build() {
            return new com.aliyun.ros.cdk.vpc.VpcGatewayEndpoint(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
