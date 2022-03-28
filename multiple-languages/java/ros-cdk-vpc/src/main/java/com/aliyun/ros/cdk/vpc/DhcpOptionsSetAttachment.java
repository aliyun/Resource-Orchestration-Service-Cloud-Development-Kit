package com.aliyun.ros.cdk.vpc;

/**
 * A ROS resource type:  `ALIYUN::VPC::DhcpOptionsSetAttachment`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-03-28T07:49:03.733Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.DhcpOptionsSetAttachment")
public class DhcpOptionsSetAttachment extends com.aliyun.ros.cdk.core.Resource {

    protected DhcpOptionsSetAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DhcpOptionsSetAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::VPC::DhcpOptionsSetAttachment`.
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
    public DhcpOptionsSetAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.DhcpOptionsSetAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::VPC::DhcpOptionsSetAttachment`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DhcpOptionsSetAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.DhcpOptionsSetAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DhcpOptionsSetId: The ID of the DHCP options set.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDhcpOptionsSetId() {
        return software.amazon.jsii.Kernel.get(this, "attrDhcpOptionsSetId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VpcId: The ID of the VPC network.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.DhcpOptionsSetAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.DhcpOptionsSetAttachment> {
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
        private final com.aliyun.ros.cdk.vpc.DhcpOptionsSetAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.DhcpOptionsSetAttachmentProps.Builder();
        }

        /**
         * Property dhcpOptionsSetId: The ID of the DHCP options set.
         * <p>
         * @return {@code this}
         * @param dhcpOptionsSetId Property dhcpOptionsSetId: The ID of the DHCP options set. This parameter is required.
         */
        public Builder dhcpOptionsSetId(final java.lang.String dhcpOptionsSetId) {
            this.props.dhcpOptionsSetId(dhcpOptionsSetId);
            return this;
        }
        /**
         * Property dhcpOptionsSetId: The ID of the DHCP options set.
         * <p>
         * @return {@code this}
         * @param dhcpOptionsSetId Property dhcpOptionsSetId: The ID of the DHCP options set. This parameter is required.
         */
        public Builder dhcpOptionsSetId(final com.aliyun.ros.cdk.core.IResolvable dhcpOptionsSetId) {
            this.props.dhcpOptionsSetId(dhcpOptionsSetId);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC network that is to be associated with the DHCP options set.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC network that is to be associated with the DHCP options set. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC network that is to be associated with the DHCP options set.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC network that is to be associated with the DHCP options set. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.vpc.DhcpOptionsSetAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.DhcpOptionsSetAttachment build() {
            return new com.aliyun.ros.cdk.vpc.DhcpOptionsSetAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
