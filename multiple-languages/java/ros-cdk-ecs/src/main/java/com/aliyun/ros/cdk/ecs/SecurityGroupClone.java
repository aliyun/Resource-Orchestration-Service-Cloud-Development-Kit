package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  `ALIYUN::ECS::SecurityGroupClone`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:04.032Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.SecurityGroupClone")
public class SecurityGroupClone extends com.aliyun.ros.cdk.core.Resource {

    protected SecurityGroupClone(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SecurityGroupClone(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ECS::SecurityGroupClone`.
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
    public SecurityGroupClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SecurityGroupCloneProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ECS::SecurityGroupClone`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public SecurityGroupClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.SecurityGroupCloneProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute SecurityGroupId: Generated security group id of new security group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.SecurityGroupClone}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.SecurityGroupClone> {
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
        private final com.aliyun.ros.cdk.ecs.SecurityGroupCloneProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.SecurityGroupCloneProps.Builder();
        }

        /**
         * Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group.
         * <p>
         * If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
         * <p>
         * @return {@code this}
         * @param sourceSecurityGroupId Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group. This parameter is required.
         */
        public Builder sourceSecurityGroupId(final java.lang.String sourceSecurityGroupId) {
            this.props.sourceSecurityGroupId(sourceSecurityGroupId);
            return this;
        }
        /**
         * Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group.
         * <p>
         * If the NetworkType and VpcId is not specified, the same security group will be cloned. If NetworkType or VpcId is specified, only proper security group rules will be cloned.
         * <p>
         * @return {@code this}
         * @param sourceSecurityGroupId Property sourceSecurityGroupId: Source security group ID is used to copy properties to clone new security group. This parameter is required.
         */
        public Builder sourceSecurityGroupId(final com.aliyun.ros.cdk.core.IResolvable sourceSecurityGroupId) {
            this.props.sourceSecurityGroupId(sourceSecurityGroupId);
            return this;
        }

        /**
         * Property description: Description of the security group, [2, 256] characters.
         * <p>
         * Do not fill or empty, the default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the security group, [2, 256] characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the security group, [2, 256] characters.
         * <p>
         * Do not fill or empty, the default is empty.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the security group, [2, 256] characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property destinationRegionId: Clone security group to the specified region.
         * <p>
         * Default to current region.
         * <p>
         * @return {@code this}
         * @param destinationRegionId Property destinationRegionId: Clone security group to the specified region. This parameter is required.
         */
        public Builder destinationRegionId(final java.lang.String destinationRegionId) {
            this.props.destinationRegionId(destinationRegionId);
            return this;
        }
        /**
         * Property destinationRegionId: Clone security group to the specified region.
         * <p>
         * Default to current region.
         * <p>
         * @return {@code this}
         * @param destinationRegionId Property destinationRegionId: Clone security group to the specified region. This parameter is required.
         */
        public Builder destinationRegionId(final com.aliyun.ros.cdk.core.IResolvable destinationRegionId) {
            this.props.destinationRegionId(destinationRegionId);
            return this;
        }

        /**
         * Property networkType: Clone new security group as classic network type.
         * <p>
         * If the VpcId is specified, the value will be ignored.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: Clone new security group as classic network type. This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props.networkType(networkType);
            return this;
        }
        /**
         * Property networkType: Clone new security group as classic network type.
         * <p>
         * If the VpcId is specified, the value will be ignored.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: Clone new security group as classic network type. This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props.networkType(networkType);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param securityGroupName Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder securityGroupName(final java.lang.String securityGroupName) {
            this.props.securityGroupName(securityGroupName);
            return this;
        }
        /**
         * Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
         * <p>
         * @return {@code this}
         * @param securityGroupName Property securityGroupName: Display name of the security group, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'. This parameter is required.
         */
        public Builder securityGroupName(final com.aliyun.ros.cdk.core.IResolvable securityGroupName) {
            this.props.securityGroupName(securityGroupName);
            return this;
        }

        /**
         * Property securityGroupType: The type of the security group.
         * <p>
         * Valid values:
         * normal: basic security group
         * enterprise: advanced security group
         * <p>
         * @return {@code this}
         * @param securityGroupType Property securityGroupType: The type of the security group. This parameter is required.
         */
        public Builder securityGroupType(final java.lang.String securityGroupType) {
            this.props.securityGroupType(securityGroupType);
            return this;
        }
        /**
         * Property securityGroupType: The type of the security group.
         * <p>
         * Valid values:
         * normal: basic security group
         * enterprise: advanced security group
         * <p>
         * @return {@code this}
         * @param securityGroupType Property securityGroupType: The type of the security group. This parameter is required.
         */
        public Builder securityGroupType(final com.aliyun.ros.cdk.core.IResolvable securityGroupType) {
            this.props.securityGroupType(securityGroupType);
            return this;
        }

        /**
         * Property vpcId: Physical ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: Physical ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: Physical ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: Physical ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.SecurityGroupClone}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.SecurityGroupClone build() {
            return new com.aliyun.ros.cdk.ecs.SecurityGroupClone(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
