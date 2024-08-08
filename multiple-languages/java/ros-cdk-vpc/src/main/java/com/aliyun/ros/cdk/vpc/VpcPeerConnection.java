package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::VpcPeerConnection</code>, which is used to create a peering connection between virtual private clouds (VPCs).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:14.912Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VpcPeerConnection")
public class VpcPeerConnection extends com.aliyun.ros.cdk.core.Resource {

    protected VpcPeerConnection(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VpcPeerConnection(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public VpcPeerConnection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpcPeerConnectionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public VpcPeerConnection(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpcPeerConnectionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: The ID of the VPC peering connection.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpcPeerConnectionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.VpcPeerConnectionProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VpcPeerConnectionProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.VpcPeerConnection}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.VpcPeerConnection> {
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
        private final com.aliyun.ros.cdk.vpc.VpcPeerConnectionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.VpcPeerConnectionProps.Builder();
        }

        /**
         * Property acceptingVpcId: The ID of the acceptor VPC.
         * <p>
         * @return {@code this}
         * @param acceptingVpcId Property acceptingVpcId: The ID of the acceptor VPC. This parameter is required.
         */
        public Builder acceptingVpcId(final java.lang.String acceptingVpcId) {
            this.props.acceptingVpcId(acceptingVpcId);
            return this;
        }
        /**
         * Property acceptingVpcId: The ID of the acceptor VPC.
         * <p>
         * @return {@code this}
         * @param acceptingVpcId Property acceptingVpcId: The ID of the acceptor VPC. This parameter is required.
         */
        public Builder acceptingVpcId(final com.aliyun.ros.cdk.core.IResolvable acceptingVpcId) {
            this.props.acceptingVpcId(acceptingVpcId);
            return this;
        }

        /**
         * Property vpcId: The ID of the requester VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the requester VPC. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the requester VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the requester VPC. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property acceptingAliUid: The ID of the Alibaba Cloud account to which the acceptor VPC belongs.
         * <p>
         * To create a VPC peering connection within your Alibaba Cloud account, enter the ID
         * of your Alibaba Cloud account.
         * To create a VPC peering connection between your Alibaba Cloud account and another
         * Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
         * Note If the acceptor VPC belongs to a Resource Access Management (RAM) user, you must set
         * the value of AcceptingAliUid to the ID of the corresponding Alibaba Cloud account.
         * Default current account ID.
         * <p>
         * @return {@code this}
         * @param acceptingAliUid Property acceptingAliUid: The ID of the Alibaba Cloud account to which the acceptor VPC belongs. This parameter is required.
         */
        public Builder acceptingAliUid(final java.lang.Number acceptingAliUid) {
            this.props.acceptingAliUid(acceptingAliUid);
            return this;
        }
        /**
         * Property acceptingAliUid: The ID of the Alibaba Cloud account to which the acceptor VPC belongs.
         * <p>
         * To create a VPC peering connection within your Alibaba Cloud account, enter the ID
         * of your Alibaba Cloud account.
         * To create a VPC peering connection between your Alibaba Cloud account and another
         * Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
         * Note If the acceptor VPC belongs to a Resource Access Management (RAM) user, you must set
         * the value of AcceptingAliUid to the ID of the corresponding Alibaba Cloud account.
         * Default current account ID.
         * <p>
         * @return {@code this}
         * @param acceptingAliUid Property acceptingAliUid: The ID of the Alibaba Cloud account to which the acceptor VPC belongs. This parameter is required.
         */
        public Builder acceptingAliUid(final com.aliyun.ros.cdk.core.IResolvable acceptingAliUid) {
            this.props.acceptingAliUid(acceptingAliUid);
            return this;
        }

        /**
         * Property acceptingRegionId: The region ID of the acceptor VPC of the VPC peering connection that you want to create.
         * <p>
         * To create an intra-region VPC peering connection, enter a region ID that is the same
         * as that of the requester VPC.
         * To create an inter-region VPC peering connection, enter a region ID that is different
         * from that of the requester VPC.
         * Default current region.
         * <p>
         * @return {@code this}
         * @param acceptingRegionId Property acceptingRegionId: The region ID of the acceptor VPC of the VPC peering connection that you want to create. This parameter is required.
         */
        public Builder acceptingRegionId(final java.lang.String acceptingRegionId) {
            this.props.acceptingRegionId(acceptingRegionId);
            return this;
        }
        /**
         * Property acceptingRegionId: The region ID of the acceptor VPC of the VPC peering connection that you want to create.
         * <p>
         * To create an intra-region VPC peering connection, enter a region ID that is the same
         * as that of the requester VPC.
         * To create an inter-region VPC peering connection, enter a region ID that is different
         * from that of the requester VPC.
         * Default current region.
         * <p>
         * @return {@code this}
         * @param acceptingRegionId Property acceptingRegionId: The region ID of the acceptor VPC of the VPC peering connection that you want to create. This parameter is required.
         */
        public Builder acceptingRegionId(final com.aliyun.ros.cdk.core.IResolvable acceptingRegionId) {
            this.props.acceptingRegionId(acceptingRegionId);
            return this;
        }

        /**
         * Property deletionForce: Specifies whether to forcefully delete the VPC peering connection.
         * <p>
         * Valid values:false (default): notrue: yes If you forcefully delete the VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Specifies whether to forcefully delete the VPC peering connection. This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * Property deletionForce: Specifies whether to forcefully delete the VPC peering connection.
         * <p>
         * Valid values:false (default): notrue: yes If you forcefully delete the VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Specifies whether to forcefully delete the VPC peering connection. This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * Property description: The description of the VPC peering connection.
         * <p>
         * The description must be 2 to 256 characters in length. It must start with a letter
         * but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the VPC peering connection. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the VPC peering connection.
         * <p>
         * The description must be 2 to 256 characters in length. It must start with a letter
         * but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the VPC peering connection. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property name: The name of the VPC peering connection.
         * <p>
         * The name must be 2 to 128 characters in length and can contain digits, underscores
         * (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the VPC peering connection. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the VPC peering connection.
         * <p>
         * The name must be 2 to 128 characters in length and can contain digits, underscores
         * (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the VPC peering connection. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.VpcPeerConnection}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.VpcPeerConnection build() {
            return new com.aliyun.ros.cdk.vpc.VpcPeerConnection(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
