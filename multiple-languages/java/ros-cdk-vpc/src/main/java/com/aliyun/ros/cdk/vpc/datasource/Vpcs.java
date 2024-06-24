package com.aliyun.ros.cdk.vpc.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::VPC::Vpcs</code>, which is used to query the virtual private clouds (VPCs) that you created.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:09.946Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.datasource.Vpcs")
public class Vpcs extends com.aliyun.ros.cdk.core.Resource {

    protected Vpcs(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Vpcs(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Vpcs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.VpcsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Vpcs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.vpc.datasource.VpcsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Vpcs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute VpcIds: The list of The VPC IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcIds() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Vpcs: The detailed information about the VPCs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcs() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.VpcsProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.vpc.datasource.VpcsProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.datasource.VpcsProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.datasource.Vpcs}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.datasource.Vpcs> {
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
        private com.aliyun.ros.cdk.vpc.datasource.VpcsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property dhcpOptionsSetId: The ID of the DHCP options set.
         * <p>
         * @return {@code this}
         * @param dhcpOptionsSetId Property dhcpOptionsSetId: The ID of the DHCP options set. This parameter is required.
         */
        public Builder dhcpOptionsSetId(final java.lang.String dhcpOptionsSetId) {
            this.props().dhcpOptionsSetId(dhcpOptionsSetId);
            return this;
        }
        /**
         * Property dhcpOptionsSetId: The ID of the DHCP options set.
         * <p>
         * @return {@code this}
         * @param dhcpOptionsSetId Property dhcpOptionsSetId: The ID of the DHCP options set. This parameter is required.
         */
        public Builder dhcpOptionsSetId(final com.aliyun.ros.cdk.core.IResolvable dhcpOptionsSetId) {
            this.props().dhcpOptionsSetId(dhcpOptionsSetId);
            return this;
        }

        /**
         * Property isDefault: Specifies whether to query the default VPC in the specified region.
         * <p>
         * Valid values:
         * true(default): queries all VPCs in the specified region.
         * false: does not query the default VPC.
         * <p>
         * @return {@code this}
         * @param isDefault Property isDefault: Specifies whether to query the default VPC in the specified region. This parameter is required.
         */
        public Builder isDefault(final java.lang.Boolean isDefault) {
            this.props().isDefault(isDefault);
            return this;
        }
        /**
         * Property isDefault: Specifies whether to query the default VPC in the specified region.
         * <p>
         * Valid values:
         * true(default): queries all VPCs in the specified region.
         * false: does not query the default VPC.
         * <p>
         * @return {@code this}
         * @param isDefault Property isDefault: Specifies whether to query the default VPC in the specified region. This parameter is required.
         */
        public Builder isDefault(final com.aliyun.ros.cdk.core.IResolvable isDefault) {
            this.props().isDefault(isDefault);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property vpcIds: The list of The VPC IDs.
         * <p>
         * You can specify up to 20 VPC IDs.
         * <p>
         * @return {@code this}
         * @param vpcIds Property vpcIds: The list of The VPC IDs. This parameter is required.
         */
        public Builder vpcIds(final com.aliyun.ros.cdk.core.IResolvable vpcIds) {
            this.props().vpcIds(vpcIds);
            return this;
        }
        /**
         * Property vpcIds: The list of The VPC IDs.
         * <p>
         * You can specify up to 20 VPC IDs.
         * <p>
         * @return {@code this}
         * @param vpcIds Property vpcIds: The list of The VPC IDs. This parameter is required.
         */
        public Builder vpcIds(final java.util.List<? extends java.lang.Object> vpcIds) {
            this.props().vpcIds(vpcIds);
            return this;
        }

        /**
         * Property vpcName: The name of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcName Property vpcName: The name of the VPC. This parameter is required.
         */
        public Builder vpcName(final java.lang.String vpcName) {
            this.props().vpcName(vpcName);
            return this;
        }
        /**
         * Property vpcName: The name of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcName Property vpcName: The name of the VPC. This parameter is required.
         */
        public Builder vpcName(final com.aliyun.ros.cdk.core.IResolvable vpcName) {
            this.props().vpcName(vpcName);
            return this;
        }

        /**
         * Property vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs.
         * <p>
         * @return {@code this}
         * @param vpcOwnerId Property vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs. This parameter is required.
         */
        public Builder vpcOwnerId(final java.lang.String vpcOwnerId) {
            this.props().vpcOwnerId(vpcOwnerId);
            return this;
        }
        /**
         * Property vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs.
         * <p>
         * @return {@code this}
         * @param vpcOwnerId Property vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs. This parameter is required.
         */
        public Builder vpcOwnerId(final com.aliyun.ros.cdk.core.IResolvable vpcOwnerId) {
            this.props().vpcOwnerId(vpcOwnerId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.datasource.Vpcs}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.datasource.Vpcs build() {
            return new com.aliyun.ros.cdk.vpc.datasource.Vpcs(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.vpc.datasource.VpcsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.vpc.datasource.VpcsProps.Builder();
            }
            return this.props;
        }
    }
}
