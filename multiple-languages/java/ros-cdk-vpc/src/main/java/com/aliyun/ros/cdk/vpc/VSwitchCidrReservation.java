package com.aliyun.ros.cdk.vpc;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::VPC::VSwitchCidrReservation</code>, which is used to create a reserved CIDR block for a vSwitch.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:31.585Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.VSwitchCidrReservation")
public class VSwitchCidrReservation extends com.aliyun.ros.cdk.core.Resource {

    protected VSwitchCidrReservation(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VSwitchCidrReservation(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public VSwitchCidrReservation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VSwitchCidrReservationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public VSwitchCidrReservation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VSwitchCidrReservationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute VSwitchCidrReservationId: The ID of the reserved CIDR block.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVSwitchCidrReservationId() {
        return software.amazon.jsii.Kernel.get(this, "attrVSwitchCidrReservationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VSwitchCidrReservationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.VSwitchCidrReservationProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.VSwitchCidrReservationProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.VSwitchCidrReservation}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.VSwitchCidrReservation> {
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
        private final com.aliyun.ros.cdk.vpc.VSwitchCidrReservationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.VSwitchCidrReservationProps.Builder();
        }

        /**
         * Property vSwitchId: The ID of the vSwitch to which the reserved CIDR block belongs.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch to which the reserved CIDR block belongs. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the vSwitch to which the reserved CIDR block belongs.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch to which the reserved CIDR block belongs. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property ipVersion: The IP version of the reserved CIDR block.
         * <p>
         * Valid values:
         * IPv4 (default)
         * IPv6
         * <p>
         * @return {@code this}
         * @param ipVersion Property ipVersion: The IP version of the reserved CIDR block. This parameter is required.
         */
        public Builder ipVersion(final java.lang.String ipVersion) {
            this.props.ipVersion(ipVersion);
            return this;
        }
        /**
         * Property ipVersion: The IP version of the reserved CIDR block.
         * <p>
         * Valid values:
         * IPv4 (default)
         * IPv6
         * <p>
         * @return {@code this}
         * @param ipVersion Property ipVersion: The IP version of the reserved CIDR block. This parameter is required.
         */
        public Builder ipVersion(final com.aliyun.ros.cdk.core.IResolvable ipVersion) {
            this.props.ipVersion(ipVersion);
            return this;
        }

        /**
         * Property tags:.
         * <p>
         * @return {@code this}
         * @param tags Property tags:. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.vpc.RosVSwitchCidrReservation.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property vSwitchCidrReservationCidr: The reserved CIDR block of the vSwitch.
         * <p>
         * When IpVersion is set to IPv4, the reserved CIDR block must be a proper subset of the IPv4 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 28.
         * When IpVersion is set to IPv6, the reserved CIDR block must be a proper subset of the IPv6 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 80.
         * Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
         * <p>
         * @return {@code this}
         * @param vSwitchCidrReservationCidr Property vSwitchCidrReservationCidr: The reserved CIDR block of the vSwitch. This parameter is required.
         */
        public Builder vSwitchCidrReservationCidr(final java.lang.String vSwitchCidrReservationCidr) {
            this.props.vSwitchCidrReservationCidr(vSwitchCidrReservationCidr);
            return this;
        }
        /**
         * Property vSwitchCidrReservationCidr: The reserved CIDR block of the vSwitch.
         * <p>
         * When IpVersion is set to IPv4, the reserved CIDR block must be a proper subset of the IPv4 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 28.
         * When IpVersion is set to IPv6, the reserved CIDR block must be a proper subset of the IPv6 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 80.
         * Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
         * <p>
         * @return {@code this}
         * @param vSwitchCidrReservationCidr Property vSwitchCidrReservationCidr: The reserved CIDR block of the vSwitch. This parameter is required.
         */
        public Builder vSwitchCidrReservationCidr(final com.aliyun.ros.cdk.core.IResolvable vSwitchCidrReservationCidr) {
            this.props.vSwitchCidrReservationCidr(vSwitchCidrReservationCidr);
            return this;
        }

        /**
         * Property vSwitchCidrReservationDescription: The description of the reserved CIDR block.
         * <p>
         * This parameter is empty by default.
         * The description must be 2 to 256 characters in length. It must start with a letter and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param vSwitchCidrReservationDescription Property vSwitchCidrReservationDescription: The description of the reserved CIDR block. This parameter is required.
         */
        public Builder vSwitchCidrReservationDescription(final java.lang.String vSwitchCidrReservationDescription) {
            this.props.vSwitchCidrReservationDescription(vSwitchCidrReservationDescription);
            return this;
        }
        /**
         * Property vSwitchCidrReservationDescription: The description of the reserved CIDR block.
         * <p>
         * This parameter is empty by default.
         * The description must be 2 to 256 characters in length. It must start with a letter and cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param vSwitchCidrReservationDescription Property vSwitchCidrReservationDescription: The description of the reserved CIDR block. This parameter is required.
         */
        public Builder vSwitchCidrReservationDescription(final com.aliyun.ros.cdk.core.IResolvable vSwitchCidrReservationDescription) {
            this.props.vSwitchCidrReservationDescription(vSwitchCidrReservationDescription);
            return this;
        }

        /**
         * Property vSwitchCidrReservationMask: The subnet mask of the reserved CIDR block.
         * <p>
         * When IpVersion is set to IPv4, the subnet mask length of the CIDR block must be greater than the IPv4 subnet mask length of the vSwitch and cannot be greater than 28.
         * When IpVersion is set to IPv6, the subnet mask length of the CIDR block must be greater than the IPv6 subnet mask length of the vSwitch and cannot be greater than 80.
         * Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
         * <p>
         * @return {@code this}
         * @param vSwitchCidrReservationMask Property vSwitchCidrReservationMask: The subnet mask of the reserved CIDR block. This parameter is required.
         */
        public Builder vSwitchCidrReservationMask(final java.lang.String vSwitchCidrReservationMask) {
            this.props.vSwitchCidrReservationMask(vSwitchCidrReservationMask);
            return this;
        }
        /**
         * Property vSwitchCidrReservationMask: The subnet mask of the reserved CIDR block.
         * <p>
         * When IpVersion is set to IPv4, the subnet mask length of the CIDR block must be greater than the IPv4 subnet mask length of the vSwitch and cannot be greater than 28.
         * When IpVersion is set to IPv6, the subnet mask length of the CIDR block must be greater than the IPv6 subnet mask length of the vSwitch and cannot be greater than 80.
         * Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
         * <p>
         * @return {@code this}
         * @param vSwitchCidrReservationMask Property vSwitchCidrReservationMask: The subnet mask of the reserved CIDR block. This parameter is required.
         */
        public Builder vSwitchCidrReservationMask(final com.aliyun.ros.cdk.core.IResolvable vSwitchCidrReservationMask) {
            this.props.vSwitchCidrReservationMask(vSwitchCidrReservationMask);
            return this;
        }

        /**
         * Property vSwitchCidrReservationName: The name of the reserved CIDR block.
         * <p>
         * The name must be 2 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param vSwitchCidrReservationName Property vSwitchCidrReservationName: The name of the reserved CIDR block. This parameter is required.
         */
        public Builder vSwitchCidrReservationName(final java.lang.String vSwitchCidrReservationName) {
            this.props.vSwitchCidrReservationName(vSwitchCidrReservationName);
            return this;
        }
        /**
         * Property vSwitchCidrReservationName: The name of the reserved CIDR block.
         * <p>
         * The name must be 2 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
         * <p>
         * @return {@code this}
         * @param vSwitchCidrReservationName Property vSwitchCidrReservationName: The name of the reserved CIDR block. This parameter is required.
         */
        public Builder vSwitchCidrReservationName(final com.aliyun.ros.cdk.core.IResolvable vSwitchCidrReservationName) {
            this.props.vSwitchCidrReservationName(vSwitchCidrReservationName);
            return this;
        }

        /**
         * Property vSwitchCidrReservationType: The type of reserved CIDR block.
         * <p>
         * Set the value to prefix.
         * Note When a user or a cloud service allocates a CIDR block to an elastic network interface (ENI), the CIDR block must be allocated from the reserved CIDR block. If the reserved CIDR block is exhausted, an error is returned.
         * <p>
         * @return {@code this}
         * @param vSwitchCidrReservationType Property vSwitchCidrReservationType: The type of reserved CIDR block. This parameter is required.
         */
        public Builder vSwitchCidrReservationType(final java.lang.String vSwitchCidrReservationType) {
            this.props.vSwitchCidrReservationType(vSwitchCidrReservationType);
            return this;
        }
        /**
         * Property vSwitchCidrReservationType: The type of reserved CIDR block.
         * <p>
         * Set the value to prefix.
         * Note When a user or a cloud service allocates a CIDR block to an elastic network interface (ENI), the CIDR block must be allocated from the reserved CIDR block. If the reserved CIDR block is exhausted, an error is returned.
         * <p>
         * @return {@code this}
         * @param vSwitchCidrReservationType Property vSwitchCidrReservationType: The type of reserved CIDR block. This parameter is required.
         */
        public Builder vSwitchCidrReservationType(final com.aliyun.ros.cdk.core.IResolvable vSwitchCidrReservationType) {
            this.props.vSwitchCidrReservationType(vSwitchCidrReservationType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.VSwitchCidrReservation}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.VSwitchCidrReservation build() {
            return new com.aliyun.ros.cdk.vpc.VSwitchCidrReservation(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
