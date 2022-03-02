package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::VirtualBorderRouter`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.53.0 (build c071d26)", date = "2022-02-11T01:44:08.627Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VirtualBorderRouter")
public class VirtualBorderRouter extends com.aliyun.ros.cdk.core.Resource {

    protected VirtualBorderRouter(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VirtualBorderRouter(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::VirtualBorderRouter`.
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
    public VirtualBorderRouter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VirtualBorderRouterProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VPC::VirtualBorderRouter`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public VirtualBorderRouter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VirtualBorderRouterProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Name: The name of the VBR.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RouteTableId: The ID of the route table of the VBR.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteTableId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteTableId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VbrId: The ID of the VBR.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVbrId() {
        return software.amazon.jsii.Kernel.get(this, "attrVbrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VlanInterfaceId: The ID of the VBR interface.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVlanInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrVlanInterfaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.VirtualBorderRouter}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.VirtualBorderRouter> {
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
        private final com.aliyun.ros.cdk.vpc.VirtualBorderRouterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.VirtualBorderRouterProps.Builder();
        }

        /**
         * Property localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.
         * <p>
         * @return {@code this}
         * @param localGatewayIp Property localGatewayIp: The IP address of the VBR on the Alibaba Cloud side. This parameter is required.
         */
        public Builder localGatewayIp(final java.lang.String localGatewayIp) {
            this.props.localGatewayIp(localGatewayIp);
            return this;
        }
        /**
         * Property localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.
         * <p>
         * @return {@code this}
         * @param localGatewayIp Property localGatewayIp: The IP address of the VBR on the Alibaba Cloud side. This parameter is required.
         */
        public Builder localGatewayIp(final com.aliyun.ros.cdk.core.IResolvable localGatewayIp) {
            this.props.localGatewayIp(localGatewayIp);
            return this;
        }

        /**
         * Property peerGatewayIp: The IP address of the peer router interface of the VBR.
         * <p>
         * Only the owner of the VBR can set or modify the value.
         * This parameter is required when you create a VBR for the owner of the physical connection.
         * You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
         * <p>
         * @return {@code this}
         * @param peerGatewayIp Property peerGatewayIp: The IP address of the peer router interface of the VBR. This parameter is required.
         */
        public Builder peerGatewayIp(final java.lang.String peerGatewayIp) {
            this.props.peerGatewayIp(peerGatewayIp);
            return this;
        }
        /**
         * Property peerGatewayIp: The IP address of the peer router interface of the VBR.
         * <p>
         * Only the owner of the VBR can set or modify the value.
         * This parameter is required when you create a VBR for the owner of the physical connection.
         * You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
         * <p>
         * @return {@code this}
         * @param peerGatewayIp Property peerGatewayIp: The IP address of the peer router interface of the VBR. This parameter is required.
         */
        public Builder peerGatewayIp(final com.aliyun.ros.cdk.core.IResolvable peerGatewayIp) {
            this.props.peerGatewayIp(peerGatewayIp);
            return this;
        }

        /**
         * Property peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the user side.
         * <p>
         * The two IP addresses must fall within the same subnet.
         * <p>
         * @return {@code this}
         * @param peeringSubnetMask Property peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the user side. This parameter is required.
         */
        public Builder peeringSubnetMask(final java.lang.String peeringSubnetMask) {
            this.props.peeringSubnetMask(peeringSubnetMask);
            return this;
        }
        /**
         * Property peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the user side.
         * <p>
         * The two IP addresses must fall within the same subnet.
         * <p>
         * @return {@code this}
         * @param peeringSubnetMask Property peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the user side. This parameter is required.
         */
        public Builder peeringSubnetMask(final com.aliyun.ros.cdk.core.IResolvable peeringSubnetMask) {
            this.props.peeringSubnetMask(peeringSubnetMask);
            return this;
        }

        /**
         * Property physicalConnectionId: The ID of the physical connection.
         * <p>
         * @return {@code this}
         * @param physicalConnectionId Property physicalConnectionId: The ID of the physical connection. This parameter is required.
         */
        public Builder physicalConnectionId(final java.lang.String physicalConnectionId) {
            this.props.physicalConnectionId(physicalConnectionId);
            return this;
        }
        /**
         * Property physicalConnectionId: The ID of the physical connection.
         * <p>
         * @return {@code this}
         * @param physicalConnectionId Property physicalConnectionId: The ID of the physical connection. This parameter is required.
         */
        public Builder physicalConnectionId(final com.aliyun.ros.cdk.core.IResolvable physicalConnectionId) {
            this.props.physicalConnectionId(physicalConnectionId);
            return this;
        }

        /**
         * Property vlanId: The VLAN ID of the VBR.
         * <p>
         * Valid values: 0 to 2999.
         * Note Only the owner of the physical connection can set this parameter. The VLAN IDs of
         * two VBRs of the same physical connection must be different.
         * <p>
         * @return {@code this}
         * @param vlanId Property vlanId: The VLAN ID of the VBR. This parameter is required.
         */
        public Builder vlanId(final java.lang.Number vlanId) {
            this.props.vlanId(vlanId);
            return this;
        }
        /**
         * Property vlanId: The VLAN ID of the VBR.
         * <p>
         * Valid values: 0 to 2999.
         * Note Only the owner of the physical connection can set this parameter. The VLAN IDs of
         * two VBRs of the same physical connection must be different.
         * <p>
         * @return {@code this}
         * @param vlanId Property vlanId: The VLAN ID of the VBR. This parameter is required.
         */
        public Builder vlanId(final com.aliyun.ros.cdk.core.IResolvable vlanId) {
            this.props.vlanId(vlanId);
            return this;
        }

        /**
         * Property circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical connection.
         * <p>
         * Note Only the owner of the physical connection can set this parameter.
         * <p>
         * @return {@code this}
         * @param circuitCode Property circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical connection. This parameter is required.
         */
        public Builder circuitCode(final java.lang.String circuitCode) {
            this.props.circuitCode(circuitCode);
            return this;
        }
        /**
         * Property circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical connection.
         * <p>
         * Note Only the owner of the physical connection can set this parameter.
         * <p>
         * @return {@code this}
         * @param circuitCode Property circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical connection. This parameter is required.
         */
        public Builder circuitCode(final com.aliyun.ros.cdk.core.IResolvable circuitCode) {
            this.props.circuitCode(circuitCode);
            return this;
        }

        /**
         * Property description: The description of the VBR.
         * <p>
         * The description must be 2 to 256 characters in length. It must start with a letter
         * but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the VBR. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the VBR.
         * <p>
         * The description must be 2 to 256 characters in length. It must start with a letter
         * but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the VBR. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property name: The name of the VBR.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
         * underscores (_), and hyphens (-). The name cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the VBR. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the VBR.
         * <p>
         * The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
         * underscores (_), and hyphens (-). The name cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the VBR. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.VirtualBorderRouter}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.VirtualBorderRouter build() {
            return new com.aliyun.ros.cdk.vpc.VirtualBorderRouter(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
