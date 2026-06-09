package com.aliyun.ros.cdk.eflo;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Eflo::Vpd</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:40:50.407Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eflo.$Module.class, fqn = "@alicloud/ros-cdk-eflo.Vpd")
public class Vpd extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.eflo.IVpd {

    protected Vpd(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Vpd(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Vpd(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eflo.VpdProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Vpd(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eflo.VpdProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Cidr: The CIDR block of the VPD.
     * <p>
     * <ul>
     * <li>We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.</li>
     * </ul>
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCidr() {
        return software.amazon.jsii.Kernel.get(this, "attrCidr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GmtModified: Modification time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGmtModified() {
        return software.amazon.jsii.Kernel.get(this, "attrGmtModified", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: System-defined parameter.
     * <p>
     * Value: <strong>ChangeResourceGroup</strong>.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecondaryCidrBlocks: List of additional network segment information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecondaryCidrBlocks() {
        return software.amazon.jsii.Kernel.get(this, "attrSecondaryCidrBlocks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tag of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpdId: The ID of the VPD.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpdId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpdId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpdName: Lingjun CIDR block instance name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpdName() {
        return software.amazon.jsii.Kernel.get(this, "attrVpdName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.eflo.VpdProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.eflo.VpdProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.eflo.Vpd}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.eflo.Vpd> {
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
        private final com.aliyun.ros.cdk.eflo.VpdProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.eflo.VpdProps.Builder();
        }

        /**
         * Property cidr: The CIDR block of the VPD.
         * <p>
         * <ul>
         * <li>We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param cidr Property cidr: The CIDR block of the VPD. This parameter is required.
         */
        public Builder cidr(final java.lang.String cidr) {
            this.props.cidr(cidr);
            return this;
        }
        /**
         * Property cidr: The CIDR block of the VPD.
         * <p>
         * <ul>
         * <li>We recommend that you use an RFC private endpoint as the Lingjun CIDR block, such as 10.0.0.0/8,172.16.0.0/12,192.168.0.0/16. In scenarios where the Doringjun CIDR block is connected to each other or where the Lingjun CIDR block is connected to a VPC, make sure that the addresses do not conflict with each other. * You can also use a custom CIDR block other than 100.64.0.0/10, 224.0.0.0/4, 127.0.0.0/8, or 169.254.0.0/16 and their subnets as the primary IPv4 CIDR block of the VPD.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param cidr Property cidr: The CIDR block of the VPD. This parameter is required.
         */
        public Builder cidr(final com.aliyun.ros.cdk.core.IResolvable cidr) {
            this.props.cidr(cidr);
            return this;
        }

        /**
         * Property vpdName: Lingjun CIDR block instance name.
         * <p>
         * @return {@code this}
         * @param vpdName Property vpdName: Lingjun CIDR block instance name. This parameter is required.
         */
        public Builder vpdName(final java.lang.String vpdName) {
            this.props.vpdName(vpdName);
            return this;
        }
        /**
         * Property vpdName: Lingjun CIDR block instance name.
         * <p>
         * @return {@code this}
         * @param vpdName Property vpdName: Lingjun CIDR block instance name. This parameter is required.
         */
        public Builder vpdName(final com.aliyun.ros.cdk.core.IResolvable vpdName) {
            this.props.vpdName(vpdName);
            return this;
        }

        /**
         * Property resourceGroupId: System-defined parameter.
         * <p>
         * Value: <strong>ChangeResourceGroup</strong>.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: System-defined parameter. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: System-defined parameter.
         * <p>
         * Value: <strong>ChangeResourceGroup</strong>.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: System-defined parameter. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property secondaryCidrBlocks: List of additional network segment information.
         * <p>
         * @return {@code this}
         * @param secondaryCidrBlocks Property secondaryCidrBlocks: List of additional network segment information. This parameter is required.
         */
        public Builder secondaryCidrBlocks(final com.aliyun.ros.cdk.core.IResolvable secondaryCidrBlocks) {
            this.props.secondaryCidrBlocks(secondaryCidrBlocks);
            return this;
        }
        /**
         * Property secondaryCidrBlocks: List of additional network segment information.
         * <p>
         * @return {@code this}
         * @param secondaryCidrBlocks Property secondaryCidrBlocks: List of additional network segment information. This parameter is required.
         */
        public Builder secondaryCidrBlocks(final java.util.List<? extends java.lang.Object> secondaryCidrBlocks) {
            this.props.secondaryCidrBlocks(secondaryCidrBlocks);
            return this;
        }

        /**
         * Property subnets: Lingjun subnet information List.
         * <p>
         * @return {@code this}
         * @param subnets Property subnets: Lingjun subnet information List. This parameter is required.
         */
        public Builder subnets(final com.aliyun.ros.cdk.core.IResolvable subnets) {
            this.props.subnets(subnets);
            return this;
        }
        /**
         * Property subnets: Lingjun subnet information List.
         * <p>
         * @return {@code this}
         * @param subnets Property subnets: Lingjun subnet information List. This parameter is required.
         */
        public Builder subnets(final java.util.List<? extends java.lang.Object> subnets) {
            this.props.subnets(subnets);
            return this;
        }

        /**
         * Property tags: Tags of vpd.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of vpd. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.eflo.RosVpd.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.eflo.Vpd}.
         */
        @Override
        public com.aliyun.ros.cdk.eflo.Vpd build() {
            return new com.aliyun.ros.cdk.eflo.Vpd(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
