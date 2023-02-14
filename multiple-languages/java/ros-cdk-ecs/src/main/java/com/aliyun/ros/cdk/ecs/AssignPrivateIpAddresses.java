package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::AssignPrivateIpAddresses`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.74.0 (build 6d08790)", date = "2023-02-14T06:40:10.867Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.AssignPrivateIpAddresses")
public class AssignPrivateIpAddresses extends com.aliyun.ros.cdk.core.Resource {

    protected AssignPrivateIpAddresses(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AssignPrivateIpAddresses(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::AssignPrivateIpAddresses`.
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
    public AssignPrivateIpAddresses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.AssignPrivateIpAddressesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::AssignPrivateIpAddresses`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public AssignPrivateIpAddresses(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.AssignPrivateIpAddressesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute NetworkInterfaceId: The ID of the ENI.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkInterfaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PrivateIpAddresses: Assigned private ip addresses.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivateIpAddresses() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateIpAddresses", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.AssignPrivateIpAddresses}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.AssignPrivateIpAddresses> {
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
        private final com.aliyun.ros.cdk.ecs.AssignPrivateIpAddressesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.AssignPrivateIpAddressesProps.Builder();
        }

        /**
         * Property networkInterfaceId: The ID of the ENI.
         * <p>
         * @return {@code this}
         * @param networkInterfaceId Property networkInterfaceId: The ID of the ENI. This parameter is required.
         */
        public Builder networkInterfaceId(final java.lang.String networkInterfaceId) {
            this.props.networkInterfaceId(networkInterfaceId);
            return this;
        }
        /**
         * Property networkInterfaceId: The ID of the ENI.
         * <p>
         * @return {@code this}
         * @param networkInterfaceId Property networkInterfaceId: The ID of the ENI. This parameter is required.
         */
        public Builder networkInterfaceId(final com.aliyun.ros.cdk.core.IResolvable networkInterfaceId) {
            this.props.networkInterfaceId(networkInterfaceId);
            return this;
        }

        /**
         * Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI.
         * <p>
         * Valid values of number of private ip addresses:
         * When the ENI is in the Available state: 1 to 10.
         * When the ENI is in the InUse state: limited by the instance type.
         * For more information, see Instance type families.
         * You must specify either the PrivateIpAddresses parameter or the SecondaryPrivateIpAddressCount parameter to assign secondary private IP addresses.
         * <p>
         * @return {@code this}
         * @param privateIpAddresses Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI. This parameter is required.
         */
        public Builder privateIpAddresses(final java.util.List<? extends java.lang.Object> privateIpAddresses) {
            this.props.privateIpAddresses(privateIpAddresses);
            return this;
        }
        /**
         * Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI.
         * <p>
         * Valid values of number of private ip addresses:
         * When the ENI is in the Available state: 1 to 10.
         * When the ENI is in the InUse state: limited by the instance type.
         * For more information, see Instance type families.
         * You must specify either the PrivateIpAddresses parameter or the SecondaryPrivateIpAddressCount parameter to assign secondary private IP addresses.
         * <p>
         * @return {@code this}
         * @param privateIpAddresses Property privateIpAddresses: One or multiple secondary private IP addresses selected from the CIDR block of the VSwitch that hosts the ENI. This parameter is required.
         */
        public Builder privateIpAddresses(final com.aliyun.ros.cdk.core.IResolvable privateIpAddresses) {
            this.props.privateIpAddresses(privateIpAddresses);
            return this;
        }

        /**
         * Property secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.
         * <p>
         * @return {@code this}
         * @param secondaryPrivateIpAddressCount Property secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance. This parameter is required.
         */
        public Builder secondaryPrivateIpAddressCount(final java.lang.Number secondaryPrivateIpAddressCount) {
            this.props.secondaryPrivateIpAddressCount(secondaryPrivateIpAddressCount);
            return this;
        }
        /**
         * Property secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance.
         * <p>
         * @return {@code this}
         * @param secondaryPrivateIpAddressCount Property secondaryPrivateIpAddressCount: The specified number of private IP addresses to be assigned by the ECS instance. This parameter is required.
         */
        public Builder secondaryPrivateIpAddressCount(final com.aliyun.ros.cdk.core.IResolvable secondaryPrivateIpAddressCount) {
            this.props.secondaryPrivateIpAddressCount(secondaryPrivateIpAddressCount);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.AssignPrivateIpAddresses}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.AssignPrivateIpAddresses build() {
            return new com.aliyun.ros.cdk.ecs.AssignPrivateIpAddresses(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
