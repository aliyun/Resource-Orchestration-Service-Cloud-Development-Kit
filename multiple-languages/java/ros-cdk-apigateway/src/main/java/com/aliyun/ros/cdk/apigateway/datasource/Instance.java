package com.aliyun.ros.cdk.apigateway.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ApiGateway::Instance</code>, which is used to query the information about an instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:01.882Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.datasource.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.apigateway.datasource.IInstance {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.datasource.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.datasource.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AclId: Access control ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
        return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AclName: Access control name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclName() {
        return software.amazon.jsii.Kernel.get(this, "attrAclName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AclStatus: Access control type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrAclStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AclType: Access control type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclType() {
        return software.amazon.jsii.Kernel.get(this, "attrAclType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClassicEgressAddress: Classic network exit address.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClassicEgressAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrClassicEgressAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: Creation time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EgressIpv6Enable: Does IPV6 Capability Support.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEgressIpv6Enable() {
        return software.amazon.jsii.Kernel.get(this, "attrEgressIpv6Enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExpiredTime: Instance expiration time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpiredTime() {
        return software.amazon.jsii.Kernel.get(this, "attrExpiredTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HttpsPolicy: Https policy.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsPolicy() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: Instance id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceName: Instance name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceRpsLimit: Instance rps limits.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceRpsLimit() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceRpsLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceSpec: Instance type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSpec() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceSpecAttributes: Instance type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceSpecAttributes() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceSpecAttributes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceType: Instance type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InternetEgressAddress: Public network exit address.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInternetEgressAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrInternetEgressAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SupportIpv6: Does ipv6 support.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSupportIpv6() {
        return software.amazon.jsii.Kernel.get(this, "attrSupportIpv6", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserVpcId: User's VpcID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UserVswitchId: DescribeInstances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUserVswitchId() {
        return software.amazon.jsii.Kernel.get(this, "attrUserVswitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VipTypeList: Vip type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVipTypeList() {
        return software.amazon.jsii.Kernel.get(this, "attrVipTypeList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcEgressAddress: Intranet VPC exit network segment.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcEgressAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcEgressAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcIntranetEnable: Whether Vpc allows authorization.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcIntranetEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcIntranetEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcOwnerId: Vpc licensor ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcOwnerId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcOwnerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcSlbIntranetEnable: Whether the slb of the Vpc supports.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcSlbIntranetEnable() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcSlbIntranetEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneId: Zone.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneLocalName: Available area.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneLocalName() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneLocalName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.datasource.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.datasource.InstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.datasource.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.datasource.Instance> {
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
        private final com.aliyun.ros.cdk.apigateway.datasource.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.datasource.InstanceProps.Builder();
        }

        /**
         * Property instanceId: Instance id.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance id. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: Instance id.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance id. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props.refreshOptions(refreshOptions);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apigateway.datasource.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.datasource.Instance build() {
            return new com.aliyun.ros.cdk.apigateway.datasource.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
