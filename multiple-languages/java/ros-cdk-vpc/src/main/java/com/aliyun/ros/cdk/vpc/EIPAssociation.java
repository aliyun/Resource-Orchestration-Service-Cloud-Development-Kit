package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  <code>ALIYUN::VPC::EIPAssociation</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:37.518Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.EIPAssociation")
public class EIPAssociation extends com.aliyun.ros.cdk.core.Resource {

    protected EIPAssociation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EIPAssociation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::VPC::EIPAssociation</code>.
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
    public EIPAssociation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.EIPAssociationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::VPC::EIPAssociation</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public EIPAssociation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.EIPAssociationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC.
     * <p>
     * Returned only for VPC elastic IP addresses.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAllocationId() {
        return software.amazon.jsii.Kernel.get(this, "attrAllocationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute EipAddress: IP address of created EIP.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEipAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrEipAddress", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.EIPAssociation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.EIPAssociation> {
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
        private final com.aliyun.ros.cdk.vpc.EIPAssociationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.EIPAssociationProps.Builder();
        }

        /**
         * Property allocationId: EIP instance id to bind.
         * <p>
         * @return {@code this}
         * @param allocationId Property allocationId: EIP instance id to bind. This parameter is required.
         */
        public Builder allocationId(final java.lang.String allocationId) {
            this.props.allocationId(allocationId);
            return this;
        }
        /**
         * Property allocationId: EIP instance id to bind.
         * <p>
         * @return {@code this}
         * @param allocationId Property allocationId: EIP instance id to bind. This parameter is required.
         */
        public Builder allocationId(final com.aliyun.ros.cdk.core.IResolvable allocationId) {
            this.props.allocationId(allocationId);
            return this;
        }

        /**
         * Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property mode: The mode of association.
         * <p>
         * Valid values:
         * NAT(Default): NAT mode.
         * BINDED: Cut-through mode.
         * MULTI_BINDED: Multi-EIP to ENI mode.
         * This is required only when the value of InstanceType is NetworkInterface.
         * <p>
         * @return {@code this}
         * @param mode Property mode: The mode of association. This parameter is required.
         */
        public Builder mode(final java.lang.String mode) {
            this.props.mode(mode);
            return this;
        }
        /**
         * Property mode: The mode of association.
         * <p>
         * Valid values:
         * NAT(Default): NAT mode.
         * BINDED: Cut-through mode.
         * MULTI_BINDED: Multi-EIP to ENI mode.
         * This is required only when the value of InstanceType is NetworkInterface.
         * <p>
         * @return {@code this}
         * @param mode Property mode: The mode of association. This parameter is required.
         */
        public Builder mode(final com.aliyun.ros.cdk.core.IResolvable mode) {
            this.props.mode(mode);
            return this;
        }

        /**
         * Property privateIpAddress: An IP address in the CIDR block of the VSwitch.
         * <p>
         * If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: An IP address in the CIDR block of the VSwitch. This parameter is required.
         */
        public Builder privateIpAddress(final java.lang.String privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }
        /**
         * Property privateIpAddress: An IP address in the CIDR block of the VSwitch.
         * <p>
         * If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
         * <p>
         * @return {@code this}
         * @param privateIpAddress Property privateIpAddress: An IP address in the CIDR block of the VSwitch. This parameter is required.
         */
        public Builder privateIpAddress(final com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.props.privateIpAddress(privateIpAddress);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.EIPAssociation}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.EIPAssociation build() {
            return new com.aliyun.ros.cdk.vpc.EIPAssociation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
